'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  )
}
