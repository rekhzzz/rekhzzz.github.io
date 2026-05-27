# Analisis Desain: MyExtHub (Neo-Brutalism Style)

Dokumen ini berisi analisis detail mengenai elemen desain, tata letak, warna, tipografi, dan interaksi dari halaman detail ekstensi di [MyExtHub](https://myexthub.com/extensions/akddgghkhjhhnghfclkmmkcmdbpdcgej).

---

## 📸 Preview Visual

![MyExtHub Hero Section Screenshot](./neo-brutalism-preview.png)

---

## 🎨 Karakteristik & Gaya Utama: Neo-Brutalism
Desain website ini mengusung tema **Neo-Brutalism** modern dengan ciri khas:
* **High Contrast & Sharp Borders**: Garis luar hitam tebal pada hampir semua komponen interaktif.
* **Offset Flat Shadows**: Bayangan tegas berwarna hitam pekat (`#000000`) tanpa blur, menciptakan efek kedalaman 2D/komik yang kuat.
* **Playful Micro-interactions**: Efek miring (*tilt/rotate*) dan pergeseran koordinat (*translate*) saat kursor diarahkan ke elemen interaktif.
* **Dotted Matrix Grid Background**: Latar belakang abu-abu terang bermotif titik-titik (dot grid) untuk memperkuat kesan cetak/blueprint fisik.

---

## 🔴 Sistem Warna (Color Palette)

| Elemen / Komponen | Kode Warna / Kelas CSS | Visual / Keterangan |
| :--- | :--- | :--- |
| **Main Background** | `#F3F4F6` (Light Gray / Off-white) | Memiliki pola dot-grid hitam transparan di atasnya. |
| **Primary Button (CTA)** | `#E056FD` (Magenta/Purple) | Warna mencolok untuk aksi utama ("GET ACCESS"). |
| **Primary Button Hover** | `#BE2EDD` (Darker Magenta) | Transisi warna saat di-hover. |
| **Secondary Button** | `#F3F4F6` atau `#FFFFFF` | Latar belakang putih/abu-abu bersih dengan teks hitam tebal. |
| **Status Badge** | `#2ECC71` (Vibrant Green) | Digunakan untuk label status "ONLINE". |
| **Decorative Accent** | `#F1C40F` (Yellow) | Lingkaran dekoratif kuning di bagian kanan atas hero. |
| **Borders & Shadows** | `#000000` (Pure Black) | Digunakan untuk outline (`border-2 border-black`) dan bayangan solid. |

---

## ✍️ Tipografi (Typography)

* **Font Family**: Menggunakan font Geometric Sans-Serif modern (seperti *Inter*, *Lexend*, atau font sistem sans-serif yang bersih).
* **Main Title Heading**:
  * Kelas CSS: `text-6xl md:text-8xl font-black uppercase tracking-tight`
  * Karakteristik: Sangat besar, tebal, menggunakan huruf kapital untuk dominasi visual.
* **Section Title**:
  * Karakteristik: Menggunakan latar belakang blok warna kontras (seperti kuning) untuk menyoroti teks judul bagian secara brutal.
* **Body & Description**:
  * Karakteristik: Ukuran teks standar (`text-base` atau `text-lg`) dengan ketebalan sedang untuk menjaga keterbacaan di atas latar belakang bermotif.

---

## 🧱 Analisis Tata Letak & Komponen (Layout & Components)

### 1. Navigation Header
* Flexbox dengan distribusi `justify-between`.
* Sisi kiri: Tombol navigasi simpel dengan ikon panah (`← BACK TO COLLECTION`).
* Sisi tengah: Logo brand `MYEXTHUB` dengan gaya *italic-bold* hitam.

### 2. Hero Section
Tata letak terpusat (*centered layout*) yang tersusun vertikal:
1. **Icon Container**: Kotak putih berukuran medium dengan sudut tumpul (`rounded-2xl`), border hitam tebal, dan bayangan offset hitam. Di dalamnya terdapat ikon abu-abu bertekstur.
2. **Active Status Badge**: Bentuk kapsul/pill hijau cerah dengan teks hitam "ACTIVE STATUS: ONLINE".
3. **Main Header**: Judul besar "IMAGE SIZE INFO".
4. **Description**: Kalimat deskripsi dengan aksen garis vertikal tebal di sisi kiri sebagai dekorasi asimetris khas brutalism.
5. **Action Buttons**: Dua tombol bersandingan horizontal di desktop yang bertumpuk vertikal di mobile.

### 3. Card & Grid System ("Explore More Tools")
* Grid 3 kolom pada desktop, responsif menjadi 1 kolom pada mobile.
* Setiap kartu memiliki border hitam tebal, latar belakang putih, dan bayangan offset.
* **Efek Hover**: Kartu bergeser ke atas (`transform hover:-translate-y-1`) dan bayangan bergeser seolah-olah kartu terangkat dari layar.

### 4. FAQ Accordion
* Menggunakan elemen HTML standar `<details>` dan `<summary>` dengan styling custom.
* Setiap baris FAQ dipisahkan oleh border hitam tebal.
* Saat terbuka (`open`), latar belakang berubah dari putih menjadi kuning pastel lembut (`open:bg-yellow-50`), memberikan umpan balik visual yang jelas ke pengguna.

---

## 💻 Implementasi Code Snippets (Tailwind & CSS)

Gunakan snippet berikut jika Anda ingin meniru gaya Neo-Brutalism ini dalam proyek web Anda:

### 1. Style Tombol Neo-Brutalism Utama
```html
<button class="px-6 py-3 bg-[#e056fd] text-white font-bold border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#be2edd] hover:-rotate-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
  🔥 GET ACCESS $2.99/MONTH
</button>
```

### 2. Card Komponen Neo-Brutalism
```html
<div class="p-6 bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-[-1px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all">
  <h3 class="text-xl font-bold mb-2">Nama Ekstensi</h3>
  <p class="text-gray-700 text-sm">Deskripsi singkat mengenai fungsi ekstensi ini.</p>
</div>
```

### 3. Dotted Matrix Background (Tailwind & Arbitrary CSS)
```html
<div class="min-h-screen bg-[#f3f4f6]" style="background-image: radial-gradient(#000000 1px, transparent 1px); background-size: 24px 24px;">
  <!-- Konten Anda -->
</div>
```
