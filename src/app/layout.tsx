import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Varshasri K | Full Stack Developer Portfolio',
  description:
    'Personal Portfolio of Varshasri K — Full Stack Developer & M.Sc. Software Systems student at Kongu Engineering College. Specializing in Next.js, React.js, Python, FastAPI, and PostgreSQL.',
  keywords: [
    'Varshasri K',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Kongu Engineering College',
    'Multi-Agent AI',
    'Smart Campus Seat Management',
    'Software Engineer',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Varshasri K' }],
  creator: 'Varshasri K',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://varshasri-portfolio.vercel.app',
    title: 'Varshasri K | Full Stack Developer Portfolio',
    description:
      'Explore projects, skills, internship experience, and credentials of Varshasri K — Full Stack Developer.',
    siteName: 'Varshasri K Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varshasri K | Full Stack Developer Portfolio',
    description:
      'Full Stack Developer Portfolio showcasing Next.js, React.js, FastAPI, and PostgreSQL projects.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-purple-600 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
