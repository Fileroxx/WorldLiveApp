import { NavDropdown } from "react-bootstrap";
import styles from './styles.module.css'
import Location from '../Location'
import { Button } from "@material-ui/core";
import Search from "../Search";
import Link from 'next/link';
import React from 'react';


export default function Navbar(){

  


    return (
        <>

        <div id={styles.navbar}>
        
       
        <nav className={styles.navbar}>

            <div className="navbar-brand" >
               
                <Link href="/">
                    <img className={styles.logo} src="logo.png" alt=""/>
                </Link>

                </div>

            <Search />

            <Location />

            <div className={styles.botoes}>
            <Button className={styles.botaoProdutor}>SEJA UM PRODUTOR</Button>

        <Link href="/login">
            <Button className={styles.botaoAcessar}>ACESSAR SUA CONTA</Button>
        </Link>
           
            </div>
            

     
           <Link href="/cadastro">
             <Button className={styles.botaoCadastro}>CADASTRE-SE</Button>
           </Link> 

        </nav>

     

         </div>

        </>    
    );
    
}


