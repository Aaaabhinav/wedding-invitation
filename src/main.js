/**
 * Wedding Invitation Core Logic
 * Handles dynamic content population, envelope opening, scratch card,
 * particle animation, audio controller, and countdown timer.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Content from Config
  populateConfigData();

  // 2. Initialize Envelope Opening
  initEnvelopeInteraction();

  // 3. Initialize Interactive Scratch-To-Reveal Card
  initScratchCard();

  // 4. Initialize Real-Time Countdown Timer
  initCountdownTimer();

  // 5. Initialize Falling Petals & Botanical Canvas
  initFloatingParticles();

  // 6. Initialize Audio Controller
  initAudioPlayer();

  // 7. Initialize Hashtag Copy
  initHashtagCopy();
});

/* ==========================================================================
   1. POPULATE CONFIG DATA
   ========================================================================== */
function populateConfigData() {
  if (typeof WEDDING_CONFIG === 'undefined') return;

  const cfg = WEDDING_CONFIG;

  // Couple names & monograms
  document.querySelectorAll('.js-groom-name').forEach(el => el.textContent = cfg.groom.name);
  document.querySelectorAll('.js-bride-name').forEach(el => el.textContent = cfg.bride.name);
  document.querySelectorAll('.js-groom-parents').forEach(el => el.textContent = cfg.groom.parents);
  document.querySelectorAll('.js-groom-grandparents').forEach(el => el.textContent = cfg.groom.grandparents);
  document.querySelectorAll('.js-bride-parents').forEach(el => el.textContent = cfg.bride.parents);
  document.querySelectorAll('.js-bride-grandparents').forEach(el => el.textContent = cfg.bride.grandparents);
  document.querySelectorAll('.js-monogram').forEach(el => el.textContent = cfg.monogram);
  document.querySelectorAll('.js-wedding-date').forEach(el => el.textContent = cfg.weddingDateDisplay);
  document.querySelectorAll('.js-hashtag').forEach(el => el.textContent = cfg.hashtag);
  document.querySelectorAll('.js-venue-name').forEach(el => el.textContent = cfg.venue.name);
  document.querySelectorAll('.js-venue-address').forEach(el => el.textContent = cfg.venue.address);
  document.querySelectorAll('.js-host-family').forEach(el => el.textContent = cfg.hosts.families);
  document.querySelectorAll('.js-invited-by').forEach(el => el.textContent = cfg.hosts.cordiallyInvitedBy);
  document.querySelectorAll('.js-host-message').forEach(el => el.textContent = cfg.hosts.message);

  const mapsBtn = document.getElementById('btn-get-directions');
  if (mapsBtn) mapsBtn.href = cfg.venue.googleMapsUrl;

  // Render Wardrobe Guide
  renderWardrobeGuide(cfg.events);
}

