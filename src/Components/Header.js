import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0;
    padding:0;

`;

const HeadTitle = styled.h1`
    font-size:8rem;
    font-family:'Orbitron', sans-serif;
    color:#010f70;
    margin:0;
    padding:0;

`;

const HeadSubTitle = styled.p`
    font-family:'Blinker', sans-serif;
    font-size: 2.5rem;
    padding:0;
    margin:0;


`;

const Header = () => {
    return (

    <Heading>
        <HeadTitle>NASA</HeadTitle>
        <div className='headerWrapper'>
            <HeadSubTitle>Photo of</HeadSubTitle>
            <HeadSubTitle>the Day</HeadSubTitle>
        </div>
    </Heading>
    )
}

export default Header;