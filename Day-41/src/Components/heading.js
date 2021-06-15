import './../styles/heading.css';

function Heading() {

    // Third Method of applying inline CSS
    // let styles = {
    //  headingStyle : {
    //         color: "#00ff00" ,
    //         backgroundColor: "#5500ff",
    //     },
    
    // paraStyle: {
    //         fontSize : "2rem"
    //     }
    // }

    // For Inline CSS

    // let isUserRegistered = true;

    // if(isUserRegistered)
    // {
    //     styles.paraStyle.fontSize = "1rem"
    // } else{
    //     styles.paraStyle.fontSize = "2rem"
    // }

    // In case of External Css if we want to dynamically change our styles.
    
    let isUserRegistered = false;
    let heading;

    if(isUserRegistered)
    {
        heading = "main-heading";
    }
    else{
        heading = "main-heading-2";
    }



    // Second Method of applying inline CSS

    // let headingStyle = {
    //     color: "#00ff00" ,
    //     backgroundColor: "#5500ff"
    // }

    // let paraStyle = {
    //     fontSize : "2rem"
    // }

    return(
    <>
    {/* First Method of applying inline CSS */}
    {/* <h1 style = {{color: "#00ff00" , backgroundColor: "#5500ff"}}>Welcome To React</h1>
    <p style = {{fontSize : "2rem"}}>React is very interesting. You will Love it.</p> */}

    {/* // Second Method of applying inline CSS */}
    {/* <h1 style = {headingStyle}>Welcome To React</h1>
    <p style = {paraStyle}>React is very interesting. You will Love it.</p> */}

    {/* Third Method of applying inline CSS */}
    {/* <h1 style = {styles.headingStyle}>Welcome To React</h1>
    <p style = {styles.paraStyle}>React is very interesting. You will Love it.</p> */}

    {/* External CSS (heading.css) */}
    {/* <h1 className= "main-heading">Welcome To React</h1> */}
    <h1 className={heading}>Welcome To React</h1>
    <p className= "para-style">React is very interesting. You will Love it.</p>

    <button>Click Me</button>
    <div>
        <h2>Hope You are Understanding React</h2>
    </div>
    </>
    )
}

export default Heading;