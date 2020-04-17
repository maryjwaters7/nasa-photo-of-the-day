import React from 'react';

 const NasaCard = ( props ) => {

    return (
        <div className="cardContainer">
            <div className="cardDate">
                <p>{props.date}</p>
            </div>
            <img src={props.url} alt="NASA" />
            <div className="textContainer">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    )
 }

 export default NasaCard;

