'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Suspense } from 'react';
import { useLanguage } from '@/lib/language-context';
import { translations, resultTranslations } from '@/data/translations';

const typeEmojis = {
  teto_m: '🤗',
  teto_f: '💝',
  egen_m: '🤔',
  egen_f: '✨'
} as const;

function ResultContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'teto_f';
  const tetoCount = Number(searchParams.get('tetoCount') || '5');
  const { language } = useLanguage();
  const t = translations[language];
  const result = resultTranslations[language][type as keyof typeof resultTranslations.ko];

  const tetoRatio = (tetoCount / 10) * 100;
  const egenRatio = 100 - tetoRatio;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t.linkCopied);
  };

  return (
    <Card className="max-w-md w-full p-3 sm:p-8 space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          {t.yourTypeIs}
        </h1>
        <div className="space-y-1 sm:space-y-2">
          <div className="text-4xl sm:text-5xl">
            {typeEmojis[type as keyof typeof typeEmojis]}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {result.title}
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>{t.tetoRatio}</span>
            <span>{Math.round(tetoRatio)}%</span>
          </div>
          <Progress value={tetoRatio} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>{t.egenRatio}</span>
            <span>{Math.round(egenRatio)}%</span>
          </div>
          <Progress value={egenRatio} className="h-2" />
        </div>
      </div>

      <Separator />

      <div className="space-y-4 sm:space-y-6">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
          {result.description}
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">{t.characteristics}</h3>
          <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600">
            {result.characteristics.map((char: string, index: number) => (
              <li key={index}>
                {char} {['💫', '🌟', '💖', '✨', '💝'][index % 5]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
        <Link
          href="/"
          className="block w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity text-center text-sm sm:text-base"
        >
          {t.retryTest}
        </Link>
        <button
          onClick={handleCopyLink}
          className="block w-full px-4 sm:px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm sm:text-base cursor-pointer"
        >
          {t.copyLink}
        </button>
      </div>
    </Card>
  );
}

export default function ResultPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-pink-50 to-blue-50">
      <Suspense fallback={
        <Card className="max-w-md w-full p-3 sm:p-8 space-y-6 sm:space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {t.loadingResult}
            </h1>
          </div>
        </Card>
      }>
        <ResultContent />
      </Suspense>
      <div className="text-sm text-gray-500 mt-4">
        {t.disclaimer}
      </div>
    </main>
  );
} 