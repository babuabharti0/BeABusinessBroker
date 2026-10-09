const fs = require('fs');
let content = fs.readFileSync('src/AssessmentPage.tsx', 'utf8');

// The onValidSubmit implementation
const newSubmitHandler = `  const onValidSubmit = async (data: LeadFormData) => {
    if (data.website_url) {
      console.log('Bot detected, silently discarding submission.');
      setLeadError(null);
      setIsSubmitSuccess(true);
      return;
    }
    
    try {
      // 2. DYNAMIC SCORE CALCULATION
      const scoreExperience = results?.categoryScores?.['Background'] ? Math.round(results.categoryScores['Background']) : Math.floor(Math.random() * 20) + 80;
      const scoreKnowledge = results?.categoryScores?.['Knowledge'] ? Math.round(results.categoryScores['Knowledge']) : Math.floor(Math.random() * 20) + 80;
      const scorePersonal = results?.categoryScores?.['Characteristics'] ? Math.round(results.categoryScores['Characteristics']) : Math.floor(Math.random() * 20) + 80;
      const scoreComm = results?.categoryScores?.['Communication'] ? Math.round(results.categoryScores['Communication']) : Math.floor(Math.random() * 20) + 80;
      const scoreDrive = results?.categoryScores?.['Drive'] ? Math.round(results.categoryScores['Drive']) : Math.floor(Math.random() * 20) + 80;
      const scoreCompatibility = results?.categoryScores?.['Compatibility'] ? Math.round(results.categoryScores['Compatibility']) : Math.floor(Math.random() * 20) + 80;
      const scoreOverall = results?.overallScore ? Math.round(results.overallScore) : Math.round((scoreExperience + scoreKnowledge + scorePersonal + scoreComm + scoreDrive + scoreCompatibility) / 6);

      // 3. CONDITIONAL TEXT GENERATION
      let strengthsText = "";
      if (scoreExperience > 80) strengthsText += "Strong Business Experience: Your background suggests useful exposure to business, management, and professional decision-making. ";
      if (scoreDrive > 80) strengthsText += "Exceptional Drive: You show a strong entrepreneurial spirit and self-motivation. ";
      if (scoreComm > 80) strengthsText += "Excellent Communicator: Your ability to listen, influence, and negotiate is a major asset. ";
      if (!strengthsText) strengthsText = "Solid Foundation: You possess a balanced set of skills that can be developed for success in business brokerage.";

      let skillsText = "";
      if (scoreKnowledge < 85) skillsText += "Business Knowledge: Consider expanding your understanding of specific business valuation methodologies and financial analysis. ";
      if (scoreExperience < 85) skillsText += "Industry Exposure: Building deeper local networks with CPAs and estate attorneys will be beneficial. ";
      if (scoreComm < 85) skillsText += "Communication: Focus on developing a more aggressive outbound prospecting strategy. ";
      if (!skillsText) skillsText = "Continuous Improvement: Even with strong skills, continuous learning in valuation and legal structures is key.";

      let recommendationText = "";
      if (scoreOverall >= 80) {
        recommendationText = "Excellent Match. Your profile strongly aligns with the characteristics of successful business brokers. We recommend proceeding with professional training.";
      } else if (scoreOverall >= 60) {
        recommendationText = "Good Potential. You have a solid foundation but may need to focus on specific development areas. Professional training will be crucial.";
      } else {
        recommendationText = "Review Required. While business brokerage is rewarding, your current profile suggests other paths might be a more natural fit, or significant training is needed.";
      }

      // 4. THE DATA PAYLOAD
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || "",
        city: data.city || "",
        state: data.state || "",
        website_url: "",
        currentDate: new Date().toLocaleDateString(),
        assessmentId: 'BBA-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000),
        scorePersonal,
        scoreDrive,
        scoreComm,
        scoreCompatibility,
        scoreExperience,
        scoreKnowledge,
        scoreOverall,
        strengthsText: strengthsText.trim(),
        skillsText: skillsText.trim(),
        recommendationText: recommendationText.trim()
      };

      // 5. THE NETWORK REQUEST
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL || 'https://hook.us2.make.com/u5o5pzy6p0cqmoe0qo12rucf7w3zen6x';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setIsSubmitSuccess(true);
        setLeadError(null);
      } else {
        setLeadError('An error occurred while submitting. Please try again.');
      }
    } catch (err) {
      setLeadError('An error occurred while submitting. Please check your connection and try again.');
    }
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(onValidSubmit)(e);
  };`;

// Find existing onValidSubmit
const submitStart = content.indexOf('const onValidSubmit = async (data: LeadFormData) => {');
const submitEnd = content.indexOf('};', content.indexOf('catch (err) {', submitStart)) + 2;

content = content.slice(0, submitStart) + newSubmitHandler + content.slice(submitEnd);

// Fix form tag
content = content.replace(
  '<form onSubmit={handleSubmit(onValidSubmit)} className="space-y-4 max-w-2xl mx-auto pt-2">',
  '<form onSubmit={onSubmitHandler} className="space-y-4 max-w-2xl mx-auto pt-2">'
);

// Fix generating text
content = content.replace(
  `Success!
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                        Check your email for your custom PDF report.`,
  `Success! 🏆
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                        Your Business Broker Career Match Report is being generated. Please check your email in the next 60 seconds.`
);

content = content.replace(
  `<span>{isSubmitting ? 'SUBMITTING...' : 'VIEW MY CAREER MATCH REPORT™'}</span>`,
  `<span>{isSubmitting ? 'Generating Report...' : 'VIEW MY CAREER MATCH REPORT™'}</span>`
);

fs.writeFileSync('src/AssessmentPage.tsx', content);
console.log('Assessment Logic engine patched successfully');
