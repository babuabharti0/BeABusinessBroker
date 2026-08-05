const fs = require('fs');
const content = fs.readFileSync('src/AssessmentPage.tsx', 'utf8');

const startStr = "  if (screen === 1) {";
const endStr = "  // Helper for option contextual descriptions";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find boundaries");
  process.exit(1);
}

const replacement = `  if (screen === 1) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        
        {/* 1. NAVBAR (DARK NAVY) */}
        <nav className="bg-[#0B1D3A] text-white max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate?.('home')} className="flex items-center shrink-0">
            <img 
              src="src/images6/BeABusiness Broker Logo with Broker in Blue.png" 
              alt="Be A Business Broker" 
              className="h-10 w-auto object-contain brightness-0 invert"
              onError={(e) => { e.currentTarget.src = logoImg; }}
            />
          </button>
          
          <div className="hidden lg:flex text-[10px] font-bold uppercase tracking-wider flex gap-6">
            <button onClick={() => onNavigate?.('home')} className="hover:text-[#FF4500] transition-colors">WHY THIS CAREER</button>
            <button onClick={() => onNavigate?.('begin')} className="hover:text-[#FF4500] transition-colors">HOW DO I BEGIN</button>
            <button onClick={() => onNavigate?.('firms')} className="hover:text-[#FF4500] transition-colors">FIRMS ARE LOOKING FOR YOU</button>
            <button className="text-[#FF4500] transition-colors cursor-default">BUSINESS BROKERAGE ASSESSMENT</button>
            <button onClick={() => onNavigate?.('training')} className="hover:text-[#FF4500] transition-colors">FASTSTART ONLINE TRAINING</button>
            <button onClick={() => onNavigate?.('about')} className="hover:text-[#FF4500] transition-colors">ABOUT LEN KRICK</button>
            <button onClick={() => onNavigate?.('stories')} className="hover:text-[#FF4500] transition-colors">SUCCESS STORIES</button>
          </div>

          <a href="https://www.FastStart.Training" target="_blank" rel="noopener noreferrer" className="bg-[#FF4500] hover:bg-orange-600 text-white px-6 py-2 rounded font-bold text-xs shrink-0 transition-colors hidden sm:block">
            GET STARTED
          </a>
        </nav>

        <main className="w-full">
          {/* 2. HERO SECTION (SPLIT LAYOUT) */}
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Span 7) */}
            <div className="lg:col-span-7">
              <img src="src/images6/BeABusiness Broker Logo with Broker in Blue.png" className="h-16 mb-6 object-contain" alt="Business Broker Career Match Assessment" />
              <h1 className="text-[#0B1D3A] text-4xl sm:text-5xl font-black mb-6 leading-tight">
                Is Business Brokerage the Right Career for You?
              </h1>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Business brokerage is one of the most rewarding professions available — but it isn't for everyone.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Successful business brokers possess a unique combination of business knowledge, communication skills, integrity, persistence, and entrepreneurial drive.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <User className="w-8 h-8 text-[#0B1D3A] mb-3" />
                  <div className="text-[#0B1D3A] font-bold text-xl leading-tight mb-1">25+ YEARS</div>
                  <div className="text-blue-600 text-xs font-semibold leading-snug">Business Brokerage Experience</div>
                </div>
                <div className="flex flex-col items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Users className="w-8 h-8 text-[#0B1D3A] mb-3" />
                  <div className="text-[#0B1D3A] font-bold text-xl leading-tight mb-1">400+ BROKERS</div>
                  <div className="text-blue-600 text-xs font-semibold leading-snug">Personally Trained</div>
                </div>
                <div className="flex flex-col items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Handshake className="w-8 h-8 text-[#0B1D3A] mb-3" />
                  <div className="text-[#0B1D3A] font-bold text-xl leading-tight mb-1">1000s</div>
                  <div className="text-blue-600 text-xs font-semibold leading-snug">Thousands of Successful Business Sales</div>
                </div>
                <div className="flex flex-col items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <Target className="w-8 h-8 text-[#0B1D3A] mb-3" />
                  <div className="text-[#0B1D3A] font-bold text-xl leading-tight mb-1">2026</div>
                  <div className="text-blue-600 text-xs font-semibold leading-snug">Survey Insights From Offices Nationwide</div>
                </div>
              </div>

              <p className="text-gray-700 font-medium text-base mb-8">
                In just 5 minutes, discover how closely your background, personality, and interests match the characteristics of today's most successful brokers.
              </p>
              
              <div className="flex flex-col items-start">
                <button 
                  onClick={() => { setScreen(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-[#FF4500] hover:bg-orange-600 text-white text-lg sm:text-xl font-bold px-8 py-5 rounded-full shadow-lg uppercase transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  BEGIN MY ASSESSMENT <ArrowRight className="w-6 h-6" />
                </button>
                <div className="text-xs text-[#0B1D3A] font-bold mt-4 flex items-center gap-2 w-full justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4 text-[#FF4500]" />
                  100% Confidential • No Registration Required
                </div>
              </div>
            </div>

            {/* Right Column (Span 5 - Len Krick Quote Card) */}
            <div className="lg:col-span-5 h-full">
              <div className="bg-[#0B1D3A] rounded-2xl p-8 sm:p-10 relative flex flex-col justify-center h-full shadow-xl overflow-hidden min-h-[400px]">
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <div className="text-[#EAB308] text-6xl font-serif leading-none mb-4">“</div>
                  <blockquote className="text-white text-xl font-medium leading-snug z-10 relative">
                    There has never been a better time to become a business broker. Take the assessment and see if you have what it takes to build a rewarding, flexible, and financially independent career.
                  </blockquote>
                  <div className="text-[#EAB308] text-6xl font-serif leading-none mt-2 text-right">”</div>
                  
                  <div className="mt-8 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
                    <div className="text-center sm:text-left">
                      <div className="text-white font-bold text-2xl mb-2">— Len Krick, MBA</div>
                      <div className="text-gray-300 text-sm leading-snug">
                        IBBA Hall of Fame Inductee<br/>
                        Former IBBA Education Chairman<br/>
                        International Business Brokers Association
                      </div>
                    </div>
                    <img src={lenKrickPhoto} alt="Len Krick" className="w-24 h-24 rounded-full border-4 border-[#EAB308] object-cover shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* 3. HOW THE ASSESSMENT WORKS */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 justify-center">
              <div className="hidden sm:block h-px bg-gray-300 flex-1 max-w-[200px]"></div>
              <h2 className="text-[#0B1D3A] font-bold text-xl uppercase tracking-widest text-center">
                HOW THE ASSESSMENT WORKS
              </h2>
              <div className="hidden sm:block h-px bg-gray-300 flex-1 max-w-[200px]"></div>
            </div>
            <p className="text-center text-[#0B1D3A] font-medium text-base mb-12">
              Six key areas. 46 questions. Five minutes. Powerful insights.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2">1. Background</h3>
                <p className="text-gray-600 text-[10px] leading-relaxed max-w-[120px]">Your experience and professional history</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2">2. Knowledge</h3>
                <p className="text-gray-600 text-[10px] leading-relaxed max-w-[120px]">Understanding of business concepts</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2">3. Characteristics</h3>
                <p className="text-gray-600 text-[10px] leading-relaxed max-w-[120px]">Integrity, work ethic, dependability</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2">4. Communication</h3>
                <p className="text-gray-600 text-[10px] leading-relaxed max-w-[120px]">Listening, influencing, negotiating</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2">5. Drive</h3>
                <p className="text-gray-600 text-[10px] leading-relaxed max-w-[120px]">Independence, initiative, motivation</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center mb-4 shadow-md">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-[#1D4ED8] font-bold text-xs uppercase mb-2">6. Compatibility</h3>
                <p className="text-gray-600 text-[10px] leading-relaxed max-w-[120px]">Your alignment with the lifestyle</p>
              </div>

            </div>
          </div>

          {/* 4. REPORT PREVIEW SECTION */}
          <div className="bg-white py-20 border-y border-gray-200">
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1D3A] text-center mb-12 uppercase px-4 tracking-wide">
              WHAT YOU'LL GET: YOUR BUSINESS BROKER CAREER MATCH REPORT™
            </h2>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
              
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
              <div className="border border-gray-200 rounded-2xl p-10 bg-white shadow-xl flex flex-col justify-center">
                
                <div className="mb-10">
                  <h3 className="text-[#15803D] font-bold flex items-center gap-3 mb-5 text-sm uppercase tracking-wider">
                    <Trophy className="w-5 h-5" /> YOUR GREATEST STRENGTHS
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                      <span>Exceptionally strong entrepreneurial drive and self-motivation.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                      <span>Natural ability to build rapport and trust quickly.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                      <span>High level of personal integrity and dependability.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                      <span>Strong financial comprehension and business acumen.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" /> 
                      <span>Proven resilience in overcoming professional challenges.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#1D4ED8] font-bold flex items-center gap-3 mb-5 text-sm uppercase tracking-wider">
                    <BarChart3 className="w-5 h-5" /> AREAS YOU CAN DEVELOP
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                      <span>Expand knowledge of specific business valuation methodologies.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                      <span>Enhance familiarity with commercial transaction legal structures.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                      <span>Develop a more aggressive outbound prospecting strategy.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0"></div> 
                      <span>Build deeper local networks with CPAs and estate attorneys.</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

          {/* 5. OWNER INSIGHTS & RECOMMENDATION SECTION */}
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#0B1D3A] font-black text-xl mb-6 uppercase tracking-wide">WHAT BROKERAGE OFFICE OWNERS TOLD US</h3>
              <p className="text-gray-700 text-base mb-8 leading-relaxed">
                In a nationwide survey, we asked the owners of the most successful business brokerage offices what specific traits they look for when hiring new agents. Here are the top non-negotiable characteristics:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Unquestionable Integrity
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Self-Motivated Drive
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Active Listening Skills
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Resilience to Rejection
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Financial Literacy
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Willingness to Learn
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Professional Presence
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#0B1D3A] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" /> Natural Curiosity
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-[#061224] text-white p-10 rounded-2xl shadow-2xl relative flex flex-col justify-center">
              <div className="text-[#EAB308] text-6xl font-serif leading-none mb-4 select-none absolute top-6 left-6">“</div>
              <h3 className="text-[#EAB308] font-bold text-lg mb-6 uppercase ml-8 relative z-10 tracking-widest">LEN KRICK'S RECOMMENDATION</h3>
              <p className="text-white text-base leading-relaxed mb-8 ml-8 relative z-10 italic">
                Based on your Assessment score, we will give you a clear, honest recommendation. If you score well, we'll outline the exact next steps to launch your career. If your score suggests this isn't the right fit, we will tell you that too. The business brokerage profession is phenomenal, but it requires a very specific temperament to succeed. Our goal is to set you up for absolute success.
              </p>
              <div className="flex items-center gap-5 ml-8 border-t border-gray-700 pt-6">
                <img src={lenKrickPhoto} className="w-16 h-16 rounded-full object-cover border-2 border-[#EAB308]" alt="Len Krick" />
                <div>
                  <div className="text-white font-bold text-lg">Len Krick, MBA</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">Author, FastStart Online Training™</div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. BOTTOM CTA BAR */}
          <div className="bg-orange-50 border-t-4 border-[#FF4500] py-12 px-4 shadow-sm mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
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
          <div className="flex flex-wrap items-center justify-center gap-12 py-16 bg-white border-t border-gray-100">
            <img src="src/images6/FastStart.png" alt="FastStart" className="h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="src/images6/PricePointLogo.png" alt="PricePoint" className="h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="src/images6/BeABusiness Broker Logo with Broker in Blue.png" alt="Be A Business Broker" className="h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>

        </main>
      </div>
    );
  }
`;

const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);

fs.writeFileSync('src/AssessmentPage.tsx', newContent, 'utf8');
console.log('Successfully updated AssessmentPage.tsx');
