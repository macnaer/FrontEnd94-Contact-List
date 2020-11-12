import { v4 as uuidv4 } from "uuid";

export default class ContactListService {
  DB_URL = "https://contact-list-front-end.firebaseio.com/contacts.json";

  async updateData() {
    const List = await fetch(this.DB_URL)
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        if (data == null) {
          return {
            List: [],
          };
        } else {
          return {
            List: data,
          };
        }
      })
      .catch((err) => console.log(err));
    return List;
  }

  //   async onSaveData(List) {
  //     await fetch(this.DB_URL, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(List),
  //     });
  //   }

  //   onStatusChange = (id) => {
  //     const index = this.state.List.findIndex((elem) => elem.id === id);
  //     const tmpList = this.state.List.slice();
  //     switch (tmpList[index].status) {
  //       case "Active":
  //         tmpList[index].status = "Inactive";
  //         break;
  //       case "Inactive":
  //         tmpList[index].status = "Pending";
  //         break;
  //       case "Pending":
  //         tmpList[index].status = "Banned";
  //         break;
  //       case "Banned":
  //         tmpList[index].status = "Active";
  //     }
  //     this.onSaveData(tmpList);
  //     this.setState({
  //       List: tmpList,
  //     });
  //   };

  //   onCreate = (name, role, avatar, status, email, gender) => {
  //     let newContact = {
  //       id: uuidv4(),
  //       name: name,
  //       role: role,
  //       avatar: avatar,
  //       created: Date.now(),
  //       status: status,
  //       email: email,
  //       gender: gender,
  //     };

  //     const newList = [...this.state.List, newContact];
  //     this.onSaveData(newList);
  //     this.setState(() => {
  //       return {
  //         List: newList,
  //       };
  //     });
  //   };

  //   onDelete = (id) => {
  //     const index = this.state.List.findIndex((elem) => elem.id === id);
  //     const partOne = this.state.List.slice(0, index);
  //     const partTwo = this.state.List.slice(index + 1);
  //     const newList = [...partOne, ...partTwo];

  //     this.onSaveData(newList);
  //     this.setState(() => {
  //       return {
  //         List: newList,
  //       };
  //     });
  //   };

  //   onEdit = (id) => {
  //     const index = this.state.List.findIndex((elem) => elem.id === id);

  //     const Contact = this.state.List[index];
  //     this.setState({
  //       currentContact: Contact,
  //     });
  //   };

  //   onEditCurrentContact = (
  //     name,
  //     role,
  //     avatar,
  //     status,
  //     email,
  //     gender,
  //     created,
  //     id
  //   ) => {
  //     const index = this.state.List.findIndex((elem) => elem.id === id);
  //     let newContact = {
  //       id: id,
  //       name: name,
  //       role: role,
  //       avatar: avatar,
  //       created: created,
  //       status: status,
  //       email: email,
  //       gender: gender,
  //     };

  //     const partOne = this.state.List.slice(0, index);
  //     const partTwo = this.state.List.slice(index + 1);
  //     const newList = [...partOne, newContact, ...partTwo];

  //     this.onSaveData(newList);
  //     this.setState({
  //       List: newList,
  //     });
  //   };
}
