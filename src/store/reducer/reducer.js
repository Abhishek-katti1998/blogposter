const initialModelState = false;
const initialCommentState = false;
const initialContent = [];
const initialEditState = "";
const initialIndex = null;
const initialupdateState = [];
// const initalDeleteState = initialContent;
export const modelReducer = (state = initialModelState, action) => {
  switch (action.type) {
    case "model":
      return action.payLoad;
    default:
      return state;
  }
};
export const contentReducer = (state = initialContent, action) => {
  switch (action.type) {
    case "content":
      return [...action.payLoad];
    default:
      return state;
  }
};
export const commentReducer = (state = initialCommentState, action) => {
  switch (action.type) {
    case "comment":
      return action.payLoad;
    default:
      return state;
  }
};
export const editReducer = (state = initialEditState, action) => {
  switch (action.type) {
    case "edit":
      return action.payLoad;
    default:
      return state;
  }
};
export const indexReducer = (state = initialIndex, action) => {
  switch (action.type) {
    case "index":
      return action.payLoad;
    default:
      return state;
  }
};
