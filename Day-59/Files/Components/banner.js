import React, {PureComponent} from "react";


class Banner extends PureComponent{
    render()
    {
        console.log("Banner rendering");
        return(
            <>
            <h1>{this.props.bannerHeading}</h1>
            </>
        )
    }
}

export default Banner;