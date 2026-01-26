// Import for type guard
import { JavaScriptDOMQuestion } from './javascript-dom/types';

export interface QuizQuestion {
  id: string;
  question: string;
  options?: string[];  // Optional (not needed for JS/DOM questions)
  type?: 'multiple-choice' | 'select-all' | 'javascript-dom';
  correct?: number | number[];  // Optional (not needed for JS/DOM questions)
  explanation?: string;
  
  // Fields for JavaScript DOM questions
  htmlTemplate?: string;
  cssTemplate?: string;
  codeTemplate?: string;
  testCases?: any[];  // Will be typed as JavaScriptDOMTestCase when type is 'javascript-dom'
}

// Type guard helper
export function isJavaScriptDOMQuestion(question: QuizQuestion): question is JavaScriptDOMQuestion {
  return question.type === 'javascript-dom';
}

export interface QuizData {
  quizName?: string;
  questions: QuizQuestion[];
}

export interface QuizState {
  selectedAnswers: { 
    [questionId: string]: string | string[] | { 
      html: string; 
      css: string; 
      js: string; 
      testResults?: any;
    } 
  }; // Store option text for multiple-choice, or code for JS/DOM questions
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
