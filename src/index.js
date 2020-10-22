import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Include components
import ContactList from "./Components/ContactList/ContactList";

class App extends Component {
  state = {
    List: [
      {
        id: 1,
        name: "Mila Kunis",
        role: "Member",
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        created: "2013/08/08",
        status: "Inactive",
        email: "mila@kunis.com",
      },
      {
        id: 2,
        name: "George Clooney",
        role: "Admin",
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        created: "2013/08/08",
        status: "Active",
        email: "marlon@brando.com",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <ContactList List={this.state.List} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
