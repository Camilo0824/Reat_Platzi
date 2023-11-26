import './TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (
        <h1 className='TodoCounter'>
            You have completed <span>{completed}</span> tasks out of <span>{total}</span>.
        </h1>
    );
}

export { TodoCounter };