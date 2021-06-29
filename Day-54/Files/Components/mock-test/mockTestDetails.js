
const mockTestDetails  =(props)=>
{
    console.log(props);
    console.log(props.match.params.topic);
    return(
        <>

        <h2 style={{textAlign: "center"}}>{props.match.params.topic}</h2>

        </>
    )
}

export default mockTestDetails;