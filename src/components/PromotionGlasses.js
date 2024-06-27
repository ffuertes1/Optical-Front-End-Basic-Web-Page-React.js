import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PromotionGlasses.css';

const PromotionGlasses = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetch('https://your-django-api-endpoint/promotions/')
      .then(response => response.json())
      .then(data => setPromotions(data))
      .catch(error => console.error('Error fetching promotions:', error));
  }, []);

  return (
    <Carousel className="promotion-carousel">
      {promotions.map((promotion, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={promotion.image}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <h3>{promotion.title}</h3>
            <p>{promotion.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PromotionGlasses;
