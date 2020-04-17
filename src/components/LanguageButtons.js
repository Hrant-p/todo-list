import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages, setUserLanguage } from '../helpers';

const LanguageButtons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setUserLanguage(lng);
  };

  const currentLng = localStorage.getItem('LANGUAGE');

  return (
    <div className="d-flex justify-content-center mr-4 mb-4">
      {Object.keys(languages)
        .map(lng => (
          <button
            key={lng}
            type="button"
            className={`${currentLng === lng ? 'btn btn-primary' : 'btn btn-info'}`}
            onClick={() => changeLanguage(lng)}
          >
            {lng}
          </button>
        ))}
    </div>
  );
};

export default LanguageButtons;
