import { Button, Checkbox, createStyles, Divider, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core';
import { AccountCircle, MailOutlined } from '@material-ui/icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function LogIn(){
    
    const classes = useStyles();
    
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    


    return(
        <div id={styles.cadastro}>
            <Container>

                <Row>

                    <Col>
                        <div className={styles.cardCadastro}>
                        <center>


                        <h3>Login</h3>

                        <Button
                        className={styles.botaoFacebook}
                        >

                        Entrar com o Facebook

                        </Button>

                        <Divider className={styles.divisor} />

                        <FormControl className={classes.margin}>
                           
                        <div className={styles.email}>
                        <MailOutlined className={styles.icone} />
                        <TextField className={styles.inputEmail} label="E-mail"></TextField>
                        </div>


                        
                        <div className={styles.senha}>
                         <LockIcon className={styles.icone} />
                          <Input 
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                           
                        
                        }
                        className={styles.inputSenha} 
                        >
                        </Input>
                        </div>

                        
                        <FormControlLabel
                        className={styles.conectado}
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Mantenha-me conectado"
                        labelPlacement="end"
                        />

                        <Button 
                        type="submit"
                        className={styles.login}
                        >
                            LOGIN
                        </Button>

                         </FormControl>
                        
                        <div className={styles.esqueceu}>
                            <p>Esqueceu a senha? <Link href="/"><span>Clique aqui</span></Link></p>
                        </div>
                       
                        
                        <Container fluid>

                        <div className={styles.criar}>

                        <p>Não tem uma conta? <Link href="/"><span>Cadastre-se</span></Link></p>
                     

                        </div>  

                        </Container>

                        
                       
                        </center>
                          


                        </div>
                    </Col>


                    <Col className={styles.conteudo}>
                    
                        <div className={styles.logo}>
                            <img src="logoWhite.png" alt=""/>
                        </div>

                        <div className={styles.texto}>
                            <h1>
                                Tudo para que seu evento 
                                seja perfeito
                            </h1>
                        </div>
                    
                    </Col>

                </Row>

            </Container>
        </div>
    )
}