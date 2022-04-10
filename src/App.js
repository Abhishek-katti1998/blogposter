import logo from "./logo.svg";
import "./App.css";
import Header from "./header/header";
import { useSelector } from "react-redux";
import Model from "./model/model";
import BackDrop from "./backdrop/backdrop";
import Card from "./UI/card/card";
import Content from "./content/content";
import PostContainer from "./UI/PostContainer";
import Edit from "./UI/Edit/Edit";
import CommentBox from "./UI/comment/commentBox";

function App() {
  const showModel = useSelector((sel) => sel.showModel);
  const showCommentBox = useSelector((sel) => sel.showCommentBox);
  const edit = useSelector((sel) => sel.edit);
  return (
    <>
      <Header />
      {showModel ? (
        <Model>
          <PostContainer />
        </Model>
      ) : null}
      {edit ? (
        <Model>
          <Edit />
        </Model>
      ) : null}
      {showCommentBox ? (
        <Model>
          <CommentBox />
        </Model>
      ) : null}
      {showModel || edit || showCommentBox ? <BackDrop /> : null}
      <Content />
    </>
  );
}

export default App;
