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
            <button onClick={increment}>Increment</button>
            <button onClick={delay_inc}>Increment After Delay</button>
            <button onClick={batch_inc}>Increment Twice</button>
            <button onClick={increment_2}>Correct Increment Twice</button>
        </>
    )

}