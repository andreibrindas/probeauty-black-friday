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
            <Product name="test 1"></Product>
            <Product name="test 2"></Product>
            <Product name="test 3"></Product>
            <Product name="test 4"></Product>
            <Product name="test 5"></Product>
            <Product name="test 6"></Product>
          </Slider>
        </div>
      );
    }
  }
  