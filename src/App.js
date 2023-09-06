import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500); 
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(()=>{
      //   document.title = "TextUtils - is amaizing";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Install - TextUtils";
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title = "TextUtils" hometext = "Home" abouttext = "About" mode = {mode} toggleMode ={toggleMode} />
        {/* <Navbar title = "TextUtils"  abouttext = "About" mode = {mode} toggleMode ={toggleMode} /> */}
        <Alert alert = {alert}/>

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading = "Enter the text to analyze below: " mode = {mode} showAlert = {showAlert}/> 
            </Route>
          </Switch>
        </div>
        {/* <div className="container my-3"> */}
          {/* <TextForm heading = "Enter the text to analyze below: " mode = {mode} showAlert = {showAlert}/> */}
          {/* <About/> */}
        {/* </div> */}
        </Router>
    </>
  );
}

export default App;
