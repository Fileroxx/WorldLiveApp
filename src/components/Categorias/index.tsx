import { Container } from "react-bootstrap";
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination"
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import SwiperCore, { Pagination} from 'swiper';
import Link from 'next/link'
  



SwiperCore.use([Pagination])

export default function Categorias(){

    return(
        <div id={styles.categorias}>
            <Container>

            <h3>Viva tudo que te conecta</h3>    


                <Swiper
        pagination={{ 
            "clickable": true
        }}
        spaceBetween={0}
        slidesPerView={5}
        className={styles.swiper}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            "320": {
                "slidesPerView": 2,
            },

            "1000": {
                "slidesPerView": 6,
            }

        }}
        >


        <SwiperSlide className={styles.swiper} style={{display: 'flex', flexDirection: 'column'}}>
           
         <img 
         style={{borderRadius: '50%', width: '140px', height: '140px'}} 
         src="img12.png" 
         alt=""
         className={styles.imagemCategoria}
         />

         
        <a className={styles.nomeCategoria} href="#">WorldLive Play</a>
        
        
        
        </SwiperSlide>




        <SwiperSlide style={{display: 'flex', flexDirection: 'column'}}>

        <img 
         style={{borderRadius: '50%', width: '140px', height: '140px'}} 
         src="img4.png" 
         alt=""
        className={styles.imagemCategoria}
         />


        <a className={styles.nomeCategoria} href="#">Eventos Online</a>

        </SwiperSlide>
        
        
        <SwiperSlide style={{display: 'flex', flexDirection: 'column'}}>
        
        <img 
         style={{borderRadius: '50%', width: '140px', height: '140px'}} 
         src="img5.png" 
         alt=""
         className={styles.imagemCategoria}
         />

        <a className={styles.nomeCategoria} href="#">Teatros e espetáculos</a>
        
        </SwiperSlide>
        
        
        <SwiperSlide style={{display: 'flex', flexDirection: 'column'}}>

        <img 
         style={{borderRadius: '50%', width: '140px', height: '140px'}} 
         src="img1.png" 
         alt=""
         className={styles.imagemCategoria}
         />


        <a className={styles.nomeCategoria} href="#">Cursos e Workshops</a>

        </SwiperSlide>



        <SwiperSlide style={{display: 'flex', flexDirection: 'column'}}>

            <img 
            style={{borderRadius: '50%', width: '140px', height: '140px'}} 
            src="img13.png" 
            alt=""
            className={styles.imagemCategoria}
            />


            <a className={styles.nomeCategoria} href="#">Passeios e tours</a>

            </SwiperSlide>


  
            <SwiperSlide style={{display: 'flex', flexDirection: 'column'}}>

            <img 
            style={{borderRadius: '50%', width: '140px', height: '140px'}} 
            src="img6.png" 
            alt=""
            className={styles.imagemCategoria}
            />


            <a className={styles.nomeCategoria} href="#">Congressos e palestras</a>

            </SwiperSlide>



            <SwiperSlide style={{display: 'flex', flexDirection: 'column'}}>

        
        <Link href="/categorias">

        <img className={styles.seta} src="seta.svg" alt=""/>
        
        </Link>

          

        <Link href="/categorias"> 
        
           <a className={styles.verMais}>Ver tudo</a>

        </Link>
          
            
            </SwiperSlide>


    </Swiper>


         </Container>

        </div>
    )
}