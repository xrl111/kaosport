import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
interface IHeaderProps {
  children?: React.ReactNode;
}
const HeaderCustom: React.FC<IHeaderProps> = (prop) => {
  return <Header>{prop.children}</Header>;
};

export default HeaderCustom;
