import React from 'react';
import { useTranslation } from 'react-i18next';
import "../css/Footer.css";

const Footer = () => {
    const { t } = useTranslation('footer');

    return (
        <div className="footer_container" id="contact">
            <section className="footer_content">
                <div className="name">
                    <span>{t('footer.name')}</span>
                    <div className="icon_container">
                        <a href="#">
                            <img src="/src/assets/images/facebook.png" alt={t('footer.socialMedia.facebook')} />
                        </a>
                        <a href="#">
                            <img src="/src/assets/images/instagram.png" alt={t('footer.socialMedia.instagram')}/>
                        </a>
                        <a href="#">
                            <img src="/src/assets/images/twitter.png" alt={t('footer.socialMedia.twitter')}/>
                        </a>
                        <a href="#">
                            <img src="/src/assets/images/linkedin.png" alt={t('footer.socialMedia.linkedin')}/>
                        </a>
                    </div>
                </div>
                <div className="links">
                    <h3>{t('footer.links.title')}</h3>
                    <ul>
                        <li><a href="#home">{t('footer.links.home')}</a></li>
                        <li><a href="#about">{t('footer.links.about')}</a></li>
                        <li><a href="#education">{t('footer.links.education')}</a></li>
                        <li><a href="#competences">{t('footer.links.competences')}</a></li>
                        <li><a href="#experience">{t('footer.links.experience')}</a></li>
                        <li><a href="#gallerie">{t('footer.links.gallerie')}</a></li>
                        <li><a href="#contact">{t('footer.links.contact')}</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>{t('footer.contact.title')}</h3>
                    <ul>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/casa.png" alt="maison"/>
                            </div>
                            <a href="#">{t('footer.contact.address')}</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/telephone.png" alt="telephone"/>
                            </div>
                            <a href="#">{t('footer.contact.phone')}</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/email.png" alt="email"/>
                            </div>
                            <a href={`mailto:${t('footer.contact.email')}`}>{t('footer.contact.email')}</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/globe.png" alt="globe"/>
                            </div>
                            <a href="#">{t('footer.contact.website')}</a>
                        </li>
                    </ul>
                    <button className="btn">
                        <div className="icon">
                            <img src="/src/assets/images/download-to-storage-drive.png" alt="download to storage drive"/>
                        </div>
                        {t('footer.downloadCV')}
                    </button>
                </div>

                <div className="mailMe">
                    <button className="btn">
                        {t('footer.mailMe')}
                        <div className="icon">
                            <img src="/src/assets/images/paper-plane.png" alt="paper plane"/>
                        </div>
                    </button>
                </div>
            </section>
            <section>
                <div className="copyright">
                    <p>{t('footer.copyright')}</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;
