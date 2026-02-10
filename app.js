// ── Media Data ──

const MEDIA_DATA = [
    { title: 'Young Stalin', subtitle: 'Simon Sebag Montefiore', image: 'assets/media/young-stalin.jpg' },
    { title: 'Oppenheimer', subtitle: '2023', image: 'assets/media/oppenheimer.jpg' },
    { title: 'Continuum', subtitle: 'John Mayer', image: 'assets/media/continuum.jpg' },
    { title: 'Industry', subtitle: 'HBO', image: 'assets/media/industry.jpg' },
    { title: 'The Rest is History', subtitle: 'Tom Holland & Dominic Sandbrook', image: 'assets/media/rest-is-history.jpg' },
    { title: 'Ordinary Men', subtitle: 'Christopher Browning', image: 'assets/media/ordinary-men.jpg' },
    { title: 'The 1975', subtitle: 'The 1975', image: 'assets/media/the-1975.jpg' },
    { title: 'The Holdovers', subtitle: '2023', image: 'assets/media/holdovers.jpg' },
    { title: 'Dominion', subtitle: 'Tom Holland', image: 'assets/media/dominion.jpg' },
    { title: 'One Piece', subtitle: 'Anime', image: 'assets/media/one-piece.jpg' },
    { title: "All That You Can't Leave Behind", subtitle: 'U2', image: 'assets/media/u2-atyclb.jpg' },
    { title: 'The Gulag Archipelago', subtitle: 'Aleksandr Solzhenitsyn', image: 'assets/media/gulag-archipelago.jpg' },
    { title: 'The WAN Show', subtitle: 'Linus Tech Tips', image: 'assets/media/wan-show.jpg' },
    { title: 'The Seldom Seen Kid', subtitle: 'Elbow', image: 'assets/media/elbow.jpg' },
    { title: 'The Office', subtitle: 'US', image: 'assets/media/the-office.jpg' },
    { title: 'The Brothers Karamazov', subtitle: 'Fyodor Dostoevsky', image: 'assets/media/brothers-karamazov.jpg' },
    { title: 'Institute of Bad Loving', subtitle: 'Sophie Holloway', image: 'assets/media/sophie-holloway.jpg' },
];

// ── Config ──

const HOLD_DURATION = 1500;
const SCROLL_TOTAL = 500;
const SMOOTH_SPEED = 6;
const TILT_MAX = 4;
const HEADER_HEIGHT = 96;
const CONTENT_SCROLL_START = 0.3;  // morph progress when content starts scrolling in
const CONTENT_SCROLL_AMOUNT = 200; // how much content scrolls during morph

// ── State ──

let targetNumber = 0;
let correctSince = null;
let verified = false;
let camera = null;
let phase = 'gate';         // 'gate' | 'card' | 'morphing' | 'content'
let targetProgress = 0;
let currentProgress = 0;
let lastTimestamp = 0;
let touchLastY = 0;
let tiltEnabled = false;

// ── Morph State ──

let morphData = null;        // measured positions
let morphLayer = null;       // DOM container for ghosts
let morphShell = null;       // shell ghost (card bg → header bar)
let morphGhosts = [];        // element ghosts (name, links, icons)
let morphFades = [];         // fade-out ghosts (photo, tagline, sep)
let morphAccent = null;      // accent line inside shell

// ── Elements ──

const gate = document.getElementById('gate');
const cardOverlay = document.getElementById('cardOverlay');
const card = document.getElementById('card');
const scrollCue = document.getElementById('scrollCue');
const header = document.getElementById('header');
const contentEl = document.getElementById('content');
const checkboxArea = document.getElementById('checkboxArea');
const checkbox = document.getElementById('checkbox');
const challenge = document.getElementById('challenge');
const targetEl = document.getElementById('targetNumber');
const pluralEl = document.getElementById('plural');
const webcamEl = document.getElementById('webcam');
const overlayEl = document.getElementById('overlay');
const statusPill = document.getElementById('statusPill');
const progressFill = document.getElementById('progressFill');
const skipLink = document.getElementById('skipLink');

