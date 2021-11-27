import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header";

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <>
      {showCart && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <Foods />
    </>
  );
}

export default App;
