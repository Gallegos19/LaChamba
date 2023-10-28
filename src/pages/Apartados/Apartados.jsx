import React from 'react'
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import Card from '../../components/molecules/card/Card'
import style from './Apartados.module.css'

export default function Apartados() {
  return (
    <div className={style.containerApartador}>
        <NavAdmin />
        <div className={style.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </div>
  )
}
