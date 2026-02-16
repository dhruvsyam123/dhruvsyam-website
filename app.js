// ── Media Data ──

const MEDIA_DATA = [
    { title: 'Young Stalin', subtitle: 'Simon Sebag Montefiore', image: 'assets/media/young-stalin.jpg', type: 'book', url: 'https://www.amazon.co.uk/s?k=Young+Stalin+Simon+Sebag+Montefiore' },
    { title: 'Oppenheimer', subtitle: '2023', image: 'assets/media/oppenheimer.jpg', type: 'film', url: 'https://www.imdb.com/title/tt15398776/' },
    { title: 'Continuum', subtitle: 'John Mayer', image: 'assets/media/continuum.jpg', type: 'music', url: 'https://open.spotify.com/search/Continuum+John+Mayer' },
    { title: 'Industry', subtitle: 'HBO', image: 'assets/media/industry.jpg', type: 'film', url: 'https://www.imdb.com/title/tt11216260/' },
    { title: 'The Rest is History', subtitle: 'Tom Holland & Dominic Sandbrook', image: 'assets/media/rest-is-history.jpg', type: 'podcast', url: 'https://open.spotify.com/search/The+Rest+is+History+podcast' },
    { title: 'Ordinary Men', subtitle: 'Christopher Browning', image: 'assets/media/ordinary-men.jpg', type: 'book', url: 'https://www.amazon.co.uk/s?k=Ordinary+Men+Christopher+Browning' },
    { title: 'The 1975', subtitle: 'The 1975', image: 'assets/media/the-1975.jpg', type: 'music', url: 'https://open.spotify.com/search/The+1975' },
    { title: 'The Holdovers', subtitle: '2023', image: 'assets/media/holdovers.jpg', type: 'film', url: 'https://www.imdb.com/title/tt14849194/' },
    { title: 'Dominion', subtitle: 'Tom Holland', image: 'assets/media/dominion.jpg', type: 'book', url: 'https://www.amazon.co.uk/s?k=Dominion+Tom+Holland' },
    { title: 'One Piece', subtitle: 'Anime', image: 'assets/media/one-piece.jpg', type: 'film', url: 'https://www.imdb.com/title/tt0388629/' },
    { title: "All That You Can't Leave Behind", subtitle: 'U2', image: 'assets/media/u2-atyclb.jpg', type: 'music', url: 'https://open.spotify.com/search/All+That+You+Cant+Leave+Behind+U2' },
    { title: 'The Gulag Archipelago', subtitle: 'Aleksandr Solzhenitsyn', image: 'assets/media/gulag-archipelago.jpg', type: 'book', url: 'https://www.amazon.co.uk/s?k=Gulag+Archipelago+Solzhenitsyn' },
    { title: 'The WAN Show', subtitle: 'Linus Tech Tips', image: 'assets/media/wan-show.jpg', type: 'podcast', url: 'https://open.spotify.com/search/The+WAN+Show' },
    { title: 'The Seldom Seen Kid', subtitle: 'Elbow', image: 'assets/media/elbow.jpg', type: 'music', url: 'https://open.spotify.com/search/The+Seldom+Seen+Kid+Elbow' },
    { title: 'The Office', subtitle: 'US', image: 'assets/media/the-office.jpg', type: 'film', url: 'https://www.imdb.com/title/tt0386676/' },
    { title: 'The Brothers Karamazov', subtitle: 'Fyodor Dostoevsky', image: 'assets/media/brothers-karamazov.jpg', type: 'book', url: 'https://www.amazon.co.uk/s?k=Brothers+Karamazov+Dostoevsky' },
    { title: 'Institute of Bad Loving', subtitle: 'Sophie Holloway', image: 'assets/media/sophie-holloway.jpg', type: 'music', url: 'https://open.spotify.com/search/Institute+of+Bad+Loving+Sophie+Holloway' },
];

// ── Work Data ──

