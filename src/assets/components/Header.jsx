import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Header.css";

export default function Header() {
    const { t } = useTranslation('header');

    return (
        <header className="header__container">
            <img src="/portfolio_delicia_react/src/assets/images/kimLee.jpg" alt="kim lee" className="cercle_img"/>
            <article className="header__article_content">
                <p>{t('header.greeting')}</p>
                <p>{t('header.description')}</p>
            </article>
            <button className="btn">{t('header.cta')}</button>
        </header>
    );
}
