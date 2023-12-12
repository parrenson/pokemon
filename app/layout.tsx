import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import { monserrat } from './fonts';
import { Providers } from "./providers";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PokeAPP',
  description: 'PokeAPP es una aplicación web desarrollada con NextJS.',
  keywords: 'pokemon, pokeapp, nextjs, reactjs',
  authors: [
    {
      name: 'Nicolas Barona',
    }
  ],

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${monserrat.className} antialised container p-5 pb-md-5`}>
        <Providers>
          <div className="display-1 fw-bold text-center mb-5">
            <span>Pokémon</span>
          </div>
          {children}
        </Providers>

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-4WZSCZL2GQ"
            strategy="afterInteractive"
          />
          <Script
            id="gtag-script"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-4WZSCZL2GQ');
            `,
            }}
          />
      </body>
    </html>
  );
}