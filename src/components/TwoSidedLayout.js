import React from 'react';
import { Carousel, ListGroup, Card } from 'react-bootstrap';
import './TwoSidedLayout.css'; // Ensure CSS is set up correctly

function TwoSidedLayout() {
    const services = [
        "Visual Examination",
        "Custom Eyeglasses",
        "Contact Lenses",
        "Prescription Sunglasses"
    ];

    const frames = [
        { id: 1, src: "glasses-silhouettes-fashion-sunglasses-frames-with-orange-background-free-vector.jpg", alt: "Frame 1" },
        { id: 2, src: "path/to/frame2.jpg", alt: "Frame 2" },
        { id: 3, src: "path/to/frame3.jpg", alt: "Frame 3" }
    ];

   /* const contactInfo = {
        address: "Ave. Roberto Clemente #50, Carolina",
        phone: "939-337-0012",
        email: "rmopticallab@gmail.com",
        hours: "Monday thru Saturday / 9:00am to 5:00pm"
    };*/

    const infoSections = [
        {
            title: 'Schedules',
            description: 'Monday thru Saturday / 9:00am to 5:00pm',
            imageUrl: 'https://opticaencarolina.com/wp-content/uploads/sites/240/2023/02/clock.png'
        },
        {
            title: 'Location',
            description: '80 Street, 111-50 Block, Villa Carolina Complex, Roberto Clemente Ave. (right across the Fire Department)',
            imageUrl: 'https://opticaencarolina.com/wp-content/uploads/sites/240/2023/02/map.png'
        },
        {
            title: 'Payment Method',
            description: 'We accept various payment methods including ATH, Visa, MasterCard, and more.',
            imageUrl: 'https://opticaencarolina.com/wp-content/uploads/sites/240/2023/02/pay.png'
        }
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 about-text">
                    <h2>Welcome to RM Optical</h2>
                    <p>At RM Optical Laboratory we offer visual examination. Our mission is to take care of your visual health by covering the optical needs of each patient in keeping with new trends. Our products and services are at the forefront of today's optical needs, such as anti-reflective coatings, which help prevent visual fatigue by providing a better night sight.</p>
                    <p>We offer suggestions as to the best selection of frames and treatments such as blue light, transition, which help optimize your vision and prevent diseases such as macular degeneration or cataracts, among others.</p>
                    <p>At RM Optical we have duly certified and collegiate optometrists that practice in Puerto Rico. We also have our own on-site laboratory with highly technological equipment for the production of custom eyeglasses.</p>
                    <p>Our store is equipped with a wide variety of high quality designer frames with affordable prices. Trust our highly qualified staff ready to provide the best quality service available in the market.</p>
                    <p>Its owner, Ramon Morales, is a graduate optician with more than 30 years experience and an extensive knowledge in highlighting the facial image. Our goal is to make your selection according to your facial contour, so you can see a perfect balance and contrast regarding your skin tone and facial structure.</p>
                    <p>Also, and for your convenience, we accept most health insurance plans available in Puerto Rico and are conveniently available Monday to Saturday from 9:00 am to 5:00 pm.</p>
                    <p>Pay us a visit to see our large showroom located in Ave. Roberto Clemente #50 across the street of the Fire Station in Carolina. Parking available and FIRST CLASS CUSTOMER SERVICES.</p>
                </div>
                <div className="col-md-6">
                    <div className="mb-4">
                        <h5>Important Info</h5>
                        <div className="info-sections">
                            {infoSections.map((section, index) => (
                                <div key={index} className="info-item">
                                    <img src={section.imageUrl} alt={section.title} className="info-image mb-2" />
                                    <h6>{section.title}</h6>
                                    <p>{section.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*<div className="mb-4">
                        
                        <h5>Contact Information</h5>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <strong>Address:</strong> {contactInfo.address}<br />
                                    <strong>Phone:</strong> {contactInfo.phone}<br />
                                    <strong>Email:</strong> {contactInfo.email}<br />
                                    <strong>Hours:</strong> {contactInfo.hours}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>*/}
                    <div className="mb-4">
                        <h5>Frames</h5>
                        <Carousel>
                            {frames.map(frame => (
                                <Carousel.Item key={frame.id}>
                                    <img
                                        className="d-block w-100 frame-img"
                                        src={frame.src}
                                        alt={frame.alt}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="video-container mb-3">
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/VIDEO_ID_1" title="Video 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="video-container mb-3">
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/VIDEO_ID_2" title="Video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoSidedLayout;
