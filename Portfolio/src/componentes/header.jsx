import "../css/styles.css";

import { useState } from 'react';

import { Link } from "react-scroll";

import Menu from '../icons/bars-solid.svg'

export function Header(){
    const [isOpen, setIsOpen ] = useState(false);

    return(
        <header className= {`header ${isOpen ? "open" : ""}`}>
            <div className="initial-menu">
                <div className='name-and-prof'>
                    <p className='name'>Lucas</p>
                    <p className='prof'>Front-end Developer</p>
                </div>
                <img src={Menu} alt="menu" className={`burger-menu ${isOpen ? "rotate" : ""}`} onClick={() => {
                    setIsOpen(!isOpen);
                }}/>
            </div>
            
            <nav>
                <ul className={`Menu ${isOpen ? "show" : ""}`}>
                    <li><Link
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                            Home
                    </Link></li>
                    <li><Link
                        activeClass="active"
                        to="Skills"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                            Skills
                    </Link></li>
                    <li><Link
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                            Projects
                    </Link></li>
                    <li><Link
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                            Contact
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}