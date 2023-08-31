import React, { useState } from 'react';
import './homepage.scss';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme ,Row ,Col ,Avatar, Space } from 'antd';

const { Header, Sider, Content } = Layout;

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Avatar size={70} icon={<UserOutlined />} className='avata-user' />
         <div className='name-user'> User</div>
         <div className='btn-logout'> <LogoutOutlined /></div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
                key: '',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header 
        className='header-content'
        style={{ padding: 0 }}
        >
           
                <Button
                type="text"
                 icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                fontSize: '16px',
                 width: 64,
                  height: 64,
                }}
                />
               

          
        </Header>
        <Content
          style={{
            // margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          huy lê
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;