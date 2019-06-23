export default (state = [], action) => {
  switch (action.type) {
    case "PHOTO_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
