import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartisshown, setcartishown] = useState(false);

  const showcartHandler = () => {
    setcartishown(true);
  };

  const hidecarthandler = () => {
    setcartishown(false);
  };

  return (
    <CartProvider>
      {cartisshown && <Cart onClose={hidecarthandler} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
