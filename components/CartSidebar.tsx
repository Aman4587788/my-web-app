'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useCartStore, CartItem } from '@/store/cartStore'
import toast from 'react-hot-toast'
import { formatCurrencyINR } from '@/utils/currency'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty!')
      return
    }
    
    toast.success('Proceeding to checkout...')
    // TODO: Implement checkout functionality
    console.log('Checkout with items:', items)
  }

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id)
      toast.success(`${item.name} removed from cart`)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item.id)
    toast.success(`${item.name} removed from cart`)
  }

  const handleClearCart = () => {
    clearCart()
    toast.success('Cart cleared')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Start shopping to add items to your cart</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      {/* Item Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatCurrencyINR(item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity - 1)}
                          className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-medium text-gray-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity + 1)}
                          className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="p-1 text-red-400 hover:text-red-600 transition-colors"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                {/* Cart Summary */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatCurrencyINR(getTotal())}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full btn-primary py-3 text-lg"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={handleClearCart}
                      className="flex-1 btn-outline py-2"
                    >
                      Clear Cart
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 btn-secondary py-2"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
