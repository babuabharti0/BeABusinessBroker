import React, { forwardRef } from 'react';

// 1. DEFINE EXACT PROPS RECEIVED FROM PARENT
interface PrintableReportProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  scores: {
    personal: number;
    drive: number;
    comm: number;
    compatibility: number;
    experience: number;
    knowledge: number;
    overall: number;
  };
  assessmentId: string;
  currentDate: string;
  strengthsText: string;
  recommendationText: string;
}

// 2. USE FORWARD_REF SO HTML2PDF CAN TARGET THE DOM
const PrintableReport = forwardRef<HTMLDivElement, PrintableReportProps>(
  ({ formData, scores, assessmentId, currentDate, strengthsText, recommendationText }, ref) => {
    
    return (
      /* CRITICAL OFF-SCREEN RENDERER: Must be absolute, NOT display: none */
      <div className="absolute -top-[10000px] -left-[10000px] opacity-0 pointer-events-none">
        
        {/* THIS IS THE ACTUAL PDF CANVAS */}
        <div 
          ref={ref} 
          className="max-w-4xl mx-auto p-10 bg-white text-gray-800 font-sans leading-relaxed"
          style={{ width: '800px', minHeight: '1100px' }} 
        >
          {/* HEADER SECTION */}
          <div className="border-b-4 border-blue-600 pb-6 mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tight">
              Career Match Report™
            </h1>
            <p className="text-lg text-gray-600 mt-2 font-medium">
              Prepared for {formData.firstName} {formData.lastName}
            </p>
            <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500 font-mono">
              <span>Date: {currentDate}</span>
              <span>ID: {assessmentId}</span>
            </div>
          </div>

          {/* SCORES SECTION */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">
              Assessment Scoring Matrix
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Personal Profile:</span>
                <span className="text-blue-700">{scores.personal}%</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Drive & Ambition:</span>
                <span className="text-blue-700">{scores.drive}%</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Communication:</span>
                <span className="text-blue-700">{scores.comm}%</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Compatibility:</span>
                <span className="text-blue-700">{scores.compatibility}%</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Business Experience:</span>
                <span className="text-blue-700">{scores.experience}%</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Business Knowledge:</span>
                <span className="text-blue-700">{scores.knowledge}%</span>
              </div>
            </div>
            
            {/* OVERALL SCORE HIGHLIGHT */}
            <div className="mt-8 bg-blue-600 text-white p-6 rounded-lg text-center shadow-inner">
              <span className="block text-sm uppercase tracking-wider opacity-90 mb-1">Overall Match Score</span>
              <span className="text-5xl font-black">{scores.overall}%</span>
            </div>
          </div>

          {/* ANALYSIS SECTION */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-4">
              Strengths Analysis
            </h2>
            <p className="text-gray-700 text-lg whitespace-pre-wrap leading-relaxed">
              {strengthsText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-4">
              Strategic Recommendation
            </h2>
            <p className="text-gray-700 text-lg whitespace-pre-wrap leading-relaxed font-semibold">
              {recommendationText}
            </p>
          </div>

        </div>
      </div>
    );
  }
);

PrintableReport.displayName = 'PrintableReport';
export default PrintableReport;