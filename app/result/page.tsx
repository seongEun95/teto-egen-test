'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Suspense } from 'react';
import results from '@/data/results.json';

type ResultType = {
  title: string;
  description: string;
  characteristics: string[];
};

type Results = {
  types: {
    [key: string]: ResultType;
  };
};

const typeEmojis = {
  teto_m: '🤗',
  teto_f: '💝',
  egen_m: '🤔',
  egen_f: '✨'
};

function ResultContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'teto_f';
  const result = (results as Results).types[type];

  // const handleShare = async () => {
  //   try {
  //     if (navigator.share) {
  //       await navigator.share({
  //         title: '테토-에겐 테스트 결과',
  //         text: `나의 유형은 ${result.title}입니다! 당신의 유형도 알아보세요! ${typeEmojis[type as keyof typeof typeEmojis]}`,
  //         url: window.location.href,
  //       });
  //     } else {
  //       // 공유 API를 지원하지 않는 경우 링크 복사로 대체
  //       handleCopyLink();
  //     }
  //   } catch (error) {
  //     // 사용자가 공유를 취소하거나 에러가 발생한 경우
  //     console.error('공유 중 오류 발생:', error);
  //   }
  // };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다! 📋');
  };

  return (
    <Card className="max-w-md w-full p-3 sm:p-8 space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          당신의 유형은... ✨
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

      <Separator />

      <div className="space-y-4 sm:space-y-6">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
          {result.description}
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">✨ 특징</h3>
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
          다시 테스트하기 🔄
        </Link>
        <button
          onClick={handleCopyLink}
          className="block w-full px-4 sm:px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm sm:text-base cursor-pointer"
        >
          링크 복사하기 📋
        </button>
        {/* <button
          onClick={handleShare}
          className="block w-full px-4 sm:px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm sm:text-base cursor-pointer"
        >
          결과 공유하기 📱
        </button> */}
      </div>
    </Card>
  );
}

export default function ResultPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-pink-50 to-blue-50">
      <Suspense fallback={
        <Card className="max-w-md w-full p-3 sm:p-8 space-y-6 sm:space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              결과를 불러오는 중...
            </h1>
          </div>
        </Card>
      }>
        <ResultContent />
      </Suspense>
      <div className="text-sm text-gray-500 mt-4">
        본 테스트는 재미로 만들어진 테스트로 참고용으로 사용해주세요.
      </div>
    </main>
  );
} 