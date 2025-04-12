"use client";
import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,mr', // include this for selected languages
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" ></div>
    </>
  );
};

export default GoogleTranslate;