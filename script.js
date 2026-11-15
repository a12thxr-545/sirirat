/**
 * ══════════════════════════════════════════════════════════════
 * HBD SPECIAL EXPERIENCE — SCRIPT CONTROLLER
 * Zero Emoji Policy. Tactile Interaction & Smooth Flow.
 * ══════════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────────────────────────
     1. STATE & DATA CONFIGURATION
  ──────────────────────────────────────────────────────────── */
  const DIALOGUE_SCRIPT = [
    { from: 'arthur', text: 'วันนี้วันที่ 20 รู้มั้ยวันพนวันอะไร' },
    { from: 't',      text: '....' },
    { from: 'arthur', text: 'วันเสาร์ไง 555' },
    { from: 'arthur', text: 'บ้ารึป่าวเจ้าของเองน่าจะรู้นะ' },
    { from: 'arthur', text: 'อะลองเปิดดู' }
  ];

  // รูปภาพ 4 ภาพ พร้อมข้อความจริง
  const MEMORY_CARDS = [
    {
      src: 'png/IMG_7428.jpg',
      label: 'Memory 01',
      caption: 'ผมจำได้ว่าผมฟอลพี่ไปก่อนแล้วพี่ reply story มาวันที่ 10 กุมภา ก็ตกใจนะแบบฟอลไปแล้วพี่รีพายมา 5555'
    },
    {
      src: 'png/IMG_7638.jpg',
      label: 'Memory 02',
      caption: 'แล้วจากนั้นเราก็คุยกันมาเรื่อยใช่มั้ยยอมรับว่าผมมีความสุขมากๆ 5555 น่าจะดูออก แล้วมีวันนึงเหมือน deeptalk แล้วพี่บอกว่า "การที่เราแยกย้ายกันไปเติบโตแล้วกลับมาเจอกันในเวอร์ชันที่ดีกว่ามันอาจจะดีก็ได้แล้วมันก็ไม่ง่ายที่โลกเหวี่ยงมาเจอกันอะไรแบบนี้" ก็แบบทำให้เออรู้สึกดีมากๆ'
    },
    {
      src: 'png/IMG_7639.jpg',
      label: 'Memory 03',
      caption: 'ถึงตอนนี้ก็ยังรู้สึกดีอยู่แต่ตอนนี้อาจจะเปลี่ยนไปนิดหน่อยคือผมแค่อยากให้พี่มีความสุขมากๆเยอะๆเลยไม่อยากให้เครียดไม่อยากให้เหนื่อยเลยขอแค่นี้ก็พอ'
    },
    {
      src: 'png/IMG_7660.jpg',
      label: 'Memory 04',
      caption: 'สุดท้ายนี้ในอนาคตไม่รู้ว่าเราสองคนจะเป็นยังไงแต่อยากบอกแค่อย่างเดียวคือให้พี่มีความสุขเยอะไม่เจ็บไม่ป่วยไม่เหนื่อยผมเป็นกำลังใจให้ตลอดนะวันนี้อาจจะไม่ใช่วันเกิดพี่จริงๆแต่ถือว่าอวยพรล่วงหน้านะ 555'
    }
  ];

  /* ────────────────────────────────────────────────────────────
     2. DOM REFERENCES
  ──────────────────────────────────────────────────────────── */
  const scenes = {
    envelope: document.getElementById('scene-envelope'),
    chat:     document.getElementById('scene-chat'),
    gift:     document.getElementById('scene-gift'),
    gallery:  document.getElementById('scene-gallery'),
    wish:     document.getElementById('scene-wish')
  };

  // Envelope Elements
  const envelopeTrigger = document.getElementById('envelope-trigger');
  const openEnvelopeBtn = document.getElementById('open-envelope-btn');

  // Chat Elements
  const chatArea       = document.getElementById('chat-dialogue-area');
  const chatTapGuide   = document.getElementById('chat-tap-guide');
  const chatGuideText  = document.getElementById('chat-guide-text');
  const giftProceedBtn = document.getElementById('gift-proceed-btn');

  // Gift Elements
  const giftBoxUnit = document.getElementById('gift-box-unit');

  // Audio Player Elements
  const audioEl       = document.getElementById('hbd-audio');
  const globalPlayer  = document.getElementById('global-player');
  const vinylDisc     = document.getElementById('vinyl-disc');
  const audioToggle   = document.getElementById('audio-toggle-btn');
  const iconPlay      = audioToggle.querySelector('.icon-play');
  const iconPause     = audioToggle.querySelector('.icon-pause');
  const trackBar      = document.getElementById('player-track-bar');

  // Gallery Elements
  const cardStackEl = document.getElementById('postit-card-stack');
  const dotsTrackEl = document.getElementById('gallery-dots');
  const prevBtn     = document.getElementById('gallery-prev-btn');
  const nextBtn     = document.getElementById('gallery-next-btn');
  const counterEl   = document.getElementById('gallery-counter');

  // Wish Navigation Element
  const wishBackBtn = document.getElementById('wish-back-btn');

  /* ────────────────────────────────────────────────────────────
     3. SCENE ROUTING SYSTEM
  ──────────────────────────────────────────────────────────── */
  function switchScene(targetSceneKey) {
    Object.values(scenes).forEach(scene => {
      scene.classList.remove('active');
    });

    const target = scenes[targetSceneKey];
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ────────────────────────────────────────────────────────────
     4. SCENE 1: ENVELOPE CONTROLLER
  ──────────────────────────────────────────────────────────── */
  let envelopeOpened = false;

  function handleOpenEnvelope() {
    if (envelopeOpened) return;
    envelopeOpened = true;

    envelopeTrigger.classList.add('opened');
    openEnvelopeBtn.disabled = true;

    // Trigger golden-rose light burst from the envelope
    const rect = envelopeTrigger.getBoundingClientRect();
    triggerSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 45, 'stars');

    setTimeout(() => {
      switchScene('chat');
      initChatDialogue();
    }, 850);
  }

  openEnvelopeBtn.addEventListener('click', handleOpenEnvelope);
  envelopeTrigger.addEventListener('click', handleOpenEnvelope);

  /* ────────────────────────────────────────────────────────────
     5. SCENE 2: LINE-STYLE DIALOGUE CONTROLLER
  ──────────────────────────────────────────────────────────── */
  let currentMessageIndex = 0;
  let isMessageAnimating = false;

  function initChatDialogue() {
    if (currentMessageIndex === 0) {
      advanceDialogue();
    }
  }

  function advanceDialogue() {
    if (isMessageAnimating) return;

    if (currentMessageIndex >= DIALOGUE_SCRIPT.length) {
      chatTapGuide.classList.add('hidden');
      giftProceedBtn.classList.remove('hidden');
      return;
    }

    const messageData = DIALOGUE_SCRIPT[currentMessageIndex];
    currentMessageIndex++;

    if (messageData.from === 'arthur') {
      showTypingIndicator(() => {
        renderMessageRow(messageData);
        updateChatGuideStatus();
      });
    } else {
      renderMessageRow(messageData);
      updateChatGuideStatus();
    }
  }

  function showTypingIndicator(callback) {
    isMessageAnimating = true;

    const typingRow = document.createElement('div');
    typingRow.className = 'chat-row other appear';
    typingRow.id = 'temp-typing-indicator';
    typingRow.innerHTML = `
      <div class="typing-pill">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;

    chatArea.appendChild(typingRow);
    scrollChatToBottom();

    setTimeout(() => {
      const el = document.getElementById('temp-typing-indicator');
      if (el) el.remove();
      isMessageAnimating = false;
      callback();
    }, 650);
  }

  function renderMessageRow(msg) {
    const row = document.createElement('div');
    const isOther = msg.from === 'arthur';
    row.className = `chat-row ${isOther ? 'other' : 'self'}`;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timestamp = `${hours}:${minutes}`;

    row.innerHTML = `
      <div class="chat-bubble">${escapeHtml(msg.text)}</div>
      <span class="chat-time">${timestamp}</span>
    `;

    chatArea.appendChild(row);

    requestAnimationFrame(() => {
      row.classList.add('appear');
      scrollChatToBottom();
    });
  }

  function updateChatGuideStatus() {
    if (currentMessageIndex >= DIALOGUE_SCRIPT.length) {
      chatGuideText.textContent = 'แตะที่กล่องของขวัญด้านล่าง';
      chatTapGuide.classList.add('hidden');
      giftProceedBtn.classList.remove('hidden');
    } else {
      chatGuideText.textContent = 'แตะเพื่ออ่านข้อความถัดไป';
    }
  }

  function scrollChatToBottom() {
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  chatArea.addEventListener('click', () => {
    if (currentMessageIndex < DIALOGUE_SCRIPT.length) {
      advanceDialogue();
    }
  });

  chatTapGuide.addEventListener('click', () => {
    if (currentMessageIndex < DIALOGUE_SCRIPT.length) {
      advanceDialogue();
    }
  });

  giftProceedBtn.addEventListener('click', () => {
    switchScene('gift');
  });

  /* ────────────────────────────────────────────────────────────
     6. SCENE 3: GIFT BOX & AUDIO ACTIVATION
  ──────────────────────────────────────────────────────────── */
  let giftTriggered = false;

  giftBoxUnit.addEventListener('click', () => {
    if (giftTriggered) return;
    giftTriggered = true;

    giftBoxUnit.classList.add('opened');

    // Trigger grand warm confetti burst
    const rect = giftBoxUnit.getBoundingClientRect();
    triggerSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 90, 'confetti');

    startAudioPlayback();

    setTimeout(() => {
      switchScene('gallery');
      renderGallery();
    }, 700);
  });

  /* ────────────────────────────────────────────────────────────
     7. PERSISTENT AUDIO CONTROLLER
  ──────────────────────────────────────────────────────────── */
  let isPlaying = false;

  function startAudioPlayback() {
    globalPlayer.classList.remove('hidden');
    audioEl.play().then(() => {
      setPlayState(true);
    }).catch(() => {
      setPlayState(false);
    });
  }

  function setPlayState(playing) {
    isPlaying = playing;
    if (playing) {
      iconPlay.classList.add('hidden');
      iconPause.classList.remove('hidden');
      vinylDisc.classList.add('spin');
    } else {
      iconPlay.classList.remove('hidden');
      iconPause.classList.add('hidden');
      vinylDisc.classList.remove('spin');
    }
  }

  audioToggle.addEventListener('click', () => {
    if (audioEl.paused) {
      audioEl.play().then(() => setPlayState(true)).catch(() => {});
    } else {
      audioEl.pause();
      setPlayState(false);
    }
  });

  audioEl.addEventListener('timeupdate', () => {
    if (audioEl.duration) {
      const progressPercent = (audioEl.currentTime / audioEl.duration) * 100;
      trackBar.style.width = `${progressPercent}%`;
    }
  });

  /* ────────────────────────────────────────────────────────────
     8. SCENE 4: MEMORY GALLERY CONTROLLER (POST-IT STACK)
  ──────────────────────────────────────────────────────────── */
  let currentPhotoIndex = 0;
  let isGalleryBuilt = false;

  function renderGallery() {
    if (isGalleryBuilt) {
      updateCardStackVisuals();
      return;
    }
    isGalleryBuilt = true;

    cardStackEl.innerHTML = '';
    dotsTrackEl.innerHTML = '';

    MEMORY_CARDS.forEach((item, index) => {
      // Build Card
      const card = document.createElement('article');
      card.className = 'postit-card';
      card.id = `postit-item-${index}`;

      card.innerHTML = `
        <div class="washi-tape"></div>
        <div class="postit-photo-frame">
          <img class="postit-img" src="${item.src}" alt="${item.label}" loading="lazy">
        </div>
        <div class="postit-caption-block">
          <span class="postit-index-label">${item.label}</span>
          <p class="postit-user-caption">${escapeHtml(item.caption)}</p>
        </div>
      `;

      cardStackEl.appendChild(card);

      // Build Dot
      const dot = document.createElement('span');
      dot.className = `dot-unit ${index === 0 ? 'active' : ''}`;
      dot.id = `gallery-dot-${index}`;
      dotsTrackEl.appendChild(dot);
    });

    updateCardStackVisuals();
  }

  let isTransitioning = false;

  function updateCardStackVisuals(direction = 'next') {
    MEMORY_CARDS.forEach((_, index) => {
      const card = document.getElementById(`postit-item-${index}`);
      const dot  = document.getElementById(`gallery-dot-${index}`);

      if (!card) return;

      // Reset all classes
      card.className = 'postit-card';

      if (index === currentPhotoIndex) {
        if (direction === 'back') {
          card.classList.add('state-active-back');
        } else {
          card.classList.add('state-active');
        }
      }

      if (dot) {
        dot.classList.toggle('active', index === currentPhotoIndex);
      }
    });

    counterEl.textContent = `${currentPhotoIndex + 1} / ${MEMORY_CARDS.length}`;
    prevBtn.disabled = (currentPhotoIndex === 0);

    const nextSpan = nextBtn.querySelector('span');
    if (currentPhotoIndex === MEMORY_CARDS.length - 1) {
      nextSpan.textContent = 'ดูคำอวยพร';
    } else {
      nextSpan.textContent = 'ถัดไป';
    }
  }

  nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;

    if (currentPhotoIndex === MEMORY_CARDS.length - 1) {
      switchScene('wish');
      // Trigger romantic flower petals & golden sparkles burst for the bouquet reveal
      triggerSparkleBurst(windowWidth / 2, windowHeight * 0.38, 75, 'flowers');
      return;
    }

    isTransitioning = true;
    const activeCard = document.getElementById(`postit-item-${currentPhotoIndex}`);
    if (activeCard) {
      activeCard.classList.add('slide-exit-left');
    }

    setTimeout(() => {
      currentPhotoIndex++;
      updateCardStackVisuals('next');
      isTransitioning = false;
    }, 240);
  });

  prevBtn.addEventListener('click', () => {
    if (isTransitioning || currentPhotoIndex <= 0) return;

    isTransitioning = true;
    const activeCard = document.getElementById(`postit-item-${currentPhotoIndex}`);
    if (activeCard) {
      activeCard.classList.add('slide-exit-right');
    }

    setTimeout(() => {
      currentPhotoIndex--;
      updateCardStackVisuals('back');
      isTransitioning = false;
    }, 240);
  });

  /* ────────────────────────────────────────────────────────────
     9. SCENE 5: WISH BACK NAVIGATION
  ──────────────────────────────────────────────────────────── */
  if (wishBackBtn) {
    wishBackBtn.addEventListener('click', () => {
      // กลับไปที่หน้าแกลเลอรีรูปภาพ โดยยังคงอยู่ที่รูปสุดท้าย
      switchScene('gallery');
      renderGallery();
    });
  }

  /* ────────────────────────────────────────────────────────────
     10. VISUAL PARTICLES & AMBIENT CANVAS SYSTEM
     (Warm Bokeh, Soft Golden Glitter & Elegant Ribbon Confetti)
     Strictly Zero Emojis. Pure Canvas Geometry & Physics.
  ──────────────────────────────────────────────────────────── */
  const ambientCanvas = document.getElementById('ambient-canvas');
  const burstCanvas   = document.getElementById('burst-canvas');
  const actx          = ambientCanvas ? ambientCanvas.getContext('2d') : null;
  const bctx          = burstCanvas ? burstCanvas.getContext('2d') : null;

  let windowWidth  = window.innerWidth;
  let windowHeight = window.innerHeight;

  function resizeCanvases() {
    windowWidth  = window.innerWidth;
    windowHeight = window.innerHeight;
    if (ambientCanvas) {
      ambientCanvas.width  = windowWidth;
      ambientCanvas.height = windowHeight;
    }
    if (burstCanvas) {
      burstCanvas.width  = windowWidth;
      burstCanvas.height = windowHeight;
    }
  }

  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  // Floating ambient warm lights & bokeh motes
  const ambientParticles = [];
  const PALETTE = [
    'rgba(255, 140, 175, 0.45)', // Rose Pink
    'rgba(255, 185, 205, 0.40)', // Blossom Blush
    'rgba(255, 215, 150, 0.45)', // Warm Gold
    'rgba(255, 235, 190, 0.35)', // Champagne
    'rgba(255, 105, 150, 0.30)'  // Coral Rose
  ];

  const PARTICLE_COUNT = Math.min(32, Math.floor(windowWidth / 14));
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    ambientParticles.push({
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      radius: Math.random() * 4.5 + 2,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.45 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: Math.random() * 0.02 + 0.01
    });
  }

  // Interactive touch / cursor trail particles
  const trailParticles = [];
  function addTouchSpark(px, py) {
    if (trailParticles.length > 25) return;
    for (let k = 0; k < 2; k++) {
      trailParticles.push({
        x: px + (Math.random() - 0.5) * 16,
        y: py + (Math.random() - 0.5) * 16,
        size: Math.random() * 3 + 1.5,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2 - 0.4,
        alpha: 1,
        life: 1,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  }

  window.addEventListener('pointermove', (e) => {
    if (Math.random() > 0.4) addTouchSpark(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0] && Math.random() > 0.3) {
      addTouchSpark(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  function renderAmbient() {
    if (!actx) return;
    actx.clearRect(0, 0, windowWidth, windowHeight);

    // Render floating bokeh motes
    for (let i = 0; i < ambientParticles.length; i++) {
      const p = ambientParticles[i];
      p.phase += p.phaseSpeed;
      p.x += p.vx + Math.sin(p.phase) * 0.25;
      p.y += p.vy;

      if (p.y < -20) {
        p.y = windowHeight + 20;
        p.x = Math.random() * windowWidth;
      }
      if (p.x < -20) p.x = windowWidth + 20;
      if (p.x > windowWidth + 20) p.x = -20;

      const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.phase));
      actx.beginPath();
      actx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      actx.fillStyle = p.color;
      actx.globalAlpha = currentAlpha;
      actx.fill();
    }

    // Render touch trails
    for (let i = trailParticles.length - 1; i >= 0; i--) {
      const tp = trailParticles[i];
      tp.x += tp.vx;
      tp.y += tp.vy;
      tp.life -= tp.decay;

      if (tp.life <= 0) {
        trailParticles.splice(i, 1);
        continue;
      }

      actx.beginPath();
      // Draw 4-point twinkle star
      const s = tp.size * tp.life;
      actx.moveTo(tp.x, tp.y - s);
      actx.lineTo(tp.x + s * 0.3, tp.y - s * 0.3);
      actx.lineTo(tp.x + s, tp.y);
      actx.lineTo(tp.x + s * 0.3, tp.y + s * 0.3);
      actx.lineTo(tp.x, tp.y + s);
      actx.lineTo(tp.x - s * 0.3, tp.y + s * 0.3);
      actx.lineTo(tp.x - s, tp.y);
      actx.lineTo(tp.x - s * 0.3, tp.y - s * 0.3);
      actx.closePath();
      actx.fillStyle = tp.color;
      actx.globalAlpha = tp.life;
      actx.fill();
    }

    actx.globalAlpha = 1;
    requestAnimationFrame(renderAmbient);
  }
  requestAnimationFrame(renderAmbient);

  // Burst Particles System (For Envelope & Gift Open)
  const burstParticles = [];

  function triggerSparkleBurst(ox, oy, count = 50, type = 'stars') {
    const burstColors = type === 'flowers'
      ? ['#FF5A8C', '#FFA5C0', '#FFE4EC', '#FF7DA2', '#FFCADB', '#FFF0F5']
      : ['#FF5A8C', '#FFA5C0', '#FFE4EC', '#FFD79E', '#EAA844', '#FFFFFF'];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = type === 'flowers' 
        ? Math.random() * 4.5 + 1.8 
        : Math.random() * (type === 'confetti' ? 9 : 6) + 2.5;

      burstParticles.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'confetti' ? 3.5 : (type === 'flowers' ? 2.5 : 1.5)),
        gravity: type === 'confetti' ? 0.22 : (type === 'flowers' ? 0.05 : 0.08),
        color: burstColors[Math.floor(Math.random() * burstColors.length)],
        width: type === 'confetti' ? Math.random() * 7 + 4 : (type === 'flowers' ? Math.random() * 6 + 4 : Math.random() * 4 + 2),
        height: type === 'confetti' ? Math.random() * 12 + 6 : (type === 'flowers' ? Math.random() * 10 + 6 : Math.random() * 4 + 2),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * (type === 'flowers' ? 0.08 : 0.2),
        alpha: 1,
        life: 1,
        decay: type === 'flowers' ? Math.random() * 0.01 + 0.007 : Math.random() * 0.015 + 0.012,
        type: type
      });
    }

    if (burstParticles.length === count) {
      requestAnimationFrame(renderBurst);
    }
  }

  function renderBurst() {
    if (!bctx) return;
    bctx.clearRect(0, 0, windowWidth, windowHeight);

    for (let i = burstParticles.length - 1; i >= 0; i--) {
      const p = burstParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.985;
      p.rotation += p.rotSpeed;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > windowHeight + 40) {
        burstParticles.splice(i, 1);
        continue;
      }

      bctx.save();
      bctx.translate(p.x, p.y);
      bctx.rotate(p.rotation);
      bctx.globalAlpha = Math.max(0, p.life);
      bctx.fillStyle = p.color;

      if (p.type === 'confetti') {
        // Elegant ribbon strips
        bctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
      } else if (p.type === 'flowers') {
        // Delicate soft rose petals drifting gently
        bctx.beginPath();
        bctx.ellipse(0, 0, p.width * 1.5, p.height * 1.2, 0, 0, Math.PI * 2);
        bctx.fill();
      } else {
        // Sparkling diamonds
        bctx.beginPath();
        bctx.moveTo(0, -p.height);
        bctx.lineTo(p.width, 0);
        bctx.lineTo(0, p.height);
        bctx.lineTo(-p.width, 0);
        bctx.closePath();
        bctx.fill();
      }
      bctx.restore();
    }

    if (burstParticles.length > 0) {
      requestAnimationFrame(renderBurst);
    } else {
      bctx.clearRect(0, 0, windowWidth, windowHeight);
    }
  }

  // Expose triggerSparkleBurst to outer scopes
  window.triggerSparkleBurst = triggerSparkleBurst;

  /* ────────────────────────────────────────────────────────────
     11. HELPER FUNCTIONS
  ──────────────────────────────────────────────────────────── */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

});