const WORK_DATA = [
    {
        category: 'Software Engineering',
        items: [
            {
                title: 'MAGIC AI',
                caption: 'Computer vision exercise tracking, WhatsApp AI coach, and data engineering.',
                description: 'I work at Magic AI three days a week. The whole fitness CV industry, us included, was white-labelling open-source pose models and hard-coding form rules for each exercise. It didn\'t scale. I forked MediaPipe, rewrote parts of the pipeline in C, and trained an autoencoder plus random forest classifier on proprietary customer pose data, after building the data collection infrastructure from scratch. I also discovered our device\'s NPU was sitting completely idle, so I quantised the model to run on it and pushed inference from roughly 8 FPS to 25.\n\nSeparately, I built a WhatsApp AI coaching bot on Twilio and Gemini in a single week over the Christmas break. It now handles over 1,000 daily messages and accounts for 10% of our total sales in less than a month.\n\nOn the data side, I set up a PostgreSQL database and built a real-time stream from DynamoDB so the whole team can query our data themselves through Metabase. I also fixed our Mixpanel tracking, which was riddled with inconsistencies, and built the retention dashboards that got the company thinking product-first.\n\nI also own the full hardware engineering lifecycle: managing repairs, coordinating with international suppliers, and driving hardware-informed product improvements.',
                date: null,
                link: 'https://youtube.com/shorts/ptUl84q0cdg',
                linkType: 'youtube',
                image: 'assets/logos/magic.png',
                detailMedia: [
                    { type: 'youtube-short', url: 'https://youtube.com/shorts/ptUl84q0cdg' },
                    { type: 'image', url: 'assets/work/magic-whatsapp-1.png' },
                ],
            },
            {
                title: 'Bank of America',
                caption: 'Spring internship in trading. Monte Carlo swaption pricing.',
                description: 'Selected from 3,000 applicants for a spring internship in the trading division. Built a Monte Carlo simulation for interest rate swaption pricing using bootstrapped yield curves and stochastic rate paths.',
                date: null,
                link: null,
                linkType: null,
                image: 'assets/logos/bofa.png',
            },
            {
                title: 'Emissary Partners',
                caption: 'Sole engineer at a boutique advisory. AI-automated research and client acquisition.',
                description: 'At the time, Emissary was a four-person family office advisory. I was the sole engineer and fully automated their research and client acquisition process, essentially building a version of deep research tooling before any of those products existed. This was very early ChatGPT, so most of the agentic patterns I put together weren\'t really a thing yet.\n\nThe firm pays for access to private databases, so I built scrapers to pull from those sources, summarisation pipelines to distil the output, and separate bots that would fact-check and assemble one-pagers for prospective clients. I also built a bunch of legal tooling and scripts to access and process protected documents they needed for due diligence.\n\nTheir analyst estimated it saved them around 20 hours a week of manual work.',
                date: null,
                link: null,
                linkType: null,
                image: 'assets/logos/emissary.png',
            },
            {
                title: 'Amazon Hackathon',
                caption: 'Yoga tracking device for exercise at home during the pandemic.',
                description: 'Built a browser-based yoga tracking device designed for people exercising at home during the pandemic. We were finalists at an Amazon hackathon and won funding plus three-month mentorship to build out the prototype.\n\nThe hardware was a 3D-printed casing around a Raspberry Pi, with a cheap motor and a handmade fan for cooling. On the software side I optimised a Three.js computer vision library to get pose estimation running well in the browser. We also built mood classification to help users track their mental health improving over time, since the whole thing was designed around isolation.\n\nThis was the start of my interest in computer vision and what eventually led to my work at MAGIC AI.',
                date: null,
                link: 'https://youtu.be/y7PDCqrbS4c',
                linkType: 'youtube',
                image: 'assets/logos/amazon.png',
                detailMedia: [
                    { type: 'youtube', url: 'https://youtu.be/y7PDCqrbS4c' },
                    { type: 'image', url: 'assets/work/prototype.png', caption: 'Testing out a prototype in Year 11 maths' },
                ],
            },
            {
                title: 'Softwire',
                caption: 'Built features on an NHS mental health platform in React at 16.',
                description: 'Softwire is a software consultancy. I interned there when I was 16, working on an NHS-commissioned mental health support platform built in React. I implemented patient-facing features including questionnaire flows and resource pages, and worked across the stack to connect these to the existing API layer. Also picked up accessibility improvements to meet NHS Digital service standards.',
                date: null,
                link: null,
                linkType: null,
                image: 'assets/logos/softwire.png',
            },
        ]
    },
    {
        category: 'Writing',
        items: [
            {
                title: 'Mind the Price Gap  - Roads and Food Market Integration',
                caption: 'Do Chinese-funded roads actually integrate food markets in Sub-Saharan Africa? Using price data from 338 markets across Malawi and Zambia, I find they do  - and the sweet spot is 100–200 km apart.',
                description: 'TL;DR: Road upgrades cut food price gaps by 4.2% within a year, but only for markets at the right distance.\n\nFood markets in Sub-Saharan Africa are deeply fragmented  - prices for identical goods can vary wildly between nearby towns. I studied whether 14 Chinese-funded road projects in Malawi and Zambia actually fix this. Using high-frequency World Food Programme price data and a staggered difference-in-differences design, I show that upgrading major transport corridors leads to rapid and persistent price convergence.\n\nThe effects are non-monotonic with distance: no impact on markets under 50 km (already integrated) or over 200 km (still too far), but a 5.8% drop in dispersion for pairs 100–200 km apart. Roads unlock medium-distance trade that was previously too costly to be profitable.\n\nI also built an interactive simulator where you can draw hypothetical roads on a map and see predicted impacts on market integration.',
                date: null,
                link: 'https://drive.google.com/file/d/1nWCpSoVeZn6IlvjGKF4TRRpZta2kE6lx/view?usp=sharing',
                linkType: 'pdf',
                image: 'assets/logos/imperial.png',
            },
            {
                title: 'Modelling AI\'s Impact on UK Employment',
                caption: 'Awarded £1,000 research funding  - placed 2nd out of 10,000 applications. Built a quantitative model to predict AI\'s impact on the UK labour market over the next 30 years.',
                description: 'Awarded £1,000 research funding  - placed 2nd out of 10,000 applications. A high school research project on the impact of AI on the UK labour market, and what first got me interested in AI safety through my work in effective altruism.\n\nWith every industrial revolution there\'s been a huge lag period where jobs are lost and people suffer from structural change. The project builds an economic model  - starting from a modified Cobb-Douglas production function  - to predict what that lag looks like with AI, sector by sector.\n\nUsing O*NET occupational data and McKinsey automation estimates, the model accounts for AI\'s exponential self-improvement (an endogeneity most existing models miss) and applies sector-specific productivity parameters to forecast output and employment shifts across the UK economy over 30 years.',
                date: null,
                link: 'https://www.youtube.com/watch?v=5C5QAf8szKM',
                linkType: 'youtube',
                image: 'assets/logos/nontrivial.svg',
            },
            {
                title: 'Does Unilateral Free Trade Serve a Nation\'s Economic Interest?',
                caption: 'Placed 3rd out of ~30,000 applicants in the John Locke Institute Essay Competition. Argues UFT benefits developed economies but can devastate developing ones without established domestic industries.',
                description: 'TL;DR: Unilateral free trade is great for developed economies with strong industries, but can devastate developing countries that open up too early.\n\nPlaced 3rd out of ~30,000 applicants in the John Locke Institute Essay Competition. The case for UFT is compelling \u2014 cheaper imports, greater competition, less political protectionism \u2014 but it breaks down for developing nations. Cuba\'s open trade led to economic colonialism, and Britain, Germany, and the US all used high tariffs during industrialisation.\n\nDraws on evidence from the Corn Laws to South Korean protectionism to argue the infant industry case holds when countries have an underlying comparative advantage \u2014 but otherwise, UFT is the simpler path to growth.',
                date: null,
                link: 'https://drive.google.com/file/d/1bauLc9T5TpzDKh5Q9byhG0cNyi1mhR1f/view',
                linkType: 'pdf',
                image: 'assets/logos/johnlocke.png',
            },
            {
                title: 'IEA Economics Essay',
                caption: 'Why did economists predict deflation when COVID actually brought inflation? Written for the Institute of Economic Affairs, one of the UK\'s most influential economic think tanks.',
                description: 'TL;DR: Governments printed too much, people spent it all at once, and supply couldn\'t keep up.\n\nWhy did economists predict deflation when COVID actually brought inflation? Written for the Institute of Economic Affairs, one of the UK\'s most influential economic think tanks.\n\nGovernments printed trillions in stimulus  - far more than 2008  - but this time people actually spent it. Pent-up demand exploded just as supply chains collapsed, creating the perfect inflation storm. Unlike the financial crisis, where QE barely moved CPI, the artificial preservation of employment meant consumers had both the money and the confidence to spend in droves. The war in Ukraine poured fuel on an already overheating economy.',
                date: null,
                link: 'https://docs.google.com/document/d/1wlM2wJvyzdkjUSlSl26M2ZXKI_JBIdXpGE2FVgLQSt4/edit',
                linkType: 'pdf',
                image: 'assets/logos/iea.png',
            },
        ]
    },
    {
        category: 'Social Media',
        items: [
            {
                title: 'Social Media Business',
                caption: 'Built a video editing business during COVID. Made \u00A330k, grew creators from 100k to 1M+ subs.',
                description: 'During COVID, quite a few ex-convicts were released or needed income and started producing genuinely fascinating true crime podcasts, but most had very little tech literacy.\n\nI started out editing videos and clipping podcasts in Adobe, but quickly evolved into full social media management: growing channels, landing brand deals, and advising on content strategy. I grew creators from around 100k YouTube subscribers to over 1M, and built TikTok accounts from zero to 1M+ followers.\n\nI set myself the target of making \u00A330k within the first 2.5 years, enough to fully fund university and justify the decision over a degree apprenticeship offer I had. I hit that target, hired one part-time editor through Fiverr to keep up with demand, and worked with around 10 creators in total.',
                date: null,
                link: 'https://www.tiktok.com/@shaunattwood11/video/7101015607138700549',
                linkType: 'tiktok',
                image: 'assets/logos/shorts.png',
                detailMedia: [
                    { type: 'tiktok', url: 'https://www.tiktok.com/@shaunattwood11/video/7101015607138700549', caption: '5M+ views \u00b7 700K+ likes' },
                    { type: 'tiktok', url: 'https://www.tiktok.com/@shaunattwood/video/7529492089399250198', caption: '222K views' },
                    { type: 'youtube', url: 'https://www.youtube.com/watch?v=cNzhkOVGAe0&t=291s', caption: 'Full podcast I edited and clipped \u00b7 650K views' },
                ],
            },
        ]
    },
    {
        category: 'Guitar',
        items: [
            {
                title: 'National Youth Guitar Ensemble',
                caption: 'Four years performing at the highest level of youth classical guitar in the UK. Concerts to crowds of 1,000+, toured abroad in Spain.',
                description: 'I was a member of the National Youth Guitar Ensemble for four years, performing classical guitar at the highest level in the country. We played concerts to audiences of over a thousand people and toured abroad in Spain.\n\nWhat I loved most was the concentration. We would practise eight hours a day for a week straight, and the level of focus required was more intense than anything else I\'ve done. There was something about locking in on a single goal with that kind of discipline that I haven\'t really found anywhere else.',
                date: null,
                link: 'https://youtu.be/CtMcNMPMH9I',
                linkType: 'youtube',
                image: 'assets/logos/nyge.png',
                detailMedia: [
                    { type: 'youtube', url: 'https://youtu.be/CtMcNMPMH9I', caption: 'Shaky recording of one of our performances. I\'m in the middle with a blue shirt.' },
                ],
            },
            {
                title: 'Hertfordshire Music Festival: Millicent Ward Rose Bowl',
                caption: 'First guitarist in 80 years of the festival\'s history to win the overall award. Usually dominated by piano and violin.',
                description: 'The Millicent Ward Rose Bowl is the top prize at the Hillingdon Music Festival. In all of its 80-year history, the winner had always been a pianist or a more traditional instrument like violin. I was the first guitarist to win it.',
                date: null,
                link: null,
                linkType: null,
                image: 'assets/logos/herts-festival.png',
                detailMedia: [
                    { type: 'image', url: 'assets/work/millicent-ward.png' },
                ],
            },
        ]
    },
];

