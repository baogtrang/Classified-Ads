import React from "react"

class AddUser extends React.Component {
    state = {
        name: "Bao",
        address: "Mars",
        age: 50,
    };

    handleOnChangeName = (event) => {
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
        this.props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        });

    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
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

export default AddUser;