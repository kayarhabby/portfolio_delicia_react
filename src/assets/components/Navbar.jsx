import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../js/i18n';
import '../css/Navbar.css';

const Navbar = () => {
    const { t } = useTranslation('navbar');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll('div[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                setActiveLink(sectionId);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                    <a href="/"><img src="/src/assets/images/lotus.png" alt="lotus icon" className="icon" /></a>
                </article>
                <article className={`link_item ${isMenuOpen ? 'is-visible' : ''}`}>
                    <section>
                        <ul>
                            <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
                            <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>A propos</a></li>
                            <li><a href="#education" className={activeLink === 'education' ? 'active' : ''}>Education</a></li>
                            <li><a href="#competences" className={activeLink === 'competences' ? 'active' : ''}>Competences</a></li>
                            <li><a href="#experience" className={activeLink === 'experience' ? 'active' : ''}>Expérience</a></li>
                            <li><a href="#gallerie" className={activeLink === 'gallerie' ? 'active' : ''}>Gallerie</a></li>
                            <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
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
