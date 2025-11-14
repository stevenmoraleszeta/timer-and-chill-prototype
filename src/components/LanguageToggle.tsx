import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { BsGlobe } from 'react-icons/bs'
import styles from './LanguageToggle.module.css'

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
        title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      >
        <BsGlobe className={styles.icon} />
        <span className={styles.languageCode}>{language.toUpperCase()}</span>
      </button>
    </div>
  )
}

