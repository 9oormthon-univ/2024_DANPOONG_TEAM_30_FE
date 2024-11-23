import { Program } from '@/types/program.ts';

export interface SelfCheckResult {
  characterType: 'one' | 'two' | 'three' | 'four' | 'five';
  programs: Program[];
  results: { categoryTitle: string; score: number }[];
}
