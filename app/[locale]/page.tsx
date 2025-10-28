import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import {routing} from '@/i18n/routing';
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
export default function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params); 

  setRequestLocale(locale);

  redirect(`/${locale}/dashboard`);
}
