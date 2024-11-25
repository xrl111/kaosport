import React from 'react';
import { Wrapper } from '@/components/atoms/Wrapper';
interface IBaseProps {
  children?: React.ReactNode;
}
const Base: React.FC<IBaseProps> = (props) => {
  return (
    <Wrapper>
      <div className="container">{props.children}</div>
    </Wrapper>
  );
};

export { Base };
