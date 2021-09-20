import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.css'

export default function Vistos(){

    return(
        <div id={styles.vistos}>
            <Container>
                <h3>Vistos recentemente</h3>

                <div className={styles.cards}>

                    
                    <div className={styles.card}>

                        <div className={styles.imagem}>
                            <img src="imagem1.png" alt=""/>
                        </div>

                        <div className={styles.horario}>
                            <p>17 AGO</p>
                            <span> > </span>
                            <p>20 AGO</p>
                        </div>

                        <div className={styles.titulo}>
                            <h4>EXPERIÊNCE SHOW</h4>
                        </div>

                        <div className={styles.local}>
                            <p>São Paulo</p>
                        </div>

                    </div>



                    <div className={styles.card}>

                        <div className={styles.imagem}>
                            <img src="imagem2.png" alt=""/>
                        </div>

                        <div className={styles.horario}>
                            <p>17 AGO</p>
                            <span> > </span>
                            <p>20 AGO</p>
                        </div>

                        <div className={styles.titulo}>
                            <h4>EXPERIÊNCE SHOW</h4>
                        </div>

                        <div className={styles.local}>
                            <p>São Paulo</p>
                        </div>

                    </div>
 

                </div>

            </Container>
        </div>
    )

}