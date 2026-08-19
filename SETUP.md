# Panduan Menjalankan Aplikasi (Getting Started)

Dokumen ini berisi panduan langkah demi langkah untuk melakukan *setup* dan menjalankan aplikasi Bio-Acoustics di komputer lokal Anda untuk pertama kalinya.

## Persyaratan Sistem (Prerequisites)

Sebelum memulai, pastikan perangkat Anda telah menginstal beberapa alat berikut:
- **Node.js** (Direkomendasikan versi 18 atau 20 LTS)
- **NPM** atau **Yarn** atau **pnpm** (NPM akan disertakan secara default saat menginstal Node.js)
- **PostgreSQL** (Database SQL lokal yang sudah berjalan dan siap digunakan)
- **Git** (Untuk melakukan *clone* ke repositori lokal)

---

## Langkah-langkah Instalasi

### 1. Clone Repositori
Langkah pertama adalah mengunduh (*clone*) *source code* dari repositori ke komputer lokal Anda. Buka terminal dan jalankan:

```bash
git clone <url-repository-anda>
cd bio-acoustics-app
```

### 2. Konfigurasi Server (Backend)
Buka terminal baru untuk melakukan *setup* pada bagian aplikasi Node.js/Express.

1. **Masuk ke direktori server:**
   ```bash
   cd server
   ```
2. **Instal dependensi NPM:**
   ```bash
   npm install
   ```
3. **Konfigurasi Environment Variable (`.env`):**
   - Buat sebuah file baru bernama `.env` di dalam folder `server`.
   - Isi file `.env` tersebut dengan variabel yang dibutuhkan seperti akses database dan *secret key*. (Silakan sesuaikan *username*, *password*, dan nama *database* dengan konfigurasi PostgreSQL Anda):
     ```env
     PORT=5000
     DATABASE_URL=postgres://postgres:password123@localhost:5432/bio_acoustics_db
     JWT_SECRET=ganti_dengan_rahasia_jwt_anda
     ```
   *(Pastikan Anda telah membuat database kosong bernama `bio_acoustics_db` secara manual di PostgreSQL klien Anda, misal lewat pgAdmin/DBeaver/psql).*
4. **Setup Database (Migrasi & Seeding):**
   Karena backend menggunakan Drizzle ORM, jalankan perintah berikut untuk meng-generate skema, migrasi tabel ke dalam database PostgreSQL, dan mengisi data awal (seeder):
   ```bash
   npm run db:setup
   ```
5. **Jalankan Server Backend (Development Mode):**
   ```bash
   npm run dev
   ```
   Server backend saat ini harusnya berjalan di **http://localhost:5000**. **Biarkan terminal ini tetap berjalan (jangan ditutup).**

---

### 3. Konfigurasi Client (Frontend)
Buka terminal (atau tab) baru untuk melakukan *setup* aplikasi Next.js.

1. **Masuk ke direktori client:**
   Pastikan Anda berada di direktori root `bio-acoustics-app` sebelum masuk ke direktori `client`.
   ```bash
   cd client
   ```
2. **Instal dependensi NPM:**
   ```bash
   npm install
   ```
3. **Konfigurasi Environment Variable (`.env.local`):**
   - Buat file baru bernama `.env.local` di dalam folder `client`.
   - Tambahkan variabel yang berisi alamat URL tempat backend server Anda berjalan (biasanya port 5000):
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:5000/api
     ```
4. **Jalankan Server Frontend (Development Mode):**
   ```bash
   npm run dev
   ```
   Server aplikasi Next.js sekarang berjalan dan akan memproses halaman pertama kali saat dibuka.

---

## 4. Buka Aplikasi di Browser
Jika kedua server (Client dan Server) di atas tidak menunjukkan adanya *error* (*crash*) di terminal, bukalah browser web favorit Anda (Chrome, Firefox, Edge, dll).

Ketik dan akses alamat ini:
👉 **[http://localhost:3000](http://localhost:3000)**

Selamat! Anda telah berhasil menjalankan dan mengatur aplikasi Bio-Acoustics di mesin lokal Anda. 
Anda sekarang siap untuk mulai menulis kode (mengikuti panduan di `CONTRIBUTING.md`).
