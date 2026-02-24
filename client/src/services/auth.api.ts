import { apiClient } from '@/lib/axios';
import { AuthResponse } from '@/types/api.types';

export const authApi = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', {
      email,
      password,
    });
    return response.data;
  },
};