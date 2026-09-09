# Portofolio Guru & Private Tutor — Hisyam Abilkhoir A.Md.Kom

Website portofolio profesional dan elegan untuk pendidik / tutor privat, dirancang dengan presisi sesuai mockup visual, responsif di seluruh perangkat (Desktop, Tablet, Mobile), dan dibangun menggunakan **HTML5, CSS3 murni, dan Vanilla JavaScript** tanpa dependensi bundler atau framework, sehingga **100% siap di-hosting langsung di GitHub Pages**.

---

## 🌟 Fitur Utama

- **Desain Editorial Elegan**: Nuansa warm cream / paper aesthetic (`#FBF9F5`), tipografi luxury serif (`Playfair Display`), tipografi tulisan tangan alami (`Caveat`), dan tipografi sans-serif modern (`Plus Jakarta Sans`).
- **13 Bagian Sesuai Mockup**:
  1. **Navbar**: Monogram brand, link navigasi presisi, dan tombol CTA "Book a Session" + mobile hamburger menu.
  2. **Hero Section**: Tagline, headline dengan penekanan serif italic, foto portrait Hisyam Abilkhoir dengan layer backdrop, aksen tulisan tangan *"Good Education Brighter Future"*, quote card `01`, dan social proof avatar.
  3. **Stats Counter Strip**: Penghitung otomatis angka animasi saat discroll (12+ Tahun Pengalaman, 150+ Siswa Dibimbing, 25+ Prestasi Siswa, 4 Mata Pelajaran).
  4. **About Me**: Kolase visual estetik, monogram card, narasi filosofi mengajar, serta grid metadata kualifikasi (Pendidikan, Sertifikasi, Jenjang, Lokasi).
  5. **Subjects I Teach (02)**: Kartu mata pelajaran (Matematika, Fisika, Exam Prep, Academic Mentoring) dan visual buku dengan note tulisan tangan.
  6. **Teaching Method (03)**: Stepper 4 tahap (*Understand &rarr; Practice &rarr; Evaluate &rarr; Improve*) dengan nomor urut dan panah.
  7. **Private Tutoring (04)**: 3 kartu layanan bimbingan (*Regular Private, Exam Preparation, Olympiad Coaching*) dan ribbon 5 fitur keunggulan belajar.
  8. **My Students (05)**: Prestasi siswa dengan medali, foto, nama, dan testimoni singkat (Rafi, Nadia, Dimas, Alya) + quote note motivasi.
  9. **Student Stories**: Testimoni mendalam dari siswa dan orang tua dengan format kartu kutipan elegan.
  10. **Gallery (Moments That Matter)**: Strip dokumentasi suasana belajar dan bimbingan yang interaktif.
  11. **Articles (Thoughts & Insights)**: Kartu artikel edukasi dengan modal reader interaktif pop-up.
  12. **FAQ & CTA**: Accordion tanya-jawab yang smooth dan expandable + banner call-to-action ke WhatsApp.
  13. **Footer**: Brand, navigasi cepat, ikon sosial media, dan hak cipta.
- **Integrasi WhatsApp**: Tombol *"Book a Session"* dan form konsultasi langsung mengarahkan ke WhatsApp resmi Kak Hisyam (`+6285973729267`) dengan draf pesan yang otomatis terisi rapi.
- **Modal Reader Artikel**: Pengunjung dapat membaca rangkuman artikel tips belajar langsung di dalam website tanpa reload.

---

## 📁 Struktur Berkas

```
portofolio-guru/
├── index.html              # Struktur semantik HTML5 utama
├── README.md               # Dokumentasi dan panduan deployment
├── assets/
│   ├── css/
│   │   └── style.css       # Token desain, tipografi, layout responsif & animasi
│   ├── js/
│   │   └── main.js         # Interaktivitas (Navbar scrollspy, counter, modal, FAQ, slider)
│   └── images/             # Seluruh aset fotografi lokal berkualitas tinggi
│       ├── hero-teacher.jpg
│       ├── about-books.jpg
│       ├── subject-books.jpg
│       ├── method-notebook.jpg
│       ├── service-1.jpg
│       ├── service-2.jpg
│       ├── service-3.jpg
│       ├── student-rafi.jpg
│       ├── student-nadia.jpg
│       ├── student-dimas.jpg
│       ├── student-alya.jpg
│       ├── testimonial-aulia.jpg
│       ├── testimonial-rina.jpg
│       ├── gallery-1.jpg s/d gallery-5.jpg
│       ├── article-1.jpg s/d article-3.jpg
│       └── cta-room.jpg
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Buka Langsung di Browser**:
   - Cukup klik dua kali pada berkas `index.html`, atau drag & drop ke browser apa saja (Chrome, Edge, Firefox).
2. **Atau Melalui XAMPP / Local Server**:
   - Karena berada di folder `c:\xampp\htdocs\bisnis_web\portofolio-guru`, Anda dapat menyalakan Apache di XAMPP lalu buka:
     `http://localhost/bisnis_web/portofolio-guru/`

---

## 🌐 Panduan Upload ke GitHub Pages (Gratis & Cepat)

Karena proyek ini menggunakan HTML, CSS, dan JS murni dengan jalur aset relatif (`./assets/...`), website ini langsung aktif di GitHub Pages tanpa konfigurasi rumit:

1. Buat repositori baru di GitHub (misal: `portofolio-guru`).
2. Jalankan perintah berikut di folder proyek ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Hisyam Abilkhoir"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/portofolio-guru.git
   git push -u origin main
   ```
3. Di halaman GitHub repositori Anda:
   - Buka tab **Settings** &rarr; menu **Pages** di sebelah kiri.
   - Pada bagian **Build and deployment** &rarr; **Branch**, pilih **main** dan folder **/(root)**.
   - Klik **Save**.
4. Dalam 1-2 menit, website Anda sudah aktif secara publik di alamat:
   `https://USERNAME-ANDA.github.io/portofolio-guru/`

---

## 📞 Kontak & Kustomisasi Nomor

Untuk mengganti nomor WhatsApp atau nomor tujuan pemesanan di masa mendatang:
- Buka berkas `assets/js/main.js` pada baris:
  ```javascript
  const WHATSAPP_NUMBER = '6285973729267';
  ```
- Dan perbarui atribut `href="https://wa.me/..."` pada tombol CTA di `index.html`.
