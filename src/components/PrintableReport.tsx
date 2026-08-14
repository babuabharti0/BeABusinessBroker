import React from 'react';
import { CalculatedResults } from '../assessmentUtils';

interface PrintableReportProps {
  results: CalculatedResults;
  lead: {
    firstName: string;
    lastName: string;
  };
  assessmentMeta: {
    dateStr: string;
    idStr: string;
  };
}

export const PrintableReport = React.forwardRef<HTMLDivElement, PrintableReportProps>(
  ({ results, lead, assessmentMeta }, ref) => {
    const fullName = `${lead.firstName || 'Valued'} ${lead.lastName || 'Candidate'}`.trim();

    return (
      <div ref={ref} className="bg-white text-[#1e293b] w-[720px] mx-auto p-8 font-sans antialiased subpixel-antialiased" style={{ minHeight: '1056px' }}>
        {/* NAVY HEADER BAND */}
        <div className="bg-[#001133] text-white p-6 border-b-4 border-[#D96400] flex justify-between items-center rounded-t-xl mb-6">
          <div>
            <div className="text-[#D96400] font-bold text-sm tracking-widest uppercase mb-1">
              PROFESSIONAL CANDIDATE ASSESSMENT
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">
              Business Broker Career Match Report™
            </h1>
            <p className="text-[13px] text-[#d1d5db] italic">
              "Discover Your Potential. Plan Your Future. Make a Difference."
            </p>
          </div>

          <div className="text-right text-[11px] text-[#d1d5db] space-y-1 bg-[#ffffff0c] p-3 rounded border border-[#ffffff19] shrink-0">
            <div>
              <span className="text-[#9ca3af]">Prepared exclusively for:</span>{' '}
              <strong className="text-white text-[13px]">{fullName}</strong>
            </div>
            <div>
              <span className="text-[#9ca3af]">Assessment date:</span>{' '}
              <strong className="text-white">{assessmentMeta.dateStr}</strong>
            </div>
            <div>
              <span className="text-[#9ca3af]">Assessment ID:</span>{' '}
              <strong className="text-[#fbbf24] font-mono">{assessmentMeta.idStr}</strong>
            </div>
          </div>
        </div>

        {/* CORE CATEGORY SCORES GRID */}
        <div className="bg-[#f9fafb] p-5 rounded-lg border border-[#e5e7eb] mb-6 flex flex-row items-center gap-6">
          <div className="flex flex-col items-center justify-center border-r border-[#e5e7eb] pr-6 w-1/3">
            <div className="text-5xl font-black text-[#001133] mb-2">{results.overallScore}%</div>
            <div className="text-[11px] font-bold tracking-widest text-[#6b7280] uppercase mb-3 text-center">
              OVERALL CAREER MATCH
            </div>
            <div
              className="px-5 py-1.5 rounded-full text-xs font-extrabold text-white uppercase tracking-wider text-center"
              style={{ backgroundColor: results.scoreBand.color }}
            >
              {results.scoreBand.rating}
            </div>
          </div>

          <div className="w-2/3 space-y-3">
            <h3 className="text-xs font-bold text-[#001133] uppercase tracking-wider border-b border-[#e5e7eb] pb-2 mb-3">
              Core Category Scores
            </h3>

            {Object.keys(results.categoryScores).map((catName) => {
              const score = Math.round(results.categoryScores[catName as keyof typeof results.categoryScores]);
              let barColor = '#6B7280';
              if (score >= 85) barColor = '#1E8449';
              else if (score >= 70) barColor = '#123B9E';
              else if (score >= 60) barColor = '#D96400';

              return (
                <div key={catName} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-[#001133]">
                    <span>{catName}</span>
                    <span>{score}%</span>
                  </div>
                  <div className="w-full bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${score}%`, backgroundColor: barColor }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STRENGTHS AND SKILLS - 2 Columns */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Strengths */}
          <div className="bg-white p-4 rounded-lg border border-[#e5e7eb]">
            <div className="flex items-center gap-2 border-b border-[#f3f4f6] pb-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-[#d1fae5] text-[#1E8449] flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </div>
              <h3 className="font-bold text-[#001133] text-xs uppercase tracking-wide">
                Your Greatest Strengths
              </h3>
            </div>

            <div className="space-y-3">
              {results.strengths.slice(0, 3).map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[11px] font-bold text-[#1E8449] flex items-start gap-1">
                    <span>•</span>
                    <span>{s.title}</span>
                  </div>
                  <p className="text-[10px] text-[#4b5563] leading-relaxed pl-2">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white p-4 rounded-lg border border-[#e5e7eb]">
            <div className="flex items-center gap-2 border-b border-[#f3f4f6] pb-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-[#dbeafe] text-[#123B9E] flex items-center justify-center text-xs font-bold shrink-0">
                ^
              </div>
              <h3 className="font-bold text-[#001133] text-xs uppercase tracking-wide">
                Skills You Can Develop
              </h3>
            </div>

            <div className="space-y-3">
              {results.developmentAreas.slice(0, 3).map((dev, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[11px] font-bold text-[#123B9E] flex items-start gap-1">
                    <span>•</span>
                    <span>{dev.title}</span>
                  </div>
                  <p className="text-[10px] text-[#4b5563] leading-relaxed pl-2">{dev.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OWNER INSIGHTS & RECOMMENDATION */}
        <div className="bg-[#001133] text-white p-5 rounded-xl border border-[#123B9E] mb-6">
          <h3 className="font-bold text-[#fbbf24] text-xs uppercase tracking-wide mb-2">
            What Brokerage Owners Told Us
          </h3>
          <blockquote className="text-[13px] text-[#e5e7eb] leading-relaxed italic mb-2">
            "{results.ownerInsight.headline}"
          </blockquote>
          <p className="text-[11px] text-[#d1d5db] leading-relaxed border-t border-[#1f2937] pt-2">
            {results.ownerInsight.text}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-[#123B9E] mb-6">
          <h3 className="text-base font-extrabold text-[#001133] mb-3 border-b border-[#e5e7eb] pb-2">
            Len Krick's Recommendation
          </h3>

          <div className="space-y-2 text-[13px] text-[#374151] leading-relaxed">
            {results.recommendationParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-[#f3f4f6] text-[11px] text-[#6b7280] font-medium">
            <div className="font-bold text-[#001133] text-[13px]">Len Krick, MBA</div>
            <div>International Business Brokers Hall of Fame Inductee</div>
            <div>Founder, BeABusinessBroker.Today™</div>
          </div>
        </div>
      </div>
    );
  }
);