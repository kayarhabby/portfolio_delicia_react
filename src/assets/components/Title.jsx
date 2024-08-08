import React from 'react';

const Title = (props) => {
    return (
        <section className='content_title_icon'>
            <h1>{props.title}</h1>
            <div>
                <span className="line"></span>
                <img src="/src/assets/images/lotus.png" alt="lotus-icon" className="icon"/>
                <span className="line"></span>
            </div>
        </section>
    );
};

export default Title;