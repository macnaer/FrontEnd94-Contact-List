import React from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";

class ContactItem extends React.Component {
  state = {
    name: this.props.name,
    role: this.props.role,
    avatar: this.props.avatar,
    created: this.props.created,
    status: this.props.status,
    email: this.props.email,
    gender: this.props.gender,
  };
  render() {
    const { avatar, role, name, email, created, gender } = this.state;
    const { status } = this.props;

    const { onStatusChange, onDelete } = this.props;

    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

    let statusStyle = "label label-default";

    if (status === "Active") {
      statusStyle = "label label-success";
    } else if (status === "Inctive") statusStyle = "label label-default";
    else if (status === "Banned") statusStyle = "label label-danger";
    else if (status === "Pending") statusStyle = "label label-warning";
    return (
      <tr>
        <td>
          <img src={URL} alt="" />
          <a href="#" className="user-link">
            {name}
          </a>
          <span className="user-subhead">{role}</span>
        </td>
        <td>{created}</td>
        <td className="text-center">
          <span className={statusStyle} onClick={onStatusChange}>
            {status}
          </span>
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
          <Link to="/edit" className="table-link" onClick={this.props.onEdit}>
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
          </Link>
          <a href="#" className="table-link danger">
            <span className="fa-stack" onClick={onDelete}>
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
