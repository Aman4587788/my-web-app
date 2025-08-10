export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  unit: string
  inStock: boolean
  rating: number
  discount?: number
}

export const products: Product[] = [
  // Fruits
  {
    id: '1',
    name: 'Fresh Apples',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
    category: 'fruits',
    description: 'Sweet and crisp red apples, perfect for snacking or baking',
    unit: 'per lb',
    inStock: true,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Organic Bananas',
    price: 1.49,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
    category: 'fruits',
    description: 'Organic yellow bananas, rich in potassium and natural sweetness',
    unit: 'per lb',
    inStock: true,
    rating: 4.3,
  },
  {
    id: '3',
    name: 'Fresh Strawberries',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
    category: 'fruits',
    description: 'Juicy red strawberries, perfect for desserts and smoothies',
    unit: 'per lb',
    inStock: true,
    rating: 4.7,
    discount: 10,
  },
  
  // Vegetables
  {
    id: '4',
    name: 'Fresh Broccoli',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop',
    category: 'vegetables',
    description: 'Fresh green broccoli heads, rich in vitamins and fiber',
    unit: 'per lb',
    inStock: true,
    rating: 4.2,
  },
  {
    id: '5',
    name: 'Organic Carrots',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1447175008436-1701707c0b73?w=400&h=400&fit=crop',
    category: 'vegetables',
    description: 'Organic orange carrots, sweet and crunchy',
    unit: 'per lb',
    inStock: true,
    rating: 4.4,
  },
  {
    id: '6',
    name: 'Fresh Spinach',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    category: 'vegetables',
    description: 'Fresh green spinach leaves, perfect for salads and cooking',
    unit: 'per lb',
    inStock: true,
    rating: 4.1,
  },
  
  // Dairy
  {
    id: '7',
    name: 'Whole Milk',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
    category: 'dairy',
    description: 'Fresh whole milk, rich and creamy',
    unit: 'per gallon',
    inStock: true,
    rating: 4.6,
  },
  {
    id: '8',
    name: 'Cheddar Cheese',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop',
    category: 'dairy',
    description: 'Sharp cheddar cheese, perfect for sandwiches and cooking',
    unit: 'per lb',
    inStock: true,
    rating: 4.4,
  },
  {
    id: '9',
    name: 'Greek Yogurt',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
    category: 'dairy',
    description: 'Creamy Greek yogurt, high in protein',
    unit: 'per 32oz',
    inStock: true,
    rating: 4.5,
    discount: 15,
  },
  
  // Meat
  {
    id: '10',
    name: 'Chicken Breast',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop',
    category: 'meat',
    description: 'Fresh boneless chicken breast, perfect for grilling',
    unit: 'per lb',
    inStock: true,
    rating: 4.3,
  },
  {
    id: '11',
    name: 'Ground Beef',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop',
    category: 'meat',
    description: 'Lean ground beef, great for burgers and meatballs',
    unit: 'per lb',
    inStock: true,
    rating: 4.2,
  },
  
  // Bakery
  {
    id: '12',
    name: 'Fresh Bread',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    category: 'bakery',
    description: 'Fresh baked bread, soft and delicious',
    unit: 'per loaf',
    inStock: true,
    rating: 4.6,
  },
  {
    id: '13',
    name: 'Croissants',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    category: 'bakery',
    description: 'Buttery croissants, flaky and golden',
    unit: 'each',
    inStock: true,
    rating: 4.8,
  },
  
  // Pantry
  {
    id: '14',
    name: 'Extra Virgin Olive Oil',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    category: 'pantry',
    description: 'Premium extra virgin olive oil, perfect for cooking and salads',
    unit: 'per 16oz',
    inStock: true,
    rating: 4.7,
  },
  {
    id: '15',
    name: 'Quinoa',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    category: 'pantry',
    description: 'Organic quinoa, high in protein and fiber',
    unit: 'per lb',
    inStock: true,
    rating: 4.4,
  },
  
  // Beverages
  {
    id: '16',
    name: 'Orange Juice',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop',
    category: 'beverages',
    description: 'Fresh squeezed orange juice, no pulp',
    unit: 'per 64oz',
    inStock: true,
    rating: 4.3,
  },
  {
    id: '17',
    name: 'Green Tea',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
    category: 'beverages',
    description: 'Premium green tea bags, antioxidant rich',
    unit: 'per 100 bags',
    inStock: true,
    rating: 4.5,
  },
  
  // Snacks
  {
    id: '18',
    name: 'Mixed Nuts',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop',
    category: 'snacks',
    description: 'Premium mixed nuts, perfect for snacking',
    unit: 'per lb',
    inStock: true,
    rating: 4.6,
    discount: 20,
  },
  {
    id: '19',
    name: 'Dark Chocolate',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
    category: 'snacks',
    description: 'Rich dark chocolate, 70% cocoa',
    unit: 'per 3.5oz',
    inStock: true,
    rating: 4.7,
  },
  
  // Household
  {
    id: '20',
    name: 'Paper Towels',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
    category: 'household',
    description: 'Premium paper towels, strong and absorbent',
    unit: 'per 6 rolls',
    inStock: true,
    rating: 4.2,
  },
]

export const categories = [
  { id: 'fruits', name: 'Fruits', icon: '🍎', color: 'bg-red-100 text-red-600' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥬', color: 'bg-green-100 text-green-600' },
  { id: 'dairy', name: 'Dairy', icon: '🥛', color: 'bg-blue-100 text-blue-600' },
  { id: 'meat', name: 'Meat', icon: '🍗', color: 'bg-orange-100 text-orange-600' },
  { id: 'bakery', name: 'Bakery', icon: '🥖', color: 'bg-yellow-100 text-yellow-600' },
  { id: 'pantry', name: 'Pantry', icon: '🫙', color: 'bg-purple-100 text-purple-600' },
  { id: 'beverages', name: 'Beverages', icon: '🥤', color: 'bg-cyan-100 text-cyan-600' },
  { id: 'snacks', name: 'Snacks', icon: '🍿', color: 'bg-pink-100 text-pink-600' },
  { id: 'household', name: 'Household', icon: '🏠', color: 'bg-gray-100 text-gray-600' },
]

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.discount || product.rating >= 4.5).slice(0, 8)
}

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  )
}


