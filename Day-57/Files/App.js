// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Home from './Components/Home';
// import About from './Components/About';
// import Courses from './Components/Courses';
// import Heading from './Components/Heading';
// import Footer from './Components/Footer';
// import Team from './Components/Team';
// import mockTestDetails from './Components/mock-test/mockTestDetails';
// import mockTest from './Components/mock-test/mockTest';
// import PageNotFound from './Components/PageNotFound';

// function App ()
// {
//   return(
//     <BrowserRouter>
//       <Heading />
//       {/* <Route path="/" component={Home} exact/>
//       <Route path="/about" component={About} />
//       <Route path="/courses" component={Courses} /> */}

//       {/* Using switch */}
      
//       <Switch>
//       <Route path="/about/team" component={Team} />
//       <Route path="/about" component={About} />
//       {/* <Route path="/about" render={()=><h3 style={{color:'green' , textAlign: "center"}}>Hey! Its me</h3>} /> */}

//       <Route path="/courses" component={Courses} />

//       <Route path="/mock-tests/:topic/:set/:date" component={mockTestDetails} />
//       <Route path="/mock-tests" component={mockTest} />
      
//       <Route path="/" component={Home} exact/>

//       <Route component={PageNotFound} />
//       </Switch>
      
//       <Footer />
//     </BrowserRouter>

//   );
// }

// export default App;

// import React, { PureComponent } from "react";
// import Banner from "./Components/banner";
// class App extends PureComponent
//   {

//     state = {
//       heading: "Pure Component Tutorial",
//       buttonText: "Click Me",
//       bannerHeading: "Banner is Displayed",
//       studentList : ["Rutvi"] ,
//       student:{
//         email : "xyz@gmail.com"
//       }
//     } 
    
//     handleClick = ()=>
//     {
//       let list = this.state.studentList;
//       list.push("Mayank");

//       console.log(list);
      
//       let student = this.state.student;
//       student.email = "abc@gmail.com";  

//       console.log(student);

//       this.setState({
//         heading:"Pure Component Tutorial",
//         buttonText: "Click Me",
//         bannerHeading: "Banner is Displayed",
//         studentList: list,
//         student: {
//           email: "abc@gmail.com"
//         }
//       })
//     }
//     render()
//     {
//       console.log("Re-rendering happening");
//       return(
//         <>
//         <h1>{this.state.heading}</h1>
//         <button onClick={this.handleClick}>{this.state.buttonText}</button>
//         <Banner bannerHeading={this.state.bannerHeading}/>
//         </>
//       )
//     }
//   }

//   export default App;

import {useState} from 'react';

const App = ()=>
{
  const changeHeading = ()=>
  {
    setHeading("Learning React Hooks");
  }

  const changeCounter = ()=>
  {
    setCount(prevCount=>{
      let a =2;
      prevCount = prevCount*a;
      return prevCount;
    })
  }

  const changeAddress = ()=>
  {
    setAddress((prevAddress)=>{

      return ({...prevAddress, streetNo:1})
      // ...address,
      // streetNo : "1"
    });
  };
  let [count, setCount] = useState(1);
  console.log(count);

  let [heading, setHeading] = useState("React Hooks");
  
  //while having objects being passed as parameters
  let [address, setAddress] = useState({
    streetNo : "2",
    State : "Rajasthan"
  })
  return(
    <>
    <h1>{`${heading} ${count}`}</h1><br></br>
    <p>{address.streetNo}</p>
    <p>{address.State}</p>
    <button onClick={changeCounter}>Update</button><br></br>
    <button onClick={changeHeading}>Change Heading</button><br></br>
    <button onClick={changeAddress}>Change Address</button>
    </>
  )
}

export default App;