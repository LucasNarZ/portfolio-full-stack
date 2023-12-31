import "../css/styles.css";


import { Header } from "../componentes/header";

import linkedin from "../icons/linkedin.png"
import github from "../icons/github-mark.svg"
import gmail from "../icons/gmail.png"

export function Contact(){
    return(
        <section id='Contact'>
            <h1>Did you like my portfolio? Let's keep in touch.</h1>
            <a href="https:/linkedin.com/in/lucas-narloch-a7ba51271" target="_blank">
                <div className="option">
                    <img src={linkedin} alt="linkedin" />
                    <p>Linkedin</p>
                </div>
            </a>
            
            <div className="option">
                <img src={gmail} alt="email" />
                <p>lucasnarz123@gmail.com</p>
            </div>

            
            <a href="https://github.com/LucasNarZ" target="_blank">
                <div className="option">
                    <img src={github} alt="github" />
                    <p>GitHub</p>
                </div>
            </a>
            
        </section>
    )
}