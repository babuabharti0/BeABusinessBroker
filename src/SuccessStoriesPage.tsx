import React, { useState } from 'react';
import { 
  Star, 
  Target, 
  BookOpen, 
  Briefcase, 
  Users, 
  TrendingUp, 
  UserCheck, 
  ChevronRight, 
  Phone, 
  Mail, 
  Handshake, 
  DollarSign, 
  BarChart3, 
  Trophy 
} from 'lucide-react';

import logoImgFallback from './images5/BeABusinessBrokerLogo.png';
import ibbaLogoFallback from './images5/IBBALogo.png';
import camDupreeImg from './images6/Cam Dupree.png';
import frankImg from './images6/frank.png';
import josephImg from './images6/joseph.png';
import jamieImg from './images6/jamie.png';
import pennyImg from './images6/penny.png';
import marcoImg from './images6/marco.png';
import christopherImg from './images6/christopher.png';
import nathanielImg from './images6/nathaniel.png';
import billImg from './images6/bill.png';
import maryImg from './images6/mary.png';
import edImg from './images6/ed.png';

import { PageKey } from './App';
import Navbar from './Navbar';

interface SuccessStoriesPageProps {
  onNavigate?: (page: PageKey) => void;
}

export default function SuccessStoriesPage({ onNavigate }: SuccessStoriesPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper for 5-star rating rendering
  const renderStars = (sizeClass = "w-4 h-4") => (
    <div className="flex text-[#EAB308] space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${sizeClass} fill-[#EAB308] text-[#EAB308]`} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen font-sans bg-[#F8FAFC] text-slate-800 w-full overflow-x-hidden max-w-full">
      
      {/* GLOBAL NAVBAR */}
      <Navbar currentPage="stories" onNavigate={onNavigate} />

      {/* ------------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------------- */}
      <div 
        className="relative w-full pt-16 pb-12 bg-bottom bg-no-repeat bg-slate-50 border-b border-slate-200" 
      >
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-12">
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center tracking-tight mb-4 text-[#0B1D3A] whitespace-nowrap">
            Real People. <span className="text-[#FF4500]">Real Careers.</span> Real Success.
          </h1>
          <p className="text-xl font-medium text-center max-w-4xl mx-auto mb-2 text-gray-800">
            Hundreds of professionals have launched or accelerated their business brokerage careers through FastStart Online Broker Training™.
          </p>
          <p className="text-xl font-bold text-[#1D4ED8] text-center mb-12">
            Here are just a few of their stories.
          </p>

          {/* ------------------------------------------------------------------- */}
          {/* 2. FEATURED STORY 1: CAM DUPREE (3-COLUMN NAVY CARD) */}
          {/* ------------------------------------------------------------------- */}
          <div className="w-full bg-[#0B1D3A] rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 mb-10">
            <div className="lg:col-span-4">
              <img 
                loading="lazy" 
                src={camDupreeImg} 
                className="w-full h-full min-h-[300px] object-cover bg-slate-100" 
                alt="Cam DuPree" 
                
              />
            </div>
            <div className="lg:col-span-5 p-8 flex flex-col justify-center">
              <div 
                className="bg-[#FF4500] text-white font-bold px-4 py-1 text-sm lg:text-[25px] inline-block w-max mb-4 mt-0 text-center"
              >
                FASTSTART SUCCESS SPOTLIGHT
              </div>
              <h2 className="text-4xl lg:text-[50px] font-black text-white mb-1">Cam DuPree</h2>
              <p className="text-gray-300 font-bold text-lg lg:text-[20px] mb-6">FastStart Graduate • Business Broker • Utah</p>
              <div className="relative mt-4">
                <span className="text-[#1D4ED8] text-6xl font-serif absolute -top-4 -left-2 leading-none select-none">“</span>
                <p className="text-gray-200 font-bold text-lg lg:text-[20px] leading-relaxed relative z-10 pl-8 inline">
                  Within just six months of completing Len Krick's FastStart Online Broker Training™, I closed two business sales and generated more than $250,000 in commissions. Today, I'm representing a $14.7 million business with numerous qualified buyers expressing interest. There is simply no way I could have achieved this level of success so quickly without the systems, tools, and practical knowledge I gained through FastStart. It completely changed the trajectory of my life.
                  <span className="text-[#1D4ED8] text-5xl font-serif leading-none align-bottom ml-1 select-none">”</span>
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 bg-[#061224] p-8 flex flex-col justify-center space-y-6 border-t lg:border-t-0 lg:border-l border-slate-700">
              <h3 className="text-white font-extrabold text-xl uppercase tracking-wider border-b border-slate-700/80 pb-3 text-center mt-0">
                In First 6 months
              </h3>
              <div className="flex items-center gap-4 pb-4 border-b border-slate-700/80">
                <div className="rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 text-white w-16 h-16 lg:w-[100px] lg:h-[100px]">
                  <Handshake className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="text-base lg:text-[16px]">
                  <div className="text-white font-black leading-none text-4xl lg:text-[50px]">2</div>
                  <div className="text-gray-300 font-bold tracking-wider mt-1 text-lg lg:text-[30px]">BUSINESSES SOLD</div>
                </div>
              </div>
              <div className="flex items-center gap-4 pb-4 border-b border-slate-700/80">
                <div className="rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 text-white w-16 h-16 lg:w-[100px] lg:h-[100px]">
                  <DollarSign className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div>
                  <div className="text-white font-black leading-none text-4xl lg:text-[50px]">$250k</div>
                  <div className="text-gray-300 font-bold tracking-wider mt-1 text-lg lg:text-[30px]">IN FIRST YEAR FEES</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 text-white w-16 h-16 lg:w-[100px] lg:h-[100px]">
                  <BarChart3 className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div>
                  <div className="text-white font-black leading-none text-4xl lg:text-[50px]">$14.7M</div>
                  <div className="text-gray-300 font-bold tracking-wider mt-1 text-lg lg:text-[30px]">ACTIVE LISTINGS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* ------------------------------------------------------------------- */}
          {/* 3. FEATURED STORY 2: FRANK WITT (2-COLUMN DIVIDER CARD) */}
          {/* ------------------------------------------------------------------- */}
          <div className="w-full bg-[#0B1D3A] rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-16">
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left lg:mr-[15px]">
              <img loading="lazy" src={frankImg} className="w-32 h-32 rounded-xl object-cover shrink-0 bg-slate-100" alt="Frank Witt" />
              <div>
                <div className="flex justify-center sm:justify-start mb-1 h-[23px] lg:h-auto lg:-mt-[115px] lg:ml-[100px]">
                  <div className="mt-0 w-[155px] h-[36px] lg:w-auto lg:h-auto">
                    {renderStars("w-5 h-5")}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-[36px] font-bold text-white mb-1 mt-0 ml-0 pt-0">Frank Witt, CPA</h3>
                <p className="text-gray-200 italic mb-1 font-bold text-lg lg:text-[22px]">
                  “Fantastic coaching... I closed deals immediately!”
                </p>
                <p className="text-gray-400 font-bold text-base lg:text-[16px] mt-0">Bloomfield, Michigan</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-32 bg-slate-700 shrink-0"></div>
            
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[#EAB308] font-bold mb-2 text-xl lg:text-[30px]">Trusted by Graduates.</p>
              <h4 className="text-2xl lg:text-[36px] font-bold text-white leading-tight mb-3">
                Over 300 FastStart Students Have Rated the Program
              </h4>
              <div className="flex justify-center sm:justify-start mb-2">
                {renderStars("w-6 h-6")}
              </div>
              <p className="text-gray-300 font-bold text-lg lg:text-[20px]">
                FastStart graduates consistently award the program 5 stars for its real-world effectiveness and unmatched practical training.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 4. ASYMMETRIC 5-COLUMN GRADUATES GRID (STRICT ALIGNMENT) */}
      {/* ------------------------------------------------------------------- */}
      <section className="bg-white py-16">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-slate-300 w-24"></div>
            <h2 className="text-2xl font-black text-[#0B1D3A] tracking-wider">MEET SOME FASTSTART GRADUATES</h2>
            <div className="h-px bg-slate-300 w-24"></div>
          </div>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            
            {/* Top Row: 5 Cards (Span 1) */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm">
              <img loading="lazy" src={josephImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Joseph Tarricone" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"Great course; worth every cent. It gave me the complete blueprint to build my business brokerage career."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Joseph Tarricone</h4>
              <p className="text-xs text-gray-800">Stamford, CT</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm">
              <img loading="lazy" src={jamieImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Jamie Lendway" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"FastStart surpassed my expectations in every way. The practical advice and real-world tools are gold."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Jamie Lendway</h4>
              <p className="text-xs text-gray-800">Chicago, IL</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm">
              <img loading="lazy" src={pennyImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Penny Papaioannou" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"Fantastic for someone entering the business. Easy to digest, highly structured, and simple to implement."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Penny Papaioannou</h4>
              <p className="text-xs text-gray-800">Ocean City, NJ</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm">
              <img loading="lazy" src={marcoImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Marco Trujillo" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"Profound yet practical. Taught me exactly how to find clients, negotiate, and structure business deals."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Marco Trujillo</h4>
              <p className="text-xs text-gray-800">New Mexico</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm">
              <img loading="lazy" src={christopherImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Christopher Davis" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"An invaluable resource for new brokers. I was able to land my first listing within weeks of completing training."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Christopher Davis</h4>
              <p className="text-xs text-gray-800">Atlanta, GA</p>
            </div>
            
            {/* Bottom Row: 3 Standard Cards, 1 Double-Span Featured */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm lg:col-start-1">
              <img loading="lazy" src={nathanielImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Nathaniel James" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"Exceptional program that breaks down complex valuations into manageable, understandable segments."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Nathaniel James</h4>
              <p className="text-xs text-gray-800">Denver, CO</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm">
              <img loading="lazy" src={billImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Bill Nicholson" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"Len Krick's expertise shines through every module. I closed a massive deal using the exact strategies taught."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Bill Nicholson</h4>
              <p className="text-xs text-gray-800">Austin, TX</p>
            </div>
            
            {/* Mary Manilla Featured Card (Span 2) */}
            <div className="lg:col-span-2 bg-[#0B1D3A] rounded-xl p-8 flex items-center gap-6 shadow-xl relative overflow-hidden">
              <img loading="lazy" src={maryImg} className="w-32 h-32 object-cover rounded-lg shrink-0 bg-slate-100" alt="Mary Manilla" />
              <div>
                <div className="mb-1">{renderStars("w-4 h-4")}</div>
                <h4 className="text-2xl font-bold text-white">Mary Manilla, CPA</h4>
                <p className="text-[#EAB308] text-sm mb-3">Portland, OR</p>
                <p className="text-gray-300 text-xs italic leading-relaxed">
                  "Transitioning from accounting to business brokerage seemed daunting, but FastStart gave me the exact roadmap I needed. The valuation section alone is worth ten times the price of admission. Highly recommended."
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm">
              <img loading="lazy" src={edImg} className="w-full h-48 object-cover rounded-lg mb-4 bg-slate-100" alt="Ed Sadler" />
              <div className="mb-2">{renderStars("w-3.5 h-3.5")}</div>
              <p className="text-xs text-[#0B1D3A] font-medium leading-relaxed italic mb-4 flex-1">"Simply the best training available. It covers everything from securing listings to managing complex closings."</p>
              <h4 className="text-[#1D4ED8] font-bold text-sm">Ed Sadler</h4>
              <p className="text-xs text-gray-800">Miami, FL</p>
            </div>
            
          </div>
          
          {/* ------------------------------------------------------------------- */}
          {/* 5. WHY FASTSTART STUDENTS SUCCEED (6-COLUMN) */}
          {/* ------------------------------------------------------------------- */}
          <div className="flex items-center justify-center gap-4 mb-10 mt-16">
            <div className="h-px bg-slate-300 w-24"></div>
            <h2 className="text-2xl font-black text-[#0B1D3A] tracking-wider">WHY FASTSTART STUDENTS SUCCEED</h2>
            <div className="h-px bg-slate-300 w-24"></div>
          </div>
          
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 text-center">
            
            <div className="flex flex-col items-center">
              <Target className="w-10 h-10 text-[#0B1D3A] mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-[#0B1D3A] text-sm mb-2">Step-by-Step Blueprint</h4>
              <p className="text-xs text-gray-600">A clear, actionable path from novice to closing your first deal.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <BookOpen className="w-10 h-10 text-[#0B1D3A] mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-[#0B1D3A] text-sm mb-2">Comprehensive Training</h4>
              <p className="text-xs text-gray-600">Everything you need to know to build confidence and close deals.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Briefcase className="w-10 h-10 text-[#0B1D3A] mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-[#0B1D3A] text-sm mb-2">Practical Tools</h4>
              <p className="text-xs text-gray-600">Templates, checklists, and resources you can use immediately.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-[#0B1D3A] mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-[#0B1D3A] text-sm mb-2">Expert Coaching</h4>
              <p className="text-xs text-gray-600">Learn from successful brokers who guide you every step of the way.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 text-[#FF4500] mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-[#0B1D3A] text-sm mb-2">Proven Results</h4>
              <p className="text-xs text-gray-600">A track record of student success and career transformation.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <UserCheck className="w-10 h-10 text-[#0B1D3A] mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-[#0B1D3A] text-sm mb-2">Support Community</h4>
              <p className="text-xs text-gray-600">Join a network of brokers who support and celebrate your success.</p>
            </div>
            
          </div>
          
          {/* ------------------------------------------------------------------- */}
          {/* 6. FOOTER CTA BOX */}
          {/* ------------------------------------------------------------------- */}
          <div className="w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] lg:w-[calc(100%+6rem)] -mx-4 sm:-mx-8 lg:-mx-12 bg-[#0B1D3A] rounded-none flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 lg:px-20 py-8 md:py-12 mb-16 shadow-xl">
            <div className="flex flex-row items-center text-left">
              <i className="fa-solid fa-trophy text-5xl text-[#EAB308] mr-6"></i>
              <div>
                <h3 className="text-white text-2xl font-black mb-1">COULD YOU BE OUR NEXT SUCCESS STORY?</h3>
                <p className="text-gray-300 text-sm">Your future business brokerage success story starts with your first step.</p>
              </div>
            </div>
            <button className="bg-[#FF4500] hover:bg-orange-600 transition-colors text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg mt-6 md:mt-0 whitespace-nowrap flex items-center justify-center">
              <a href="https://www.FastStart.Training" target="_blank" rel="noopener noreferrer" className="flex items-center">
                GET STARTED TODAY <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
