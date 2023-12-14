import classes from './counter.module.scss';
import { useState } from 'react';

 export const Counter = () => {
const [count, setCount] = useState(0);

const increment = () => {
    setCount(count+1)
}

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
                <button onClick={increment}>increment </button>
        </div>
    );
};

export default Counter;