// ── Work Modal State ──

let allWorkItems = [];
let currentWorkIndex = 0;
let workModalOpen = false;
let savedScrollY = 0;

// ── Config ──

const HOLD_DURATION = 1500;
const SCROLL_TOTAL = 500;
const SMOOTH_SPEED = 6;
const TILT_MAX = 2;
const HEADER_HEIGHT = 96;
const CONTENT_SCROLL_START = 0.3;  // morph progress when content starts scrolling in
const CONTENT_SCROLL_AMOUNT = 200; // how much content scrolls during morph

// ── State ──

const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
let targetNumber = 0;
let correctSince = null;
let verified = false;
let camera = null;
let handsModel = null;
let handsReady = false;
let phase = 'gate';         // 'gate' | 'card' | 'morphing' | 'content'
let targetProgress = 0;
let currentProgress = 0;
let lastTimestamp = 0;
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

    renderWall();
    renderWork();

    if (isMobile) {
        // Skip gate entirely on mobile  - go straight to card
        gate.style.display = 'none';
        verified = true;
        cardOverlay.classList.add('visible');
        setTimeout(() => card.classList.add('visible'), 80);
        setTimeout(() => {
            card.classList.add('interactive');
            phase = 'card';
            setupMobileCardTap();
        }, 400);
    } else {
        checkboxArea.addEventListener('click', startChallenge);
        skipLink.addEventListener('click', transitionToLanding);
        preloadMediaPipe();
    }

    requestAnimationFrame(tick);
}

