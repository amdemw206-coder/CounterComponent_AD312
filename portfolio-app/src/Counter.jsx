import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    //increment 
    const increment = () => setCount(count + 1); 

    //increment after delay 
    const delay_inc = () => {
        
        setTimeout(() => {
            setCount(count + 1) 
        }, 2000 )
    }

    //increment twice (batching)
    const batch_inc = () => {
        setCount(count + 1);
        setCount(count + 1); 
    }

    //correct increment twice 
    const increment_2 = () => {
        setCount(prevCount => prevCount + 1); 
        setCount(prevCount => prevCount + 1); 
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>+1</button>
            <button onClick={delay_inc}>+1 (delay)</button>
            <button onClick={batch_inc}>try to increment +2 using multiple state updates incorrectly</button>
            <button onClick={increment_2}>+2 but correct</button>
        </>
    )

}