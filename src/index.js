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
import EditContact from "./Components/EditContact/EditContact";

class App extends Component {
  DB_URL = "https://contact-list-front-end.firebaseio.com/contacts.json";
  state = {
    List: [],
    currentContact: "",
  };

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    fetch(this.DB_URL)
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        if (data == null) {
          this.setState({
            List: [],
          });
        } else {
          this.setState({
            List: data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  onSaveData(List) {
    fetch(this.DB_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(List),
    });
  }

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
    this.onSaveData(tmpList);
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
    this.onSaveData(newList);
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

    this.onSaveData(newList);
    this.setState(() => {
      return {
        List: newList,
      };
    });
  };

  onEdit = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);

    const Contact = this.state.List[index];
    this.setState({
      currentContact: Contact,
    });
  };

  onEditCurrentContact = (
    name,
    role,
    avatar,
    status,
    email,
    gender,
    created,
    id
  ) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    let newContact = {
      id: id,
      name: name,
      role: role,
      avatar: avatar,
      created: created,
      status: status,
      email: email,
      gender: gender,
    };

    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, newContact, ...partTwo];

    this.onSaveData(newList);
    this.setState({
      List: newList,
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
                onEdit={this.onEdit}
              />
            )}
          />
          <Route
            path="/add-new-contact"
            exact
            render={() => <AddContact onCreate={this.onCreate} />}
          />
          <Route
            path="/edit"
            exact
            render={() => (
              <EditContact
                currentContact={this.state.currentContact}
                onEditCurrentContact={this.onEditCurrentContact}
              />
            )}
          />
          }
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
