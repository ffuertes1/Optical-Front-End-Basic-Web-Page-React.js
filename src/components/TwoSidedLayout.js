import React from 'react';
import { Card } from 'flowbite-react';
import { useInView } from 'react-intersection-observer';
import './TwoSidedLayout.css'; // Ensure CSS is set up correctly

function TwoSidedLayout() {
    const infoSections = [
        {
            title: 'Schedules',
            description: 'Monday thru Saturday / 9:00am to 5:00pm',
            imageUrl: 'https://opticaencarolina.com/wp-content/uploads/sites/240/2023/02/map.pngnpm '
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

    const { ref: videoRef1, inView: videoVisible1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: videoRef2, inView: videoVisible2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="container">
            <div className="left-column">
                <div className="about-text scrollable">
                    <h2>Welcome to RM Optical</h2>
                    <img
                        src="Screenshot 2024-05-30 155836.png"
                        alt="Optical Lab"
                        className="floating-image"
                    />
                    <p>At RM Optical Laboratory we offer visual examination. Our mission is to take care of your visual health by covering the optical needs of each patient in keeping with new trends. Our products and services are at the forefront of today's optical needs, such as anti-reflective coatings, which help prevent visual fatigue by providing a better night sight.</p>
                    <p>We offer suggestions as to the best selection of frames and treatments such as blue light, transition, which help optimize your vision and prevent diseases such as macular degeneration or cataracts, among others.</p>
                    <p>At RM Optical we have duly certified and collegiate optometrists that practice in Puerto Rico. We also have our own on-site laboratory with highly technological equipment for the production of custom eyeglasses.</p>
                    <p>Our store is equipped with a wide variety of high quality designer frames with affordable prices. Trust our highly qualified staff ready to provide the best quality service available in the market.</p>
                    <p>Its owner, Ramon Morales, is a graduate optician with more than 30 years experience and an extensive knowledge in highlighting the facial image. Our goal is to make your selection according to your facial contour, so you can see a perfect balance and contrast regarding your skin tone and facial structure.</p>
                    <p>Also, and for your convenience, we accept most health insurance plans available in Puerto Rico and are conveniently available Monday to Saturday from 9:00 am to 5:00 pm.</p>
                    <p>Pay us a visit to see our large showroom located in Ave. Roberto Clemente #50 across the street of the Fire Station in Carolina. Parking available and FIRST CLASS CUSTOMER SERVICES.</p>
                </div>
            </div>
            <div className="right-column">
                <div className="info-sections">
                    {infoSections.map((section, index) => (
                        <Card key={index} className="info-item">
                            <img src={section.imageUrl} alt={section.title} className="info-image mb-2" />
                            <div className="p-4">
                                <h6 className="text-2xl font-bold tracking-tight">{section.title}</h6>
                                <p className="font-normal">{section.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="map-location-section mb-4">
                    <h5>Find Us Here</h5>
                    <iframe
                        className="map-iframe"
                         src="https://maps.google.com/maps?q=Rm%20optica&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="RM Optical Location"
                    ></iframe>
                </div>
                <div className="video-section">
                    <div ref={videoRef1} className={`video-container ${videoVisible1 ? 'visible' : ''}`}>
                        <iframe width="100%" height="200" src="https://www.youtube.com/embed/L2F9hyBJzbE?si=e6arMZIQH73rHayq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div ref={videoRef2} className={`video-container ${videoVisible2 ? 'visible' : ''}`}>
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/W43Eq-W5hlY?si=ieukklchiTinM8AO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoSidedLayout;
