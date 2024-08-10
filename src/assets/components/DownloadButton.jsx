import React from 'react';

const DownloadButton = (props) => {
    return (
        <a href={props.downloadUrl} target="_blank" download>
            <button className="btn">
                <div className="icon">
                    <img src={props.src} alt={props.alt} />
                </div>
                {props.text}
            </button>
        </a>
    );
};

export default DownloadButton;
