import jsonPlaceHolder from "../api/jsonplaceholder";

export const getUsers = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/users");
  dispatch({
    type: "GET_USERS",
    payload: response.data
  });
};

export const getAlbums = id => async dispatch => {
  const response = await jsonPlaceHolder.get("/albums", {
    params: { userId: id }
  });
  dispatch({
    type: "GET_ALBUMS",
    payload: response.data
  });
};

export const getPhotos = id => async dispatch => {
  const response = await jsonPlaceHolder.get("/photos", {
    params: { albumId: id }
  });
  dispatch({
    type: "GET_PHOTOS",
    payload: response.data
  });
};

export const photoSelected = photo => {
  return {
    type: "PHOTO_SELECTED",
    payload: photo
  };
};
