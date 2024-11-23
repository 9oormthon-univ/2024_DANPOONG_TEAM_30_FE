export type ChatBotFirstResponse = string[];

export interface ChatBotSecondResponse {
  id: number;
  question: string;
  answer: string;
  depth: number;
  questionType: string;
}
