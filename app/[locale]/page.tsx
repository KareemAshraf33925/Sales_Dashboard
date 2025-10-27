// app/[locale]/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function HomePage({ params }: { params: { locale: string } }) {
 
  const user = await currentUser();

  const destination = user ? `/${params.locale}/dashboard` : `/${params.locale}/sign-in`;
  redirect(destination);
}
