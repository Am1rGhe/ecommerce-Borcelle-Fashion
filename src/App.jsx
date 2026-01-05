import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/header/Header";
import SearchOverlay from "./components/searchOverlay/SearchOverlay";
import ProductListing from "./components/productListing/ProductListing";
import Cart from "./components/cart/Cart";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      <SearchOverlay
        isSearchOpen={isSearchOpen}
        onCloseSearch={() => setIsSearchOpen(false)}
      />
      <ProductListing />
      <Cart />
    </CartProvider>
  );
}
export default App;
