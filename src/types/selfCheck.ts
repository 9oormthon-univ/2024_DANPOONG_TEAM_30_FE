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

export interface SelfCheckMain {
  characterType: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  results: { categoryTitle: string; score: number }[];
  badges: badge[];
}

export type badge =
  | 'EMPLOYMENT'
  | 'HEALTH'
  | 'RESIDENCE'
  | 'FINANCE'
  | 'EDUCATION';
