import "../css/styles.css";

import GithubIcon from '../icons/github-mark.svg';

export function Projects(){
    const projects = [
        {
            title:"Landing Page",
            image:"",
            projectLink:"landing-page-iota-mocha.vercel.app",
            description:"The landing page was designed to showcase the product's features and benefits, and to encourage users to take action, such as making a purchase or signing up for a free trial.",
            skills:"Build using: React,  Sass.",
            link:"https://github.com/LucasNarZ/Book-Service-Landing-page.git"
        },
        {
            title:"Form",
            image:"",
            projectLink:"form-six-mauve.vercel.app",
            description:"The objective of this form is to gather information from the user through an intuitive interface.",
            skills:"Build using: Nextjs, Tailwind CSS, Typescript.",
            link:"https://github.com/LucasNarZ/Form.git"
        },
        {
            title:"Authentication",
            image:"",
            projectLink:"",
            description:"A full-stack application with sign-up and sign-in systems using Next.js, Tailwind CSS, and Node.js. The application uses PostgreSQL as a database and incorporates numerous security measures to ensure user data privacy and reliability.",
            skills:"Build using: Nextjs, tailwind CSS, Daisy and Nodejs Express, Typescript.",
            link:"https://github.com/LucasNarZ/Nodejs-authentication.git"
        }
    ];

    return(
        <section id="Projects">
            <p className='title'>Projects</p>
            <p className='text'>here tou can see my skills in practice</p>
            {projects.map((project) => {
                return(
                    <div className="project">
                        <div className="title-image">
                            <p className="project-title">{project.title}</p>
                            <img src={project.imageLink} className="project-image" alt="" />
                        </div>
                        <div className="project-info">
                            <p className="project-description">{project.description}</p>
                            <p className="skills-used">{project.skills}</p>
                            <a href={project.link} target='_blanked'><img src={GithubIcon} className="github" alt="github" /></a>
                        </div>
                    </div>
                )
            }
            )}
        </section>
    )
}