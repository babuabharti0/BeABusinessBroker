import React, { useState } from 'react';
import logoImg from './images2/BeABusinessBrokerLogo.webp';
import fastStartLogo from './images2/FastStart.webp';
import warrenBuffettImg from './images2/WarrenBuffetQuote.webp';
import accreditationBadge from './images2/AccreditedSeniorBusinessBrokerLogo-New.webp';
import lenKrickImg from "./images2/LenKrick'sPhoto.webp";
import fastStartCourseScreenshot from './images2/FastStartCourseScreenshot.webp';
import bookImg from './images2/book.webp';
import checkImg from './images2/check.webp';
import iconImg from './images2/_Icon.webp';
import bagImg from './images2/bag.webp';
import playImg from './images2/play.webp';
import firstImg from './images2/first.webp';
import calImg from './images2/cal.webp';
import personImg from './images2/person.webp';
import sirImg from './images2/sir.webp';
import magImg from './images2/mag.webp';
import handsImg from './images2/hands.webp';
import stolenImg from './images2/stolen.webp';
import funnelImg from './images2/funnel.webp';
import hdgfImg from './images2/hdgf.webp';
import hornImg from './images2/horn.webp';
import hfhImg from './images2/hfh.webp';
import menImg from './images2/men.webp';
import gfhdImg from './images2/gfhd.webp';
import hfgshImg from './images2/hfgsh.webp';
import gfgsggiImg from './images2/gfgsggi.webp';
import sssssImg from './images2/sssss.webp';

import { PageKey } from './App';
import Navbar from './Navbar';

interface HowDoIBeginPageProps {
  onNavigate?: (page: PageKey) => void;
}

