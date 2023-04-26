import { useState } from 'react';

export default function Counter() {
    const [count, setCounter] = useState(0);
    const increment = () => setCounter(count + 1);
    const decrement = () => setCounter(count - 1);
    return (
        <div>
            <h1>Counter</h1>
            <p>
                Count: {count}
            </p>
            <button className='btn' onClick={increment} >Increment</button>
            <button className='btn' onClick={decrement}>Decrement</button>
        </div>
    );
}





