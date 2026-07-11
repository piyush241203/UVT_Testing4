import React from 'react';

export const metadata = {
  title: 'Next.js Demo App',
  description: 'Next.js App Router visual testing verification application'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
