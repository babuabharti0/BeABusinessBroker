import React, { useState } from 'react';
import { CreditCard, Phone, Mail } from 'lucide-react';
import logoImgFallback from './images/BeABusinessBrokerLogo.webp';
import lenKrickPhotoFallback from "./images/LenKrick'sPhoto.webp";
import fastStartLogoFallback from './images3/FastStart.webp';
import ibbaLogoFallback from './images/IBBALogo.webp';
import pricePointLogoFallback from './images3/PricePointLogoWhiteBackground.webp';
import accreditedLogoFallback from './images3/AccreditedSeniorBusinessBrokerLogo-New.webp';
import videoFrameFallback from './images2/FastStartCourseScreenshot.webp';
import pricePointReportCoverFallback from './images4/PricePointReportCoverScreenshot.webp';

import { PageKey } from './App';
import Navbar from './Navbar';

interface TrainingPageProps {
  onNavigate?: (page: PageKey) => void;
}

export default function TrainingPage({ onNavigate }: TrainingPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-[#F8FAFC] text-slate-800 w-full overflow-x-hidden max-w-full">
      
      {/* GLOBAL NAVBAR */}
      <Navbar currentPage="training" onNavigate={onNavigate} />

      <main className="w-full">
      {/* SECTION 1: HERO BANNER (SPLIT DARK & WHITE CONTAINER) */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
          
          {/* Left Dark Navy Container */}
          <div className="lg:col-span-7 bg-[#0B1D3A] text-white p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                The <span className="text-[#FF4500]">Only</span> Comprehensive Online Business Broker Training Program
              </h1>
              <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed mt-4">
                The complete career development system for aspiring business brokers — practical, flexible and built for real-world results.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm md:text-base font-semibold text-slate-100">
                <span className="text-[#FF4500] font-black text-lg">✓</span>
                <span>No Prior Experience Required</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base font-semibold text-slate-100">
                <span className="text-[#FF4500] font-black text-lg">✓</span>
                <span>Learn at Your Own Pace</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base font-semibold text-slate-100">
                <span className="text-[#FF4500] font-black text-lg">✓</span>
                <span>Affordable Investment</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base font-semibold text-slate-100">
                <span className="text-[#FF4500] font-black text-lg">✓</span>
                <span>Financing Available</span>
              </li>
            </ul>
          </div>

          {/* Right White Card Frame */}
          <div className="lg:col-span-5 bg-[#0B1D3A] p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center justify-center text-center space-y-6 w-full h-full">
              <div className="relative mb-3 flex justify-center w-full">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="FastStart Logo" 
                  width="800"
                  height="320"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full max-w-full md:max-w-[800px] h-auto object-contain transition-opacity duration-700 ease-in-out opacity-0"
                  onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); }}
                  onError={(e) => { e.currentTarget.src = fastStartLogoFallback; }} 
                />
              </div>
              
              <p className="text-lg font-bold text-[#0B1D3A] leading-snug max-w-xs">
                The <span className="text-[#FF4500]">Only</span> Comprehensive Online Business Broker Training Program
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: AUTHOR / DEVELOPER PROFILE CARD */}
      <section className="w-full my-8">
        <div className="bg-white border-y border-slate-200 py-8 px-3 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-36 h-36 shrink-0 bg-slate-200 rounded-xl overflow-hidden animate-pulse border border-slate-200 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Len Krick, MBA" 
              width="144"
              height="144"
              loading="lazy"
              decoding="async"
              className="w-36 h-36 rounded-xl object-cover scale-100 -translate-y-[2.5%] transition-all duration-700 ease-in-out opacity-0"
              onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
              onError={(e) => { e.currentTarget.src = lenKrickPhotoFallback; }} 
            />
          </div>

          <div className="flex-1 text-center md:text-left space-y-1">
            <h3 className="text-2xl font-bold text-[#0B1D3A]">
              Developed by Len Krick, MBA
            </h3>
            <p 
              className="text-sm text-slate-600 leading-relaxed max-w-[610px] w-full mx-auto md:mx-0"
              style={{ fontWeight: 'bold', fontSize: '17px' }}
            >
              IBBA Hall of Fame Inductee • Former Chairman of the International Business Brokers Association (IBBA) Education Committee • Developer of FastStart Online Broker Training™ and PricePoint™ Business Pricing & Analysis Software.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="IBBA Member" 
              className="h-10 object-contain lg:mr-[100px] w-auto"
              onError={(e) => { e.currentTarget.src = ibbaLogoFallback; }} 
            />
            <button 
              onClick={() => onNavigate?.('about')} 
              className="bg-[#0B1D3A] hover:bg-[#112B54] text-white px-5 py-3 rounded-lg font-bold uppercase text-[14px] tracking-wider transition-colors shadow-xs cursor-pointer w-full sm:w-auto text-center"
            >
              LEARN MORE ABOUT LEN KRICK
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: "EVERYTHING INCLUDED" CORE OFFER GRID */}
      <section className="my-10 w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Title Divider */}
        <div className="flex items-center justify-center gap-4 mb-10" style={{ marginLeft: '100px', marginRight: '100px' }}>
          <div className="h-0.5 bg-[#FF4500] flex-1"></div>
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1D3A] tracking-wider uppercase text-center px-4" style={{ fontWeight: 'bold', fontSize: '16px' }}>
            EVERYTHING INCLUDED
          </h2>
          <div className="h-0.5 bg-[#0B1D3A] flex-1"></div>
        </div>

        {/* Top 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: FastStart Online Broker Training™ */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="bg-[#0B1D3A] text-white text-center py-2.5 rounded-t-xl font-bold text-lg tracking-wide uppercase">
              FastStart Online Broker Training™
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Video Course Player Frame" 
                className="w-full h-auto rounded-md my-2 border border-slate-200 shadow-xs object-cover"
                style={{ height: '563px' }}
                onError={(e) => { e.currentTarget.src = videoFrameFallback; }} 
              />

              <ul className="space-y-2.5 text-sm font-semibold text-slate-700 pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#FF4500] font-black text-base">✓</span>
                  <span>Video-narrated course modules</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#FF4500] font-black text-base">✓</span>
                  <span>Real transaction examples</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#FF4500] font-black text-base">✓</span>
                  <span>Learn at your own pace</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#FF4500] font-black text-base">✓</span>
                  <span>Perpetual access to course content</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: PricePoint™ Valuation Software */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="bg-[#0B1D3A] text-white text-center py-2.5 rounded-t-xl font-bold text-lg tracking-wide uppercase">
              PricePoint™ Valuation Software
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center flex-1">
                {/* Left Sub-Column: Report Cover Screenshot */}
                <div className="sm:col-span-7 flex items-center justify-center bg-white p-2 rounded-lg border border-slate-200/80 h-full min-h-[500px] overflow-hidden">
                  <img loading="lazy" src='src/images4/PricePointReportCoverScreenshot.webp' 
                    alt="PricePoint Valuation Report Cover" 
                    className="max-h-[720px] w-full h-[538.438px] -ml-[2px] object-contain rounded border border-slate-200 shadow-md transform scale-[1.14] origin-center transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = pricePointReportCoverFallback; }} 
                  />
                </div>
                
                {/* Right Sub-Column: Logo, Description, Checklist, and Button */}
                <div className="sm:col-span-5 flex flex-col justify-between h-full space-y-3">
                  <div>
                    <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="PricePoint Logo" 
                      className="object-contain mb-2 max-w-full sm:max-w-[300px] h-auto max-h-[100px]"
                      onError={(e) => { e.currentTarget.src = pricePointLogoFallback; }} 
                    />
                    <p 
                      className="text-sm sm:text-base lg:text-[20px] font-bold text-slate-600 leading-relaxed mt-8 lg:mt-[80px]"
                    >
                      Included with enrollment, PricePoint™ helps business brokers analyze financial statements, estimate value, and produce professional analysis and industry-standard reports.
                    </p>
                  </div>

                  <ul 
                    className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-100"
                    style={{ fontWeight: 'bold', fontSize: '16px' }}
                  >
                    <li className="flex items-center gap-2">
                      <span className="text-[#FF4500] font-black">✓</span>
                      <span>Built-in financial analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#FF4500] font-black">✓</span>
                      <span>Industry-standard reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#FF4500] font-black">✓</span>
                      <span>Proven pricing methodology</span>
                    </li>
                  </ul>

                  <a 
                    href="https://www.PricePointValuation.Com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#0B1D3A] text-white w-full py-2.5 text-center rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#112B54] transition-colors cursor-pointer inline-block"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: 3 MIDDLE FEATURE CARDS */}
      <section className="my-8 w-full px-4 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature Card 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-white text-xl font-black flex items-center justify-center mx-auto shadow-xs">
                500+
              </div>
              <h3 className="text-lg font-bold text-[#0B1D3A] uppercase" style={{ fontSize: '20px' }}>
                Business Brokerage Reference Library
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                More than 500 documents, forms, checklists and resources.
              </p>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-3 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Engagement agreements</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Buyer qualification forms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Due diligence resources</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Marketing resources</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Much more</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0B1D3A] text-[#FF4500] text-2xl font-black flex items-center justify-center mx-auto shadow-xs">
                ✓
              </div>
              <h3 className="text-lg font-bold text-[#0B1D3A] uppercase" style={{ fontSize: '20px' }}>
                Develop Your Personal Success Plan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Students build a custom Success Plan based on income goals, available time, existing skills and target market.
              </p>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-3 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Income goals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Available time</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Existing skills</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Target market strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Action plan & milestones</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-center">
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Accredited Senior Business Broker Designation" 
                className="h-16 mx-auto mb-2 object-contain scale-[1.3]"
                onError={(e) => { e.currentTarget.src = accreditedLogoFallback; }} 
              />
              <h3 className="text-lg font-bold text-[#0B1D3A] uppercase" style={{ fontSize: '20px' }}>
                Earn A Professional Designation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                Upon completion, students earn the Accredited Senior Business Broker designation.
              </p>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 pt-3 border-t border-slate-100" style={{ fontSize: '14px', fontWeight: 'bold' }}>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Accredited Senior Business Broker</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Completion credential</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Professional recognition</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold">✓</span>
                <span>Enhances credibility</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 5: "THE FASTSTART CAREER DEVELOPMENT SYSTEM" PROCESS BAR */}
      <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 my-8">
        <div className="bg-[#0B1D3A] text-white py-6 px-4 rounded-xl text-center shadow-md">
          <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">
            The FastStart Career Development System
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Step 1 */}
            <div className="bg-white text-[#0B1D3A] rounded-xl p-3.5 text-center shadow-sm w-full md:w-auto md:flex-1 space-y-0.5">
              <div className="text-xs text-[#FF4500] font-black uppercase tracking-wider">Training</div>
              <div className="font-bold text-sm">FastStart</div>
            </div>

            <div className="text-[#FF4500] font-black text-xl">
              <span className="hidden md:inline">→</span>
              <span className="md:hidden inline">↓</span>
            </div>

            {/* Step 2 */}
            <div className="bg-white text-[#0B1D3A] rounded-xl p-3.5 text-center shadow-sm w-full md:w-auto md:flex-1 space-y-0.5">
              <div className="text-xs text-[#FF4500] font-black uppercase tracking-wider">Software</div>
              <div className="font-bold text-sm">PricePoint</div>
            </div>

            <div className="text-[#FF4500] font-black text-xl">
              <span className="hidden md:inline">→</span>
              <span className="md:hidden inline">↓</span>
            </div>

            {/* Step 3 */}
            <div className="bg-white text-[#0B1D3A] rounded-xl p-3.5 text-center shadow-sm w-full md:w-auto md:flex-1 space-y-0.5">
              <div className="text-xs text-[#FF4500] font-black uppercase tracking-wider">Resources</div>
              <div className="font-bold text-sm">500+ Library</div>
            </div>

            <div className="text-[#FF4500] font-black text-xl">
              <span className="hidden md:inline">→</span>
              <span className="md:hidden inline">↓</span>
            </div>

            {/* Step 4 */}
            <div className="bg-white text-[#0B1D3A] rounded-xl p-3.5 text-center shadow-sm w-full md:w-auto md:flex-1 space-y-0.5">
              <div className="text-xs text-[#FF4500] font-black uppercase tracking-wider">Planning</div>
              <div className="font-bold text-sm">Success Plan</div>
            </div>

            <div className="text-[#FF4500] font-black text-xl">
              <span className="hidden md:inline">→</span>
              <span className="md:hidden inline">↓</span>
            </div>

            {/* Step 5 */}
            <div className="bg-white text-[#0B1D3A] rounded-xl p-3.5 text-center shadow-sm w-full md:w-auto md:flex-1 space-y-0.5">
              <div className="text-xs text-[#FF4500] font-black uppercase tracking-wider">Designation</div>
              <div className="font-bold text-sm">Senior Broker</div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: "WHY FASTSTART IS DIFFERENT" (5 NUMBERED CARDS) */}
      <section className="my-10 w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <h2 className="text-2xl font-black text-[#0B1D3A] text-center uppercase tracking-wider mb-6">
          WHY FASTSTART IS DIFFERENT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs flex flex-col items-center justify-start space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-white font-black text-lg flex items-center justify-center shadow-xs">
              1
            </div>
            <div style={{ marginTop: '0px', fontSize: '18px' }}>
              <span className="font-bold text-[#0B1D3A] uppercase tracking-wide block" style={{ fontSize: '18px', height: '130px', marginTop: '0px' }}>
                UNIQUE
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-bold" style={{ fontWeight: 'bold', marginTop: '0px', marginBottom: '0px', paddingTop: '0px', fontSize: '19px' }}>
              The only comprehensive online business broker training program.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs flex flex-col items-center justify-start space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-white font-black text-lg flex items-center justify-center shadow-xs">
              2
            </div>
            <div>
              <span className="font-bold text-[#0B1D3A] uppercase tracking-wide block" style={{ fontSize: '18px', height: '114px' }}>
                AFFORDABLE
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-bold" style={{ fontWeight: 'bold', fontSize: '14px' }}>
              <span style={{ fontWeight: 'bold' }}>
                An incredible value compared with starting other businesses.
              </span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs flex flex-col items-center justify-start space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-white font-black text-lg flex items-center justify-center shadow-xs">
              3
            </div>
            <div>
              <span className="font-bold text-[#0B1D3A] uppercase tracking-wide block" style={{ fontSize: '18px', height: '80px', marginRight: '-13px' }}>
                PRACTICAL
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-bold" style={{ fontWeight: 'bold', fontSize: '13px' }}>
              Real-world transaction examples and tools you can use.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs flex flex-col items-center justify-start space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-white font-black text-lg flex items-center justify-center shadow-xs">
              4
            </div>
            <div>
              <span className="font-bold text-[#0B1D3A] uppercase tracking-wide block" style={{ fontSize: '18px', height: '75px' }}>
                FLEXIBLE
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-bold" style={{ fontWeight: 'bold', fontSize: '18px', marginRight: '-14px', marginLeft: '-18px' }}>
              Learn at your own pace from anywhere.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs flex flex-col items-center justify-start space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-white font-black text-lg flex items-center justify-center shadow-xs">
              5
            </div>
            <div>
              <span className="font-bold text-[#0B1D3A] uppercase tracking-wide block" style={{ fontSize: '18px', height: '135px' }}>
                COMPLETE
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed" style={{ fontWeight: 'bold', fontSize: '18px' }}>
              Training + software + resources + planning + designation.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 7: VALUE & FINANCING SECTION (2 COLUMNS) */}
      <section className="my-10 w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column ("Incredible Value") */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5 shadow-sm flex flex-col justify-between space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#0B1D3A] leading-snug">
              Incredible Value - <span className="text-[#FF4500]">Everything Included in One Program</span>
            </h3>

            <ul className="space-y-1 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-[#FF4500] font-bold text-base">✓</span>
                <span>Online training modules</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF4500] font-bold text-base">✓</span>
                <span>PricePoint software</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF4500] font-bold text-base">✓</span>
                <span>Reference library</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF4500] font-bold text-base">✓</span>
                <span>Success Plan</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF4500] font-bold text-base">✓</span>
                <span>Accredited Senior Business Broker designation</span>
              </li>
              <li className="flex items-center gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <span>Perpetual access • No hidden fees</span>
              </li>
            </ul>
          </div>

          {/* Right Column ("Affordable Financing Available") */}
          <div className="bg-[#0B1D3A] text-white p-4 md:p-5 rounded-2xl shadow-md flex flex-col justify-between space-y-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2">
                Affordable Financing Available - Invest In Your Future Career Today
              </h3>
              <ul className="space-y-1 text-sm font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4500] font-bold text-base">✓</span>
                  <span>PayPal Pay Later</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4500] font-bold text-base">✓</span>
                  <span>Credit Card Installment Payments</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-white rounded-lg p-2 md:p-3 my-2 flex items-center justify-around divide-x divide-gray-300 text-gray-800 shadow-sm">
                {/* Left Side (PayPal Option) */}
                <div className="flex items-center space-x-2 px-2 sm:px-4">
                  <span className="font-black text-[#003087] text-lg md:text-xl italic tracking-tighter">
                    Pay<span className="text-[#0079C1]">Pal</span>
                  </span>
                  <span className="font-extrabold text-[#003087] tracking-tight text-xs sm:text-sm uppercase">
                    PAY LATER
                  </span>
                </div>

                {/* Right Side (Credit Card Option) */}
                <div className="flex items-center space-x-2 px-2 sm:px-4">
                  <CreditCard className="text-gray-700 w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  <span className="font-bold text-gray-800 text-xs tracking-wide">
                    CREDIT CARD <span className="block text-[10px] text-gray-500 font-normal">INSTALLMENT PAYMENTS</span>
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-2 text-center">
                Start now and spread the investment over convenient monthly payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOOTER CTA & BRAND FOOTER */}
      <section className="mt-10 w-full">
        {/* Dark Navy CTA Banner */}
        <div className="bg-[#0B1D3A] text-white h-auto lg:h-[99px] py-4 lg:py-0 px-3 sm:px-6 lg:px-8 xl:px-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full">
          <h3 className="text-base md:text-xl lg:text-2xl font-extrabold text-white text-center md:text-left w-full leading-tight">
            Ready To Begin? Your new business brokerage career starts with the first step.
          </h3>

          <div className="flex items-center justify-end gap-3 md:gap-4 shrink-0">
            <a 
              href="https://faststart.training/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FF4500] hover:bg-[#e04100] text-white font-extrabold px-[47px] py-[10px] m-0 rounded-lg text-xs md:text-sm uppercase tracking-wide transition-all shadow-md cursor-pointer inline-block text-center whitespace-nowrap"
            >
              ENROLL NOW
            </a>
            <a 
              href="mailto:info@BeABusinessBroker.com"
              className="border-2 border-white hover:bg-white/10 text-white font-bold px-[47px] py-2 md:py-2.5 rounded-lg text-xs md:text-sm uppercase tracking-wide transition-all cursor-pointer whitespace-nowrap inline-block text-center"
            >
              REQUEST INFO
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Footer Bar */}
      <footer className="bg-white text-[#0B1D3A] py-8 px-3 sm:px-6 lg:px-8 xl:px-10 w-full border-t border-slate-200">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1 (Left - Brand & Copyright) */}
          <div className="flex flex-col items-start" style={{ marginTop: '-59px', paddingTop: '29px' }}>
            <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Be A Business Broker" 
              className="w-auto object-contain mb-3"
              style={{ marginTop: '-80px', height: '287px' }}
              onError={(e) => { e.currentTarget.src = logoImgFallback; }} 
            />
            <p className="text-xs text-slate-500" style={{ marginTop: '-71px' }}>
              © 2026 Be A Business Broker. All rights reserved.
            </p>
          </div>

          {/* Column 2 (Center - Quick Links Navigation) */}
          <div className="flex flex-col items-start space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1D3A] mb-1">
              Quick Links
            </h4>
            <button 
              onClick={() => onNavigate?.('home')} 
              className="text-sm font-semibold text-slate-700 hover:text-[#FF4500] transition cursor-pointer text-left"
            >
              Why Business Brokerage?
            </button>
            <button 
              onClick={() => onNavigate?.('begin')} 
              className="text-sm font-semibold text-slate-700 hover:text-[#FF4500] transition cursor-pointer text-left"
            >
              How Do I Begin?
            </button>
            <button 
              onClick={() => onNavigate?.('training')} 
              className="text-sm font-semibold text-slate-700 hover:text-[#FF4500] transition cursor-pointer text-left"
            >
              FastStart Online Training™
            </button>
            <button 
              onClick={() => onNavigate?.('about')} 
              className="text-sm font-semibold text-slate-700 hover:text-[#FF4500] transition cursor-pointer text-left"
            >
              About Len Krick
            </button>
          </div>

          {/* Column 3 (Right - Contact Us & IBBA Membership) */}
          <div className="flex flex-col items-start space-y-2 lg:-ml-[118px]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1D3A] mb-1">
              Contact Us
            </h4>
            <p className="text-xs font-semibold text-slate-700 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#FF4500] shrink-0" />
              <span>(702) 496-8865</span>
            </p>
            <p className="text-xs font-semibold text-slate-700 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#FF4500] shrink-0" />
              <span>info@BeABusinessBroker.com</span>
            </p>

            <div 
              className="flex items-center space-x-3 pt-3 lg:ml-[230px] lg:-mt-[37px]"
            >
              <span 
                className="text-xs font-bold uppercase tracking-wider text-slate-600 lg:mr-[3px] lg:-mt-[150px] lg:ml-[52px]"
              >
                Proud Member Of
              </span>
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="IBBA Member" 
                className="object-contain p-1 rounded w-[175px] h-[58px] lg:-ml-[130px]"
                onError={(e) => { e.currentTarget.src = ibbaLogoFallback; }} 
              />
            </div>
            
            <div className="text-[10px] text-slate-500 pt-1">
              <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
