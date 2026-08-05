import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Printer, 
  Download, 
  Mail, 
  ShieldCheck,
  Handshake,
  Trophy,
  BarChart3, 
  Clock, 
  Award, 
  Target, 
  Sparkles, 
  BookOpen, 
  Briefcase, 
  Users, 
  BrainCircuit, 
  TrendingUp, 
  HelpCircle,
  FileText,
  User,
  ChevronRight,
  AlertCircle,
  Check
} from 'lucide-react';
import logoImg from './images2/BeABusinessBrokerLogo.png';
import lenKrickPhoto from "./images/LenKrick'sPhoto.jpg";
import lenKrickCloseHeadShot from "./images7/LenKrick'sCloseInHeadShot.jpg";
import dgfgdsLogo from "./images7/dgfgds.png";
import gsegfgsLogo from "./images7/gsegfgs.png";
import { QUESTIONS, STEP_TITLES, CategoryName } from './assessmentData';
import { calculateAssessmentResults, CalculatedResults } from './assessmentUtils';

import { PageKey } from './App';
import Navbar from './Navbar';

interface AssessmentPageProps {
  onNavigate?: (page: PageKey) => void;
}

export default function AssessmentPage({ onNavigate }: AssessmentPageProps) {
  // Navigation & Screen State
  // screen 1 = Landing, 2-7 = Steps 1-6, 8 = Contact Capture, 9 = Processing, 10 = Report
  const [screen, setScreen] = useState<number>(1);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Answers State: map questionId -> optionValue (1..5) - default empty so options are deselected on refresh
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});

  // Validation Error State for assessment steps
  const [stepError, setStepError] = useState<string | null>(null);
  const [unansweredIds, setUnansweredIds] = useState<number[]>([]);

  // Screen 8 Lead Capture State
  const [lead, setLead] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    marketingOptIn: false
  });
  const [leadError, setLeadError] = useState<string | null>(null);

  // Screen 9 Processing Message State
  const [processingMsgIdx, setProcessingMsgIdx] = useState(0);

  // Assessment Results (calculated on Step 6 submit)
  const [results, setResults] = useState<CalculatedResults | null>(() => {
    const saved = localStorage.getItem('bbca_results');
    return saved ? JSON.parse(saved) : null;
  });

  // Unique Assessment Meta
  const [assessmentMeta, setAssessmentMeta] = useState(() => {
    const saved = localStorage.getItem('bbca_meta');
    if (saved) return JSON.parse(saved);

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const yearStr = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const randDigits = Math.floor(1000 + Math.random() * 9000);
    const idStr = `BBA-${yearStr}-${mm}${dd}-${randDigits}`;

    return { dateStr, idStr };
  });

  // Clear any saved answers from localStorage on mount so options are always deselected on refresh
  useEffect(() => {
    localStorage.removeItem('bbca_answers');
  }, []);

  useEffect(() => {
    if (results) {
      localStorage.setItem('bbca_results', JSON.stringify(results));
    }
  }, [results]);

  useEffect(() => {
    localStorage.setItem('bbca_meta', JSON.stringify(assessmentMeta));
  }, [assessmentMeta]);

  // Screen 9 Processing timer animation
  useEffect(() => {
    if (screen === 9) {
      const messages = [
        "Preparing your personalized report",
        "Calculating your Career Match Score",
        "Identifying your greatest strengths",
        "Comparing your responses with the Business Broker Competency Model™",
        "Preparing Len Krick's recommendations"
      ];
      setProcessingMsgIdx(0);

      const interval = setInterval(() => {
        setProcessingMsgIdx(prev => (prev + 1) % messages.length);
      }, 700);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        setScreen(10);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 3200);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [screen]);

  // Handle Option Select
  const handleSelectOption = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setUnansweredIds(prev => prev.filter(id => id !== questionId));
    if (stepError) setStepError(null);
  };

  const handleOptionClick = (questionId: number, optionIdx: number, value: number) => {
    setSelectedOptions(prev => ({ ...prev, [questionId]: optionIdx }));
    handleSelectOption(questionId, value);
  };

  // Step Navigation Handlers
  const handleNextStep = () => {
    const currentStep = screen - 1; // screen 2 = step 1, screen 7 = step 6
    const currentQuestions = QUESTIONS.filter(q => q.step === currentStep);
    const missing = currentQuestions.filter(q => !answers[q.id]);

    if (missing.length > 0) {
      const missingIds = missing.map(q => q.id);
      setUnansweredIds(missingIds);
      setStepError("Please answer every question on this page before continuing. Your earlier answers are saved.");
      
      // Scroll to first unanswered
      const firstEl = document.getElementById(`question-card-${missingIds[0]}`);
      if (firstEl) {
        firstEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setStepError(null);
    setUnansweredIds([]);

    if (screen === 7) {
      // Step 6 completed: Calculate results now before contact screen
      const calculated = calculateAssessmentResults(answers);
      setResults(calculated);
      setScreen(8); // Go to Report Ready / Contact screen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setScreen(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setStepError(null);
    setUnansweredIds([]);
    setScreen(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Contact Form Submit (Screen 8 -> 9)
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.firstName.trim() || !lead.lastName.trim() || !lead.email.trim() || !lead.email.includes('@')) {
      setLeadError("Please fill in your First Name, Last Name, and a valid Email Address to receive your report.");
      return;
    }
    setLeadError(null);
    setScreen(9); // Go to Processing
  };

  // Reset Assessment
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);

  const handleReset = () => {
    if (isConfirmingReset) {
      setAnswers({});
      setSelectedOptions({});
      setResults(null);
      setUnansweredIds([]);
      setStepError(null);
      setScreen(1);
      setIsConfirmingReset(false);
      localStorage.removeItem('bbca_answers');
      localStorage.removeItem('bbca_results');
    } else {
      setIsConfirmingReset(true);
      setTimeout(() => setIsConfirmingReset(false), 3000);
    }
  };

  // Navigation Bar for Landing Page and Report Page
  const renderNavbar = (activeItem: 'assessment' | 'home' | 'begin' | 'firms' | 'training' | 'about' | 'stories' = 'assessment') => (
    <nav className="w-full bg-white border-b border-gray-200 shadow-xs sticky top-0 z-50">
      <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 py-1 relative flex items-center justify-between gap-4">
        <button 
          onClick={() => onNavigate?.('home')} 
          className="relative z-20 -my-2 flex items-center shrink-0 cursor-pointer text-left"
        >
          <div className="relative h-14 md:h-20 lg:h-[130px] w-auto">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Be A Business Broker" 
              width="420"
              height="168"
              loading="eager"
              fetchPriority="high"
              className="h-14 md:h-20 lg:h-[130px] w-auto object-contain drop-shadow-md relative z-30 transition-none" 
              onError={(e) => { e.currentTarget.src = logoImg; }}
            />
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between flex-1 mx-4 xl:mx-8 gap-2 xl:gap-4">
          <button onClick={() => onNavigate?.('home')} className="uppercase text-[#0B1D3A] font-bold text-xs hover:text-[#FF4500] transition-colors py-1 cursor-pointer whitespace-nowrap">WHY BUSINESS BROKERAGE?</button>
          <button onClick={() => onNavigate?.('begin')} className="uppercase text-[#0B1D3A] font-bold text-xs hover:text-[#FF4500] transition-colors py-1 cursor-pointer whitespace-nowrap">HOW DO I BEGIN?</button>
          <button onClick={() => onNavigate?.('firms')} className="uppercase text-[#0B1D3A] font-bold text-xs hover:text-[#FF4500] transition-colors py-1 cursor-pointer whitespace-nowrap">FIRMS ARE LOOKING FOR YOU</button>
          <button onClick={() => setScreen(1)} className="uppercase text-[#FF4500] font-bold text-xs border-b-2 border-[#FF4500] py-1 cursor-pointer whitespace-nowrap">BUSINESS BROKERAGE ASSESSMENT</button>
          <button onClick={() => onNavigate?.('training')} className="uppercase text-[#0B1D3A] font-bold text-xs hover:text-[#FF4500] transition-colors py-1 cursor-pointer whitespace-nowrap">FASTSTART ONLINE TRAINING™</button>
          <button onClick={() => onNavigate?.('about')} className="uppercase text-[#0B1D3A] font-bold text-xs hover:text-[#FF4500] transition-colors py-1 cursor-pointer whitespace-nowrap">ABOUT LEN KRICK</button>
          <button onClick={() => onNavigate?.('stories')} className="uppercase text-[#0B1D3A] font-bold text-xs hover:text-[#FF4500] transition-colors py-1 cursor-pointer whitespace-nowrap">SUCCESS STORIES</button>
        </div>

        <div className="hidden lg:block shrink-0">
          <a 
            href="https://www.FastStart.Training" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF4500] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-md uppercase text-sm tracking-wide transition-colors shadow-xs cursor-pointer inline-block"
          >
            GET STARTED
          </a>
        </div>

        {/* Mobile Burger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="lg:hidden text-[#0B1D3A] text-2xl focus:outline-none p-2 cursor-pointer z-30"
          aria-label="Toggle mobile menu"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full z-50 left-0 top-full flex flex-col">
          <button onClick={() => { onNavigate?.('home'); setIsMobileMenuOpen(false); }} className="px-6 py-4 border-b border-gray-50 text-sm font-bold text-[#0B1D3A] text-left cursor-pointer">WHY BUSINESS BROKERAGE?</button>
          <button onClick={() => { onNavigate?.('begin'); setIsMobileMenuOpen(false); }} className="px-6 py-4 border-b border-gray-50 text-sm font-bold text-[#0B1D3A] text-left cursor-pointer">HOW DO I BEGIN?</button>
          <button onClick={() => { onNavigate?.('firms'); setIsMobileMenuOpen(false); }} className="px-6 py-4 border-b border-gray-50 text-sm font-bold text-[#0B1D3A] text-left cursor-pointer">FIRMS ARE LOOKING FOR YOU</button>
          <button onClick={() => { setScreen(1); setIsMobileMenuOpen(false); }} className="px-6 py-4 border-b border-gray-50 text-sm font-bold text-[#FF4500] text-left cursor-pointer">BUSINESS BROKERAGE ASSESSMENT</button>
          <button onClick={() => { onNavigate?.('training'); setIsMobileMenuOpen(false); }} className="px-6 py-4 border-b border-gray-50 text-sm font-bold text-[#0B1D3A] text-left cursor-pointer">FASTSTART ONLINE TRAINING™</button>
          <button onClick={() => { onNavigate?.('about'); setIsMobileMenuOpen(false); }} className="px-6 py-4 border-b border-gray-50 text-sm font-bold text-[#0B1D3A] text-left cursor-pointer">ABOUT LEN KRICK</button>
          <button onClick={() => { onNavigate?.('stories'); setIsMobileMenuOpen(false); }} className="px-6 py-4 border-b border-gray-50 text-sm font-bold text-[#0B1D3A] text-left cursor-pointer">SUCCESS STORIES</button>
          <div className="px-6 py-4">
            <a href="https://www.FastStart.Training" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#FF4500] text-white px-5 py-3 rounded-lg font-bold">GET STARTED</a>
          </div>
        </div>
      )}
    </nav>
  );

  // Global 4-column Footer
  const renderFooter = () => (
    <footer className="bg-[#0B1D3A] text-white pt-12 pb-8 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="space-y-4">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Be A Business Broker" 
            loading="lazy"
            className="h-12 w-auto object-contain brightness-0 invert"
            onError={(e) => { e.currentTarget.src = logoImg; }}
          />
          <p className="text-xs text-slate-300 leading-relaxed">
            BeABusinessBroker.Today is the premier launchpad and career training portal for aspiring business brokers, founded by IBBA Hall of Fame inductee Len Krick, MBA.
          </p>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} BeABusinessBroker.Today. All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
            Explore Portal
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li><button onClick={() => onNavigate?.('home')} className="hover:text-[#FF4500] transition-colors cursor-pointer">WHY BUSINESS BROKERAGE?</button></li>
            <li><button onClick={() => onNavigate?.('begin')} className="hover:text-[#FF4500] transition-colors cursor-pointer">HOW DO I BEGIN?</button></li>
            <li><button onClick={() => onNavigate?.('firms')} className="hover:text-[#FF4500] transition-colors cursor-pointer">FIRMS ARE LOOKING FOR YOU</button></li>
            <li><button onClick={() => onNavigate?.('stories')} className="hover:text-[#FF4500] transition-colors cursor-pointer">SUCCESS STORIES</button></li>
            <li><button onClick={() => onNavigate?.('about')} className="hover:text-[#FF4500] transition-colors cursor-pointer">ABOUT LEN KRICK</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
            Assessment & Training
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li><button onClick={() => setScreen(1)} className="text-[#FF4500] font-bold hover:underline cursor-pointer">Career Match Assessment™</button></li>
            <li><button onClick={() => onNavigate?.('training')} className="hover:text-[#FF4500] transition-colors cursor-pointer">FastStart Online Training™</button></li>
            <li><a href="https://www.FastStart.Training" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4500] transition-colors">PricePoint Valuation System™</a></li>
            <li><a href="https://www.FastStart.Training" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4500] transition-colors">Broker Competency Model™</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
            Start Your Career
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ready to build a high-earning, independent career in business brokerage? Enroll in FastStart Training today.
          </p>
          <a 
            href="https://www.FastStart.Training" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full text-center bg-[#FF4500] hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg uppercase text-xs tracking-wider transition-colors shadow-md"
          >
            ENROLL NOW →
          </a>
        </div>
      </div>
    </footer>
  );

  // ==========================================
  // RENDER SCREEN 1: LANDING PAGE
  // ==========================================
  if (screen === 1) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans w-full overflow-x-hidden max-w-full">
        
        {/* GLOBAL NAVBAR */}
        <Navbar currentPage="assessment" onNavigate={onNavigate} />

        <main className="w-full">
          {/* 2. HERO SECTION (SPLIT LAYOUT) */}
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center justify-between">
            
            {/* Left Column (Span 7) */}
            <div 
              className="lg:col-span-7 flex flex-col items-start text-left w-full relative z-10"
              style={{ marginLeft: '-29px', marginRight: '0px', paddingRight: '57px' }}
            >
              <img loading="lazy" src="src/images7/BusinessBrokerCareerMatchAssessmentLogo.png" 
                className="max-w-full mb-4 object-contain object-center mx-auto" 
                style={{ width: '706.296875px', height: '471.1875px', marginTop: '-100px', marginRight: '139.46875px' }}
                alt="Business Broker Career Match Assessment" 
              />
              <h1 className="text-[#0B1D3A] text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight text-left" style={{ marginTop: '-150px' }}>
                Is Business Brokerage the Right Career for You?
              </h1>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">
                Business brokerage is one of the most rewarding professions available — but it isn't for everyone.
              </p>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
                Successful business brokers possess a unique combination of business knowledge, communication skills, integrity, persistence, and entrepreneurial drive.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 mt-4 w-full">
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-xl mb-2 shadow-md"><i className="fa-solid fa-user"></i></div>
                  <h4 className="text-lg font-black text-[#0B1D3A]">25+ YEARS</h4>
                  <p className="text-[#1D4ED8] text-xs font-bold leading-tight mt-1">Business Brokerage<br/>Experience</p>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-xl mb-2 shadow-md"><i className="fa-solid fa-users"></i></div>
                  <h4 className="text-lg font-black text-[#0B1D3A]">400+ BROKERS</h4>
                  <p className="text-[#1D4ED8] text-xs font-bold leading-tight mt-1">Personally<br/>Trained</p>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-xl mb-2 shadow-md"><i className="fa-solid fa-handshake"></i></div>
                  <h4 className="text-lg font-black text-[#0B1D3A]">THOUSANDS</h4>
                  <p className="text-[#1D4ED8] text-xs font-bold leading-tight mt-1">of Successful<br/>Business Sales</p>
                </div>
                {/* Stat 4 */}
                <div className="flex flex-col items-center text-center bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-xl mb-2 shadow-md"><i className="fa-solid fa-chart-column"></i></div>
                  <h4 className="text-lg font-black text-[#0B1D3A]">2026 SURVEY</h4>
                  <p className="text-[#1D4ED8] text-xs font-bold leading-tight mt-1">Insights From<br/>Brokerage Offices<br/>Nationwide</p>
                </div>
              </div>

              <p className="text-gray-800 font-semibold text-base lg:text-lg mb-6">
                In just 5 minutes, discover how closely your background, personality, and interests match the characteristics of today's most successful brokers.
              </p>
              
              <div className="mt-4 flex flex-col items-center md:items-start w-full">
                <button 
                  onClick={() => { setScreen(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-[#FF4500] hover:bg-orange-600 transition text-white text-lg lg:text-xl font-bold px-10 py-4 rounded-full shadow-lg uppercase tracking-wide cursor-pointer"
                >
                  BEGIN MY ASSESSMENT <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
                <div className="flex items-center gap-2 mt-4 text-xs font-bold text-[#0B1D3A] md:pl-4" style={{ height: '37px', width: '314.65625px', fontSize: '17px' }}>
                  <i className="fa-solid fa-lock text-[#EAB308]"></i> 100% Confidential <span className="mx-1">•</span> No Registration Required
                </div>
              </div>
            </div>

            {/* Right Column (Span 5 - Len Krick Quote Card) */}
            <div 
              className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end min-h-[480px] lg:min-h-[580px] pt-4"
              style={{ height: '562px', marginLeft: '-77px', marginTop: '350px' }}
            >
              {/* Len Krick Headshot Image (Background Layer) */}
              <img loading="lazy" src={lenKrickCloseHeadShot} 
                onError={(e) => { e.currentTarget.src = "src/images7/LenKrick'sCloseInHeadShot.jpg"; }}
                alt="Len Krick" 
                className="absolute bottom-0 left-0 sm:left-4 lg:-left-6 w-[135%] sm:w-[117%] lg:w-[153%] max-w-[756px] object-contain object-bottom z-0 drop-shadow-xl pointer-events-none" 
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'destination-in',
                }}
              />

              {/* Navy Quote Card (Foreground Layer) */}
              <div 
                className="bg-[#0B1D3A] rounded-2xl p-8 lg:p-10 relative z-10 w-full max-w-[480px] shadow-2xl border border-slate-700/50 ml-auto"
                style={{
                  height: '600px',
                  marginLeft: '514px',
                  marginRight: '-100px',
                  paddingRight: '40px',
                  marginBottom: '38px',
                  paddingLeft: '40px',
                  marginTop: '-300px'
                }}
              >
                {/* Giant Top Quote */}
                <span className="text-[#EAB308] text-7xl lg:text-8xl font-serif absolute -top-8 left-4 leading-none select-none">“</span>

                <p className="text-white text-base lg:text-xl font-medium leading-relaxed relative z-10 mb-8 pt-4 pr-2" style={{ fontWeight: 'bold', fontSize: '17px' }}>
                  There has never been a better time to become a business broker. Take the assessment and see if you have what it takes to build a rewarding, flexible, and financially independent career.
                </p>

                {/* Giant Bottom Quote */}
                <span className="text-[#EAB308] text-7xl lg:text-8xl font-serif absolute -bottom-8 right-4 leading-none select-none">”</span>

                {/* Signature Block */}
                <div className="border-t border-slate-600/50 pt-6 relative z-10">
                  <h4 className="text-white font-black text-xl lg:text-2xl mb-2">— Len Krick, MBA</h4>
                  <p 
                    className="text-gray-300 text-xs md:text-sm leading-relaxed"
                    style={{ fontWeight: 'bold', fontSize: '16px' }}
                  >
                    IBBA Hall of Fame<br />
                    International Business Brokers Association (IBBA)<br />
                    Former IBBA Education Chairman
                  </p>
                </div>
              </div>
            </div>
            
          </div>

          {/* 3. HOW THE ASSESSMENT WORKS */}
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mt-16">
            <div className="flex items-center gap-4 mb-4 justify-between w-full">
              <div className="h-px bg-gray-300 flex-1 w-full"></div>
              <h2 className="text-[#0B1D3A] font-bold text-xl uppercase tracking-widest text-center whitespace-nowrap shrink-0" style={{ fontSize: '60px' }}>
                HOW THE ASSESSMENT WORKS
              </h2>
              <div className="h-px bg-gray-300 flex-1 w-full"></div>
            </div>
            <p className="text-center text-[#0B1D3A] font-medium text-base mb-12">
              Six key areas. 46 questions. Five minutes. Powerful insights.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mt-10">
              
              <div className="text-center flex flex-col items-center">
                <div 
                  className="rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md"
                  style={{ width: '80px', height: '80px' }}
                >
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2" style={{ fontSize: '17px' }}>1. Background</h3>
                <p className="text-gray-600 leading-relaxed max-w-[160px]" style={{ fontSize: '15px', fontWeight: 'bold' }}>Your experience and professional history</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div 
                  className="rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md"
                  style={{ width: '80px', height: '80px' }}
                >
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2" style={{ fontSize: '17px' }}>2. Knowledge</h3>
                <p className="text-gray-600 leading-relaxed max-w-[160px]" style={{ fontSize: '15px', fontWeight: 'bold' }}>Understanding of business concepts</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div 
                  className="rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md"
                  style={{ width: '80px', height: '80px' }}
                >
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2" style={{ fontSize: '17px' }}>3. Characteristics</h3>
                <p className="text-gray-600 leading-relaxed max-w-[160px]" style={{ fontSize: '15px', fontWeight: 'bold' }}>Integrity, work ethic, dependability</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div 
                  className="rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md"
                  style={{ width: '80px', height: '80px' }}
                >
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2" style={{ fontSize: '17px' }}>4. Communication</h3>
                <p className="text-gray-600 leading-relaxed max-w-[160px]" style={{ fontSize: '15px', fontWeight: 'bold' }}>Listening, influencing, negotiating</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div 
                  className="rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md"
                  style={{ width: '80px', height: '80px' }}
                >
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2" style={{ fontSize: '17px' }}>5. Drive</h3>
                <p className="text-gray-600 leading-relaxed max-w-[160px]" style={{ fontSize: '15px', fontWeight: 'bold' }}>Independence, initiative, motivation</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div 
                  className="rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md"
                  style={{ width: '80px', height: '80px' }}
                >
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2" style={{ fontSize: '17px' }}>6. Compatibility</h3>
                <p className="text-gray-600 leading-relaxed max-w-[160px]" style={{ fontSize: '15px', fontWeight: 'bold' }}>Your alignment with the lifestyle</p>
              </div>

            </div>
          </div>

          {/* 4. REPORT PREVIEW SECTION */}
          <div className="bg-white py-20 border-y border-gray-200 w-full">
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1D3A] text-center mb-12 uppercase px-4 sm:px-8 tracking-wide">
              WHAT YOU'LL GET: YOUR BUSINESS BROKER CAREER MATCH REPORT™
            </h2>
            <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 mb-16 items-stretch">
              
              {/* Left Card (Scores Preview) */}
              <div className="border-2 border-[#0B1D3A] rounded-2xl overflow-hidden shadow-xl bg-white relative flex flex-col">
                <div className="bg-[#0B1D3A] text-white px-6 py-2.5 font-bold text-xs uppercase inline-block rounded-br-2xl absolute top-0 left-0 z-10 shadow-sm">
                  EXAMPLE RESULTS
                </div>
                
                <div className="p-8 pt-20 flex-1 flex flex-col sm:flex-row items-center gap-10 justify-center">
                  {/* Donut mock */}
                  <div className="relative w-48 h-48 rounded-full border-[20px] border-[#15803D] border-t-gray-100 flex items-center justify-center shrink-0 shadow-inner">
                    <div className="text-center">
                      <div className="text-5xl font-black text-[#15803D]">89%</div>
                      <div className="text-[11px] font-bold text-[#0B1D3A] uppercase mt-1 tracking-wider">EXCELLENT MATCH</div>
                    </div>
                  </div>

                  {/* Bars mock */}
                  <div className="flex-1 w-full space-y-6">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#0B1D3A] mb-2 uppercase tracking-wide">
                        <span>ENTREPRENEURIAL DRIVE</span>
                        <span>94%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner"><div className="bg-[#15803D] w-[94%] h-full rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#0B1D3A] mb-2 uppercase tracking-wide">
                        <span>COMMUNICATION</span>
                        <span>88%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner"><div className="bg-[#15803D] w-[88%] h-full rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#0B1D3A] mb-2 uppercase tracking-wide">
                        <span>BACKGROUND</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner"><div className="bg-[#EAB308] w-[75%] h-full rounded-full"></div></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card (Strengths & Areas) */}
              <div className="border border-gray-200 rounded-2xl p-8 sm:p-10 bg-white shadow-xl flex flex-col justify-center space-y-10">
                
                {/* Strengths Section */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <img 
                    src={dgfgdsLogo} 
                    onError={(e) => { e.currentTarget.src = "src/images7/dgfgds.png"; }} 
                    alt="Strengths Logo" 
                    className="object-contain shrink-0" 
                    style={{ width: '90px', height: '90px', marginTop: '80px' }}
                  />
                  <div className="flex-1">
                    <h3 className="text-[#15803D] font-bold flex items-center gap-3 mb-5 text-sm uppercase tracking-wider">
                      YOUR GREATEST STRENGTHS
                    </h3>
                    <ul className="space-y-4 font-bold">
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                        <span className="font-bold">Exceptionally strong entrepreneurial drive and self-motivation.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                        <span className="font-bold">Natural ability to build rapport and trust quickly.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                        <span className="font-bold">High level of personal integrity and dependability.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                        <span className="font-bold">Strong financial comprehension and business acumen.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                        <span className="font-bold">Proven resilience in overcoming professional challenges.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Areas Section */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <img 
                    src={gsegfgsLogo} 
                    onError={(e) => { e.currentTarget.src = "src/images7/gsegfgs.png"; }} 
                    alt="Areas Logo" 
                    className="object-contain shrink-0" 
                    style={{ width: '90px', height: '90px', marginTop: '64px' }}
                  />
                  <div className="flex-1">
                    <h3 className="text-[#1D4ED8] font-bold flex items-center gap-3 mb-5 text-sm uppercase tracking-wider">
                      AREAS YOU CAN DEVELOP
                    </h3>
                    <ul className="space-y-4 font-bold">
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                        <span className="font-bold">Expand knowledge of specific business valuation methodologies.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                        <span className="font-bold">Enhance familiarity with commercial transaction legal structures.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                        <span className="font-bold">Develop a more aggressive outbound prospecting strategy.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-bold">
                        <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                        <span className="font-bold">Build deeper local networks with CPAs and estate attorneys.</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 5. OWNER INSIGHTS & RECOMMENDATION SECTION */}
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mt-8 mb-16 items-stretch">
            {/* Left */}
            <div className="flex flex-col justify-center pr-0 lg:pr-4">
              <h3 className="text-[#0B1D3A] font-black text-xl mb-6 uppercase tracking-wide">WHAT BROKERAGE OFFICE OWNERS TOLD US</h3>
              <p className="text-gray-700 font-bold text-base mb-8 leading-relaxed">
                In a nationwide survey, we asked the owners of the most successful business brokerage offices what specific traits they look for when hiring new agents. Here are the top non-negotiable characteristics:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-53px', fontSize: '14px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Unquestionable Integrity
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-27px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Self-Motivated Drive
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-29px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Active Listening Skills
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-23px', fontSize: '14px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Resilience to Rejection
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-52px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Financial Literacy
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-28px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Willingness to Learn
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-29px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Professional Presence
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0B1D3A]" style={{ marginLeft: '-23px', fontSize: '14px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" /> Natural Curiosity
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative flex flex-col justify-center py-4 lg:border-l lg:border-gray-300 lg:pl-10">
              <div className="text-[#EAB308] text-6xl font-serif leading-none mb-4 select-none absolute -top-4 left-6 lg:left-8">“</div>
              <h3 className="text-[#1E3A8A] font-bold text-lg mb-4 uppercase ml-6 relative z-10 tracking-widest">LEN KRICK'S RECOMMENDATION</h3>
              <p className="text-gray-700 font-medium text-base leading-relaxed mb-4 ml-6 relative z-10 italic">
                Based on your Assessment score, we will give you a clear, honest recommendation. If you score well, we'll outline the exact next steps to launch your career. If your score suggests this isn't the right fit, we will tell you that too. The business brokerage profession is phenomenal, but it requires a very specific temperament to succeed. Our goal is to set you up for absolute success.
              </p>
              <div className="font-bold text-[#0B1D3A] ml-6 relative z-10 text-base">
                ---Len Krick,MBA
              </div>
            </div>
          </div>

          {/* 6. BOTTOM CTA BAR */}
          <div className="bg-orange-50 border-t-4 border-[#FF4500] w-full py-12">
            <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-start md:items-center gap-6 text-left">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shrink-0 hidden md:flex">
                  <Target className="w-8 h-8 text-[#FF4500]" />
                </div>
                <div>
                  <h3 className="text-[#FF4500] font-black text-2xl sm:text-3xl uppercase mb-2">READY TO TAKE THE NEXT STEP?</h3>
                  <p className="text-[#0B1D3A] font-semibold text-base sm:text-lg">
                    Whether you score an 80% or a 95%, the real journey begins with proper education.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => { setScreen(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-[#FF4500] hover:bg-orange-600 text-white px-8 py-5 rounded-lg font-bold uppercase shadow-xl transition-transform hover:-translate-y-1 shrink-0 flex items-center gap-3 w-full md:w-auto justify-center text-sm sm:text-base"
              >
                LEARN HOW TO BECOME A BUSINESS BROKER <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 7. FOOTER LOGOS */}
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-wrap items-center justify-center gap-12 py-10 bg-white">
          </div>

        </main>
      </div>
    );
  }
  // Helper for option contextual descriptions
  const getOptionDescription = (qId: number, label: string): string | null => {
    if (qId === 1) {
      const descMap: Record<string, string> = {
        "Former Business Owner": "Experience managing P&L, business operations, employees, and financial exits.",
        "Commercial Real Estate Broker": "Experience in client-facing transactions, deal negotiations, valuation, or advisory services.",
        "Business Coach": "Advising business owners and leaders on growth, financial performance, and operations.",
        "Business Consultant": "Strategic advisory, operational analysis, corporate restructuring, or financial consulting.",
        "CPA/Accountant": "Deep understanding of financial statements, balance sheets, tax considerations, and valuation.",
        "Banker": "Commercial lending, financial analysis, risk assessment, and transaction advisory.",
        "Attorney": "Contractual law, corporate transactions, deal structures, and due diligence.",
        "Corporate Executive": "Leadership experience in strategy, division management, and corporate operations.",
        "Business Development": "B2B client acquisition, deal structuring, relationship management, and negotiation.",
        "Residential Real Estate Agent": "Client representation, property marketing, purchase contracts, and closing transactions.",
        "Sales Professional": "Consultative selling, client relationship management, deal pipeline, and closing contracts.",
        "Other": "Diverse professional background adaptable to the business brokerage profession."
      };
      return descMap[label] || null;
    }
    return null;
  };

  // ==========================================
  // RENDER SCREENS 2–8: ASSESSMENT STEPS 1–6 & LEAD CAPTURE
  // ==========================================
  if (screen >= 2 && screen <= 8) {
    const currentStep = screen - 1; // 1..6 for steps, 7 for lead capture
    const stepTitle = STEP_TITLES[currentStep] || "Your Contact Information";
    const currentQuestions = QUESTIONS.filter(q => q.step === currentStep);

    // Calculate completion metrics by step
    const STEP_PROGRESS_PERCENT: Record<number, number> = {
      1: 17,
      2: 33,
      3: 50,
      4: 66,
      5: 83,
      6: 100,
      7: 100
    };
    const progressPercent = STEP_PROGRESS_PERCENT[currentStep] || 100;

    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col justify-between w-full overflow-x-hidden max-w-full">
        {/* ISOLATED HEADER (NO WEBSITE NAVIGATION) */}
        <header className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-200 bg-[#F8FAFC]">
          <div className="flex items-center gap-4">
            <button onClick={() => setScreen(1)} className="cursor-pointer text-left">
              <img 
                src="src/images7/BusinessBrokerCareerMatchAssessmentLogo.png" 
                alt="Business Broker Career Match Assessment" 
                loading="lazy"
                className="object-contain h-[100px] lg:h-[500px] w-auto lg:w-[1000px] pl-0 pr-0 ml-0 lg:-ml-[54px] mt-0 lg:-mt-[130px]" 
                onError={(e) => { e.currentTarget.src = logoImg; }}
              />
            </button>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <h3 className="text-[#0B1D3A] font-black text-lg ml-0 lg:-ml-[200px] mr-0 lg:mr-[200px] mt-0 lg:-mt-[150px]">Developed by Len Krick, MBA</h3>
            <p className="text-sm lg:text-[16px] font-bold text-gray-600 max-w-xs mx-auto md:ml-auto md:mr-0 mt-2 lg:mt-[50px] lg:mr-[171px] text-center">Based on 25+ years of business brokerage experience and the insights of brokerage office owners nationwide.</p>
          </div>
        </header>

        {/* MAIN ASSESSMENT SHELL (GRID SYSTEM) */}
        <main className="flex-1 w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8" style={{ marginTop: '-130px' }}>
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* 1. LEFT SIDEBAR COMPONENT (STATIC) */}
            <aside className="col-span-12 lg:col-span-3 space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div>
                <h2 className="text-2xl font-black text-[#0B1D3A] uppercase mb-4 leading-tight">
                  LET'S DISCOVER YOUR CAREER MATCH
                </h2>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Thank you for taking the Business Broker Career Match Assessment™. It is designed to evaluate your background, goals, and natural fit for a high-earning career in business brokerage.
                </p>
                <h3 className="font-bold text-sm text-[#0B1D3A] mb-4">
                  It is based upon:
                </h3>
              </div>

              {/* Icon List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B1D3A] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-shield-halved text-lg"></i>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 pt-1 leading-snug">
                    25+ years of business brokerage experience
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B1D3A] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-users text-lg"></i>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 pt-1 leading-snug">
                    More than 400 business brokers personally trained
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B1D3A] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-chart-simple text-lg"></i>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 pt-1 leading-snug">
                    Thousands of successful business sales
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B1D3A] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-trophy text-lg"></i>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 pt-1 leading-snug">
                    The 2026 Business Brokerage Recruiting & Growth Survey
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  There are no right or wrong answers. <strong className="text-[#0B1D3A]">Simply answer honestly.</strong>
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <i className="fa-regular fa-clock text-[#FF4500] text-sm"></i>
                  <span>The assessment takes approximately 5 minutes.</span>
                </div>
              </div>

              {/* Security Box */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mt-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1D3A] mb-1">
                  <i className="fa-solid fa-lock text-[#0B1D3A]"></i>
                  <span>YOUR INFORMATION IS 100% CONFIDENTIAL</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Your responses are secure and will only be used to generate your personalized Career Match Report™.
                </p>
              </div>
            </aside>

            {/* 2. MAIN ASSESSMENT AREA (DYNAMIC RIGHT COLUMN) */}
            <section className="col-span-12 lg:col-span-9 space-y-6">
              {/* A. STEP HEADER & PROGRESS BAR (GLOBAL) */}
              <div>
                {screen === 8 ? (
                  <div className="bg-[#0B1D3A] rounded-t-2xl p-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="bg-[#2563EB] text-white font-bold text-xs px-4 py-2 rounded uppercase tracking-wider whitespace-nowrap">
                        STEP 7 OF 7
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-white uppercase tracking-wide">
                          YOUR CAREER MATCH REPORT™ IS READY
                        </h2>
                        <p className="text-gray-300 text-sm mt-1">
                          Just one more step to view your personalized results.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-full border-2 border-slate-500 text-white items-center justify-center text-2xl shrink-0">
                      <i className="fa-solid fa-file-circle-check"></i>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Header Box */}
                    <div className="bg-[#0B1D3A] text-white p-6 rounded-t-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="bg-[#2563EB] text-white font-bold px-4 py-1.5 rounded text-xs uppercase tracking-wider whitespace-nowrap inline-block">
                          {`STEP ${currentStep} OF 6`}
                        </span>
                        <div>
                          <h2 className="text-xl font-black text-white uppercase tracking-wide">
                            {stepTitle.toUpperCase()}
                          </h2>
                          <p className="text-xs text-slate-300">
                            This section helps us evaluate your background and career compatibility.
                          </p>
                        </div>
                      </div>
                      {currentStep === 5 && (
                        <div className="w-10 h-10 rounded-full border-2 border-slate-500 text-white flex items-center justify-center text-xl ml-auto shrink-0">
                          <i className="fa-solid fa-rocket"></i>
                        </div>
                      )}
                      {currentStep === 6 && (
                        <div className="w-10 h-10 rounded-full border-2 border-slate-500 text-white flex items-center justify-center text-xl ml-auto shrink-0">
                          <i className="fa-solid fa-bullseye"></i>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar Container */}
                    <div className="bg-white border-x border-b border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center gap-3 shadow-xs rounded-b-xl">
                      <span className="text-xs font-bold text-[#0B1D3A] shrink-0">PROGRESS</span>
                      <div className="flex-1 grid grid-cols-6 gap-1 h-3">
                        {[1, 2, 3, 4, 5, 6].map((st) => (
                          <div 
                            key={st}
                            className={`h-full ${
                              st <= currentStep ? 'bg-[#15803D]' : 'bg-gray-200'
                            } ${st === 1 ? 'rounded-l-sm' : ''} ${st === 6 ? 'rounded-r-sm' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="text-[#15803D] font-bold text-xs whitespace-nowrap">{progressPercent}% COMPLETE</span>
                    </div>
                  </>
                )}
              </div>

              {/* Validation Alert Message */}
              {stepError && (
                <div className="bg-red-50 border-2 border-red-500 p-4 rounded-xl text-red-800 flex items-start gap-3 shadow-md animate-shake">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-sm font-bold">{stepError}</div>
                </div>
              )}

              {/* STEPS 1–6 QUESTIONS DISPLAY */}
              {screen >= 2 && screen <= 7 && (
                (currentStep === 5 || currentStep === 6) ? (
                  <div className="mt-4 bg-white pb-6 rounded-xl border border-gray-200 p-4 md:p-6 shadow-xs">
                    {/* TABLE HEADER (Hidden on mobile, visible on lg) */}
                    <div className="hidden lg:grid grid-cols-12 gap-4 border-b-2 border-[#0B1D3A] pb-4 mb-4">
                      <div className="col-span-1 text-center font-bold text-[#1D4ED8] text-xs">#</div>
                      <div className="col-span-6 font-bold text-[#1D4ED8] text-xs">STATEMENT</div>
                      <div className="col-span-1 text-center font-bold text-[#1D4ED8] text-[10px] leading-tight">STRONGLY<br />DISAGREE</div>
                      <div className="col-span-1 text-center font-bold text-[#1D4ED8] text-[10px] leading-tight flex items-end justify-center">DISAGREE</div>
                      <div className="col-span-1 text-center font-bold text-[#1D4ED8] text-[10px] leading-tight flex items-end justify-center">NEUTRAL</div>
                      <div className="col-span-1 text-center font-bold text-[#1D4ED8] text-[10px] leading-tight flex items-end justify-center">AGREE</div>
                      <div className="col-span-1 text-center font-bold text-[#1D4ED8] text-[10px] leading-tight">STRONGLY<br />AGREE</div>
                    </div>

                    {/* ROWS TEMPLATE */}
                    {currentQuestions.map((q, qIdx) => {
                      const isUnanswered = unansweredIds.includes(q.id);
                      const selectedVal = answers[q.id];
                      const rowNum = currentStep === 5 ? (33 + qIdx) : (40 + qIdx);

                      return (
                        <div 
                          key={q.id}
                          id={`question-card-${q.id}`}
                          className={`grid grid-cols-1 lg:grid-cols-12 gap-4 items-center border-b border-gray-200 py-4 hover:bg-slate-50 transition px-2 rounded-lg ${
                            isUnanswered ? 'bg-red-50/20 border-l-4 border-l-red-500 pl-4 -ml-4' : ''
                          }`}
                        >
                          {/* Number */}
                          <div className="col-span-1 flex lg:justify-center">
                            <div className="w-8 h-8 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center font-bold text-sm">
                              {rowNum}
                            </div>
                          </div>

                          {/* Statement */}
                          <div className="col-span-6">
                            <h3 className="text-sm font-bold text-[#0B1D3A]">{q.text}</h3>
                          </div>

                          {/* Radio Buttons (5 Columns) */}
                          <div className="col-span-5 grid grid-cols-5 gap-2 lg:contents">
                            {q.options.map(([label, val], idx) => {
                              const isSelected = selectedOptions[q.id] === idx || (selectedOptions[q.id] === undefined && selectedVal === val);
                              return (
                                <div key={idx} className="col-span-1 flex flex-col lg:flex-row items-center justify-center gap-1">
                                  <label className="flex flex-col lg:flex-row items-center justify-center gap-1 cursor-pointer group">
                                    <input 
                                      type="radio" 
                                      name={`q${q.id}`} 
                                      value={val}
                                      checked={isSelected}
                                      onChange={() => handleOptionClick(q.id, idx, val)}
                                      className="w-5 h-5 accent-[#FF4500] cursor-pointer" 
                                    />
                                    <span className="text-[10px] text-gray-600 lg:hidden text-center">{label}</span>
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    {/* BOTTOM SUMMARY BOX */}
                    {currentStep === 5 ? (
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8 flex items-start gap-4">
                        <i className="fa-solid fa-bullseye text-4xl text-[#1D4ED8] mt-1 shrink-0"></i>
                        <p className="text-sm text-[#0B1D3A] leading-relaxed">
                          Successful business brokers are entrepreneurs at heart. They create their own success through initiative, hard work, and a commitment to helping others.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8 flex items-start gap-4">
                        <i className="fa-solid fa-chart-line text-4xl text-[#1D4ED8] mt-1 shrink-0"></i>
                        <p className="text-sm text-[#0B1D3A] leading-relaxed">
                          Your responses will help determine how well this career aligns with your background, interests, and personal characteristics.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-0">
                    {currentQuestions.map((q, qIdx) => {
                      const isUnanswered = unansweredIds.includes(q.id);
                      const selectedVal = answers[q.id];

                      // Check layout pattern based on question
                      const isQ1Step1 = q.id === 1;
                      const isQ2Step1 = q.id === 2;
                      const isYesNo = q.options.length === 2;

                      return (
                        <div 
                          key={q.id}
                          id={`question-card-${q.id}`}
                          className={`py-8 border-b border-gray-200 relative transition-all ${
                            isUnanswered 
                              ? 'bg-red-50/20 border-l-4 border-l-red-500 pl-4 -ml-4' 
                              : ''
                          }`}
                        >
                          {/* Question Badge & Title */}
                          <div className="flex items-start gap-4 mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center font-bold shrink-0 text-sm">
                              {qIdx + 1}
                            </div>
                            <h3 className="text-lg font-bold text-[#0B1D3A] mt-1">
                              {q.text}
                            </h3>
                          </div>

                          {/* Options rendering according to exact text labels and grid */}
                          {isQ1Step1 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 pl-12">
                              {q.options.map(([label, val], idx) => {
                                const isSelected = selectedOptions[q.id] === idx || (selectedOptions[q.id] === undefined && selectedVal === val);
                                return (
                                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                      type="radio" 
                                      name={`q${q.id}`} 
                                      value={val}
                                      checked={isSelected}
                                      onChange={() => handleOptionClick(q.id, idx, val)}
                                      className="peer sr-only" 
                                    />
                                    <div className="relative w-5 h-5 rounded-full border border-gray-400 peer-checked:border-[#FF4500] flex items-center justify-center shrink-0 transition-colors after:content-[''] after:w-2.5 after:h-2.5 after:bg-[#FF4500] after:rounded-full after:scale-0 peer-checked:after:scale-100 after:transition-transform after:duration-200"></div>
                                    <span className="text-sm text-[#0B1D3A] select-none group-hover:text-[#FF4500] transition-colors">{label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          ) : isQ2Step1 ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-12">
                              {q.options.map(([label, val], idx) => {
                                const isSelected = selectedOptions[q.id] === idx || (selectedOptions[q.id] === undefined && selectedVal === val);
                                return (
                                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                      type="radio" 
                                      name={`q${q.id}`} 
                                      value={val}
                                      checked={isSelected}
                                      onChange={() => handleOptionClick(q.id, idx, val)}
                                      className="peer sr-only" 
                                    />
                                    <div className="relative w-5 h-5 rounded-full border border-gray-400 peer-checked:border-[#FF4500] flex items-center justify-center shrink-0 transition-colors after:content-[''] after:w-2.5 after:h-2.5 after:bg-[#FF4500] after:rounded-full after:scale-0 peer-checked:after:scale-100 after:transition-transform after:duration-200"></div>
                                    <span className="text-sm text-[#0B1D3A] select-none group-hover:text-[#FF4500] transition-colors">{label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          ) : isYesNo ? (
                            <div className="flex items-center gap-12 pl-12">
                              {q.options.map(([label, val], idx) => {
                                const isSelected = selectedOptions[q.id] === idx || (selectedOptions[q.id] === undefined && selectedVal === val);
                                return (
                                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                      type="radio" 
                                      name={`q${q.id}`} 
                                      value={val}
                                      checked={isSelected}
                                      onChange={() => handleOptionClick(q.id, idx, val)}
                                      className="peer sr-only" 
                                    />
                                    <div className="relative w-5 h-5 rounded-full border border-gray-400 peer-checked:border-[#FF4500] flex items-center justify-center shrink-0 transition-colors after:content-[''] after:w-2.5 after:h-2.5 after:bg-[#FF4500] after:rounded-full after:scale-0 peer-checked:after:scale-100 after:transition-transform after:duration-200"></div>
                                    <span className="text-sm text-[#0B1D3A] select-none group-hover:text-[#FF4500] transition-colors">{label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pl-12">
                              {q.options.map(([label, val], idx) => {
                                const isSelected = selectedOptions[q.id] === idx || (selectedOptions[q.id] === undefined && selectedVal === val);
                                return (
                                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                      type="radio" 
                                      name={`q${q.id}`} 
                                      value={val}
                                      checked={isSelected}
                                      onChange={() => handleOptionClick(q.id, idx, val)}
                                      className="peer sr-only" 
                                    />
                                    <div className="relative w-5 h-5 rounded-full border border-gray-400 peer-checked:border-[#FF4500] flex items-center justify-center shrink-0 transition-colors after:content-[''] after:w-2.5 after:h-2.5 after:bg-[#FF4500] after:rounded-full after:scale-0 peer-checked:after:scale-100 after:transition-transform after:duration-200"></div>
                                    <span className="text-sm text-[#0B1D3A] select-none group-hover:text-[#FF4500] transition-colors">{label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )
              )}

              {/* D. STEP 7 UI PATTERN: LEAD CAPTURE FORM (SCREEN 8) */}
              {screen === 8 && (
                <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-xs space-y-6">
                  {/* Success Header */}
                  <div className="text-center max-w-xl mx-auto space-y-3">
                    <i className="fa-solid fa-circle-check text-[#15803D] text-6xl"></i>
                    <h3 className="text-2xl font-black text-[#0B1D3A]">
                      Congratulations! Your Personalized Career Match Report™ Has Been Prepared.
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      To view your results online, download and print your report, please enter your contact information below.
                    </p>
                  </div>

                  {leadError && (
                    <div className="bg-red-50 border border-red-400 p-3 rounded-lg text-red-700 text-xs font-bold text-center">
                      {leadError}
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-2xl mx-auto pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1D3A] uppercase tracking-wider mb-1">
                          First Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={lead.firstName}
                          onChange={(e) => setLead(prev => ({ ...prev, firstName: e.target.value }))}
                          placeholder="John" 
                          className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#1D4ED8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1D3A] uppercase tracking-wider mb-1">
                          Last Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={lead.lastName}
                          onChange={(e) => setLead(prev => ({ ...prev, lastName: e.target.value }))}
                          placeholder="Smith" 
                          className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#1D4ED8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1D3A] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={lead.email}
                        onChange={(e) => setLead(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john.smith@example.com" 
                        className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label className="block text-xs font-bold text-[#0B1D3A] mb-2 uppercase">
                          Mobile Phone <span className="text-gray-500 font-normal capitalize">(Optional)</span>
                        </label>
                        <input 
                          type="tel" 
                          value={lead.phone}
                          onChange={(e) => setLead(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(555) 123-4567" 
                          className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#1D4ED8]" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0B1D3A] mb-2 uppercase">
                          City <span className="text-gray-500 font-normal capitalize">(Optional)</span>
                        </label>
                        <input 
                          type="text" 
                          value={lead.city}
                          onChange={(e) => setLead(prev => ({ ...prev, city: e.target.value }))}
                          placeholder="City" 
                          className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#1D4ED8]" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0B1D3A] mb-2 uppercase">
                          State / Province <span className="text-gray-500 font-normal capitalize">(Optional)</span>
                        </label>
                        <div className="relative">
                          <select 
                            value={lead.state}
                            onChange={(e) => setLead(prev => ({ ...prev, state: e.target.value }))}
                            className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#1D4ED8] appearance-none bg-white text-gray-500 cursor-pointer"
                          >
                            <option value="">Select State / Province</option>
                            <option value="Texas">Texas</option>
                            <option value="California">California</option>
                            <option value="Florida">Florida</option>
                            <option value="New York">New York</option>
                            <option value="Nevada">Nevada</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Other">Other</option>
                          </select>
                          <i className="fa-solid fa-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                        </div>
                      </div>
                    </div>

                    {/* Opt-in Checkbox */}
                    <label className="flex items-start gap-3 pt-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={lead.marketingOptIn}
                        onChange={(e) => setLead(prev => ({ ...prev, marketingOptIn: e.target.checked }))}
                        className="mt-1 accent-[#FF4500] w-4 h-4 rounded cursor-pointer" 
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        Yes, I would like to receive occasional educational information, career insights, and opportunities related to business brokerage.
                      </span>
                    </label>

                    {/* Privacy Statement Trust Badge */}
                    <div className="bg-blue-50 rounded-xl p-6 flex items-start gap-4 mt-8 border border-blue-100">
                      <i className="fa-solid fa-shield-halved text-4xl text-[#1D4ED8] mt-1 shrink-0"></i>
                      <div>
                        <h4 className="text-[#1D4ED8] font-bold text-sm mb-1">Privacy Statement</h4>
                        <p className="text-sm text-[#0B1D3A] leading-relaxed">
                          Your information will remain confidential and will never be sold or shared with third parties.
                        </p>
                      </div>
                    </div>

                    {/* Len Krick Quote Block */}
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mt-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border border-slate-200">
                      <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-200 rounded-xl overflow-hidden border-4 border-white shadow-md relative z-10">
                        <img 
                          src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Len Krick" 
                          loading="lazy"
                          className="w-full h-full object-cover" 
                          onError={(e) => { e.currentTarget.src = lenKrickPhoto; }}
                        />
                      </div>
                      <div className="relative z-10">
                        <span className="text-[#FF4500] text-6xl font-serif absolute -top-4 -left-6 leading-none select-none">“</span>
                        <p className="text-[#0B1D3A] text-lg font-medium italic leading-relaxed relative z-10 mb-4 pl-4">
                          I hope your personalized Career Match Report™ helps you discover one of the most rewarding careers available today.
                        </p>
                        <p className="text-[#0B1D3A] font-black pl-4">— Len Krick, MBA</p>
                      </div>
                    </div>

                    {/* CTA Submit Button */}
                    <button 
                      type="submit" 
                      className="w-full bg-[#FF4500] hover:bg-orange-600 transition-colors text-white text-xl md:text-2xl font-black py-6 rounded-xl mt-8 flex items-center justify-center gap-4 shadow-xl uppercase tracking-wide cursor-pointer"
                    >
                      <i className="fa-solid fa-file-lines text-3xl"></i>
                      <span>VIEW MY CAREER MATCH REPORT™</span>
                      <i className="fa-solid fa-chevron-right ml-2"></i>
                    </button>

                    <div className="flex items-center justify-center gap-2 mt-6 text-sm font-bold text-[#0B1D3A]">
                      <i className="fa-solid fa-lock text-[#EAB308]"></i> Your information is secure and encrypted.
                    </div>
                  </form>
                </div>
              )}

              {/* 3. BOTTOM ACTION BAR (STEPS 1-6) */}
              {screen >= 2 && screen <= 7 && (
                <>
                  <div className="bg-[#F0FDF4] border border-green-200 rounded-xl p-6 flex items-start md:items-center justify-between gap-6 mb-8 mt-8">
                    <div className="flex items-center gap-4">
                      <i className="fa-solid fa-shield-halved text-4xl text-[#15803D]"></i>
                      <div>
                        <h3 className="text-[#0B1D3A] font-bold text-lg">You're making great progress!</h3>
                        <p className="text-sm text-gray-700">Answer honestly to get the most accurate career match.</p>
                      </div>
                    </div>
                    <i className="fa-solid fa-person-walking-arrow-up-right text-4xl text-[#0B1D3A] opacity-20 hidden md:block"></i>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between py-8 border-b-2 border-gray-100 mb-8 gap-4 mt-4">
                    <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="border-2 border-[#0B1D3A] text-[#0B1D3A] font-bold px-6 py-3 rounded text-sm hover:bg-slate-50 transition w-full md:w-auto uppercase cursor-pointer flex items-center justify-center gap-2"
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>PREVIOUS STEP</span>
                      </button>
                      <span className="text-xs text-gray-500 mt-2">
                        {currentStep === 1 
                          ? "Start of assessment" 
                          : `Back: Step ${currentStep - 1} of 6 – ${STEP_TITLES[currentStep - 1] || 'Previous'}`}
                      </span>
                    </div>

                    <div className="flex flex-col items-center w-full md:w-auto">
                      <button
                        type="button"
                        onClick={() => setScreen(1)}
                        className="border-2 border-[#0B1D3A] text-[#0B1D3A] font-bold px-8 py-3 rounded text-sm hover:bg-slate-50 transition w-full md:w-auto uppercase cursor-pointer"
                      >
                        SAVE & EXIT
                      </button>
                      <span className="text-xs text-gray-500 mt-2">
                        You can return anytime
                      </span>
                    </div>

                    <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-[#FF4500] hover:bg-orange-600 transition text-white font-bold px-8 py-3 rounded text-lg shadow-md flex items-center justify-center gap-2 w-full md:w-auto uppercase cursor-pointer"
                      >
                        <span>{screen === 7 ? "PREPARE MY REPORT" : "NEXT STEP"}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                      <span className="text-xs text-gray-600 mt-2">
                        {screen === 7 
                          ? "Next: Your Personalized Career Match Report™" 
                          : `Next: Step ${currentStep + 1} of 6 – ${STEP_TITLES[currentStep + 1] || 'Career Compatibility'}`}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>

          {/* 4. GLOBAL BOTTOM BANNER */}
          {screen >= 2 && screen <= 8 && (
            <div className="space-y-8 mt-12">
              
              {/* "DON'T WORRY" BANNER */}
              <div className="bg-white border border-slate-200 shadow-xs rounded-xl p-6 flex items-start gap-6">
                <div className="shrink-0 pt-0.5">
                  <i className="fa-solid fa-shield-halved text-[#15803D] text-4xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-[#0B1D3A] uppercase tracking-wide mb-1">
                    PLEASE DON'T WORRY IF YOU DON'T HAVE EXPERIENCE IN BUSINESS BROKERAGE.
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed max-w-3xl">
                    Business brokerage is a specialized career, and most successful brokers come from other fields like sales, management, corporate careers, or real estate. Our training program is designed to teach you everything you need to know.
                  </p>
                </div>
                <div className="shrink-0 text-[#0B1D3A] hidden md:block">
                  <i className="fa-solid fa-person-arrow-up-from-line text-5xl"></i>
                </div>
              </div>

            </div>
          )}
        </main>

        <footer className="bg-[#0B1D3A] text-white py-4 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="w-full flex flex-col md:flex-row items-center justify-between text-xs gap-4">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-lock text-lg"></i>
              <div>
                <p>Your privacy is important to us. Your responses are secure and confidential.</p>
                <p className="text-gray-400">We will never share your information with anyone.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-shield-halved text-gray-400 text-2xl"></i>
              <div>
                <p>Trusted by Aspiring Brokers</p>
                <p>Across North America</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // ==========================================
  // RENDER SCREEN 8: REPORT READY / CONTACT CAPTURE (Step 7)
  // ==========================================
  if (screen === 8) {
    return (
      <div className="min-h-screen bg-[#F4F6FA] text-slate-800 font-sans flex flex-col justify-center items-center py-12 px-4 w-full overflow-x-hidden max-w-full">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-xl border border-[#DFE4EE] overflow-hidden p-6 sm:p-10">
          
          {/* Green Pill Header */}
          <div className="text-center mb-6">
            <span className="bg-emerald-100 text-[#1E8449] px-4 py-1.5 rounded-full font-bold text-sm inline-flex items-center gap-2 border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-[#1E8449]" />
              Assessment Complete
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001133] mt-4">
              Your Career Match Report™ Is Ready
            </h2>

            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Your responses have been scored and your personalized report has been prepared. Tell us where to send it and it will open on the next screen.
            </p>
          </div>

          {/* Form Alert */}
          {leadError && (
            <div className="mb-6 bg-red-50 border border-red-400 text-red-800 p-3.5 rounded text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{leadError}</span>
            </div>
          )}

          {/* Contact Fields Form */}
          <form onSubmit={handleLeadSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={lead.firstName}
                  onChange={(e) => setLead({ ...lead, firstName: e.target.value })}
                  placeholder="e.g. John"
                  className="w-full border border-[#DFE4EE] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#001B7A] focus:ring-1 focus:ring-[#001B7A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={lead.lastName}
                  onChange={(e) => setLead({ ...lead, lastName: e.target.value })}
                  placeholder="e.g. Smith"
                  className="w-full border border-[#DFE4EE] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#001B7A] focus:ring-1 focus:ring-[#001B7A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#001133] uppercase tracking-wider mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={lead.email}
                onChange={(e) => setLead({ ...lead, email: e.target.value })}
                placeholder="e.g. john.smith@example.com"
                className="w-full border border-[#DFE4EE] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#001B7A] focus:ring-1 focus:ring-[#001B7A]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Mobile Phone <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={lead.phone}
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  className="w-full border border-[#DFE4EE] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#001B7A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  City <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={lead.city}
                  onChange={(e) => setLead({ ...lead, city: e.target.value })}
                  placeholder="e.g. Dallas"
                  className="w-full border border-[#DFE4EE] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#001B7A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  State / Prov <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={lead.state}
                  onChange={(e) => setLead({ ...lead, state: e.target.value })}
                  placeholder="e.g. TX"
                  className="w-full border border-[#DFE4EE] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#001B7A]"
                />
              </div>
            </div>

            {/* Marketing Opt-in Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={lead.marketingOptIn}
                  onChange={(e) => setLead({ ...lead, marketingOptIn: e.target.checked })}
                  className="mt-0.5 rounded border-gray-300 text-[#001B7A] focus:ring-[#001B7A]"
                />
                <span>Send me occasional emails about business brokerage training, tools, and career resources.</span>
              </label>
            </div>

            {/* Light Blue Callout with Orange Left Rule */}
            <div className="bg-[#EBF1FF] border-l-4 border-[#D96400] p-4 rounded-r-md my-6">
              <p className="text-xs sm:text-sm text-[#001133] italic leading-relaxed">
                "I hope your personalized Career Match Report™ helps you discover one of the most rewarding careers available today."
              </p>
              <p className="text-xs font-bold text-[#001B7A] mt-1">— Len Krick, MBA</p>
            </div>

            {/* Full Width Orange Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#D96400] hover:bg-[#b85400] text-white font-extrabold text-base py-4 rounded-md uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              VIEW MY CAREER MATCH REPORT™ →
            </button>

            <div className="text-center text-[11px] text-gray-500 pt-1">
              🔒 Your information is kept confidential and is never sold.
            </div>
          </form>

        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER SCREEN 9: PROCESSING SCREEN
  // ==========================================
  if (screen === 9) {
    const messages = [
      "Preparing your personalized report",
      "Calculating your Career Match Score",
      "Identifying your greatest strengths",
      "Comparing your responses with the Business Broker Competency Model™",
      "Preparing Len Krick's recommendations"
    ];

    return (
      <div className="min-h-screen bg-[#001133] text-white font-sans flex flex-col items-center justify-center p-6 text-center w-full overflow-x-hidden max-w-full">
        <div className="max-w-md w-full space-y-6">
          {/* Animated Spinner */}
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 rounded-full border-4 border-gray-700 border-t-[#D96400] animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-[#D96400] font-bold text-xs">
              BB
            </div>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-white">
            Preparing Your Career Match Report™
          </h2>

          <div className="h-12 flex items-center justify-center">
            <p className="text-sm font-semibold text-amber-400 animate-pulse transition-all">
              {messages[processingMsgIdx]}...
            </p>
          </div>

          <div className="w-48 mx-auto bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#D96400] h-full w-2/3 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER SCREEN 10: CAREER MATCH REPORT
  // ==========================================
  if (screen === 10 && results) {
    const fullName = `${lead.firstName || 'Valued'} ${lead.lastName || 'Candidate'}`.trim();

    return (
      <div className="min-h-screen bg-[#F4F6FA] text-slate-800 font-sans flex flex-col justify-between w-full overflow-x-hidden max-w-full">
        {renderNavbar('assessment')}

        <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
          
          {/* WHITE DOCUMENT-STYLE SHEET */}
          <div className="bg-white border border-[#DFE4EE] rounded-xl shadow-xl overflow-hidden print:shadow-none print:border-none">
            
            {/* NAVY HEADER BAND */}
            <div className="bg-[#001133] text-white p-6 sm:p-8 border-b-4 border-[#D96400] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="text-[#D96400] font-bold text-xs tracking-widest uppercase mb-1">
                  PROFESSIONAL CANDIDATE ASSESSMENT
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Business Broker Career Match Report™
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 italic mt-1">
                  "Discover Your Potential. Plan Your Future. Make a Difference."
                </p>
              </div>

              <div className="text-left md:text-right text-xs text-gray-300 space-y-1 bg-white/5 p-3 rounded border border-white/10 shrink-0">
                <div><span className="text-gray-400">Prepared exclusively for:</span> <strong className="text-white">{fullName}</strong></div>
                <div><span className="text-gray-400">Assessment date:</span> <strong className="text-white">{assessmentMeta.dateStr}</strong></div>
                <div><span className="text-gray-400">Assessment ID:</span> <strong className="text-amber-400 font-mono">{assessmentMeta.idStr}</strong></div>
              </div>
            </div>

            {/* REPORT BODY CONTENT */}
            <div className="p-6 sm:p-10 space-y-10">
              
              {/* GRAY DISCLAIMER BOX */}
              <div className="bg-[#F4F6FA] border border-[#DFE4EE] p-4 rounded-md text-xs text-[#6B7280] leading-relaxed">
                This assessment is designed to help individuals evaluate their compatibility with business brokerage as a profession. It may also be presented to prospective brokerage firms as evidence of the candidate's strengths, career compatibility, and commitment to professional development.
              </div>

              {/* SCORE ROW: SVG DONUT GAUGE + CATEGORY BARS */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gray-50/50 p-6 rounded-lg border border-[#DFE4EE]">
                
                {/* DONUT GAUGE (col span 5) */}
                <div className="md:col-span-5 flex flex-col items-center text-center justify-center border-b md:border-b-0 md:border-r border-[#DFE4EE] pb-6 md:pb-0 md:pr-6">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        strokeWidth="3.8"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        strokeWidth="3.8"
                        strokeDasharray={`${results.overallScore}, 100`}
                        stroke={results.scoreBand.color}
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-[#001133] leading-none">
                        {results.overallScore}%
                      </span>
                      <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-1">
                        CAREER MATCH
                      </span>
                    </div>
                  </div>

                  <div 
                    className="mt-3 px-4 py-1.5 rounded-full text-sm font-extrabold text-white uppercase tracking-wider inline-block shadow-xs"
                    style={{ backgroundColor: results.scoreBand.color }}
                  >
                    {results.scoreBand.rating}
                  </div>
                </div>

                {/* CATEGORY SCORES BARS (col span 7) */}
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-xs font-bold text-[#001133] uppercase tracking-wider border-b border-gray-200 pb-2">
                    YOUR CORE CATEGORY SCORES
                  </h3>

                  {(Object.keys(results.categoryScores) as CategoryName[]).map((catName) => {
                    const score = Math.round(results.categoryScores[catName]);
                    let barColor = '#6B7280';
                    if (score >= 85) barColor = '#1E8449';
                    else if (score >= 70) barColor = '#123B9E';
                    else if (score >= 60) barColor = '#D96400';

                    return (
                      <div key={catName} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-[#001133]">
                          <span>{catName}</span>
                          <span>{score}%</span>
                        </div>
                        <div className="w-full bg-[#DFE4EE] h-2 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${score}%`, backgroundColor: barColor }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* THREE PANELS ACROSS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Panel 1: Greatest Strengths */}
                <div className="bg-white p-5 rounded-lg border border-[#DFE4EE] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#1E8449] flex items-center justify-center shrink-0 font-bold">
                        ✓
                      </div>
                      <h3 className="font-bold text-[#001133] text-sm uppercase tracking-wide">
                        Your Greatest Strengths
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {results.strengths.map((s, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-xs font-bold text-[#1E8449] flex items-start gap-1.5">
                            <span>•</span>
                            <span>{s.title}</span>
                          </div>
                          <p className="text-[11px] text-gray-600 leading-relaxed pl-3">{s.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Panel 2: Skills You Can Develop */}
                <div className="bg-white p-5 rounded-lg border border-[#DFE4EE] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-[#123B9E] flex items-center justify-center shrink-0 font-bold">
                        <Target className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-[#001133] text-sm uppercase tracking-wide">
                        Skills You Can Develop
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {results.developmentAreas.map((dev, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-xs font-bold text-[#123B9E] flex items-start gap-1.5">
                            <span>•</span>
                            <span>{dev.title}</span>
                          </div>
                          <p className="text-[11px] text-gray-600 leading-relaxed pl-3">{dev.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Panel 3: What Brokerage Owners Told Us */}
                <div className="bg-[#001133] text-white p-5 rounded-lg border border-[#123B9E] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 border-b border-gray-800 pb-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#D96400] text-white flex items-center justify-center shrink-0 font-bold text-xs">
                        BB
                      </div>
                      <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wide">
                        What Owners Told Us
                      </h3>
                    </div>

                    <blockquote className="text-xs text-gray-200 leading-relaxed italic mb-4">
                      "{results.ownerInsight.headline}"
                    </blockquote>

                    <p className="text-xs text-gray-300 leading-relaxed pt-3 border-t border-gray-800">
                      {results.ownerInsight.text}
                    </p>
                  </div>
                </div>

              </div>

              {/* PROFESSIONAL INTERVIEW HIGHLIGHTS */}
              <div className="bg-gray-50 p-6 rounded-lg border border-[#DFE4EE]">
                <h3 className="text-sm font-bold text-[#001133] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D96400]" />
                  Professional Interview Highlights
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                  {results.interviewHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded border border-[#DFE4EE]">
                      <Check className="w-4 h-4 text-[#1E8449] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#001133]">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LEN KRICK'S RECOMMENDATION */}
              <div className="bg-white p-8 rounded-xl border-2 border-[#123B9E] shadow-sm space-y-4">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <img 
                    src={lenKrickPhoto} 
                    alt="Len Krick" 
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D96400] shrink-0" 
                  />
                  <div>
                    <h3 className="text-lg font-extrabold text-[#001133]">Len Krick's Recommendation</h3>
                    <p className="text-xs text-[#D96400] font-bold">IBBA Hall of Fame Inductee & Course Author</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  {results.recommendationParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-0.5 font-medium">
                  <div className="font-bold text-[#001133] text-sm">Len Krick, MBA</div>
                  <div>International Business Brokers Hall of Fame Inductee</div>
                  <div>IBBA's Tom West Award</div>
                  <div>Founder, BeABusinessBroker.Today™ and FastStart Online Broker Training™</div>
                </div>
              </div>

              {/* SUGGESTED PROFESSIONAL DEVELOPMENT */}
              <div className="bg-white p-6 rounded-lg border border-[#DFE4EE]">
                <h3 className="text-sm font-bold text-[#001133] uppercase tracking-wider mb-4">
                  Suggested Professional Development
                </h3>

                <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-700">
                  <li className="flex items-center gap-3 bg-gray-50 p-3 rounded border border-[#DFE4EE]">
                    <span className="w-6 h-6 rounded-full bg-[#001133] text-white flex items-center justify-center font-bold shrink-0">1</span>
                    <span className="font-semibold text-[#001133]">Complete FastStart Online Broker Training™</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-50 p-3 rounded border border-[#DFE4EE]">
                    <span className="w-6 h-6 rounded-full bg-[#001133] text-white flex items-center justify-center font-bold shrink-0">2</span>
                    <span className="font-semibold text-[#001133]">Earn the Accredited Senior Business Broker designation</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-50 p-3 rounded border border-[#DFE4EE]">
                    <span className="w-6 h-6 rounded-full bg-[#001133] text-white flex items-center justify-center font-bold shrink-0">3</span>
                    <span className="font-semibold text-[#001133]">Complete PricePoint™ Business Valuation Training</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-50 p-3 rounded border border-[#DFE4EE]">
                    <span className="w-6 h-6 rounded-full bg-[#001133] text-white flex items-center justify-center font-bold shrink-0">4</span>
                    <span className="font-semibold text-[#001133]">Build your professional marketing and branding plan</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-50 p-3 rounded border border-[#DFE4EE]">
                    <span className="w-6 h-6 rounded-full bg-[#001133] text-white flex items-center justify-center font-bold shrink-0">5</span>
                    <span className="font-semibold text-[#001133]">Join a professional business brokerage association</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-50 p-3 rounded border border-[#DFE4EE]">
                    <span className="w-6 h-6 rounded-full bg-[#001133] text-white flex items-center justify-center font-bold shrink-0">6</span>
                    <span className="font-semibold text-[#001133]">Develop your first-year business development plan</span>
                  </li>
                </ol>
              </div>

              {/* NAVY CTA BLOCK */}
              <div className="bg-[#001133] text-white p-8 rounded-xl text-center space-y-4 shadow-lg border border-[#123B9E]">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {results.ctaBlock.heading}
                </h3>
                <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {results.ctaBlock.message}
                </p>
                <div>
                  <a
                    href={results.ctaBlock.destination}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#D96400] hover:bg-[#b85400] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-md uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                  >
                    {results.ctaBlock.buttonText} →
                  </a>
                </div>
              </div>

              {/* ACTION ROW BUTTONS */}
              <div className="flex flex-wrap gap-4 justify-center pt-2 print:hidden">
                <button
                  onClick={() => window.print()}
                  className="bg-[#001133] hover:bg-[#001B7A] text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <Printer className="w-4 h-4" />
                  PRINT MY REPORT
                </button>

                <button
                  onClick={() => window.print()}
                  className="bg-white hover:bg-gray-100 text-[#001133] font-bold px-6 py-3 rounded border border-[#DFE4EE] text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD PDF
                </button>

                <button
                  onClick={() => alert(`Your report has been sent to ${lead.email || 'your email'}.`)}
                  className="bg-white hover:bg-gray-100 text-[#001133] font-bold px-6 py-3 rounded border border-[#DFE4EE] text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  EMAIL MY REPORT
                </button>
              </div>

              {/* REPORT FOOTER RULE */}
              <div className="border-t border-[#DFE4EE] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
                <div>
                  Confidential Candidate Evaluation • For Professional & Recruitment Use
                </div>
                <div className="flex gap-4">
                  <span>Completed: {assessmentMeta.dateStr}</span>
                  <span>•</span>
                  <span>Valid for: 12 months</span>
                  <span>•</span>
                  <span>© {new Date().getFullYear()} BeABusinessBroker.Today</span>
                </div>
              </div>

            </div>

          </div>

        </main>

        <footer className="bg-[#0B1D3A] text-white py-4 px-4 w-full"><div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs gap-4"><div className="flex items-center gap-3"><i className="fa-solid fa-lock text-lg"></i><div><p>Your privacy is important to us. Your responses are secure and confidential.</p><p className="text-gray-400">We will never share your information with anyone.</p></div></div><div className="flex items-center gap-3"><i className="fa-solid fa-shield-halved text-gray-400 text-2xl"></i><div><p>Trusted by Aspiring Brokers</p><p>Across North America</p></div></div></div></footer>
      </div>
    );
  }

  return null;
}
