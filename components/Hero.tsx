'use client'

import { ArrowRightIcon, TruckIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fresh Groceries
              <span className="text-gradient block">Delivered to You</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Shop the freshest produce, quality meats, and household essentials. 
              Fast delivery, great prices, and exceptional service.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('deals')}
                className="btn-primary text-lg px-8 py-3 flex items-center justify-center group"
              >
                Shop Now
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className="btn-outline text-lg px-8 py-3"
              >
                View Categories
              </button>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <TruckIcon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Same day delivery</p>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-secondary-600" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-semibold text-gray-900">24/7 Service</h3>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-semibold text-gray-900">Quality Guaranteed</h3>
                  <p className="text-sm text-gray-600">Fresh & safe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop"
                alt="Fresh groceries"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🍎</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🥬</span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl -z-10 transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
