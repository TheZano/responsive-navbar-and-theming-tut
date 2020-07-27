import React, { createContext } from 'react'

export const ThemeModeContext = createContext({mode: 'dark'})

export const ThemeModeProvider = ThemeModeContext.Provider