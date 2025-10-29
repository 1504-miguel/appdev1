import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery';
import ToDoList from './components/ToDoList';
import Profile from './components/Profile';
import PackingList from './components/PackingList';
import List from './components/List';
import Impure from './components/Impure';
import Pure from './components/Pure';
import RootComponent from './components/RootComponent';




// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }


function App() {


  return (
    <>
      {/* Done with how to write your first React component */}
       <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>

      {/* Done with when and how to create multi-component files */}
      <Gallery/>

      {/* Done with how to add markup to JavaScript with JSX */}
      {/* Done with how to use curly braces with JSX to access JavaScript functionality from your components */}
      <ToDoList/>

      {/* Done with how to configure components with props */}
      <Profile/>

      {/* Done with how to conditionally render components */}
      <PackingList/>

      {/* Done with how to render multiple components at a time */}
      <List/>

      {/* Done with how to avoid confusing bugs by keeping components pure */}

      <h1>Impure Component</h1>
      <Impure/>
      <h1>Pure Component</h1>
      <Pure/>

      {/* Done with why understanding your UI as trees is useful */}

      <RootComponent/>
      

    </>
  )
}

export default App