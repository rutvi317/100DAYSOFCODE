import CourseItem from "./coursesItem";

function Courses(props)
{
    console.log(props);
    return(
    <>
        {props.courseList.map(item=>(
            // We use key for the optimization in our code as a tree is formed at the time of execution.
            <CourseItem key ={item.id} courseDetails = {item}/>
        ))}
    </>
    );
}

export default Courses;