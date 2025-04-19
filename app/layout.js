//import Head from "next/head"
import './globals.css'
import Link from "next/link"
import { Bebas_Neue, Play } from "next/font/google";
import css from "./globals.module.css";
import { Banner, NavBar, Footer } from 'shared'
//import {Card, Picture, Carousel, Showreels} from 'shared'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const play = Play({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-play',
  display: 'swap',
});

export const metadata = {
  title: "CREO | Agencia Digital",
  description: "Agencia de Publicidad numero uno de El Salvador. Marcas locales e internacionales. ¡8 años de creatividad imparable! Creemos en el poder de las ideas. Creamos soluciones que dejan huella. Nuestra especialidad: destacar en un mundo lleno de ruido.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="./icon.svg"
        />
      </head>
      <body className={`${bebasNeue.variable} ${play.variable} ${css.container}`}>
        <header className={css.head}>
          <Banner />
          <NavBar />
        </header>
        <main className={css.middle}>
          { children }
          <Footer />
        </main>
      </body>
    </html>
  );
}

      //<body className={`${geistSans.variable} ${geistMono.variable}`}>
      //  {children}
      //</body>
