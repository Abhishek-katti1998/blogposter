import {
  modelReducer,
  contentReducer,
  commentReducer,
  editReducer,
  indexReducer,
} from "./reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  showModel: modelReducer,
  content: contentReducer,
  showCommentBox: commentReducer,
  edit: editReducer,
  index: indexReducer,
});
export default rootReducer;
