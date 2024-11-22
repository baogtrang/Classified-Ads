import React from "react";
class DisplayInfo extends React.Component {
    render() {
        console.log("DisplayInfo", this.props)
        const { name, age } = this.props;

        return (
            //destructuring array/object
            //prop => properties
            < div >
                <div>My name is {name}</div>
                <div>I am {age} years old</div>
                <div>Infor {this.props.myInfor}</div>
            </div>

        )
    }
}

export default DisplayInfo;
