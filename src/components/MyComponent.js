import React from "react";
import AddUser from "./AddUser";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    userList: [
      { id: 1, name: "Bao", age: "15" },
      { id: 2, name: "Uyen", age: "26" },
      { id: 3, name: "Pig", age: "69" },
    ]
  }
  handleAddUser = (userObject) => {
    // let userListNew = this.state.userList;
    // userListNew.unshift(userObject)
    // console.log('userListNew:', userListNew)
    // this.setState({ userList: userListNew })
    this.setState({
      userList: [userObject, ...this.state.userList]
    })
  }
  render() {
    //DRY: Don't Repeat Yourself
    return (
      <div>
        <AddUser handleAddUser={this.handleAddUser} />
        <br />
        <DisplayInfo
          userList={this.state.userList}
        />
      </div>
    );
  }
}

export default MyComponent;
