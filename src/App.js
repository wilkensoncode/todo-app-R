import React from 'react'
import AddtTodo from "./components/addTodo/AddTodo";
import Header from './components/header/Header'

function App() {
  return ( 
    <div className = "App" >
     <Header/>
     <AddtTodo />     
    </div>
  );
}

export default App;