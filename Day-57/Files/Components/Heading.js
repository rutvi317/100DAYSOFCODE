import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./../styles/header.css"
const Heading = ()=>
{
    return(
        <>
        {/* <h1 style={{color: "red", textAlign: "center", marginTop: "5rem"}}>Heading</h1> */}

        <div>
            {/* <Link to="/courses">Courses</Link> */}
            {/* <Link to={{
                pathname:"/courses",
                hash: "#1234",
                search: "?paid:true"
            }}>Courses</Link> */}

            {/* NavLink */}

            {/* <NavLink 
            
            activeStyle={{color:"red", fontSize:"2rem", fontWeight:"700", marginLeft:"38rem"}}
            to="/courses">Courses</NavLink> */}

            <NavLink 

            activeClassName="header-active" 

            to="/courses" > Courses

            </NavLink>

        </div>

        <div>
        {/* <NavLink 
            
            activeStyle={{color:"red", fontSize:"2rem", fontWeight:"700", marginLeft:"38rem"}}
            to="/about">About Us</NavLink> */}

        <NavLink 

        activeClassName="header-active" 

        to="/about" > About Us

        </NavLink>

        </div>
        

        <hr/>
        </>
    )
}

export default Heading;