import classes from "./card.module.css";
import { useSelector } from "react-redux";
import CommentBox from "../comment/commentBox";
const Card = (props) => {

  return (
    <div className={classes.Card}>
      <>
        {props.children}
      
      </>
    </div>
  );
};
export default Card;
