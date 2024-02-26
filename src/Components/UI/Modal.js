import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>   </div>
    </div>
  );
};

const portalEle = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEle)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalEle)}
    </Fragment>
  );
};

export default Modal;
