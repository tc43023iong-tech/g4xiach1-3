
export enum LessonType {
  TEA_HOUSE = 'TEA_HOUSE',
  SHOPPING_MALL = 'SHOPPING_MALL',
  FARM = 'FARM',
  CRAZY_MIX = 'CRAZY_MIX'
}

export interface VocabularyItem {
  word: string;
  pinyin: string;
  meaning: string;
  category: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GameState {
  score: number;
  completedLessons: LessonType[];
  currentLesson: LessonType | null;
}
