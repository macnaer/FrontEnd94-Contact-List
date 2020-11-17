import React, { Fragment } from "react";
import ContactItem from "./ContactItem/ContactItem";
import ContactListService from "../../Services/ContactListService";
import Loader from "../Spinner/Spinner";
import Header from "../Header/header";

// Actions
import { getContactList } from "../../Actions/ContactListActions";

// Connect to redux
import { connect } from "react-redux";

const contactListService = new ContactListService();

class ContactList extends React.Component {
  componentDidMount() {
    const { getContactList } = this.props;
    contactListService
      .updateData()
      .then((data) => {
        console.log("LIST ", data.List);
        getContactList(data.List);
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("props ", this.props);
    const { List = [], loading = true } = this.props;
    if (loading) {
      return <Loader />;
    }
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>User</span>
                        </th>
                        <th>
                          <span>Created</span>
                        </th>
                        <th className="text-center">
                          <span>Status</span>
                        </th>
                        <th>
                          <span>Email</span>
                        </th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {List.length !== 0 ? (
                        List.map((item) => {
                          return (
                            <ContactItem
                              key={item.id}
                              name={item.name}
                              role={item.role}
                              avatar={item.avatar}
                              created={item.created}
                              status={item.status}
                              email={item.email}
                              gender={item.gender}
                            />
                          );
                        })
                      ) : (
                        <h2>Contact list is empty.</h2>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ contactListReducer }) => {
  console.log("mapStateToProps ", contactListReducer);
  const { List, loading } = contactListReducer;
  return { List, loading };
};

const mapDispatchToProps = {
  getContactList,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
