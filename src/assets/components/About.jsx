import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "./Title.jsx";
import "../css/About.css";
import Button from "./DownloadButton.jsx";

const About = () => {
    const { t } = useTranslation('about');

    return (
        <div id='about'>
            <article className='about'>
                <Title title={t('about.title')} />
                <section className='about_container'>
                    <img src="/portfolio_delicia_react/src/assets/images/kimLeeM.jpg" alt="Kiml lee" />
                    <article className='about_content'>
                        <p>{t('about.introduction')}</p>
                        <p>{t('about.goal')}</p>
                        <Button
                            downloadUrl="/portfolio_delicia_react/src/assets/documents/certifications/2024-05-26_agir-pour-sa-sante-universite-de-liege-badge-de-reussite-fr.pdf"
                            text ={t('about.downloadCV')}
                        />
                    </article>
                </section>
            </article>
        </div>
    );
};

export default About;
