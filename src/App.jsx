import React, { useEffect, useState } from "react";
import Translator from './Translator.jsx'
import InfoMC from './InfoMC.jsx'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
}, [theme]);

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  } 
  return (  
      <>
       <Header toggleTheme={toggleTheme} theme={theme}/>
       <Translator theme={theme}/>
       <InfoMC/>
       <Footer/>
    </>
  )
}

export default App
