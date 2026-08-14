import logoImg from './images/BeABusinessBrokerLogo.png';
import clarkImg from './images/ClarkBell.png';
import fastStartImg from './images/FastStart.jpg';
import ibbaLogo from './images/IBBALogo.png';
import lenKrickImg from "./images/LenKrick'sPhoto.jpg";
import maLogo from './images/M&ASourceLogo.jpg';
import buffettImg from './images/WarrenBuffetQuote.png';
import meetingImg from './images/meeting.png';
import chatBgImg from './images/Chat.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';
import icon01 from './images/icon01.png';
import icon02 from './images/icon02.png';
import icon03 from './images/icon03.png';
import icon04 from './images/icon04.png';
import icon05 from './images/icon05.png';
import icon06 from './images/icon06.png';
import icon07 from './images/icon07.png';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Check, 
  ArrowRight,
  DollarSign,
  Clock,
  Rocket,
  Star,
  Heart,
  Brain,
  Building2,
  UsersRound,
  Briefcase,
  Calculator,
  Store,
  Landmark,
  Quote
} from 'lucide-react';


import { PageKey } from './App';
import Navbar from './Navbar';

interface HomePageProps {
  onNavigate?: (page: PageKey) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-white overflow-x-hidden max-w-full">
      <img src={chatBgImg} alt="" aria-hidden="true" className="hidden" fetchPriority="high" />
      {/* GLOBAL NAVBAR */}
      <Navbar currentPage="home" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 2: HERO */}
        <section 
          className="relative text-white pt-8 lg:pt-16 pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden bg-cover bg-[#010B21]"
          style={{ backgroundImage: `url(${chatBgImg})`, backgroundPosition: 'center 20%' }}
        >
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center w-full max-w-none">
            {/* Left Column */}
            <div className="max-w-3xl relative w-full lg:w-1/2">
              <div className="relative z-10 lg:w-[90%] pr-4 lg:pr-0">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl xl:text-[67px] font-black mb-3 leading-tight">
                  Why Become a Business Broker?
                </h1>
                <p className="text-xl lg:text-2xl mb-8 font-medium text-slate-200 max-w-[666px]">
                  A Career with Unlimited Income Potential, Professional Freedom, and Long-Term Opportunity.
                </p>
                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-xl border-l-8 border-[#FF4A00] flex items-start gap-4 max-w-[575px]">
                  <CheckCircle2 className="text-[#FF4A00] shrink-0 mt-1 w-7 h-7" />
                  <div className="flex-1">
                    <h3 className="text-[#FF4A00] font-extrabold text-xl sm:text-2xl mb-1">NO PRIOR EXPERIENCE REQUIRED</h3>
                    <p className="text-base sm:text-lg text-gray-700">We provide the training, tools, and support you need to succeed—even if you're starting from scratch.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column / Warren Buffett Card */}
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2 p-4 sm:p-6 lg:p-0">
              <div className="border-2 border-[#FBBF24] rounded-lg relative w-full max-w-[574px] bg-slate-800/50 animate-pulse overflow-hidden">
                <img 
                  src={buffettImg} 
                  alt="Warren Buffett" 
                  width="553" 
                  height="368" 
                  loading="eager" 
                  fetchPriority="high" 
                  className="w-full h-auto object-cover transition-opacity duration-700 ease-in-out opacity-0 block" 
                  onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                />
              </div>
            </div>
          </div>
          {/* Bottom Ribbon */}
          <div className="absolute bottom-0 left-0 z-10 bg-black/60 w-full py-4 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center px-4 sm:px-12 lg:px-16 text-[#FBBF24] font-bold uppercase text-xs sm:text-sm border-t border-gray-800 shadow-inner">
            <span className="text-left py-1">⚙ LOW STARTUP COST</span>
            <div className="hidden sm:block w-px h-5 bg-gray-600/80 my-2 sm:my-0"></div>
            <span className="text-center py-1">👤 FLEXIBLE LIFESTYLE</span>
            <div className="hidden sm:block w-px h-5 bg-gray-600/80 my-2 sm:my-0"></div>
            <span className="text-right py-1">📊 UNLIMITED INCOME POTENTIAL</span>
          </div>
        </section>

        {/* SECTION 3: FEES & REASONS GRID */}
        <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full max-w-none">
          {/* Left (Col span 4) */}
          <div className="lg:col-span-4 w-full text-center border-2 border-[#F57E45] rounded-xl p-6 shadow-sm bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-[#1E3A8A] font-bold text-2xl sm:text-[28px]">TYPICAL TRANSACTION FEES</h2>
              <div className="text-4xl sm:text-6xl text-[#F57E45] font-extrabold my-2">10% - 12%</div>
              <div className="text-xl sm:text-2xl font-bold">OF SELLING PRICE</div>
              <p className="mb-4 text-gray-800">For businesses selling below $1,000,000.</p>
              
              <div className="flex flex-col items-center gap-2 mt-4 font-bold text-gray-700 text-center">
                <div className="flex items-center gap-2">
                  $500,000 business <span className="text-[#FF4A00]">➔</span> $50,000 - $60,000 fee
                </div>
                <div className="flex items-center gap-2">
                  $750,000 business <span className="text-[#FF4A00]">➔</span> $75,000 - $90,000 fee
                </div>
                <div className="flex items-center gap-2">
                  $1,000,000 business <span className="text-[#FF4A00]">➔</span> $100,000 - $120,000 fee
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 italic">Fees may vary based on deal size, complexity , and services provided</p>
          </div>

          {/* Right (Col span 8) */}
          <div className="lg:col-span-8 w-full text-center">
            <h2 className="text-[#1E3A8A] font-bold text-xl mb-8 text-center">POWERFUL REASONS TO CHOOSE THIS CAREER</h2>
            <div className="w-full bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-[1px] bg-transparent lg:bg-gray-200 w-full font-bold">
                <div className="flex flex-col items-center text-center bg-white p-3 sm:p-4 h-full justify-between gap-2 border lg:border-0 border-gray-200 rounded-xl lg:rounded-none shadow-sm lg:shadow-none">
                  <img src={icon1} alt="Income Potential" loading="lazy" decoding="async" className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0" />
                  <h3 className="text-[#1E3A8A] font-bold text-sm leading-snug">Unlimited Income Potential</h3>
                  <p className="text-gray-600 font-bold text-xs leading-relaxed">One successful transaction can generate fees that exceed months of traditional income.</p>
                </div>

                <div className="flex flex-col items-center text-center bg-white p-3 sm:p-4 h-full justify-between gap-2 border lg:border-0 border-gray-200 rounded-xl lg:rounded-none shadow-sm lg:shadow-none">
                  <img src={icon2} alt="Flexible Lifestyle" loading="lazy" decoding="async" className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0" />
                  <h3 className="text-[#1E3A8A] font-bold text-sm leading-snug">Flexible Lifestyle</h3>
                  <p className="text-gray-600 font-bold text-xs leading-relaxed">Work from home, set your own schedule, and build your business around your life.</p>
                </div>

                <div className="flex flex-col items-center text-center bg-white p-3 sm:p-4 h-full justify-between gap-2 border lg:border-0 border-gray-200 rounded-xl lg:rounded-none shadow-sm lg:shadow-none">
                  <img src={icon3} alt="Low Startup Cost" loading="lazy" decoding="async" className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0" />
                  <h3 className="text-[#1E3A8A] font-bold text-sm leading-snug">Low Startup Cost</h3>
                  <p className="text-gray-600 font-bold text-xs leading-relaxed">No franchise fees, inventory, or expensive office required. Start lean and grow.</p>
                </div>

                <div className="flex flex-col items-center text-center bg-white p-3 sm:p-4 h-full justify-between gap-2 border lg:border-0 border-gray-200 rounded-xl lg:rounded-none shadow-sm lg:shadow-none">
                  <img src={icon4} alt="Never Age Out" loading="lazy" decoding="async" className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0" />
                  <h3 className="text-[#1E3A8A] font-bold text-sm leading-snug">Never Age Out</h3>
                  <p className="text-gray-600 font-bold text-xs leading-relaxed">Experience, relationships, and judgment become more valuable over time, not less.</p>
                </div>

                <div className="flex flex-col items-center text-center bg-white p-3 sm:p-4 h-full justify-between gap-2 border lg:border-0 border-gray-200 rounded-xl lg:rounded-none shadow-sm lg:shadow-none">
                  <img src={icon5} alt="Meaningful Work" loading="lazy" decoding="async" className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0" />
                  <h3 className="text-[#1E3A8A] font-bold text-sm leading-snug">Meaningful Work</h3>
                  <p className="text-gray-600 font-bold text-xs leading-relaxed">Help business owners successfully transition on their terms and create win-win outcomes.</p>
                </div>

                <div className="flex flex-col items-center text-center bg-white p-3 sm:p-4 h-full justify-between gap-2 border lg:border-0 border-gray-200 rounded-xl lg:rounded-none shadow-sm lg:shadow-none">
                  <img src={icon6} alt="Mentally Stimulating" loading="lazy" decoding="async" className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0" />
                  <h3 className="text-[#1E3A8A] font-bold text-sm leading-snug">Mentally Stimulating</h3>
                  <p className="text-gray-600 font-bold text-xs leading-relaxed">Every business is different, and every transaction is different. You'll never stop learning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHO SUCCEEDS */}
        <section className="py-12 bg-gray-50 text-center px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
          <div className="w-full max-w-none">
            <h2 className="text-[#1E3A8A] text-2xl font-bold">Who Succeeds as a Business Broker?</h2>
            <p className="text-gray-600 mt-2">This career is ideal for professionals who are motivated, relationships-driven, and want more control of their future.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 mt-8 w-full">
              <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow h-full w-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF4A00]/10 flex items-center justify-center mb-4 border border-[#FF4A00]/20">
                  <Building2 className="w-8 h-8 text-[#1E3A8A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] mb-2 text-[16px] leading-tight">Commercial Real Estate Brokers</h3>
                <p className="font-bold text-xs text-gray-600 leading-relaxed mt-auto">Expand your expertise and add higher-fee business sale transactions to your practice.</p>
              </div>
              <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow h-full w-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF4A00]/10 flex items-center justify-center mb-4 border border-[#FF4A00]/20">
                  <UsersRound className="w-8 h-8 text-[#1E3A8A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] mb-2 text-[16px] leading-tight">Business Coaches & Consultants</h3>
                <p className="font-bold text-xs text-gray-600 leading-relaxed mt-auto">Add exit and transition advisory services and create another high-value revenue stream.</p>
              </div>
              <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow h-full w-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF4A00]/10 flex items-center justify-center mb-4 border border-[#FF4A00]/20">
                  <Briefcase className="w-8 h-8 text-[#1E3A8A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] mb-2 text-[16px] leading-tight">Corporate Professionals & Career Changers</h3>
                <p className="font-bold text-xs text-gray-600 leading-relaxed mt-auto">Build an independent professional practice and create the freedom you've always wanted.</p>
              </div>
              <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow h-full w-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF4A00]/10 flex items-center justify-center mb-4 border border-[#FF4A00]/20">
                  <Calculator className="w-8 h-8 text-[#1E3A8A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] mb-2 text-[16px] leading-tight">Financial Planners</h3>
                <p className="font-bold text-xs text-gray-600 leading-relaxed mt-auto">Leverage financial expertise to help clients sell, buy, and transition businesses.</p>
              </div>
              <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow h-full w-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF4A00]/10 flex items-center justify-center mb-4 border border-[#FF4A00]/20">
                  <Store className="w-8 h-8 text-[#1E3A8A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] mb-2 text-[16px] leading-tight">Prior Business Owners</h3>
                <p className="font-bold text-xs text-gray-600 leading-relaxed mt-auto">Use your experience as a business owner to help others achieve a successful exit.</p>
              </div>
              <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow h-full w-full text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF4A00]/10 flex items-center justify-center mb-4 border border-[#FF4A00]/20">
                  <Landmark className="w-8 h-8 text-[#1E3A8A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1E3A8A] mb-2 text-[16px] leading-tight">Bankers, Franchise Pros, Sales Execs & More</h3>
                <p className="font-bold text-xs text-gray-600 leading-relaxed mt-auto">If you love people, problem-solving, and business—this could be your perfect fit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INCOME POTENTIAL & TESTIMONIAL */}
        <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 bg-white w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column / Graph Container (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col h-full w-full">
          <div className="border border-gray-200 rounded-lg py-5 px-6 bg-gray-50/50 shadow-sm flex flex-col justify-between flex-1 w-full min-h-[280px]">
            <div>
              <h2 className="text-[#1E3A8A] font-bold text-2xl sm:text-[30px] uppercase mb-2">YOUR INCOME POTENTIAL</h2>
              <p className="text-gray-700 text-base sm:text-[18px] mb-4 xl:w-4/5 leading-snug">
                Most successful business brokers earn a transaction fee of <span className="text-[#F57E45] font-bold">10% – 12%</span> of the selling price for businesses under $1 million.
              </p>
            </div>

            <h3 className="text-center font-bold text-[#0A1931] text-base mb-4">
              Illustrative Income Growth for a Business Broker
            </h3>

            {/* Chart Outer Wrapper */}
            <div className="overflow-x-auto pb-2">
              <div className="flex items-stretch h-36 sm:h-40 min-w-[500px] sm:min-w-0 relative mb-2">
                {/* Y-Axis Column */}
                <div className="flex flex-col justify-between text-right text-[10px] sm:text-xs text-gray-600 font-semibold pr-3 py-1 border-r-2 border-gray-400 select-none min-w-[70px] sm:min-w-[85px] shrink-0">
                <span>$1,000,000</span>
                <span>$800,000</span>
                <span>$600,000</span>
                <span>$400,000</span>
                <span>$200,000</span>
                <span>$0</span>
              </div>

              {/* Bars Container */}
              <div className="flex-1 flex items-end justify-around pl-4 pr-2 pt-4 relative border-b-2 border-gray-400">
                {/* Horizontal gridlines behind bars */}
                <div className="absolute inset-x-0 top-0 border-b border-gray-200 border-dashed pointer-events-none"></div>
                <div className="absolute inset-x-0 top-[20%] border-b border-gray-200 border-dashed pointer-events-none"></div>
                <div className="absolute inset-x-0 top-[40%] border-b border-gray-200 border-dashed pointer-events-none"></div>
                <div className="absolute inset-x-0 top-[60%] border-b border-gray-200 border-dashed pointer-events-none"></div>
                <div className="absolute inset-x-0 top-[80%] border-b border-gray-200 border-dashed pointer-events-none"></div>

                {/* Bar 1 ($240,000 -> 24% of $1M scale) */}
                <div className="flex flex-col items-center z-10 w-12 sm:w-16 h-full justify-end">
                  <span className="text-[11px] font-bold text-gray-800 mb-1">$240,000</span>
                  <div className="w-full bg-[#1E3A8A] rounded-t-xs transition-all duration-300 hover:bg-[#152a66] h-[24%]"></div>
                </div>

                {/* Bar 2 ($425,000 -> 42.5% of $1M scale) */}
                <div className="flex flex-col items-center z-10 w-12 sm:w-16 h-full justify-end">
                  <span className="text-[11px] font-bold text-gray-800 mb-1">$425,000</span>
                  <div className="w-full bg-[#1E3A8A] rounded-t-xs transition-all duration-300 hover:bg-[#152a66] h-[42.5%]"></div>
                </div>

                {/* Bar 3 ($600,000 -> 60% of $1M scale) */}
                <div className="flex flex-col items-center z-10 w-12 sm:w-16 h-full justify-end">
                  <span className="text-[11px] font-bold text-gray-800 mb-1">$600,000</span>
                  <div className="w-full bg-[#1E3A8A] rounded-t-xs transition-all duration-300 hover:bg-[#152a66] h-[60%]"></div>
                </div>

                {/* Bar 4 ($700,000 -> 70% of $1M scale) */}
                <div className="flex flex-col items-center z-10 w-12 sm:w-16 h-full justify-end">
                  <span className="text-[11px] font-bold text-gray-800 mb-1">$700,000</span>
                  <div className="w-full bg-[#1E3A8A] rounded-t-xs transition-all duration-300 hover:bg-[#152a66] h-[70%]"></div>
                </div>

                {/* Bar 5 ($800,000 -> 80% of $1M scale) */}
                <div className="flex flex-col items-center z-10 w-12 sm:w-16 h-full justify-end">
                  <span className="text-[11px] font-bold text-gray-800 mb-1">$800,000</span>
                  <div className="w-full bg-[#1E3A8A] rounded-t-xs transition-all duration-300 hover:bg-[#152a66] h-[80%]"></div>
                </div>
              </div>
            </div>

            {/* X-Axis Labels Row */}
            <div className="flex items-center pl-[85px] justify-around text-xs font-bold text-gray-700 mb-3 min-w-[500px] sm:min-w-0">
              <span className="w-12 sm:w-16 text-center">Year 1</span>
              <span className="w-12 sm:w-16 text-center">Year 2</span>
              <span className="w-12 sm:w-16 text-center">Year 3</span>
              <span className="w-12 sm:w-16 text-center">Year 4</span>
              <span className="w-12 sm:w-16 text-center">Year 5</span>
            </div>
            </div>

            {/* Legend Item */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 mb-3">
              <span className="w-3 h-3 bg-[#1E3A8A] inline-block rounded-xs"></span>
              <span>Potential Gross Income</span>
            </div>

            {/* Footnotes */}
            <div className="border-t border-gray-200 pt-2.5 text-[11px] text-gray-600 space-y-0.5 text-center">
              <p>*Individual results vary based on effort, skills, market conditions, and transaction volume.</p>
              <p className="font-bold text-[#FF4A00]">There is no income ceiling in business brokerage.</p>
            </div>
          </div>
        </div>

        {/* Right Column (Testimonial Card) */}
        <div className="lg:col-span-6 flex flex-col h-full w-full">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm flex flex-col justify-between flex-1 w-full gap-6">
            <div className="flex flex-col gap-4">
              {/* Header row: Quote icon & Star Rating */}
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 fill-[#F57E45] text-[#F57E45] rotate-180" />
                <div className="flex gap-1">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBF24] text-[#FBBF24]" />
                </div>
              </div>

              {/* Main content: Quote text & Clark Bell photo */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between">
                <p className="font-medium text-gray-800 text-lg sm:text-xl lg:text-[22px] leading-relaxed flex-1">
                  "After leaving corporate America, I wanted a professional business I could build from home. FastStart gave me the systems, structure, and confidence to begin."
                </p>
                <div className="w-44 h-48 sm:w-48 sm:h-52 shrink-0 bg-slate-200 rounded-lg overflow-hidden animate-pulse shadow-xs">
                  <img 
                    src={clarkImg} 
                    alt="Clark Bell" 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover object-[center_40%] transition-opacity duration-700 ease-in-out opacity-0" 
                    onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                  />
                </div>
              </div>
            </div>

            {/* Footer / Attribution */}
            <div className="border-t border-gray-100 pt-4">
              <p className="font-bold text-gray-800 text-base sm:text-lg mb-1">"In my first year I made $690,000!"</p>
              <div className="flex items-baseline gap-2">
                <p className="text-[#1E3A8A] font-bold text-base sm:text-lg">— Clark Bell</p>
                <p className="text-gray-500 text-xs sm:text-sm">Former FastStart Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: 7-STEP PROCESS */}
      <section className="py-8 lg:py-12 bg-white text-center px-3 sm:px-6 lg:px-8 xl:px-10 border-t border-gray-100">
        <div className="w-full max-w-none">
          <h2 className="text-[#1E3A8A] font-bold text-[30px]">WHAT DOES A BUSINESS BROKER ACTUALLY DO?</h2>
          <p className="text-gray-600 mt-2 text-[20px]">You are the trusted intermediary between business buyers and sellers.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:items-stretch mt-8 gap-6 lg:gap-2 relative">
            <div className="hidden lg:block absolute top-6 left-[5%] right-[5%] h-[2px] bg-gray-200 z-0"></div>
            <div className="flex flex-col items-center flex-1 justify-start">
              <div className="w-12 h-12 bg-[#000067] text-white rounded-full flex items-center justify-center font-bold mb-3 text-xl relative z-10">1</div>
              <img src={icon01} alt="Step 1" loading="lazy" decoding="async" className="w-[92px] h-[92px] mb-3 object-contain" />
              <h3 className="text-[#1E3A8A] font-bold text-sm mb-2">Meet with Business Owners</h3>
              <p className="text-gray-500 font-bold text-[16px]">Understand their goals and determine if a sale is the best option for the market.</p>
            </div>
            
            <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative min-w-[32px]">
               <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-200 -translate-x-1/2 z-0"></div>
               <div className="bg-white py-2 relative z-10 mt-[12px]">
               <ArrowRight className="text-[#FF4A00] text-xl font-bold" />
               </div>
            </div>

            <div className="flex flex-col items-center flex-1 justify-start">
              <div className="w-12 h-12 bg-[#000067] text-white rounded-full flex items-center justify-center font-bold mb-3 text-xl relative z-10">2</div>
              <img src={icon02} alt="Step 2" loading="lazy" decoding="async" className="w-[92px] h-[92px] mb-3 object-contain" />
              <h3 className="text-[#1E3A8A] font-bold text-sm mb-2">Value the Business</h3>
              <p className="text-gray-500 font-bold text-[16px]">Analyze financials, market position, and intangible factors to determine value.</p>
            </div>

            <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative min-w-[32px]">
               <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-200 -translate-x-1/2 z-0"></div>
               <div className="bg-white py-2 relative z-10 mt-[12px]">
               <ArrowRight className="text-[#FF4A00] text-xl font-bold" />
               </div>
            </div>

            <div className="flex flex-col items-center flex-1 justify-start">
              <div className="w-12 h-12 bg-[#000067] text-white rounded-full flex items-center justify-center font-bold mb-3 text-xl relative z-10">3</div>
              <img src={icon03} alt="Step 3" loading="lazy" decoding="async" className="w-[92px] h-[92px] mb-3 object-contain" />
              <h3 className="text-[#1E3A8A] font-bold text-sm mb-2">Prepare Marketing Materials</h3>
              <p className="text-gray-500 font-bold text-[16px]">Create a confidential information package that highlights the business opportunity.</p>
            </div>

            <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative min-w-[32px]">
               <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-200 -translate-x-1/2 z-0"></div>
               <div className="bg-white py-2 relative z-10 mt-[12px]">
               <ArrowRight className="text-[#FF4A00] text-xl font-bold" />
               </div>
            </div>

            <div className="flex flex-col items-center flex-1 justify-start">
              <div className="w-12 h-12 bg-[#000067] text-white rounded-full flex items-center justify-center font-bold mb-3 text-xl relative z-10">4</div>
              <img src={icon04} alt="Step 4" loading="lazy" decoding="async" className="w-[92px] h-[92px] mb-3 object-contain" />
              <h3 className="text-[#1E3A8A] font-bold text-sm mb-2">Find Qualified Buyers</h3>
              <p className="text-gray-500 font-bold text-[16px]">Market the business online and personally to pre-qualified buyers.</p>
            </div>

            <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative min-w-[32px]">
               <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-200 -translate-x-1/2 z-0"></div>
               <div className="bg-white py-2 relative z-10 mt-[12px]">
               <ArrowRight className="text-[#FF4A00] text-xl font-bold" />
               </div>
            </div>

            <div className="flex flex-col items-center flex-1 justify-start">
              <div className="w-12 h-12 bg-[#000067] text-white rounded-full flex items-center justify-center font-bold mb-3 text-xl relative z-10">5</div>
              <img src={icon05} alt="Step 5" loading="lazy" decoding="async" className="w-[92px] h-[92px] mb-3 object-contain" />
              <h3 className="text-[#1E3A8A] font-bold text-sm mb-2">Manage Due Diligence</h3>
              <p className="text-gray-500 font-bold text-[16px]">Guide both parties through due diligence to keep the process moving forward.</p>
            </div>

            <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative min-w-[32px]">
               <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-200 -translate-x-1/2 z-0"></div>
               <div className="bg-white py-2 relative z-10 mt-[12px]">
               <ArrowRight className="text-[#FF4A00] text-xl font-bold" />
               </div>
            </div>

            <div className="flex flex-col items-center flex-1 justify-start">
              <div className="w-12 h-12 bg-[#000067] text-white rounded-full flex items-center justify-center font-bold mb-3 text-xl relative z-10">6</div>
              <img src={icon06} alt="Step 6" loading="lazy" decoding="async" className="w-[92px] h-[92px] mb-3 object-contain" />
              <h3 className="text-[#1E3A8A] font-bold text-sm mb-2">Coordinate Closing</h3>
              <p className="text-gray-500 font-bold text-[16px]">Work with attorneys, CPAs, and lenders to ensure a smooth closing.</p>
            </div>

            <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative min-w-[32px]">
               <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-200 -translate-x-1/2 z-0"></div>
               <div className="bg-white py-2 relative z-10 mt-[12px]">
               <ArrowRight className="text-[#FF4A00] text-xl font-bold" />
               </div>
            </div>

            <div className="flex flex-col items-center flex-1 justify-start">
              <div className="w-12 h-12 bg-[#000067] text-white rounded-full flex items-center justify-center font-bold mb-3 text-xl relative z-10">7</div>
              <img src={icon07} alt="Step 7" loading="lazy" decoding="async" className="w-[92px] h-[92px] mb-3 object-contain" />
              <h3 className="text-[#1E3A8A] font-bold text-sm mb-2">Assist with Orderly Transition</h3>
              <p className="text-gray-500 font-bold text-[16px]">Help ensure a successful handoff so the business continues to thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FOOTER & LEN KRICK */}
      <section className="relative py-16 bg-gray-50 px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative w-full max-w-none grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Column Card */}
          <div className="bg-[#0A1931] text-white p-4 sm:p-5 rounded-2xl shadow-xl flex flex-col xl:flex-row items-center gap-4 h-full">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">The Largest Business Ownership Transfer in History Is Happening Right Now</h2>
              <ul className="flex flex-col gap-1 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-[#FF4A00] flex-shrink-0 mt-1" />
                  <span>10,000 Baby Boomers reach retirement age every day</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-[#FF4A00] flex-shrink-0 mt-1" />
                  <span>Millions of privately-owned businesses will change hands over the next decade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-[#FF4A00] flex-shrink-0 mt-1" />
                  <span>SBA financing availability has expanded dramatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-[#FF4A00] flex-shrink-0 mt-1" />
                  <span>Buyers continue seeking acquisition opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-[#FF4A00] flex-shrink-0 mt-1" />
                  <span>Many business owners have no succession plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-[#FF4A00] flex-shrink-0 mt-1" />
                  <span>Demand for trained intermediaries has never been greater</span>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[345px] shrink-0 mt-4 xl:mt-0 flex justify-center xl:justify-start">
              <img src={meetingImg} alt="Meeting" loading="lazy" decoding="async" className="w-full max-w-[345px] h-auto ml-0 object-contain rounded-xl shadow-xl" />
            </div>
          </div>

          {/* Right Column Card */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex flex-col sm:flex-row gap-4 items-center h-full text-gray-900 justify-between">
            {/* Text Info */}
            <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-1 text-[#0A1931]">Created by Len Krick, MBA</h2>
                <div className="mb-2 text-xs sm:text-sm">
                  <p className="text-gray-600 font-medium">IBBA Hall of Fame Inductee • Course Author</p>
                  <p className="text-[#FF4A00] font-bold mt-1">Certified Business Intermediary</p>
                  <p className="text-[#FF4A00] font-bold">Lifetime Certified Business Intermediary</p>
                </div>
                   
                <ul className="flex flex-col gap-2 mb-3 text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#FF4A00] flex-shrink-0 mt-1 w-4 h-4" />
                    <span>Over 40 years in business brokerage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#FF4A00] flex-shrink-0 mt-1 w-4 h-4" />
                    <span>Trained over 400 business brokers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#FF4A00] flex-shrink-0 mt-1 w-4 h-4" />
                    <span>Thousands of successful transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#FF4A00] flex-shrink-0 mt-1 w-4 h-4" />
                    <span>Developer of FastStart™ Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#FF4A00] flex-shrink-0 mt-1 w-4 h-4" />
                    <span>Developer of PricePoint™ Software</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <img src={ibbaLogo} alt="IBBA Logo" loading="lazy" decoding="async" className="h-[55px] object-contain" />
                <img src={maLogo} alt="M&A Source Logo" loading="lazy" decoding="async" className="h-[60px] object-contain" />
              </div>
            </div>

            {/* Fixed Image Container */}
            <div className="w-[300px] sm:w-[340px] shrink-0 relative flex justify-center items-end self-end">
              <img 
                src={lenKrickImg} 
                alt="Len Krick" 
                width="336"
                height="420"
                loading="lazy"
                decoding="async"
                className="w-full h-[350px] object-contain mix-blend-multiply transition-opacity duration-700 ease-in-out opacity-0"
                onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BOTTOM CTA BANNER */}
      <section className="bg-[#071224] text-center py-8 px-4 sm:px-6 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-white uppercase mb-2">
          START BUILDING YOUR BUSINESS BROKERAGE CAREER TODAY
        </h2>
        <p className="text-[#FF4A00] font-bold mb-6">
          Unlimited Income Potential • Flexible Lifestyle • Low Startup Cost
        </p>
        <a 
          href="#faststart-online-training" 
          onClick={(e) => { e.preventDefault(); onNavigate?.('training'); }}
          className="bg-[#FF4A00] text-white font-extrabold px-8 py-3 rounded-md text-lg inline-block w-full sm:w-auto text-center hover:bg-[#e04100] transition-colors cursor-pointer"
        >
          LEARN ABOUT FASTSTART TRAINING ➔
        </a>
      </section>
      </main>
    </div>
  );
}
