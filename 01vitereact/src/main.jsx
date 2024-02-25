import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <h1>This is meaahhah.</h1>
    );
}

const ReactElement = {
    type : 'a',
    props : {
        href: "https://google.com",
        target : "_blank"
    },
    children : "Click me to visit google"
};

const element = React.createElement(
    'h1',
    {
        className: 'dummy'
    },
    "Hello from react element"
);



ReactDOM.createRoot(document.getElementById('root')).render(
   element
  
)
