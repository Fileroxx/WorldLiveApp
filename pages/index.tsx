import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from '../src/components/Navbar';
import Main from '../src/components/Main';
import Categorias from '../src/components/Categorias';
import Destaques from '../src/components/Destaques';
import Vistos from '../src/components/Vistos';
import Eventos from '../src/components/Eventos';
import Footer from '../src/components/Footer';




const Home: NextPage = () => {



  return (
    <div>

      <Head>
        <title>WorldLive - Produza eventos e conteúdos digitais na maior plataforma do Brasil</title>
       
      </Head>



      <Container>
        
        <Navbar />
      
      </Container>

        <Main />

        <Categorias />

        <Destaques />
      
        <Vistos />

        <Eventos />

        <Footer />

    </div>
  )
}

export default Home
