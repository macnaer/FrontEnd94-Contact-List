import React from "react";

class ContactItem extends React.Component {
  state = {
    name: this.props.name,
    role: this.props.role,
    avatar: this.props.avatar,
    created: this.props.created,
    status: this.props.status,
    email: this.props.email,
  };
  render() {
    const { avatar, role, name, status, email, created } = this.state;
    return (
      <tr>
        <td>
          <img src={avatar} alt="" />
          <a href="#" className="user-link">
            {name}
          </a>
          <span className="user-subhead">{role}</span>
        </td>
        <td>{created}</td>
        <td className="text-center">
          <span className="label label-default">{status}</span>
        </td>
        <td>
          <a href="#">{email}</a>
        </td>
        <td>
          <a href="#" className="table-link">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="#" className="table-link">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="#" className="table-link danger">
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </td>
      </tr>
    );
  }
}

export default ContactItem;
