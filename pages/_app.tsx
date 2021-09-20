import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }: AppProps) {



  return(
  <>
  <Component {...pageProps} />
  </>
  )
}
export default MyApp
