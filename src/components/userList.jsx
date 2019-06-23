import React from "react";
import { connect } from "react-redux";
import { getAlbums } from "../actions";
class UserList extends React.Component {
  onUserSelection = event => {
    this.props.getAlbums(event.target.value);
  };

  render() {
    const users = this.props.users.map(user => {
      return (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      );
    });
    return (
      <div>
        <select onChange={this.onUserSelection}>
          <option defaultValue="Select User">Select User</option>
          {users}
        </select>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { getAlbums }
)(UserList);
