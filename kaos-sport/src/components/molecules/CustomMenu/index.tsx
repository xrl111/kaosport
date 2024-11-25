import React from 'react';
import { Menu } from '../../atoms';
import { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
interface CustomMenuProps {
  mode: 'horizontal' | 'vertical';
  className?: string;
  items: MenuItem[];
}

const CustomMenu: React.FC<CustomMenuProps> = ({ mode, className, items }) => {
  const [current, setCurrent] = React.useState<string>('');
  const handleClick = (e: { key: string }) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={handleClick}
        mode={mode}
        selectedKeys={[current]}
        className={className}
        items={items}
      ></Menu>
    </>
  );
};

export default CustomMenu;
