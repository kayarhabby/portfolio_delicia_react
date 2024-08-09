import React from 'react';
import Title from "./Title.jsx";

const About = () => {
    return (
        <div id='about'>
            <article className='about'>
                <Title title='About'/>
                <section className='about_container'>
                    <img src="/src/assets/images/kimLeeM.jpg" alt="Kiml lee"/>
                    <article className='about_content'>
                        <p>
                            <span className="span_b">B</span>onjour, Je suis KISSANGOU-OKAKA Délicia-Raelle, une
                            étudiante passionnée de santé publique à l'Université
                            Marien NGOUABI au Congo. Membre actif de la communauté Épanouis (EPAN8) ainsi que U-Reporter
                            by
                            Unicef, je m'engage dans la promotion de la santé et la prévention des maladies. En dehors
                            de
                            mes études, je trouve la détente dans la lecture, les jeux vidéo et la musique. J'adore
                            assister
                            à des conférences pour élargir mes connaissances et me connecter avec des professionnels
                            partageant les mêmes intérêts.
                        </p>
                        <p>
                            Mon objectif est de devenir une professionnelle qualifiée
                            et influente dans le domaine de la santé publique, afin d'influencer les politiques et
                            pratiques
                            de santé à l'échelle mondiale.
                        </p>

                        <button className="btn">
                            <div className="icon">
                                <img src="/src/assets/images/download-to-storage-drive.png"
                                     alt="dowload to storage drive"/>
                            </div>
                            Download my CV
                        </button>
                    </article>
                </section>
            </article>
        </div>

    );
};

export default About;