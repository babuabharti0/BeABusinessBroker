import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

declare global {
  interface Window {
    AnalyticsInjected?: boolean;
    dataLayer?: any[];
    fbq?: any;
    _fbq?: any;
  }
}

const COOKIE_NAME = 'analytics_consent';

const injectAnalytics = () => {
  if (typeof window === 'undefined' || window.AnalyticsInjected) return;
  window.AnalyticsInjected = true;

  // Google Analytics Example (Replace G-XXXXXXXXXX with actual ID)
  const gaScript = document.createElement('script');
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  gaScript.async = true;
  document.head.appendChild(gaScript);

  const gaInit = document.createElement('script');
  gaInit.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `;
  document.head.appendChild(gaInit);

  // Meta Pixel Example (Replace XXXXXXXXXXXXXXXX with actual ID)
  const metaScript = document.createElement('script');
  metaScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'XXXXXXXXXXXXXXXX');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(metaScript);
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get(COOKIE_NAME);
    if (consent === 'granted') {
      injectAnalytics();
    } else if (consent !== 'denied') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_NAME, 'granted', { secure: true, sameSite: 'strict', expires: 365 });
    setShowBanner(false);
    injectAnalytics();
  };

  const handleDecline = () => {
    Cookies.set(COOKIE_NAME, 'denied', { secure: true, sameSite: 'strict', expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 sm:p-6 shadow-2xl z-[9999] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-700 font-sans">
      <div className="text-sm sm:text-base max-w-5xl">
        <p className="font-bold mb-1 text-lg">We value your privacy</p>
        <p className="text-gray-300 text-sm leading-relaxed">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
          By clicking "Accept All", you consent to our use of cookies in accordance with GDPR and CCPA guidelines.
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={handleDecline}
          className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white bg-transparent border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
