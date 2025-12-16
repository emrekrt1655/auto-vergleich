import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Navbar from "@/app/components/Navbar";
import { ReactQueryProvider } from "../(context)/reactQueryProvider";
import { AuthProvider } from "../(context)/authContext";
import FooterSection from "../components/Footer";
import { Toast } from "../components/Toast";
import ToastProvider from "../(context)/toastContext";

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }, {locale: "tr"}];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as string;

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ReactQueryProvider>
        <ToastProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <FooterSection />
            <Toast />
          </AuthProvider>
        </ToastProvider>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  );
}
