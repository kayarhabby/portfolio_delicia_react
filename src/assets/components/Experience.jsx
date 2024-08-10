import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "./Title.jsx";
import "../css/Experience.css";

const Experience = () => {
    const { t } = useTranslation('experience');

    // Obtention des données d'expérience traduites
    const stages = t('experience.stages', { returnObjects: true });
    const professionalExperience = t('experience.professionalExperience', { returnObjects: true });

    return (
        <div id="experience" className="experience">
            <Title title={t('experience.title')} />
            <section className="experience_container">
                <div>
                    <section className="experience_icon_title">
                        <i className="fa-solid fa-business-time fa-2x"></i>
                        <h2>{t('experience.subtitle')}</h2>
                    </section>
                    <section className="experience_content">
                        {stages.map((exp, index) => (
                            <article className="experience_items" key={index}>
                                <h3>{exp.title}</h3>
                                <h4>{exp.period}</h4>
                                <small>{exp.description}</small>
                            </article>
                        ))}
                    </section>
                </div>

                <div>
                    <section className="experience_icon_title">
                        <i className="fa-solid fa-briefcase fa-2x"></i>
                        <h2>{t('experience.subtitle2')}</h2>
                    </section>
                    <section className="experience_content">
                        {professionalExperience.map((exp, index) => (
                            <article className="experience_items" key={index}>
                                <h3>{exp.title}</h3>
                                <h4>{exp.period}</h4>
                                <small>{exp.description}</small>
                            </article>
                        ))}
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Experience;
