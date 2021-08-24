import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Available = ({ name, image, data }) => {
    return (
        <div>
            <img className="w-25 m-2" src={image} alt="" />
            <span className="m-3">{name}</span>
            <span className="m-3"><FontAwesomeIcon icon={faUser} />{data.seats}</span>
            <span className="m-3">{data.rent}</span>
        </div>
    );
};

export default Available;