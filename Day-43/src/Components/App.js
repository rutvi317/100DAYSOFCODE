import Heading  from "./heading";
// import HeadingClass  from "./headingClass";
import Banner from "./banner";

function handleClick(event)
{
    console.log("Button is been Clicked", event.target.id);
}
function App()
{
    return (
        <> 
        <Heading />
        {/* <button onClick={()=>{
        console.log("Button is clicked");}}>Click Me</button> */}

         <button onClick={handleClick} id="btn-1">Click Me 1</button>
         <button onClick={handleClick} id="btn-2">Click Me 2</button>
        {/* <HeadingClass /> */}
        <Banner />
        </>

    )
}

export default App;