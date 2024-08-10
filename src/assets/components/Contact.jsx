import React from 'react';
import '../css/Contact.css';

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-container">
                <div className="map-and-info">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.000594883909!2d15.2458!3d-4.2787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10aafcd20c86b6e7%3A0x8d4e0d5f5caba105!2s6%20Rue%20Saint%20Paul%2C%20Brazzaville%2C%20Congo-Brazzaville!5e0!3m2!1sen!2sus!4v1691761025372!5m2!1sen!2sus"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="contact-info">
                        <h3>Yogas Address</h3>
                        <p>
                            <i className="fa fa-map-marker"></i> 6 rue Saint Paul, Ngangouoni (Makélékélé), Brazzaville
                        </p>
                        <p>
                            <i className="fa fa-phone"></i> 0029129129129
                        </p>
                        <p>
                            <i className="fa fa-envelope"></i> info@example.com
                        </p>
                        <p>
                            <i className="fa fa-globe"></i> www.Yogasoft.com
                        </p>
                    </div>
                </div>
                <div className="contact-form">
                    <input type="text" placeholder="Full Name" className="form-input" />
                    <input type="email" placeholder="Email" className="form-input" />
                    <textarea placeholder="Message" className="form-textarea"></textarea>
                    <button className="btn-send">SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
