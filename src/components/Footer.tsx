import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">HearingCare</span>
                <span className="text-2xl font-bold" style={{color: 'var(--primary)'}}>Pro</span>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              더 나은 청력을 위한 전문 서비스를 제공하는 보청기 전문 센터입니다. 
              개인 맞춤형 솔루션으로 여러분의 일상을 더욱 풍요롭게 만들어드립니다.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                서울특별시 강남구 테헤란로 123
              </p>
              <p className="text-gray-600 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                02-1234-5678
              </p>
              <p className="text-gray-600 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@hearingcarepro.co.kr
              </p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">빠른 링크</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  제품소개
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  온라인상담
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  고객지원
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">고객지원</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 text-sm">상담시간</p>
                <p className="text-gray-900 font-medium">평일 09:00 - 18:00</p>
                <p className="text-gray-900 font-medium">토요일 09:00 - 15:00</p>
                <p className="text-gray-600 text-sm">일요일, 공휴일 휴무</p>
              </div>
              <div className="pt-3">
                <p className="text-gray-600 text-sm mb-2">응급상담</p>
                <p className="text-blue-600 font-semibold text-lg">010-1234-5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 HearingCarePro. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}