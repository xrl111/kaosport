import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
const HeaderStyle: React.CSSProperties = {
  
};
interface IHeaderProps {
  children?: React.ReactNode;
}
const HeaderCustom: React.FC<IHeaderProps> = (prop) => {
  return <Header style={HeaderStyle}>{prop.children}</Header>;
};

export default HeaderCustom;
