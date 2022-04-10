import classes from "./content.module.css";
import Card from "../UI/card/card";
import { useSelector, useDispatch } from "react-redux";

import {
  commentAction,
  contentAction,
  editModelAction,
  indexingAction,
  modelAction,
  updateContentAction,
} from "../store/action/action";
import CommentBox from "../UI/comment/commentBox";
import { FaRegComment } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
const Content = () => {
  const dispatch = useDispatch();
  // const [localData, setlocalData] = useState([]);
  const [shouldUpdate, setUpdate] = useState(false);
  const data = useSelector((sel) => sel.content);
  const index = useSelector((sel) => sel.index);
  const showCommentBox = useSelector((sel) => sel.showCommentBox);
  //   console.log(data);
  const commentClickHandler = () => {
    return;
    dispatch(commentAction(true));
  };
  const postEditHandler = (e) => {
    dispatch(editModelAction(true));
    dispatch(indexingAction(Number(e.target.id)));
  };
  const deletePostHandler = (e) => {
    console.log(e.target.id);
    let curData = data;
    let left = curData.slice(0, Number(e.target.id));
    let right = curData.slice(Number(e.target.id) + 1, curData.length);
    console.log([...left, ...right]);
    dispatch(contentAction([...left, ...right]));
  };
  console.log("renderd");
  return (
    <div className={classes.container}>
      {/* {data.length > 0 ?} */}
      {data.length > 0
        ? data.map((e, index) => (
            <Card>
              <AiOutlineDelete
                size={25}
                style={{
                  alignSelf: "flex-end",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={deletePostHandler}
                id={index}
              />
              <h3>{e}</h3>
              <div className={classes.commentSection}>
                <BiEdit
                  size={25}
                  style={{
                    cursor: "pointer",
                    width: "4rem",
                    alignSelf: "flex-start",
                  }}
                  onClick={postEditHandler}
                  id={index}
                />
                <FaRegComment
                  size={25}
                  style={{
                    cursor: "pointer",
                    width: "4rem",
                    alignSelf: "flex-start",
                  }}
                  onClick={commentClickHandler}
                  id={index}
                />
              </div>

              {/* <CommentBox /> */}
            </Card>
          ))
        : null}
    </div>
  );
};
export default Content;
