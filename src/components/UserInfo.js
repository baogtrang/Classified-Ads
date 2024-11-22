import React from "react"

class UserInfo extends React.Component {
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
                My name is {this.state.name} and I am {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                        type='text'
                    />
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                        type='text'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;