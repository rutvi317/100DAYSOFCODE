// function Banner()
// {
//     return(<h2> Here is the Banner </h2>)
// }


// React-Lifecycle

import { Component } from "react";

class Banner extends Component
{
    state = {
        bannerHeading : this.props.bannerHeading,
    }

    static getDerivedStateFromProps(props, state)
    {
        if(props.bannerHeading === "Banner is Changed")
        {
            return ({
                bannerHeading : "This is the banner"
            })
        }
        return null;
    }
            
    render()
    {
        return (
            // <h2>Banner</h2>
            <h2>{this.state.bannerHeading}</h2>
        )
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount method is called");
    }
}
export default Banner;