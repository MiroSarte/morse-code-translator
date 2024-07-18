import styles_Info from './InfoMC.module.css'

function InfoMC(props){
    return(
        <>
            <div className={styles_Info.info_container}>
                <h2>
                    What is Morse Code?
                </h2>
                <p>
                 Morse code is a historic and important method of communication developed in the early 1830s by Samuel Morse and Alfred Vail. It encodes text characters into sequences of dots (short signals) and dashes (long signals). These sequences can be transmitted in various forms, such as sound, visual signals, or even electrical pulses, making Morse code a versatile method for communication.
                </p>
                <h3>
                   History and Development
                </h3>
                  <ul>
                    <li><span>Invention:</span> Samuel Morse and Alfred Vail developed Morse code as a means to send messages over long distances using telegraph systems. The original Morse code, sometimes referred to as American Morse code, was later adapted into International Morse code, which is the version most commonly used today.<p></p></li>
                    <li><span>Usage:</span> Morse code was extensively used during the 19th and early 20th centuries for telegraphy, maritime communication, and early radio transmissions. It played a crucial role in various historical events, including military operations during both World Wars.</li>
                  </ul>
                <h3>
                  Transmission Methods
                </h3>
                 <ul>
                    <li><span>Sound:</span> Morse code can be transmitted as sound through beeps or clicks. A dot is a short beep, and a dash is a longer beep.</li>
                    <li><span>Visual Signals: Visual methods include flashing lights, such as using a flashlight or a signal lamp. A quick flash represents a dot, and a longer flash represents a dash.</span></li>
                    <li><span>Electrical Pulses:</span> Morse code can be sent over telegraph wires using electrical pulses, where a short pulse is a dot and a longer pulse is a dash.</li>
                 </ul>
                 <h3>
                   How to Read Morse Code
                 </h3>
                 <p>
                 To read Morse code, find the Morse representation of each character using the Morse alphabet table below or utilize a Morse translator provided above.
                 </p>
            </div>
            <div className={styles_Info.mc_table}>
                <table>
                    <tr>
                        <th>Alphabet</th> 
                        <th>Morse Code</th>
                    </tr>
                    <tr>
                        <td>A</td> 
                        <td>·-</td>
                    </tr>
                    <tr>
                        <td>B</td> 
                        <td>-···</td>
                    </tr>
                    <tr>
                        <td>C</td> 
                        <td>-·-·</td>
                    </tr>
                    <tr>
                        <td>D</td> 
                        <td>-··</td>
                    </tr>
                    <tr>
                        <td>E</td> 
                        <td>·</td>
                    </tr>
                    <tr>
                        <td>F</td> 
                        <td>··-·</td>
                    </tr>
                    <tr>
                        <td>G</td> 
                        <td>--·</td>
                    </tr>
                    <tr>
                        <td>H</td> 
                        <td>····</td>
                    </tr>
                    <tr>
                        <td>I</td> 
                        <td>··</td>
                    </tr>
                    <tr>
                        <td>J</td> 
                        <td>·---</td>
                    </tr>
                    <tr>
                        <td>K</td> 
                        <td>-·-</td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td>·-··</td>
                    </tr>
                <tr>
                    <td>M</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>N</td>
                    <td>-·</td>
                </tr>
                <tr>
                    <td>O</td>
                    <td>---</td>
                </tr>
                <tr>
                    <td>P</td>
                    <td>·--·</td>
                </tr>
                <tr>
                    <td>Q</td>
                    <td>--·-</td>
                </tr>
                <tr>
                    <td>R</td>
                    <td>·-·</td>
                </tr>
                <tr>
                    <td>S</td>
                    <td>···</td>
                </tr>
                <tr>
                    <td>T</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>U</td>
                    <td>··-</td>
                </tr>
                <tr>
                    <td>V</td>
                    <td>···-</td>
                </tr>
                <tr>
                    <td>W</td>
                    <td>·--</td>
                </tr>
                <tr>
                    <td>X</td>
                    <td>-··-</td>
                </tr>
                <tr>
                    <td>Y</td>
                    <td>-·--</td>
                </tr>
                <tr>
                    <td>Z</td>
                    <td>--··</td>
                </tr>
               

                </table>

                <table>
                <tr>
                    <th>
                        Numerical
                    </th>
                    <th>
                        Morse Code
                    </th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>-----</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>·----</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>··---</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>···--</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>····-</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>·····</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>-····</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>--···</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>---··</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>----·</td>
                </tr>
                

                </table>
                <table>
                    <tr>
                        <th>
                            Special Characters
                        </th>
                        <th>
                           Morse Code
                        </th>
                    </tr>
                    
                <tr>
                    <td>.</td>
                    <td>·-·-·-</td>
                </tr>
                <tr>
                    <td>,</td>
                    <td>--··--</td>
                </tr>
                <tr>
                    <td>?</td>
                    <td>··--··</td>
                </tr>

                    
                </table>
            </div>

    
        </>
    );

}
export default InfoMC;