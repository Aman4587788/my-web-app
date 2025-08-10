# FreshMart - Grocery Shopping Web Application

A modern, responsive grocery shopping web application built with Next.js, React, TypeScript, and Tailwind CSS. FreshMart provides a seamless shopping experience with features like product browsing, shopping cart management, and a beautiful user interface.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Product Catalog**: Browse products by category with detailed information
- **Shopping Cart**: Add/remove items, adjust quantities, and view totals
- **Search Functionality**: Search products by name, description, or category
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **State Management**: Efficient cart state management with Zustand
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **Toast Notifications**: User feedback for cart actions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
grocery-mart-app/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Categories.tsx     # Product categories
│   ├── FeaturedProducts.tsx # Featured products grid
│   ├── CartSidebar.tsx    # Shopping cart sidebar
│   └── Footer.tsx         # Footer component
├── store/                  # State management
│   └── cartStore.ts       # Shopping cart store
├── data/                   # Data files
│   └── products.ts        # Product data and utilities
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd grocery-mart-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The application uses a custom color palette defined in `tailwind.config.js`:
- Primary: Green shades for main actions
- Secondary: Yellow shades for accents
- Custom utility classes for consistent styling

### Products
Add or modify products in `data/products.ts`:
- Product information (name, price, image, category)
- Category definitions with icons and colors
- Utility functions for filtering and searching

### Styling
Custom CSS classes are defined in `app/globals.css`:
- Button variants (primary, secondary, outline)
- Card and input field styles
- Animation utilities

## 🔧 Key Components

### Header
- Responsive navigation with mobile menu
- Search functionality
- Shopping cart icon with item count

### Hero Section
- Compelling call-to-action
- Feature highlights
- Animated elements

### Categories
- Grid layout of product categories
- Interactive hover effects
- Category-specific colors and icons

### Featured Products
- Product grid with images and details
- Add to cart functionality
- Favorite/wishlist feature
- Rating display

### Shopping Cart
- Slide-out sidebar design
- Item quantity management
- Total calculation
- Checkout flow

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Deploy directly from GitHub
- **AWS/GCP**: Build and serve the `.next` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Heroicons](https://heroicons.com/) for beautiful icons
- [Unsplash](https://unsplash.com/) for high-quality images

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Happy Shopping! 🛒✨**


