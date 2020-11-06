import React from "react"
import productStyles from "./product.module.css"

export default function Product(props) {
return <div className={productStyles.productContainer}>
        <h1>{props.productName}</h1>
        <img src={`img/${props.productImage}.png`} alt="" className={productStyles.productImage} />
    </div>
}