import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";
import UserList from "./userList";
import AlbumList from "./albumsList";
import PhotosList from "./photosList";
import Selectedimage from "./selectedImage";
import "../css/app.css";

class App extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const isAlbumsLoaded = this.props.albums.length;
    const isPhotosLoaded = this.props.photos.length;
    const isPhotoSelected = this.props.selectedPhoto.length;

    return (
      <div className="container">
        <div className="heading">
          <h1>Photographs App</h1>
        </div>
        <div className="flexBox">
          <section>
            <p>Select User</p>
            <UserList />
          </section>
          <section>
            {isAlbumsLoaded ? (
              <div>
                <p>Select Album</p>
                <AlbumList />
              </div>
            ) : null}
          </section>
          <section>
            {isPhotosLoaded ? (
              <div>
                <p>Select Photo</p>
                <PhotosList />
              </div>
            ) : null}
          </section>
        </div>
        <div className="flexBox">
          {isPhotoSelected ? (
            <div>
              <p>Selected Photo</p>
              <Selectedimage />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    albums: state.albums,
    photos: state.photos,
    selectedPhoto: state.selectedPhoto
  };
};
export default connect(
  mapStateToProps,
  { getUsers }
)(App);
