import React from "react";
import { BsTrash } from "react-icons/bs";
import Imagen from "../../Imagen/Imagen";
import tenis from "../../../assets/nikeDunk.webp";
import Text from "../../Text/Text2";
import style from "./Card.module.css";
export default function Card() {
  return (
    <div className={style.containerCard}>
      <div className="tenis">
        <Imagen width="12" imagen={tenis} />
      </div>
      <div className={style.informacion}>
        <Text text="Marca: Nike" />
        <Text text="Modelo: Dunk Low SE " />
        <div className={style.info2}>
          <Text text="Cantidad: 1" />
          <Text text="Talla: 25" />
        </div>

        <Text text="Precio: $2500" />
        <Text text="IdCliente: 2132" />
        <div className={style.buton}>
        <BsTrash size={"25px"} />
      </div>
      </div>
      
    </div>
  );
}
