// app/[locale]/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } =  params;
  const user = await currentUser();

  const destination = user ? `/${locale}/dashboard` : `/${locale}/sign-in`;
  redirect(destination);
}
