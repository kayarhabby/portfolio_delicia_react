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
                    <img src="./images/delicia_about_2.jpg" alt="Delicia image" />
                    <article className='about_content'>
                        <p>{t('about.introduction')}</p>
                        <p>{t('about.goal')}</p>
                        <Button
                            downloadUrl="./documents/certifications/CV_actualisee_Raelle.pdf"
                            text ={t('about.downloadCV')}
                        />
                    </article>
                </section>
            </article>
        </div>
    );
};

export default About;
