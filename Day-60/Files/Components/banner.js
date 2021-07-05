// import React, {PureComponent} from "react";

import { useEffect } from "react";


// class Banner extends PureComponent{
//     render()
//     {
//         console.log("Banner rendering");
//         return(
//             <>
//             <h1>{this.props.bannerHeading}</h1>
//             </>
//         )
//     }
// }

const Banner = ()=>{

    useEffect(()=>{
        return ()=> {
            console.log("unmounting");
        }
    }, [])
    return(
    
        <h1>Banner</h1>
        
    );
}


 export default Banner;

