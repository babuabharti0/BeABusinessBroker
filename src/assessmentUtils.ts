import { CategoryName, CATEGORY_WEIGHTS, QUESTIONS } from './assessmentData';

export interface ScoreBand {
  range: string;
  rating: string;
  color: string;
  recommendationId: number;
}

export interface CalculatedResults {
  categoryScores: Record<CategoryName, number>;
  overallScore: number; // rounded for display
  exactOverallScore: number;
  scoreBand: ScoreBand;
  strengths: { category: CategoryName; title: string; text: string }[];
  developmentAreas: { title: string; text: string; tier: number; score: number }[];
  ownerInsight: { headline: string; text: string };
  interviewHighlights: string[];
  recommendationParagraphs: string[];
  ctaBlock: {
    heading: string;
    buttonText: string;
    message: string;
    destination: string;
  };
}

export function calculateAssessmentResults(answers: Record<number, number>): CalculatedResults {
  // Initialize category trackers
  const categoryWeightedSums: Record<CategoryName, number> = {
    'Personal Characteristics': 0,
    'Entrepreneurial Drive': 0,
    'Communication Skills': 0,
    'Career Compatibility': 0,
    'Business Experience': 0,
    'Business Knowledge': 0,
  };

  const categoryMaxPoints: Record<CategoryName, number> = {
    'Personal Characteristics': 0,
    'Entrepreneurial Drive': 0,
    'Communication Skills': 0,
    'Career Compatibility': 0,
    'Business Experience': 0,
    'Business Knowledge': 0,
  };

  // Process all 42 questions
  QUESTIONS.forEach((q) => {
    const val = answers[q.id] || 1; // default to 1 if missing
    const weightedScore = val * q.weight;
    const maxPts = 5 * q.weight;

    categoryWeightedSums[q.category] += weightedScore;
    categoryMaxPoints[q.category] += maxPts;
  });

  // Calculate percentage per category
  const categoryScores: Record<CategoryName, number> = {
    'Personal Characteristics': 0,
    'Entrepreneurial Drive': 0,
    'Communication Skills': 0,
    'Career Compatibility': 0,
    'Business Experience': 0,
    'Business Knowledge': 0,
  };

  (Object.keys(categoryWeightedSums) as CategoryName[]).forEach((cat) => {
    const max = categoryMaxPoints[cat] || 1;
    categoryScores[cat] = (categoryWeightedSums[cat] / max) * 100;
  });

  // Calculate weighted overall score
  let exactOverallScore = 0;
  (Object.keys(CATEGORY_WEIGHTS) as CategoryName[]).forEach((cat) => {
    exactOverallScore += categoryScores[cat] * CATEGORY_WEIGHTS[cat];
  });

  const overallScore = Math.round(exactOverallScore);

  // Determine score band
  let scoreBand: ScoreBand;
  if (exactOverallScore >= 90) {
    scoreBand = { range: '90–100', rating: 'Outstanding Career Match', color: '#146638', recommendationId: 1 };
  } else if (exactOverallScore >= 80) {
    scoreBand = { range: '80–89', rating: 'Excellent Career Match', color: '#1E8449', recommendationId: 2 };
  } else if (exactOverallScore >= 70) {
    scoreBand = { range: '70–79', rating: 'Strong Potential', color: '#123B9E', recommendationId: 3 };
  } else if (exactOverallScore >= 60) {
    scoreBand = { range: '60–69', rating: 'Possible Match', color: '#D96400', recommendationId: 4 };
  } else {
    scoreBand = { range: 'below 60', rating: 'Consider Carefully', color: '#6B7280', recommendationId: 5 };
  }

  // Rank categories for Greatest Strengths (Top 4)
  const tieOrder: CategoryName[] = [
    'Personal Characteristics',
    'Entrepreneurial Drive',
    'Communication Skills',
    'Career Compatibility',
    'Business Experience',
    'Business Knowledge',
  ];

  const sortedCategories = (Object.keys(categoryScores) as CategoryName[]).sort((a, b) => {
    const scoreDiff = categoryScores[b] - categoryScores[a];
    if (Math.abs(scoreDiff) > 0.001) return scoreDiff;
    return tieOrder.indexOf(a) - tieOrder.indexOf(b);
  });

  const top4Categories = sortedCategories.slice(0, 4);

  const strengthCopyMap: Record<CategoryName, { title: string; text: string }> = {
    'Communication Skills': {
      title: 'Excellent Communication Skills',
      text: 'Communication and relationship building may be among your strongest assets. These qualities are central to building trust with business owners, buyers, and referral sources.',
    },
    'Entrepreneurial Drive': {
      title: 'Strong Entrepreneurial Drive',
      text: 'Independence, self-motivation, and initiative come through clearly in your responses. These are essential for building a brokerage practice.',
    },
    'Personal Characteristics': {
      title: 'Strong Professional Character',
      text: 'Your responses indicate personal qualities that are highly valued in business brokerage, including dependability, resilience, adaptability, and a desire to help others.',
    },
    'Business Experience': {
      title: 'Strong Business Experience',
      text: 'Your background suggests useful exposure to business, management, and professional decision-making. That experience may help you relate to business-owner clients.',
    },
    'Business Knowledge': {
      title: 'Strong Business Judgment',
      text: 'You already possess useful business knowledge. This can help you understand financial, operational, and transaction issues more quickly.',
    },
    'Career Compatibility': {
      title: 'Excellent Career Compatibility',
      text: 'The work style, independence, flexibility, and professional purpose of business brokerage appear to align well with what you want from a career.',
    },
  };

  const strengths = top4Categories.map((cat) => ({
    category: cat,
    title: strengthCopyMap[cat].title,
    text: strengthCopyMap[cat].text,
  }));

  // Calculate candidate development areas (lowest 3)
  const qVal = (id: number) => answers[id] || 1;

  const candidateAreas = [
    {
      title: 'Financial Statement Analysis',
      text: 'Strengthening this skill will improve your confidence when evaluating businesses, discussing pricing, and preparing for buyer and lender questions.',
      tier: 1,
      score: ((qVal(6) + qVal(8)) / 2 / 5) * 100,
    },
    {
      title: 'Business Valuation',
      text: 'Learning valuation methods will enhance your credibility and your negotiating power. It is one of the most important technical skills in brokerage and it can be learned.',
      tier: 1,
      score: (qVal(9) / 5) * 100,
    },
    {
      title: 'Prospecting & Lead Generation',
      text: 'Developing consistent lead generation habits will fuel your long-term success and help you build a listing pipeline.',
      tier: 1,
      score: (qVal(10) / 5) * 100,
    },
    {
      title: 'Sales & Negotiation Strategy',
      text: 'Negotiation skills can be developed with training, scripts, role play, and transaction experience.',
      tier: 1,
      score: ((qVal(11) + qVal(7)) / 2 / 5) * 100,
    },
    {
      title: 'Contracts & Transaction Documents',
      text: 'Understanding transaction documents, confidentiality agreements, offers, and due diligence materials will help you manage deals more professionally.',
      tier: 1,
      score: (qVal(12) / 5) * 100,
    },
    {
      title: 'Business Opportunity Analysis',
      text: 'Learning how to evaluate business opportunities will strengthen your ability to advise sellers, qualify buyers, and recognize viable transactions.',
      tier: 1,
      score: (qVal(13) / 5) * 100,
    },
    {
      title: 'Business Knowledge',
      text: 'Business knowledge is fully teachable. Structured training will shorten the time it takes to speak confidently with owners, buyers, and lenders.',
      tier: 2,
      score: categoryScores['Business Knowledge'],
    },
    {
      title: 'Business Exposure',
      text: 'Limited prior business experience is not a disqualifier. It simply means structured training and real-world examples will be especially important.',
      tier: 2,
      score: categoryScores['Business Experience'],
    },
    {
      title: 'Relationship Building & Communication',
      text: 'Communication skills improve with practice, process, and training. Strong listening, questioning, and follow-up habits are essential in this profession.',
      tier: 3,
      score: categoryScores['Communication Skills'],
    },
    {
      title: 'Building Daily Success Habits',
      text: 'Business brokerage requires self-direction. Daily routines, prospecting habits, and accountability systems can strengthen this area.',
      tier: 3,
      score: categoryScores['Entrepreneurial Drive'],
    },
    {
      title: 'Career Fit Evaluation',
      text: 'Learn more about the day-to-day realities of business brokerage before making a major career decision.',
      tier: 4,
      score: categoryScores['Career Compatibility'],
    },
  ];

  // Sort candidate areas ascending by score; prefer lower tier (tier 1 > tier 2 etc) on close scores
  candidateAreas.sort((a, b) => {
    const diff = a.score - b.score;
    if (Math.abs(diff) > 2.0) return diff; // if scores differ by more than 2%, sort by score
    return a.tier - b.tier; // otherwise prefer tier 1
  });

  const developmentAreas = candidateAreas.slice(0, 3);

  // What Brokerage Owners Told Us (driven by highest category)
  const highestCategory = sortedCategories[0];
  const ownerInsightMap: Record<CategoryName, { headline: string; text: string }> = {
    'Communication Skills': {
      headline: 'Communication was one of the most frequently mentioned characteristics identified by brokerage office owners as essential for long-term success.',
      text: 'Your ability to communicate clearly, listen effectively, and build relationships may be one of your greatest advantages in this profession.',
    },
    'Entrepreneurial Drive': {
      headline: 'Brokerage office owners consistently value candidates who are self-motivated, goal-oriented, and willing to create their own opportunities.',
      text: 'Your responses suggest that you may have the entrepreneurial mindset needed to build a successful brokerage practice.',
    },
    'Personal Characteristics': {
      headline: 'Integrity, persistence, dependability, and professionalism are repeatedly identified as traits brokerage owners look for in new brokers.',
      text: 'Your responses suggest that your personal qualities may support long-term success in this profession.',
    },
    'Business Experience': {
      headline: 'Relevant business experience can help new brokers understand the concerns, pressures, and motivations of business owners.',
      text: 'Your background may help you relate to sellers and buyers more effectively as you develop your technical skills.',
    },
    'Business Knowledge': {
      headline: 'Business knowledge helps brokers understand financial information, valuation, marketing, and transaction issues.',
      text: 'Your responses suggest that your business knowledge may help shorten your learning curve.',
    },
    'Career Compatibility': {
      headline: 'Successful business brokers tend to be people who are comfortable with independence, flexibility, and long-term professional development.',
      text: 'Your responses suggest that the business brokerage career environment may align well with your goals and work preferences.',
    },
  };

  const ownerInsight = ownerInsightMap[highestCategory];

  // Professional Interview Highlights (4 top categories + 1 fallback = 5)
  const highlightCategoryMap: Record<CategoryName, string> = {
    'Communication Skills': 'Exceptional communication and interpersonal skills',
    'Entrepreneurial Drive': 'High entrepreneurial motivation and drive',
    'Business Experience': 'Relevant business and professional work experience',
    'Personal Characteristics': 'Demonstrated integrity, dependability, and work ethic',
    'Business Knowledge': 'Existing business knowledge that shortens your learning curve',
    'Career Compatibility': 'Clear understanding of the brokerage career and how you fit it',
  };

  const interviewHighlights = top4Categories.map((cat) => highlightCategoryMap[cat]);
  interviewHighlights.push('Proven ability to build and maintain professional relationships');

  // Len Krick's Recommendation Paragraphs
  const recommendationsMap: Record<number, string[]> = {
    1: [
      'Based on your responses, I believe you possess many of the characteristics found in highly successful business brokers. Your assessment indicates a strong combination of business judgment, communication ability, personal integrity, motivation, and entrepreneurial drive.',
      'If I were interviewing you for a position in a business brokerage office, your assessment results would place you among the strongest candidates.',
      'Of course, no assessment can guarantee success. Technical knowledge such as business valuation, marketing businesses for sale, buyer qualification, negotiations, due diligence, and transaction management must still be learned. Fortunately, those are teachable skills.',
      'I encourage you to take the next step and begin developing the professional knowledge that will allow your natural abilities to flourish.',
    ],
    2: [
      'Your assessment indicates that you possess many of the qualities consistently found in successful business brokers. Brokerage office owners across the country identified these same characteristics as being among the most important predictors of long-term success.',
      'Your strengths suggest that you have an excellent foundation for building a successful brokerage career.',
      'Like every new business broker, you will need to learn the technical side of the profession. Fortunately, the skills required to value businesses, structure transactions, negotiate agreements, and manage the sales process can all be learned through proper training and practical experience.',
      'I believe you have excellent potential and encourage you to continue exploring this profession.',
    ],
    3: [
      'Your assessment suggests that you have many positive characteristics that align well with business brokerage. While your results indicate several notable strengths, they also identify areas that may benefit from additional development.',
      'The encouraging news is that many of the areas where you scored lower involve skills that can be strengthened through experience, education, and coaching.',
      'Successful business brokers come from many different backgrounds. What matters most is a willingness to learn, work hard, and continually improve.',
      'I believe you have genuine potential to succeed if you commit yourself to developing both your technical knowledge and your professional skills.',
    ],
    4: [
      'Your assessment suggests that business brokerage could be a good fit for you, although several important areas may require additional development before you are likely to achieve your full potential.',
      'Many successful brokers entered this profession without possessing every ideal characteristic measured by this assessment. They succeeded because they recognized their weaknesses, invested in learning, sought mentoring, and remained committed to continuous improvement.',
      'If this profession genuinely interests you, I would not allow this score to discourage you. Instead, view it as a roadmap that identifies where your greatest opportunities for growth exist.',
      'With commitment, proper training, and persistence, many of these characteristics can be strengthened over time.',
    ],
    5: [
      'Thank you for completing the Business Broker Career Match Assessment.',
      'Your responses suggest that your current interests, work preferences, or personal characteristics may not align as closely with business brokerage as those of many successful brokers.',
      'That does not mean you cannot succeed. It simply means that this profession may require greater personal adjustment and development than it does for someone whose natural strengths more closely match the demands of the business.',
      'Before making a career decision, I encourage you to learn more about what business brokers actually do each day. If you remain excited about becoming a business broker, don\'t let this assessment be the final word.',
    ],
  };

  const recommendationParagraphs = recommendationsMap[scoreBand.recommendationId];

  // CTA Block Determination
  const coreAptitudeAvg =
    (categoryScores['Personal Characteristics'] +
      categoryScores['Communication Skills'] +
      categoryScores['Entrepreneurial Drive']) /
    3;

  let ctaBlock: CalculatedResults['ctaBlock'];

  if (coreAptitudeAvg >= 80 && categoryScores['Business Knowledge'] < 60) {
    ctaBlock = {
      heading: 'Technical Skills Can Be Learned',
      buttonText: 'BEGIN YOUR PROFESSIONAL TRAINING',
      message:
        'Your natural aptitude appears stronger than your current technical knowledge. FastStart was created to help candidates build exactly those professional skills.',
      destination:
        'https://www.FastStart.Training?utm_source=bbca&utm_medium=report&utm_campaign=career_match',
    };
  } else if (exactOverallScore >= 80) {
    ctaBlock = {
      heading: 'Continue Building Your Professional Qualifications',
      buttonText: 'BEGIN YOUR PROFESSIONAL TRAINING',
      message:
        'FastStart Online Broker Training™ can help you develop the knowledge, tools, and confidence needed to build a successful business brokerage career.',
      destination:
        'https://www.FastStart.Training?utm_source=bbca&utm_medium=report&utm_campaign=career_match',
    };
  } else if (exactOverallScore >= 70) {
    ctaBlock = {
      heading: 'Learn How to Build the Skills for Success',
      buttonText: 'LEARN ABOUT FASTSTART TRAINING',
      message:
        'Your assessment indicates meaningful potential. FastStart can help you strengthen the technical skills and systems required for the profession.',
      destination:
        'https://www.FastStart.Training?utm_source=bbca&utm_medium=report&utm_campaign=career_match',
    };
  } else if (exactOverallScore >= 60) {
    ctaBlock = {
      heading: 'Explore the Profession and Your Next Steps',
      buttonText: 'LEARN MORE ABOUT BUSINESS BROKERAGE',
      message:
        'Before making a career decision, review the profession carefully and consider how training could help you close the gaps.',
      destination:
        'https://www.BeABusinessBroker.Today?utm_source=bbca&utm_medium=report&utm_campaign=career_match',
    };
  } else {
    ctaBlock = {
      heading: 'Learn More Before Making a Career Decision',
      buttonText: 'EXPLORE BUSINESS BROKERAGE',
      message:
        'Your results suggest that you should learn more about the profession before investing significant time or money.',
      destination:
        'https://www.BeABusinessBroker.Today?utm_source=bbca&utm_medium=report&utm_campaign=career_match',
    };
  }

  return {
    categoryScores,
    overallScore,
    exactOverallScore,
    scoreBand,
    strengths,
    developmentAreas,
    ownerInsight,
    interviewHighlights,
    recommendationParagraphs,
    ctaBlock,
  };
}
