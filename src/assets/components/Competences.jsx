import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "./Title.jsx";
import "../css/Competences.css";

const Competences = () => {
    const { t } = useTranslation('competences');

    // Obtention des données de compétences
    const competencesData = t('competences.items', { returnObjects: true });

    // Assurez-vous que les données sont bien un tableau avant de les utiliser
    if (!Array.isArray(competencesData)) {
        console.error('Competences data is not an array:', competencesData);
        return null; // Ou affichez un message d'erreur approprié
    }

    return (
        <div id='competences' className="competences">
            <Title title={t('competences.title')} />
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
