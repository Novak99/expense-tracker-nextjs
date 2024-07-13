'use client'
import { useState, useEffect } from 'react'

export default function useLocalStorageState(key:any, defaultValue:any = '') {
    const [state, setState] = useState(
      () => window.localStorage.getItem(key) || defaultValue,
    )

    useEffect(() => {
      window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
  }