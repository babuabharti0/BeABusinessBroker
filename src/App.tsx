/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense, lazy } from 'react';
import CookieConsent from './components/CookieConsent';

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

  const loadingFallback = <div className="min-h-screen bg-white" />;

  return (
    <>
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
      <CookieConsent />
    </>
  );
}
