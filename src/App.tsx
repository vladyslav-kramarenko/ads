import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useParams} from 'react-router-dom';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import { questionSets } from "./data/questionSets";
import About from './components/About/About';
import i18n from './util/i18n';
import Advantages from "./components/Advantages/Advantages";
import Apartments from "./components/Apartments/Apartments";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import {saveUTMParams} from "./util/saveUTMParams";
import PolicyPageUa from "./pages/PolicyPage/PolicyPageUa";
import PolicyPageEn from "./pages/PolicyPage/PolicyPageEn";
import PolicyPageRu from "./pages/PolicyPage/PolicyPageRu";
import PolicyPageTr from "./pages/PolicyPage/PolicyPageTr";

const LanguageWrapper: React.FC = () => {
    const {lang} = useParams<{ lang: string }>();
    const currentLang = (lang as keyof typeof questionSets) || "en";
    // Change language based on the URL parameter
    useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    return (
        <>
            <Header/>
            <Quiz questionSet={questionSets[currentLang]} />
            {/*<Quiz/>*/}
            <About/>
            <Advantages/>
            <Apartments/>
            <Partners/>
            <Footer/>
        </>
    );
};

const App: React.FC = () => {
    useEffect(() => {
        saveUTMParams();
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/en"/>}/>
                <Route path="/:lang" element={<LanguageWrapper/>}/>

                <Route path="/policy" element={<PolicyPageUa/>}/>
                <Route path="/policy/en" element={<PolicyPageEn/>}/>
                <Route path="/policy/ua" element={<PolicyPageUa/>}/>
                <Route path="/policy/ru" element={<PolicyPageRu/>}/>
                <Route path="/policy/tr" element={<PolicyPageTr/>}/>
            </Routes>
        </Router>
    );
};

export default App;
