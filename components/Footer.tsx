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
              개인 맞춤형 솔루션과 지속적인 사후관리로 고객의 삶의 질 향상에 기여합니다.
            </p>
            <div className="flex space-x-4">
              <a href="tel:02-1234-5678" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                📞 02-1234-5678
              </a>
              <a href="mailto:info@hearingcarepro.com" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                ✉️ info@hearingcarepro.com
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">빠른 링크</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 text-lg transition-colors">
                  서비스 안내
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600 text-lg transition-colors">
                  제품 소개
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-gray-600 hover:text-blue-600 text-lg transition-colors">
                  상담 예약
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-blue-600 text-lg transition-colors">
                  고객 지원
                </Link>
              </li>
            </ul>
          </div>

          {/* 운영 시간 & 위치 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">운영 정보</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 text-lg mb-2">운영 시간</h4>
                <div className="space-y-1 text-gray-600">
                  <p>평일: 09:00 - 18:00</p>
                  <p>토요일: 09:00 - 15:00</p>
                  <p className="text-red-600">일요일/공휴일: 휴무</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg mb-2">위치</h4>
                <p className="text-gray-600">
                  서울시 강남구 테헤란로 123<br />
                  청력케어빌딩 3층
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-base">
              © 2024 HearingCare Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-base transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-base transition-colors">
                이용약관
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-blue-600 text-base transition-colors">
                사이트맵
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}