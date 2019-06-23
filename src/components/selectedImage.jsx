import React from "react";
import { connect } from "react-redux";

class Selectedimage extends React.Component {
  render() {
    const photo = this.props.selectedPhoto;
    return (
      <div>
        <img alt="SelectedPhoto" src={photo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPhoto: state.selectedPhoto
  };
};
export default connect(mapStateToProps)(Selectedimage);
