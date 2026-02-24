import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bio-Acoustics App',
  description: 'Deteksi Dini Invasi Hama',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}