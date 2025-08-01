'use client'

import { useState } from 'react'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('brand')

  // 제품 데이터
  const products = {
    brand: [
      {
        name: "Phonak Paradise",
        brand: "포낙",
        type: "프리미엄",
        price: "300만원대",
        features: ["블루투스 연결", "노이즈 캔슬링", "방수 기능", "음성인식"],
        description: "세계 1위 보청기 브랜드 포낙의 최신 프리미엄 모델",
        image: "🎧"
      },
      {
        name: "Oticon More",
        brand: "오티콘",
        type: "프리미엄", 
        price: "280만원대",
        features: ["딥뉴럴네트워크", "360도 사운드", "블루투스", "충전식"],
        description: "AI 기술을 활용한 차세대 스마트 보청기",
        image: "🧠"
      },
      {
        name: "Widex Moment",
        brand: "와이덱스",
        type: "프리미엄",
        price: "250만원대", 
        features: ["제로딜레이", "자연스러운 음질", "스마트폰 연동", "방진방수"],
        description: "덴마크 명품 브랜드의 혁신적인 음질 기술",
        image: "🎵"
      },
      {
        name: "Signia Styletto",
        brand: "시그니아",
        type: "중급형",
        price: "180만원대",
        features: ["슬림 디자인", "충전식", "블루투스", "앱 연동"],
        description: "세련된 디자인과 뛰어난 성능을 겸비한 모델",
        image: "💎"
      },
      {
        name: "ReSound ONE",
        brand: "리사운드",
        type: "중급형", 
        price: "200만원대",
        features: ["M&RIE 기술", "올데이 배터리", "스마트 앱", "개인화 설정"],
        description: "개인 맞춤형 청취 경험을 제공하는 혁신 모델",
        image: "🎯"
      },
      {
        name: "Starkey Livio",
        brand: "스타키",
        type: "경제형",
        price: "120만원대",
        features: ["헬스케어 기능", "번역 기능", "기본 블루투스", "낙상 감지"],
        description: "건강 관리 기능까지 갖춘 올인원 보청기",
        image: "💪"
      }
    ],
    function: [
      {
        name: "디지털 보청기",
        description: "최신 디지털 신호처리 기술을 적용한 고품질 보청기",
        features: ["노이즈 감소", "피드백 제거", "다채널 처리", "자동 음량 조절"],
        price: "150만원~400만원",
        image: "💻"
      },
      {
        name: "블루투스 보청기", 
        description: "스마트폰과 무선 연결이 가능한 차세대 보청기",
        features: ["무선 통화", "음악 스트리밍", "앱 연동", "원격 조정"],
        price: "200만원~350만원",
        image: "📱"
      },
      {
        name: "방수 보청기",
        description: "IP68 등급의 완전 방수 기능을 갖춘 보청기",
        features: ["완전 방수", "방진 기능", "내구성 강화", "스포츠 활동 적합"],
        price: "180만원~300만원", 
        image: "💧"
      },
      {
        name: "충전식 보청기",
        description: "배터리 교체 없이 간편하게 충전할 수 있는 보청기",
        features: ["24시간 사용", "휴대용 충전기", "급속 충전", "친환경"],
        price: "200만원~380만원",
        image: "🔋"
      },
      {
        name: "AI 보청기",
        description: "인공지능 기술로 자동 환경 인식 및 최적화",
        features: ["환경 자동 인식", "학습 기능", "개인화 설정", "음성 인식"],
        price: "250만원~400만원",
        image: "🤖"
      },
      {
        name: "골전도 보청기",
        description: "골전도 방식으로 전음성 난청에 효과적인 보청기",
        features: ["골전도 기술", "외이도 막힘 없음", "자연스러운 착용감", "특수 난청 적합"],
        price: "300만원~500만원",
        image: "🦴"
      }
    ],
    price: [
      {
        category: "경제형",
        priceRange: "100만원 ~ 200만원",
        description: "기본적인 기능에 충실한 실용적인 보청기",
        products: ["Starkey Livio", "Unitron Moxi", "Bernafon Leox"],
        features: ["기본 디지털 처리", "노이즈 감소", "피드백 제거", "간편한 조작"],
        image: "💰",
        benefits: [
          "합리적인 가격으로 청력 개선 가능",
          "기본 기능에 충실한 안정적인 성능", 
          "간단한 조작으로 누구나 쉽게 사용",
          "부담 없는 첫 보청기로 추천"
        ]
      },
      {
        category: "중급형", 
        priceRange: "200만원 ~ 300만원",
        description: "고급 기능과 합리적 가격의 균형잡힌 보청기",
        products: ["ReSound ONE", "Signia Styletto", "Phonak Audeo"],
        features: ["다채널 처리", "블루투스 연결", "앱 연동", "방향성 마이크"],
        image: "⚖️",
        benefits: [
          "다양한 환경에서 뛰어난 성능",
          "스마트폰 연동으로 편리한 사용",
          "세련된 디자인과 착용감",
          "가성비 최고의 선택"
        ]
      },
      {
        category: "프리미엄",
        priceRange: "300만원 ~ 500만원", 
        description: "최첨단 기술과 최고 품질을 자랑하는 프리미엄 보청기",
        products: ["Phonak Paradise", "Oticon More", "Widex Moment"],
        features: ["AI 기술", "딥러닝", "완전 방수", "무선 충전", "헬스케어"],
        image: "👑",
        benefits: [
          "최첨단 AI 기술로 자동 최적화",
          "모든 환경에서 완벽한 음질",
          "프리미엄 디자인과 내구성",
          "최고급 서비스와 보증"
        ]
      }
    ]
  }

  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            보청기 <span style={{color: 'var(--primary)'}}>제품 안내</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            세계 유명 브랜드부터 최신 기술까지<br />
            고객님께 꼭 맞는 보청기를 찾아보세요.
          </p>
        </div>
      </section>

      {/* 카테고리 탭 */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('brand')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                activeCategory === 'brand'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🏷️ 브랜드별
            </button>
            <button
              onClick={() => setActiveCategory('function')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                activeCategory === 'function'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ⚙️ 기능별
            </button>
            <button
              onClick={() => setActiveCategory('price')}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                activeCategory === 'price'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              💰 가격대별
            </button>
          </div>
        </div>
      </section>

      {/* 브랜드별 제품 */}
      {activeCategory === 'brand' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                세계 유명 브랜드
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                검증된 글로벌 브랜드의 최신 보청기 제품들을 만나보세요.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.brand.map((product, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-blue-600">{product.brand}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        product.type === '프리미엄' ? 'bg-purple-100 text-purple-800' :
                        product.type === '중급형' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {product.type}
                      </span>
                    </div>
                    <p className="text-xl font-bold text-orange-600 mb-4">{product.price}</p>
                  </div>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">주요 기능</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full">
                    상세보기 및 상담
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 기능별 제품 */}
      {activeCategory === 'function' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                기능별 분류
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                필요한 기능에 따라 최적의 보청기를 선택하세요.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.function.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all">
                  <div className="text-6xl mb-6">{item.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">주요 특징</h4>
                    <ul className="space-y-2 text-gray-600">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-xl font-bold text-orange-600">{item.price}</span>
                  </div>
                  
                  <button className="btn-secondary w-full">
                    기능별 상담받기
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 가격대별 제품 */}
      {activeCategory === 'price' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                가격대별 선택
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                예산에 맞는 최적의 보청기를 찾아보세요.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {products.price.map((category, index) => (
                <div key={index} className={`rounded-xl p-8 text-center hover:shadow-xl transition-all ${
                  category.category === '프리미엄' ? 'bg-gradient-to-b from-purple-50 to-purple-100 border-2 border-purple-200' :
                  category.category === '중급형' ? 'bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-200' :
                  'bg-gradient-to-b from-green-50 to-green-100 border-2 border-green-200'
                }`}>
                  <div className="text-6xl mb-6">{category.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.category}</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-4">{category.priceRange}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">대표 제품</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.products.map((product, idx) => (
                        <span key={idx} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">주요 기능</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.features.map((feature, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                          category.category === '프리미엄' ? 'bg-purple-200 text-purple-800' :
                          category.category === '중급형' ? 'bg-blue-200 text-blue-800' :
                          'bg-green-200 text-green-800'
                        }`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">장점</h4>
                    <ul className="space-y-2 text-gray-600 text-left">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full font-semibold text-lg px-6 py-3 rounded-lg transition-all ${
                    category.category === '프리미엄' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                    category.category === '중급형' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                    'bg-green-600 hover:bg-green-700 text-white'
                  }`}>
                    {category.category} 상담받기
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 추천 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              보청기 선택 가이드
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              고객님께 딱 맞는 보청기를 선택하는 방법을 안내해드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👂</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">청력 정도</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                경도, 중도, 고도 난청에 따라 적합한 보청기가 다릅니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">생활 패턴</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                활동적인 라이프스타일인지, 조용한 환경인지에 따라 선택이 달라집니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">예산 고려</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                예산에 맞는 최적의 성능과 기능을 제공하는 제품을 추천해드립니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">디자인 선호</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                눈에 잘 안 보이는 타입부터 세련된 디자인까지 다양한 선택이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            어떤 보청기가 맞을지 모르겠다면?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            전문가와의 상담을 통해 고객님께 가장 적합한<br />
            보청기를 찾아드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              🧑‍⚕️ 전문가 상담받기
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xl px-8 py-4 rounded-lg transition-all">
              🏥 청력 검사 예약
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}