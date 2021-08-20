import { useContext } from 'react';

import { LanguageContext, defaultLocale, locales } from '../contexts/LanguageContext';
import { LangStrings } from '../lib/strings';

export default function useTranslation() {
  const [locale, setLocale] = useContext(LanguageContext);

  function t(section, key) {
    if (!LangStrings[locale][section]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangStrings[locale][section][key] || LangStrings[defaultLocale][section][key] || '';
  }

  return { t, locale, setLocale, locales };
}