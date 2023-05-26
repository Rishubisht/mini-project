
import './App.css';
import Text from './components/TextForm'
import Navbar from './components/Navbar';
import Alert from'./components/Alert';
import About from './components/About';
import Home from './components/Home';
import React,{ useState } from 'react';
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  const [mode ,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode === "light"){
        setMode("dark")
           document.body.style.backgroundColor ="#042743";
           showAlert("Dark Mode has been Enabeld","success")
    }
        else{
        setMode("light")
          document.body.style.backgroundColor="#f8f9fa"
          showAlert("Light mode has beeb Enabeld","success")
        }
  }

function showAlert (message,type){
   setAlert({
    msg:message,
    type:type
   })

   setTimeout(() => {
    setAlert(null);
  }, 2000);
  }
  return (
    <>
    <Router>

   
{/* <Navbar /> */}
<Navbar Title="Text Form" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

{/* <About/> */}
<Routes>
  <Route path="/"element = { <Home mode={mode}/>}/>

  < Route path="/complain"  element={<Text heading = "Enter the your complain here" mode={mode} alert = {showAlert} />}/>

  
</Routes>
    </Router>
    </>
  );
}

export default App;
