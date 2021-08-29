import { createContext, useEffect, useState } from 'react';

export const defaultLocale = 'hu';
export const locales = ['hu', 'en'];
export const LanguageContext = createContext([]);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    let language = defaultLocale;
    if (localStorage.getItem('lang') === "en" ||
      localStorage.getItem('lang') === "hu" ) {
      language = localStorage.getItem('lang') || locale;
    }
    setLocale(language);
    localStorage.setItem('lang', language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
}