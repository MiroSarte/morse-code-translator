
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
function Header(props){
    const toggle = props.toggleTheme
    const theme = props.theme
   
    return(
            <>
            <nav className={theme}>
                <h1>Morse Code </h1><span>Translator</span>
                <div className="theme" onClick={toggle}> 
                <span className="theme_dark"><IoSunny/></span>  
                <span className="theme_light"><FaRegMoon/></span>
                </div>
                </nav>    
            </>
    );
   
}

export default Header;