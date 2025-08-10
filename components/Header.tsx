'use client'

import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface HeaderProps {
  onCartClick: () => void
  cartItemCount: number
}

export default function Header({ onCartClick, cartItemCount }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('home')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleLogoClick = () => {
    scrollToSection('home')
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'categories', 'deals', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gradient">FreshMart</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors ${
                activeSection === 'home' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className={`transition-colors ${
                activeSection === 'categories' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection('deals')}
              className={`transition-colors ${
                activeSection === 'deals' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Deals
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${
                activeSection === 'about' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                activeSection === 'contact' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-left transition-colors ${
                  activeSection === 'home' 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className={`text-left transition-colors ${
                  activeSection === 'categories' 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection('deals')}
                className={`text-left transition-colors ${
                  activeSection === 'deals' 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Deals
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-left transition-colors ${
                  activeSection === 'about' 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-left transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}


