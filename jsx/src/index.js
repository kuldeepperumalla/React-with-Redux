//  1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom/client'

//  2) Get a reference to the div with ID root
const el = document.getElementById('root');
//  3) Tell React to take controll of that element
const root = ReactDom.createRoot(el);
//  4) Create a component
function App(){
  
 return <textarea autoFocus={true}/>
}
//  5) show the component on the screen
root.render(<App />)