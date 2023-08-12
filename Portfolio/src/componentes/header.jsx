import "../css/styles.css";

export function Header(){
    return(
        <header className= "header">
            <div className='name-and-prof'>
                <p className='name'>Lucas</p>
                <p className='prof'>Front-end Developer</p>
            </div>
            <nav>
                <ul className='Menu'>
                    <li><a href="/#Home">Home</a></li>
                    <li><a href="/#Skills">Skills</a></li>
                    <li><a href="/#Projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}