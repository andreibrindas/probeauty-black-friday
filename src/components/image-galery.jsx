import React, { Component } from 'react';
import Slider from 'react-slick';

import imageGalleryStyles from "./image-galery.module.css"

import Product from './product'


export default class ImageGallery extends Component {
    render() {
      const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2 className={imageGalleryStyles.header}>Oferte atractive</h2>
          <Slider {...settings} className={imageGalleryStyles.imageSlider}>
            <Product productName="test 1" productImage='product-1'></Product>
            <Product productName="test 2" productImage='product-1'></Product>
            <Product productName="test 3" productImage='product-1'></Product>
            <Product productName="test 4" productImage='product-1'></Product>
            <Product productName="test 5" productImage='product-1'></Product>
            <Product productName="test 6" productImage='product-1'></Product>
          </Slider>
        </div>
      );
    }
  }
  