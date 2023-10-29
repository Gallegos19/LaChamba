import React from "react";
import { BsTrash } from "react-icons/bs";
import Imagen from "../Imagen/Imagen";
import tenis from "../../assets/tenisNike.png";
import Text from "../Text/Text2";
import Rating from "../Rating/Rating";
import style from "./CardsClient.module.css";

export default function Card(props) {
  return (
    <div className={style.containerCard}>
      <div className={style.tenis}>
        <Imagen width="12" imagen={tenis} />
      </div>
      <div className={style.informacion}>
        <Rating ratingValue={props.stars} id={props.id} />
        <Text text={props.modelo} />
        <Text text={`Precio: $${props.precio}`} />
      </div>
    </div>
  );
}
