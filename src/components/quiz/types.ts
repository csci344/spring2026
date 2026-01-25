export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  type?: 'multiple-choice' | 'select-all';
  correct: number | number[];
  explanation?: string;
}

export interface QuizData {
  quizName?: string;
  questions: QuizQuestion[];
}

export interface QuizState {
  selectedAnswers: { [questionId: string]: string | string[] }; // Store option text instead of index (string for single-select, string[] for multi-select)
  score: number;
  completed: boolean;
  timestamp: number;
  randomMode?: boolean; // Store the random mode state when saving
}

export interface ResourceQuizProps {
  quizData: QuizData;
  resourceSlug: string;
  variant?: 'mobile' | 'desktop';
}
