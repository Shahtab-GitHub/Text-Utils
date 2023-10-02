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

  // Enabel Dark Mode
  const toggleMode1 = ()=>{

    // removeBodyClasses(); 

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
      // document.title = "TextUtils - Dark Mode";

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
      // document.title = "TextUtils - Light Mode";
    }
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }


  //Pallet Color Mode
  // const toggleMode2 = (cls)=>{
  //   removeBodyClasses();
  //   document.body.classList.add('bg-' + cls);
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //   }
  // }


  return (
    <>
      <Router>
        <Navbar title = "TextUtils" hometext = "Home" /*toggleMode2 ={toggleMode2}*/  abouttext = "About" mode = {mode} toggleMode1 ={toggleMode1}/>
        {/* <Navbar title = "TextUtils"  abouttext = "About" mode = {mode} toggleMode ={toggleMode} /> */}
        <Alert alert = {alert}/>

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode = {mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading = "Try TextUtils - Word counter, Character counter, Text copy, Remove Extra Spaces: " mode = {mode} showAlert = {showAlert}/> 
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
