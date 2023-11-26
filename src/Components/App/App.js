import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import React from 'react';

const defaultTool = [
  { text: 'Grocery shopping', completed: true },
  { text: 'Washing Car', completed: false },
  { text: 'Bathing my dog', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter completed={13} total={25} />

      <TodoSearch />

      <TodoList>
        {defaultTool.map(todo => (
          <TodoItem key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App;
