
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { AppUI } from './AppUI';
import React from 'react';

// const defaultTodos = [
//   { text: 'Grócery shopping', completed: true },
//   { text: 'Washing Car', completed: true },
//   { text: 'Bathing my dog', completed: false },
//   { text: 'Work', completed: true }
// ]

// const stringifieldTodos = JSON.stringify(defaultTodos)

// localStorage.setItem('TODOS_V1', stringifieldTodos)

// localStorage.removeItem('TODOS_V1')

function App() {
  const { item: todos,
    saveItem: saveTodos,
    loading,
    error }
    = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('');
  // console.log('The users search all TODOs from ' + searchValue)

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
    saveTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
