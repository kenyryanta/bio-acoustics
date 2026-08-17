# Panduan Kontribusi & Pull Request (Contributing Guidelines)

Terima kasih telah berkontribusi dalam proyek Bio-Acoustics! Dokumen ini menjelaskan tata cara yang baik dalam membuat perubahan kode, dari membuat *branch*, melakukan perubahan, hingga cara melakukan *Pull Request* (PR) agar tim dapat bekerja sama dengan rapi.

---

## 1. Aturan Branch (Branching Strategy)

Repositori ini menggunakan strategi *branching* yang berpusat pada branch `development`.
- `main` / `master`: Branch produksi (stable). **JANGAN** pernah bekerja langsung atau *push* kode ke branch ini.
- `development`: Branch utama untuk tahap pengembangan. Semua fitur baru dan perbaikan bug akan digabungkan ke branch ini sebelum siap rilis. **Semua pembuatan *branch* baru harus berasal dari sini.**

### Penamaan Branch

Selalu buat *branch* baru untuk setiap tugas/fitur. Gunakan format penamaan berikut:
- **Fitur Baru:** `feat/<nama-fitur>` (contoh: `feat/login-page`, `feat/upload-audio`)
- **Perbaikan Bug:** `fix/<nama-bug>` atau `bugfix/<nama-bug>` (contoh: `fix/audio-player-error`)
- **Dokumentasi/Pekerjaan Lain:** `chore/<nama-pekerjaan>` atau `docs/<nama-dokumen>`

---

## 2. Alur Bekerja & Membuat Pull Request (Step-by-step)

Berikut adalah panduan lengkap dari awal membuat fitur hingga siap di-review oleh tim.

### Langkah 1: Pastikan branch `development` sudah paling terbaru
Sebelum memulai, selalu pastikan Anda berada di branch `development` dan mengambil pembaruan terbaru dari server.

```bash
git checkout development
git pull origin development
```

### Langkah 2: Buat Branch Baru dari Development
Buat *branch* baru sesuai dengan penamaan yang telah disepakati.

```bash
git checkout -b feat/nama-fitur-anda
```
*(Ganti `feat/nama-fitur-anda` sesuai dengan tugas Anda. Branch ini otomatis terbuat berdasarkan `development` yang terbaru).*

### Langkah 3: Lakukan Perubahan (Koding)
Lakukan pekerjaan Anda. Tulis kode atau perbaikan di file yang diperlukan. Jangan lupa lakukan pengetesan ringan secara lokal.

### Langkah 4: Simpan Perubahan (Commit)
Lakukan *commit* untuk menyimpan perubahan. Disarankan menggunakan penulisan *commit* yang deskriptif.

```bash
git add .
git commit -m "feat: menambahkan komponen audio player di halaman dashboard"
```

*Contoh prefix commit:*
- `feat:` (untuk penambahan fitur)
- `fix:` (untuk perbaikan bug/error)
- `docs:` (untuk merubah/menambahkan dokumentasi)
- `refactor:` (untuk perbaikan penulisan kode tanpa mengubah fitur)

### Langkah 5: Push Branch ke GitHub
Unggah branch yang Anda buat ke GitHub (remote).

```bash
git push origin feat/nama-fitur-anda
```

### Langkah 6: Membuat Pull Request (PR) di GitHub
1. Buka repositori proyek ini di browser GitHub Anda.
2. Anda biasanya akan langsung melihat tombol berwarna hijau **"Compare & pull request"** untuk branch yang baru di-*push*. Klik tombol tersebut.
3. **PENTING: Pastikan arah tujuan PR (Base Branch) sudah benar!**
   - **Base:** `development` (Tujuan fitur Anda akan digabungkan)
   - **Compare:** `feat/nama-fitur-anda` (Branch pekerjaan Anda)
4. Tulis judul PR yang jelas.
5. Isi deskripsi PR dengan baik, agar rekan yang me-*review* tahu apa yang Anda kerjakan.

#### 📝 Contoh Format Deskripsi Pull Request

```markdown
## Deskripsi
Menambahkan fitur pemutar audio akustik di halaman dashboard klien.
- Menambahkan route baru `/dashboard/audio`
- Membuat komponen `AudioPlayer` di folder `features`
- Menyambungkan endpoint backend API untuk streaming audio

## Jenis Perubahan
- [x] Fitur Baru (feat)
- [ ] Perbaikan Bug (fix)
- [ ] Refactor
- [ ] Dokumentasi

## Catatan Tambahan (Bila Ada)
Pemutar audio sudah dites secara fungsional. Mohon periksa kembali di bagian state management karena saya menggunakan context untuk mengontrol status play/pause.
```

6. Klik tombol hijau **Create Pull Request**.

---

## 3. Proses Code Review
- Setelah Pull Request terbuka, mintalah (assign) rekan satu tim Anda untuk melakukan *review*.
- Jika reviewer memberikan komentar/permintaan perubahan, **jangan buat PR baru**. Cukup edit file di lokal komputer Anda, lalu lakukan `git commit` dan `git push origin feat/nama-fitur-anda` lagi. Pull Request di GitHub akan diperbarui secara otomatis!
- Jika dirasa sudah aman, tidak ada error, dan di-setujui (*Approved*), *branch* fitur tersebut bisa di-*merge* ke `development`.
- **Hapus (Delete)** branch fitur Anda di GitHub setelah PR berhasil di-*merge* agar repositori tetap rapi.
