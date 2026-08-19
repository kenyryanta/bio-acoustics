# Struktur Folder Proyek Bio-Acoustics

Proyek ini menggunakan arsitektur monorepo sederhana dengan memisahkan bagian **Client** (Frontend) dan **Server** (Backend) di dalam satu repositori.

## Root Directory

```text
bio-acoustics-app/
├── client/          # Aplikasi Frontend (Next.js)
├── server/          # Aplikasi Backend (Node.js/Express + Drizzle ORM)
├── .git/            # Konfigurasi Git
└── ...
```

## 1. Client (Frontend)
Bagian Frontend dibangun menggunakan framework **Next.js** (menggunakan arsitektur App Router) dengan bahasa pemrograman **TypeScript**.

```text
client/
├── public/                # File statis yang dapat diakses publik (gambar, ikon, font)
├── src/
│   ├── app/               # Folder utama Next.js App Router (page, layout, API routes Next)
│   ├── features/          # Komponen dan logika yang dikelompokkan berdasarkan fitur spesifik (domain-driven)
│   ├── hooks/             # Custom React Hooks untuk logika yang dapat digunakan kembali
│   ├── lib/               # Konfigurasi library eksternal (axios instance, utilitas pihak ketiga)
│   ├── services/          # Fungsi untuk memanggil API backend (API wrapper calls)
│   ├── stores/            # Konfigurasi state management global (Zustand, Context, dll)
│   └── types/             # Definisi tipe antarmuka (interface) TypeScript secara global
├── .env.local             # Environment variables untuk sisi klien (lokal)
├── eslint.config.mjs      # Konfigurasi linter ESLint
├── next.config.ts         # Konfigurasi proyek Next.js
├── package.json           # Dependensi NPM dan script project frontend
├── tsconfig.json          # Konfigurasi TypeScript untuk sisi frontend
└── ...
```

## 2. Server (Backend)
Bagian Backend dibangun menggunakan **Node.js, Express**, dan **Drizzle ORM** untuk interaksi database dengan **TypeScript**.

```text
server/
├── src/
│   ├── config/            # File konfigurasi utama (misal: variabel lingkungan, konstanta)
│   ├── controllers/       # Logika kontroler utama (menangani permintaan & respons API)
│   ├── db/                # Konfigurasi Database dan Skema (menggunakan Drizzle ORM)
│   ├── middlewares/       # Fungsi Middleware Express (autentikasi, penanganan error, logger)
│   ├── routes/            # Definisi alur (endpoint API)
│   ├── services/          # Logika bisnis aplikasi dan akses abstraksi database
│   ├── utils/             # Fungsi bantuan (helper / utility function)
│   ├── app.ts             # File pengaturan dan inisialisasi Express app
│   └── server.ts          # Entry point aplikasi backend (file utama untuk menjalankan server)
├── .env                   # Environment variables untuk sisi backend (port, kredensial DB, rahasia JWT)
├── drizzle.config.ts      # Konfigurasi spesifik Drizzle ORM untuk migrasi dan skema
├── package.json           # Dependensi NPM dan script project backend
└── ...
```
