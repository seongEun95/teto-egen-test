export const translations = {
  ko: {
    title: '테토-에겐 테스트',
    description: '당신은 테토? 에겐? 재미있는 성격 유형 테스트로 알아보세요! 🎮',
    selectGender: '성별을 선택해주세요 👇',
    male: '남자',
    female: '여자',
    startTest: '테스트 시작하기 🚀',
    timeRequired: '소요 시간: 약 3분 ⏰',
    switchToKo: '한국어',
    switchToEn: 'English',
    // Test page
    progress: '진행도 📊',
    loading: '테스트를 불러오는 중...',
    // Result page
    yourTypeIs: '당신의 유형은... ✨',
    characteristics: '✨ 특징',
    retryTest: '다시 테스트하기 🔄',
    copyLink: '링크 복사하기 📋',
    linkCopied: '링크가 복사되었습니다! 📋',
    loadingResult: '결과를 불러오는 중...',
    disclaimer: '본 테스트는 재미로 만들어진 테스트로 참고용으로 사용해주세요.',
    tetoRatio: '테토 성향',
    egenRatio: '에겐 성향'
  },
  en: {
    title: 'Teto-Egen Test',
    description: 'Are you Teto? Or Egen? Find out with this fun personality test! 🎮',
    selectGender: 'Please select your gender 👇',
    male: 'Male',
    female: 'Female',
    startTest: 'Start Test 🚀',
    timeRequired: 'Time required: about 3 minutes ⏰',
    switchToKo: '한국어',
    switchToEn: 'English',
    // Test page
    progress: 'Progress 📊',
    loading: 'Loading test...',
    // Result page
    yourTypeIs: 'Your type is... ✨',
    characteristics: '✨ Characteristics',
    retryTest: 'Try Again 🔄',
    copyLink: 'Copy Link 📋',
    linkCopied: 'Link copied! 📋',
    loadingResult: 'Loading result...',
    disclaimer: 'This test is created for entertainment purposes only. Please use it as a reference.',
    tetoRatio: 'Teto Tendency',
    egenRatio: 'Egen Tendency'
  }
} as const;

export const questionTranslations = {
  ko: [
    {
      question: "새로운 사람을 만났을 때 나는...",
      answers: ["먼저 다가가서 말을 건다", "상대방이 먼저 말을 걸어주길 기다린다"]
    },
    {
      question: "친구와 이야기할 때 나는...",
      answers: ["감정을 적극적으로 표현하며 이야기한다", "차분하게 이야기를 나눈다"]
    },
    {
      question: "새로운 도전을 할 때 나는...",
      answers: ["일단 시작하고 생각한다", "신중하게 계획을 세우고 시작한다"]
    },
    {
      question: "스트레스 받을 때 나는...",
      answers: ["친구들과 만나서 수다를 떨며 푼다", "혼자만의 시간을 가지며 정리한다"]
    },
    {
      question: "주말에 나는...",
      answers: ["친구들과 약속을 잡아서 놀러 간다", "집에서 조용히 휴식을 취한다"]
    },
    {
      question: "일할 때 나는...",
      answers: ["여러 가지 일을 동시에 진행한다", "한 가지 일에 집중한다"]
    },
    {
      question: "의견 충돌이 있을 때 나는...",
      answers: ["감정적으로 대응할 때가 있다", "이성적으로 해결하려고 노력한다"]
    },
    {
      question: "새로운 환경에 적응할 때 나는...",
      answers: ["빠르게 적응하고 즐긴다", "천천히 살펴보며 적응한다"]
    },
    {
      question: "결정을 내릴 때 나는...",
      answers: ["직감을 믿고 결정한다", "논리적으로 분석하고 결정한다"]
    },
    {
      question: "나의 에너지는...",
      answers: ["다른 사람들과 함께 있을 때 충전된다", "혼자만의 시간을 가질 때 충전된다"]
    }
  ],
  en: [
    {
      question: "When meeting new people, I...",
      answers: ["Approach and start conversations first", "Wait for others to approach me"]
    },
    {
      question: "When talking with friends, I...",
      answers: ["Express emotions actively", "Have calm conversations"]
    },
    {
      question: "When facing new challenges, I...",
      answers: ["Start first, think later", "Plan carefully before starting"]
    },
    {
      question: "When stressed, I...",
      answers: ["Meet friends and chat to relieve stress", "Take time alone to process"]
    },
    {
      question: "On weekends, I...",
      answers: ["Make plans to hang out with friends", "Rest quietly at home"]
    },
    {
      question: "When working, I...",
      answers: ["Handle multiple tasks simultaneously", "Focus on one task at a time"]
    },
    {
      question: "When there's a conflict, I...",
      answers: ["Sometimes respond emotionally", "Try to resolve it logically"]
    },
    {
      question: "When adapting to new environments, I...",
      answers: ["Adapt quickly and enjoy", "Take time to observe and adjust"]
    },
    {
      question: "When making decisions, I...",
      answers: ["Trust my intuition", "Analyze logically"]
    },
    {
      question: "My energy is recharged when...",
      answers: ["I'm with other people", "I have time alone"]
    }
  ]
} as const;

