import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carrousel = () => {
  const [imagen, setImagen] = useState(0);
  const handleSelect = (selectedIndex) => {
    setImagen(selectedIndex);
  };

  return (
    <div className="container carrucel">
      <div className="title-container">
         <h1 className='font1Left text-center'>Unid</h1><h1 className='font1Right text-center'>Zone</h1>
          <p className='font2 text-center'>Lo buscas, lo encuentras</p>
      </div>
        <Carousel activeIndex={imagen} onSelect={handleSelect} interval={4000}>
            <Carousel.Item>
              <img src="/imgs/img1.jpg" alt="Imagen 1"className="carousel-image" />
              {/* <Carousel.Caption className="carousel-caption">
                <h1>Texto de la imagen 1</h1>
                <p>Descripción de la imagen 1.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img src="/imgs/img2.jpg" alt="Imagen 2"className="carousel-image" />
              {/* <Carousel.Caption className="carousel-caption">
                <h1>Texto de la imagen 1</h1>
                <p>Descripción de la imagen 1.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img src="/imgs/img3.jpg" alt="Imagen 3"className="carousel-image" />
              
              {/* <Carousel.Caption className="carousel-caption">
                <h1>Texto de la imagen 2</h1>
                <p>Descripción de la imagen 2.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img src="/imgs/img4.jpg" alt="Imagen 4" className="carousel-image" />
              {/* <Carousel.Caption className="carousel-caption">
                <h1>Texto de la imagen 3</h1>
                <p>Descripción de la imagen 3.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default Carrousel;

