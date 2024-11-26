import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Bao", age: "15" },
      { id: 2, name: "Bao IT", age: "26" },
      { id: 3, name: "Bao Dev", age: "69" },
    ]
  }
  render() {
    //DRY: Don't Repeat Yourself
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
