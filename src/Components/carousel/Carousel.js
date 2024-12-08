import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/Data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from '../../Components/carousel/Carousel.module.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          img.map((imageItemLink, index) => {
            // Assuming imageItemLink is just a string (URL).
            return <img key={index} src={imageItemLink} alt={`Carousel image ${index + 1}`}/>;
          })
        }
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
