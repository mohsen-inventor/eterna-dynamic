import type { Metadata } from 'next';
import './globals.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'EternaCloud - Product Lifecycle Partner',
  description: 'Design and build with ease. EternaCloud is the service making execution simple and effective for data center teams.',
  keywords: 'cloud, data center, product management, hyperscale, eternacloud',
  authors: [{ name: 'EternaCloud' }],
  openGraph: {
    type: 'website',
    title: 'EternaCloud - One partnership makes change easy',
    description: 'Product lifecycle partner for data center teams. Design and build with ease.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/avif" href="/images/favicon.avif" />
        
        {/* GSAP */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link" tabIndex={1}>
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
