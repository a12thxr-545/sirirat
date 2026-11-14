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
     10. HELPER FUNCTIONS
  ──────────────────────────────────────────────────────────── */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

});
