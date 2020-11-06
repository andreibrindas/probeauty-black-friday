import React from "react";
// import Layout from '../components/layout';
import { Helmet } from 'react-helmet'
import Hero from '../components/hero';
import ImageGallery from '../components/image-galery'

export default function Home() {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Hero></Hero>
  
      <div className="teaser teaser-container">

        <div className="teaser__left">
          <ImageGallery></ImageGallery>
        </div>
        <div className="teaser__right"></div>

      </div>

    </div>
  )
}