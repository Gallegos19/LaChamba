import React from 'react'
import NavClient from '../../components/NavClient/NavClient'
import Carrusel from '../../components/Carrusel/Carrusel'
import tennis from '../../assets/descargatennis.png'


export default function HomeClient() {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'100%', margin:'auto'}}>
        <NavClient />
        <Carrusel marca="Nike" img={tennis} modelo='Air Force One'/>

    </div>
  )
}
