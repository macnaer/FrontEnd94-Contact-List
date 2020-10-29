import React from "react";
import { Redirect } from "react-router-dom";
import "./AddContact.css";

class AddContact extends React.Component {
  state = {
    name: "",
    role: "",
    avatar: "",
    created: "",
    status: "",
    email: "",
    gender: "",
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
    const { name, role, avatar, status, email, gender } = this.state;
    this.props.onCreate(name, role, avatar, status, email, gender);
    this.setState({
      isRedirect: true,
    });
  };

  render() {
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
                  />
                </div>
              </div>

              <div class="form-group">
                <div>
                  <input
                    type="text"
                    class="form-control"
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
                    onChange={this.getGender}
                  />
                </div>
              </div>

              <div class="form-group">
                <div>
                  <button type="submit" class="btn btn-default">
                    Add contact
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

export default AddContact;
