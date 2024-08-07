// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import des fichiers de langue
import enNavbar from '../translations/en/navbar.json';
import frNavbar from '../translations/fr/navbar.json';

// Configuration de i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                navbar: enNavbar,
            },
            fr: {
                navbar: frNavbar,
            }
        },
        lng: 'en', // Langue par défaut
        fallbackLng: 'en', // Langue de repli en cas de non disponibilité
        ns: ['navbar'], // Noms des namespaces
        defaultNS: 'navbar', // Namespace par défaut
        interpolation: {
            escapeValue: false, // Pas nécessaire pour React
        }
    });

export default i18n;
