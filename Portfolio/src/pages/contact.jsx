import "../css/styles.css";

import { Header } from "../componentes/header";

export function Contact(props){
    return(
        <>
            <Header />
            <section className='contact'>
                <button className='linkedin'><a href="http://LinkedIn.com/in/lucas-narloch-a7ba51271/" target='_blank'>Linkedin</a></button>
                <p>Or sand me an email:</p>
                <strong><a href="mailto:lucasnarlochz@gmail.com" target="_blank">lucasnarlochz@gmail.com</a></strong>
            </section>
        </>

    )
}