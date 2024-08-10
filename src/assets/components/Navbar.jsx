import React, { useState } from 'react';
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
        <div className="navbar_container">
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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#conferences">Conférences</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </section>
                    <section>
                        <select className="form-select" id="langues" name="langues" onChange={handleLanguageChange}>
                            <option value="en">{t('language.default')}</option>
                            <option value="fr">{t('language.fr')}</option>
                        </select>
                    </section>
                </article>
            </nav>
        </div>

    );
};
export default Navbar;