import react from 'react'

const languageContext = react.createContext({
  activeLanguage: 'TE',
  changeLanguage: () => {},
})

export default languageContext
