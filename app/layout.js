import '../assets/globals.css';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/hooks/Authcontext';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
  display: "swap",
});

export const metadata = {
  title: "PacMate",
  keywords: "travel, money, earn, income, remote work, digital nomad",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className}`}
      >
          <AuthProvider>
        <main className='max-w-md mx-auto bg-white'>
        {children}
        </main>
          </AuthProvider>
      </body>
    </html>
  );
}
