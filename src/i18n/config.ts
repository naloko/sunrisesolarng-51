
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import zhTranslation from './locales/zh.json';

// Function to get saved language or default
const getSavedLanguage = () => {
  try {
    const savedLng = localStorage.getItem('language');
    return savedLng || 'en'; // Default to English if no saved preference
  } catch (error) {
    console.warn('Error accessing localStorage:', error);
    return 'en'; // Default to English if localStorage is not available
  }
};

// Initialize i18next with optimized configuration
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    lng: getSavedLanguage(), // Use the function to get saved language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator']
    },
    // Performance optimizations
    load: 'languageOnly',
    ns: ['translation'],
    defaultNS: 'translation',
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    // Only initialize what's needed
    initImmediate: false, // Changed to false for immediate initialization
    // Cache translations
    cache: {
      enabled: true
    }
  });

// Add language change handler to save preference
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'; // Handle RTL languages if needed in future
    console.info(`Switching to ${lng}`);
  } catch (error) {
    console.warn('Error saving language preference:', error);
  }
});

export default i18n;
