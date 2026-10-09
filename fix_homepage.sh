sed -i 's|import logoImg from '\''../assets/homepage/graphics/BeABusiness Broker Logo.png'\'';|import logoImg from '\''../assets/1. HomePage/Graphics/BeABusinessBrokerLogo.png'\'';|g' src/HomePage.tsx
sed -i 's|import clarkImg from '\''../assets/homepage/graphics/Clark Bell.png'\'';|import clarkImg from '\''../assets/1. HomePage/Graphics/ClarkBell.png'\'';|g' src/HomePage.tsx
sed -i 's|import fastStartImg from '\''../assets/homepage/graphics/FastStart.jpg'\'';|import fastStartImg from '\''../assets/1. HomePage/Graphics/FastStart.jpg'\'';|g' src/HomePage.tsx
sed -i 's|import ibbaLogo from '\''../assets/homepage/graphics/IBBA Logo.png'\'';|import ibbaLogo from '\''../assets/1. HomePage/Graphics/IBBALogo.png'\'';|g' src/HomePage.tsx
sed -i 's|import lenKrickImg from "../assets/homepage/graphics/Len Krick'\''s Photo.jpg";|import lenKrickImg from "../assets/1. HomePage/Graphics/LenKrick'\''sPhoto.jpg";|g' src/HomePage.tsx
sed -i 's|import maLogo from '\''../assets/homepage/graphics/M&A Source Logo.jpg'\'';|import maLogo from '\''../assets/1. HomePage/Graphics/M\&ASourceLogo.jpg'\'';|g' src/HomePage.tsx
sed -i 's|import buffettImg from '\''../assets/homepage/graphics/Warren Buffet Quote.png'\'';|import buffettImg from '\''../assets/1. HomePage/Graphics/WarrenBuffetQuote.png'\'';|g' src/HomePage.tsx

sed -i 's|<img src={logoImg} alt="BeABusinessBroker Logo" className="h-20 object-contain" />|<img src={logoImg} alt="Be A Business Broker" className="h-14 object-contain" />|g' src/HomePage.tsx
sed -i 's|<img src={buffettImg} alt="Warren Buffett Quote" className="w-full h-auto object-contain" />|<img src={buffettImg} alt="Warren Buffett" className="w-full h-auto object-contain" />|g' src/HomePage.tsx
sed -i 's|<img src={ibbaLogo} alt="IBBA Logo" className="h-12 object-contain" />|<img src={ibbaLogo} alt="IBBA" className="h-12 object-contain" />|g' src/HomePage.tsx
sed -i 's|<img src={maLogo} alt="M&A Source Logo" className="h-12 object-contain" />|<img src={maLogo} alt="M\&A Source" className="h-12 object-contain" />|g' src/HomePage.tsx

