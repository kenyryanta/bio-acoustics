import { Router } from 'express';
import authRoutes from './auth.routes';

const router = Router();

router.use('/auth', authRoutes);
// router.use('/iot', iotRoutes); // Nanti di-uncomment jika sudah dibuat
// router.use('/scan', scanRoutes);

export default router;