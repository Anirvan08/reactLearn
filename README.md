# React Learning Notes

This README contains notes and core concepts learned from various React videos. Each entry is organized by video title and date for easy reference.

## Video 3: Understanding the React Flow and Structure
* **Date Watched:** 2024-09-11
* **Key Concepts:**
  - **Component Structure**: React applications are built with components, which are the reusable building blocks of the UI.
  - **JSX Syntax**: React uses JSX, which allows HTML-like syntax to be written inside JavaScript, making UI code more readable.
  - **Folder Structure**: The `public/` folder contains static files (like `index.html`), and the `src/` folder contains your components, styling, and the entry point (`index.js`).
  - **ReactDOM**: The `ReactDOM.render()` method injects the React component tree into the root `div` in the HTML file. We return a fragment in react.
  - **Convention and Best Practices**: We should capitalise function names, tagnames.
  - **Lifecycle**: 
* **Code Examples:**
  ```javascript
  // Basic App Component
  import React from 'react';

  const App = () => {
    return (
      <>
        <h1>Hello, React!</h1>
      </> //fragment
    );
  };

  export default App;
