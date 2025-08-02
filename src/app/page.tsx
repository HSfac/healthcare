'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const FloatingElement = ({ delay = 0, children, className = "" }: { delay?: number; children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="bg-white">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 sm:py-32 overflow-hidden">
        {/* 배경 애니메이션 요소들 */}
        <div className="absolute inset-0">
          <FloatingElement delay={0} className="top-10 left-10 w-20 h-20 opacity-20">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
          </FloatingElement>
          <FloatingElement delay={1} className="top-32 right-20 w-16 h-16 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
          </FloatingElement>
          <FloatingElement delay={2} className="bottom-20 left-32 w-12 h-12 opacity-25">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
          </FloatingElement>
          <FloatingElement delay={0.5} className="bottom-32 right-10 w-24 h-24 opacity-15">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
          </FloatingElement>
          
          {/* 청력 관련 아이콘들 */}
          <FloatingElement delay={1.5} className="top-1/4 left-1/4 opacity-10">
            <span className="text-4xl">👂</span>
          </FloatingElement>
          <FloatingElement delay={2.5} className="top-1/3 right-1/3 opacity-10">
            <span className="text-4xl">🩺</span>
          </FloatingElement>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-100 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                더 나은 청력을 위한
              </motion.span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                전문 서비스
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              개인 맞춤형 보청기부터 전문 청력 검사까지,<br />
              <span className="text-blue-600 font-semibold">당신의 소중한 청력을 책임지는</span> HearingCare Pro입니다.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                무료 상담 예약하기
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-xl px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                온라인 청력 검사
              </motion.button>
            </motion.div>

            {/* 스크롤 인디케이터 */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex flex-col items-center text-blue-600">
                <span className="text-sm mb-2">아래로 스크롤</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              전문 <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">서비스 안내</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              고객 맞춤형 보청기 솔루션부터 사후관리까지 원스톱 서비스를 제공합니다.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "👂",
                title: "보청기 종류",
                description: "이어폰형, 귀걸이형, 안경형 등 다양한 타입의 보청기를 제공합니다.",
                color: "blue",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                icon: "🔍",
                title: "청력 검사",
                description: "전문 청력 검사를 통해 정확한 청력 상태를 파악하고 맞춤 솔루션을 제안합니다.",
                color: "green",
                gradient: "from-green-400 to-green-600"
              },
              {
                icon: "⚙️",
                title: "맞춤 제작",
                description: "개인의 청력과 귀 모양에 완벽하게 맞는 보청기를 제작합니다.",
                color: "orange",
                gradient: "from-orange-400 to-orange-600"
              },
              {
                icon: "🛠️",
                title: "A/S 서비스",
                description: "수리, 조정, 유지보수까지 지속적인 사후관리 서비스를 제공합니다.",
                color: "purple",
                gradient: "from-purple-400 to-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative text-center p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
                  {/* 배경 그라데이션 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-20 h-20 bg-${service.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-3xl">{service.icon}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 전문성 강조 섹션 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-gray-50 via-blue-50 to-green-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              신뢰할 수 있는 <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">전문성</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              풍부한 경험과 전문 지식을 바탕으로 최고의 서비스를 제공합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍⚕️",
                title: "전문 의료진",
                description: "청각학 전문의와 청능사가 함께하는 전문 의료진이 정확한 진단과 상담을 제공합니다.",
                color: "blue",
                number: 15
              },
              {
                icon: "🏆",
                title: "공식 인증",
                description: "보건복지부 인증 청력 재활 센터로서 안전하고 신뢰할 수 있는 서비스를 보장합니다.",
                color: "green",
                number: 95
              },
              {
                icon: "📈",
                title: "풍부한 경험",
                description: "15년 이상의 경험과 10,000명 이상의 고객 서비스 실적을 바탕으로 한 전문성을 자랑합니다.",
                color: "orange",
                number: 10000
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div 
                  className={`w-20 h-20 bg-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl text-white">{item.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <div className={`text-4xl font-bold text-${item.color}-600 mb-4`}>
                  <AnimatedCounter end={item.number} />
                  {item.number > 100 ? '+' : ''}
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 고객 후기 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              고객 후기
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              실제 고객들의 생생한 경험담을 들어보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 후기 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                &ldquo;20년 동안 청력 문제로 고생했는데, 여기서 맞춤 보청기를 받고 완전히 새로운 세상을 경험했습니다. 정말 감사합니다.&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">김○○님 (65세)</p>
                <p className="text-gray-600">이어폰형 보청기 사용</p>
              </div>
            </div>

            {/* 후기 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                &ldquo;직원분들이 정말 친절하고 전문적이에요. 사후관리도 꼼꼼하게 해주셔서 믿고 맡길 수 있습니다.&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">박○○님 (58세)</p>
                <p className="text-gray-600">귀걸이형 보청기 사용</p>
              </div>
            </div>

            {/* 후기 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                &ldquo;청력 검사부터 보청기 피팅까지 모든 과정이 체계적이고 만족스러웠습니다. 강력 추천합니다!&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">이○○님 (72세)</p>
                <p className="text-gray-600">맞춤형 보청기 사용</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상담 예약 CTA 섹션 */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-green-600 to-blue-700"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              당신의 청력 건강을<br />
              <span className="text-yellow-300">지금 바로</span> 확인하세요
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              전문 상담사가 고객님의 청력 상태를 정확히 진단하고<br />
              최적의 솔루션을 제안해드립니다
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 hover:bg-yellow-50 px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                📞 전화 상담 예약
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border-3 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300"
              >
                🏥 방문 상담 예약
              </motion.button>
            </motion.div>
            
            <motion.p 
              className="text-white/90 mt-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              📍 서울시 강남구 테헤란로 123, 청력케어빌딩 3층 | ☎️ 02-1234-5678
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
