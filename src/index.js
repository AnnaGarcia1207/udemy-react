// Import the react and the ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hi There!</div>
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