//Import React and React DOM libraries
import React from "react";
import ReactDOM from "react-dom"

//Create a React Component

var App = ()=>{
    return(
        <div>"Hi there!"</div>
    )
}

//Take the component and diplay it on screen
ReactDOM.render(
    <App/>,document.querySelector("#root")
)

