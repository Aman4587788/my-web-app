'use client'

import { motion } from 'framer-motion'
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { getFeaturedProducts, Product } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'
import { formatCurrencyINR } from '@/utils/currency'

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const addToCart = useCartStore((state) => state.addItem)
  const featuredProducts = getFeaturedProducts()

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated products. 
            Fresh, quality groceries that our customers love.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{product.discount}%
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  {favorites.has(product.id) ? (
                    <HeartIconSolid className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Category */}
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  {product.category}
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating}
                  </span>
                </div>

                {/* Price and Unit */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      {formatCurrencyINR(product.price)}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {product.unit}
                    </span>
                  </div>
                  
                  {/* Stock Status */}
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full btn-primary flex items-center justify-center group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline text-lg px-8 py-3">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  )
}


