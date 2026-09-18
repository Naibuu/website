import en, { type TranslationKey } from '@/i18n/en'
import el from '@/i18n/el'

export type Language = 'en' | 'el'

const translations: Record<Language, Record<TranslationKey, string>> = {
    en,
    el,
}

export function getLanguage(): Language {
    const stored = localStorage.getItem('language') as Language | null

    if (stored === 'en' || stored === 'el') {
        return stored
    }

    const browserLanguage = navigator.language.slice(0, 2)
    const defaultLanguage: Language = browserLanguage === 'el' ? 'el' : 'en'

    localStorage.setItem('language', defaultLanguage)
    return defaultLanguage
}

export function setLanguage(language: Language): Language {
    const currentLanguage = getLanguage()

    if (language === currentLanguage) return language

    localStorage.setItem('language', language)
    document.documentElement.setAttribute('lang', language)

    console.debug('[i18n] Set language to: ', language)

    return language
}

export function t(key: TranslationKey, language: Language = 'en'): string {
    return translations[language][key] ?? translations['en'][key] ?? key
}
