import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/services/auth.api';
import { useUserStore } from '@/stores/useUserStore';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authApi.login(email, password);
      
      if (response.success) {
        // Simpan token ke cookie
        Cookies.set('token', response.data.token, { expires: 1 }); // Expire 1 hari
        
        // Update global state
        setUser(response.data.user);
        
        // Arahkan ke dashboard
        router.push('/overview');
      }
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        setError(err.response.data.message || 'Login gagal. Periksa kredensial Anda.');
      } else {
        setError('Terjadi kesalahan pada jaringan.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};