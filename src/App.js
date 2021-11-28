import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <Foods />
    </CartProvider>
  );
}

export default App;
