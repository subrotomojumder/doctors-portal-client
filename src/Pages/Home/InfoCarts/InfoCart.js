import React from 'react';

const InfoCart = ({card}) => {
    const {icon, description, name, bgClass} = card;
    return (
        <div className={`card card-side bg-slate-300 shadow-xl px-4 text-white ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCart;