/**
 * PORTFOLIO GURU - HISYAM ABILKHOIR A.Md.Kom
 * Vanilla JavaScript Interactions & Micro-animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. NAVBAR SCROLL EFFECT & MOBILE DRAWER ---
  const navbar = document.querySelector('.navbar');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navMenu = document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // --- 2. ACTIVE NAV LINK ON SCROLL (SCROLLSPY) ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  });

  // --- 3. ANIMATED NUMBER COUNTERS (INTERSECTION OBSERVER) ---
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // Ease-out quad formula
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.round(easeProgress * target);

      el.textContent = currentCount + suffix;

      if (frame === totalFrames) {
        clearInterval(counter);
        el.textContent = target + suffix;
      }
    }, frameRate);
  };

  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          statNumbers.forEach(stat => countUp(stat));
          animatedStats = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  } else {
    statNumbers.forEach(stat => {
      stat.textContent = stat.getAttribute('data-target') + (stat.getAttribute('data-suffix') || '');
    });
  }

  // --- 4. FAQ ACCORDION ---
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Optional: close other accordions
      accordionItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });

  // Open first FAQ by default
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add('active');
  }

  // --- 5. BOOKING MODAL & WHATSAPP INTEGRATION ---
  const bookingModal = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');
  const closeModalBtns = document.querySelectorAll('.modal-close-trigger');
  const bookingForm = document.getElementById('bookingForm');
  const WHATSAPP_NUMBER = '6285973729267'; // Hisyam Abilkhoir A.Md.Kom

  const openModal = (defaultSubject = '') => {
    if (bookingModal) {
      if (defaultSubject && document.getElementById('bookingSubject')) {
        document.getElementById('bookingSubject').value = defaultSubject;
      }
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (bookingModal) {
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    const articleModal = document.getElementById('articleModal');
    if (articleModal) {
      articleModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const subject = btn.getAttribute('data-subject') || '';
      openModal(subject);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close on ESC key or clicking outside dialog
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  });

  // Handle WhatsApp Form submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('studentName').value.trim();
      const grade = document.getElementById('studentGrade').value;
      const subject = document.getElementById('bookingSubject').value;
      const sessionType = document.getElementById('sessionType').value;
      const message = document.getElementById('studentNotes').value.trim();

      const text = `Halo Kak Hisyam Abilkhoir,\n\nSaya ingin konsultasi / mendaftar sesi bimbingan belajar:\n` +
        `• Nama: ${name}\n` +
        `• Jenjang: ${grade}\n` +
        `• Mata Pelajaran: ${subject}\n` +
        `• Pilihan Sesi: ${sessionType}\n` +
        (message ? `• Catatan: ${message}\n\n` : '\n') +
        `Mohon info ketersediaan jadwal dan program belajarnya. Terima kasih!`;

      const encodedText = encodeURIComponent(text);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

      window.open(waUrl, '_blank');
      closeModal();
    });
  }

  // Direct WhatsApp Button link generator
  document.querySelectorAll('.direct-wa-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultText = encodeURIComponent("Halo Kak Hisyam Abilkhoir, saya tertarik dengan bimbingan belajar privat. Boleh minta informasi program dan jadwalnya?");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultText}`, '_blank');
    });
  });

  // --- 6. ARTICLE DETAILS MODAL ---
  const articleModal = document.getElementById('articleModal');
  const articleCards = document.querySelectorAll('.article-card');

  const articleContents = {
    '1': {
      title: '5 Cara Membuat Anak Tidak Takut Matematika',
      tag: 'Tips & Trik',
      date: '12 Aug 2025',
      image: './assets/images/article-1.jpg',
      content: `
        <p>Banyak siswa memandang matematika sebagai momok menakutkan karena pendekatan belajar yang terlalu menekankan hafalan rumus, bukan pemahaman logika dasar.</p>
        <p><strong>1. Kaitkan dengan Kehidupan Sehari-hari</strong><br>Bantu siswa memahami konsep hitung lewat contoh nyata: menghitung kembalian belanja, resep masakan, atau statistik skor olahraga favorit mereka.</p>
        <p><strong>2. Gunakan Visualisasi dan Manipulatif</strong><br>Gambar grafik, diagram warna, atau model fisik untuk menjelaskan konsep abstrak seperti pecahan dan geometri.</p>
        <p><strong>3. Beri Ruang untuk Melakukan Kesalahan</strong><br>Kesalahan adalah bagian krusial dari proses berpikir matematis. Alih-alih menyalahkan, ajak siswa meneliti di mana letak logika yang keliru.</p>
        <p><strong>4. Rayakan Usaha, Bukan Hanya Hasil Akhir</strong><br>Apresiasi ketekunan siswa saat mencoba menyelesaikan soal rumit agar mereka membangun daya juang belajar (growth mindset).</p>
        <p><strong>5. Gunakan Pendekatan Personal yang Sabar</strong><br>Setiap anak memiliki ritme menyerap konsep yang unik. Pendampingan one-on-one membantu membangun rasa percaya diri langkah demi langkah.</p>
      `
    },
    '2': {
      title: 'Persiapan Menghadapi Olimpiade Matematika',
      tag: 'Olimpiade',
      date: '3 Aug 2025',
      image: './assets/images/article-2.jpg',
      content: `
        <p>Olimpiade Matematika (OSN / KSN) menuntut pemikiran kreatif non-konvensional yang jauh melampaui kurikulum sekolah standar.</p>
        <p><strong>Fondasi Logika yang Kuat</strong><br>Sebelum menyentuh soal-soal tingkat lanjut, pastikan 4 pilar dasar olimpiade (Aljabar, Geometri, Teori Bilangan, dan Kombinatorika) dikuasai secara komprehensif.</p>
        <p><strong>Latihan Soal Pola dan Pembuktian</strong><br>Berlatihlah membuktikan teorema bukan sekadar menghafal. Biasakan memecahkan satu soal dengan 2 atau 3 cara penyelesaian yang berbeda.</p>
        <p><strong>Manajemen Waktu & Mental Juara</strong><br>Simulasi ujian dengan batas waktu ketat secara periodik sangat penting agar siswa terbiasa berpikir jernih di bawah tekanan waktu perlombaan.</p>
      `
    },
    '3': {
      title: 'Peran Orang Tua dalam Mendukung Proses Belajar Anak',
      tag: 'Parenting',
      date: '28 Jul 2025',
      image: './assets/images/article-3.jpg',
      content: `
        <p>Dukungan emosional dari orang tua adalah katalis terbaik untuk kesuksesan akademis jangka panjang anak.</p>
        <p><strong>Ciptakan Lingkungan Belajar yang Nyaman</strong><br>Ruang belajar yang tenang, teratur, dan minim distraksi digital membantu daya fokus anak meningkat secara signifikan.</p>
        <p><strong>Jadilah Pendengar yang Aktif</strong><br>Tanyakan apa yang mereka rasakan saat menghadapi materi sulit. Sering kali, yang mereka butuhkan adalah empati sebelum solusi teknis.</p>
        <p><strong>Kolaborasi Erat dengan Guru & Mentor</strong><br>Pantau progres berkala melalui laporan tutor agar bimbingan di rumah dan di ruang privat berjalan selaras dan berkelanjutan.</p>
      `
    }
  };

  articleCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const data = articleContents[id];
      if (data && articleModal) {
        document.getElementById('modalArticleTag').textContent = data.tag;
        document.getElementById('modalArticleTitle').textContent = data.title;
        document.getElementById('modalArticleDate').textContent = data.date;
        document.getElementById('modalArticleImg').src = data.image;
        document.getElementById('modalArticleBody').innerHTML = data.content;
        articleModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // --- 7. CAROUSEL PREV/NEXT ARROWS FOR ACHIEVEMENTS & STORIES ---
  const achieveGrid = document.querySelector('.students-cards-grid');
  const achievePrev = document.getElementById('achievePrev');
  const achieveNext = document.getElementById('achieveNext');

  if (achieveGrid && achievePrev && achieveNext) {
    achievePrev.addEventListener('click', () => {
      achieveGrid.scrollBy({ left: -240, behavior: 'smooth' });
    });
    achieveNext.addEventListener('click', () => {
      achieveGrid.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }
});