function renderWardrobeGuide(events) {
  const container = document.getElementById('wardrobe-grid-container');
  if (!container || !events) return;

  container.innerHTML = events.map(ev => {
    const dotsHtml = (ev.dressCode.palette || []).map(color => 
      `<span class="color-dot" style="background-color: ${color};" title="${color}"></span>`
    ).join('');

    return `
      <div class="wardrobe-card">
        <div>
          <span class="wardrobe-event-name">${ev.title}</span>
          <h4 class="wardrobe-style-title">${ev.dressCode.title}</h4>
          <p class="wardrobe-desc">${ev.dressCode.description}</p>
        </div>
        <div class="color-palette-bar">
          ${dotsHtml}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   2. ENVELOPE INTERACTION & SOUND
   ========================================================================== */
function initEnvelopeInteraction() {
  const envelopeScreen = document.getElementById('envelope-screen');
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const openBtn = document.getElementById('btn-open-envelope');
  const mainInvitation = document.getElementById('main-invitation');

  if (!envelopeWrapper || !envelopeScreen) return;

  let isOpening = false;

  function triggerOpen() {
    if (isOpening) return;
    isOpening = true;

    // Trigger visual flap rotation
    envelopeWrapper.classList.add('open-anim');

    // Play subtle chime sound
    playChimeEffect();

    // Start background music
    if (window.weddingAudio) {
      window.weddingAudio.play().catch(() => {
        // Autoplay policy handled silently
      });
      updateAudioButtonUI(true);
    }

    setTimeout(() => {
      envelopeScreen.classList.add('opened');
      if (mainInvitation) {
        mainInvitation.scrollIntoView({ behavior: 'smooth' });
      }
    }, 900);
  }

  envelopeWrapper.addEventListener('click', triggerOpen);
  if (openBtn) openBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerOpen();
  });
}

/* ==========================================================================
   3. INTERACTIVE SCRATCH-TO-REVEAL CARD
   ========================================================================== */
function initScratchCard() {
  const canvas = document.getElementById('scratch-canvas');
  const quickRevealBtn = document.getElementById('btn-quick-reveal');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const box = canvas.parentElement;

  let isDrawing = false;
  let scratchedPixels = 0;
  let totalPixels = 0;
  let isRevealed = false;

  function resizeCanvas() {
    canvas.width = box.clientWidth || 380;
    canvas.height = box.clientHeight || 220;
    totalPixels = canvas.width * canvas.height;
    drawScratchCover();
  }

  function drawScratchCover() {
    // Elegant Golden Foil Shimmer
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#bf953f');
    grad.addColorStop(0.25, '#fcf6ba');
    grad.addColorStop(0.5, '#b38728');
    grad.addColorStop(0.75, '#fbf5b7');
    grad.addColorStop(1, '#aa771c');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle pattern overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        ctx.beginPath();
        ctx.arc(i, j, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Calligraphy Text on cover
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 16px "Cinzel", serif';
    ctx.fillStyle = '#500f21';
    ctx.fillText('✨ SCRATCH TO REVEAL ✨', canvas.width / 2, canvas.height / 2 - 12);

    ctx.font = '13px "Montserrat", sans-serif';
    ctx.fillStyle = '#6e1732';
    ctx.fillText('Swipe or tap to uncover our date', canvas.width / 2, canvas.height / 2 + 15);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function scratch(x, y) {
    if (isRevealed) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    checkScratchProgress();
  }

  function checkScratchProgress() {
    if (isRevealed) return;
    // Sample every 10th pixel for performance
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    const step = 40; // Sample step
    const length = imgData.data.length;

    for (let i = 3; i < length; i += step) {
      if (imgData.data[i] === 0) transparent++;
    }

    const percentage = (transparent / (length / step)) * 100;
    if (percentage > 38) {
      revealFully();
    }
  }

  function revealFully() {
    if (isRevealed) return;
    isRevealed = true;
    canvas.style.opacity = '0';
    setTimeout(() => {
      canvas.style.display = 'none';
      if (quickRevealBtn) quickRevealBtn.style.display = 'none';
    }, 500);
    spawnConfetti();
  }

  // Mouse / Touch Handlers
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  });

  window.addEventListener('mouseup', () => isDrawing = false);

  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  }, { passive: true });

  window.addEventListener('touchend', () => isDrawing = false);

  if (quickRevealBtn) {
    quickRevealBtn.addEventListener('click', revealFully);
  }
}

/* ==========================================================================
   4. REAL-TIME COUNTDOWN TIMER
   ========================================================================== */
function initCountdownTimer() {
  const targetDateStr = (typeof WEDDING_CONFIG !== 'undefined' && WEDDING_CONFIG.weddingDateISO)
    ? WEDDING_CONFIG.weddingDateISO
    : "2026-07-06T18:00:00+05:30";

  const targetDate = new Date(targetDateStr).getTime();

  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-minutes');
  const secsEl = document.getElementById('timer-seconds');

  if (!daysEl) return;

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. FLOATING FALLING PETALS & BOTANICAL CANVAS
   ========================================================================== */
function initFloatingParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const maxParticles = 30;
  const particleTypes = ['petal', 'leaf', 'sparkle'];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = Math.random() * 12 + 8;
      this.speedY = Math.random() * 1.5 + 0.8;
      this.speedX = Math.sin(Math.random() * Math.PI * 2) * 0.8;
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = (Math.random() - 0.5) * 0.04;
      this.type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      this.opacity = Math.random() * 0.6 + 0.3;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
      this.angle += this.angleSpeed;

      if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.opacity;

      if (this.type === 'petal') {
        // Soft pink rose petal
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (this.type === 'leaf') {
        // Sage green leaf
        ctx.fillStyle = '#86efac';
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(this.size * 0.7, 0, 0, this.size);
        ctx.quadraticCurveTo(-this.size * 0.7, 0, 0, -this.size);
        ctx.fill();
      } else {
        // Gold glitter star
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(loop);
  }

  loop();
}

/* ==========================================================================
   6. AUDIO CONTROLLER WITH SYNTH FALLBACK
   ========================================================================== */
function initAudioPlayer() {
  const toggleBtn = document.getElementById('btn-audio-toggle');
  const icon = document.getElementById('audio-icon');
  const tooltip = document.getElementById('audio-tooltip');

  const audioSrc = (typeof WEDDING_CONFIG !== 'undefined' && WEDDING_CONFIG.audio) 
    ? WEDDING_CONFIG.audio.src 
    : 'assets/audio/music.mp3';

  const audio = new Audio(audioSrc);
  audio.loop = true;
  audio.volume = 0.7;
  window.weddingAudio = audio;

  let isPlaying = false;
  let synthLoopId = null;

  function toggle() {
    if (isPlaying) {
      audio.pause();
      if (synthLoopId) clearInterval(synthLoopId);
      isPlaying = false;
      updateAudioButtonUI(false);
    } else {
      audio.play().then(() => {
        isPlaying = true;
        updateAudioButtonUI(true);
      }).catch(() => {
        // If MP3 file not found yet, use melodic Indian royal flute/chime synthesis
        isPlaying = true;
        synthLoopId = startMelodicChimes();
        updateAudioButtonUI(true);
      });
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggle);
  }
}

function updateAudioButtonUI(playing) {
  const toggleBtn = document.getElementById('btn-audio-toggle');
  const icon = document.getElementById('audio-icon');
  const tooltip = document.getElementById('audio-tooltip');

  if (!toggleBtn) return;

  if (playing) {
    toggleBtn.classList.add('playing');
    if (icon) icon.textContent = '🔊';
    if (tooltip) tooltip.textContent = 'Mute Music';
  } else {
    toggleBtn.classList.remove('playing');
    if (icon) icon.textContent = '🔇';
    if (tooltip) tooltip.textContent = 'Play Music';
  }
}

// Gentle royal sitar/flute synth harmonic chords if user has not placed MP3 yet
function playChimeEffect() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + idx * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 0.85);
    });
  } catch (e) {
    // AudioContext fallback
  }
}

function startMelodicChimes() {
  playChimeEffect();
  return setInterval(playChimeEffect, 8000);
}

/* ==========================================================================
   7. HASHTAG COPY TO CLIPBOARD
   ========================================================================== */
function initHashtagCopy() {
  const btn = document.getElementById('btn-copy-hashtag');
  const toast = document.getElementById('hashtag-toast');

  if (!btn) return;

  btn.addEventListener('click', () => {
    const text = (typeof WEDDING_CONFIG !== 'undefined' && WEDDING_CONFIG.hashtag)
      ? WEDDING_CONFIG.hashtag
      : '#SwituKiWedding';

    navigator.clipboard.writeText(text).then(() => {
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      }
    });
  });
}

function spawnConfetti() {
  // Sparkle burst effect
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = (50 + (Math.random() - 0.5) * 40) + 'vw';
    sparkle.style.top = (50 + (Math.random() - 0.5) * 40) + 'vh';
    sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.transition = 'all 1s ease-out';
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(0)`;
      sparkle.style.opacity = '0';
    }, 20);

    setTimeout(() => sparkle.remove(), 1100);
  }
}
