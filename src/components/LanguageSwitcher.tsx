// LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        navigate(`/${lang}`);
    };

    return (
        <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('ru')}>RU</button>
            <button onClick={() => changeLanguage('tr')}>TR</button>
            <button onClick={() => changeLanguage('ua')}>UA</button>
        </div>
    );
};

export default LanguageSwitcher;
