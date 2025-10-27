import type {  Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import ThemeProvider from "./ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "A comprehensive Sales Dashboard that provides real-time insights into your business performance. Track revenue, monitor KPIs, analyze trends, and manage your sales pipeline efficiently with interactive charts and detailed reports",
  keywords: [
    "sales dashboard",
    "sales analytics",
    "sales performance",
    "revenue tracking",
    "KPI monitoring",
    "sales reports",
    "sales metrics",
    "business insights",
    "sales pipeline",
  ],
  icons: {
    icon: "/Sales_Dashboard/assets/dashboard-icon.png",
  },
};



export default async function RootLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages =await  getMessages({ locale });

  return (
    <ClerkProvider>
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider locale={locale} messages={messages}>{children}</ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
