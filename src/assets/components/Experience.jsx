import React from 'react';
import Title from "./Title.jsx";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <Title title="Experience" />
            <section className="experience_container">
                <div>
                    <section className="experience_icon_title">
                        <i className="fa-solid fa-business-time fa-2x"></i>
                        <h2>Stages : </h2>
                    </section>
                    <section className="experience_content">
                        <article className="experience_items">
                            <h3>Stagiaire au sein de l’ONG Médecins d’Afrique </h3>
                            <h4>Octobre 2023 à Janvier 2024 </h4>
                            <small>
                                Assistant au programme de lutte contre les endémies et coresponsable du projet de
                                redynamisation de la santé scolaire (RESASCO).
                            </small>
                        </article>
                        <article className="experience_items">
                            <h3>Stagiaire au district sanitaire de BACONGO : gestion des données et la surveillance
                                épidémiologique </h3>
                            <h4>Novembre 2022 à Juin 2023 </h4>
                            <small>
                                Responsable de la collecte et de la saisie des données dans le DHIS2, de la supervision
                                formative du remplissage des données, ainsi que de la participation à la
                                micro-planification
                                des activités du district.
                            </small>
                        </article>
                        <article className="experience_items">
                            <h3>Stagiaire à la direction centrale du programme national de lutte contre
                                l’onchocercose</h3>
                            <h4>Septembre à Octobre 2022</h4>
                            <small>
                                Participer à la planification des activités de distribution de masse de médicaments dans
                                les
                                différents districts sanitaires de Brazzaville, veiller à la disponibilité des
                                médicaments et
                                rédiger des rapports sur les activités menées.
                            </small>
                        </article>
                    </section>
                </div>

                <div>
                    <section className="experience_icon_title">
                        <i className="fa-solid fa-briefcase fa-2x"></i>
                        <h2>Expérience Professionnelle : </h2>
                    </section>
                    <section className="experience_content">
                        <article className="experience_items">
                            <h3>
                                Monitrice indépendante dans le cadre du 1er passage de la campagne nationale de lutte
                                contre
                                la poliomyélite au district sanitaire de BACONGO
                            </h3>
                            <h4>Juin 2023</h4>
                            <small>
                                Vérifier le statut vaccinal des enfants de 0 à 5 ans, identifier ceux qui ne sont pas
                                vaccinés
                                et procéder à leur vaccination, tout en questionnant les parents sur les raisons de la
                                non-vaccination
                                de leurs enfants.
                            </small>
                        </article>
                        <article className="experience_items">
                            <h3>
                                Superviseure dans le cadre des Activités de Vaccination Intensifiée (AVI) au centre de
                                santé
                                de Madame au district sanitaire de BACONGO
                            </h3>
                            <h4> Decembre 2022</h4>
                            <small>
                                Contrôler les équipes de terrain dans l'exécution de leurs tâches, veiller au respect
                                des
                                objectifs fixés pour la vaccination des enfants, et rédiger un rapport final sur les
                                activités
                                menées au centre de santé de Madame.
                            </small>
                        </article>
                        <article className="experience_items">
                            <h3>
                                Enquêtrice dans le cadre d’une étude sur la détention des accouchées dans les maternités
                                de
                                MAKÉLÉKÉLÉ
                            </h3>
                            <h4>Septembre à Octobre 2022</h4>
                            <small>
                                Vérifier la présence de femmes accouchées détenues dans les maternités et interroger sur
                                les
                                raisons de leur détention.
                            </small>
                        </article>
                    </section>
                </div>

            </section>

        </div>
    );
};

export default Experience;