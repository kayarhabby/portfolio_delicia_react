import React from 'react';
import Title from "./Title.jsx";

const About = () => {
    return (
        <article id='about' className='about'>
            <Title title='About' />
            <section>
                <img src="" alt=""/>
                <article>
                    <p>Je suis KISSANGOU-OKAKA Délicia-Raelle, une étudiante passionnée de santé publique à l'Université
                        Marien NGOUABI au Congo. Membre actif de la communauté Épanouis (EPAN8) ainsi que U-Reporter by
                        Unicef, je m'engage dans la promotion de la santé et la prévention des maladies. En dehors de
                        mes études, je trouve la détente dans la lecture, les jeux vidéo et la musique. J'adore assister
                        à des conférences pour élargir mes connaissances et me connecter avec des professionnels
                        partageant les mêmes intérêts. Mon objectif est de devenir une professionnelle qualifiée
                        et influente dans le domaine de la santé publique, afin d'influencer les politiques et pratiques
                        de santé à l'échelle mondiale.</p>
                    <button>
                        <img src="" alt=""/>
                        Dowload CV
                    </button>
                </article>
            </section>
        </article>
    );
};

export default About;