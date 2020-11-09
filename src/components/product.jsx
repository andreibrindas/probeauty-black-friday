import React from "react"
import productStyles from "./product.module.css"

export default function Product(props) {
  return (
    <div className={productStyles.productContainer}>
      <div className={productStyles.productTopContainer}>
        <img
          src={`img/${props.productImage}.png`}
          alt=""
          className={productStyles.productImage}
        />
        <h3>{props.productName}</h3>
      </div>

      <div className={productStyles.productBottomContainer}>
        <p className="pink-highlighted-text align-center">
          Descoperă oferta pe
        </p>
        <p className="pink-text bold-text">27-29 NOIEMBRIE</p>
      </div>
    </div>
  )
}
