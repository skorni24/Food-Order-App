import classes from "./MealItem.module.css";
import Form from "./MealItemForm";


const MealItem = (props) => {
 const price =`₹${props.price}`;

  return(
  <li className={classes.meal}>
    <div>
      <h3 className={classes.name}>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div>
      <Form id={props.id}/>
    </div>
  </li>
  );
};

export default MealItem;
