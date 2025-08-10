'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import { useCartStore } from '@/store/cartStore'

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartItems = useCartStore((state) => state.items)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setIsCartOpen(true)} cartItemCount={cartItems.length} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="categories">
          <Categories />
        </section>
        
        <section id="deals">
          <FeaturedProducts />
        </section>
        
        <section id="about">
          <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About FreshMart
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  FreshMart is your trusted local grocery store, committed to providing the freshest produce, 
                  highest quality products, and exceptional customer service. We've been serving our community 
                  for over 20 years, building relationships and delivering value to every customer.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏪</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Business</h3>
                    <p className="text-gray-600">Supporting our community since 2003</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh & Organic</h3>
                    <p className="text-gray-600">Quality products from trusted suppliers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
                    <p className="text-gray-600">Your satisfaction is our priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact">
          <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Have questions or need assistance? We're here to help! Reach out to us through any of the channels below.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-600">📍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">123 Grocery Street<br />Fresh City, FC 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-600">📞</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-600">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">info@freshmart.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">7:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">9:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-3">24/7 Online Ordering</h4>
                    <p className="text-gray-600">Place your order anytime, day or night, and we'll have it ready for pickup or delivery!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  )
}


