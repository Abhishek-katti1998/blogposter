import classes from "./comment.module.css";
import { FaRegComment } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
const Comment = () => {
  return (
    <div className={classes.container}>
      <AiOutlineDelete style={{ allignSelf: "flex-end" }} />
      <p>comment</p>
      <FaRegComment />
      <BiEdit />
    </div>
  );
};
export default Comment;
