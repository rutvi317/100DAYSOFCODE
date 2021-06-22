// function heading(props)
// {
//     console.log(props);
//     return(
//     <h1> {props.heading} </h1>
//     );
// }

import { Component } from "react";


//Passing props from class component to class component

class Heading extends Component{

    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render()
    {
        return(
            <>
                <h1>{this.props.heading}</h1>
            </>
        )
    }
}
export default Heading;