import ReactDOM from "react-dom";
import React from "react";
import classes from "./backdrop.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  commentAction,
  editModelAction,
  modelAction,
} from "../store/action/action";
const BackDropCpy = (props) => {
  const dispatch = useDispatch();
  const edit = useSelector((sel) => sel.edit);
  const showCommentBox = useSelector((sel) => sel.showCommentBox);
  const showModel = useSelector((sel) => sel.showModel);
  const backDropClickHandler = () => {
    dispatch(modelAction(false));
    if (edit) {
      dispatch(editModelAction(false));
    }
    if (showCommentBox) {
      dispatch(commentAction(false));
    }
  };
  return (
    <div className={classes.backdrop} onClick={backDropClickHandler}></div>
  );
};
const BackDrop = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDropCpy />,
        document.getElementById("BackDrop")
      )}
    </React.Fragment>
  );
};
export default BackDrop;