export const resultTranslations = {
  ko: {
    teto_m: {
      title: "테토남",
      description: "활발하고 사교적인 성격으로, 새로운 사람들과 쉽게 어울리며 에너지가 넘치는 남성입니다. 감정 표현이 풍부하고 즉흥적인 결정을 잘하며, 다양한 활동을 즐기는 것을 좋아합니다.",
      characteristics: [
        "적극적이고 활발한 성격",
        "감정 표현이 자유로움",
        "사교성이 좋고 친화력이 높음",
        "즉흥적이고 모험을 즐김",
        "다양한 활동에 참여하기를 좋아함"
      ]
    },
    teto_f: {
      title: "테토녀",
      description: "밝고 활기찬 성격으로, 주변 사람들과 잘 어울리며 긍정적인 에너지를 전파하는 여성입니다. 감정 표현이 자연스럽고 사교적인 활동을 즐기며, 새로운 경험을 추구합니다.",
      characteristics: [
        "밝고 긍정적인 성격",
        "자유로운 감정 표현",
        "높은 사교성과 친화력",
        "활동적이고 즐거움을 추구",
        "새로운 경험에 대한 호기심"
      ]
    },
    egen_m: {
      title: "에겐남",
      description: "차분하고 신중한 성격으로, 깊이 있는 사고와 논리적인 판단을 하는 남성입니다. 혼자만의 시간을 중요하게 여기며, 계획적이고 체계적인 접근을 선호합니다.",
      characteristics: [
        "차분하고 신중한 성격",
        "논리적이고 분석적인 사고",
        "독립적인 성향",
        "계획적이고 체계적인 행동",
        "깊이 있는 대화를 선호"
      ]
    },
    egen_f: {
      title: "에겐녀",
      description: "조용하고 섬세한 성격으로, 신중하게 생각하고 행동하는 여성입니다. 깊이 있는 관계를 중요시하며, 자신만의 페이스를 유지하는 것을 좋아합니다.",
      characteristics: [
        "조용하고 섬세한 성격",
        "신중하고 깊이 있는 사고",
        "차분한 에너지",
        "개인적인 공간을 중시",
        "깊이 있는 관계 형성"
      ]
    }
  },
  en: {
    teto_m: {
      title: "Teto Male",
      description: "An outgoing and sociable personality who easily mingles with new people and has abundant energy. He expresses emotions freely, makes spontaneous decisions, and enjoys various activities.",
      characteristics: [
        "Active and energetic personality",
        "Free emotional expression",
        "High sociability and friendliness",
        "Spontaneous and adventure-loving",
        "Enjoys participating in various activities"
      ]
    },
    teto_f: {
      title: "Teto Female",
      description: "A bright and energetic personality who gets along well with others and spreads positive energy. She expresses emotions naturally, enjoys social activities, and seeks new experiences.",
      characteristics: [
        "Bright and positive personality",
        "Natural emotional expression",
        "High sociability and friendliness",
        "Active and pleasure-seeking",
        "Curious about new experiences"
      ]
    },
    egen_m: {
      title: "Egen Male",
      description: "A calm and careful personality who makes deep thoughts and logical judgments. He values alone time and prefers a planned and systematic approach.",
      characteristics: [
        "Calm and careful personality",
        "Logical and analytical thinking",
        "Independent nature",
        "Planned and systematic behavior",
        "Prefers deep conversations"
      ]
    },
    egen_f: {
      title: "Egen Female",
      description: "A quiet and delicate personality who thinks and acts carefully. She values deep relationships and likes to maintain her own pace.",
      characteristics: [
        "Quiet and delicate personality",
        "Careful and deep thinking",
        "Calm energy",
        "Values personal space",
        "Forms deep relationships"
      ]
    }
  }
} as const; 