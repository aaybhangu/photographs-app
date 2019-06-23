import React from "react";
import { connect } from "react-redux";
import { photoSelected } from "../actions";
class PhotosList extends React.Component {
  photoSelected = event => {
    this.props.photoSelected(event.target.value);
  };
  render() {
    const photosList = this.props.photos.map(photo => {
      return (
        <option key={photo.id} value={photo.url}>
          {photo.title}
        </option>
      );
    });
    return (
      <div>
        <select onChange={this.photoSelected}>
          <option defaultValue="Select Photo">Select photo</option>
          {photosList}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  { photoSelected }
)(PhotosList);
