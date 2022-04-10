import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import classes from "./commentBox.module.css";

const CommentBox = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((sel) => sel.content);
  const index = useSelector((sel) => sel.index);
  const publishCommentHandler = () => {};
  return (
    <div className={classes.container}>
      <textarea></textarea>
      <button onClick={publishCommentHandler}>Comment</button>
    </div>
  );
};
export default CommentBox;
