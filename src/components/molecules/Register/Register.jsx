import React from 'react';
import style from './Register.module.css';
import Title from '../../atoms/Title/Title';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/button/Button';
import Text from '../../atoms/Text/Text';


export default function Register() {
  return (
    <form className={style.containerRegister}>
           <div className={style.title}>
        <Title text='Registrarse' />
        </div>
        <div className={style.inputs}>
            <div className={style.inputdatos}>
            <Input tipo='text' name='Nombres' />
            <Input tipo='text' name='Apellidos' />
            </div>
        <Input tipo='email' name='Correo' />
        <Input tipo='password' name='Contraseña' />
        <Input tipo='password' name='Confirmar Contraseña' />
        </div>
        <div className={style.boton}>
        <Button nombre='Ingresar' />
        </div>
    </form>
  )
}
