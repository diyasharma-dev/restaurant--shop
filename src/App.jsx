import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandTicker from './components/BrandTicker';
import CategoryVisualGrid from './components/CategoryVisualGrid';
import ProductSection from './components/ProductSection';
import InteractiveKitchenVisualizer from './components/InteractiveKitchenVisualizer';
import FeaturedSpotlight from './components/FeaturedSpotlight';
import InstallationGallery from './components/InstallationGallery';
import ReviewsSection from './components/ReviewsSection';
import BuyingGuides from './components/BuyingGuides';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import QuoteDrawer from './components/QuoteDrawer';
import QuickQuoteModal from './components/QuickQuoteModal';
import { PRODUCTS } from './data/restaurantData';
import { Check, ShoppingCart } from 'lucide-react';

export default function App() {
  // Start with 1 sample item in cart so the demo user immediately sees the cart badge and interaction
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0], // PCG140B Convection Oven
      quantity: 1
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Toast helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`Added ${quantity}x ${product.name} to Quote Cart!`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-cyan-600 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200">
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
            <Check className="w-3.5 h-3.5 stroke-3" />
          </div>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Header */}
      <Header
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onSelectCategory={setSelectedCategory}
        />

        {/* Authorized Brands Ticker */}
        <BrandTicker />

        {/* 12-Category Visual Grid with Rich Imagery */}
        <CategoryVisualGrid
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        {/* Featured Commercial Kitchen Products Grid */}
        <ProductSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* Interactive Kitchen Hotspot Tour & High-Definition Image Section */}
        <InteractiveKitchenVisualizer
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        {/* Serv-ware Spotlight & Bar Equipment Features */}
        <FeaturedSpotlight
          onSelectCategory={setSelectedCategory}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* Real Commercial Installations Project Gallery */}
        <InstallationGallery
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* Authentic Customer Reviews & Google Ratings */}
        <ReviewsSection />

        {/* Commercial Foodservice Buying Guides & Technical Articles */}
        <BuyingGuides
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Quick View / Deep Spec Sheet Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={quickViewProduct ? cartItems.some(i => i.id === quickViewProduct.id) : false}
      />

      {/* Quote Drawer */}
      <QuoteDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => {
          setIsQuoteModalOpen(true);
        }}
      />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        cartItems={cartItems}
      />

    </div>
  );
}
