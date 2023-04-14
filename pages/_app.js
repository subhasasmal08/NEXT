import AppNavbar from "./components/AppNavbar";
import Head from "next/head";
import styles from"../styles/navbar.module.css"
import bg from '../assets/background.jpg'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import "../styles/globals.css"

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      {/* <div className={styles.app_main_wrapper roboto.className}> */}
      <div className={`${styles.app_main_wrapper} ${inter.className}`}>
      <AppNavbar />
      {/* <Image src={bg} /> */}
     <p className={styles.header}> AS/SO </p>
      <Component {...pageProps} />
      </div>
     
    </>
  );
}

export default MyApp;
