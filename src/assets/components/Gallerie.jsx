import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from "./Title.jsx";
import "../css/Gallerie.css";

const Gallerie = () => {
    const { t } = useTranslation('gallerie');

    const images = [
        { src: "./images/delicia_cours_statistique.jpg", alt: t('gallerie.image1'), title: t('gallerie.image1') },
        { src: "./images/delicia_unicef.jpg", alt: t('gallerie.image2'), title: t('gallerie.image2') },
        { src: "./images/delicia_remise_diplome_marraine.jpg", alt: t('gallerie.image3'), title: t('gallerie.image3') },
        { src: "./images/delicia_conference_lutte_sante_2.jpg", alt: t('gallerie.image4'), title: t('gallerie.image4') }
    ];

    return (
        <div id='gallerie' className='gallerie'>
            <Title title={t('gallerie.title')} />
            <section className='gallerie_container'>
                {images.map((image, index) => (
                    <article className="gallerie_content" key={index}>
                        <div className="gallerie_items_img">
                            <img src={image.src} alt={image.alt} />
                            <h4>{image.title}</h4>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Gallerie;
