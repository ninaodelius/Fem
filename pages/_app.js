import '../styles/globals.css'
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
  </Head>
  
  <Component {...pageProps} /></>
  )
}
export default MyApp
