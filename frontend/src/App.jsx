/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import { CreateTodo } from "./components/CreateTodo";
import { useState } from 'react';
import {Todos} from './components/Todos';

function App(){

  const [todo,setTodo] = useState([]);
  return(
    <div>
      <CreateTodo />
      <Todos todos = {todo}></Todos>
    </div>
  )
}
export default App;