// ── Preload MediaPipe in background ──

function preloadMediaPipe() {
    try {
        handsModel = new Hands({
            locateFile: (file) =>
                `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`,
        });
        handsModel.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.6, minTrackingConfidence: 0.5 });
        handsModel.onResults(onResults);

        // Warm up the model with a tiny canvas to trigger WASM + model download
        const warmup = document.createElement('canvas');
        warmup.width = 1;
        warmup.height = 1;
        handsModel.send({ image: warmup }).then(() => {
            handsReady = true;
        }).catch(() => {
            // Warmup may fail but model files still download  - that's fine
            handsReady = true;
        });
    } catch (e) {
        // MediaPipe script not loaded yet  - will fall back to on-demand loading
    }
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

        if (handsReady && handsModel) {
            statusPill.textContent = 'Show your hand...';
            startCamera(handsModel);
        } else {
            statusPill.textContent = 'Loading hand detection...';
            waitForModel();
        }
    } catch (err) {
        statusPill.textContent = 'Camera denied  - use skip below';
        statusPill.classList.add('wrong');
    }
}

function waitForModel() {
    const check = setInterval(() => {
        if (verified) { clearInterval(check); return; }
        if (handsReady && handsModel) {
            clearInterval(check);
            statusPill.textContent = 'Show your hand...';
            startCamera(handsModel);
        }
    }, 100);
}

