import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../shared/ui/button/button';
import { counterActions } from '../model/slice/counter-slice';
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn"> + </Button>
            <Button onClick={decrement} data-testid="decrement-btn"> - </Button>
        </div>
    );
};

export default Counter;
