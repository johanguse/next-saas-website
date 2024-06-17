'use client'

import { RootProvider } from 'fumadocs-ui/provider'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

interface ProvidersProps extends ThemeProviderProps {
  children: React.ReactNode
}

export function Providers({ children, ...props }: ProvidersProps) {
  return (
    <NextThemesProvider {...props}>
      <RootProvider
        search={{
          enabled: false,
        }}
      >
        {children}
      </RootProvider>
    </NextThemesProvider>
  )
}
