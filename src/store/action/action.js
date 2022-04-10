function actionGenerate(actionType, actionPayLoad) {
  return {
    type: actionType,
    payLoad: actionPayLoad,
  };
}
export const modelAction = (data) => actionGenerate("model", data);
export const contentAction = (data) => actionGenerate("content", data);
export const commentAction = (data) => actionGenerate("comment", data);
export const editModelAction = (data) => actionGenerate("edit", data);
export const indexingAction = (data) => actionGenerate("index", data);
