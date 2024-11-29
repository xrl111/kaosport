import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './style.css';

const { Sider } = Layout;

interface ICustomSiderProps {
  collapsedProps: boolean;
  data?: {
    key: string;
    title: string;
    icon: string;
  }[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  dashboard: <DashboardOutlined />,
  user: <UserOutlined />,
  setting: <SettingOutlined />,
};

const CustomSider: React.FC<ICustomSiderProps> = (props) => {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsedProps}>
      <div className="logo"></div>
      <Menu theme="dark" mode="inline">
        {props.data?.map((item) => (
          <Menu.Item key={item.key} icon={iconMap[item.icon]}>
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export { CustomSider };
