import { Container } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Footer() {
    return(
        <div id={styles.footer}>
            <Container>
               
                <div className={styles.logo}>
                

                     <img src="logoWhite.png" alt=""/>
                     
                   
               
                </div>

            </Container>
        </div>
    )
}