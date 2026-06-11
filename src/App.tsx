import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import HomeScreen from './components/HomeScreen';
import CatalogScreen from './components/CatalogScreen';
import DetailScreen from './components/DetailScreen';
import CheckoutScreen from './components/CheckoutScreen';
import AdminUsersScreen from './components/AdminUsersScreen';
import SellerDashboard from './components/SellerDashboard';
import { DEFAULT_USERS, PRODUCTS } from './data';
import { Product, CartItem, User, UserRole } from './types';

export default function App() {
  const [currentView, setView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);

  // Users database (in-memory)
  const [users, setUsers] = useState<User[]>(DEFAULT_USERS);

  // Seller products (products created by sellers)
  const [sellerProducts, setSellerProducts] = useState<Product[]>([]);

  // Placed Order receipt state
  const [placedOrder, setPlacedOrder] = useState<{
    studentName: string;
    ra: string;
    email: string;
    paymentMethod: string;
    deliveryMethod: string;
    subtotal: number;
    shippingFee: number;
    discount: number;
    total: number;
    items: CartItem[];
  } | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

  // Increment item addition
  const handleAddToCart = (product: Product, qty: number = 1) => {
    setCartItems((prevItems) => {
      const existsIdx = prevItems.findIndex((item) => item.product.id === product.id);
      if (existsIdx > -1) {
        const replacement = [...prevItems];
        replacement[existsIdx] = {
          ...replacement[existsIdx],
          quantity: replacement[existsIdx].quantity + qty,
        };
        return replacement;
      }
      return [...prevItems, { product, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Auth handlers
  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    if (currentView === 'admin' || currentView === 'seller-dashboard') {
      setView('home');
    }
  };

  const handleRegisterSuccess = (data: { name: string; ra: string; email: string; password: string; role: UserRole }) => {
    // Check if RA already exists
    if (users.find((u) => u.ra === data.ra)) {
      return; // RA already in use
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name: data.name,
      email: data.email,
      ra: data.ra,
      password: data.password,
      role: data.role,
    };

    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    setIsLoggedIn(true);
  };

  // Admin handlers
  const handleDeleteUser = (userId: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
    // Remove seller products if user was a seller
    setSellerProducts((prev) => prev.filter((p) => p.sellerId !== userId));
  };

  const handleChangeRole = (userId: string, newRole: UserRole) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    );
  };

  // Seller handlers
  const handleUpdateStore = (storeData: { storeName: string; storeDescription: string; storeImage: string }) => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      storeName: storeData.storeName,
      storeDescription: storeData.storeDescription,
      storeImage: storeData.storeImage,
    };

    setCurrentUser(updatedUser);
    setUsers((prev) =>
      prev.map((u) => (u.id === currentUser.id ? updatedUser : u))
    );
  };

  const handleAddSellerProduct = (productData: Omit<Product, 'id' | 'rating' | 'reviewsCount' | 'thumbnails' | 'specifications' | 'sellerId' | 'sellerStoreName'>) => {
    if (!currentUser) return;

    const newProduct: Product = {
      ...productData,
      id: `seller-prod-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 0,
      thumbnails: [productData.imageUrl],
      specifications: {},
      sellerId: currentUser.id,
      sellerStoreName: currentUser.storeName || currentUser.name,
    };

    setSellerProducts((prev) => [...prev, newProduct]);
  };

  const handleDeleteSellerProduct = (productId: string) => {
    setSellerProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  // Submit and finalize checkout order placements
  const handlePlaceOrder = (orderData: typeof placedOrder) => {
    setPlacedOrder(orderData);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setPlacedOrder(null);
    setIsOrderModalOpen(false);
    setCartItems([]); // Clear cart upon successful ordering!
    setView('home'); // Go back to start
  };

  // Trigger searching filter in catalog
  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setView('catalog');
  };

  // Modal switchers
  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  // Route guard: prevent unauthorized access
  useEffect(() => {
    if (currentView === 'admin' && (!isLoggedIn || currentUser?.role !== 'admin')) {
      setView('home');
    }
    if (currentView === 'seller-dashboard' && (!isLoggedIn || currentUser?.role !== 'vendedor')) {
      setView('home');
    }
  }, [currentView, isLoggedIn, currentUser]);

  // Make sure view resets scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentView]);

  // Compat: build studentInfo from currentUser for components that still need it
  const studentInfo = currentUser ? { name: currentUser.name, ra: currentUser.ra, email: currentUser.email } : null;

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans transition-all selection:bg-blue-900 selection:text-white">
      
      {/* Universal Institutional Header overlay */}
      <Header
        currentView={currentView}
        setView={setView}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main content body canvas containing views */}
      <div className="flex-grow pt-24 pb-12 w-full max-w-7xl mx-auto px-4 md:px-0">
        
        {currentView === 'home' && (
          <HomeScreen
            setView={setView}
            setSelectedProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            setSelectedCategory={setSelectedCategory}
            sellerProducts={sellerProducts}
          />
        )}

        {currentView === 'catalog' && (
          <CatalogScreen
            setView={setView}
            setSelectedProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            sellerProducts={sellerProducts}
          />
        )}

        {currentView === 'detail' && (
          <DetailScreen
            product={selectedProduct}
            setView={setView}
            onAddToCart={handleAddToCart}
            setSelectedProduct={setSelectedProduct}
            isLoggedIn={isLoggedIn}
            sellerProducts={sellerProducts}
          />
        )}

        {currentView === 'checkout' && (
          <CheckoutScreen
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveItem}
            isLoggedIn={isLoggedIn}
            studentInfo={studentInfo}
            onPlaceOrder={handlePlaceOrder}
            setView={setView}
          />
        )}

        {currentView === 'admin' && currentUser?.role === 'admin' && (
          <AdminUsersScreen
            users={users}
            currentUser={currentUser}
            onDeleteUser={handleDeleteUser}
            onChangeRole={handleChangeRole}
          />
        )}

        {currentView === 'seller-dashboard' && currentUser?.role === 'vendedor' && (
          <SellerDashboard
            currentUser={currentUser}
            sellerProducts={sellerProducts}
            onUpdateStore={handleUpdateStore}
            onAddProduct={handleAddSellerProduct}
            onDeleteProduct={handleDeleteSellerProduct}
          />
        )}

      </div>

      {/* Slide-over interactive shopping cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveItem}
        setView={setView}
        isLoggedIn={isLoggedIn}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onSwitchToRegister={handleSwitchToRegister}
        users={users}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onRegisterSuccess={handleRegisterSuccess}
        onSwitchToLogin={handleSwitchToLogin}
      />

      {/* Order finalized receipt confirmation */}
      <OrderConfirmationModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        orderData={placedOrder}
      />

      {/* Institution footer */}
      <Footer />

    </div>
  );
}
