import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useParams} from 'react-router-dom';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import About from './components/About/About';
import i18n from './i18n';
import Advantages from "./components/Advantages/Advantages";
import Apartments from "./components/Apartments/Apartments";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

const LanguageWrapper: React.FC = () => {
    const {lang} = useParams<{ lang: string }>();

    // Change language based on the URL parameter
    React.useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    return (
        <>
            <Header/>
            <Quiz/>
            <About/>
            <Advantages/>
            <Apartments/>
            <Partners/>
            <Footer/>
        </>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/en"/>}/>
                <Route path="/:lang" element={<LanguageWrapper/>}/>
            </Routes>
        </Router>
    );
};

export default App;
