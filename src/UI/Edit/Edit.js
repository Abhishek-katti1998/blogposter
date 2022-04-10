import { useSelector, useDispatch } from "react-redux";
import {
  contentAction,
  editModelAction,
  updateContentAction,
} from "../../store/action/action";
import classes from "./Edit.module.css";
const Edit = () => {
  const dispatch = useDispatch();
  const data = useSelector((sel) => sel.content);
  const index = useSelector((sel) => sel.index);
  const updatePostHandler = (e) => {
    // console.log(e.target.value);
    let curData = data;
    curData[index] = e.target.value;
    dispatch(contentAction(curData));
  };
  const editBtnClickHandler = () => {
    dispatch(editModelAction(false));
  };
  console.log(index, "content");
  return (
    <div className={classes.container}>
      <textarea onChange={updatePostHandler}>{data[index]}</textarea>
      <button onClick={editBtnClickHandler}>Edit</button>
    </div>
  );
};
export default Edit;
