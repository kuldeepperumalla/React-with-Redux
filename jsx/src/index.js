//  1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom/client';
import MyApp from './App'

//  2) Get a reference to the div with ID root
const el = document.getElementById('root');
//  3) Tell React to take controll of that element
const root = ReactDom.createRoot(el);
//  4) Create a component

//  5) show the component on the screen
root.render(<MyApp />)

// https://jsx-notes.vercel.app/#Returning%20JSX