import './App.css';
import Navbar from './Navbar';
import MyForm from './component/Textform';
import Module2 from './module2.mjs';
import Uppercase from './component/Uppercase';
import About from './component/About';
import Alert from './component/Alert';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Automatically dismiss the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode is enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'Textutils is amazing Mode';
      }, 2000);
    } else {
      setMode('light');
      showAlert('Light mode is enabled', 'success');
      document.title = 'TextUtils - Light Mode';
      setInterval(() => {
        document.title = 'Install Textutils now';
      }, 1500);
    }
  };

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mode]);

  return (
    <div className='App'>
      <Router>
        <Navbar title="MyApp" aboutus="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Uppercase showAlert={showAlert} />} />
        </Routes>
        <MyForm />
        <Module2 />
      </Router>
      {/*<About />*/}
    </div>
  );
}

export default App;
