'use client';

import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';

export default function Home() {
  const [gender, setGender] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="mb-4">
        <button
          onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
          className="px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          {language === 'ko' ? t.switchToEn : t.switchToKo}
        </button>
      </div>

      <Card className="max-w-md w-full p-4 sm:p-8 text-center space-y-6 sm:space-y-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 break-keep">
            {t.description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {t.selectGender}
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <button
              onClick={() => setGender('m')}
              className={`p-3 sm:p-6 rounded-lg border-2 transition-all duration-200 ${
                gender === 'm'
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">👨</div>
              <div className="text-sm sm:text-base font-medium text-gray-800">{t.male}</div>
            </button>
            <button
              onClick={() => setGender('f')}
              className={`p-3 sm:p-6 rounded-lg border-2 transition-all duration-200 ${
                gender === 'f'
                  ? 'border-pink-400 bg-pink-50'
                  : 'border-gray-200 hover:border-pink-300'
              }`}
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">👩</div>
              <div className="text-sm sm:text-base font-medium text-gray-800">{t.female}</div>
            </button>
          </div>
        </div>

        <div className="pt-2 sm:pt-4">
          <Link
            href={gender ? `/test?gender=${gender}` : '#'}
            className={`block w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg transition-all duration-200 text-sm sm:text-base ${
              !gender ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
            }`}
            onClick={(e) => !gender && e.preventDefault()}
          >
            {t.startTest}
          </Link>
          <div className="text-center mt-3 sm:mt-5 text-xs sm:text-sm text-gray-500">
            {t.timeRequired}
          </div>
        </div>
      </Card>
    </main>
  );
}
