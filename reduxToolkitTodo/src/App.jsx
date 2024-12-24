import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'
import './index.css'

function App() {

  return (
    <>
     <h1>Learn about redux</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
