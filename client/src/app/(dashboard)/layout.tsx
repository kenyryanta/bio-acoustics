// src/app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-xl text-green-700 border-b">Bio-Acoustics</div>
        <nav className="p-4 space-y-2">
          <a href="/overview" className="block p-2 rounded hover:bg-green-50 text-gray-700">Overview</a>
          <a href="/scan" className="block p-2 rounded hover:bg-green-50 text-gray-700">Scanner</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}page.tsx
      </main>
    </div>
  );
}