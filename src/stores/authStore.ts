import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (email: string, password: string) => {
    // In a real app, you would validate credentials here
    set({ isAuthenticated: true });
  },
  logout: () => set({ isAuthenticated: false }),
}));