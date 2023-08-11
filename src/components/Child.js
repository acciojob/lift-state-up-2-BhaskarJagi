import React from "react";


const Child = (props) => {

    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" onChange={(e) => props.setText(e.target.value)}/>
        </div>
    )
}

export default Child