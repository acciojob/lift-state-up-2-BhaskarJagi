import React, { useState } from "react";



const Parent = (props) => {

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{props.text}</p>
            {props.children}
        </div>
    )
}

export default Parent