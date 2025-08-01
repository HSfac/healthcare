'use client'

import { useState } from 'react'

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('guide')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData = [
    {
      question: "보청기를 처음 착용할 때 어떤 느낌인가요?",
      answer: "처음 보청기를 착용하면 자신의 목소리가 크게 들리거나 주변 소음이 모두 들려 어색할 수 있습니다. 이는 정상적인 반응으로, 2-4주 정도의 적응 기간을 거치면 자연스러워집니다. 점진적으로 착용 시간을 늘려가며 적응하시기 바랍니다."
    },
    {
      question: "보청기 배터리는 얼마나 오래 사용할 수 있나요?",
      answer: "일반 배터리의 경우 보청기 크기와 사용량에 따라 3-14일 정도 사용 가능합니다. 충전식 보청기는 한 번 충전으로 24시간 이상 사용할 수 있으며, 급속 충전 시 30분 충전으로 6시간 사용이 가능합니다."
    },
    {
      question: "보청기가 물에 젖으면 어떻게 해야 하나요?",
      answer: "즉시 전원을 끄고 배터리를 제거한 후, 마른 수건으로 겉면의 물기를 제거하세요. 건조제와 함께 밀폐 용기에 보관하거나 전용 건조기를 사용하세요. 절대 드라이어나 전자레인지를 사용하지 마시고, 완전히 건조된 후 사용하세요."
    },
    {
      question: "보청기에서 삐 소리(피드백)가 나는 이유는 무엇인가요?",
      answer: "피드백은 주로 보청기가 귀에 제대로 맞지 않거나, 귀지가 쌓였거나, 보청기 볼륨이 너무 클 때 발생합니다. 보청기를 다시 착용해보시고, 귀 청소 후에도 계속되면 전문가 조정이 필요합니다."
    },
    {
      question: "보청기 청소는 어떻게 해야 하나요?",
      answer: "매일 마른 천이나 전용 브러시로 먼지와 귀지를 제거하세요. 일주일에 한 번은 전용 청소제나 알코올 솜으로 깨끗이 닦아주세요. 물이나 일반 세제는 절대 사용하지 마시고, 청소 후 완전히 건조시켜 주세요."
    },
    {
      question: "보청기 A/S는 어떻게 받을 수 있나요?",
      answer: "제품 구매 후 2년간 무상 A/S를 제공합니다. 고장 시 전화 예약 후 방문하시면 무료 점검을 받을 수 있습니다. 간단한 조정은 당일 완료되며, 부품 교체가 필요한 경우 3-5일 소요됩니다."
    },
    {
      question: "청력이 더 나빠진 것 같으면 어떻게 해야 하나요?",
      answer: "청력은 자연스럽게 변화할 수 있으므로 6개월-1년마다 정기 검사를 받으시기 바랍니다. 갑작스러운 청력 변화가 있다면 즉시 전문의 진료를 받으시고, 보청기 재조정이 필요할 수 있습니다."
    },
    {
      question: "보청기 사용 중 귀가 아프면 어떻게 해야 하나요?",
      answer: "새 보청기의 경우 적응 기간 중 약간의 불편함은 정상입니다. 하지만 지속적인 통증이나 귀 안이 빨갛게 되면 즉시 사용을 중단하고 전문가와 상담하세요. 보청기 조정이나 모양 수정이 필요할 수 있습니다."
    }
  ]

  const handleASSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('A/S 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.')
  }

  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            고객 <span style={{color: 'var(--primary)'}}>지원센터</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            보청기 사용법부터 청력 관리까지<br />
            궁금한 모든 것을 도와드립니다.
          </p>
        </div>
      </section>

      {/* 탭 메뉴 */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                activeTab === 'guide'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📚 사용 가이드
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                activeTab === 'care'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🧠 청력 관리
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                activeTab === 'faq'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ❓ FAQ
            </button>
            <button
              onClick={() => setActiveTab('as')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                activeTab === 'as'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🔧 A/S 신청
            </button>
          </div>
        </div>
      </section>

      {/* 사용 가이드 */}
      {activeTab === 'guide' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                보청기 사용 가이드
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                올바른 사용법으로 보청기의 성능을 최대한 활용하세요.
              </p>
            </div>

            <div className="space-y-16">
              {/* 착용 방법 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  💡 올바른 착용 방법
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">손 청결하게</h4>
                    <p className="text-gray-600 text-sm">보청기를 만지기 전에 반드시 손을 깨끗이 씻어주세요.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">귀 확인하기</h4>
                    <p className="text-gray-600 text-sm">귀에 염증이나 상처가 없는지 확인 후 착용하세요.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-orange-600">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">부드럽게 삽입</h4>
                    <p className="text-gray-600 text-sm">억지로 밀어 넣지 말고 자연스럽게 삽입해주세요.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-purple-600">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">착용감 확인</h4>
                    <p className="text-gray-600 text-sm">불편함이 없는지 확인하고 볼륨을 조절하세요.</p>
                  </div>
                </div>
              </div>

              {/* 일상 관리 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🧼 일상 관리 방법
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">매일 해야 할 일</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>사용 후 마른 천으로 깨끗이 닦기</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>배터리 커버 열어두고 보관하기</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>전용 케이스에 보관하기</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>습기 제거제와 함께 보관하기</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">주간 관리</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span>전용 브러시로 귀지 제거하기</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span>알코올 솜으로 소독하기</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span>튜브 및 이어팁 점검하기</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span>전용 건조기 사용하기</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 주의사항 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  ⚠️ 주의사항
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-red-800 mb-3">하지 말아야 할 것</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• 물에 닿게 하기</li>
                      <li>• 강한 충격 주기</li>
                      <li>• 고온에 노출시키기</li>
                      <li>• 일반 세제로 청소하기</li>
                      <li>• 드라이어로 건조시키기</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">꼭 해야 할 것</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• 정기적으로 청소하기</li>
                      <li>• 습기 제거하기</li>
                      <li>• 전용 케이스에 보관하기</li>
                      <li>• 배터리 올바르게 교체하기</li>
                      <li>• 정기 점검 받기</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 청력 관리 */}
      {activeTab === 'care' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                청력 보호 및 관리
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                소중한 청력을 보호하고 관리하는 방법을 알려드립니다.
              </p>
            </div>

            <div className="space-y-16">
              {/* 청력 보호 방법 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🛡️ 청력 보호 방법
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔇</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">소음 차단</h4>
                    <p className="text-gray-600 leading-relaxed">
                      85dB 이상의 큰 소음에 장시간 노출되지 않도록 주의하세요. 
                      시끄러운 환경에서는 귀마개를 사용하는 것이 좋습니다.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🧘</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">휴식 취하기</h4>
                    <p className="text-gray-600 leading-relaxed">
                      시끄러운 환경에 있었다면 조용한 곳에서 충분한 휴식을 취해주세요. 
                      귀에도 휴식이 필요합니다.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🧽</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">귀 청결 유지</h4>
                    <p className="text-gray-600 leading-relaxed">
                      귀지는 자연스럽게 배출되므로 면봉으로 깊숙이 파지 마세요. 
                      외이도만 부드럽게 닦아주세요.
                    </p>
                  </div>
                </div>
              </div>

              {/* 생활 습관 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🌱 건강한 생활 습관
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">식단 관리</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>오메가-3가 풍부한 생선 섭취</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>항산화 성분이 많은 과일과 채소</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>충분한 수분 섭취</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        <span>과도한 카페인과 알코올 피하기</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">운동과 스트레스 관리</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>규칙적인 유산소 운동</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>충분한 수면과 휴식</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>스트레스 관리</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">✗</span>
                        <span>금연 및 간접흡연 피하기</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 정기 검진 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  🩺 정기 청력 검진
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">20-40세</h4>
                    <p className="text-blue-600 font-bold text-lg mb-2">5년마다</p>
                    <p className="text-gray-600 text-sm">특별한 문제가 없다면 5년에 한 번 검진</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">41-60세</h4>
                    <p className="text-green-600 font-bold text-lg mb-2">3년마다</p>
                    <p className="text-gray-600 text-sm">청력 변화가 시작될 수 있는 시기</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">61세 이상</h4>
                    <p className="text-orange-600 font-bold text-lg mb-2">1년마다</p>
                    <p className="text-gray-600 text-sm">정기적인 청력 관리가 필요한 시기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {activeTab === 'faq' && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                고객들이 가장 궁금해하는 질문들을 모았습니다.
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                    <span className={`text-2xl transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">더 궁금한 점이 있으시나요?</p>
              <button className="btn-primary">
                📞 전화 상담받기
              </button>
            </div>
          </div>
        </section>
      )}

      {/* A/S 신청 */}
      {activeTab === 'as' && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                A/S 서비스 신청
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                보청기에 문제가 있으시면 언제든 연락주세요.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <form onSubmit={handleASSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      성명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      보청기 모델명
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="모델명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      구매일자
                    </label>
                    <input
                      type="date"
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    서비스 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">선택해주세요</option>
                    <option value="repair">수리</option>
                    <option value="adjustment">조정</option>
                    <option value="cleaning">청소 및 점검</option>
                    <option value="battery">배터리 교체</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    문제 상황 설명 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="보청기의 문제 상황을 자세히 설명해주세요. (소리가 안 들림, 잡음 발생, 피드백 소리 등)"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    방문 희망 날짜
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    A/S 신청하기
                  </button>
                </div>
              </form>
            </div>

            {/* A/S 정보 */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">신속한 처리</h4>
                <p className="text-gray-600">접수 후 24시간 내 연락드리며, 간단한 조정은 당일 완료됩니다.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">무상 서비스</h4>
                <p className="text-gray-600">구매 후 2년간 무상 A/S를 제공하며, 정품 부품만 사용합니다.</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">긴급 지원</h4>
                <p className="text-gray-600">긴급한 경우 전화(02-1234-5678)로 연락하시면 즉시 도움드립니다.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 연락처 섹션 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            언제든 문의하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            전문 상담사가 고객님의 모든 궁금증을<br />
            친절하게 해결해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              📞 전화 상담 (02-1234-5678)
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              🏥 방문 상담 예약
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}