import React, {Component} from 'react';
// import Heading  from "./heading";
// import HeadingClass  from "./headingClass";
// import Banner from "./banner";


//// Using Function Component

// function handleClick(event)
// {
//     console.log("Button is been Clicked", event.target.id);
// }

// function handleInputChange(event)
// {
//     console.log("Someone is typing", event.target.value);
// }

// function handleMouseEnter()
// {
//    console.log("Mouse has entered");
// }

// function handleFocus()
// {
//     console.log("Input in Focus");
// }

// function App()
// {
//     return (
//         <> 
//         <Heading />
//         {/* <button onClick={()=>{
//         console.log("Button is clicked");}}>Click Me</button> */}

//          <button onClick={handleClick} id="btn-1">Click Me 1</button>
//          <button onClick={handleClick} id="btn-2">Click Me 2</button>
//          <input onChange={handleInputChange} onMouseEnter={handleMouseEnter} onFocus={handleFocus} />

//         {/* <HeadingClass /> */}
//         <Banner />
//         </>

//     )
// }

///// Using Class Components 

// class App extends Component{

// handleClick(event)
// {
//     console.log("Button is been Clicked", event.target.id);
// }

// handleInputChange(event)
// {
//     console.log("Someone is typing", event.target.value);
// }

// handleMouseEnter()
// {
//    console.log("Mouse has entered");
// }

// handleFocus()
// {
//     console.log("Input in Focus");
// }


//     render()
//     {
//         return(
//             <>
//             <Heading />
//              <button onClick={this.handleClick} id="btn-1">Click Me 1</button>
//              <button onClick={this.handleClick} id="btn-2">Click Me 2</button>
//              <input onChange={this.handleInputChange} onMouseEnter={this.handleMouseEnter} onFocus={this.handleFocus} />
//             <Banner />
//             </>
//         );
//     }
// }

///// USING States........

class App extends Component{
    state = {
        counter : 1,
        heading: "Welcome To React",
        inputText: ""
    };
    
    //First Way
    // handleClick =  ()=>
    // {
    //     let programCounter = this.state.counter;
    //     this.setState({
    //         counter : programCounter+1,
    //     })
    // }

    // Second Way

    //  handleClick()
    // {
    //     let programCounter = this.state.counter;
    //     this.setState({
    //         counter : programCounter+1,
    //     })
    // }

    //Third Way

    //  handleClick(event)
    // {
    //     let programCounter = this.state.counter;
    //     this.setState({
    //         counter : programCounter+1,
    //         heading: "Clicking on the button will increment the number by two"
    //     })
    // }
     handleClick =  ()=>
    {
        let programCounter = this.state.counter;
        this.setState({
            counter : programCounter+1,
            heading: "Clicking on the button will increment the number by one"
        })
    }

    handleInput = (event)=>{
        this.setState({
            inputText: event.target.value
        })
    }
    render()
    {
        return(
            <>
            <h1>{this.state.heading}</h1>
            {/* 1st way */}
            {/* <button onClick={this.handleClick}>ADD</button> */}

            {/* 2nd way */}
            {/* <button onClick={this.handleClick.bind(this)}>ADD</button> */}

            {/* 3rd Way */}
            <button onClick={(event)=>this.handleClick(event)}>ADD</button>

            <p>{this.state.counter}</p>

            <input onChange={this.handleInput}/>
            <p>{this.state.inputText}</p>

            </>
        );
    }
}

export default App;