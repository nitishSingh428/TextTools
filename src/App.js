// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from './components/Alert';

// let name = "Nitish";
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text Enhancer - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'Text Enhancer is Amazing';
      // },2000);

      // setInterval(()=>{
      //   document.title = 'Install Text Enhancer Now';
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text Enhancer'
    }
  }
  return (
    <>
      <Navbar title="Nitish World" aboutText="About Me" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
