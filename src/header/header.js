import { useDispatch } from "react-redux";
import { modelAction } from "../store/action/action";
import classes from './header.module.css'
const Header = () => {
  const dispatch = useDispatch();
  const createPostHandler = () => {
    dispatch(modelAction(true));
  };
  return (
    <header>
      <button onClick={createPostHandler} className={classes.btn}>Create Post</button>
    </header>
  );
};
export default Header;
