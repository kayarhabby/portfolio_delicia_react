import React from 'react';
import { useTranslation } from 'react-i18next';
import "../css/Footer.css";
import DownloadButton from "./DownloadButton.jsx";

const Footer = () => {
    const { t } = useTranslation('footer');

    return (
        <div className="footer_container">
            <section className="footer_content">
                <div className="name">
                    <span>{t('footer.name')}</span>
                    <div className="icon_container">
                        <a href="#">
                            <img src="/portfolio_delicia_react/src/assets/images/facebook.png" alt={t('footer.socialMedia.facebook')} />
                        </a>
                        <a href="#">
                            <img src="/portfolio_delicia_react/src/assets/images/instagram.png" alt={t('footer.socialMedia.instagram')}/>
                        </a>
                        <a href="#">
                            <img src="/portfolio_delicia_react/src/assets/images/twitter.png" alt={t('footer.socialMedia.twitter')}/>
                        </a>
                        <a href="#">
                            <img src="/portfolio_delicia_react/src/assets/images/linkedin.png" alt={t('footer.socialMedia.linkedin')}/>
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
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <a href="#">{t('footer.contact.address')}</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <i className="fa fa-phone"></i>
                            </div>
                            <a href="#">{t('footer.contact.phone')}</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <a href={`mailto:${t('footer.contact.email')}`}>{t('footer.contact.email')}</a>
                        </li>
                    </ul>
                    <DownloadButton
                        downloadUrl="/src/assets/documents/certifications/2024-05-26_agir-pour-sa-sante-universite-de-liege-badge-de-reussite-fr.pdf"
                        text ={t('footer.downloadCV')}
                    />
                </div>

                <div className="mailMe">
                    <a href={`mailto:${t('footer.contact.email')}`}>
                        <button className="btn">
                            {t('footer.mailMe')}
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </a>
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
