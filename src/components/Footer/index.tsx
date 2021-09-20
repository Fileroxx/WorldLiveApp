import { Container } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Footer() {
    return(
        <div id={styles.footer}>
            <Container>
               
                <div className={styles.logo}>
                    <center>

                     <img src="logoWhite.png" alt=""/>
                     
                    </center>
               
                </div>

            </Container>
        </div>
    )
}