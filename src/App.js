import React from "react";
import "./App.css";
import Header from "./Components/Header"
import NasaList from './Components/NasaList'
import styled from 'styled-components';


const AppWrap = styled.div`
    max-width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin: 0 auto;


`;



function App() {
  return (
    <div className="App">
      <AppWrap>
        <Header />
        <NasaList />
      </AppWrap>
    </div>
  );
}

export default App;
