import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function HomePage({params}: {params: { locale: string }}) {
  const {locale} = params;
  setRequestLocale(locale);
  const user = await currentUser();

  const destination = user ? `/${locale}/dashboard` : `/${locale}/sign-in`;
  redirect(destination);
}
