import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import { users } from '../schema/users.schema';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

const runSeeder = async () => {
  console.log('Memulai proses seeding data...');
  
  try {
    const dummyPassword = 'password123';
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dummyPassword, saltRounds);

    await db.insert(users).values({
      name: 'Petani Demo',
      email: 'petani@demo.com',
      password: hashedPassword,
    });

    console.log(' Seeding berhasil! Akun demo telah dibuat:');
    console.log(' Email: petani@demo.com');
    console.log(' Password: password123');
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding gagal:', error);
    process.exit(1);
  }
};

runSeeder();