import React from 'react';
import Title from "./Title.jsx";
import "../css/Competences.css";

const Competences = () => {

    const competencesData = [
        {
            icon: "fa-globe",
            title: "Gestion des données de santé",
            description: "Expert en collecte, saisie, analyse et interprétation des données de santé, avec une expérience solide dans le domaine."
        },
        {
            icon: "fa-virus",
            title: "Connaissance solide en Épidémiologie",
            description: "Expérimenté dans la mise en œuvre et le suivi d'activités de vaccination, avec un engagement constant pour assurer une couverture efficace et un déroulement optimal des processus."
        },
        {
            icon: "fa-book",
            title: "Rédaction scientifique",
            description: "Expertise en rédaction et publication d'articles scientifiques, démontrée par une solide expérience dans le domaine."
        },
        {
            icon: "fa-gear",
            title: "Gestion de projet",
            description: "Expérimenté dans la supervision d'équipes de terrain, avec des compétences éprouvées en planification, organisation et suivi des activités de santé publique. Capable de rédiger des rapports d'activités détaillés et pertinents."
        },
        {
            icon: "fa-user",
            title: "Compétences interpersonnelles",
            description: "Excellente capacité à communiquer et à interagir avec divers acteurs. Adaptabilité à différents contextes, avec une aptitude à l'initiative et au travail autonome pour relever les défis efficacement."
        },
        {
            icon: "fa-person-chalkboard",
            title: "Développement Personnel",
            description: "Engagement envers le perfectionnement continu par des certifications, MOOC et formations complémentaires. Participation active à des événements pour partager des expériences et valoriser les acquis de recherche."
        }
    ];


    return (
        <div id='competences' className="competences">
            <Title title="Compétences" />
            <section className="competences_container">
                {competencesData.map((item, index) => (
                    <article className="competences_items" key={index}>
                        <i className={`fa-solid ${item.icon} fa-2x`}></i>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Competences;