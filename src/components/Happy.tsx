import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { happyclicked, HAPPY_CLICKED } from '../action';
import Button from './Button';

interface HappyProps {}

const Happy: FC<HappyProps> = ({}) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(happyclicked(qty, new Date()));
  }

  return (
    <div>
      <h3>Are you happy?</h3>
      <input
        type="number"
        className="border border-gray-300 rounded-md"
        value={qty}
        onChange={(event) => setQty(+event.target.value)}
      />
      <Button onClick={handleClick} className="bg-blue-400">
        Yes
      </Button>
    </div>
  );
};

Happy.defaultProps = {};

export default Happy;
