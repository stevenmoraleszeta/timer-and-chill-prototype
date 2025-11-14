import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language } from '../types'
import { storage } from '../utils'
import { translations } from '../constants/translations'

interface LanguageContextType {
  language: Language
  t: typeof translations.en
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

/**
 * Detect system language
 * Returns 'es' if browser language starts with 'es', otherwise 'en'
 */
const detectSystemLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en'
  return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get saved language or detect system language, default to 'en'
  const savedLanguage = storage.getLanguage()
  const systemLanguage = detectSystemLanguage()
  const initialLanguage = savedLanguage || systemLanguage

  const [language, setLanguageState] = useState<Language>(initialLanguage)

  // Update document language attribute
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Save language to localStorage
  useEffect(() => {
    storage.setLanguage(language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'es' : 'en'))
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

