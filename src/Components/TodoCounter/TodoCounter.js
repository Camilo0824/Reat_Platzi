import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completed, total }) {
    const isAllCompleted = completed === total;

    return (
        <>
            {isAllCompleted ? (
                <h1 className='TodoCounter'>
                    All TODOs have been finished.
                </h1>
            ) : (
                <h1 className='TodoCounter'>
                    You have completed <span>{completed}</span> tasks out of <span>{total}</span>.
                </h1>
            )}
        </>
    );
}

export { TodoCounter };
