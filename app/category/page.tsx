import Link from 'next/link'
import { categories } from '@/data/products'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function CategoriesIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="btn-outline px-3 py-2 inline-flex items-center">
            <ArrowLeftIcon className="h-5 w-5 mr-2" /> Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">All Categories</h1>
          <div />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((c) => (
            <Link key={c.id} href={`/category/${c.id}`} className={`rounded-2xl p-6 text-center ${c.color} hover:shadow-lg transition-shadow`}>
              <div className="text-4xl mb-3">{c.icon}</div>
              <div className="font-semibold text-gray-900">{c.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
