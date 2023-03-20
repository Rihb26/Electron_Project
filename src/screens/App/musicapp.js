import logo from './src/music.png';
import './App.css';
import DialogButton from './components/dialogButton/index.js.js';
import React, { useState,useEffect } from 'react';


function musicapp() { 
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
    

export default musicapp;