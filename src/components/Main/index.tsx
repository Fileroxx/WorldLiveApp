import { Container } from "react-bootstrap";
import styles from './styles.module.css'



export default function Main() {

    return(
        <div id={styles.main}>
            <Container>

                <div className={styles.texto}>

                    <h1>
                    A maior plataforma de eventos do Brasil
                    </h1>

                    <p>
                    Soluções completas para produtores de eventos e empreendedores digitais, 
                    desde a publicação, gestão, venda e entrega.
                    </p>

                </div>

            </Container>

        </div>
    )

}

