import { Col, Container, Row } from "react-bootstrap";
import styles from './styles.module.css'

export default function Eventos(){
    return(
        <div id={styles.eventos}>

        <Container>

        <h3>Outros Eventos</h3>

        <div className={styles.cards}>

                    
<div className={styles.card}>

    <div className={styles.imagem}>
        <img width="100%" src="imagem6.png" alt=""/>
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
        <img width="100%" src="imagem7.png" alt=""/>
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
        <img width="100%" src="imagem9.png" alt=""/>
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