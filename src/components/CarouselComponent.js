import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css';

const CarouselComponent = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = document.querySelector('.carousel-control-next');
      if (nextButton) {
        nextButton.click();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel id="carouselExampleIndicators">
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="Screenshot 2024-05-30 155927.png" alt="Slide 1" className="d-block w-100" />
            </div>
            <div className="col-md-6 text-container">
              <h3>First Container</h3>
              <h4>Slide 1 Title</h4>
              <p>Content for the first container.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="Screenshot 2024-05-30 155903.png" alt="Slide 2" className="d-block w-100" />
            </div>
            <div className="col-md-6 text-container">
              <h3>First Container - Slide 2</h3>
              <h4>Slide 2 Title</h4>
              <p>Content for the first container on the second slide.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="Screenshot 2024-05-30 155954.png" alt="Slide 3" className="d-block w-100" />
            </div>
            <div className="col-md-6 text-container">
              <h3>First Container - Slide 3</h3>
              <h4>Slide 3 Title</h4>
              <p>Content for the first container on the third slide.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
