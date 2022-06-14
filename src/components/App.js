import './App.css';
import { useState, useContext } from 'react';
import Navbar from './Navbar'; 
import Menu from './Menu'
import Content from './Content';
import { ContentContext } from './ContentContext';



let user = "Ronald"


function App() {
  const [content, setContent] = useState('dashboard')

  return (
    <>
    <ContentContext.Provider value={{content, setContent}}>
      <Navbar name = {user}/>
      <Menu />
      <Content />
    </ContentContext.Provider>
    </>
  );
}


export default App;
