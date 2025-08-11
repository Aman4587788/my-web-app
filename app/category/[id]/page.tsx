import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories as allCategories, getProductsByCategory } from '@/data/products'
import CategoryGrid from '@/components/category/CategoryGrid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id
  const category = allCategories.find((c) => c.id === categoryId)
  if (!category) return notFound()

  const products = getProductsByCategory(categoryId)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="btn-outline px-3 py-2 inline-flex items-center">
              <ArrowLeftIcon className="h-5 w-5 mr-2" /> Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
            <span className={`ml-2 px-2 py-1 text-sm rounded-full ${category.color}`}>{category.icon}</span>
          </div>
          <Link href="/category" className="btn-secondary">All Categories</Link>
        </div>

        <CategoryGrid categoryId={categoryId} products={products} />
      </div>
    </div>
  )
}
