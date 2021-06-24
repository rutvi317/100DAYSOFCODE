import React, {Component} from 'react';
// // import Heading  from "./heading";
// // import HeadingClass  from "./headingClass";
import Banner from "./banner";
// import Heading from "./props";
// import Courses from './courses';
// import CourseJson from './../courses.json';


// //// Using Function Component

// // function handleClick(event)
// // {
// //     console.log("Button is been Clicked", event.target.id);
// // }

// // function handleInputChange(event)
// // {
// //     console.log("Someone is typing", event.target.value);
// // }

// // function handleMouseEnter()
// // {
// //    console.log("Mouse has entered");
// // }

// // function handleFocus()
// // {
// //     console.log("Input in Focus");
// // }

// // function App()
// // {
// //     return (
// //         <> 
// //         <Heading />
// //         {/* <button onClick={()=>{
// //         console.log("Button is clicked");}}>Click Me</button> */}

// //          <button onClick={handleClick} id="btn-1">Click Me 1</button>
// //          <button onClick={handleClick} id="btn-2">Click Me 2</button>
// //          <input onChange={handleInputChange} onMouseEnter={handleMouseEnter} onFocus={handleFocus} />

// //         {/* <HeadingClass /> */}
// //         <Banner />
// //         </>

// //     )
// // }

// ///// Using Class Components 

// // class App extends Component{

// // handleClick(event)
// // {
// //     console.log("Button is been Clicked", event.target.id);
// // }

// // handleInputChange(event)
// // {
// //     console.log("Someone is typing", event.target.value);
// // }

// // handleMouseEnter()
// // {
// //    console.log("Mouse has entered");
// // }

// // handleFocus()
// // {
// //     console.log("Input in Focus");
// // }


// //     render()
// //     {
// //         return(
// //             <>
// //             <Heading />
// //              <button onClick={this.handleClick} id="btn-1">Click Me 1</button>
// //              <button onClick={this.handleClick} id="btn-2">Click Me 2</button>
// //              <input onChange={this.handleInputChange} onMouseEnter={this.handleMouseEnter} onFocus={this.handleFocus} />
// //             <Banner />
// //             </>
// //         );
// //     }
// // }

// ///// USING States........

// class App extends Component{
//     state = {
//         // counter : 1,
//         // heading: "Welcome To React",
//         // inputText: ""

//         // Using Props

//         heading : "Welcome To React Courses",
//         courseList : CourseJson
//     };
    
//     //First Way
//     // handleClick =  ()=>
//     // {
//     //     let programCounter = this.state.counter;
//     //     this.setState({
//     //         counter : programCounter+1,
//     //     })
//     // }

//     // Second Way

//     //  handleClick()
//     // {
//     //     let programCounter = this.state.counter;
//     //     this.setState({
//     //         counter : programCounter+1,
//     //     })
//     // }

//     //Third Way

//     //  handleClick(event)
//     // {
//     //     let programCounter = this.state.counter;
//     //     this.setState({
//     //         counter : programCounter+1,
//     //         heading: "Clicking on the button will increment the number by two"
//     //     })
//     // }
//     //  handleClick =  ()=>
//     // {
//     //     let programCounter = this.state.counter;
//     //     this.setState({
//     //         counter : programCounter+1,
//     //         heading: "Clicking on the button will increment the number by one"
//     //     })
//     // }

//     // handleInput = (event)=>{
//     //     this.setState({
//     //         inputText: event.target.value
//     //     })
//     // }
//     render()
//     {
//         return(
//             <>
//             {/* <h1>{this.state.heading}</h1> */}
//             {/* 1st way */}
//             {/* <button onClick={this.handleClick}>ADD</button> */}

//             {/* 2nd way */}
//             {/* <button onClick={this.handleClick.bind(this)}>ADD</button> */}

//             {/* 3rd Way */}
//             {/* <button onClick={(event)=>this.handleClick(event)}>ADD</button>

//             <p>{this.state.counter}</p>

//             <input onChange={this.handleInput}/>
//             <p>{this.state.inputText}</p> */}

//             {/* Using PROPS */}

//             <Heading heading={this.state.heading}/>
//             <Courses courseList={this.state.courseList} />

//             </>
//         );
//     }
// }


// React Lifecycle methods (1. Component Mounted)

class App extends Component{

    constructor()
    {
        super();
        console.log("Constructor method is called");
        this.state = {
            heading: "Hi! Welcome to React" ,
            isBannerVisible: true
        }
    }

    handleClick = ()=>
    {
        this.setState({
            heading: "Hope you are doing great",
            isBannerVisible: false
        })
    }

    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps method is called");
        return null;
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate method is called");
        return true;
    }
    render()
    {
        console.log("Render Method is called");
        return(
            <>
            <h1>{this.state.heading}</h1>
            {/* Component Update */}
            <button onClick={this.handleClick}>Click Me</button>

            {this.state.isBannerVisible?<Banner/>:null}
        
            </>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("getSnapshotBeforeUpdate method is called");
        return null;
    }

    componentDidMount()
    {
        console.log("componentDidMount method got called");   
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate method is called");
    }

}

export default App;