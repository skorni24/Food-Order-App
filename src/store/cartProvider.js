import CartContext from "./cart-contxt";
import { useReducer } from "react";

const defaultcartstate = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {

    if(action.type==='ADD_ITEMS'){
        const updatedItems=state.items.concat(action.item );
        const updatedTotalamount=state.totalAmount+action.item.price+action.item.amount;
return{
    items:updatedItems,
    totalAmount:updatedTotalamount,
}
    }
  return defaultcartstate;
};

const CartProvider = (props) => {
  const [cartState, dispatchcartAction] = useReducer(cartReducer,defaultcartstate);

  const addItemToCartHandler = (item) => {
    dispatchcartAction({type:'ADD_ITEMS',item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchcartAction({type:'REMOVE',id:id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
