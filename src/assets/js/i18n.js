// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import des fichiers de langue
import enNavbar from '../translations/en/navbar.json';
import frNavbar from '../translations/fr/navbar.json';
import enAbout from '../translations/en/about.json';
import frAbout from '../translations/fr/about.json';
import enEducation from '../translations/en/education.json';
import frEducation from '../translations/fr/education.json';
import enExperience from '../translations/en/experience.json';
import frExperience from '../translations/fr/experience.json';
import enFooter from '../translations/en/footer.json';
import frFooter from '../translations/fr/footer.json';
import enHeader from '../translations/en/header.json';
import frHeader from '../translations/fr/header.json';
import enCompetences from '../translations/en/competences.json';
import frCompetences from '../translations/fr/competences.json';
import enGallerie from '../translations/en/gallerie.json';
import frGallerie from '../translations/fr/gallerie.json';
import enContact from '../translations/en/contact.json';
import frContact from '../translations/fr/contact.json';
// Configuration de i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                navbar: enNavbar,
                header: enHeader,
                about: enAbout,
                education: enEducation,
                competences: enCompetences,
                experience: enExperience,
                footer: enFooter,
                gallerie: enGallerie,
                contact: enContact
            },
            fr: {
                navbar: frNavbar,
                header: frHeader,
                about: frAbout,
                education: frEducation,
                competences: frCompetences,
                experience: frExperience,
                footer: frFooter,
                gallerie: frGallerie,
                contact: frContact

            }
        },
        lng: 'fr', // Langue par défaut
        fallbackLng: 'fr', // Langue de repli en cas de non disponibilité
        ns: ['navbar','header','about','education','competences','experience','footer','gallerie', 'contact'], // Noms des namespaces
        defaultNS: 'navbar', // Namespace par défaut
        interpolation: {
            escapeValue: false, // Pas nécessaire pour React
        }
    });

export default i18n;
