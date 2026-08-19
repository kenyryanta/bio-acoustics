import { redirect } from 'next/navigation';

export default function RootPage() {
  // Secara otomatis arahkan pengguna dari '/' (root) ke '/login'
  redirect('/login');
}
