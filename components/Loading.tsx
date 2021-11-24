import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="loading">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
