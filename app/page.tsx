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
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
      
      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  )
}


