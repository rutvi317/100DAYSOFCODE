import React, {Component} from 'react';

// class HeadingClass extends React.Component (If we don't import {Component} on the top then we use this statement)
class HeadingClass extends Component
{
    render()
    {
        return(
            <>
            <h1>Welcome To React</h1>
            <p>React is very interesting. You will Love it.</p>

            <button>Click Me</button>
            <div>
                <h2>Hope You are Understanding React</h2>
            </div>
            </>
        );
    }
}

export default HeadingClass;