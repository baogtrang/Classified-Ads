import React from "react";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {
  state = {
    name: "Bao",
    address: "Mars",
    age: 50,
  };




  handleOnChangeInput = (event) => {
    //bad code
    // this.state.age = event.target.value;
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>

        <br />
        <hr />
        <UserInfo />
      </div>
    );
  }
}

export default MyComponent;
