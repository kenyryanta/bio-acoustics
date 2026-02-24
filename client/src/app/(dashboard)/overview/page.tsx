// src/app/(dashboard)/overview/page.tsx
'use client';
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'next/navigation';

export default function OverviewPage() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard Lahan</h1>
        <button onClick={handleLogout} className="text-red-600 hover:text-red-800 font-medium">
          Logout
        </button>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-2">Selamat datang, {user?.name || 'Petani'}!</h2>
        <p className="text-gray-600">Sistem pemantauan hama aktif. Menunggu data dari sensor IoT...</p>
      </div>
    </div>
  );
}