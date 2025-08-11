'use client'

import { Product } from '@/data/products'
import { formatCurrencyINR } from '@/utils/currency'
import { useCartStore } from '@/store/cartStore'
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

interface CategoryGridProps {
  categoryId: string
  products: Product[]
}

export default function CategoryGrid({ products }: CategoryGridProps) {
  const addToCart = useCartStore((s) => s.addItem)

  const handleAdd = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="relative aspect-square overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">{product.category}</div>
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-lg font-bold text-gray-900">{formatCurrencyINR(product.price)}</span>
                <span className="text-sm text-gray-500 ml-1">{product.unit}</span>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>
            <button onClick={() => handleAdd(product)} disabled={!product.inStock} className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50">
              <ShoppingCartIcon className="h-5 w-5 mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
