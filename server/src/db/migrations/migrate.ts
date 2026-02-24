import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load .env karena script ini dijalankan terpisah dari server utama
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

const main = async () => {
  console.log('Memulai proses migrasi database...');
  try {
    // Arahkan ke folder tempat file migrasi disimpan
    await migrate(db, { migrationsFolder: 'src/db/migrations' });
    console.log('Migrasi database berhasil!');
    process.exit(0);
  } catch (error) {
    console.error('Migrasi gagal:', error);
    process.exit(1);
  }
};

main();