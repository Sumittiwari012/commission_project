"use client";

import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* The AuthProvider now handles all the 'Silent Refresh' 
            logic internally when the app first mounts. */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}