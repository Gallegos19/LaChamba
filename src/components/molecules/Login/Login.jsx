import React from 'react';
import style from './Login.module.css'
import Title from '../../atoms/Title/Title';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/button/Button';
import Text from '../../atoms/Text/Text';

export default function Login() {

  function IniciarSesion(e){
    
      console.log("Hola")
    
      

  }
  return (
    <form className={style.containerLogin}>
      <div className={style.title}>
        <Title text='Iniciar Sesion' />
        </div>
        <div className={style.inputs}>
        <Input tipo='email' name='Correo' />
        <Input tipo='password' name='Contraseña' />
        </div>
        <div className={style.boton}>
        <Button nombre='Ingresar' />
        </div>
        <div>
          <Text text='¿No tienes cuenta? Registrate aqui'/>
        </div>
    </form>
  )
}
