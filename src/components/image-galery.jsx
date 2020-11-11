import React, { Component } from "react"
import Slider from "react-slick"
import Container from "./container"

import imageGalleryStyles from "./image-galery.module.css"

import Product from "./product"

export default class ImageGallery extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1260,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    }
    return (
      <div>
        <Container>
          <h2 className={imageGalleryStyles.header}>Oferte atractive</h2>
        </Container>
        <Slider {...settings} className={imageGalleryStyles.imageSlider}>
          <Product
            productName="Parfum bărbați"
            productImage="product-1"
          ></Product>
          <Product
            productName="Parfum femei"
            productImage="product-1"
          ></Product>
          <Product
            productName="Șampon Anti Mătrață"
            productImage="product-1"
          ></Product>
          <Product
            productName="Șampon păr gras"
            productImage="product-1"
          ></Product>
          <Product productName="Deodorant" productImage="product-1"></Product>
          <Product productName="Gel de duș" productImage="product-1"></Product>
        </Slider>
      </div>
    )
  }
}
