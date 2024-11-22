import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    const myInfo = ["a", "b", "c"];
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo name="Bao IT" age="30" />
        <hr />
        <DisplayInfo name="Bao IT" age={29} myInfor={myInfo} />

      </div>
    );
  }
}

export default MyComponent;
