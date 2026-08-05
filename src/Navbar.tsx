import React, { useState } from 'react';
import { PageKey } from './App';
import logoImg from './images/BeABusinessBrokerLogo.png';

interface NavbarProps {
  currentPage: PageKey;
  onNavigate?: (page: PageKey) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (page: PageKey) => {
    onNavigate?.(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 w-full z-50 sticky top-0 shadow-sm h-auto">
      {/* Expanded container across full width with horizontal padding to fill left and right space */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-3 flex items-center justify-between gap-4 xl:gap-8 h-auto lg:h-[150px] ml-0 lg:ml-[55px] mt-0 lg:-mt-[38px]">
        
        {/* Logo Zone: shrink-0 guarantees it never gets crushed by text */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); handleNav('home'); }} 
          className="shrink-0 flex items-center"
        >
          <img src="/src/images/logo.png" 
            fetchPriority="high"
            className="h-[80px] lg:h-[400px] w-auto object-contain origin-left ml-0 lg:-ml-[101px] pt-0" 
            alt="Be A Business Broker" 
            onError={(e) => { e.currentTarget.src = logoImg; }}
          />
        </a>

        {/* Links Zone: flex-1 with justify-between forces links to spread out and fill the center space */}
        <div className="hidden lg:flex items-center justify-between gap-2 xl:gap-6 flex-1 w-full mx-auto -ml-[88px]">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            className={currentPage === 'home' 
              ? "text-[10px] xl:text-[11px] font-bold text-[#FF4500] uppercase tracking-wider border-b-2 border-[#FF4500] pb-1 text-center leading-tight"
              : "text-[10px] xl:text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] transition-colors text-center leading-tight"
            }
          >
            WHY BUSINESS<br />BROKERAGE?
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('begin'); }}
            className={currentPage === 'begin' 
              ? "text-[10px] xl:text-[11px] font-bold text-[#FF4500] uppercase tracking-wider border-b-2 border-[#FF4500] pb-1 text-center leading-tight"
              : "text-[10px] xl:text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] transition-colors text-center leading-tight"
            }
          >
            HOW DO I<br />BEGIN?
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('firms'); }}
            className={currentPage === 'firms' 
              ? "text-[10px] xl:text-[11px] font-bold text-[#FF4500] uppercase tracking-wider border-b-2 border-[#FF4500] pb-1 text-center leading-tight"
              : "text-[10px] xl:text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] transition-colors text-center leading-tight"
            }
          >
            FIRMS ARE LOOKING<br />FOR YOU
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('assessment'); }}
            className={currentPage === 'assessment' 
              ? "text-[10px] xl:text-[11px] font-bold text-[#FF4500] uppercase tracking-wider border-b-2 border-[#FF4500] pb-1 text-center leading-tight"
              : "text-[10px] xl:text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] transition-colors text-center leading-tight"
            }
          >
            BUSINESS BROKERAGE<br />ASSESSMENT
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('training'); }}
            className={currentPage === 'training' 
              ? "text-[10px] xl:text-[11px] font-bold text-[#FF4500] uppercase tracking-wider border-b-2 border-[#FF4500] pb-1 text-center leading-tight"
              : "text-[10px] xl:text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] transition-colors text-center leading-tight"
            }
          >
            FASTSTART ONLINE<br />TRAINING™
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('about'); }}
            className={currentPage === 'about' 
              ? "text-[10px] xl:text-[11px] font-bold text-[#FF4500] uppercase tracking-wider border-b-2 border-[#FF4500] pb-1 text-center leading-tight"
              : "text-[10px] xl:text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] transition-colors text-center leading-tight"
            }
          >
            ABOUT<br />LEN KRICK
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('stories'); }}
            className={currentPage === 'stories' 
              ? "text-[10px] xl:text-[11px] font-bold text-[#FF4500] uppercase tracking-wider border-b-2 border-[#FF4500] pb-1 text-center leading-tight"
              : "text-[10px] xl:text-[11px] font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] transition-colors text-center leading-tight"
            }
          >
            SUCCESS<br />STORIES
          </a>
        </div>

        {/* CTA Zone: shrink-0 guarantees the button stays intact */}
        <div className="shrink-0 hidden md:block">
          <a 
            href="https://www.FastStart.Training" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#FF4500] hover:bg-orange-600 transition text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide shadow-md whitespace-nowrap inline-block"
          >
            ENROLL NOW
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden flex items-center shrink-0">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-[#0B1D3A] text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg flex flex-col">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            className={currentPage === 'home' 
              ? "text-xs font-bold text-[#FF4500] uppercase tracking-wider py-1"
              : "text-xs font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] py-1"
            }
          >
            Why Business Brokerage?
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('begin'); }}
            className={currentPage === 'begin' 
              ? "text-xs font-bold text-[#FF4500] uppercase tracking-wider py-1"
              : "text-xs font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] py-1"
            }
          >
            How Do I Begin?
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('firms'); }}
            className={currentPage === 'firms' 
              ? "text-xs font-bold text-[#FF4500] uppercase tracking-wider py-1"
              : "text-xs font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] py-1"
            }
          >
            Firms Are Looking For You
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('assessment'); }}
            className={currentPage === 'assessment' 
              ? "text-xs font-bold text-[#FF4500] uppercase tracking-wider py-1"
              : "text-xs font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] py-1"
            }
          >
            Business Brokerage Assessment
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('training'); }}
            className={currentPage === 'training' 
              ? "text-xs font-bold text-[#FF4500] uppercase tracking-wider py-1"
              : "text-xs font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] py-1"
            }
          >
            FastStart Online Training™
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('about'); }}
            className={currentPage === 'about' 
              ? "text-xs font-bold text-[#FF4500] uppercase tracking-wider py-1"
              : "text-xs font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] py-1"
            }
          >
            About Len Krick
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav('stories'); }}
            className={currentPage === 'stories' 
              ? "text-xs font-bold text-[#FF4500] uppercase tracking-wider py-1"
              : "text-xs font-bold text-[#0B1D3A] uppercase tracking-wider hover:text-[#FF4500] py-1"
            }
          >
            Success Stories
          </a>
          <div className="pt-2">
            <a 
              href="https://www.FastStart.Training" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FF4500] hover:bg-orange-600 transition text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide shadow-md block text-center"
            >
              ENROLL NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
