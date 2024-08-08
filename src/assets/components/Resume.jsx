import React from 'react';
import Title from "./Title.jsx";

const Resume = () => {
    return (
        <div id="resume">
            <Title title="Resume"/>
            <section>
                <h2> Education </h2>
                <div className="education_content">
                    <article>
                        <h3>Études universitaires à la Faculté des Sciences de la Santé</h3>
                        <h4>2020-2023</h4>
                        <p>diplôme obtenu : Licence en sciences de la santé option Santé Publique.</p>
                    </article>
                    <article>
                        <h3>Secondaire deuxième cycle</h3>
                        <h4>2017-2020</h4>
                        <p>diplôme obtenu : Baccalauréat série C, mention assez-bien au lycée de la réconciliation,
                            Brazzaville.
                        </p>
                    </article>
                    <article>
                        <h3>Autres Formation</h3>
                        <ul>
                            <li>Certification master de la formation des cadres de niveau intermédiaire (MLM) en Avril 2024</li>
                            <li>MOOC Agir pour sa santé en Novembre 2023</li>
                            <li>MOOC Médecine et Santé environnementale en Novembre 2023; </li>
                            <li>MOOC Rédiger et publier un article scientifique en Octobre 2023, </li>
                            <li>Badge de réussite du MOOC sur la santé environnementale en Avril 2023 .</li>
                        </ul>
                    </article>
                </div>
            </section>

        </div>
    );
};

export default Resume;