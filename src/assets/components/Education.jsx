import React, { useState } from 'react';
import Title from "./Title.jsx";
import "../css/Education.css";

const Education = () => {

    // Exemple de données d'éducation, remplace avec tes propres données si nécessaire
    const educationData = [
        {
            imgSrc: "/src/assets/images/nature_fleur.jpg",
            date: "jan 12, 2024",
            title: "Licence en sciences de la santé option Santé Publique",
            description: "Études universitaires à la Faculté des Sciences de la Santé, diplôme obtenu : Licence en sciences de la santé option Santé Publique."
        },
        {
            imgSrc: "/src/assets/images/techno.jpg",
            date: "jan 12, 2024",
            title: "Baccalauréat Scientifique",
            description: "Secondaire deuxième cycle, diplôme obtenu : Baccalauréat série C, mention assez-bien au lycée de la réconciliation, Brazzaville."
        },
        {
            imgSrc: "/src/assets/images/techno.jpg",
            date: "Avril 2024",
            title: "MLM",
            description: "Obtention d'une certification master de la formation des cadres de niveau intermédiaire (MLM)."
        },
        {
            imgSrc: "/src/assets/images/techno.jpg",
            date: "Novembre 2023",
            title: "MOOC",
            description: "Agir pour sa santé."
        },
        {
            imgSrc: "/src/assets/images/techno.jpg",
            date: "Octobre 2023",
            title: "MOOC",
            description: "Rédiger et publier un article scientifique."
        },
        {
            imgSrc: "/src/assets/images/techno.jpg",
            date: "Avril 2023",
            title: "MOOC",
            description: "Badge de réussite du MOOC sur la santé environnementale."
        }
    ];

    // État pour gérer le nombre d'articles affichés
    const [visibleCount, setVisibleCount] = useState(3);

    // Fonction pour afficher plus d'articles
    const showMore = () => {
        setVisibleCount(visibleCount + 3);
    };

    return (
        <div id='education' className='education'>
            <Title title='Education' />
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
                                <a href="">CERTIFICAT</a>
                                <a href=""><i className="fa-solid fa-arrow-right"></i></a>
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
