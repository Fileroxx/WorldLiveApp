import { Button } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.css'

export default function Destaques(){
    return(
        <div id={styles.destaques}>
            <Container>
                <h3>Em destaque na WorldLive</h3>
          


            <Row>

                <Col md={6} xs={12} className={styles.imagem}>
                    <img width="100%" src="show.png" alt=""/>
                </Col>
        
                <Col md={6} xs={12} className={styles.conteudo}>

                    <div className={styles.info}>

        
                    <p>SEX -</p>
                    <p>09 DE ABRIL DE 2022 -</p>
                    <p>20H</p>

                    </div>


                    <div className={styles.titulo}>
                        <h3>Experiênce Show</h3>
                    </div>

                    <div className={styles.local}>
                        <p>São Paulo, Brasil</p>
                    </div>


                    <Button
                        className={styles.botao}
                    
                       
                    >
                        VER DETALHES
                    </Button>


                    <center>

                    <Button
                        className={styles.botaoMobile}
                    
                       
                    >
                        VER DETALHES
                    </Button>

                    </center>


                </Col>


            </Row>

            </Container>
        </div>
    )
}