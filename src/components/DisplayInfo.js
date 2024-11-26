import React from "react";
class DisplayInfo extends React.Component {
    state = {
        isShowUserList: true
    }
    handleShowHide = () => {
        this.setState({
            isShowUserList: !this.state.isShowUserList,
        })
    }
    render() {

        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowUserList ? "Hide" : "Show"}
                    </span>
                </div>
                {this.state.isShowUserList &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>I am {user.age} years old</div>
                                    <hr />
                                </div>
                            )
                        })
                        }
                    </div>
                }

            </div>

        )
    }
}

export default DisplayInfo;
