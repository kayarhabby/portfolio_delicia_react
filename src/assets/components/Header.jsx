import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Header.css";

export default function Header() {
    const { t } = useTranslation('header');

    return (
        <div id="home">
            <header className="header__container">
                <img src="./images/delicia_about_2.jpg" alt="Delicia image" className="cercle_img"/>
                <article className="header__article_content">
                    <p>{t('header.greeting')}</p>
                    <p>{t('header.description')}</p>
                </article>
                <button className="btn">{t('header.cta')}</button>
            </header>
        </div>

    );
}