export default function HowDoIBeginPage({ onNavigate }: HowDoIBeginPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-[#F8FAFC] text-slate-800 w-full overflow-x-hidden max-w-full">
      {/* GLOBAL NAVBAR */}
      <Navbar currentPage="begin" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 2: HERO BANNER */}
        <section className="bg-[#02102C] text-white py-14 px-3 sm:px-6 lg:px-8 xl:px-10 relative overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 lg:px-8">
            
            {/* Left Column */}
            <div className="w-full flex-1 min-w-0 whitespace-normal break-words space-y-6 pr-0 lg:pr-10 xl:pr-16 relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[67px] font-black leading-tight tracking-tight text-white">
                <span className="block">FIRMS ARE</span>
                <span className="block">LOOKING FOR YOU</span>
              </h1>
              
              <p className="text-slate-300 text-lg sm:text-[21px] leading-relaxed max-w-2xl">
                No prior business brokerage experience required. FastStart provides the training, tools, systems, and resources needed to build a successful brokerage practice.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <div className="inline-flex flex-col items-start gap-2">
                  <img src={fastStartLogo} alt="FastStart Training" width="120" height="48" loading="eager" fetchPriority="high" className="h-16 w-auto object-contain rounded" />
                  <div className="text-sm text-left">
                    <p className="text-slate-300 font-medium drop-shadow-md">The Business Broker Training Program</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-white/20 self-stretch my-10 shrink-0 mx-4"></div>

            {/* Right Column: Warren Buffett Quote Image */}
            <div className="w-full flex-1 flex justify-center lg:justify-end items-center pl-0 lg:pl-6 xl:pl-10">
              <div className="relative w-full lg:w-full max-w-[473px] xl:max-w-[540px] overflow-hidden z-0 transform scale-[1.3] lg:scale-100 origin-center lg:origin-right">
                <img 
                  src={warrenBuffettImg} 
                  alt="Warren Buffett Quote" 
                  className="w-full h-[189px] lg:h-auto object-contain max-w-[473px] xl:max-w-[540px] border-2 border-amber-400 rounded-xl p-1 shadow-lg" 
                />
              </div>
            </div>
          </div>
        </section>

      {/* SECTION 3: THE FASTSTART ADVANTAGE BAR (5 EQUAL-WIDTH COLUMNS) */}
      <section className="bg-white py-8">
        <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
          <h3 className="text-center font-extrabold text-[25px] uppercase tracking-wider text-[#0B1D3A] mb-6">
            THE FASTSTART ADVANTAGE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                
            <div className="p-4 flex flex-row items-center justify-center gap-3 text-left group">
              <img src={playImg} alt="Video-Narrated Training" className="w-[111px] h-[111px] object-contain group-hover:scale-110 transition-transform shrink-0" />
              <h4 className="font-bold text-[#0B1D3A] text-sm leading-tight">Video-Narrated Training</h4>
            </div>

            <div className="p-4 flex flex-row items-center justify-center gap-3 text-left group">
              <img src={bookImg} alt="Book" className="w-[111px] h-[111px] object-contain group-hover:scale-110 transition-transform shrink-0" />
              <h4 className="font-bold text-[#0B1D3A] text-sm leading-tight">Professional Reference Library</h4>
            </div>

            <div className="p-4 flex flex-row items-center justify-center gap-3 text-left group">
              <img src={bagImg} alt="Business Broker Toolkit" className="w-[111px] h-[111px] object-contain group-hover:scale-110 transition-transform shrink-0" />
              <h4 className="font-bold text-[#0B1D3A] text-sm leading-tight">Business Broker Toolkit</h4>
            </div>

            <div className="p-4 flex flex-row items-center justify-center gap-3 text-left group">
              <img src={iconImg} alt="PricePoint Valuation Software" className="w-[67px] h-[67px] object-contain group-hover:scale-110 transition-transform shrink-0" />
              <h4 className="font-bold text-[#0B1D3A] text-sm leading-tight">PricePoint Valuation Software</h4>
            </div>

            <div className="p-4 flex flex-row items-center justify-center gap-3 text-left group">
              <img src={checkImg} alt="Professional Designation" className="w-[111px] h-[111px] object-contain group-hover:scale-110 transition-transform shrink-0" />
              <h4 className="font-bold text-[#0B1D3A] text-sm leading-tight">Professional Designation</h4>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: TRAINING EXPERIENCE & VIDEO PLAYER */}
      <section className="py-12 px-3 sm:px-6 lg:px-8 xl:px-10 w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Experience Checklist */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl px-6 pt-6 pb-[33px] shadow-sm flex flex-col justify-between h-auto lg:h-[567px] w-full lg:w-[333px] mb-0 mt-0">
            <div className="mr-0 lg:mr-[94px] text-[18px] flex flex-col h-full">
              <h3 className="text-lg font-extrabold text-[#0B1D3A] mb-3 flex items-center gap-2 uppercase tracking-wide">
                <span className="text-[22px]">YOUR TRAINING EXPERIENCE</span>
              </h3>
              <p className="text-[21px] font-bold text-slate-600 leading-relaxed mb-4 mr-0 lg:-mr-[111px] pt-[22px] ml-0 pl-0 pr-0">
                FastStart gives you everything you need to start and succeed as a business broker.
              </p>
              <ul className="text-[17px] font-bold text-slate-700 mr-0 lg:-mr-[74px] pl-[3px] pt-[32px] flex flex-col justify-between flex-1 gap-4 lg:gap-0">
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-[#0B1D3A] mt-0.5 shrink-0"></i>
                  <span>Learn at your own pace</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-[#0B1D3A] mt-0.5 shrink-0"></i>
                  <span>Step-by-step instruction</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-[#0B1D3A] mt-0.5 shrink-0"></i>
                  <span>Real-world examples</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-[#0B1D3A] mt-0.5 shrink-0"></i>
                  <span>Professional broker systems</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-[#0B1D3A] mt-0.5 shrink-0"></i>
                  <span>Accessible 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Block: FastStart Course Screenshot Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between h-auto lg:h-[569px] ml-0 lg:-ml-[170px] mt-0 mr-0 mb-0 lg:-mb-[39px]">
            <div className="p-3 bg-slate-100 flex items-center justify-between border-b border-slate-300 text-xs ml-0 mr-0 mt-0 lg:-mt-[2px] mb-0 pt-[12px] pl-[12px]">
              <span className="font-extrabold text-[#0B1D3A] flex items-center gap-2 text-[17px]">
                Video-Narrated Course Modules
              </span>
            </div>

            <div className="relative w-full h-full flex-1 min-h-[280px] flex items-center justify-center overflow-hidden bg-slate-950 p-1 animate-pulse">
              <img 
                src={fastStartCourseScreenshot} 
                alt="FastStart Course Screenshot" 
                width="500"
                height="300"
                loading="lazy"
                decoding="async"
                className="w-full lg:w-[902px] object-cover rounded-md shadow-md transition-opacity duration-700 ease-in-out opacity-0 ml-0 lg:-mt-[54px] h-[300px] sm:h-[400px] lg:h-[574px]" 
                onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
              />
            </div>
          </div>

          {/* Right Block: Accreditation Badge Card */}
          <div className="lg:col-span-3 bg-[#0B1D3A] text-white border border-slate-700 rounded-xl p-6 shadow-md flex flex-col items-center text-center justify-between ml-0 mt-0 pt-[24px] pb-[24px] mb-0">
            <div className="space-y-4">
              <div className="w-[115px] h-[115px] mx-auto bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-center shadow-inner animate-pulse">
                <img 
                  src={accreditationBadge} 
                  alt="Accredited Senior Business Broker" 
                  width="115" 
                  height="115" 
                  loading="lazy" 
                  decoding="async" 
                  className="max-h-full max-w-full object-contain transition-opacity duration-700 ease-in-out opacity-0" 
                  onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                />
              </div>
              <div>
                <h3 className="font-extrabold text-[23px] text-left text-[#EAB308] uppercase tracking-wide">
                  PROFESSIONAL DESIGNATION INCLUDED
                </h3>
              </div>
              <p className="text-slate-300 text-[20px] text-left leading-relaxed">
                Upon successful completion of FastStart Online Broker Training, graduates earn the Accredited Senior Business Broker designation, demonstrating their commitment to professional excellence and industry standards.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-slate-700/60 mt-4">
              <span className="text-[11px] text-[#EAB308] font-medium">
                Accredited Senior Business Broker
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: HORIZONTAL STEP-BY-STEP TRAINING PATH */}
      <section 
        className="py-14 bg-white border-y border-slate-200 overflow-hidden"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 800px' }}
      >
        <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[33px] md:text-[33px] font-black text-[#0B1D3A] uppercase tracking-wide">
              YOUR STEP-BY-STEP TRAINING PATH
            </h2>
            <div className="w-20 h-1 bg-[#FF4500] mx-auto my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm md:text-base">
              Our proven training system takes you from start to finish—so you can confidently represent buyers and sellers and close successful transactions.
            </p>
          </div>

          {/* Horizontal Timeline Flow */}
          <div className="relative">
            {/* Dotted Connecting Line (Visible on LG screens) */}
            <div className="hidden lg:block absolute top-[18px] left-[5%] right-[5%] h-0.5 border-t-2 border-dashed border-slate-300 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group mt-[-57px]">
                <img src={firstImg} alt="Step 1" className="w-[187px] h-[148px] object-contain mb-3" />
                <h3 className="font-bold text-[#0B1D3A] text-[18px] mt-[-40px] mb-1">Learn the Industry</h3>
                <p className="text-[15px] font-bold text-slate-500 leading-tight mt-[27px]">Understand the business brokerage industry and how it all works.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group mt-[-57px]">
                <img src={calImg} alt="Step 2" className="w-[150px] h-[150px] object-contain mb-3" />
                <h3 className="font-bold text-[#0B1D3A] text-[18px] mt-[-40px] mb-1">Understand Valuation</h3>
                <p className="text-[15px] font-bold text-slate-500 leading-tight mt-[25px]">Learn how to value businesses with confidence using proven methods.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group mt-[-60px]">
                <img src={personImg} alt="Step 3" className="w-[160px] h-[160px] object-contain mb-3" />
                <h3 className="font-bold text-[#0B1D3A] text-[18px] mt-[-45px] mr-0 mb-1">Learn How to Find Listings</h3>
                <p className="text-[15px] font-bold text-slate-500 leading-tight">Discover proven strategies to find, attract, and win seller listings.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center group mt-[-57px]">
                <img src={sirImg} alt="Step 4" className="w-[150px] h-[150px] object-contain mb-3" />
                <h3 className="font-bold text-[#0B1D3A] text-[18px] mt-[-40px] mb-1">Learn Deal Structuring</h3>
                <p className="text-[15px] font-bold text-slate-500 leading-tight mt-[25px]">Structure deals that work for the buyer and the seller.</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center group mt-[-57px]">
                <img src={magImg} alt="Step 5" className="w-[150px] h-[150px] object-contain mb-3" />
                <h3 className="font-bold text-[#0B1D3A] text-[18px] mt-[-40px] mb-1">Manage Due Diligence</h3>
                <p className="text-[15px] font-bold text-slate-500 leading-tight mt-[28px]">Guide the process and help both sides through due diligence.</p>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center text-center group mt-[-57px]">
                <img src={handsImg} alt="Step 6" className="w-[150px] h-[150px] object-contain mb-3" />
                <h3 className="font-bold text-[#0B1D3A] text-[18px] mt-[-40px] mb-1">Close Transactions</h3>
                <p className="text-[15px] font-bold text-slate-500 leading-tight mt-[31px]">Close more deals and build long-term relationships.</p>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col items-center text-center group mt-[-57px]">
                <img src={stolenImg} alt="Step 7" className="w-[150px] h-[150px] object-contain mb-3" />
                <h3 className="font-bold text-[#0B1D3A] text-[18px] mt-[-40px] mb-1">Assist With Transition</h3>
                <p className="text-[15px] font-bold text-slate-500 leading-tight mt-[32px]">Help ensure an orderly transition for continued success.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CAPABILITIES GRID */}
      <section className="py-14 px-6 lg:px-12 w-full mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1D3A] uppercase tracking-wide">
            WHAT YOU WILL BE ABLE TO DO
          </h2>
          <div className="w-16 h-1 bg-[#FF4500] mx-auto my-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9 w-full">
          
          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={funnelImg} alt="Generate Great Listings" className="w-[100px] h-[100px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight mt-[16px]">Generate Great Listings</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={hdgfImg} alt="Value Businesses Professionally" className="w-[100px] h-[100px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight mt-[19px]">Value Businesses Professionally</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={hfhImg} alt="Package Businesses for Sale" className="w-[100px] h-[100px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight mt-[20px]">Package Businesses for Sale</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={hornImg} alt="Market Listings Confidentially" className="w-[120px] h-[120px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight">Market Listings Confidentially</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={menImg} alt="Screen Prospective Buyers" className="w-[120px] h-[120px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight mt-[1px]">Screen Prospective Buyers</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={gfhdImg} alt="Structure Transactions" className="w-[100px] h-[100px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight mt-[21px]">Structure Transactions</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={hfgshImg} alt="Manage Due Diligence" className="w-[120px] h-[120px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight">Manage Due Diligence</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={gfgsggiImg} alt="Coordinate Closings" className="w-[120px] h-[120px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight">Coordinate Closings</h3>
          </div>

          <div className="flex flex-col items-center text-center gap-3 border-r border-slate-200 last:border-r-0 px-2 py-4">
            <img src={sssssImg} alt="Assist With Orderly Turnover" className="w-[120px] h-[120px] object-contain mb-3" />
            <h3 className="font-bold text-[#0B1D3A] text-base leading-tight">Assist With Orderly Turnover</h3>
          </div>

        </div>
      </section>

      {/* SECTION 7: INSTRUCTOR SECTION ("WHY FASTSTART WAS CREATED") */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1D3A] text-center mb-10 uppercase tracking-wide">
            WHY FASTSTART WAS CREATED
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: White Card with Quote */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative flex flex-col justify-between">
              <h3 className="font-extrabold text-[#0B1D3A] mb-2 ml-0 lg:ml-[100px] text-[27px]">
                Why Faststart was created
              </h3>
              <div className="text-[#FF4500] text-7xl font-serif leading-none -mb-4 select-none mt-0">
                “
              </div>
              <blockquote className="text-slate-700 leading-relaxed my-4 relative z-10 font-bold not-italic text-[19px] ml-0 sm:ml-[19px] mr-0 sm:mr-[23px]">
                "After training hundreds of business brokers over several decades, I found that new brokers consistently struggled with the same challenges: valuation, deal structure, due diligence, transaction management, and generate quality listings, priced correctly. FastStart was developed to provide a clear, proven path from beginner to professional business broker—so you can succeed faster with confidence."
              </blockquote>
              <div className="pt-4 border-t border-slate-100 flex justify-end lg:block">
                <p className="text-sm font-bold text-[#0B1D3A] ml-0 lg:ml-[450px]">
                  — Len Krick, MBA
                </p>
              </div>
            </div>

            {/* Right Column: Dark Navy Card with Instructor Credentials */}
            <div className="lg:col-span-6 bg-[#0B1D3A] text-white border border-slate-800 rounded-2xl p-8 shadow-md flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-[216px] h-[288px] shrink-0 rounded-xl overflow-hidden border-2 border-slate-600 shadow-lg relative bg-slate-800 animate-pulse">
                <img 
                  src={lenKrickImg} 
                  alt="Len Krick, MBA" 
                  width="216" 
                  height="288" 
                  loading="lazy" 
                  decoding="async" 
                  className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0" 
                  onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-white tracking-wide uppercase">
                    YOUR INSTRUCTOR: LEN KRICK, MBA
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs md:text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <i className="fa-solid fa-check text-[#FF4500] font-black shrink-0"></i>
                    <span>IBBA Hall of Fame Inductee</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <i className="fa-solid fa-check text-[#FF4500] font-black shrink-0"></i>
                    <span>Certified Business Intermediary (CBI)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <i className="fa-solid fa-check text-[#FF4500] font-black shrink-0"></i>
                    <span>Lifetime M&A Master Intermediary</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <i className="fa-solid fa-check text-[#FF4500] font-black shrink-0"></i>
                    <span>Course Author</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <i className="fa-solid fa-check text-[#FF4500] font-black shrink-0"></i>
                    <span>Over 400 Business Brokers Trained</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <i className="fa-solid fa-check text-[#FF4500] font-black shrink-0"></i>
                    <span>Thousands of Deals Successfully Closed</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ SECTION */}
      <section className="py-14 px-3 sm:px-6 lg:px-8 xl:px-10 w-full mx-auto mt-[33px]">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1D3A] uppercase tracking-wide mt-0 lg:-mt-[35px]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-16 h-1 bg-[#FF4500] mx-auto my-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-y-8 lg:gap-x-0 lg:divide-x divide-slate-200">
          
          <div className="flex flex-col justify-between lg:pr-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-circle-question text-[#0B1D3A] text-lg"></i>
                <h3 className="font-bold text-[#0B1D3A] text-[20px]">Do I need prior experience to become a business broker?</h3>
              </div>
              <p className="text-[16px] text-slate-600 leading-relaxed font-bold mr-[28px]">
                No. FastStart is specifically designed for beginners. We teach you everything you need to know.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:px-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-circle-question text-[#0B1D3A] text-lg"></i>
                <h3 className="font-bold text-[#0B1D3A] text-[20px] mr-0 pr-0 ml-0 h-auto lg:h-[71px]">Can I do this part-time?</h3>
              </div>
              <p className="text-[16px] text-slate-600 leading-relaxed font-bold mt-0 lg:-mt-[15px] mb-0 mr-0 lg:mr-[30px]">
                Yes! Many brokers start part-time and build their business while keeping their current job.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:px-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-circle-question text-[#0B1D3A] text-lg"></i>
                <h3 className="font-bold text-[#0B1D3A] text-[20px] h-auto lg:h-[68px]">Is financing available for the training?</h3>
              </div>
              <p className="text-[16px] text-slate-600 leading-relaxed font-bold h-auto lg:h-[53px] mr-0 lg:mr-[53px] mt-0 lg:-mt-[12px]">
                Yes, we offer flexible payment options to make FastStart affordable.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:pl-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-circle-question text-[#0B1D3A] text-lg"></i>
                <h3 className="font-bold text-[#0B1D3A] text-[20px] h-auto lg:h-[65px]">Will I get ongoing support?</h3>
              </div>
              <p className="text-[16px] text-slate-600 leading-relaxed font-bold h-auto lg:h-[53px] mr-0 lg:mr-[44px] mt-0 lg:-mt-[11px]">
                Absolutely! You'll have access to ongoing resources, updates, and expert guidance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9: FOOTER CTA BANNER */}
      <footer className="bg-[#0B1D3A] text-white py-10 px-3 sm:px-6 lg:px-8 xl:px-10 border-t border-slate-800">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#EAB308]/20 text-amber-400 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-trophy text-4xl text-amber-400"></i>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white">Your New Career Starts Here</h3>
              <p className="text-xs md:text-sm text-[#EAB308] font-medium mt-1">Take the first step toward financial freedom and a rewarding future.</p>
              <p className="text-[11px] text-slate-400 mt-1">No obligation. Just the information you need to get started.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a 
              href="https://faststart.training/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4500] hover:bg-[#e03e00] text-white font-bold px-6 py-3.5 rounded-md uppercase text-xs md:text-sm tracking-wider transition-colors shadow-md inline-flex items-center gap-2"
            >
              <span>LEARN HOW FASTSTART CAN HELP YOU BEGIN -&gt;</span>
            </a>
            <a 
              href="https://faststart.training/" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-[#0B1D3A] text-white font-bold px-6 py-3.5 rounded-md uppercase text-xs md:text-sm tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-envelope text-white mr-2"></i>
              <span>REQUEST INFORMATION</span>
            </a>
          </div>

        </div>
      </footer>
      </main>
    </div>
  );
}
