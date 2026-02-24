import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';
import { sendResponse } from '../utils/response';
import { AppError } from '../utils/customErrors';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new AppError('Email dan password wajib diisi', 400);
      }

      const result = await this.authService.login(email, password);

      sendResponse(res, 200, 'Login berhasil', result);
    } catch (error) {
      next(error); // Lempar error ke error.middleware
    }
  };
}