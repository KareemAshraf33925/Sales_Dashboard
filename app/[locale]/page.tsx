import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export default function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params); 

  setRequestLocale(locale);

  redirect(`/${locale}/dashboard`);
}
