import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

// Include components
import ContactList from "./Components/ContactList/ContactList";

class App extends Component {
  state = {
    List: [
      {
        id: uuidv4(),
        name: "Mila Kunis",
        role: "Member",
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
        created: "2013/08/08",
        status: "Inactive",
        email: "mila@kunis.com",
      },
      {
        id: uuidv4(),
        name: "George Clooney",
        role: "Admin",
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        created: "2013/08/08",
        status: "Active",
        email: "marlon@brando.com",
      },
      {
        id: uuidv4(),
        name: "Camilla Terry",
        role: "Member",
        avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
        created: "2013/08/08",
        status: "Active",
        email: "camilla@gmail.com",
      },
    ],
  };

  render() {
    console.log("Log => ", this.state.List);
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
