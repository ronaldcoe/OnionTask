# Overview

This a front-end prototype for a Project manager application using React. My objective for building this application was to learn the basics of React. I learned how to work with components and hooks. I also learned how to implement Firestore to preform CRUD operations.

[Software Demo Video](https://youtu.be/FyDDHxBtlIc)

# Important notes
## REACT 🔥
Front-end JavaScript library for building user interfaces

### Virtual DOM
It's a JavaScript representation of the DOM. It's faster tha updating the real DOM because React only updates the section of the page that needs to be updated not the entire page.

Component is a small piece of the user interface. There are 2 types of components: Functional components and Class-based components. This last one is being replaced by functional components.

```JavaScript
const example = () => {
    return <div>Hello World!</div> // This is not HTML. This is JSX
}
```

Props are objects that hold information to control the behavior of a component.


State is the instance of a React component
`import { useState } from 'react'`

```JavaScript
function App () {
const [counter, setcounter] = useState(0) // This is the current state of the component 
...
}
```


To start with the development environment: `npx create-react-app`

To run the application: `npm start`

# Development Environment

React for the front-end.

Nodejs for the back-end.

Firestore for the database.

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [React's official documentaion](https://reactjs.org/docs/getting-started.html)
* [Yotube tutorial how to build a CRUD app with React and Firestore](https://www.youtube.com/watch?v=jCY6DH8F4oc&t=1817s)

# Future Work
* Finish the Create project page
* Implement a calendar
* Fix the DisplayProject component. 
