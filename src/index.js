// Import the react and the ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return 'Function call';
}

// Create a react component
const App = () => {
    // const buttonText = 'Click Me!';
    const buttonText = {text: 'Click Me!!'};
    const labelText = 'Enter name:';

    return (
    <div>
        <label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text"/>
        {/* This is HTML v */}
        {/* <button style="background-color: blue; color: white;">Submit</button>  */} 
        {/* This is JSX convertion from HTML */}
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
            {/* Submit - We should replace with buttonText variable */}
            {/* {buttonText} - Example of a variable call */}
            {buttonText.text}
            {/* {getButtonText()} - Example of a function call */}
            </button>
  </div>
    );
} 

//can also be written as:
// const App = function() {
//     return <div> Hi there!</div>
// }

// Take the react componenet and show it on the screen
ReactDOM.render (
    <App />, // calls the function that we just created above
    document.querySelector('#root') // Calls the index.html 
);

if (module.hot) {
    module.hot.accept();
}