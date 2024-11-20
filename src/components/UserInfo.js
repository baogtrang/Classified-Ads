import React from "react"

class UserInfo extends React.Component {
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