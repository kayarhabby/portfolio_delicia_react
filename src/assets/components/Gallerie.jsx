import React from 'react';
import Title from "./Title.jsx";

const Gallerie = () => {
    const images = [
        { src: "/src/assets/images/techno.jpg", alt: "techno", title: "Conferences" },
        { src: "/src/assets/images/nature_fleur.jpg", alt: "nature_fleur", title: "Conferences" },
        { src: "/src/assets/images/nature_fleur.jpg", alt: "nature_fleur", title: "Conferences" },
        { src: "/src/assets/images/nature_fleur.jpg", alt: "nature_fleur", title: "Conferences" }
    ];
    return (
        <div id='gallerie' className='gallerie'>
            <Title title="Gallerie" />
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
