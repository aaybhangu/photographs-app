import { combineReducers } from "redux";
import userReducer from "./userReducers";
import albumReducers from "./albumReducers";
import photoReducers from "./photoReducers";
import photoSelected from "./photoSelectedReducers";
const reducers = combineReducers({
  users: userReducer,
  albums: albumReducers,
  photos: photoReducers,
  selectedPhoto: photoSelected
});
export default reducers;
