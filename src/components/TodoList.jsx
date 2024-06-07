import TodoCard from "./TodoCard"
import React from 'react';  

export default function TodoList(props){
  const {todos} = props

  return(
    <ul className="main">
      {todos.map((todo,todoIndex)=>{
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}