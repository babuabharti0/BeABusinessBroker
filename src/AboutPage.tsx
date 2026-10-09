import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  BookOpen, 
  Users, 
  Building2, 
  GraduationCap, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Star, 
  Target,
  ChevronRight,
  Landmark
} from 'lucide-react';

// Fallback image imports from existing image directories
import logoImgFallback from './images/BeABusinessBrokerLogo.webp';
import lenKrickPhotoFallback from "./images5/LenKrick'sPhoto.webp";
import ibbaLogoFallback from './images5/IBBALogo.webp';
import cbiLogoFallback from "./images5/IBBA'sCBIlogo.webp";
import mamiLogoFallback from "./images5/IBBA'sM&AMILogo.webp";
import mbaLogoFallback from './images5/mba.webp';
import tomWestFallback from './images5/TomWestAward.webp';
import hallOfFameFallback from './images5/IBBAHallofFameAward.webp';
import clarkBellFallback from './images5/ClarkBell.webp';
import fastStartFallback from './images5/FastStart.webp';
import pricePointFallback from './images5/PricePointLogo.webp';
import peopleFallback from './images5/people.webp';

import { PageKey } from './App';
import Navbar from './Navbar';

interface AboutPageProps {
  onNavigate?: (page: PageKey) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-[#F8FAFC] text-slate-800 w-full max-w-[100vw] overflow-x-hidden">
      
      {/* GLOBAL NAVBAR */}
      <Navbar currentPage="about" onNavigate={onNavigate} />

      {/* SECTION 2: HERO SECTION (DARK NAVY BACKGROUND #0B1D3A) */}
      <section className="bg-[#0B1D3A] overflow-hidden relative text-white py-12 px-4 sm:px-6 lg:px-12 w-full lg:h-[780px] max-w-full overflow-x-hidden">
        <div className="max-w-[1615px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 h-full">
          
          {/* Left Column (40% Width) */}
          <div className="w-full lg:w-[40%] space-y-4">
            <div className="text-[#FF4500] font-bold tracking-widest text-[17px] mb-2 uppercase">
              ABOUT LEN KRICK —
            </div>

            <h1 className="text-[43px] lg:text-[58px] font-extrabold leading-tight text-white">
              25+ Years Helping Business Brokers Succeed
            </h1>

            <p className="text-slate-200 text-[17px] md:text-[19px] leading-relaxed">
              Len Krick, MBA, has spent over 25 years building, leading, coaching, and advancing the business brokerage profession.
            </p>

            <p className="text-slate-300 text-[14px] md:text-[17px] leading-relaxed">
              As an industry leader, educator, software developer, and Hall of Fame inductee, Len's mission is simple:
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-yellow-400/40 shadow-inner">
              <p className="text-yellow-400 font-bold text-[17px] md:text-[19px] leading-snug">
                "To provide aspiring and experienced business brokers with the knowledge, tools, systems, and confidence to build profitable and rewarding careers."
              </p>
            </div>
          </div>

          {/* Center Column (30% Width) */}
          <div className="w-full lg:w-[389.656px] h-auto lg:h-[550px] pl-0 flex justify-center items-center overflow-visible">
            <div className="relative h-full w-auto bg-transparent rounded-xl overflow-visible animate-pulse">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Len Krick MBA" 
                width="360"
                height="504"
                loading="eager"
                fetchPriority="high"
                className="h-auto lg:h-[550px] w-full max-w-xs mx-auto lg:w-auto object-contain mix-blend-lighten scale-100 lg:scale-150 transition-all duration-700 ease-in-out opacity-0"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%), linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%), linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
                onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                onError={(e) => { e.currentTarget.src = lenKrickPhotoFallback; }} 
              />
            </div>
          </div>

          {/* Right Column (32% Width) */}
          <div className="w-full lg:w-[32%] flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8 lg:gap-3 overflow-visible py-8 lg:py-0">
            <div className="relative h-auto lg:h-[700px] w-full max-w-[200px] lg:max-w-sm mx-auto lg:w-auto bg-transparent rounded-xl overflow-visible animate-pulse">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="IBBA Crystal Trophies" 
                width="500"
                height="700"
                loading="eager"
                fetchPriority="high"
                className="h-auto lg:h-[370px] mt-0 lg:mt-[180px] w-full max-w-[200px] lg:max-w-sm mx-auto lg:w-auto object-contain mix-blend-screen scale-100 lg:scale-200 transition-all duration-700 ease-in-out opacity-0"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%), linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%), linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
                onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                onError={(e) => { e.currentTarget.src = tomWestFallback; }} 
              />
            </div>
            <div className="relative h-auto lg:h-[700px] w-full max-w-[200px] lg:max-w-sm mx-auto lg:w-auto bg-transparent rounded-xl overflow-visible animate-pulse">
              <img 
                src='src/images5/IBBAHallofFameAward.webp' 
                alt="IBBA Hall of Fame Award" 
                width="500"
                height="700"
                loading="eager"
                fetchPriority="high"
                className="h-auto lg:h-[371px] mt-0 lg:mt-[175px] ml-0 lg:ml-[-13px] mr-0 lg:mr-[-41px] w-full max-w-[200px] lg:max-w-sm mx-auto lg:w-auto object-contain mix-blend-screen scale-100 lg:scale-200 transition-all duration-700 ease-in-out opacity-0"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%), linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%), linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
                onLoad={(e) => { e.currentTarget.classList.remove('opacity-0'); e.currentTarget.parentElement?.classList.remove('animate-pulse'); }}
                onError={(e) => { e.currentTarget.src = hallOfFameFallback; }} 
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: 5-COLUMN SUMMARY BAR */}
      <section className="max-w-[1615px] mx-auto px-4 sm:px-6 lg:px-12 py-10 w-full max-w-full overflow-x-hidden">
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-300"></div>
          <h2 className="px-4 text-xl font-black text-[#0B1D3A] tracking-wide text-center uppercase">
            A CAREER OF LEADERSHIP, ACHIEVEMENT, AND IMPACT
          </h2>
          <div className="flex-1 border-t border-slate-300"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-between">
            <div className="bg-[#0B1D3A] text-white p-4 rounded-full w-[84px] h-[84px] mx-auto mb-3 flex items-center justify-center shrink-0">
              <Users className="w-9 h-9 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#0B1D3A] uppercase tracking-wider block mb-1">
                CHAIRMAN
              </span>
              <h3 className="font-bold text-[#0B1D3A] text-sm leading-snug">
                IBBA Education Committee
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-between">
            <div className="bg-[#0B1D3A] text-white p-4 rounded-full w-[84px] h-[84px] mx-auto mb-3 flex items-center justify-center shrink-0">
              <Building2 className="w-9 h-9 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#0B1D3A] uppercase tracking-wider block mb-1">
                BOARD MEMBER
              </span>
              <h3 className="font-bold text-[#0B1D3A] text-sm leading-snug">
                IBBA Board of Directors <span className="text-xs font-normal text-[#0B1D3A] block">(Former Member)</span>
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-between">
            <div className="bg-[#0B1D3A] text-white p-4 rounded-full w-[84px] h-[84px] mx-auto mb-3 flex items-center justify-center shrink-0">
              <BookOpen className="w-9 h-9 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#0B1D3A] uppercase tracking-wider block mb-1">
                AUTHOR OF IBBA COURSES
              </span>
              <ul className="text-xs text-[#0B1D3A] space-y-1 mt-1 text-center">
                <li>• Effective Business Packaging</li>
                <li>• Managing Due Diligence</li>
                <li>• Managing Closing & Turnover</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-between">
            <div className="bg-[#0B1D3A] text-white p-4 rounded-full w-[84px] h-[84px] mx-auto mb-3 flex items-center justify-center shrink-0">
              <Trophy className="w-9 h-9 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#0B1D3A] uppercase tracking-wider block mb-1">
                RECIPIENT
              </span>
              <h3 className="font-bold text-[#0B1D3A] text-xs leading-relaxed">
                Tom West Award for Outstanding Contributions to the Business Brokerage Industry
              </h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-between">
            <div className="bg-[#0B1D3A] text-white p-4 rounded-full w-[84px] h-[84px] mx-auto mb-3 flex items-center justify-center shrink-0">
              <Landmark className="w-9 h-9 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#0B1D3A] uppercase tracking-wider block mb-1">
                HALL OF FAME
              </span>
              <h3 className="font-bold text-[#0B1D3A] text-sm leading-snug">
                IBBA Hall of Fame Inductee
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: IBBA BANNER BLOCK */}
      <section className="max-w-[1615px] mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-full overflow-x-hidden">
        <div className="bg-orange-50/60 border border-orange-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 my-8 shadow-xs mx-0 lg:mx-[100px]">
          <div className="shrink-0">
            <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="International Business Brokers Association (IBBA)" 
              className="object-contain"
              style={{ height: '114px', width: '362.84375px' }}
              onError={(e) => { e.currentTarget.src = ibbaLogoFallback; }} 
            />
          </div>
          <div className="flex-1 text-sm font-medium text-[#0B1D3A] leading-relaxed">
            <p style={{ fontWeight: 'bold', fontSize: '19px' }}>
              The International Business Broker Association (IBBA) is the leading international not-for-profit association of Business Brokers. IBBA sets the standards for professionalism, ethics, and educational programs within the industry.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: TWO-COLUMN CREDENTIALS & DEVELOPER GRID */}
      <section className="max-w-[1615px] mx-auto px-4 sm:px-6 lg:px-12 w-full mb-12 max-w-full overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: PROFESSIONAL CREDENTIALS */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
                <Award className="w-6 h-6 text-[#FF4500]" />
                <h2 className="text-lg font-extrabold text-[#0B1D3A] uppercase tracking-wide">
                  PROFESSIONAL CREDENTIALS
                </h2>
              </div>

              <div className="space-y-6">
                
                {/* Badge 1: CBI */}
                <div className="flex flex-row items-center text-left gap-4 w-full">
                  <div className="shrink-0">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="CBI Badge" 
                      className="w-16 h-16 md:w-[100px] md:h-[100px] object-contain"
                      onError={(e) => { e.currentTarget.src = cbiLogoFallback; }} 
                    />
                  </div>
                  <div className="w-full min-w-0 flex-1 whitespace-normal break-words lg:text-left mr-[350px] sm:mr-0">
                    <h3 className="font-extrabold text-[#0B1D3A] text-sm leading-snug">
                      LIFETIME CERTIFIED BUSINESS INTERMEDIARY (CBI)
                    </h3>
                    <p className="text-xs text-[#0B1D3A] mt-1 leading-relaxed">
                      The industry's premier designation for professional business brokers.
                    </p>
                  </div>
                </div>

                {/* Badge 2: M&AMI */}
                <div className="flex flex-row items-center text-left gap-4 w-full">
                  <div className="shrink-0">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="M&AMI Badge" 
                      className="w-16 h-16 md:w-[100px] md:h-[100px] object-contain"
                      onError={(e) => { e.currentTarget.src = mamiLogoFallback; }} 
                    />
                  </div>
                  <div className="w-full min-w-0 flex-1 whitespace-normal break-words lg:text-left mr-[350px] sm:mr-0">
                    <h3 className="font-extrabold text-[#0B1D3A] text-sm leading-snug">
                      LIFETIME MASTER MERGERS & ACQUISITIONS INTERMEDIARY (M&AMI)
                    </h3>
                    <p className="text-xs text-[#0B1D3A] mt-1 leading-relaxed">
                      Recognition of advanced expertise and decades of successful deal-making.
                    </p>
                  </div>
                </div>

                {/* Badge 3: MBA Badge */}
                <div className="flex flex-row items-center text-left gap-4 w-full">
                  <div className="shrink-0">
                    <img loading="lazy" src={mbaLogoFallback} 
                      alt="MBA Badge" 
                      className="w-16 h-16 md:w-[100px] md:h-[100px] object-contain"
                      onError={(e) => { e.currentTarget.src = mbaLogoFallback; }} 
                    />
                  </div>
                  <div className="w-full min-w-0 flex-1 whitespace-normal break-words lg:text-left mr-[350px] sm:mr-0">
                    <h3 className="font-extrabold text-[#0B1D3A] text-sm leading-snug">
                      MASTER OF BUSINESS ADMINISTRATION (MBA)
                    </h3>
                    <p className="text-xs text-[#0B1D3A] mt-1 leading-relaxed">
                      Advanced education in business strategy, finance, management, and leadership.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: DEVELOPER • CREATOR • INNOVATOR */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
                <Lightbulb className="w-6 h-6 text-[#FF4500]" />
                <h2 className="text-lg font-extrabold text-[#0B1D3A] uppercase tracking-wide">
                  DEVELOPER • CREATOR • INNOVATOR
                </h2>
              </div>

              <div className="space-y-6">
                
                {/* Block 1: FastStart */}
                <div className="flex flex-row items-center text-left gap-4 w-full">
                  <div className="w-[100px] sm:w-1/3 lg:w-96 lg:shrink-0 flex items-center justify-center shrink-0">
                    <img loading="lazy" src={fastStartFallback} 
                      alt="FastStart Logo" 
                      className="w-full h-auto object-contain block lg:h-[150px] lg:w-[500px] lg:mt-[24px] ml-0 -mt-[4px] sm:mt-0"
                      style={{ width: '350px', height: '100px', marginLeft: '0px' }}
                      onError={(e) => { e.currentTarget.src = fastStartFallback; }} 
                    />
                  </div>
                  <div className="w-full min-w-0 flex-1 whitespace-normal break-words lg:text-left">
                    <p 
                      className="text-[12px] sm:text-sm text-[#0B1D3A] leading-relaxed lg:mt-[42px] lg:-ml-[31px] lg:mr-[100px]"
                    >
                      Developer of the <strong className="text-[#0B1D3A] font-bold">FastStart Online Broker Training Program</strong>—the step-by-step system designed specifically to help new brokers succeed.
                    </p>
                  </div>
                </div>

                {/* Block 2: PricePoint */}
                <div className="flex flex-row items-center text-left gap-4 w-full">
                  <div className="w-[100px] sm:w-1/3 lg:w-96 lg:shrink-0 flex items-center justify-center shrink-0">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="PricePoint Logo" 
                      className="w-full h-auto object-contain block lg:pt-[130px] lg:-mt-[76px] ml-0"
                      style={{ marginLeft: '0px' }}
                      onError={(e) => { e.currentTarget.src = pricePointFallback; }} 
                    />
                  </div>
                  <div className="w-full min-w-0 flex-1 whitespace-normal break-words lg:text-left">
                    <p 
                      className="text-[12px] sm:text-sm text-[#0B1D3A] leading-relaxed lg:mt-[80px] lg:-ml-[27px] lg:mr-[100px]"
                    >
                      Developer of <strong className="text-[#0B1D3A] font-bold">PricePoint™</strong>, the professional valuation software trusted by business brokers throughout North America.
                    </p>
                  </div>
                </div>

                {/* Block 3: Coaching */}
                <div className="flex flex-row items-center text-left gap-4 w-full">
                  <div className="w-[100px] sm:w-1/3 lg:w-64 lg:shrink-0 flex items-center justify-center shrink-0">
                    <img loading="lazy" src='src/images5/people.webp' 
                      alt="Coaching People Logo" 
                      className="w-full h-auto object-contain mx-auto block lg:mr-[25px] lg:-ml-[130px]"
                      onError={(e) => { e.currentTarget.src = peopleFallback; }} 
                    />
                  </div>
                  <div className="w-full min-w-0 flex-1 whitespace-normal break-words lg:text-left lg:mr-[61px] lg:-ml-[39px]">
                    <h3 className="font-extrabold text-[#0B1D3A] text-xs sm:text-sm uppercase tracking-wide lg:mr-[20px]">
                      OVER 400 BUSINESS BROKERS COACHED
                    </h3>
                    <p 
                      className="text-[12px] sm:text-sm text-[#0B1D3A] mt-1 leading-relaxed"
                    >
                      Personally coached over 400 aspiring and experienced brokers to help them grow successful business brokerage practices.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: STUDENT TESTIMONIAL CARD ("WHAT STUDENTS HAVE ACHIEVED") */}
      <section className="max-w-[1615px] mx-auto px-4 sm:px-6 lg:px-12 w-full my-8 max-w-full overflow-x-hidden">
        <div className="border border-orange-200 rounded-2xl p-6 bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Testimonial Card */}
            <div className="lg:col-span-6 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
              <div className="w-full sm:w-2/5 shrink-0 h-48 sm:h-auto">
                <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Clark Bell" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = clarkBellFallback; }} 
                />
              </div>
              <div className="p-6 flex-1 space-y-4 flex flex-col justify-center text-center">
                <div>
                  <div className="flex justify-center text-amber-400 mb-1" style={{ fontSize: '16px', height: '16px', width: '386.3125px' }}>
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <h3 className="font-extrabold text-[#0B1D3A] text-base sm:text-lg" style={{ fontSize: '21px' }}>
                    "In My First Year I Made $690,000!"
                  </h3>
                </div>

                <blockquote className="text-xs sm:text-sm text-[#0B1D3A] italic leading-relaxed text-center" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                  "I entered business brokerage with the guidance, training, and systems provided through FastStart. In my first year, I generated approximately $690,000 in transaction fees. The step-by-step approach helped me avoid costly mistakes and focus on activities that actually produce results."
                </blockquote>

                <p className="text-xs font-bold text-[#0B1D3A] text-center" style={{ fontSize: '16px' }}>
                  — Clark Bell, <span className="font-normal text-[#0B1D3A]">Former FastStart Student</span>
                </p>
              </div>
            </div>

            {/* Right Side: THE RESULTS SPEAK FOR THEMSELVES */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-lg font-extrabold text-[#0B1D3A] uppercase tracking-wide">
                WHAT STUDENTS HAVE ACHIEVED
              </h2>

              <ul className="space-y-3" style={{ fontWeight: 'bold', fontSize: '17px' }}>
                <li className="flex items-start gap-3" style={{ fontSize: '17px' }}>
                  <CheckCircle2 className="w-5 h-5 text-[#0B1D3A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0B1D3A]" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Over 400 business brokers coached
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0B1D3A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0B1D3A]" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Thousands of transactions successfully closed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0B1D3A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0B1D3A]" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Business brokers operating throughout North America
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0B1D3A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0B1D3A]" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Training developed by an IBBA Hall of Fame Inductee
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0B1D3A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0B1D3A]" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    Proven systems refined through 25+ years of transaction experience
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: THE LEN KRICK DIFFERENCE (UNIFIED ICON COLORS: ALL SOLID ORANGE) */}
      <section className="max-w-[1615px] mx-auto px-4 sm:px-6 lg:px-12 w-full mb-12 max-w-full overflow-x-hidden">
        <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#0B1D3A] uppercase tracking-wider mb-8">
          THE LEN KRICK DIFFERENCE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center flex flex-col items-center">
            <div className="bg-orange-50 text-[#FF4500] p-4 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center shrink-0">
              <Target className="w-7 h-7 text-[#FF4500]" />
            </div>
            <h3 className="font-extrabold text-[#0B1D3A] text-sm uppercase mb-2">
              REAL-WORLD EXPERIENCE
            </h3>
            <p className="text-xs text-[#0B1D3A] leading-relaxed">
              25+ years as a Business Broker, transaction advisor, and industry leader.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center flex flex-col items-center">
            <div className="bg-orange-50 text-[#FF4500] p-4 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-[#FF4500]" />
            </div>
            <h3 className="font-extrabold text-[#0B1D3A] text-sm uppercase mb-2">
              EDUCATOR AT HEART
            </h3>
            <p className="text-xs text-[#0B1D3A] leading-relaxed">
              A teacher who turns complex concepts into simple, actionable steps.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center flex flex-col items-center">
            <div className="bg-orange-50 text-[#FF4500] p-4 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7 text-[#FF4500]" />
            </div>
            <h3 className="font-extrabold text-[#0B1D3A] text-sm uppercase mb-2">
              PROVEN SYSTEMS
            </h3>
            <p className="text-xs text-[#0B1D3A] leading-relaxed">
              Creator of the tools, training, and processes that produce measurable results.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center flex flex-col items-center">
            <div className="bg-orange-50 text-[#FF4500] p-4 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center shrink-0">
              <Lightbulb className="w-7 h-7 text-[#FF4500]" />
            </div>
            <h3 className="font-extrabold text-[#0B1D3A] text-sm uppercase mb-2">
              LOGICAL & EASY TO UNDERSTAND
            </h3>
            <p className="text-xs text-[#0B1D3A] leading-relaxed">
              Training designed to be practical, straightforward, and immediately useful in the real world.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 8: FOOTER CTA BANNER */}
      <section className="w-full max-w-full overflow-x-hidden">
        <div className="bg-[#0B1D3A] text-white py-4 px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg w-full">
          <div className="flex items-center gap-5">
            <div className="shrink-0">
              <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Trophy" 
                className="h-12 w-auto object-contain" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg uppercase tracking-wide text-white">
                YOUR SUCCESS IS OUR MISSION.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Take the next step toward financial freedom and a rewarding career in business brokerage.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 w-full md:w-auto shrink-0">
            <a 
              href="https://faststart.training/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FF4500] hover:bg-[#E03E00] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer inline-flex"
            >
              <span>GET STARTED TODAY</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="https://faststart.training/"
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-slate-400 hover:border-white text-slate-200 hover:text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#FF4500]" />
              <span>REQUEST INFORMATION</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
