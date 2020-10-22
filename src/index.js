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
        avatar: "1",
        created: "2013/08/08",
        status: "Inactive",
        email: "mila@kunis.com",
        gender: "women",
      },
      {
        id: uuidv4(),
        name: "George Clooney",
        role: "Admin",
        avatar: "2",
        created: "2013/08/08",
        status: "Active",
        email: "marlon@brando.com",
        gender: "men",
      },
      {
        id: uuidv4(),
        name: "Camilla Terry",
        role: "Member",
        avatar: "3",
        created: "2013/08/08",
        status: "Active",
        email: "camilla@gmail.com",
        gender: "women",
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
