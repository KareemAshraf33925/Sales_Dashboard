'use client';
import { useEffect, useState, ReactNode } from 'react';
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  locale: string;
  messages: any;
};

export default function ClientProviders({ children, locale, messages }: Props) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) setTheme(saved);
    setMounted(true);
  }, []);

  if (!mounted) return null; // تمنع Hydration mismatch

  return (
    <ClerkProvider
      signInUrl={`/${locale}/sign-in`}
      signUpUrl={`/${locale}/sign-up`}
      afterSignInUrl={`/${locale}/dashboard`}
      afterSignUpUrl={`/${locale}/dashboard`}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className={theme}>{children}</div>
      </NextIntlClientProvider>
    </ClerkProvider>
  );
}
