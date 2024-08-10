import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "./Title.jsx";
import "../css/About.css";

const About = () => {
    const { t } = useTranslation('about');

    return (
        <div id='about'>
            <article className='about'>
                <Title title={t('about.title')} />
                <section className='about_container'>
                    <img src="/src/assets/images/kimLeeM.jpg" alt="Kiml lee" />
                    <article className='about_content'>
                        <p>{t('about.introduction')}</p>
                        <p>{t('about.goal')}</p>
                        <button className="btn">
                            <div className="icon">
                                <img src="/src/assets/images/download-to-storage-drive.png" alt="Download to storage drive" />
                            </div>
                            {t('about.downloadCV')}
                        </button>
                    </article>
                </section>
            </article>
        </div>
    );
};

export default About;
