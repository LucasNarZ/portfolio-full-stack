import "../css/styles.css";

import JsIcon from '../icons/iconjs.svg';
import CssIcon from '../icons/logo-css.svg';
import htmlIcon from '../icons/732212.svg';
import ReactIcon from '../icons/React-icon.svg';
import { Link } from "react-scroll"


export function Home(){
    return(
        <section id='Home'>
            <div className='info'>
                <p>I'm Lucas</p>
                <p>Front-end Developer and UI & UX Designer</p>
                <p>I'm a front-end developer with expertise in HTML, CSS, JS, and React. I specialize in creating responsive and dynamic user interfaces.</p>
                <Link
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                            <button className='contact-me-btn'>Contact Me</button>
                    </Link>
            </div>
            <div className="images">
                <img src={JsIcon} alt="JavaScript" />
                <div className='icons'>
                    <img src={htmlIcon} alt="HTML"/>
                    <p>UI/UX</p>
                    <img src={ReactIcon} alt="React"/>
                </div>
                <img src={CssIcon} alt="CSS"/>
            </div>
        </section>
    )
}