import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    const isAllCompleted = completedTodos === totalTodos;

    return (
        <>
            {isAllCompleted ? (
                <h1 className='TodoCounter'>
                    All TODOs have been finished.
                </h1>
            ) : (
                <h1 className='TodoCounter'>
                    You have completed <span>{completedTodos}</span> tasks out of <span>{totalTodos}</span>.
                </h1>
            )}
        </>
    );
}

export { TodoCounter };
