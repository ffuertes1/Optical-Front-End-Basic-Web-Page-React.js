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
    <Carousel id="carouselExampleIndicators" nextIcon={<span className="carousel-control-next-icon fas fa-chevron-right"></span>} prevIcon={<span className="carousel-control-prev-icon fas fa-chevron-left"></span>}>
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src="Screenshot 2024-05-30 155927.png" alt="Slide 1" className="d-block w-100" />
              <div className="text-container">
                <h3>Take Care of Your Eyes</h3>
                <h4>Annual Eye Exams Are Essential</h4>
                <p>
                  <strong>Did you know that experts recommend having your eyes examined once a year, and every 6 months in the case of children?</strong><br /><br />
                  <strong>RM Optical</strong><br /><br />
                  Examining your eyes is essential to:<br />
                  <ul>
                    <li>Improve your visual quality</li>
                    <li>Detect possible diseases</li>
                  </ul>
                  That is why at <strong>RM Optical</strong>, our registered opticians-optometrists will perform a complete visual examination and recommend the best options to ensure your visual health is optimal.<br /><br />
                  <strong>Remember:</strong><br />
                  <ul>
                    <li>An eye exam is the <strong>first step</strong> to improving your visual quality.</li>
                    <li><strong>50% of vision loss</strong> can be avoided with early diagnosis.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src="Screenshot 2024-05-30 155903.png" alt="Slide 2" className="d-block w-100" />
              <div className="text-container">
                <h3>Comprehensive Eye Exams</h3>
                <h4>For All Ages and Conditions</h4>
                <p>
                  <strong>EXAMS</strong><br />
                  <ul>
                    <li>Eye exams by certified optometrists</li>
                    <li>Home eye exam for bedridden patients</li>
                    <li>Eye exam for geriatric patients</li>
                    <li>Pediatric eye exam (for ages 6 and up)</li>
                    <li>Functional Vision Exam for children (school requirements for admission)</li>
                  </ul>
                  <strong>CONDITIONS TREATED</strong><br />
                  <ul>
                    <li>Dry Eye Problems</li>
                    <li>Problems with Double Vision</li>
                    <li>Floating Point Vision</li>
                    <li>Eye pain</li>
                    <li>Visual Fatigue</li>
                  </ul>
                  <strong>ON-SITE LABORATORY FOR FASTEST EYE-CARE</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src="Screenshot 2024-05-30 155954.png" alt="Slide 3" className="d-block w-100" />
              <div className="text-container">
                <h3>Stay Ahead in Style</h3>
                <h4>Latest Trends in Eyewear</h4>
                <p>Content for the first container on the third slide.</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
