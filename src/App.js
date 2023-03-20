//import logo from '../src/logiMusi.png';
//import './App.css';
//import DialogButton from './components/dialogButton/index.js';
/*import React, { useState,useEffect } from 'react';
import Home from './screens/home/home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() { 
  /*const [filePath, setFile] = useState()
  
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
    


export default Home;
   // <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-title'>

        <p>
        listening to music in a different language
        </p>
        </div>
    
        <DialogButton onClick={()=>openDialog()} title="test"></DialogButton>
      <audio  src={filePath} controls></audio>
      </header>
    //</div>
  );
}
return (
  <div>
  <Home />
</div>
);
}*/
import { RouterProvider } from "react-router-dom";
import router from "./config/router";


 function App() {
  return <RouterProvider router={router} />;
}

export default App;
