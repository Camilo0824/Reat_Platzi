import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Grócery shopping', completed: true },
  { text: 'Washing Car', completed: true },
  { text: 'Bathing my dog', completed: false },
  { text: 'Work', completed: true }
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('The users search all TODOs from ' + searchValue)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText)
  })

  const completeTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )

    newTodos[todoIndex].completed = true; 
    setTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )

    newTodos.splice(todoIndex,1);
    setTodos(newTodos)
  };

  return (
    <>
      <TodoCounter 
          completed={completedTodos} 
          total={totalTodos} 
      />

      <TodoSearch searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} 
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App;
