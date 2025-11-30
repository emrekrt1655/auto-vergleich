import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import RootLayout from "../layout";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";
import { Toast } from "../components/Toast";

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "tr" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: any }) {
  // params artık Promise olabilir, önce await ile çöz
  const resolvedParams = await params; // ⚡ Next 16 yeni yapısına uygun
  const locale = resolvedParams.locale as string;

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootLayout>
            <Navbar />
            {children}
            <FooterSection />
            <Toast />
          </RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
