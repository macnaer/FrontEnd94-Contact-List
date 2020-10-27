import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <Link class="navbar-brand" to="/">
                  Brand
                </Link>
              </div>

              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul class="nav navbar-nav">
                  <li class="active">
                    <Link to="/">
                      Home <span class="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-new-contact">Add new contact</Link>
                  </li>
                </ul>
                <form class="navbar-form navbar-right">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <button type="submit" class="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
