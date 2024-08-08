import React from "react";

export default function Header() {
    return (
        <header className="header__container">
            <img src="/src/assets/images/kimLee.jpg" alt="kim lee" className="cercle_img"/>
            <article className="header__article_content">
                <p>Bonjour, je suis KISSANGOU OKAKA.</p>
                <p>Etudiante passionnée de santé publique à l'Université Marien NGOUABI au Congo.</p>
            </article>
            <button className="btn">Let's Get Started</button>
        </header>
    );
}
