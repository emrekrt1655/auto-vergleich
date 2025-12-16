import { useTranslations } from 'next-intl';

export default function ProblemSection() {
  const t = useTranslations('Components.LandingPage.problemSection');

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#111] text-center px-6">
      <h2 className="text-3xl font-bold text-brand-neutral mb-6">
        {t('title')}
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        {t('description')}
      </p>
    </section>
  );
}