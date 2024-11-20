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

  handleClick = (event) => {
    console.log(">> Click me");
    //merge state => react class
    this.setState({
      name: "Trang",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault()
    alert("handleOnSubmit")
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            onChange={(event) => this.handleOnChangeInput(event)}
            type='text'
          />
          <button>Submit</button>
        </form>
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
