import { IoRepeatSharp } from "react-icons/io5";
import styles from './Translator.module.css'
import React, { useState, useRef } from 'react';
function Translator(props){
    const theme = props.theme

    const [convertedText, setConvertedText] = useState('');
    const [translationMode, setMode] = useState('Text to Morse');
    const inputTextArea = useRef(null);

    const translationFunction = () =>{
              setConvertedText("")
              inputTextArea.current.value = ""
              setMode((prevMode) =>(prevMode === 'Text to Morse' ? 'Morse to Text' : 'Text to Morse'))
    }

    const morseDictionary = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
        '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
        '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
        '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
        '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
        '---..': '8', '----.': '9', '.-.-.-': '.', '--..--': ',', '..--..': '?',
        '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')',
        '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+',
        '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@',
        '...---...': 'SOS'
      };

    const convertFunction = ()=>{
        const inputUser = inputTextArea.current.value

        

        const textToMorse = ()=>{
            const textWord = inputUser.split("")
            return textWord.map(char =>{
            return Object
            .keys(morseDictionary)
            .filter(key => morseDictionary[key] === char.toUpperCase())
        }).join(" ")};

        

    
          const morseToText = ()=>{
                const morseWords = inputUser.split(" ")
                const translateWords = morseWords.map(symbol => morseDictionary[symbol] || '').join('');
          return translateWords;
        }


        const modeTranslation = translationMode === 'Text to Morse' ? textToMorse : morseToText;
       

        setConvertedText(modeTranslation);

    }



    return(
        <>
       <div className={styles.translator_mode}>
            <h3>Translate Mode:</h3> <span>{translationMode}</span> <span onClick={translationFunction}><IoRepeatSharp/></span>
        </div>
        <div className={styles.translator_container}>
               <div className={styles.translator_container1}>
                  <textarea ref={inputTextArea} name="text" id="text_area"></textarea>
             
               </div>
               <div  className={styles.translator_container2} >
                 <p id="converted-text">{convertedText}</p>
               </div>
        </div>
        <div className={styles.btn_wrap}>
            <button onClick={convertFunction}>Convert</button>

        </div>
           
        </>
    )
}

export default Translator