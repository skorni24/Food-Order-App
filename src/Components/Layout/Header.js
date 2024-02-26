import { Fragment } from "react";
import mealsimage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>DeliverEats</h1>
        {/* <HeaderCartButton/> */}
        <HeaderCartButton onClick={props.onShowCart}/>
        {/* <button>hi</button> */}
        {/* <HeaderCartButton /> */}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="table  full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
