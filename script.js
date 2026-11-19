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

  // รูปภาพ 4 ภาพ พร้อมข้อความจริง และข้อความลับด้านหลังการ์ด
  const MEMORY_CARDS = [
    {
      src: 'png/IMG_7428.jpg',
      label: 'H',
      caption: 'ผมจำได้ว่าผมฟอลพี่ไปก่อนแล้วพี่ reply story มาวันที่ 10 กุมภา ก็ตกใจนะแบบฟอลไปแล้วพี่ reply มา 5555',
      secretNote: 'ไม่เคยคิดเลยว่าแบบเออเราจะได้มาเจอกันอีกครั้งดีใจมากๆที่แบบเราวนมาเจอกันอีก',
      stamp: 'FEB 10 • FIRST CHAT'
    },
    {
      src: 'png/IMG_7638.jpg',
      label: 'B',
      caption: 'แล้วจากนั้นเราก็คุยกันมาเรื่อยๆใช่มั้ยยอมรับว่าผมมีความสุขมากๆ 5555 น่าจะดูออก แล้วมีวันนึงเหมือน deeptalk แล้วพี่บอกว่า "การที่เราแยกย้ายกันไปเติบโตแล้วกลับมาเจอกันในเวอร์ชันที่ดีกว่ามันอาจจะดีก็ได้แล้วมันก็ไม่ง่ายที่โลกเหวี่ยงมาเจอกันอะไรแบบนี้" ก็แบบทำให้เออรู้สึกดีมากๆ',
      secretNote: 'ที่พี่บอกในวันนั้น แบบแอบมีความสุขมากๆ555 ขอบคุณที่โลกเหวี่ยงเราสองคนมาเจอกันในเวอร์ชันนี้จริงๆ นะ อยากทำให้มันดีขึ้นกว่าเดิมแบบมากๆ อยากให้พี่ยิ้มเยอะๆ',
      stamp: 'DEEP TALK • MEMORY'
    },
    {
      src: 'png/IMG_7639.jpg',
      label: 'D',
      caption: 'ถึงตอนนี้ก็ยังรู้สึกดีอยู่ไม่เคยน้อยลงจากวันแรกที่เรากลับมาคุยกันเลย555แต่ตอนนี้ผมขอแค่อย่างเดียวคือให้พี่มีความสุขมากๆเยอะๆเลยไม่อยากให้เครียดไม่อยากให้เหนื่อยเลยขอแค่นี้ก็พอ',
      secretNote: '10 เดือนแล้วที่ได้คุยกัน ไม่เคยมีวันไหนที่รู้สึกน้อยลงเลย ขอให้พี่ยิ้มพี่สดใสแบบนี้ในทุกๆ วันนะ',
      stamp: '10 MONTHS • TOGETHER'
    },
    {
      src: 'png/IMG_7660.jpg',
      label: 'HBD To P toey na',
      caption: 'สุดท้ายนี้ในอนาคตไม่รู้ว่าเราสองคนจะเป็นยังไงแต่อยากบอกแค่อย่างเดียวคือให้พี่มีความสุขเยอะๆไม่เจ็บไม่ป่วยไม่เหนื่อยผมเป็นกำลังใจให้ตลอดนะวันนี้อาจจะไม่ใช่วันเกิดพี่จริงๆแต่ถือว่าอวยพรล่วงหน้านะ 555 ไม่รู้จะพิมยังไงอาจจะวกๆวนๆขอโทษด้วยนะ5555',
      secretNote: 'ขอบคุณที่เข้ามาเป็นเรื่องราวดีๆ และเป็นรอยยิ้มในชีวิตผมนะ สุขสันต์วันเกิดครับพี่เตย ขอให้มีความสุขที่สุดในโลกเลยนะ :D',
      stamp: 'HBD • SPECIAL WISH'
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

    // Trigger or reset roses behind the wish card
    const roseContainer = document.getElementById('roses-behind-card');
    if (roseContainer) {
      if (targetSceneKey === 'wish') {
        roseContainer.classList.remove('blooming');
        setTimeout(() => {
          roseContainer.classList.add('blooming');
        }, 120);
      } else {
        roseContainer.classList.remove('blooming');
      }
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

    // Interactive message tap reaction
    row.addEventListener('click', (e) => {
      e.stopPropagation();
      const r = row.getBoundingClientRect();
      triggerSparkleBurst(r.left + r.width / 2, r.top + r.height / 2, 20, 'petals');
    });

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

  // Chat "Send Love" Reaction Interaction
  const chatSendLoveBtn = document.getElementById('chat-send-love-btn');
  if (chatSendLoveBtn) {
    chatSendLoveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = chatSendLoveBtn.getBoundingClientRect();
      triggerSparkleBurst(rect.left + rect.width / 2, rect.bottom + 8, 30, 'petals');

      // Floating love reaction blossoms rising inside chat
      for (let i = 0; i < 7; i++) {
        const fl = document.createElement('span');
        fl.className = 'chat-floating-blossom';
        fl.innerHTML = `<svg viewBox="0 0 46 46"><use href="#sym-blossom"></use></svg>`;
        fl.style.left = `${Math.random() * 80 + 10}%`;
        fl.style.animationDelay = `${Math.random() * 0.3}s`;
        chatArea.appendChild(fl);
        setTimeout(() => fl.remove(), 2100);
      }
    });
  }

  /* ────────────────────────────────────────────────────────────
     6. SCENE 3: GIFT BOX & AUDIO ACTIVATION
  ──────────────────────────────────────────────────────────── */
  let giftTriggered = false;

  giftBoxUnit.addEventListener('click', () => {
    if (giftTriggered) return;
    giftTriggered = true;

    // Excitement anticipation wobble before bursting open
    giftBoxUnit.classList.add('opening');

    setTimeout(() => {
      giftBoxUnit.classList.add('opened');

      // Trigger grand warm confetti & light burst
      const rect = giftBoxUnit.getBoundingClientRect();
      triggerSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 95, 'confetti');

      startAudioPlayback();

      setTimeout(() => {
        switchScene('gallery');
        renderGallery();
      }, 750);
    }, 420);
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
    const eqBars = document.getElementById('audio-eq-bars');
    if (playing) {
      iconPlay.classList.add('hidden');
      iconPause.classList.remove('hidden');
      vinylDisc.classList.add('spin');
      if (eqBars) eqBars.classList.add('playing');
    } else {
      iconPlay.classList.remove('hidden');
      iconPause.classList.add('hidden');
      vinylDisc.classList.remove('spin');
      if (eqBars) eqBars.classList.remove('playing');
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

  // Behind-card decoration layers for all 4 memory photos (Handcrafted Vector Art: Dog, Cat, Flowers - Zero Emojis)
  const CARD_DECORATIONS = [
    // Card 1: Puppy peeking from top-left, kitty peeking from top-right, flowers blooming at sides & bottom
    [
      { sym: '#sym-dog', viewBox: '0 0 52 52', top: '-40px', left: '10%', delay: '0.1s' },
      { sym: '#sym-cat', viewBox: '0 0 52 52', top: '-40px', right: '10%', delay: '0.18s' },
      { sym: '#sym-blossom', viewBox: '0 0 46 46', top: '26%', left: '-32px', delay: '0.24s' },
      { sym: '#sym-daisy', viewBox: '0 0 46 46', top: '56%', right: '-32px', delay: '0.32s' },
      { sym: '#sym-tulip', viewBox: '0 0 46 46', bottom: '-26px', left: '18%', delay: '0.38s' },
      { sym: '#sym-blossom', viewBox: '0 0 46 46', bottom: '-26px', right: '18%', delay: '0.44s' },
      { sym: '#sym-paw', viewBox: '0 0 40 40', top: '68%', left: '-26px', delay: '0.5s' }
    ],
    // Card 2: Dog peeking from top-right, cat peeking from left side, blooming flowers & paws
    [
      { sym: '#sym-dog', viewBox: '0 0 52 52', top: '-42px', right: '14%', delay: '0.1s' },
      { sym: '#sym-cat', viewBox: '0 0 52 52', top: '35%', left: '-34px', delay: '0.2s' },
      { sym: '#sym-blossom', viewBox: '0 0 46 46', top: '-32px', left: '14%', delay: '0.15s' },
      { sym: '#sym-tulip', viewBox: '0 0 46 46', top: '58%', right: '-32px', delay: '0.3s' },
      { sym: '#sym-daisy', viewBox: '0 0 46 46', bottom: '-26px', left: '25%', delay: '0.38s' },
      { sym: '#sym-paw', viewBox: '0 0 40 40', bottom: '-24px', right: '28%', delay: '0.45s' }
    ],
    // Card 3: Cat peeking from top-left, dog peeking from bottom-right, blossoms all around
    [
      { sym: '#sym-cat', viewBox: '0 0 52 52', top: '-40px', left: '12%', delay: '0.1s' },
      { sym: '#sym-dog', viewBox: '0 0 52 52', bottom: '-36px', right: '14%', delay: '0.2s' },
      { sym: '#sym-tulip', viewBox: '0 0 46 46', top: '-32px', right: '16%', delay: '0.24s' },
      { sym: '#sym-blossom', viewBox: '0 0 46 46', top: '42%', left: '-32px', delay: '0.3s' },
      { sym: '#sym-daisy', viewBox: '0 0 46 46', top: '32%', right: '-32px', delay: '0.36s' },
      { sym: '#sym-blossom', viewBox: '0 0 46 46', bottom: '-26px', left: '20%', delay: '0.42s' },
      { sym: '#sym-paw', viewBox: '0 0 40 40', top: '65%', right: '-28px', delay: '0.48s' }
    ],
    // Card 4: Grand celebration! Both Dog & Cat peeking proudly together with flowers and paws
    [
      { sym: '#sym-dog', viewBox: '0 0 52 52', top: '-42px', left: '14%', delay: '0.1s' },
      { sym: '#sym-cat', viewBox: '0 0 52 52', top: '-42px', right: '14%', delay: '0.16s' },
      { sym: '#sym-tulip', viewBox: '0 0 46 46', top: '32%', left: '-34px', delay: '0.24s' },
      { sym: '#sym-blossom', viewBox: '0 0 46 46', top: '32%', right: '-32px', delay: '0.3s' },
      { sym: '#sym-daisy', viewBox: '0 0 46 46', top: '62%', left: '-30px', delay: '0.36s' },
      { sym: '#sym-blossom', viewBox: '0 0 46 46', top: '62%', right: '-30px', delay: '0.42s' },
      { sym: '#sym-tulip', viewBox: '0 0 46 46', bottom: '-26px', left: '50%', delay: '0.48s' },
      { sym: '#sym-paw', viewBox: '0 0 40 40', bottom: '-24px', left: '16%', delay: '0.52s' },
      { sym: '#sym-paw', viewBox: '0 0 40 40', bottom: '-24px', right: '16%', delay: '0.56s' }
    ]
  ];

  function renderGallery() {
    if (isGalleryBuilt) {
      updateCardStackVisuals();
      return;
    }
    isGalleryBuilt = true;

    cardStackEl.innerHTML = '';
    dotsTrackEl.innerHTML = '';

    MEMORY_CARDS.forEach((item, index) => {
      // Build 3D Flippable Card
      const card = document.createElement('article');
      card.className = 'postit-card';
      card.id = `postit-item-${index}`;

      card.innerHTML = `
        <div class="postit-card-inner">
          <!-- FRONT OF CARD -->
          <div class="postit-face card-front">
            <div class="washi-tape"></div>
            <div class="postit-photo-frame" title="แตะเพื่อพลิกดูข้อความลับ">
              <img class="postit-img" src="${item.src}" alt="${item.label}" loading="lazy">
              <div class="photo-glare-overlay" aria-hidden="true"></div>
            </div>
            <div class="postit-caption-block">
              <div class="postit-meta-row">
                <span class="postit-index-label">${item.label}</span>
                <button class="btn-flip-card" type="button" aria-label="แตะเพื่อดูข้อความพิเศษ">
                  <span class="sparkle-sym">✦</span> ข้อความพิเศษ
                </button>
              </div>
              <p class="postit-user-caption">${escapeHtml(item.caption)}</p>
            </div>
          </div>

          <!-- BACK OF CARD (SECRET HANDWRITTEN NOTE) -->
          <div class="postit-face card-back">
            <div class="washi-tape washi-back"></div>
            <div class="secret-card-content">
              <div class="secret-stamp-badge">
                <span class="stamp-star">✦</span>
                <span class="stamp-text">${item.stamp}</span>
              </div>
              <div class="secret-note-body">
                <p class="secret-note-text">${escapeHtml(item.secretNote)}</p>
              </div>
              <div class="secret-card-footer">
                <div class="secret-seal-mark">
                  <svg class="seal-svg" viewBox="0 0 48 48"><use href="#sym-rose"></use></svg>
                  <span class="seal-text">A & T</span>
                </div>
                <button class="btn-flip-back" type="button">
                  <span>พลิกกลับดูรูป</span> ↺
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Flip toggle listeners
      const flipBtn = card.querySelector('.btn-flip-card');
      const flipBackBtn = card.querySelector('.btn-flip-back');
      const photoFrame = card.querySelector('.postit-photo-frame');

      function toggleFlip(e) {
        e.stopPropagation();
        card.classList.toggle('flipped');
        const rect = card.getBoundingClientRect();
        triggerSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 26, 'stars');
      }

      if (flipBtn) flipBtn.addEventListener('click', toggleFlip);
      if (flipBackBtn) flipBackBtn.addEventListener('click', toggleFlip);
      if (photoFrame) photoFrame.addEventListener('click', toggleFlip);

      // Build Behind-Card Decorations (Handcrafted Vector Art + Tap Interaction)
      const decoLayer = document.createElement('div');
      decoLayer.className = 'card-deco-layer';
      decoLayer.setAttribute('aria-hidden', 'true');

      const cardDecos = CARD_DECORATIONS[index] || CARD_DECORATIONS[0];
      cardDecos.forEach(d => {
        const deco = document.createElement('span');
        const decoType = d.sym.replace('#sym-', '');
        deco.className = `deco-unit deco-${decoType} interactive-pet`;
        deco.title = 'แตะฉันสิ!';
        deco.innerHTML = `<svg class="deco-vector-svg" viewBox="${d.viewBox}"><use href="${d.sym}"></use></svg>`;
        if (d.top) deco.style.top = d.top;
        if (d.bottom) deco.style.bottom = d.bottom;
        if (d.left) deco.style.left = d.left;
        if (d.right) deco.style.right = d.right;
        if (d.delay) deco.style.animationDelay = `${d.delay}, calc(${d.delay} + 0.7s)`;

        // Interactive Companion reaction on click/tap
        deco.addEventListener('click', (e) => {
          e.stopPropagation();
          deco.classList.remove('pet-jump');
          void deco.offsetWidth; // force reflow
          deco.classList.add('pet-jump');

          const r = deco.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;

          if (decoType === 'dog') {
            triggerSparkleBurst(cx, cy, 28, 'stars');
            showFloatingPill(cx, cy, 'โฮ่ง! ดีใจจัง ✦');
          } else if (decoType === 'cat') {
            triggerSparkleBurst(cx, cy, 28, 'petals');
            showFloatingPill(cx, cy, 'เหมียว~ รักนะ ✦');
          } else if (decoType === 'paw') {
            triggerSparkleBurst(cx, cy, 20, 'stars');
          } else {
            triggerSparkleBurst(cx, cy, 24, 'petals');
          }
        });

        decoLayer.appendChild(deco);
      });

      card.appendChild(decoLayer);
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
      triggerSparkleBurst(window.innerWidth / 2, window.innerHeight * 0.38, 90, 'petals');
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
     9. SCENE 5: WISH BACK NAVIGATION & CANDLE MAKE-A-WISH
  ──────────────────────────────────────────────────────────── */
  if (wishBackBtn) {
    wishBackBtn.addEventListener('click', () => {
      // กลับไปที่หน้าแกลเลอรีรูปภาพ โดยยังคงอยู่ที่รูปสุดท้าย
      switchScene('gallery');
      renderGallery();
    });
  }

  // Interactive Birthday Candle: Tap to Make a Wish & Blow Flame
  const candleBlock = document.getElementById('candle-interactive-block');
  const candlePromptText = document.getElementById('candle-prompt-text');
  let candleBlown = false;

  if (candleBlock) {
    candleBlock.addEventListener('click', () => {
      if (candleBlown) return;
      candleBlown = true;

      candleBlock.classList.add('blown');

      if (candlePromptText) {
        candlePromptText.innerHTML = `
          <span class="sparkle-sym">✦</span>
          <span class="candle-label-text">ขอให้สมหวังและเป็นไปตามที่อธิษฐานนะ</span>
          <span class="sparkle-sym">✦</span>
        `;
      }

      const wishCardParchment = document.querySelector('.wish-card-parchment');
      if (wishCardParchment) {
        wishCardParchment.classList.add('wished');
      }

      // Trigger grand celebratory flower petal & golden sparkle shower in two cascading waves
      const rect = candleBlock.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + 8;
      triggerSparkleBurst(cx, cy, 75, 'petals');
      setTimeout(() => {
        triggerSparkleBurst(cx, cy, 60, 'stars');
      }, 250);

      // Reveal Grand Fireworks Celebration button
      const fwBtn = document.getElementById('fireworks-launch-btn');
      if (fwBtn) {
        fwBtn.classList.remove('hidden');
        fwBtn.classList.add('glow-pulse');
      }

      // Launch grand celebratory fireworks volley
      setTimeout(() => {
        launchCelebrationShow();
      }, 400);

      // Release romantic floating sky lanterns
      spawnSkyLanterns();
    });
  }

  // Interactive Fireworks Button
  const fireworksLaunchBtn = document.getElementById('fireworks-launch-btn');
  if (fireworksLaunchBtn) {
    fireworksLaunchBtn.addEventListener('click', () => {
      launchCelebrationShow();
    });
  }

  // Tap anywhere in Scene 5 to launch a custom Firework Rocket!
  const sceneWishEl = document.getElementById('scene-wish');
  if (sceneWishEl) {
    sceneWishEl.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('#candle-interactive-block')) return;
      launchFireworkRocket(e.clientX, e.clientY, Math.random() > 0.5 ? 'stars' : 'petals');
    });
  }

  // Floating Sky Lanterns Generator
  function spawnSkyLanterns() {
    const layer = document.getElementById('sky-lanterns-layer');
    if (!layer) return;
    layer.innerHTML = '';
    const count = 8;
    for (let i = 0; i < count; i++) {
      const lantern = document.createElement('div');
      lantern.className = 'sky-lantern-item';
      lantern.innerHTML = `
        <svg class="lantern-svg" viewBox="0 0 36 50">
          <use href="#sym-lantern"></use>
        </svg>
      `;
      lantern.style.left = `${(i * 12) + Math.random() * 6 + 3}%`;
      lantern.style.animationDelay = `${i * 0.45}s`;
      lantern.style.animationDuration = `${Math.random() * 3 + 7.5}s`;
      layer.appendChild(lantern);
    }
  }

  // Floating Speech Reaction Pill for Animals & Companions
  function showFloatingPill(x, y, text) {
    const pill = document.createElement('div');
    pill.className = 'companion-reaction-pill';
    pill.textContent = text;
    pill.style.left = `${x}px`;
    pill.style.top = `${y}px`;
    document.body.appendChild(pill);
    setTimeout(() => pill.remove(), 1600);
  }

  // 3D Parallax Tilt for Memory Cards
  const postitViewport = document.querySelector('.postit-viewport');
  if (postitViewport) {
    postitViewport.addEventListener('mousemove', (e) => {
      const activeCard = document.querySelector('.postit-card.state-active');
      if (!activeCard || activeCard.classList.contains('flipped')) return;
      const rect = postitViewport.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rx = -(y / rect.height) * 12;
      const ry = (x / rect.width) * 12;
      activeCard.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.02)`;
    });

    postitViewport.addEventListener('mouseleave', () => {
      const activeCard = document.querySelector('.postit-card.state-active');
      if (activeCard && !activeCard.classList.contains('flipped')) {
        activeCard.style.transform = '';
      }
    });
  }
  if (postitViewport) {
    let touchStartX = 0;
    let touchStartY = 0;

    postitViewport.addEventListener('touchstart', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    postitViewport.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;

      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 42) {
        if (diffX < 0) {
          // Swipe left -> Next card
          if (nextBtn) nextBtn.click();
        } else {
          // Swipe right -> Prev card
          if (prevBtn && !prevBtn.disabled) prevBtn.click();
        }
      }
    }, { passive: true });
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

  // Floating ambient warm lights, twinkling stars & drifting blossom petals
  const ambientParticles = [];
  const PALETTE = [
    'rgba(255, 140, 175, 0.45)', // Rose Pink
    'rgba(255, 185, 205, 0.40)', // Blossom Blush
    'rgba(255, 215, 150, 0.45)', // Warm Gold
    'rgba(255, 235, 190, 0.35)', // Champagne
    'rgba(255, 105, 150, 0.30)', // Coral Rose
    'rgba(255, 245, 220, 0.40)'  // Starlight Ivory
  ];

  const PARTICLE_COUNT = Math.min(42, Math.floor(windowWidth / 10));
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // 3 varieties: bokeh (50%), twinkling stars (25%), drifting flower petals (25%)
    const randType = Math.random();
    const type = randType < 0.5 ? 'bokeh' : (randType < 0.75 ? 'star' : 'petal');

    ambientParticles.push({
      type: type,
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      radius: type === 'petal' ? (Math.random() * 4 + 3) : (type === 'star' ? (Math.random() * 3.5 + 2) : (Math.random() * 5 + 2)),
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      vx: (Math.random() - 0.5) * (type === 'petal' ? 0.6 : 0.35),
      vy: type === 'petal' ? (Math.random() * 0.45 + 0.35) : (-Math.random() * 0.45 - 0.15),
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      alpha: Math.random() * 0.55 + 0.25,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: Math.random() * 0.025 + 0.012
    });
  }

  // Interactive touch / cursor trail particles
  const trailParticles = [];
  function addTouchSpark(px, py) {
    if (trailParticles.length > 40) return;
    for (let k = 0; k < 2; k++) {
      trailParticles.push({
        x: px + (Math.random() - 0.5) * 16,
        y: py + (Math.random() - 0.5) * 16,
        size: Math.random() * 3.5 + 1.8,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        vx: (Math.random() - 0.5) * 1.4,
        vy: (Math.random() - 0.5) * 1.4 - 0.4,
        alpha: 1,
        life: 1,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  }

  // Instant magical burst on pointer click/tap
  function addPointerClickBurst(px, py) {
    if (trailParticles.length > 55) return;
    const count = 7;
    for (let k = 0; k < count; k++) {
      const angle = (Math.PI * 2 * k) / count + (Math.random() - 0.5) * 0.3;
      const speed = Math.random() * 2.4 + 1.2;
      trailParticles.push({
        x: px,
        y: py,
        size: Math.random() * 4 + 2,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        life: 1,
        decay: Math.random() * 0.035 + 0.02
      });
    }
  }

  window.addEventListener('pointerdown', (e) => {
    addPointerClickBurst(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('pointermove', (e) => {
    if (Math.random() > 0.35) addTouchSpark(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0] && Math.random() > 0.25) {
      addTouchSpark(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  function renderAmbient() {
    if (!actx) return;
    actx.clearRect(0, 0, windowWidth, windowHeight);

    // Render floating ambient entities (bokeh, stars, petals)
    for (let i = 0; i < ambientParticles.length; i++) {
      const p = ambientParticles[i];
      p.phase += p.phaseSpeed;
      p.rotation += p.rotSpeed;

      if (p.type === 'petal') {
        // Petals drift downwards with sinusoidal wind sway
        p.x += p.vx + Math.sin(p.phase) * 0.55;
        p.y += p.vy;
        if (p.y > windowHeight + 20) {
          p.y = -20;
          p.x = Math.random() * windowWidth;
        }
      } else {
        // Bokeh & Stars float gently upwards
        p.x += p.vx + Math.sin(p.phase) * 0.3;
        p.y += p.vy;
        if (p.y < -20) {
          p.y = windowHeight + 20;
          p.x = Math.random() * windowWidth;
        }
      }

      if (p.x < -20) p.x = windowWidth + 20;
      if (p.x > windowWidth + 20) p.x = -20;

      const currentAlpha = p.alpha * (0.65 + 0.35 * Math.sin(p.phase));

      if (p.type === 'bokeh') {
        actx.beginPath();
        actx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        actx.fillStyle = p.color;
        actx.globalAlpha = currentAlpha;
        actx.fill();
      } else if (p.type === 'star') {
        // Twinkling 4-point star
        const s = p.radius * (0.7 + 0.3 * Math.sin(p.phase));
        actx.save();
        actx.translate(p.x, p.y);
        actx.rotate(p.rotation);
        actx.beginPath();
        actx.moveTo(0, -s);
        actx.lineTo(s * 0.32, -s * 0.32);
        actx.lineTo(s, 0);
        actx.lineTo(s * 0.32, s * 0.32);
        actx.lineTo(0, s);
        actx.lineTo(-s * 0.32, s * 0.32);
        actx.lineTo(-s, 0);
        actx.lineTo(-s * 0.32, -s * 0.32);
        actx.closePath();
        actx.fillStyle = p.color;
        actx.globalAlpha = currentAlpha;
        actx.fill();
        actx.restore();
      } else if (p.type === 'petal') {
        // Delicate blossom petal
        actx.save();
        actx.translate(p.x, p.y);
        actx.rotate(p.rotation + Math.sin(p.phase) * 0.4);
        actx.beginPath();
        actx.ellipse(0, 0, p.radius * 1.3, p.radius * 0.75, 0, 0, Math.PI * 2);
        actx.fillStyle = p.color;
        actx.globalAlpha = currentAlpha * 0.9;
        actx.fill();
        actx.restore();
      }
    }

    // Render touch & click trail sparkles
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

  // Burst Particles & Grand Fireworks Rockets System
  const burstParticles = [];
  const fireworkRockets = [];

  function launchFireworkRocket(targetX, targetY, burstType = 'stars') {
    const startX = targetX + (Math.random() - 0.5) * 60;
    const startY = windowHeight + 10;
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed = Math.random() * 3 + 14;

    fireworkRockets.push({
      x: startX,
      y: startY,
      targetX: targetX,
      targetY: targetY,
      vx: (dx / dist) * speed,
      vy: (dy / dist) * speed,
      burstType: burstType
    });

    if (burstParticles.length === 0 && fireworkRockets.length === 1) {
      requestAnimationFrame(renderBurst);
    }
  }

  function launchCelebrationShow() {
    const types = ['stars', 'petals', 'confetti', 'stars', 'petals', 'confetti'];
    for (let k = 0; k < 6; k++) {
      setTimeout(() => {
        const tx = Math.random() * (windowWidth * 0.7) + (windowWidth * 0.15);
        const ty = Math.random() * (windowHeight * 0.38) + (windowHeight * 0.12);
        launchFireworkRocket(tx, ty, types[k % types.length]);
      }, k * 280);
    }
  }

  function triggerSparkleBurst(ox, oy, count = 50, type = 'stars') {
    const isPetal = (type === 'petals' || type === 'flowers');
    const burstColors = isPetal
      ? ['#FF5A8C', '#FFA5C0', '#FFE4EC', '#FF7DA2', '#FFCADB', '#FFF0F5', '#FFD79E']
      : ['#FF5A8C', '#FFA5C0', '#FFE4EC', '#FFD79E', '#EAA844', '#FFFFFF'];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = isPetal
        ? Math.random() * 5 + 2.2
        : Math.random() * (type === 'confetti' ? 9 : 6) + 2.5;

      burstParticles.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'confetti' ? 3.5 : (isPetal ? 2.8 : 1.5)),
        gravity: type === 'confetti' ? 0.22 : (isPetal ? 0.06 : 0.08),
        color: burstColors[Math.floor(Math.random() * burstColors.length)],
        width: type === 'confetti' ? Math.random() * 7 + 4 : (isPetal ? Math.random() * 7 + 5 : Math.random() * 4 + 2),
        height: type === 'confetti' ? Math.random() * 12 + 6 : (isPetal ? Math.random() * 10 + 6 : Math.random() * 4 + 2),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * (isPetal ? 0.08 : 0.2),
        alpha: 1,
        life: 1,
        decay: isPetal ? (Math.random() * 0.009 + 0.006) : (Math.random() * 0.015 + 0.012),
        type: type
      });
    }

    if (burstParticles.length === count && fireworkRockets.length === 0) {
      requestAnimationFrame(renderBurst);
    }
  }

  function renderBurst() {
    if (!bctx) return;
    bctx.clearRect(0, 0, windowWidth, windowHeight);

    // 1. Advance and render rising firework rockets
    for (let i = fireworkRockets.length - 1; i >= 0; i--) {
      const r = fireworkRockets[i];
      r.x += r.vx;
      r.y += r.vy;

      bctx.save();
      bctx.beginPath();
      bctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
      bctx.fillStyle = '#FFECA0';
      bctx.shadowColor = '#FFA500';
      bctx.shadowBlur = 10;
      bctx.fill();
      bctx.restore();

      // Emit trailing spark
      if (Math.random() > 0.2) {
        burstParticles.push({
          x: r.x + (Math.random() - 0.5) * 4,
          y: r.y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.8,
          vy: Math.random() * 1.5 + 0.4,
          gravity: 0.1,
          color: '#FFD79E',
          width: 2.2,
          height: 2.2,
          rotation: 0,
          rotSpeed: 0,
          alpha: 0.9,
          life: 0.75,
          decay: 0.045,
          type: 'spark'
        });
      }

      // Detonate into grand firework upon reaching target height
      if (r.y <= r.targetY) {
        triggerSparkleBurst(r.targetX, r.targetY, 70, r.burstType);
        fireworkRockets.splice(i, 1);
      }
    }

    // 2. Advance and render bursting particles
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
      } else if (p.type === 'petals' || p.type === 'flowers') {
        // Soft romantic flower petals drifting gently
        bctx.beginPath();
        bctx.ellipse(0, 0, p.width * 1.3, p.height * 0.9, 0, 0, Math.PI * 2);
        bctx.fill();
      } else if (p.type === 'spark') {
        // Small trail sparks
        bctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
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

    if (burstParticles.length > 0 || fireworkRockets.length > 0) {
      requestAnimationFrame(renderBurst);
    } else {
      bctx.clearRect(0, 0, windowWidth, windowHeight);
    }
  }

  // Expose triggers to outer scopes
  window.triggerSparkleBurst = triggerSparkleBurst;
  window.launchFireworkRocket = launchFireworkRocket;
  window.launchCelebrationShow = launchCelebrationShow;

  /* ────────────────────────────────────────────────────────────
     11. HELPER FUNCTIONS
  ──────────────────────────────────────────────────────────── */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

});
