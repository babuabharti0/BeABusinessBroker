import React, { useState } from 'react';
import logoImg from './images2/BeABusinessBrokerLogo.webp';
import fastStartLogo from './images3/FastStart.webp';
import pricePointLogo from './images3/PricePointLogoWhiteBackground.webp';
import accreditationBadge from './images3/AccreditedSeniorBusinessBrokerLogo-New.webp';
import heroHandshakeImg from './images3/Screenshot2026-06-22161019.webp';

import card1Img from './images3/card1.webp';
import card2Img from './images3/card2.webp';
import card3Img from './images3/card3.webp';
import card4Img from './images3/card4.webp';
import card5Img from './images3/овоаок.webp';
import card6Img from './images3/card6.webp';

import { PageKey } from './App';
import Navbar from './Navbar';

interface FirmsPageProps {
  onNavigate?: (page: PageKey) => void;
}

export default function FirmsPage({ onNavigate }: FirmsPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gracefully handles missing images by rendering a stylized fallback icon box if needed
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackIcon: string) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    if (target.parentElement) {
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = "h-[60px] w-[60px] mx-auto my-2 rounded-lg bg-orange-50 text-[#FF4500] flex items-center justify-center text-3xl font-bold";
      fallbackDiv.innerHTML = `<i class="${fallbackIcon}"></i>`;
      target.parentElement.appendChild(fallbackDiv);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#F4F7FA] text-slate-800 w-full overflow-x-hidden max-w-full">
      {/* GLOBAL NAVBAR */}
      <Navbar currentPage="firms" onNavigate={onNavigate} />

      <main className="w-full">
      {/* SECTION 1: HERO & SURVEY INTRODUCTION */}
      <section className="bg-white border-b border-[#D1D5DB] py-8 px-3 sm:px-6 lg:px-8 xl:px-10 w-full mx-auto">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (60% Width) */}
          <div className="lg:col-span-7 space-y-3">
            <h1 className="text-4xl md:text-6xl font-black text-[#0B1D3A] leading-tight tracking-tight">
              FIRMS ARE LOOKING FOR YOU
            </h1>

            <h2 className="text-2xl font-bold text-[#0B1D3A]">
              What Business Brokerage Firm Owners Told Us
            </h2>

            {/* H3 Survey Badge (NO PILL BOX CONTAINER) */}
            <h3 className="text-lg font-extrabold text-[#0056B3] tracking-wide">
              2026 BUSINESS BROKERAGE RECRUITING & GROWTH SURVEY
            </h3>

            <p className="text-base font-medium text-[#1F2937]">
              Business brokerage office owners across the United States delivered a remarkably consistent message:
            </p>

            <ul className="space-y-2 text-base font-semibold text-[#0B1D3A] pt-1">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-[#FF4500] text-lg shrink-0"></i>
                <span>They want to grow</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-[#FF4500] text-lg shrink-0"></i>
                <span>They need qualified candidates</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-[#FF4500] text-lg shrink-0"></i>
                <span>They value professional training</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-[#FF4500] text-lg shrink-0"></i>
                <span>They are actively seeking professionals who want to build a rewarding career in business brokerage</span>
              </li>
            </ul>

            {/* Italic Closing Box (No border) */}
            <div className="pt-3 text-base font-bold italic text-[#0056B3] space-y-0.5">
              <p>"The opportunity already exists."</p>
              <p>"The question is whether you are prepared to take advantage of it."</p>
            </div>
          </div>

          {/* Right Column (40% Width) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full rounded-lg overflow-hidden bg-slate-200 animate-pulse border border-gray-200 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Hero Handshake"
                width="500"
                height="350"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-cover transition-opacity duration-700 ease-in-out opacity-0"
                onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                onError={(e) => {
                  // Fallback to imported hero screenshot if image asset path isn't present
                  e.currentTarget.src = heroHandshakeImg;
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: "THE INDUSTRY HAS SPOKEN" STAT BAR */}
      <section className="bg-white border-b border-[#D1D5DB] py-8 px-3 sm:px-6 lg:px-8 xl:px-10 w-full mx-auto">
        <div className="w-full mx-auto">
          
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-0.5 bg-[#D1D5DB] flex-1"></div>
            <h2 className="text-2xl font-black text-[#0B1D3A] uppercase tracking-wider text-center shrink-0">
              THE INDUSTRY HAS SPOKEN
            </h2>
            <div className="h-0.5 bg-[#D1D5DB] flex-1"></div>
          </div>

          <div className="space-y-4">
            {/* Row 1 (4 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="bg-white border border-[#D1D5DB] rounded-xl p-4 text-center flex flex-col justify-between items-center shadow-2xs hover:border-[#FF4500] transition-colors">
                <div className="text-4xl font-black text-[#FF4500]">63%</div>
                <i className="fa-solid fa-chart-line text-[#0B152C] text-[45px] my-2"></i>
                <p className="text-xs font-bold uppercase text-[#0B1D3A] leading-tight">WANT TO GROW</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#D1D5DB] rounded-xl p-4 text-center flex flex-col justify-between items-center shadow-2xs hover:border-[#FF4500] transition-colors">
                <div className="text-4xl font-black text-[#FF4500]">80%</div>
                <i className="fa-solid fa-users text-[#0B152C] text-[45px] my-2"></i>
                <p className="text-xs font-bold uppercase text-[#0B1D3A] leading-tight">RECRUITING DIFFICULT</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#D1D5DB] rounded-xl p-4 text-center flex flex-col justify-between items-center shadow-2xs hover:border-[#FF4500] transition-colors">
                <div className="text-4xl font-black text-[#FF4500]">38%</div>
                <i className="fa-solid fa-graduation-cap text-[#0B152C] text-[45px] my-2"></i>
                <p className="text-xs font-bold uppercase text-[#0B1D3A] leading-tight">TRAINING CHALLENGE</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#D1D5DB] rounded-xl p-4 text-center flex flex-col justify-between items-center shadow-2xs hover:border-[#FF4500] transition-colors">
                <div className="text-4xl font-black text-[#FF4500]">64%</div>
                <i className="fa-solid fa-user-tie text-[#0B152C] text-[45px] my-2"></i>
                <p className="text-xs font-bold uppercase text-[#0B1D3A] leading-tight">PREFERRED BACKGROUNDS: CRE, CONSULTING & COACHING</p>
              </div>
            </div>

            {/* Row 2 (3 Cards Below, Centered Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-0 w-full mx-auto">
              {/* Card 5 */}
              <div 
                className="bg-white border border-[#D1D5DB] rounded-xl p-4 text-center flex flex-col justify-between items-center shadow-2xs hover:border-[#FF4500] transition-colors lg:ml-[160px] lg:-mr-[60px]"
              >
                <div className="text-4xl font-black text-[#FF4500]">74%</div>
                <i className="fa-solid fa-sack-dollar text-[#0B152C] text-[45px] my-2"></i>
                <p className="text-xs font-bold uppercase text-[#0B1D3A] leading-tight">INCOME POTENTIAL $50K – $250K FIRST YEAR</p>
              </div>

              {/* Card 6 */}
              <div 
                className="bg-white border border-[#D1D5DB] rounded-xl p-4 text-center flex flex-col justify-between items-center shadow-2xs hover:border-[#FF4500] transition-colors lg:mx-[60px]"
              >
                <div className="text-4xl font-black text-[#FF4500]">69%</div>
                <i className="fa-solid fa-award text-[#0B152C] text-[45px] my-2"></i>
                <p className="text-xs font-bold uppercase text-[#0B1D3A] leading-tight">PREFER TRAINING</p>
              </div>

              {/* Card 7 */}
              <div 
                className="bg-[#0B152C] border border-[#0B152C] rounded-xl p-4 text-center flex flex-col justify-between items-center shadow-2xs transition-colors lg:-ml-[60px] lg:mr-[160px]"
              >
                <div className="text-4xl font-black text-[#FF4500]">86%</div>
                <i className="fa-solid fa-handshake text-white text-[45px] my-2"></i>
                <p className="text-xs font-bold uppercase text-white leading-tight">WANT REFERRALS TO TRAINED CANDIDATES</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: 6 DETAILED INSIGHT CARDS (3-COLUMN GRID) */}
      <section className="py-8 px-3 sm:px-6 lg:px-8 xl:px-10 w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8 w-full mx-auto">
          
          {/* Card 1 */}
          <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[280px] flex flex-row justify-between items-stretch">
            <div className="relative z-10 w-3/5 sm:w-[62%] pr-4 flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-md bg-[#FF4500] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    1
                  </span>
                  <span className="text-4xl font-black text-[#FF4500]">63%</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D3A] uppercase tracking-wide">
                  FIRMS WANT TO GROW
                </h3>
                <p className="text-slate-700 font-bold text-sm leading-relaxed">
                  Want to add additional business brokers. Nearly two-thirds of respondents plan to add between one and five additional brokers to their organizations.
                </p>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-2/5 sm:w-[38%] h-full z-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="FIRMS WANT TO GROW" 
                className="w-full h-full object-cover object-right" 
                onError={(e) => { e.currentTarget.src = card1Img; }}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[280px] flex flex-row justify-between items-stretch">
            <div className="relative z-10 w-3/5 sm:w-[62%] pr-4 flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-md bg-[#FF4500] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    2
                  </span>
                  <span className="text-4xl font-black text-[#FF4500]">80%</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D3A] uppercase tracking-wide">
                  GOOD CANDIDATES ARE HARD TO FIND
                </h3>
                <p className="text-slate-700 font-bold text-sm leading-relaxed">
                  Say recruiting is difficult. Most office owners report that finding qualified candidates is difficult, very difficult, or extremely difficult.
                </p>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-2/5 sm:w-[38%] h-full z-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="GOOD CANDIDATES ARE HARD TO FIND" 
                className="w-full h-full object-cover object-right" 
                onError={(e) => { e.currentTarget.src = card2Img; }}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[280px] flex flex-row justify-between items-stretch">
            <div className="relative z-10 w-3/5 sm:w-[62%] pr-4 flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-md bg-[#FF4500] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    3
                  </span>
                  <span className="text-4xl font-black text-[#FF4500]">38%</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D3A] uppercase tracking-wide">
                  TRAINING IS THEIR BIGGEST CHALLENGE
                </h3>
                <p className="text-slate-700 font-bold text-sm leading-relaxed">
                  Say finding and training new brokers is their biggest challenge. Many firms want to grow but lack the time and resources necessary to properly train new associates.
                </p>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-2/5 sm:w-[38%] h-full z-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="TRAINING IS THEIR BIGGEST CHALLENGE" 
                className="w-full h-full object-cover object-right" 
                onError={(e) => { e.currentTarget.src = card3Img; }}
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[280px] flex flex-row justify-between items-stretch">
            <div className="relative z-10 w-3/5 sm:w-[62%] pr-4 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-md bg-[#FF4500] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    4
                  </span>
                  <span className="text-4xl font-black text-[#FF4500]">64%</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D3A] uppercase tracking-wide leading-snug">
                  WHERE DO SUCCESSFUL BUSINESS BROKERS COME FROM?
                </h3>
                <ul className="space-y-1 text-xs font-bold text-slate-700 pt-1">
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#FF4500]"></i>
                    <span>Commercial Real Estate Professionals</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#FF4500]"></i>
                    <span>Business Consultants</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#FF4500]"></i>
                    <span>Business Coaches</span>
                  </li>
                </ul>

                <div className="relative z-20 bg-[#0B1D3A] text-white rounded-lg p-3 space-y-1 mt-2 shadow-md">
                  <h4 className="font-bold text-xs text-[#EAB308] uppercase">IS THIS YOU?</h4>
                  <p className="text-xs font-bold text-slate-200 leading-relaxed">
                    If you currently work in Commercial Real Estate, Business Consulting, or Business Coaching, you may already possess many of the skills needed to build a successful business brokerage practice.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-2/5 sm:w-[38%] h-full z-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="WHERE DO SUCCESSFUL BUSINESS BROKERS COME FROM?" 
                className="w-full h-full object-cover object-right" 
                onError={(e) => { e.currentTarget.src = card4Img; }}
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[280px] flex flex-row justify-between items-stretch">
            <div className="relative z-10 w-3/5 sm:w-[62%] pr-4 flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-md bg-[#FF4500] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    5
                  </span>
                  <span className="text-4xl font-black text-[#FF4500]">74%</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D3A] uppercase tracking-wide">
                  STRONG INCOME POTENTIAL
                </h3>
                <p className="text-slate-700 font-bold text-sm leading-relaxed">
                  Expect first-year income between $50,000 and $250,000. While no income can be guaranteed, office owners clearly believe motivated new brokers can generate meaningful income during their first year.
                </p>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-2/5 sm:w-[38%] h-full z-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="STRONG INCOME POTENTIAL" 
                className="w-full h-full object-cover object-right" 
                onError={(e) => { e.currentTarget.src = card5Img; }}
              />
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[280px] flex flex-row justify-between items-stretch">
            <div className="relative z-10 w-3/5 sm:w-[62%] pr-4 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-md bg-[#FF4500] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    6
                  </span>
                  <span className="text-4xl font-black text-[#FF4500]">69%</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D3A] uppercase tracking-wide">
                  TRAINING GIVES YOU AN EDGE
                </h3>
                <p className="text-slate-700 font-bold text-sm leading-relaxed">
                  Prefer candidates who have completed professional training. Nearly seven out of ten office owners said they would give preferential consideration to trained candidates.
                </p>
                <ul className="space-y-1 text-xs font-bold text-slate-700 pt-1">
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#FF4500]"></i>
                    <span>Faster productivity</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#FF4500]"></i>
                    <span>Reduced training burden</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#FF4500]"></i>
                    <span>Better understanding of the profession</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <i className="fa-solid fa-check text-[#FF4500]"></i>
                    <span>Demonstrated commitment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-2/5 sm:w-[38%] h-full z-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="TRAINING GIVES YOU AN EDGE" 
                className="w-full h-full object-cover object-right" 
                onError={(e) => { e.currentTarget.src = card6Img; }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: KEY FINDING BANNER ("86%") */}
      <section className="w-full bg-[#0B1D3A] text-white py-8 px-6 lg:px-12">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-full bg-[#FF4500]/20 text-[#FF4500] flex items-center justify-center shrink-0 text-3xl border border-[#FF4500]/30">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <div className="text-6xl font-extrabold text-[#FF4500]">
              86%
            </div>
          </div>

          <div className="space-y-1 text-center lg:text-left flex-1">
            <h3 className="text-xl font-bold text-[#FF4500] uppercase tracking-wide">
              THE MOST IMPORTANT FINDING: WANT REFERRALS TO TRAINED CANDIDATES
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              Business brokerage firms overwhelmingly indicated that they would like to be contacted if qualified, trained candidates became available.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-700 rounded-lg p-4 text-xs space-y-1 text-slate-200 max-w-sm shrink-0">
            <p className="text-sm font-bold text-[#EAB308] uppercase">WILL YOU BE READY?</p>
            <p className="font-bold leading-relaxed">
              Think about that. Business brokerage firms are literally asking for referrals to trained candidates. The demand already exists. The opportunity already exists.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: SOLUTION GRID ("FASTSTART WAS CREATED TO SOLVE THIS PROBLEM") */}
      <section className="py-12 bg-white border-b border-[#D1D5DB]">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left (40% Width) */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl font-black text-[#0B1D3A] uppercase tracking-wide">
                FASTSTART WAS CREATED TO SOLVE THIS PROBLEM
              </h2>
              <div className="w-16 h-1 bg-[#FF4500] rounded-full"></div>
              <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
                Many firms want to grow. Many people want a rewarding new career. The missing link is professional preparation. FastStart Online Broker Training™ was developed to provide aspiring business brokers with the knowledge, tools, systems, and confidence needed to enter the profession prepared to succeed.
              </p>
            </div>

            {/* Right (60% Width - 3 Cards) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Column 1 */}
              <div className="bg-[#F4F7FA] border border-[#D1D5DB] rounded-xl p-4 shadow-xs flex flex-col justify-between space-y-3">
                <div>
                  <div className="h-16 flex items-center justify-center p-2 bg-white rounded-lg border border-[#D1D5DB] mb-3">
                    <img loading="lazy" src={fastStartLogo} alt="FastStart Logo" className="h-12 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#0B1D3A] text-xs text-center uppercase mb-2">FastStart Online Training™</h3>
                  <ul className="space-y-1.5 font-bold text-xs text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Complete online video training</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Comprehensive reference library</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Turnkey broker toolkit</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>24/7 self-paced access</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="bg-[#F4F7FA] border border-[#D1D5DB] rounded-xl p-4 shadow-xs flex flex-col justify-between space-y-3">
                <div>
                  <div className="h-16 flex items-center justify-center p-2 bg-white rounded-lg border border-[#D1D5DB] mb-3">
                    <img loading="lazy" src={pricePointLogo} alt="PricePoint Logo" className="h-12 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#0B1D3A] text-xs text-center uppercase mb-2">PricePoint Valuation Software</h3>
                  <ul className="space-y-1.5 font-bold text-xs text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Professional valuation software</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Multiple valuation methods</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Easy-to-use input forms</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Client-ready report generation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="bg-[#F4F7FA] border border-[#D1D5DB] rounded-xl p-4 shadow-xs flex flex-col justify-between space-y-3">
                <div>
                  <div className="h-16 flex items-center justify-center p-2 bg-white rounded-lg border border-[#D1D5DB] mb-3">
                    <img loading="lazy" src={accreditationBadge} alt="Accredited Senior Business Broker" className="h-16 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#0B1D3A] text-xs text-center uppercase mb-2">Accredited Senior Business Broker</h3>
                  <ul className="space-y-1.5 font-bold text-xs text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Accredited Senior Business Broker designation</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Industry-recognized credential</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <i className="fa-solid fa-check text-[#FF4500]"></i>
                      <span>Demonstrates professional commitment</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: METHODOLOGY & FOOTER CTA */}
      <section className="py-10 px-3 sm:px-6 lg:px-8 xl:px-10 w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Bottom Left: Methodology */}
          <div className="bg-white border border-[#D1D5DB] rounded-xl p-5 text-xs text-slate-600 leading-relaxed shadow-2xs lg:w-1/3 flex flex-col justify-center">
            <h4 className="font-extrabold text-[#0B1D3A] uppercase mb-1 tracking-wider" style={{ fontSize: '20px' }}>
              SURVEY METHODOLOGY
            </h4>
            <p style={{ fontWeight: 'bold', fontSize: '15px' }}>
              The 2026 Business Brokerage Recruiting & Growth Survey was distributed to business brokerage office owners and managers throughout the United States. Results reflect the responses received as of June 2026. Findings provide valuable insights into industry hiring practices, recruiting challenges, training preferences, and first-year broker income expectations.
            </p>
          </div>

          {/* Full Footer Banner */}
          <footer className="lg:w-2/3 w-full bg-[#0B1D3A] text-white rounded-2xl py-8 px-6 md:px-10 border border-slate-800 shadow-xl flex items-center">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:text-left w-full">
            
            <div className="flex items-center gap-4">
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Opportunity Door" 
                className="h-14 w-auto object-contain shrink-0" 
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = "w-12 h-12 rounded-full bg-[#EAB308]/20 text-amber-400 flex items-center justify-center shrink-0";
                    fallbackDiv.innerHTML = `<i class="fa-solid fa-door-open text-2xl text-amber-400"></i>`;
                    target.parentElement.insertBefore(fallbackDiv, target);
                  }
                }}
              />
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  OPPORTUNITY IS KNOCKING. You Owe It To Yourself To Open The Door.
                </h3>
                <p className="text-slate-400 mt-0.5" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                  No obligation. Just the information you need to get started.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a 
                href="https://faststart.training/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4500] hover:bg-[#e03e00] text-white font-bold px-6 py-3 rounded-md uppercase text-xs md:text-sm tracking-wider transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>LEARN ABOUT FASTSTART ONLINE TRAINING -&gt;</span>
              </a>
            </div>
          </div>
        </footer>
        </div>
      </section>
      </main>
    </div>
  );
}
