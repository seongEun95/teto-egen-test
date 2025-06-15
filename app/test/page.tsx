'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Suspense } from 'react';
import questions from '@/data/questions.json';

function TestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender') || 'm';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // 결과 계산
      const tetoCount = newAnswers.filter(a => a === 'teto').length;
      const result = tetoCount >= 5 ? `teto_${gender}` : `egen_${gender}`;
      router.push(`/result?type=${result}`);
    }
  };

  const progress = ((currentQuestion + 1) / questions.questions.length) * 100;
  const question = questions.questions[currentQuestion];

  const getQuestionEmoji = (questionId: number) => {
    const emojis = ['🤔', '💭', '✨', '💫', '🌟', '💝', '💖', '🎯', '🎨', '🎮'];
    return emojis[questionId % emojis.length];
  };

  return (
    <Card className="max-w-md w-full p-4 sm:p-8 space-y-6 sm:space-y-8">
      <div className="space-y-2 sm:space-y-3">
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
          <span>진행도 📊</span>
          <span>{currentQuestion + 1} / {questions.questions.length}</span>
        </div>
        <Progress value={progress} className="h-2 bg-neutral-200" />
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="text-center">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{getQuestionEmoji(currentQuestion)}</span>
          <h2 className="text-md sm:text-2xl font-bold text-gray-800">
            {question.question}
          </h2>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer.type)}
            className="w-full p-3 sm:p-4 text-left rounded-lg border-2 border-transparent hover:border-pink-400 bg-white shadow-sm hover:shadow transition-all duration-200 text-sm sm:text-base"
          >
            {answer.text}
          </button>
        ))}
      </div>
    </Card>
  );
}

export default function TestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-pink-50 to-blue-50">
      <Suspense fallback={
        <Card className="max-w-md w-full p-4 sm:p-8 space-y-6 sm:space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              테스트를 불러오는 중...
            </h1>
          </div>
        </Card>
      }>
        <TestContent />
      </Suspense>
    </main>
  );
} 