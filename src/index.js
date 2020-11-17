import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import store
import store from "./store";
import ContactListService from "./Services/ContactListService";
import { Provider } from "react-redux";

// Import components
import ContactList from "./Components/ContactList/ContactList";
import Header from "./Components/Header/header";
import NotFound from "./Components/NotFound/notFound";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

const App = () => {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path="/" exact render={() => <ContactList />} />
          <Route path="/add-new-contact" exact render={() => <AddContact />} />
          <Route path="/edit" exact render={() => <EditContact />} />}
        </Provider>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
