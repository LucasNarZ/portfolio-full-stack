import "../css/styles.css";

import GithubIcon from '../icons/github-mark.svg';

import LandingPageImage from "../images/landing_page_image.PNG"
import FormImage from "../images/form_image.PNG"

export function Projects(){
    const projects = [
        {
            title:"Landing Page",
            imageLink:LandingPageImage,
            projectLink:"https://landing-page-iota-mocha.vercel.app",
            description:"The landing page was designed to showcase the product's features and benefits, and to encourage users to take action, such as making a purchase or signing up for a free trial.",
            skills:"Build using: React,  Sass.",
            link:"https://github.com/LucasNarZ/Book-Service-Landing-page.git"
        },
        {
            title:"Form",
            imageLink:FormImage,
            projectLink:"https://form-five-xi.vercel.app",
            description:"The objective of this form is to gather information from the user through an intuitive interface.",
            skills:"Build using: Nextjs, Tailwind CSS, Typescript.",
            link:"https://github.com/LucasNarZ/Form.git"
        },
    ];

    return(
        <section id="Projects">
            <p className='title'>Projects</p>
            <p className='text'>here you can see my skills in practice</p>
            {projects.map((project) => {
                return(
                    <div className="project">
                        <div className="title-image">
                            <a href={project.projectLink} target="_blank"><img src={project.imageLink} className="project-image" alt="" /></a>
                        </div>
                        <div className="project-info">
                            <p className="project-title">{project.title}</p>
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