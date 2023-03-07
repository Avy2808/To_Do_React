import React from 'react'
import ToDo from './ToDo';

function ToDos(props) {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>ToDos List</h3>
      {props.todos.map((todo, onDelete)=>{
        return <ToDo todo={todo} onDelete={onDelete}/>
      })}
    </div>
  )
}
export default ToDos;
