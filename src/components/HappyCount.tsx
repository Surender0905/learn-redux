import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { happyCountSelector } from '../selectors';

type HappyCountProps = {};

const HappyCount: FC<HappyCountProps> = ({}) => {
  const selector = useSelector(happyCountSelector);
  return (
    <div className="bg-blue-700 px-8 py-4">
      <div>Happiness Intensity: {selector}</div>
    </div>
  );
};

HappyCount.defaultProps = {};

export default HappyCount;
