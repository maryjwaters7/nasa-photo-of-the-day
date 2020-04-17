import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 2px solid #3b3b3b;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    width: 80%;

`;

const Text = styled.div`
    padding: 1rem;

`;

const Image = styled.img`
    max-width:90%;
    padding:0 5% 0 5%;

`;

const Date = styled.p`
    font-size:2rem;
    margin-bottom: 8px;

`;

const Title = styled.h3`
    font-size:2rem;
    font-family:"Roboto Slab", serif;
    margin-top:5px;
    margin-bottom:10px;

`;

const Desc = styled.p`
    font-size:1.2rem;
    font-family:"Roboto Slab", serif;
    margin-top:0px;

`;



 const NasaCard = ( props ) => {

    return (
        <Card>
            <div className="cardDate">
                <Date>{props.date}</Date>
            </div>
            <Image src={props.url} alt="NASA" />
            <Text>
                <Title>{props.title}</Title>
                <Desc>{props.description}</Desc>
            </Text>

        </Card>
    )
 }

 export default NasaCard;

