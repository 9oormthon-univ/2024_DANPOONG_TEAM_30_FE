import { Program } from '@/types/program.ts';

export interface SelfCheckResult {
  characterType: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  programs: Program[];
  results: { categoryTitle: string; score: number }[];
}

export interface QuestionType {
  answerType: boolean;
  category: string;
  questionId: string;
  question: string;
}
