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
              href="/products" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              제품소개
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              서비스
            </Link>
            <Link 
              href="/consultation" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              온라인상담
            </Link>
            <Link 
              href="/support" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              고객지원
            </Link>
            <Link 
              href="/consultation" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              무료상담 신청
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="메뉴 열기"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/products"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              제품소개
            </Link>
            <Link
              href="/services"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              서비스
            </Link>
            <Link
              href="/consultation"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              온라인상담
            </Link>
            <Link
              href="/support"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              고객지원
            </Link>
            <div className="px-3 py-3">
              <Link 
                href="/consultation"
                className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                무료상담 신청
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}