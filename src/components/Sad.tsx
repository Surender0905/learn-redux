import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { sadclicked, SAD_CLICKED } from '../action';
import Button from './Button';

interface SadProps {}

const Sad: FC<SadProps> = ({}) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(sadclicked(qty));
  }

  return (
    <div>
      <h3>Are you Sad?</h3>
      <input
        type="number"
        className="border border-gray-300 rounded-md"
        value={qty}
        onChange={(event) => setQty(+event.target.value)}
      />
      <Button onClick={handleClick} className="bg-red-400">
        Yes
      </Button>
    </div>
  );
};

export default Sad;
