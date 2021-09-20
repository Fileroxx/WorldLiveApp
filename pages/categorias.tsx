import {Container} from 'react-bootstrap'
import React from 'react'
import styles from '../styles/categorias.module.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

export default function categorias(){
    return(
        <div id={styles.categorias}>

           

            <Container>

            <Navbar />

                <h1>Categorias</h1>


                <div className={styles.categoria}>

                <div className={styles.cardCategoria}>
                <img width="35%" src="/img12.png" /> 
                <br/>
                <a href="#">WorldLive Play</a>
                </div>


                <div className={styles.cardCategoria}>
                <img width="35%" src="/img4.png" /> 
                <br/>
                <a href="#">Eventos Online</a>
                </div>


                <div className={styles.cardCategoria}>
                <img width="35%" src="/img5.png" /> 
                <br/>
                <a href="#">Teatros e Espetáculos</a>
                </div>


                <div className={styles.cardCategoria}>
                <img width="35%" src="/img13.png" /> 
                <br/>
                <a href="#">Passeios e Tours</a>
                </div>


                <div className={styles.cardCategoria}>
                <img width="35%" src="/img1.png" /> 
                <br/>
                <a href="#">Cursos e Workshops</a>
                </div>

                <div className={styles.cardCategoria}>
                <img width="35%" src="/img3.png" /> 
                <br/>
                <a href="#">Infantil</a>
                </div>


                <div className={styles.cardCategoria}>
                <img width="35%" src="/img6.png" /> 
                <br/>
                <a href="#">Esportes</a>
                </div>

                <div className={styles.cardCategoria}>
                <img width="35%" src="/img7.png" /> 
                <br/>
                <a href="#">Réveillon 2022</a>
                </div>

                <div className={styles.cardCategoria}>
                <img width="35%" src="/img10.png" /> 
                <br/>
                <a href="#">Festas e shows</a>
                </div>

                </div>

           

            </Container>
            <br/><br/><br/><br/><br/>
            <Footer />

        </div>
    )
}