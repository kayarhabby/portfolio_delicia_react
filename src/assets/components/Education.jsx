import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from "./Title.jsx";
import "../css/Education.css";

const Education = () => {
    const { t } = useTranslation('education');

    // Obtention des données d'éducation traduites
    const educationData = t('education.items', { returnObjects: true });

    // État pour gérer le nombre d'articles affichés
    const [visibleCount, setVisibleCount] = useState(3);

    // Fonction pour afficher plus d'articles
    const showMore = () => {
        setVisibleCount(visibleCount + 3);
    };

    return (
        <div id='education' className='education'>
            <Title title={t('education.title')} />
            <section className="education_container">
                {educationData.slice(0, visibleCount).map((item, index) => (
                    <article className="education_content" key={index}>
                        <div className="education_item_img">
                            <img src={item.imgSrc} alt="education" />
                        </div>
                        <div className="education_items_date">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span className="date">{item.date}</span>
                        </div>
                        <div className="education_items_text">
                            <h3>{item.title}</h3>
                            <small>{item.description}</small>
                            <div className="readmoreContainer">
                                <a href={item.link} target="_blank">CERTIFICAT</a>
                                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
            {/* Bouton pour afficher plus d'articles */}
            {visibleCount < educationData.length && (
                <button className="btn" onClick={showMore}>Voir plus</button>
            )}
        </div>
    );
};

export default Education;
