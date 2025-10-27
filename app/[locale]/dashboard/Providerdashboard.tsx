'use client'
import React, { useEffect, useState } from 'react'
import Header from "./_components/Header";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { useUser } from '@clerk/nextjs'
import { userContext } from '../../../context/User'

export default function ProviderDashboard({ children }: { children: React.ReactNode }) {
  const [User, setUser] = useState<string>("")
  const { user } = useUser()

  useEffect(() => {
    if (user) setUser(user.id)
  }, [user])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <userContext.Provider value={{ User, setUser }}>
        {children}
      </userContext.Provider>
    </ThemeProvider>
  );
}
