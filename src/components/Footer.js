import React from 'react';
import './Footer.css';

function Footer() {
    const contactInfo = {
        address: "Ave. Roberto Clemente #50, Carolina",
        phone: "939-337-0012",
        email: "rmopticallab@gmail.com",
        hours: "Monday thru Saturday / 9:00am to 5:00pm"
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p><strong>Address:</strong> {contactInfo.address}</p>
                <p><strong>Phone:</strong> {contactInfo.phone}</p>
                <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                <p><strong>Hours:</strong> {contactInfo.hours}</p>
            </div>
        </footer>
    );
}

export default Footer;
