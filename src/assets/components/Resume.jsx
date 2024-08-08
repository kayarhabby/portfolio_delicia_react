import React from 'react';
import Title from "./Title.jsx";

const Resume = () => {
    return (
        <div id="resume" className="resume">
            <Title title="Education"/>
            <div className="education_container">
                <div className="education_content">
                    <article>
                        <h3>Études universitaires à la Faculté des Sciences de la Santé</h3>
                        <h4>2020-2023</h4>
                        <p>diplôme obtenu : Licence en sciences de la santé option Santé Publique.</p>
                    </article>
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
                </div>
                <div className="education_content">
                    <article>
                        <h3>Certification master de la formation des cadres de niveau intermédiaire (MLM)</h3>
                        <h4>2023-2024</h4>
                    </article>
                    <article>
                        <h3>MOOC Rédiger et publier un article scientifique</h3>
                        <h4> Octobre 2023</h4>
                    </article>
                    <article>
                        <h3>Badge de réussite du MOOC sur la santé environnementale</h3>
                        <h4>Avril 2023</h4>
                    </article>
                </div>
            </div>

        </div>
    );
};

export default Resume;