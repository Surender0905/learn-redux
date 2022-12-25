import { FC } from 'react';
import { useSelector } from 'react-redux';
import { sadCountSelector } from '../selectors';

type SadCountProps = {};

const SadCount: FC<SadCountProps> = ({}) => {
  const selector = useSelector(sadCountSelector);
  return (
    <div className="bg-red-700 px-8 py-4">
      {selector.map((m, i) => (
        <div key={i}>
          Sad Intensity: {m.intensity} when: {m.when.toISOString()}
        </div>
      ))}
    </div>
  );
};

SadCount.defaultProps = {};

export default SadCount;
