import React from 'react';

const Button = (props) => {
    return (
        <button className="btn">
            <div className="icon">
                <img src={props.src} alt={props.alt}/>
            </div>
            {props.text}
        </button>
);
};

export default Button;