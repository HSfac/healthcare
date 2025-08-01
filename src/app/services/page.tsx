export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            전문 <span style={{color: 'var(--primary)'}}>서비스 안내</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            개인 맞춤형 보청기부터 전문 청력 검사, 지속적인 사후관리까지<br />
            고객의 청력 개선을 위한 원스톱 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* 보청기 종류 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              다양한 보청기 종류
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              생활 패턴과 청력 상태에 맞는 최적의 보청기를 선택하세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 이어폰형 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎧</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                이어폰형 (ITE)
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  귀 안쪽에 완전히 들어가는 형태로 외관상 거의 보이지 않아 심미적으로 우수합니다.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">특징</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 거의 보이지 않는 디자인</li>
                    <li>• 경도~중도 난청에 적합</li>
                    <li>• 개인 맞춤 제작</li>
                    <li>• 자연스러운 소리 전달</li>
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">적합한 분</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 미용상 거부감이 있는 분</li>
                    <li>• 활동적인 라이프스타일</li>
                    <li>• 안경 착용자</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 귀걸이형 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👂</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                귀걸이형 (BTE)
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  귀 뒤쪽에 착용하는 형태로 모든 청력 손실 정도에 적용 가능하며 관리가 용이합니다.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">특징</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 강력한 증폭 기능</li>
                    <li>• 경도~고도 난청 모두 적합</li>
                    <li>• 배터리 수명이 긴 편</li>
                    <li>• 관리 및 조작 용이</li>
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">적합한 분</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 심한 청력 손실이 있는 분</li>
                    <li>• 손목 조작이 어려운 분</li>
                    <li>• 강력한 성능이 필요한 분</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 안경형 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👓</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                안경형 (Spectacle)
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  안경 다리에 보청기가 내장된 형태로 안경과 보청기를 동시에 착용할 수 있습니다.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">특징</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 안경과 보청기 일체형</li>
                    <li>• 골전도 방식 적용 가능</li>
                    <li>• 한쪽 귀 난청에 효과적</li>
                    <li>• 독특하고 세련된 디자인</li>
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">적합한 분</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 안경 착용이 필수인 분</li>
                    <li>• 한쪽 귀 청력 손실</li>
                    <li>• 새로운 기술 선호자</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 청력 검사 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              정밀 청력 검사
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최신 장비를 활용한 정확한 청력 검사로 개인 맞춤 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 온라인 예비 검사 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">온라인 예비 검사</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                집에서 간단하게 청력 상태를 확인할 수 있는 기초 검사입니다.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">간단한 음성 인식 테스트</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">기본 주파수별 청력 체크</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">즉시 결과 확인</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">전문 상담 연계</span>
                </div>
              </div>
              <button className="btn-primary w-full">
                온라인 검사 시작하기
              </button>
            </div>

            {/* 전문 검사 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">전문 청력 검사</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                최첨단 장비를 이용한 정밀 검사로 정확한 청력 상태를 진단합니다.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">순음 청력 검사 (PTA)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">어음 청력 검사</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">임피던스 청력 검사</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">개인 맞춤 상담</span>
                </div>
              </div>
              <button className="btn-secondary w-full">
                전문 검사 예약하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 맞춤 제작 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              개인 맞춤 제작
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              고객의 귀 모양과 청력 특성에 완벽하게 맞는 보청기를 제작합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 단계 1 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">귀 본뜨기</h3>
              <p className="text-gray-600 leading-relaxed">
                개인의 귀 모양에 정확히 맞는 본을 떠서 완벽한 피팅을 위한 기초를 만듭니다.
              </p>
            </div>

            {/* 단계 2 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">설계 및 제작</h3>
              <p className="text-gray-600 leading-relaxed">
                청력 검사 결과와 귀 본을 바탕으로 최적의 성능과 착용감을 갖춘 보청기를 제작합니다.
              </p>
            </div>

            {/* 단계 3 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">피팅 및 조정</h3>
              <p className="text-gray-600 leading-relaxed">
                제작된 보청기의 착용감과 소리를 세밀하게 조정하여 최상의 효과를 구현합니다.
              </p>
            </div>

            {/* 단계 4 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">사후 관리</h3>
              <p className="text-gray-600 leading-relaxed">
                지속적인 점검과 조정을 통해 항상 최적의 상태를 유지할 수 있도록 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A/S 서비스 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              지속적인 A/S 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              구매 후에도 안심할 수 있는 전문적인 사후관리 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 수리 서비스 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">수리 서비스</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                고장난 보청기의 신속하고 정확한 수리 서비스를 제공합니다.
              </p>
              <ul className="space-y-3 text-left text-gray-600 mb-6">
                <li>• 무료 진단 및 견적</li>
                <li>• 3~5일 내 수리 완료</li>
                <li>• 정품 부품만 사용</li>
                <li>• 수리 후 6개월 품질보증</li>
              </ul>
              <button className="btn-primary w-full">
                수리 신청하기
              </button>
            </div>

            {/* 조정 서비스 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">조정 서비스</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                청력 변화나 착용감 개선을 위한 세밀한 조정 서비스입니다.
              </p>
              <ul className="space-y-3 text-left text-gray-600 mb-6">
                <li>• 음질 및 음량 조정</li>
                <li>• 착용감 개선</li>
                <li>• 프로그램 설정 변경</li>
                <li>• 무료 재조정 서비스</li>
              </ul>
              <button className="btn-secondary w-full">
                조정 예약하기
              </button>
            </div>

            {/* 유지보수 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">유지보수</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                보청기의 수명 연장을 위한 정기적인 유지보수 서비스입니다.
              </p>
              <ul className="space-y-3 text-left text-gray-600 mb-6">
                <li>• 정기 청소 및 점검</li>
                <li>• 배터리 교체 서비스</li>
                <li>• 부품 교환 및 업그레이드</li>
                <li>• 사용법 재교육</li>
              </ul>
              <button className="btn-accent w-full">
                유지보수 신청
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            전문 서비스 상담을 받아보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            고객님의 상황에 가장 적합한 서비스를 추천해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              📞 서비스 상담받기
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              🏥 방문 예약하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}