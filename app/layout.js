import { GoogleTagManager } from '@next/third-parties/google';
import '../styles/globals.css'
import './globals.css'
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: '4SFS - For Sure Funds | Real Estate',
  description: 'Find your dream property with 4SFS. We make real estate simple, transparent, and tailored to your needs.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`overflow-x-hidden w-screen`} style={{ backgroundPosition:'center', backgroundSize:'cover'}}>
        <div className="w-screen sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="w-full mt-12"> {children} </div>
        <div>
          <Footer />
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-" />
    </html>
  );
}
