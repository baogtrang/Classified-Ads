import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfo extends React.Component {
//     // state = {
//     //     isShowUserList: true
//     // }

//     render() {
//         console.log("Call me render")
//         const { userList } = this.props;
//         return (
//             <div className="display-info-container">

//                 {true &&
//                     <>
//                         {userList.map((user, index) => {
//                             console.log('userList:', userList)
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div >My name is {user.name}</div>
//                                         <div>I am {user.age} years old</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => {
//                                             this.props.handleDeleteUser(user.id)
//                                         }}>
//                                             Delete
//                                         </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })
//                         }
//                     </>
//                 }
//             </div>

//         )
//     }
// }

const DisplayInfo = (props) => {
    const { userList } = props;
    const [isShowHideUserList, setShowHideUserList] = useState(true);
    // this.state = {
    //     isShowHideUserList: true
    // }
    const handleShowHideList = () => {
        setShowHideUserList(!isShowHideUserList);
    }
    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideList()}>Show user list</span>
                {isShowHideUserList ? "Hide" : "Show"}
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