// ── Helpers ──

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

// Delayed progress: starts at `delay`, reaches 1 at `delay + duration`
function delayedP(p, delay, duration) {
    return clamp((p - delay) / (duration || (1 - delay)), 0, 1);
}

// ── Init ──

function init() {
    targetNumber = Math.floor(Math.random() * 4) + 2;
    targetEl.textContent = targetNumber;
    pluralEl.textContent = targetNumber === 1 ? '' : 's';

    checkboxArea.addEventListener('click', startChallenge);
    skipLink.addEventListener('click', transitionToLanding);

    renderWall();
    requestAnimationFrame(tick);
}

// ── Gate: Challenge ──

async function startChallenge() {
    checkboxArea.removeEventListener('click', startChallenge);
    checkboxArea.style.cursor = 'default';
    challenge.classList.add('visible');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user', width: 640, height: 480 }
        });
        webcamEl.srcObject = stream;
        await webcamEl.play();
        overlayEl.width = webcamEl.videoWidth || 640;
        overlayEl.height = webcamEl.videoHeight || 480;
        statusPill.textContent = 'Loading hand detection...';
        initMediaPipe();
    } catch (err) {
        statusPill.textContent = 'Camera denied — use skip below';
        statusPill.classList.add('wrong');
    }
}

function initMediaPipe() {
    const hands = new Hands({
        locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`,
    });
    hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.6, minTrackingConfidence: 0.5 });
    hands.onResults(onResults);

    camera = new Camera(webcamEl, {
        onFrame: async () => { if (!verified) await hands.send({ image: webcamEl }); },
        width: 640, height: 480,
    });
    camera.start();
    statusPill.textContent = 'Show your hand...';
}

function onResults(results) {
    if (verified) return;
    const ctx = overlayEl.getContext('2d');
    ctx.clearRect(0, 0, overlayEl.width, overlayEl.height);

    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
        statusPill.textContent = 'Show your hand...';
        statusPill.className = 'status-pill';
        correctSince = null;
        progressFill.style.width = '0%';
        return;
    }

    const landmarks = results.multiHandLandmarks[0];
    const handedness = results.multiHandedness[0];
    drawLandmarks(ctx, landmarks);
    const count = countFingers(landmarks, handedness);

    if (count === targetNumber) {
        if (!correctSince) correctSince = Date.now();
        const elapsed = Date.now() - correctSince;
        const progress = Math.min(elapsed / HOLD_DURATION, 1);
        progressFill.style.width = `${progress * 100}%`;
        statusPill.textContent = `${count} finger${count === 1 ? '' : 's'} — hold it...`;
        statusPill.className = 'status-pill correct';
        if (progress >= 1) onSuccess();
    } else {
        correctSince = null;
        progressFill.style.width = '0%';
        statusPill.textContent = `Detected ${count} finger${count === 1 ? '' : 's'}`;
        statusPill.className = 'status-pill wrong';
    }
}

function drawLandmarks(ctx, landmarks) {
    const w = overlayEl.width, h = overlayEl.height;
    ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
    ctx.lineWidth = 1.5;
    const connections = [
        [0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],
        [13,17],[17,18],[18,19],[19,20],[0,17],
    ];
    for (const [a, b] of connections) {
        ctx.beginPath();
        ctx.moveTo(landmarks[a].x * w, landmarks[a].y * h);
        ctx.lineTo(landmarks[b].x * w, landmarks[b].y * h);
        ctx.stroke();
    }
    for (const lm of landmarks) {
        ctx.beginPath();
        ctx.arc(lm.x * w, lm.y * h, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(34, 197, 94, 0.8)';
        ctx.fill();
    }
}

function countFingers(landmarks, handedness) {
    let count = 0;
    const isRightHand = handedness.label === 'Right';
    if (isRightHand) { if (landmarks[4].x < landmarks[3].x) count++; }
    else { if (landmarks[4].x > landmarks[3].x) count++; }
    const tips = [8, 12, 16, 20], pips = [6, 10, 14, 18];
    for (let i = 0; i < 4; i++) { if (landmarks[tips[i]].y < landmarks[pips[i]].y) count++; }
    return count;
}

function onSuccess() {
    verified = true;
    if (camera) camera.stop();
    const stream = webcamEl.srcObject;
    if (stream) stream.getTracks().forEach(t => t.stop());
    checkbox.classList.add('checked');
    setTimeout(transitionToLanding, 600);
}

// ── Transition: Gate → Card ──

function transitionToLanding() {
    if (!verified) {
        verified = true;
        if (camera) camera.stop();
        const stream = webcamEl.srcObject;
        if (stream) stream.getTracks().forEach(t => t.stop());
    }

    cardOverlay.classList.add('visible');  // Show overlay immediately behind gate
    gate.classList.add('leaving');

    gate.addEventListener('transitionend', () => {
        gate.style.display = 'none';
        setTimeout(() => card.classList.add('visible'), 80);

        setTimeout(() => {
            card.classList.add('interactive');
            phase = 'card';
            tiltEnabled = true;
            window.addEventListener('wheel', onWheel, { passive: false });
            window.addEventListener('touchstart', onTouchStart, { passive: true });
            window.addEventListener('touchmove', onTouchMove, { passive: false });
            window.addEventListener('keydown', onKeyDown);
        }, 1300);
    }, { once: true });
}

// ═══════════════════════════════════════════
// ── Morph System: scroll-driven FLIP morph
// ═══════════════════════════════════════════

function getMorphPairs() {
    return [
        [card.querySelector('.card-name'), header.querySelector('.header-name')],
        [card.querySelector('a[href^="mailto"]'), header.querySelector('.header-email')],
        [card.querySelector('a[href^="tel"]'), header.querySelector('.header-phone')],
        [card.querySelector('a[aria-label="LinkedIn"]'), header.querySelector('a[aria-label="LinkedIn"]')],
    ];
}

// Measure all positions for card state and header state
function measureMorph() {
    const pairs = getMorphPairs();

    // Card measurements
    const cardRect = card.getBoundingClientRect();
    const cardMeasurements = pairs.map(([from]) => {
        const rect = from.getBoundingClientRect();
        const cs = getComputedStyle(from);
        return {
            left: rect.left, top: rect.top, width: rect.width, height: rect.height,
            fontSize: parseFloat(cs.fontSize),
            fontFamily: cs.fontFamily,
            fontWeight: cs.fontWeight,
            color: cs.color,
            letterSpacing: cs.letterSpacing,
        };
    });

    // Fade element measurements (capture computed styles so clones match)
    const fadeSelectors = ['.card-photo', '.card-tagline', '.card-links-sep'];
    const fadeMeasurements = fadeSelectors.map(sel => {
        const el = card.querySelector(sel);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return {
            el, left: rect.left, top: rect.top, width: rect.width, height: rect.height,
            fontSize: cs.fontSize, fontFamily: cs.fontFamily, fontWeight: cs.fontWeight,
            color: cs.color, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing,
            background: cs.backgroundColor, borderRadius: cs.borderRadius,
        };
    }).filter(Boolean);

    // Header measurements (temporarily make measurable)
    header.style.cssText = 'visibility: hidden; opacity: 0; pointer-events: none;';
    header.classList.add('visible');
    header.offsetHeight; // force layout

    const headerMeasurements = pairs.map(([, to]) => {
        const rect = to.getBoundingClientRect();
        const cs = getComputedStyle(to);
        return {
            left: rect.left, top: rect.top, width: rect.width, height: rect.height,
            fontSize: parseFloat(cs.fontSize),
            color: cs.color,
        };
    });

    // Restore header
    header.style.cssText = '';
    header.classList.remove('visible');

    morphData = {
        cardRect: { left: cardRect.left, top: cardRect.top, width: cardRect.width, height: cardRect.height },
        headerRect: { left: 0, top: 0, width: window.innerWidth, height: HEADER_HEIGHT },
        pairs: cardMeasurements.map((cm, i) => ({
            source: pairs[i][0],
            card: cm,
            header: headerMeasurements[i],
        })),
        fades: fadeMeasurements,
    };
}

// Create ghost elements for the morph animation
function createGhosts() {
    morphLayer = document.createElement('div');
    morphLayer.className = 'morph-layer';
    document.body.appendChild(morphLayer);

    // Shell ghost (card background morphing into header bar)
    morphShell = document.createElement('div');
    morphShell.className = 'morph-shell';
    morphShell.style.cssText = `
        left: ${morphData.cardRect.left}px;
        top: ${morphData.cardRect.top}px;
        width: ${morphData.cardRect.width}px;
        height: ${morphData.cardRect.height}px;
        background: #fff;
        border-radius: 8px;
        border: 1px solid rgba(0,0,0,0.06);
        box-shadow: 0 1px 2px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.03), 0 16px 56px rgba(0,0,0,0.06);
    `;

    morphAccent = document.createElement('div');
    morphAccent.className = 'morph-shell-accent';
    morphShell.appendChild(morphAccent);
    morphLayer.appendChild(morphShell);

    // Element ghosts (fly from card → header positions)
    morphGhosts = morphData.pairs.map(({ source, card: cm }) => {
        const ghost = source.cloneNode(true);
        ghost.className = 'morph-ghost';
        ghost.style.cssText += `
            left: ${cm.left}px;
            top: ${cm.top}px;
            font-family: ${cm.fontFamily};
            font-size: ${cm.fontSize}px;
            font-weight: ${cm.fontWeight};
            color: ${cm.color};
            letter-spacing: ${cm.letterSpacing};
            line-height: ${cm.height}px;
        `;
        morphLayer.appendChild(ghost);
        return ghost;
    });

    // Fade ghosts (photo, tagline, separator) — apply computed styles so they match
    morphFades = morphData.fades.map((item) => {
        const ghost = item.el.cloneNode(true);
        ghost.className = 'morph-fade';
        ghost.style.cssText += `
            left: ${item.left}px;
            top: ${item.top}px;
            width: ${item.width}px;
            height: ${item.height}px;
            font-size: ${item.fontSize};
            font-family: ${item.fontFamily};
            font-weight: ${item.fontWeight};
            color: ${item.color};
            line-height: ${item.lineHeight};
            letter-spacing: ${item.letterSpacing};
            background: ${item.background};
            border-radius: ${item.borderRadius};
        `;
        morphLayer.appendChild(ghost);
        return ghost;
    });

    // Hide real card completely
    card.style.opacity = '0';
    card.style.visibility = 'hidden';
}

// Remove all ghost elements
function cleanupGhosts() {
    if (morphLayer) {
        morphLayer.remove();
        morphLayer = null;
    }
    morphShell = null;
    morphAccent = null;
    morphGhosts = [];
    morphFades = [];
}

// Apply morph animation at a given progress (0 = card, 1 = header)
function applyMorphAnimation(p) {
    if (!morphData || !morphShell) return;

    const e = easeOutQuart(p);

    // ── Shell: card shape → header bar ──
    const cr = morphData.cardRect;
    const hr = morphData.headerRect;

    morphShell.style.left = lerp(cr.left, hr.left, e) + 'px';
    morphShell.style.top = lerp(cr.top, hr.top, e) + 'px';
    morphShell.style.width = lerp(cr.width, hr.width, e) + 'px';
    morphShell.style.height = lerp(cr.height, hr.height, e) + 'px';
    morphShell.style.borderRadius = lerp(8, 0, e) + 'px';

    // Shadow fades out, frosted glass fades in
    const shadowAlpha = 1 - e;
    morphShell.style.boxShadow = `
        0 1px 2px rgba(0,0,0,${(0.03 * shadowAlpha).toFixed(3)}),
        0 4px 16px rgba(0,0,0,${(0.03 * shadowAlpha).toFixed(3)}),
        0 16px 56px rgba(0,0,0,${(0.06 * shadowAlpha).toFixed(3)})
    `;

    // Fade out shell in the last 20% of animation to avoid visual jump on cleanup
    const shellFade = p > 0.8 ? 1 - (p - 0.8) / 0.2 : 1;
    morphShell.style.opacity = shellFade;

    morphShell.style.background = `rgba(${lerp(255, 246, e)}, ${lerp(255, 245, e)}, ${lerp(255, 241, e)}, ${lerp(1, 0.88, e)})`;
    morphShell.style.backdropFilter = `blur(${lerp(0, 14, e)}px)`;
    morphShell.style.WebkitBackdropFilter = `blur(${lerp(0, 14, e)}px)`;
    morphShell.style.borderBottom = `1px solid rgba(0,0,0,${lerp(0.06, 0.05, e)})`;

    // Accent line fades
    if (morphAccent) {
        morphAccent.style.opacity = Math.max(0, 1 - e * 2.5);
    }

    // ── Element ghosts: fly with staggered timing ──
    const delays = [0, 0.04, 0.07, 0.10];
    // Fade out ghosts in the last 15% so real header shows through
    const ghostFade = p > 0.85 ? 1 - (p - 0.85) / 0.15 : 1;
    morphData.pairs.forEach(({ card: cm, header: hm }, i) => {
        const ghost = morphGhosts[i];
        if (!ghost) return;

        const dp = easeOutCubic(delayedP(p, delays[i], 0.85));
        ghost.style.left = lerp(cm.left, hm.left, dp) + 'px';
        ghost.style.top = lerp(cm.top, hm.top, dp) + 'px';
        ghost.style.opacity = ghostFade;

        const scale = lerp(1, hm.fontSize / cm.fontSize, dp);
        ghost.style.transform = `scale(${scale})`;

        // Color transition
        if (cm.color !== hm.color) {
            ghost.style.color = dp < 0.5 ? cm.color : hm.color;
        }
    });

    // ── Fade ghosts: quick fade (image fades out by ~25% progress) ──
    morphFades.forEach(ghost => {
        ghost.style.opacity = Math.max(0, 1 - e * 4);
    });

    // ── Overlay background fades completely ──
    const overlayAlpha = 1 - e;
    cardOverlay.style.background = `rgba(246, 245, 241, ${Math.max(0, overlayAlpha)})`;

    // ── Show real header early so it's visible as ghosts fade (only when going forward) ──
    const goingForward = targetProgress >= currentProgress;
    if (p > 0.8 && goingForward) {
        if (!header.classList.contains('visible')) {
            header.classList.add('visible');
        }
    }

    // ── Scroll cue ──
    if (scrollCue) {
        scrollCue.style.opacity = Math.max(0, 1 - p / 0.06);
    }

    // ── Content scroll: slides up as morph progresses ──
    if (contentEl) {
        const contentP = clamp((p - CONTENT_SCROLL_START) / (1 - CONTENT_SCROLL_START), 0, 1);
        const contentE = easeOutCubic(contentP);
        const yOffset = lerp(CONTENT_SCROLL_AMOUNT, 0, contentE);
        contentEl.style.transform = `translateY(${yOffset}px)`;
        // Fade in gently as it scrolls up
        contentEl.style.opacity = lerp(0.3, 1, contentE);
    }
}

// ── Phase Transitions ──

function startMorphForward() {
    phase = 'morphing';
    tiltEnabled = false;
    card.classList.remove('interactive');

    measureMorph();
    createGhosts();

    // Make content visible and scrollable during morph
    // Start with low opacity, will fade in as morph progresses past CONTENT_SCROLL_START
    document.body.classList.add('scrollable');
    contentEl.classList.add('visible');
    contentEl.style.opacity = '0.3';
    contentEl.style.transform = `translateY(${CONTENT_SCROLL_AMOUNT}px)`;

    targetProgress = 0;
    currentProgress = 0;
}

function completeMorphForward() {
    phase = 'content';

    // Reset scroll position immediately
    window.scrollTo(0, 0);

    // Hide card and overlay immediately (morph layer covers everything)
    card.style.opacity = '0';
    card.style.visibility = 'hidden';
    cardOverlay.style.opacity = '0';
    cardOverlay.style.pointerEvents = 'none';

    // Fade out morph layer then clean up
    if (morphLayer) {
        const layerToRemove = morphLayer;
        layerToRemove.style.opacity = '0';
        setTimeout(() => {
            layerToRemove.remove();
            cardOverlay.style.display = 'none';
            cardOverlay.style.opacity = '';
        }, 150);
    } else {
        cardOverlay.style.display = 'none';
        cardOverlay.style.opacity = '';
    }
    morphLayer = null;
    morphShell = null;
    morphAccent = null;
    morphGhosts = [];
    morphFades = [];

    header.classList.add('visible');
    header.style.opacity = '';
    header.style.pointerEvents = '';

    // Content already visible and in position from morph
    contentEl.style.transform = '';
    contentEl.style.opacity = '';

    // Ensure scroll happens after layout recalculates
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
}

function startMorphReverse() {
    phase = 'morphing';

    // Show card overlay behind everything, make card measurable
    cardOverlay.style.display = '';
    cardOverlay.classList.add('visible');
    card.style.opacity = '1';
    card.style.visibility = 'hidden';
    card.offsetHeight; // force layout

    // Measure positions while header is still visible
    measureMorph();

    // Create ghosts and position at header state FIRST
    createGhosts();
    targetProgress = 1;
    currentProgress = 1;
    applyMorphAnimation(1);

    // NOW hide real header (ghosts cover it seamlessly)
    header.classList.remove('visible');

    // Card stays hidden behind ghosts
    card.style.visibility = '';
    card.style.opacity = '0';
}

function completeMorphReverse() {
    phase = 'card';

    // Restore card immediately (morph layer still covers)
    card.style.opacity = '';
    card.style.visibility = '';
    card.classList.add('visible');
    card.classList.add('interactive');
    tiltEnabled = true;

    // Restore overlay
    cardOverlay.style.background = '';
    cardOverlay.style.display = '';
    cardOverlay.classList.add('visible');

    // Fade out morph layer then clean up
    if (morphLayer) {
        const layerToRemove = morphLayer;
        layerToRemove.style.opacity = '0';
        setTimeout(() => layerToRemove.remove(), 150);
    }
    morphLayer = null;
    morphShell = null;
    morphAccent = null;
    morphGhosts = [];
    morphFades = [];

    // Reset scroll cue
    if (scrollCue) scrollCue.style.opacity = '';

    // Reset content and scrolling
    document.body.classList.remove('scrollable');
    contentEl.style.transform = '';
    contentEl.style.opacity = '';
}

// ── Scroll Input ──

function onWheel(e) {
    lastScrollTime = performance.now();
    if (phase === 'card' && e.deltaY > 0) {
        e.preventDefault();
        startMorphForward();
        targetProgress = clamp(e.deltaY / SCROLL_TOTAL, 0, 1);
    } else if (phase === 'morphing') {
        e.preventDefault();
        // Only allow forward scrolling during morph
        if (e.deltaY > 0) {
            targetProgress = clamp(targetProgress + e.deltaY / SCROLL_TOTAL, 0, 1);
        }
    }
    // Content phase: normal scrolling, no reverse morph
}

function onTouchStart(e) {
    touchLastY = e.touches[0].clientY;
}

function onTouchMove(e) {
    lastScrollTime = performance.now();
    const y = e.touches[0].clientY;
    const delta = touchLastY - y; // positive = scroll down
    touchLastY = y;

    if (phase === 'card' && delta > 3) {
        e.preventDefault();
        startMorphForward();
        targetProgress = clamp(delta / SCROLL_TOTAL, 0, 1);
    } else if (phase === 'morphing') {
        e.preventDefault();
        // Only allow forward scrolling during morph
        if (delta > 0) {
            targetProgress = clamp(targetProgress + delta / SCROLL_TOTAL, 0, 1);
        }
    }
    // Content phase: normal scrolling, no reverse morph
}

function onKeyDown(e) {
    lastScrollTime = performance.now();
    if (phase === 'card' && ['ArrowDown', ' ', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        startMorphForward();
        targetProgress = 0.12;
    } else if (phase === 'morphing') {
        // Only allow forward progression during morph
        if (['ArrowDown', ' ', 'PageDown'].includes(e.key)) {
            e.preventDefault();
            targetProgress = clamp(targetProgress + 0.12, 0, 1);
        }
    }
}

// ── Animation Loop ──

let lastScrollTime = 0;
const SNAP_THRESHOLD = 0.55;  // Start snapping when past this point
const SNAP_DELAY = 150;       // ms of no scrolling before snap kicks in

function tick(ts) {
    requestAnimationFrame(tick);

    if (!lastTimestamp) { lastTimestamp = ts; return; }
    const dt = (ts - lastTimestamp) / 1000;
    lastTimestamp = ts;

    if (phase !== 'morphing') return;

    // Snap to end when past threshold and user stopped scrolling
    const timeSinceScroll = ts - lastScrollTime;
    if (timeSinceScroll > SNAP_DELAY && targetProgress > SNAP_THRESHOLD) {
        targetProgress = 1;
    }

    // Smooth exponential interpolation (frame-rate independent)
    // Use gentler smoothing when reversing (going toward card)
    // Accelerate more when close to the end
    const isReversing = targetProgress < currentProgress;
    let speed = isReversing ? SMOOTH_SPEED * 0.7 : SMOOTH_SPEED;
    if (currentProgress > 0.7 && targetProgress === 1) {
        speed *= 1.5;  // Accelerate in final stretch
    }
    const factor = 1 - Math.exp(-speed * dt);
    currentProgress += (targetProgress - currentProgress) * factor;

    if (Math.abs(currentProgress - targetProgress) < 0.001) {
        currentProgress = targetProgress;
    }

    applyMorphAnimation(currentProgress);

    // Check for completion
    if (currentProgress >= 0.995 && targetProgress >= 0.995) {
        completeMorphForward();
    }
    if (currentProgress <= 0.005 && targetProgress <= 0.005) {
        completeMorphReverse();
    }
}

// ── Card Tilt Effect ──

function initCardTilt() {
    card.addEventListener('mousemove', (e) => {
        if (!tiltEnabled || phase !== 'card') return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * TILT_MAX * 2;
        const rotateX = (0.5 - y) * TILT_MAX * 2;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        if (!tiltEnabled || phase !== 'card') return;
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
    });
}

// ── Render Media Wall ──

function renderWall() {
    const container = document.getElementById('mediaWall');
    if (!container) return;

    const html = MEDIA_DATA.map((item, i) => {
        const delay = i * 0.04;

        return `
            <div class="media-item" style="--delay: ${delay}s">
                <div class="media-cover">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="media-info">
                    <span class="media-title">${item.title}</span>
                    <span class="media-subtitle">${item.subtitle}</span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// ── Go ──

init();
initCardTilt();
