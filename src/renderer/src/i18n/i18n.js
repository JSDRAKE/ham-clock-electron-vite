import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importar traducciones
import translationEN from './locales/en/translation.json'
import translationES from './locales/es/translation.json'

// Los recursos de traducción
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
}

// Detectar el idioma del sistema
const systemLanguage = navigator.language || navigator.userLanguage
const isSpanish = systemLanguage.startsWith('es')

// Configurar i18n
i18n.use(initReactI18next).init({
  resources,
  lng: isSpanish ? 'es' : 'en', // Usar español si el sistema está en español, de lo contrario inglés
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // no es necesario para react
  }
})

export default i18n
