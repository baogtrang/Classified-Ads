import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  state = {
    name: "Bao",
    address: "Mars",
    age: 50,
  };

  handleClick(event) {
    console.log(">> Click me");
    console.log("My name is, this.state.name");
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I am from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleOnMouseOver}>Click me</button>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (

//     <div className='App'>
//       <header className='App-header'>
//         <img
//           src={logo}
//           className='App-logo'
//           alt='logo'
//         />
//         <p>Hello World</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
