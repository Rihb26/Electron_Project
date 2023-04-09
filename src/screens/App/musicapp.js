import logo from './src/music.png';
import DialogButton from './components/dialogButton/index.js.js';
import React, { useState,useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  background-color: wite;
  text-align: center;
`;

const Logo = styled.img`
  height: 30vmin;
  margin-top: 50px;
  margin-bottom: 50px;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 20px;
  color: white;
`;

const Link = styled.a`
  color: #61dafb;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
function Musicapp() { 
    const [filePath, setFile] = useState()
    
    const openDialog = () => {
    window.dialog.open();
    window.dialog.getFilePath(setFile);
  }
    useEffect(() => {
      return () => {
        window.dialog.removeEventListener();
      }
    }, [])
  
    useEffect(() => {
      console.log(filePath)
    }, [filePath])
    return (
      
  
  
  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='App-title'>
  
          <p>
          listening to  your music 
          </p>
          </div>
      
          <DialogButton onClick={()=>openDialog()} title="test"></DialogButton>
        <audio  src={filePath} controls></audio>
        </header>
      </div>
    );
    }
    

export default Musicapp;
