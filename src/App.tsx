/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./HomePage'));
const HowDoIBeginPage = lazy(() => import('./HowDoIBeginPage'));
const FirmsPage = lazy(() => import('./FirmsPage'));
const AssessmentPage = lazy(() => import('./AssessmentPage'));
const TrainingPage = lazy(() => import('./TrainingPage'));
const AboutPage = lazy(() => import('./AboutPage'));
const SuccessStoriesPage = lazy(() => import('./SuccessStoriesPage'));

export type PageKey = 'home' | 'begin' | 'firms' | 'assessment' | 'training' | 'about' | 'stories';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');

  const loadingFallback = (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center w-full overflow-x-hidden max-w-full">
      <div className="relative flex justify-center items-center mb-10 h-24 w-24">
        <div className="absolute inset-0 border-4 border-[#1E3A8A]/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        <div className="absolute inset-2 border-4 border-[#F57E45]/40 rounded-full animate-pulse"></div>
        <div className="absolute inset-4 border-4 border-[#FBBF24] border-t-transparent rounded-full animate-spin"></div>
        <div className="w-10 h-10 bg-[#000067] rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-[#000067]/30">
           <svg className="w-5 h-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
           </svg>
        </div>
      </div>
      <div className="max-w-md">
        <p className="text-lg font-bold text-[#1E3A8A] italic mb-3 leading-relaxed">
          "In business brokerage, your experience, relationships, and judgment become more valuable over time."
        </p>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">— The Business Broker Advantage</p>
      </div>
    </div>
  );

  return (
    <Suspense fallback={loadingFallback}>
      {currentPage === 'assessment' ? (
        <AssessmentPage onNavigate={setCurrentPage} />
      ) : currentPage === 'stories' ? (
        <SuccessStoriesPage onNavigate={setCurrentPage} />
      ) : currentPage === 'about' ? (
        <AboutPage onNavigate={setCurrentPage} />
      ) : currentPage === 'training' ? (
        <TrainingPage onNavigate={setCurrentPage} />
      ) : currentPage === 'firms' ? (
        <FirmsPage onNavigate={setCurrentPage} />
      ) : currentPage === 'begin' ? (
        <HowDoIBeginPage onNavigate={setCurrentPage} />
      ) : (
        <HomePage onNavigate={setCurrentPage} />
      )}
    </Suspense>
  );
}
