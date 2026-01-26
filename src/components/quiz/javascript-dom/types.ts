export interface JavaScriptDOMTestCase {
  type: 'dom-check' | 'event-simulation' | 'function-call';
  description: string;
  
  // For dom-check
  selector?: string;
  property?: string;  // 'textContent', 'style.display', 'classList.contains', etc.
  expected?: any;
  
  // For event-simulation
  event?: {
    type: 'click' | 'input' | 'change' | 'submit' | 'focus' | 'blur';
    selector: string;
    value?: string;
    delay?: number;  // ms to wait after event
    // Optional: set input values before triggering the event (useful for form submissions)
    setInputs?: Array<{
      selector: string;
      value: string;
    }>;
  };
  thenCheck?: {
    selector: string;
    property: string;
    expected: any;
  };
  
  // For function-call
  functionName?: string;
  args?: any[];
  expected?: any;
}

export interface JavaScriptDOMQuestion {
  id: string;
  question: string;
  type: 'javascript-dom';
  htmlTemplate?: string;
  cssTemplate?: string;
  codeTemplate?: string;
  testCases: JavaScriptDOMTestCase[];
  explanation?: string;
}

export interface TestResult {
  passed: boolean;
  description: string;
  expected?: any;
  actual?: any;
  error?: string;
}

export interface TestResults {
  allPassed: boolean;
  results: TestResult[];
  executionError?: string;
}
