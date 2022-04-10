import classes from "./PostContainer.module.css";
import { useDispatch } from "react-redux";
import { contentAction, modelAction } from "../store/action/action";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
const PostContainer = () => {
  //   const ipRef = useRef();
  let curData = [];
  // const [val, setValue] = useState("");
  // const data=useSelector((sel)=>sel.content)
  const dispatch = useDispatch();
  const data = useSelector((sel) => sel.content);
  console.log(data);
  const ipChangeHandler = (e) => {
    curData = [...data];
    curData.push(e.target.value);
    // setValue(e.target.value);
  };
  const btnClickHandler = () => {
    dispatch(contentAction(curData));
    dispatch(modelAction(false));
  };
  return (
    <div className={classes.container}>
      <textarea type="text" rows="4" cols="40" onChange={ipChangeHandler}>
        {/* {data[0]} */}
      </textarea>
      <button onClick={btnClickHandler} className={classes.btn}>
        Post
      </button>
    </div>
  );
};
export default PostContainer;
