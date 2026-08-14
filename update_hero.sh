#!/bin/bash
cat src/HowDoIBeginPage.tsx | awk '
BEGIN { in_hero = 0; }
/<section className="bg-\[#02102C\] text-white relative overflow-hidden">/ {
    in_hero = 1;
    print "        <section className=\"bg-[#02102C] text-white py-14 px-3 sm:px-6 lg:px-8 xl:px-10 relative overflow-hidden\">";
    print "          <div className=\"w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0\">";
    print "            ";
    print "            {/* Left Column */}";
    print "            <div className=\"w-full flex-1 space-y-6 pr-0 lg:pr-10 xl:pr-16\">";
    print "              <h1 className=\"text-3xl md:text-5xl font-black leading-tight tracking-tight text-white\">";
    print "                A Proven Step-By-Step Path From Beginner to <span className=\"text-[#FBBF24]\">Professional Business Broker</span>";
    print "              </h1>";
    print "              ";
    print "              <p className=\"text-slate-300 text-[21px] leading-relaxed max-w-2xl\">";
    print "                No prior business brokerage experience required. FastStart provides the training, tools, systems, and resources needed to build a successful brokerage practice.";
    print "              </p>";
    print "";
    print "              <div className=\"pt-2 flex flex-wrap items-center gap-6\">";
    print "                <div className=\"inline-flex flex-col items-start gap-2\">";
    print "                  <img src={fastStartLogo} alt=\"FastStart Training\" width=\"120\" height=\"48\" loading=\"eager\" fetchPriority=\"high\" className=\"h-16 w-auto object-contain rounded bg-white/10 p-1\" />";
    print "                  <div className=\"text-sm text-left\">";
    print "                    <p className=\"text-slate-300 font-medium drop-shadow-md\">The Business Broker Training Program</p>";
    print "                  </div>";
    print "                </div>";
    print "              </div>";
    print "            </div>";
    print "";
    print "            {/* Vertical Divider */}";
    print "            <div className=\"hidden lg:block w-px bg-white/20 self-stretch my-10 shrink-0 mx-4\"></div>";
    print "";
    print "            {/* Right Column: Warren Buffett Quote Image */}";
    print "            <div className=\"w-full flex-1 flex justify-center lg:justify-end items-center pl-0 lg:pl-10 xl:pl-16\">";
    print "              <div className=\"relative w-full max-w-lg lg:max-w-[80%] overflow-hidden scale-80 origin-right\">";
    print "                <img ";
    print "                  src={warrenBuffettImg} ";
    print "                  alt=\"Warren Buffett Quote\" ";
    print "                  className=\"w-full h-auto object-contain lg:[mask-image:linear-gradient(to_left,black_60%,transparent)]\" ";
    print "                />";
    print "              </div>";
    print "            </div>";
    print "          </div>";
    print "        </section>";
    next;
}
in_hero == 1 && /<\/section>/ {
    in_hero = 0;
    next;
}
in_hero == 0 {
    print $0;
}
' > src/HowDoIBeginPage.tsx.new
mv src/HowDoIBeginPage.tsx.new src/HowDoIBeginPage.tsx
