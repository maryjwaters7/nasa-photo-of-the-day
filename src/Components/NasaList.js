import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard'
import styled from 'styled-components'

const Entry = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto;


`;


const NasaList = () => {
    
    const[nasaData, setNasaData] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                //  console.log(response.data);
                setNasaData(response.data);            
            })
            .catch(error => console.log('Error', error));
    }, []);
    return (
        <Entry>
            <NasaCard key={nasaData.url} date={nasaData.date} description={nasaData.explanation} url={nasaData.url} title={nasaData.title} />
    
        </Entry>
    );
            
};

export default NasaList;