'use client'

import { createContext, useContext, useState } from "react"

const CurrencyContext = createContext(null)

function CurrencyProvider({children, ...props}:any) {
  const [currency, setCurrency] = useState('RSD')
  const value = [currency, setCurrency]
  return <CurrencyContext.Provider value={value} {...props} >
    {children}
  </CurrencyContext.Provider>
}

function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export { CurrencyProvider, useCurrency }