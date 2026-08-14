export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: number;
  step: number;
  stepTitle: string;
  text: string;
  category: CategoryName;
  factor: string;
  weight: number;
  options: [string, number][];
}

export type CategoryName = 
  | 'Personal Characteristics'
  | 'Entrepreneurial Drive'
  | 'Communication Skills'
  | 'Career Compatibility'
  | 'Business Experience'
  | 'Business Knowledge';

export const CATEGORY_WEIGHTS: Record<CategoryName, number> = {
  'Personal Characteristics': 0.25,
  'Entrepreneurial Drive': 0.20,
  'Communication Skills': 0.20,
  'Career Compatibility': 0.15,
  'Business Experience': 0.10,
  'Business Knowledge': 0.10,
};

export const QUESTIONS: Question[] = [
  {
   id: 1,
   step: 1,
   stepTitle: "Your Professional Background",
   text: "Which of the following best describes your primary professional background?",
   category: "Business Experience",
   factor: "Professional Background",
   weight: 2.0,
   options: [
    ["Former Business Owner", 5],
    ["Commercial Real Estate Broker", 5],
    ["Corporate Executive", 4],
    ["Residential Real Estate Agent", 3],
    ["Business Consultant", 5],
    ["Business Development", 4],
    ["Business Coach", 5],
    ["CPA / Accountant", 5],
    ["Attorney", 4],
    ["Banker", 4],
    ["Sales Professional", 3],
    ["Other", 2]
   ]
  },
  {
   id: 2,
   step: 1,
   stepTitle: "Your Professional Background",
   text: "How many years have you worked in your profession?",
   category: "Business Experience",
   factor: "Professional Maturity",
   weight: 1.0,
   options: [
    ["Less than 3", 2],
    ["3–10", 3],
    ["11–20", 4],
    ["More than 20", 5]
   ]
  },
  {
   id: 3,
   step: 1,
   stepTitle: "Your Professional Background",
   text: "Have you ever owned all or part of a business?",
   category: "Business Experience",
   factor: "Business Ownership",
   weight: 3.0,
   options: [
    ["Yes", 5],
    ["No", 2]
   ]
  },
  {
   id: 4,
   step: 1,
   stepTitle: "Your Professional Background",
   text: "Have you ever managed employees?",
   category: "Business Experience",
   factor: "Management Experience",
   weight: 2.0,
   options: [
    ["Yes", 5],
    ["No", 2]
   ]
  },
  {
   id: 5,
   step: 1,
   stepTitle: "Your Professional Background",
   text: "Have you ever been responsible for a company budget or P&L?",
   category: "Business Experience",
   factor: "Financial Responsibility",
   weight: 3.0,
   options: [
    ["Yes", 5],
    ["No", 2]
   ]
  },
  {
   id: 6,
   step: 1,
   stepTitle: "Your Professional Background",
   text: "How comfortable are you reading financial statements?",
   category: "Business Knowledge",
   factor: "Financial Statement Comfort",
   weight: 4.0,
   options: [
    ["Not Comfortable At All", 1],
    ["Slightly Comfortable", 2],
    ["Moderately Comfortable", 3],
    ["Very Comfortable", 4],
    ["Extremely Comfortable", 5]
   ]
  },
  {
   id: 7,
   step: 1,
   stepTitle: "Your Professional Background",
   text: "Have you ever negotiated contracts?",
   category: "Communication Skills",
   factor: "Negotiation Experience",
   weight: 3.0,
   options: [
    ["No Experience At All", 1],
    ["Very Little Experience", 2],
    ["Some Experience", 3],
    ["Experienced", 4],
    ["Very Experienced", 5]
   ]
  },
  {
   id: 8,
   step: 2,
   stepTitle: "Business Knowledge",
   text: "How would you rate your understanding of basic financial statements?",
   category: "Business Knowledge",
   factor: "Financial Statement Knowledge",
   weight: 4.0,
   options: [
    ["Little or None", 1],
    ["Limited", 2],
    ["Moderate", 3],
    ["Strong", 4],
    ["Expert", 5]
   ]
  },
  {
   id: 9,
   step: 2,
   stepTitle: "Business Knowledge",
   text: "How familiar are you with business valuation?",
   category: "Business Knowledge",
   factor: "Business Valuation Awareness",
   weight: 4.0,
   options: [
    ["Not Familiar", 1],
    ["Slightly Familiar", 2],
    ["Moderately Familiar", 3],
    ["Very Familiar", 4],
    ["Extremely Familiar", 5]
   ]
  },
  {
   id: 10,
   step: 2,
   stepTitle: "Business Knowledge",
   text: "How would you rate your understanding of marketing and lead generation?",
   category: "Business Knowledge",
   factor: "Marketing & Lead Generation Knowledge",
   weight: 3.0,
   options: [
    ["Little or None", 1],
    ["Limited", 2],
    ["Moderate", 3],
    ["Strong", 4],
    ["Expert", 5]
   ]
  },
  {
   id: 11,
   step: 2,
   stepTitle: "Business Knowledge",
   text: "How familiar are you with sales and negotiation strategies?",
   category: "Business Knowledge",
   factor: "Sales & Negotiation Knowledge",
   weight: 4.0,
   options: [
    ["Not Familiar", 1],
    ["Slightly Familiar", 2],
    ["Moderately Familiar", 3],
    ["Very Familiar", 4],
    ["Extremely Familiar", 5]
   ]
  },
  {
   id: 12,
   step: 2,
   stepTitle: "Business Knowledge",
   text: "How would you rate your understanding of contracts and legal documents in business transactions?",
   category: "Business Knowledge",
   factor: "Contract / Legal Document Knowledge",
   weight: 3.0,
   options: [
    ["Little or None", 1],
    ["Limited", 2],
    ["Moderate", 3],
    ["Strong", 4],
    ["Expert", 5]
   ]
  },
  {
   id: 13,
   step: 2,
   stepTitle: "Business Knowledge",
   text: "How confident are you in your ability to analyze a business opportunity?",
   category: "Business Knowledge",
   factor: "Opportunity Analysis",
   weight: 5.0,
   options: [
    ["Not Confident", 1],
    ["Slightly Confident", 2],
    ["Moderately Confident", 3],
    ["Very Confident", 4],
    ["Extremely Confident", 5]
   ]
  },
  {
   id: 14,
   step: 2,
   stepTitle: "Business Knowledge",
   text: "How would you rate your overall business knowledge?",
   category: "Business Knowledge",
   factor: "Overall Business Knowledge",
   weight: 3.0,
   options: [
    ["Very Low", 1],
    ["Below Average", 2],
    ["Average", 3],
    ["Above Average", 4],
    ["Excellent", 5]
   ]
  },
  {
   id: 15,
   step: 3,
   stepTitle: "Personal Characteristics",
   text: "How would you describe your motivation for choosing a career as a business broker?",
   category: "Personal Characteristics",
   factor: "Career Motivation",
   weight: 5.0,
   options: [
    ["Not Motivated", 1],
    ["Slightly Motivated", 2],
    ["Moderately Motivated", 3],
    ["Very Motivated", 4],
    ["Extremely Motivated", 5]
   ]
  },
  {
   id: 16,
   step: 3,
   stepTitle: "Personal Characteristics",
   text: "How do you handle pressure and tight deadlines?",
   category: "Personal Characteristics",
   factor: "Pressure Handling",
   weight: 5.0,
   options: [
    ["Poorly", 1],
    ["Fairly Well", 2],
    ["Well", 3],
    ["Very Well", 4],
    ["Excellent", 5]
   ]
  },
  {
   id: 17,
   step: 3,
   stepTitle: "Personal Characteristics",
   text: "How would you describe your ability to build and maintain relationships?",
   category: "Communication Skills",
   factor: "Relationship Building",
   weight: 5.0,
   options: [
    ["Poor", 1],
    ["Fair", 2],
    ["Good", 3],
    ["Very Good", 4],
    ["Excellent", 5]
   ]
  },
  {
   id: 18,
   step: 3,
   stepTitle: "Personal Characteristics",
   text: "How comfortable are you communicating with people you don't know?",
   category: "Communication Skills",
   factor: "Communication Confidence",
   weight: 5.0,
   options: [
    ["Uncomfortable", 1],
    ["Slightly Comfortable", 2],
    ["Moderately Comfortable", 3],
    ["Very Comfortable", 4],
    ["Extremely Comfortable", 5]
   ]
  },
  {
   id: 19,
   step: 3,
   stepTitle: "Personal Characteristics",
   text: "How would others describe your listening skills?",
   category: "Communication Skills",
   factor: "Listening Skills",
   weight: 5.0,
   options: [
    ["Poor", 1],
    ["Fair", 2],
    ["Good", 3],
    ["Very Good", 4],
    ["Excellent", 5]
   ]
  },
  {
   id: 20,
   step: 3,
   stepTitle: "Personal Characteristics",
   text: "How do you typically respond to challenges?",
   category: "Personal Characteristics",
   factor: "Challenge Response",
   weight: 5.0,
   options: [
    ["Avoid Them", 1],
    ["Face Them", 2],
    ["Embrace Them", 3],
    ["Seek Them Out", 4],
    ["Thrive On Them", 5]
   ]
  },
  {
   id: 21,
   step: 3,
   stepTitle: "Personal Characteristics",
   text: "How would you describe your adaptability to change?",
   category: "Personal Characteristics",
   factor: "Adaptability",
   weight: 4.0,
   options: [
    ["Resistant to Change", 1],
    ["Slow to Adapt", 2],
    ["Moderately Adaptive", 3],
    ["Very Adaptive", 4],
    ["Highly Adaptive", 5]
   ]
  },
  {
   id: 22,
   step: 4,
   stepTitle: "Work Style Preferences",
   text: "How important is financial reward in your career decision?",
   category: "Entrepreneurial Drive",
   factor: "Financial Motivation",
   weight: 4.0,
   options: [
    ["Not Important", 1],
    ["Slightly Important", 2],
    ["Moderately Important", 3],
    ["Very Important", 4],
    ["Extremely Important", 5]
   ]
  },
  {
   id: 23,
   step: 4,
   stepTitle: "Work Style Preferences",
   text: "How do you prefer to structure your workday?",
   category: "Career Compatibility",
   factor: "Schedule Structure Preference",
   weight: 3.0,
   options: [
    ["Highly Structured", 1],
    ["Somewhat Structured", 2],
    ["Moderately Flexible", 3],
    ["Very Flexible", 4],
    ["Completely Flexible", 5]
   ]
  },
  {
   id: 24,
   step: 4,
   stepTitle: "Work Style Preferences",
   text: "How important is it for you to be your own boss?",
   category: "Entrepreneurial Drive",
   factor: "Autonomy Preference",
   weight: 5.0,
   options: [
    ["Not Important", 1],
    ["Slightly Important", 2],
    ["Moderately Important", 3],
    ["Very Important", 4],
    ["Extremely Important", 5]
   ]
  },
  {
   id: 25,
   step: 4,
   stepTitle: "Work Style Preferences",
   text: "How comfortable are you with working independently?",
   category: "Entrepreneurial Drive",
   factor: "Independent Work Comfort",
   weight: 5.0,
   options: [
    ["Not Comfortable", 1],
    ["Slightly Comfortable", 2],
    ["Moderately Comfortable", 3],
    ["Very Comfortable", 4],
    ["Extremely Comfortable", 5]
   ]
  },
  {
   id: 26,
   step: 4,
   stepTitle: "Work Style Preferences",
   text: "How important is it to have a positive impact on other people?",
   category: "Personal Characteristics",
   factor: "Service Orientation",
   weight: 4.0,
   options: [
    ["Not Important", 1],
    ["Slightly Important", 2],
    ["Moderately Important", 3],
    ["Very Important", 4],
    ["Extremely Important", 5]
   ]
  },
  {
   id: 27,
   step: 4,
   stepTitle: "Work Style Preferences",
   text: "How do you feel about networking and meeting new people?",
   category: "Communication Skills",
   factor: "Networking Orientation",
   weight: 5.0,
   options: [
    ["Dislike It", 1],
    ["Not a Fan", 2],
    ["Neutral", 3],
    ["Enjoy It", 4],
    ["Love It", 5]
   ]
  },
  {
   id: 28,
   step: 4,
   stepTitle: "Work Style Preferences",
   text: "How do you prefer solving problems?",
   category: "Business Knowledge",
   factor: "Problem-Solving Style",
   weight: 4.0,
   options: [
    ["Follow Proven Methods", 3],
    ["Use a Combination of Methods", 4],
    ["Analyze and Plan Carefully", 5],
    ["Think Creatively and Innovate", 5],
    ["Think Outside the Box", 5]
   ]
  },
  {
   id: 29,
   step: 5,
   stepTitle: "Entrepreneurial Drive",
   text: "I prefer controlling my own income.",
   category: "Entrepreneurial Drive",
   factor: "Income Control",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 30,
   step: 5,
   stepTitle: "Entrepreneurial Drive",
   text: "I enjoy working independently.",
   category: "Entrepreneurial Drive",
   factor: "Independence",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 31,
   step: 5,
   stepTitle: "Entrepreneurial Drive",
   text: "I am self-motivated.",
   category: "Entrepreneurial Drive",
   factor: "Self-Motivation",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 32,
   step: 5,
   stepTitle: "Entrepreneurial Drive",
   text: "I set ambitious goals for myself.",
   category: "Entrepreneurial Drive",
   factor: "Goal Orientation",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 33,
   step: 5,
   stepTitle: "Entrepreneurial Drive",
   text: "I enjoy building something of my own.",
   category: "Entrepreneurial Drive",
   factor: "Builder Mindset",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 34,
   step: 5,
   stepTitle: "Entrepreneurial Drive",
   text: "I don't need someone supervising me.",
   category: "Entrepreneurial Drive",
   factor: "Self-Management",
   weight: 4.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 35,
   step: 5,
   stepTitle: "Entrepreneurial Drive",
   text: "I enjoy taking initiative and creating opportunities.",
   category: "Entrepreneurial Drive",
   factor: "Initiative",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 36,
   step: 6,
   stepTitle: "Career Compatibility",
   text: "I am excited about the idea of a career in business brokerage.",
   category: "Career Compatibility",
   factor: "Career Excitement",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 37,
   step: 6,
   stepTitle: "Career Compatibility",
   text: "I can see myself succeeding as a business broker.",
   category: "Career Compatibility",
   factor: "Career Confidence",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 38,
   step: 6,
   stepTitle: "Career Compatibility",
   text: "The skills and qualities required for this career match me well.",
   category: "Career Compatibility",
   factor: "Personal Fit",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 39,
   step: 6,
   stepTitle: "Career Compatibility",
   text: "I am willing to invest the time and effort to build a new career.",
   category: "Entrepreneurial Drive",
   factor: "Commitment to Development",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 40,
   step: 6,
   stepTitle: "Career Compatibility",
   text: "I am comfortable with a career that involves variable income.",
   category: "Career Compatibility",
   factor: "Variable Income Comfort",
   weight: 4.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 41,
   step: 6,
   stepTitle: "Career Compatibility",
   text: "I want a career that offers freedom and flexibility.",
   category: "Career Compatibility",
   factor: "Freedom and Flexibility",
   weight: 4.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  },
  {
   id: 42,
   step: 6,
   stepTitle: "Career Compatibility",
   text: "I am committed to helping business owners achieve their goals.",
   category: "Personal Characteristics",
   factor: "Service Orientation",
   weight: 5.0,
   options: [
    ["Strongly Disagree", 1],
    ["Disagree", 2],
    ["Neutral", 3],
    ["Agree", 4],
    ["Strongly Agree", 5]
   ]
  }
];

export interface StepInfo {
  step: number;
  title: string;
}

export const STEP_TITLES: Record<number, string> = {
  1: "Your Professional Background",
  2: "Business Knowledge",
  3: "Personal Characteristics",
  4: "Work Style Preferences",
  5: "Entrepreneurial Drive",
  6: "Career Compatibility"
};
