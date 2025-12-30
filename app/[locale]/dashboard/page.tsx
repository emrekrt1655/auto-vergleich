"use client";
import CarForm, { CarFormHandle } from "@/app/components/CarForm";
import { useContext, useEffect, useRef, useState } from "react";
import { ToastContext } from "@/app/(context)/toastContext";
import Results from "@/app/components/results/Results";
import { useTranslations, useLocale } from "next-intl";
import { dashboardClasses } from "@/app/styles/classes";

export default function DashboardPage() {
  const t = useTranslations("DashboardPage");
  const { textColor, wrapperColor } = dashboardClasses;
  const locale = useLocale();
  const { setToast } = useContext(ToastContext);

  const car1Ref = useRef<CarFormHandle>(null);
  const car2Ref = useRef<CarFormHandle>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [resultData, setResultData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [car1DefaultValues, setCar1DefaultValues] = useState<any>(null);
  const [car2DefaultValues, setCar2DefaultValues] = useState<any>(null);


  const handleCompare = async (car1?: any, car2?: any) => {

    const car1Data = car1 || car1Ref.current?.getFormData();
    const car2Data = car2 || car2Ref.current?.getFormData();

    if (!car1Data || !car2Data) {
      setToast({ message: t("toast.missingCars"), type: "error" });
      return;
    }

    setIsLoading(true);
    setResultData(null);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    try {
      const response = await fetch("/api/cars/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ car1: car1Data, car2: car2Data, locale }),
      });

      const data = await response.json();
      setResultData(data.result);
      sessionStorage.setItem(
        "lastComparison",
        JSON.stringify({  car1: car1Data,
          car2: car2Data, locale, result: data.result })
      );
      console.log("AI Vergleich:", data.result);
    } catch (error) {
      setToast({ message: t("toast.missingCars"), type: "error" });
    } finally {
      8;
      setIsLoading(false);
    }
  };

 useEffect(() => {
    const lastComparison = sessionStorage.getItem("lastComparison");
    if (!lastComparison) return;

    const parsed = JSON.parse(lastComparison);
    
    setCar1DefaultValues(parsed.car1);
    setCar2DefaultValues(parsed.car2);

    if (parsed.locale !== locale) {
      setTimeout(() => {
        handleCompare(parsed.car1, parsed.car2);
      }, 500);
    } else {
      setResultData(parsed.result);
    }
  }, []);

  useEffect(() => {
    const lastComparison = sessionStorage.getItem("lastComparison");
    if (!lastComparison) return;

    const parsed = JSON.parse(lastComparison);
    
    if (parsed.locale && parsed.locale !== locale) {
      handleCompare(parsed.car1, parsed.car2);
    }
  }, [locale]);

  return (
    <div className="min-h-screen py-16 px-6">
      <section className="text-center mb-12">
        <h1 className={`text-4xl font-bold ${textColor} mb-4`}>{t("title")}</h1>
        <p className={`${textColor} max-w-2xl mx-auto`}>{t("description")}</p>
      </section>

      <section className={`grid md:grid-cols-2 gap-10 max-w-6xl mx-auto`}>
        <div className={` ${wrapperColor} p-6 rounded-xl shadow-sm`}>
          <h2 className="text-lg font-semibold mb-4 text-brand-primary">
            {t("vehicle1")}
          </h2>
          <CarForm ref={car1Ref} defaultValues={car1DefaultValues} />
        </div>

        <div className={` ${wrapperColor} p-6 rounded-xl shadow-sm`}>
          <h2 className="text-lg font-semibold mb-4 text-brand-secondary">
            {t("vehicle2")}
          </h2>
          <CarForm ref={car2Ref} defaultValues={car2DefaultValues} />
        </div>
      </section>
      <div className="text-center mt-12">
        <button
          onClick={() => handleCompare()}
          disabled={isLoading}
          className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          {isLoading ? t("comparing") : t("compareButton")}{" "}
        </button>
      </div>
      <div ref={resultsRef}>
        {isLoading && (
          <section className="max-w-6xl mx-auto mt-16">
            <div className={`${wrapperColor} p-12 rounded-xl text-center`}>
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
                <p className={`text-lg ${textColor}`}>{t("loadingResults")}</p>
              </div>
            </div>
          </section>
        )}

        {resultData && !isLoading && (
          <section className="max-w-6xl mx-auto mt-16">
            <Results data={resultData} />
          </section>
        )}
      </div>
    </div>
  );
}
