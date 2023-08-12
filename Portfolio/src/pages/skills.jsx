import "../css/styles.css";

import JsIcon from '../icons/iconjs.svg';
import CssIcon from '../icons/logo-css.svg';
import htmlIcon from '../icons/732212.svg';
import ReactIcon from '../icons/React-icon.svg';
import SassIcon from '../icons/sass-1.svg';


export function Skills(props){
    return(
        <section id='Skills'>
            <p className='title'>Skills</p>
            <p className='text'>I'm always learning new things</p>
            <div className='boxes'>
                <div className='box' key="html">
                    <img src={htmlIcon} alt="HTML"/>
                    <p>HTML stands for HyperText Markup Language. It is a standard markup language for web page creation.</p>
                </div>
                <div className='box' key="css">
                    <img src={CssIcon} alt="CSS"/>
                    <p>CSS was developed by W3C (World Wide Web Consortium) in 1996 for a rather simple reason.</p>
                </div>
                <div className='box' key="JavaScript">
                    <img src={JsIcon} alt="JavaScript" />
                    <p>JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages.</p>
                </div>
                <div className='box' key="React">
                    <img src={ReactIcon} alt="React"/>
                    <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook.</p>
                </div>
                <div className='box' key="Sass">
                    <img src={SassIcon} alt="Sass"/>
                    <p>Sass (Syntactically Awesome Style Sheets) is an extension of CSS. Style sheet languages control where and how text appears on a webpage, from frame size and color to menu positions.</p>
                </div>
                <div className='box ui-ux' key="ui/ux">
                    <p className='box-title'>UI/UX</p>
                    <p>UX design refers to the term “user experience design”, while UI stands for “user interface design”.</p>
                </div>
            </div>
        </section>
    )
}