import React from "react";
import { Redirect } from "react-router-dom";

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact.id,
    name: this.props.currentContact.name,
    role: this.props.currentContact.role,
    avatar: this.props.currentContact.avatar,
    created: this.props.currentContact.created,
    status: this.props.currentContact.status,
    email: this.props.currentContact.email,
    gender: this.props.currentContact.gender,
    isRedirect: false,
  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  getRole = (event) => {
    this.setState({
      role: event.target.value,
    });
  };
  getAvatar = (event) => {
    this.setState({
      avatar: event.target.value,
    });
  };
  getStatus = (event) => {
    this.setState({
      status: event.target.value,
    });
  };
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  getGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  onSendData = (event) => {
    event.preventDefault();
    const {
      name,
      role,
      avatar,
      status,
      email,
      gender,
      created,
      id,
    } = this.state;
    this.props.onEditCurrentContact(
      name,
      role,
      avatar,
      status,
      email,
      gender,
      created,
      id
    );
    this.setState({
      isRedirect: true,
    });
  };

  render() {
    const { avatar, role, name, status, email, created, gender } = this.state;
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.onSendData}>
              <div class="form-group">
                <div>
                  <input
                    type="text"
                    value={name}
                    class="form-control"
                    placeholder="Name"
                    onChange={this.getName}
                  />
                </div>
              </div>
              <div class="form-group">
                <div>
                  <input
                    type="text"
                    value={role}
                    class="form-control"
                    placeholder="Role"
                    onChange={this.getRole}
                  />
                </div>
              </div>
              <div class="form-group">
                <div>
                  <input
                    type="number"
                    value={avatar}
                    min="1"
                    max="99"
                    class="form-control"
                    placeholder="Avatar"
                    onChange={this.getAvatar}
                  />
                </div>
              </div>
              <div class="form-group">
                <div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Status"
                    onChange={this.getStatus}
                    value={status}
                  />
                </div>
              </div>

              <div class="form-group">
                <div>
                  <input
                    type="text"
                    class="form-control"
                    value={email}
                    placeholder="Email"
                    onChange={this.getEmail}
                  />
                </div>
              </div>
              <div class="form-group">
                <div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Gender"
                    value={gender}
                    onChange={this.getGender}
                  />
                </div>
              </div>

              <div class="form-group">
                <div>
                  <button type="submit" class="btn btn-default">
                    Edit contact
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditContact;
