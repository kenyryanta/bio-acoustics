import { create } from 'zustand';
import { User } from '@/types/api.types';
import Cookies from 'js-cookie';

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: !!Cookies.get('token'),
  
  setUser: (user) => set({ user, isAuthenticated: true }),
  
  logout: () => {
    Cookies.remove('token');
    set({ user: null, isAuthenticated: false });
  },
}));