function startCamera(hands) {
    camera = new Camera(webcamEl, {
        onFrame: async () => { if (!verified) await hands.send({ image: webcamEl }); },
        width: 640, height: 480,
    });
    camera.start();
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
        statusPill.textContent = `${count} finger${count === 1 ? '' : 's'}  - hold it...`;
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
            window.addEventListener('keydown', onKeyDown);
        }, 1300);
    }, { once: true });
}

// ── Mobile: tap/swipe card to go straight to content ──

function setupMobileCardTap() {
    let touchStartY = 0;
    let touchStartTime = 0;

    cardOverlay.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
    }, { passive: true });

    cardOverlay.addEventListener('touchend', (e) => {
        if (phase !== 'card') return;

        // Don't transition if user tapped a link (email, LinkedIn, etc.)
        const tappedEl = e.target.closest('a');
        if (tappedEl) return;

        const dy = touchStartY - (e.changedTouches[0]?.clientY || touchStartY);
        const dt = Date.now() - touchStartTime;

        // Trigger on swipe up (>30px) or quick tap (<300ms, minimal movement)
        if (dy > 30 || (dt < 300 && Math.abs(dy) < 10)) {
            mobileTransitionToContent();
        }
    }, { passive: true });
}

function mobileTransitionToContent() {
    phase = 'morphing';

    // Immediately stop overlay from intercepting touches
    cardOverlay.style.pointerEvents = 'none';

    // Fade out card overlay
    cardOverlay.style.transition = 'opacity 0.4s ease';
    cardOverlay.style.opacity = '0';

    // Show header and content
    header.classList.add('visible');
    document.body.classList.add('scrollable');
    contentEl.classList.add('visible');
    contentEl.style.opacity = '1';
    contentEl.style.transform = '';

    setTimeout(() => {
        cardOverlay.style.display = 'none';
        cardOverlay.style.transition = '';
        cardOverlay.classList.remove('visible');
        cardOverlay.style.pointerEvents = '';
        phase = 'content';
        window.scrollTo(0, 0);
    }, 400);
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
    ].filter(([from, to]) => from && to);
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

    // Fade ghosts (photo, tagline, separator)  - apply computed styles so they match
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
            <a class="media-item" href="${item.url}" target="_blank" rel="noopener" style="--delay: ${delay}s">
                <div class="media-cover">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="media-info">
                    <span class="media-title">${item.title}</span>
                    <span class="media-subtitle">${item.subtitle}</span>
                </div>
            </a>
        `;
    }).join('');

    container.innerHTML = html;
}

// ── Render Work Section ──

function getLinkIcon(linkType) {
    const icons = {
        youtube: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
        github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
        pdf: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        external: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    };
    return icons[linkType] || icons.external;
}

function getThumbIcon(linkType) {
    const icons = {
        youtube: '<svg class="work-thumb-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
        github: '<svg class="work-thumb-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
        pdf: '<svg class="work-thumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    };
    return icons[linkType] || '<svg class="work-thumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>';
}

function renderWork() {
    const container = document.getElementById('workContent');
    if (!container) return;

    // Build flat index of all work items
    allWorkItems = [];
    WORK_DATA.forEach(category => {
        category.items.forEach(item => {
            allWorkItems.push({ ...item, category: category.category });
        });
    });

    let itemIndex = 0;
    const html = WORK_DATA.map(category => {
        const itemsHtml = category.items.map(item => {
            const delay = itemIndex * 0.04;
            const idx = itemIndex;
            itemIndex++;

            const thumb = item.image
                ? `<div class="work-thumb"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>`
                : `<div class="work-thumb">${getThumbIcon(item.linkType)}</div>`;

            const cardText = item.caption || item.description;
            const desc = cardText
                ? `<span class="work-desc">${cardText}</span>`
                : '';

            const dateBadge = item.date
                ? `<span class="work-date">${item.date}</span>`
                : '';

            const privateBadge = item.private
                ? '<span class="work-badge">in development</span>'
                : '';

            return `
                <div class="work-item" style="--delay: ${delay}s" data-work-index="${idx}">
                    ${thumb}
                    <div class="work-text">
                        <span class="work-title">${item.title}</span>
                        ${desc}
                        <div class="work-meta">
                            ${dateBadge}
                            ${privateBadge}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <h3 class="work-category">${category.category}</h3>
            <div class="work-list">${itemsHtml}</div>
        `;
    }).join('');

    container.innerHTML = html;

    // Attach click handlers
    container.querySelectorAll('.work-item[data-work-index]').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
            openWorkModal(parseInt(el.dataset.workIndex, 10));
        });
    });
}

// ── Work Modal ──

function getLinkLabel(linkType) {
    const labels = {
        youtube: 'View on YouTube',
        tiktok: 'View on TikTok',
        github: 'View on GitHub',
        pdf: 'View PDF',
    };
    return labels[linkType] || 'Visit';
}

function getYouTubeId(url) {
    // youtube.com/shorts/ID
    const shorts = url.match(/\/shorts\/([^?&/]+)/);
    if (shorts) return shorts[1];
    // youtu.be/ID
    const short = url.match(/youtu\.be\/([^?&]+)/);
    if (short) return short[1];
    // youtube.com/watch?v=ID
    const long = url.match(/[?&]v=([^?&]+)/);
    if (long) return long[1];
    return null;
}

function getTikTokId(url) {
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : null;
}

function getEmbed(item) {
    if (!item.link) return '';

    if (item.linkType === 'youtube') {
        const id = getYouTubeId(item.link);
        if (id) {
            return `<div class="work-detail-embed work-detail-embed-video">
                <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`;
        }
    }

    if (item.linkType === 'tiktok') {
        const id = getTikTokId(item.link);
        if (id) {
            return `<div class="work-detail-embed work-detail-embed-tiktok">
                <iframe src="https://www.tiktok.com/player/v1/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`;
        }
    }

    if (item.linkType === 'pdf') {
        let embedUrl = item.link;
        // Google Drive: /view → /preview
        if (embedUrl.includes('drive.google.com/file/d/')) {
            embedUrl = embedUrl.replace(/\/view.*$/, '/preview');
        }
        // Google Docs: /edit → /preview
        else if (embedUrl.includes('docs.google.com/document/d/')) {
            embedUrl = embedUrl.replace(/\/edit.*$/, '/preview');
        }
        // Dropbox: use raw content in iframe
        else if (embedUrl.includes('dropbox.com')) {
            embedUrl = embedUrl.replace(/\?.*$/, '') + '?raw=1';
        }
        const isGoogleDoc = embedUrl.includes('docs.google.com/document/');
        const openLink = isGoogleDoc
            ? `<a class="embed-open-link" href="${item.link}" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                <span>Open original</span>
            </a>`
            : '';
        return `<div class="work-detail-embed work-detail-embed-pdf">
            <iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
            ${openLink}
        </div>`;
    }

    // GitHub or other: external link button
    return `<a class="work-detail-link" href="${item.link}" target="_blank" rel="noopener">${getLinkIcon(item.linkType)}<span>${getLinkLabel(item.linkType)}</span></a>`;
}

