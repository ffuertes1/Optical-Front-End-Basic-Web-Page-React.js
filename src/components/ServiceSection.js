import React, { useEffect, useRef } from 'react';
import './ServiceSection.css'; // Make sure to create and import this CSS file

function ServiceSection() {
    const services = [
        {
            id: 1,
            title: 'Maintenance and Cleaning',
            description: 'We clean, adjust and repair your glasses',
            imageUrl: 'https://opticaencarolina.com/wp-content/uploads/sites/240/2023/02/serviceIndex-3.jpg'
        },
        {
            id: 2,
            title: 'Custom Eyeglasses',
            description: 'We provide custom-made eyeglasses to suit your needs',
            imageUrl: 'https://opticaencarolina.com/wp-content/uploads/sites/240/2023/02/serviceIndex-2.jpg'
        },
        {
            id: 3,
            title: 'Visual Examination',
            description: 'We offer comprehensive visual examinations',
            imageUrl: 'https://opticaencarolina.com/wp-content/uploads/sites/240/2023/02/serviceIndex-1.jpg'
        }
    ];

    const serviceRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate', 'zoomIn');
                        }, index * 200); // Delay each item
                    } else {
                        entry.target.classList.remove('animate', 'zoomIn');
                    }
                });
            },
            {
                threshold: 0.1 // Adjust this threshold to control when the animation triggers
            }
        );

        serviceRef.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            if (serviceRef.current) {
                serviceRef.current.forEach(item => {
                    if (item) observer.unobserve(item);
                });
            }
        };
    }, []);

    return (
        <section className="service-section">
            {services.map((service, index) => (
                <div
                    key={service.id}
                    className="service-item"
                    ref={el => (serviceRef.current[index] = el)}
                >
                    <img src={service.imageUrl} alt={service.title} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </section>
    );
}

export default ServiceSection;
