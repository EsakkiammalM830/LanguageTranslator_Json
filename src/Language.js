import React, { useState } from 'react';
import en from './locales/en.json';
import zh from './locales/zh.json';

const translations = {
    en,
    zh
};

function Language() {
    const [language, setLanguage] = useState('en');
    const [text, setText] = useState(translations[language]);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        setText(translations[selectedLanguage]);
    };

    return (
        <div>
            <h1>{text.language || 'Language'}</h1>
            <select value={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="zh">Chinese</option>
            </select>
        </div>
    );
}

export default Language;