function renderWorkDetail(index) {
    const item = allWorkItems[index];
    if (!item) return;

    const content = document.getElementById('workModalContent');

    const category = `<div class="work-detail-category">${item.category}</div>`;
    const title = `<h2 class="work-detail-title">${item.title}</h2>`;

    const desc = item.description
        ? `<div class="work-detail-desc">${item.description.split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('')}</div>`
        : '';

    const image = item.detailImage
        ? `<figure class="work-detail-figure"><img class="work-detail-image" src="${item.detailImage}" alt="${item.title}"><figcaption class="work-detail-caption">${item.detailImageCaption || ''}</figcaption></figure>`
        : '';

    let meta = '';
    if (item.date || item.private) {
        const datePart = item.date ? `<span class="work-detail-date">${item.date}</span>` : '';
        const badgePart = item.private ? '<span class="work-detail-badge">in development</span>' : '';
        meta = `<div class="work-detail-meta">${datePart}${badgePart}</div>`;
    }

    // Build media showcase if detailMedia exists
    let mediaShowcase = '';
    if (item.detailMedia && item.detailMedia.length > 0) {
        const shortCount = item.detailMedia.filter(m => m.type === 'youtube-short' || m.type === 'tiktok').length;
        const hasShort = shortCount > 0;
        const hasRegularVideo = item.detailMedia.some(m => m.type === 'youtube');
        let showcaseClass = 'work-detail-showcase';
        if (shortCount >= 2) showcaseClass += ' showcase-multi-short';
        else if (!hasShort) showcaseClass += ' showcase-equal';
        const mediaItems = item.detailMedia.map(m => {
            if (m.type === 'youtube-short') {
                const id = getYouTubeId(m.url);
                return `<div class="showcase-item showcase-video-short">
                    <div class="showcase-video-wrapper">
                        <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    ${m.caption ? `<span class="showcase-caption">${m.caption}</span>` : ''}
                </div>`;
            } else if (m.type === 'tiktok') {
                const id = getTikTokId(m.url);
                return `<div class="showcase-item showcase-video-short">
                    <div class="showcase-video-wrapper showcase-tiktok-wrapper">
                        <iframe src="https://www.tiktok.com/player/v1/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    ${m.caption ? `<span class="showcase-caption">${m.caption}</span>` : ''}
                </div>`;
            } else if (m.type === 'youtube') {
                const id = getYouTubeId(m.url);
                return `<div class="showcase-item showcase-video-landscape">
                    <div class="showcase-video-landscape-wrapper">
                        <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    ${m.caption ? `<span class="showcase-caption">${m.caption}</span>` : ''}
                </div>`;
            } else {
                return `<div class="showcase-item showcase-image-landscape">
                    <div class="showcase-image-wrapper">
                        <img src="${m.url}" alt="${m.caption || ''}" loading="lazy" onerror="this.parentElement.classList.add('showcase-placeholder')">
                    </div>
                    ${m.caption ? `<span class="showcase-caption">${m.caption}</span>` : ''}
                </div>`;
            }
        }).join('');
        mediaShowcase = `<div class="${showcaseClass}">${mediaItems}</div>`;
    }

    const embed = (!item.detailMedia) ? getEmbed(item) : '';
    const isPdfEmbed = item.linkType === 'pdf' && item.link;

    const mobileNav = `<div class="work-modal-mobile-nav">
        <button class="work-modal-arrow work-modal-mobile-prev" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="work-modal-arrow work-modal-mobile-next" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
    </div>`;

    if (isPdfEmbed) {
        content.innerHTML = `
            <div class="work-detail-split">
                <div class="work-detail-split-text">
                    ${category}${title}${desc}${image}${meta}
                </div>
                <div class="work-detail-split-embed">
                    ${embed}
                </div>
            </div>
            ${mobileNav}`;
    } else {
        content.innerHTML = category + title + desc + mediaShowcase + image + meta + embed + mobileNav;
    }

    // Attach mobile nav handlers
    const mobilePrev = content.querySelector('.work-modal-mobile-prev');
    const mobileNext = content.querySelector('.work-modal-mobile-next');
    if (mobilePrev) mobilePrev.addEventListener('click', () => navigateWork(-1));
    if (mobileNext) mobileNext.addEventListener('click', () => navigateWork(1));
}

