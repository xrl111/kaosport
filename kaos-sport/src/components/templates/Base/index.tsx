import React from 'react';
import { Wrapper } from '@/components/atoms/Wrapper';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import { CustomSider } from '@/components/organisms/CustomSider';
// interface IBaseProps {
//   children?: React.ReactNode;
// }
const CustomSiderData = {
  collapsedProps: false,
  data: [
    {
      key: '1',
      title: 'Dashboard',
      icon: 'dashboard',
    },
    {
      key: '2',
      title: 'User',
      icon: 'user',
    },
    {
      key: '3',
      title: 'Settings',
      icon: 'setting',
    },
    {
      key: '4',
      title: 'Logout',
      icon: 'logout',
    },
    {
      key: '5',
      title: 'Login',
      icon: 'login',
    },
  ],
};
const Base: React.FC = () => {
  return (
    <Wrapper>
      <Layout>
        <CustomSider {...CustomSiderData} />
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export { Base };
