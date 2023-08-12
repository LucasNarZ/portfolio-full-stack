import React from 'react';

import { Header } from '../componentes/header';
import { Home } from './Home';
import { Skills } from './skills';
import { Projects } from './projects';
import { Footer } from '../componentes/footer';



export function Main(){
    return(
        <React.Fragment>
            <Header />
            <Home />
            <Skills />
            <Projects />
            <Footer />
        </React.Fragment>
    )
}