function openWorkModal(index) {
    currentWorkIndex = index;
    workModalOpen = true;

    renderWorkDetail(index);

    const modal = document.getElementById('workModal');
    const item = allWorkItems[index];
    const isPdf = item.linkType === 'pdf' && item.link;
    const hasShowcase = item.detailMedia && item.detailMedia.length > 0;
    modal.classList.toggle('wide', isPdf || hasShowcase);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (isMobile) {
        savedScrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.width = '100%';
    }

    window.addEventListener('keydown', onWorkModalKeyDown);
}

function closeWorkModal() {
    workModalOpen = false;
    const modal = document.getElementById('workModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (isMobile) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, savedScrollY);
    }

    window.removeEventListener('keydown', onWorkModalKeyDown);
}

function navigateWork(delta) {
    currentWorkIndex = (currentWorkIndex + delta + allWorkItems.length) % allWorkItems.length;
    const item = allWorkItems[currentWorkIndex];
    const isPdf = item.linkType === 'pdf' && item.link;
    const hasShowcase = item.detailMedia && item.detailMedia.length > 0;
    document.getElementById('workModal').classList.toggle('wide', isPdf || hasShowcase);
    renderWorkDetail(currentWorkIndex);
}

function onWorkModalKeyDown(e) {
    if (e.key === 'Escape') {
        closeWorkModal();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateWork(-1);
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateWork(1);
    }
}

