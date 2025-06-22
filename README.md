# irma-tugas-sesi10
Repository ini berisi tugas sesi 10, melanjutkan tugas sesi 9, dengan fokus pada pengujian otomatisasi fitur pada website SauceDemo menggunakan Selenium WebDriver dan Mocha.

# Pengujian mencakup:

- Login Berhasil: Validasi pengguna dapat login dengan kredensial yang benar.

- Sortir Produk (Z ke A): Pengujian fungsi sortir produk pada halaman inventaris.

# Teknologi yang Digunakan
- Node.js

- Selenium WebDriver

- Mocha sebagai framework testing.

- Mochawesome untuk menghasilkan laporan testing dalam format HTML.

# Fitur Utama
- Opsi Browser Incognito: Pengujian dilakukan dalam mode incognito untuk menghindari gangguan pop-up.

- Hooks:

- beforeEach untuk membuka browser sebelum setiap pengujian.

- afterEach untuk menutup browser setelah setiap pengujian.

- Laporan Testing: Hasil pengujian otomatis di-generate dalam format HTML menggunakan Mochawesome.

# Struktur Proyek
- tests/: Berisi file pengujian otomatisasi.

- package.json: File konfigurasi dependencies dan script.

- package-lock.json: File otomatis yang mengunci versi dependencies.

- Laporan HTML: Hasil pengujian dalam format HTML, tersedia di folder mochawesome-report.


