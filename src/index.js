import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components
import ContactList from "./Components/ContactList/ContactList";
import Header from "./Components/Header/header";
import NotFound from "./Components/NotFound/notFound";
import AddContact from "./Components/AddContact/AddContact";

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

  onStatusChange = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const tmpList = this.state.List.slice();
    switch (tmpList[index].status) {
      case "Active":
        tmpList[index].status = "Inactive";
        break;
      case "Inactive":
        tmpList[index].status = "Pending";
        break;
      case "Pending":
        tmpList[index].status = "Banned";
        break;
      case "Banned":
        tmpList[index].status = "Active";
    }

    this.setState({
      List: tmpList,
    });
  };

  onCreate = (name, role, avatar, status, email, gender) => {
    let newContact = {
      id: uuidv4(),
      name: name,
      role: role,
      avatar: avatar,
      created: Date.now(),
      status: status,
      email: email,
      gender: gender,
    };

    const newList = [...this.state.List, newContact];
    this.setState(() => {
      return {
        List: newList,
      };
    });
  };

  onDelete = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];

    this.setState(() => {
      return {
        List: newList,
      };
    });
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ContactList
                onStatusChange={this.onStatusChange}
                onDelete={this.onDelete}
                List={this.state.List}
              />
            )}
          />
          <Route
            path="/add-new-contact"
            exact
            render={() => <AddContact onCreate={this.onCreate} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
