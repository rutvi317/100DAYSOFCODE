// function Banner()
// {
//     return(<h2> Here is the Banner </h2>)
// }


// React-Lifecycle

import { Component } from "react";

class Banner extends Component
{
    render()
    {
        return (
            <h2>Banner</h2>
        )
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount method is called");
    }
}
export default Banner;