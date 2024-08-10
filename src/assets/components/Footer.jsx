import React from 'react';
import "../css/Footer.css";

const Footer = () => {
    return (
        <div className="footer_container" id="contact">
            <section className="footer_content">
                <div className="name">
                    <span>Delicia Raelle</span>
                    <div className="icon_container">
                        <a href="#">
                            <img src="/src/assets/images/facebook.png" alt="facebook" />
                        </a>
                        <a href="#">
                            <img src="/src/assets/images/instagram.png" alt="instagram"/>
                        </a>
                        <a href="#">
                            <img src="/src/assets/images/twitter.png" alt="twitter"/>
                        </a>
                        <a href="#">
                            <img src="/src/assets/images/linkedin.png" alt="linkedin"/>
                        </a>
                    </div>
                </div>
                <div className="links">
                    <h3>Liens</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#competences">Competences</a></li>
                        <li><a href="#experience">Expérience</a></li>
                        <li><a href="#gallerie">Gallerie</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/casa.png" alt="maison"/>
                            </div>
                            <a href="#">Saint Paul, Ngangouoni (Makélékélé)</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/telephone.png" alt="telephone"/>
                            </div>
                            <a href="#">(+242) 06 470 0754</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/email.png" alt="email"/>
                            </div>
                            <a href="mailto:raellekissangou@gmail.com">raellekissangou@gmail.com</a>
                        </li>
                        <li>
                            <div className="cercle_img">
                                <img src="/src/assets/images/globe.png" alt="globe"/>
                            </div>
                            <a href="">www.website.com</a>
                        </li>
                    </ul>
                    <button className="btn">
                        <div className="icon">
                            <img src="/src/assets/images/download-to-storage-drive.png" alt="dowload to storage drive"/>
                        </div>
                        Download my CV
                    </button>
                </div>

                <div className="mailMe">
                    <button className="btn">
                        Envoyer un mail
                        <div className="icon">
                            <img src="/src/assets/images/paper-plane.png" alt="paper plane"/>
                        </div>
                    </button>
                </div>
            </section>
            <section>
                <div className="copyright">
                    <p>Copyright © 2024 Portfolio. All Rights Reserve</p>
                </div>
            </section>

        </div>
    );
};

export default Footer;