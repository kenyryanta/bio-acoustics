import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/db';
import { users } from '../db/schema/users.schema';
import { eq } from 'drizzle-orm';
import { config } from '../config/env';
import { AppError } from '../utils/customErrors';

export class AuthService {
  public async login(email: string, pass: string) {
    // 1. Cek keberadaan user
    const userResult = await db.select().from(users).where(eq(users.email, email));
    const user = userResult[0];

    if (!user) {
      throw new AppError('Email atau password salah', 401);
    }

    // 2. Verifikasi hash password
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new AppError('Email atau password salah', 401);
    }

    // 3. Generate Token
    const token = jwt.sign(
      { id: user.id, name: user.name },
      config.jwtSecret,
      { expiresIn: '1d' }
    );

    // 4. Hilangkan password dari response data
    const { password, ...userData } = user;

    return { token, user: userData };
  }
}