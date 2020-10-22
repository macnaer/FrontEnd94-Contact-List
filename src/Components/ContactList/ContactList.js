import React from "react";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ List }) => {
  const item = List.map((item) => {
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
  });
  return (
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
          {item.length !== 0 ? item : <h2>Contact list is empty.</h2>}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
