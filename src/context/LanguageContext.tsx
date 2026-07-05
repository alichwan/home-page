import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'en' | 'es'

interface LanguageContextValue {
  lang: Lang
  toggleLanguage: () => void
  /** Pick a string based on the current language: t('Fill here', 'Rellenar aqui') */
  t: (en: string, es: string) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    toggleLanguage: () => setLang((prev) => (prev === 'en' ? 'es' : 'en')),
    t: (en, es) => (lang === 'en' ? en : es),
  }), [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
