import React from "react";
import { connect } from "react-redux";
import { getPhotos } from "../actions";

class AlbumList extends React.Component {
  albumSelected = event => {
    console.log();
    this.props.getPhotos(event.target.value);
  };
  render() {
    const albumsList = this.props.albums.map(album => {
      return (
        <option key={album.id} value={album.id}>
          {album.title}
        </option>
      );
    });
    return (
      <div>
        <select onChange={this.albumSelected}>
          <option defaultValue="Select Album">Select Album</option>
          {albumsList}
        </select>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};
export default connect(
  mapStateToProps,
  { getPhotos }
)(AlbumList);
