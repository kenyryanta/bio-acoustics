'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const LoginForm = () => {
  const [email, setEmail] = useState('petani@demo.com'); // Pre-fill untuk testing
  const [password, setPassword] = useState('password123');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-700">Bio-Acoustics</h1>
        <p className="text-gray-500 text-sm mt-2">Deteksi Dini Invasi Hama</p>
      </div>

      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500 outline-none transition"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50 transition font-semibold"
        >
          {isLoading ? 'Memproses...' : 'Masuk ke Dashboard'}
        </button>
      </form>
    </div>
  );
};