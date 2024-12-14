import React, { useState, useEffect } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

const DisplayInfo = (props) => {
    const { userList } = props;
    const [isShowHideUserList, setShowHideUserList] = useState(true);
    const handleShowHideList = () => {
        setShowHideUserList(!isShowHideUserList);
    }
    console.log(">>> call Render");

    useEffect(
        () => {
            if (userList.length === 0) {
                alert("You deleted all the users")
            }
            console.log(">>> call useEffect");
        }, [userList]
    );
    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideList()}>Show user list</span>
                {isShowHideUserList ? "Hide user list" : "Show user list"}
            </div>
            {isShowHideUserList &&
                <>
                    {userList.map((user, index) => {
                        console.log('userList:', userList)
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div >My name is {user.name}</div>
                                    <div>I am {user.age} years old</div>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        props.handleDeleteUser(user.id)
                                    }}>
                                        Delete
                                    </button>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                    }
                </>
            }
        </div>

    )
}



export default DisplayInfo;
