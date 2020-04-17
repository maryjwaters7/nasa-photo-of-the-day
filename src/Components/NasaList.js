import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard'


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
        <div className='entry'>
            <NasaCard key={nasaData.url} date={nasaData.date} description={nasaData.explanation} url={nasaData.url} title={nasaData.title} />
    
        </div>
    );
            
};
console.log(NasaList)
export default NasaList;