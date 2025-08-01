'use client'

import { useState } from 'react'

export default function ConsultationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    hearingConcerns: '',
    previousHearingAid: '',
    additionalNotes: ''
  })

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ]

  const consultationTypes = [
    {
      id: 'first-visit',
      title: '초진 상담',
      description: '처음 방문하시는 분을 위한 종합 상담',
      duration: '60분',
      icon: '🩺'
    },
    {
      id: 're-visit',
      title: '재방문 상담',
      description: '기존 고객 대상 추가 상담 및 조정',
      duration: '30분',
      icon: '🔄'
    },
    {
      id: 'as-service',
      title: 'A/S 상담',
      description: '보청기 수리, 조정, 점검 서비스',
      duration: '30분',
      icon: '🔧'
    },
    {
      id: 'hearing-test',
      title: '청력 검사',
      description: '정밀 청력 검사 및 결과 상담',
      duration: '45분',
      icon: '🔍'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // 예약 제출 처리
      alert('예약이 완료되었습니다! 확인 문자를 발송해드렸습니다.')
      console.log('예약 데이터:', formData)
    }
  }

  return (
    <div className="bg-white">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            상담 <span style={{color: 'var(--primary)'}}>예약하기</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            전문가와의 1:1 맞춤 상담으로<br />
            고객님께 최적의 청력 솔루션을 제공해드립니다.
          </p>
        </div>
      </section>

      {/* 예약 진행 단계 표시 */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                <div className="ml-3 mr-8">
                  <p className={`font-semibold ${
                    step >= stepNumber ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {stepNumber === 1 && '상담 유형 선택'}
                    {stepNumber === 2 && '개인정보 입력'}
                    {stepNumber === 3 && '날짜/시간 선택'}
                  </p>
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1단계: 상담 유형 선택 */}
          {step === 1 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  어떤 상담을 원하시나요?
                </h2>
                <p className="text-xl text-gray-600">
                  상담 목적에 맞는 서비스를 선택해주세요.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {consultationTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                      formData.consultationType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, consultationType: type.id }))}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{type.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                        <p className="text-blue-600 font-medium">소요시간: {type.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!formData.consultationType}
                  className="btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  다음 단계로
                </button>
              </div>
            </div>
          )}

          {/* 2단계: 개인정보 입력 */}
          {step === 2 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  기본 정보를 입력해주세요
                </h2>
                <p className="text-xl text-gray-600">
                  정확한 상담을 위해 필요한 정보입니다.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 이름 */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이름을 입력해주세요"
                      required
                    />
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="010-0000-0000"
                      required
                    />
                  </div>

                  {/* 이메일 */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* 나이 */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                      나이
                    </label>
                    <select
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">선택해주세요</option>
                      <option value="20-30">20-30세</option>
                      <option value="31-40">31-40세</option>
                      <option value="41-50">41-50세</option>
                      <option value="51-60">51-60세</option>
                      <option value="61-70">61-70세</option>
                      <option value="71+">71세 이상</option>
                    </select>
                  </div>
                </div>

                {/* 청력 관련 고민 */}
                <div className="mt-6">
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    현재 청력 관련 고민이나 증상
                  </label>
                  <textarea
                    name="hearingConcerns"
                    value={formData.hearingConcerns}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="청력과 관련해 현재 겪고 계신 어려움이나 궁금한 점을 자세히 적어주세요."
                  />
                </div>

                {/* 보청기 사용 경험 */}
                <div className="mt-6">
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    보청기 사용 경험
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="previousHearingAid"
                        value="none"
                        checked={formData.previousHearingAid === 'none'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>보청기를 사용한 적이 없습니다</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="previousHearingAid"
                        value="current"
                        checked={formData.previousHearingAid === 'current'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>현재 보청기를 사용하고 있습니다</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="previousHearingAid"
                        value="previous"
                        checked={formData.previousHearingAid === 'previous'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span>과거에 보청기를 사용한 적이 있습니다</span>
                    </label>
                  </div>
                </div>

                {/* 추가 요청사항 */}
                <div className="mt-6">
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    추가 요청사항
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="상담 시 특별히 요청하고 싶은 사항이 있으시면 적어주세요."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold text-lg px-8 py-4 rounded-lg transition-all"
                >
                  이전 단계
                </button>
                <button
                  type="submit"
                  disabled={!formData.name || !formData.phone}
                  className="btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  다음 단계로
                </button>
              </div>
            </div>
          )}

          {/* 3단계: 날짜/시간 선택 */}
          {step === 3 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  원하시는 날짜와 시간을 선택해주세요
                </h2>
                <p className="text-xl text-gray-600">
                  예약 가능한 시간을 확인하고 선택하세요.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* 날짜 선택 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      상담 희망 날짜
                    </h3>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <p className="text-gray-600 mt-2 text-sm">
                      * 주말 및 공휴일은 휴무입니다
                    </p>
                  </div>

                  {/* 시간 선택 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      상담 희망 시간
                    </h3>
                    <div className="grid grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, preferredTime: time }))}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            formData.preferredTime === time
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      * 점심시간 12:00-13:00은 제외됩니다
                    </p>
                  </div>
                </div>

                {/* 예약 정보 확인 */}
                {formData.preferredDate && formData.preferredTime && (
                  <div className="mt-8 p-6 bg-white rounded-lg border border-blue-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">예약 정보 확인</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">성함:</span> {formData.name}</p>
                      <p><span className="font-medium">연락처:</span> {formData.phone}</p>
                      <p><span className="font-medium">상담 유형:</span> {
                        consultationTypes.find(type => type.id === formData.consultationType)?.title
                      }</p>
                      <p><span className="font-medium">예약 날짜:</span> {formData.preferredDate}</p>
                      <p><span className="font-medium">예약 시간:</span> {formData.preferredTime}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold text-lg px-8 py-4 rounded-lg transition-all"
                >
                  이전 단계
                </button>
                <button
                  type="submit"
                  disabled={!formData.preferredDate || !formData.preferredTime}
                  className="btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  예약 완료하기
                </button>
              </div>
            </div>
          )}
        </div>
      </form>

      {/* 연락처 정보 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              전화 상담도 가능합니다
            </h2>
            <p className="text-xl text-gray-600">
              온라인 예약이 어려우시면 직접 전화주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전화 상담</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">02-1234-5678</p>
              <p className="text-gray-600">평일 09:00 - 18:00</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">방문 상담</h3>
              <p className="text-gray-700 mb-2">서울시 강남구 테헤란로 123</p>
              <p className="text-gray-600">청력케어빌딩 3층</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">주차 안내</h3>
              <p className="text-gray-700 mb-2">건물 지하 주차장 이용</p>
              <p className="text-gray-600">2시간 무료 주차 가능</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}