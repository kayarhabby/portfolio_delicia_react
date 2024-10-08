import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Contact.css';
import Title from "./Title.jsx";

const Contact = () => {
    const { t } = useTranslation('contact');

    return (
        <div id="contact">
            <section className="contact-section">
                <Title title={t('contact.title')} />
                <div className="contact-container">
                    <div className="map-and-info">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.000594883909!2d15.2458!3d-4.2787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10aafcd20c86b6e7%3A0x8d4e0d5f5caba105!2s6%20Rue%20Saint%20Paul%2C%20Brazzaville%2C%20Congo-Brazzaville!5e0!3m2!1sen!2sus!4v1691761025372!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="contact-info">
                        <h3>{t('contact.address_title')}</h3>
                        <section>
                            <p>
                                <i className="fa fa-map-marker"></i> {t('contact.address_text')}
                            </p>
                            <p>
                                <i className="fa fa-phone"></i> {t('contact.phone')}: (+242) 06 470 07 54
                            </p>
                            <p>
                                <i className="fa fa-envelope"></i> {t('contact.email')}: raellekissangou@gmail.com
                            </p>
                        </section>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
