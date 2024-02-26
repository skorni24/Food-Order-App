import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CardContext from "../../store/cart-contxt";
import classes from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const carttxt = useContext(CardContext);

  const nofcartitems = carttxt.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{nofcartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
