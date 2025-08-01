export default function Home() {
  return (
    <div className="bg-white">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              더 나은 청력을 위한<br />
              <span style={{color: 'var(--primary)'}}>전문 서비스</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              개인 맞춤형 보청기부터 전문 청력 검사까지,<br />
              당신의 소중한 청력을 책임지는 HearingCare Pro입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary text-xl px-8 py-4">
                무료 상담 예약하기
              </button>
              <button className="btn-secondary text-xl px-8 py-4">
                온라인 청력 검사
              </button>
            </div>
          </div>
        </div>
        {/* 장식 요소 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-100 rounded-full opacity-20 translate-y-24 -translate-x-24"></div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              전문 서비스 안내
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              고객 맞춤형 보청기 솔루션부터 사후관리까지 원스톱 서비스를 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 보청기 종류 */}
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👂</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">보청기 종류</h3>
              <p className="text-gray-600 leading-relaxed">
                이어폰형, 귀걸이형, 안경형 등 다양한 타입의 보청기를 제공합니다.
              </p>
            </div>

            {/* 청력 검사 */}
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">청력 검사</h3>
              <p className="text-gray-600 leading-relaxed">
                전문 청력 검사를 통해 정확한 청력 상태를 파악하고 맞춤 솔루션을 제안합니다.
              </p>
            </div>

            {/* 맞춤 제작 */}
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">맞춤 제작</h3>
              <p className="text-gray-600 leading-relaxed">
                개인의 청력과 귀 모양에 완벽하게 맞는 보청기를 제작합니다.
              </p>
            </div>

            {/* A/S 서비스 */}
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A/S 서비스</h3>
              <p className="text-gray-600 leading-relaxed">
                수리, 조정, 유지보수까지 지속적인 사후관리 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 전문성 강조 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              신뢰할 수 있는 전문성
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              풍부한 경험과 전문 지식을 바탕으로 최고의 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 의료진 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">👨‍⚕️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">전문 의료진</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                청각학 전문의와 청능사가 함께하는 전문 의료진이 정확한 진단과 상담을 제공합니다.
              </p>
            </div>

            {/* 인증 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏆</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">공식 인증</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                보건복지부 인증 청력 재활 센터로서 안전하고 신뢰할 수 있는 서비스를 보장합니다.
              </p>
            </div>

            {/* 경험 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">📈</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">풍부한 경험</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                15년 이상의 경험과 10,000명 이상의 고객 서비스 실적을 바탕으로 한 전문성을 자랑합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            지금 바로 무료 상담을 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            전문 상담사가 고객님의 청력 상태를 정확히 진단하고<br />
            최적의 솔루션을 제안해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              📞 전화 상담 예약
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              🏥 방문 상담 예약
            </button>
          </div>
          <p className="text-blue-100 mt-6 text-lg">
            📍 서울시 강남구 테헤란로 123, 청력케어빌딩 3층 | ☎️ 02-1234-5678
          </p>
        </div>
      </section>
    </div>
  );
}
