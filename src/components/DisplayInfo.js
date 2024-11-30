import React from "react";
import './DisplayInfo.scss';

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
        const { userList } = this.props;
        return (
            <div className="display-info-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowUserList ? "Hide" : "Show"}
                    </span>
                </div>
                {this.state.isShowUserList &&
                    <div>
                        {userList.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "pink"}>
                                    <div style={{ color: "yellow", paddingTop: "50px" }}>My name is {user.name}</div>
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