// Set up modal event listeners
(function initWorkModal() {
    const modal = document.getElementById('workModal');
    if (!modal) return;

    modal.querySelector('.work-modal-backdrop').addEventListener('click', closeWorkModal);
    modal.querySelector('.work-modal-prev').addEventListener('click', () => navigateWork(-1));
    modal.querySelector('.work-modal-next').addEventListener('click', () => navigateWork(1));
    const closeBtn = document.getElementById('workModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeWorkModal);

    // Swipe left/right to navigate between work items on mobile
    let swipeStartX = 0;
    let swipeStartY = 0;
    const modalContent = document.getElementById('workModalContent');

    modalContent.addEventListener('touchstart', (e) => {
        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
    }, { passive: true });

    modalContent.addEventListener('touchend', (e) => {
        if (!workModalOpen) return;
        const dx = swipeStartX - (e.changedTouches[0]?.clientX || swipeStartX);
        const dy = swipeStartY - (e.changedTouches[0]?.clientY || swipeStartY);

        // Only trigger if horizontal swipe is dominant (>50px) and not a vertical scroll
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx > 0) {
                navigateWork(1);  // swipe left → next
            } else {
                navigateWork(-1); // swipe right → prev
            }
        }
    }, { passive: true });
})();

// ── Header Name → Return to Card ──

function returnToCard() {
    if (phase !== 'content') return;
    phase = 'returning'; // prevent scroll/morph interference

    // Immediately stop page scrolling and go to top
    document.body.classList.remove('scrollable');
    window.scrollTo(0, 0);

    // Fade out header and content together
    header.style.transition = 'opacity 0.35s ease';
    contentEl.style.transition = 'opacity 0.35s ease';
    header.style.opacity = '0';
    contentEl.style.opacity = '0';

    setTimeout(() => {
        // Clean up header and content
        header.classList.remove('visible');
        header.style.transition = '';
        header.style.opacity = '';
        contentEl.classList.remove('visible');
        contentEl.style.transition = '';
        contentEl.style.opacity = '';
        contentEl.style.transform = '';

        // Restore card overlay (was display:none from completeMorphForward)
        cardOverlay.style.display = '';
        cardOverlay.style.pointerEvents = '';
        cardOverlay.style.background = '';
        cardOverlay.classList.add('visible');

        // Restore card
        card.style.opacity = '';
        card.style.visibility = '';
        card.classList.add('visible');

        // Reset scroll cue
        if (scrollCue) scrollCue.style.opacity = '';

        // Re-enable interaction after card is visible
        setTimeout(() => {
            card.classList.add('interactive');
            tiltEnabled = true;
            phase = 'card';
        }, 100);
    }, 350);
}

document.querySelector('.header-name').addEventListener('click', returnToCard);
document.querySelector('.header-name').style.cursor = 'pointer';

// ── Particle Constellation ──

function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w, h;
    const particles = [];
    const PARTICLE_COUNT = 90;
    const CONNECTION_DIST = 140;
    const MOUSE_RADIUS = 200;
    let mouse = { x: -9999, y: -9999 };
    let running = true;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        if (phase === 'gate') {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 1.8 + 0.8,
        });
    }

    function getExclusionRect() {
        const box = document.querySelector('.gate-content');
        if (!box) return null;
        const r = box.getBoundingClientRect();
        const pad = 20;
        return { x: r.left - pad, y: r.top - pad, w: r.width + pad * 2, h: r.height + pad * 2 };
    }

    function drawParticles() {
        if (phase !== 'gate') { running = false; return; }
        requestAnimationFrame(drawParticles);

        ctx.clearRect(0, 0, w, h);
        const exc = getExclusionRect();

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
        }

        const mx = mouse.x;
        const my = mouse.y;

        function inExclusion(x, y) {
            return exc && x > exc.x && x < exc.x + exc.w && y > exc.y && y < exc.y + exc.h;
        }

        // Draw all particles (always visible)
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            if (inExclusion(a.x, a.y)) continue;
            const dxM = a.x - mx;
            const dyM = a.y - my;
            const distMouse = Math.sqrt(dxM * dxM + dyM * dyM);
            const nearMouse = distMouse < MOUSE_RADIUS;
            const mouseAlpha = nearMouse ? 1 - distMouse / MOUSE_RADIUS : 0;

            // Connections (only near mouse)
            if (nearMouse) {
                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist > CONNECTION_DIST) continue;

                    if (inExclusion(b.x, b.y)) continue;
                    const bDist = Math.sqrt((b.x - mx) ** 2 + (b.y - my) ** 2);
                    if (bDist > MOUSE_RADIUS) continue;

                    const lineAlpha = (1 - dist / CONNECTION_DIST) * mouseAlpha * 0.8;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(80, 75, 65, ${lineAlpha})`;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            }

            // Dot
            const dotAlpha = nearMouse ? 0.4 + mouseAlpha * 0.5 : 0.35;
            const dotR = nearMouse ? a.r + mouseAlpha * 2.5 : a.r;
            ctx.beginPath();
            ctx.arc(a.x, a.y, dotR, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 95, 85, ${dotAlpha})`;
            ctx.fill();
        }
    }

    requestAnimationFrame(drawParticles);
}

// ── Go ──

init();
initCardTilt();
initParticles();
