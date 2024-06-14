import React from 'react';
import { Carousel } from 'react-bootstrap';
import './DoctorCarousel.css'; // Ensure you create this CSS file

function DoctorCarousel() {
    const carouselItems = [
        {
            id: 1,
            image: 'public/Screenshot 2024-05-30 155927.png',
            text: 'Dr. John Doe: Providing excellent care for over 20 years.',
        },
        {
            id: 2,
            image: 'Screenshot 2024-05-30 155927.png',
            text: 'Dr. Jane Smith: Specializing in pediatric ophthalmology.',
        },
        {
            id: 3,
            image: 'Screenshot 2024-05-30 155927.png',
            text: 'Dr. Alex Johnson: Expert in laser eye surgery.',
        },
    ];

    return (
        <Carousel>
            {carouselItems.map((item) => (
                <Carousel.Item key={item.id}>
                    <div
                        className="carousel-background"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="carousel-text">
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default DoctorCarousel;
