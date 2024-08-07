import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../js/i18n';
import '../css/Navbar.css';
const Navbar = () => {
    const { t } = useTranslation('navbar');

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value; // recupérer la valeur 'fr' ou 'en' mis dans l'attribut value de select
        // console.log(selectedLang);
        i18n.changeLanguage(selectedLang);
    };

    return (
        <nav id="navbar">
            <article>
                <section
                    className={`menu-hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                    <a href="#"><i className="fa-solid fa-x"></i></a>
                </section>
                <a href="/"><img src="/src/assets/images/lotus.png" alt="lotus icon" className="icon"/></a>
            </article>
            <article className={`link_item ${isMenuOpen ? 'is-visible' : ''}`}>
                <section>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Conférences</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </section>
                <section>
                    <select className="form-select" id="langues" name="langues" onChange={handleLanguageChange}>
                        <option value="en">{t('language.default')}</option>
                        <option value="fr">{t('language.fr')}</option>
                    </select>

                    <button className="btn">Get a quote</button>
                </section>
            </article>

            {/*<div className="d-flex align-items-center justify-content-center">*/}
            {/*    <span className="line"></span>*/}
            {/*    <i className="icon flaticon-lotus"></i>*/}
            {/*    <span className="line"></span>*/}
            {/*</div>*/}
        </nav>
    );
};

export default Navbar;