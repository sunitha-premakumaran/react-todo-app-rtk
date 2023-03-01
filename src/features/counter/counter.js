import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
        <div>{count}</div>
        <button onClick={()=> dispatch(increment())}>
            Add
        </button>
        <button onClick={()=> dispatch(decrement())}>
            Delete
        </button>
    </div>
  )
}

export default Counter;