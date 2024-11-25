import React from 'react';

interface IWrapperProps {
  children?: React.ReactNode;
}
const Wrapper: React.FC<IWrapperProps> = (props) => {
  return <div className="container">{props.children}</div>;
};

export { Wrapper };
