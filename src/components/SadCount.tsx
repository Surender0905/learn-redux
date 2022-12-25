import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sadCountSelector } from '../selectors';

type SadCountProps = {};

const SadCount: FC<SadCountProps> = ({}) => {
  const selector = useSelector(sadCountSelector);
  return (
    <div className="bg-blue-700 px-8 py-4">
      <div>Happiness Intensity: {selector}</div>
    </div>
  );
};

SadCount.defaultProps = {};

export default SadCount;
