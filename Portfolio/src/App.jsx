import './css/styles.css';



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main } from './pages/Main';
import { Contact } from './pages/contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </Router>
    );
}

export default App;
