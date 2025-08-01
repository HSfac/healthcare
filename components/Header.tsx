'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">HearingCare</span>
                <span className="text-2xl font-bold" style={{color: 'var(--primary)'}}>Pro</span>
              </div>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              홈
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              서비스
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              제품
            </Link>
            <Link 
              href="/consultation" 
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              상담예약
            </Link>
            <Link 
              href="/support" 
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              고객지원
            </Link>
          </nav>

          {/* 상담 예약 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-primary">
              무료 상담 예약
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                서비스
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                제품
              </Link>
              <Link 
                href="/consultation" 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                상담예약
              </Link>
              <Link 
                href="/support" 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                고객지원
              </Link>
              <button className="btn-primary w-full mt-4">
                무료 상담 예약
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}