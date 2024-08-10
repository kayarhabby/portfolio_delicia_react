import React from 'react';

const DownloadButton = (props) => {
    return (
        <a href={props.downloadUrl} target="_blank" download>
            <button className="btn">
                <i className="fa-solid fa-download"></i>
                {props.text}
            </button>
        </a>
    );
};

export default DownloadButton;
