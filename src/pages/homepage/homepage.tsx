import React, { useState } from 'react';
import './homepage.scss';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  RightOutlined,
  UserAddOutlined ,
  SearchOutlined,

} from '@ant-design/icons';
import { Layout, Menu, Button, Avatar, Space , Tag  } from 'antd';
import { AppstoreOutlined, MailOutlined, } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import TableManageUser from "../Table-manage-user/manageUser"
import ModalCreatUser from "../modalCreateUser/modalCreateUser"
const { Header, Sider, Content } = Layout;



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [

  
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
  
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];

 



const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
      };
      
 

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Avatar size={70} icon={<UserOutlined />} className='avata-user' />
         <div className='name-user'> User</div>
         <div className='btn-logout'> <LogoutOutlined /></div>

         <div >
    
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
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
            background: "white",
          }}
        >
      <div className='navigater'>
        <div className='item'>
            <span className='name-item'> Quản lý nhân sự</span> <span><RightOutlined /></span>
        </div>
      </div>   
     
     <hr />
     <div className='button-select'>
      <Button type="primary" icon={<UserAddOutlined />} onClick={()=>showModal()}>
        Thêm mới
      </Button>
      <div className='more '>
        <div className='search'>
            <div className='search-icon'>
            <SearchOutlined />
            </div>
            <input type="text"
             placeholder='Search infomation'
          />
        </div>
     </div>
     </div>

     <div className='body-table'>
        <TableManageUser/>
     </div>
     </Content>
     <ModalCreatUser 
      open={open}
      showModal={showModal}
      setOpen={setOpen}
     />

      </Layout>
    </Layout>
  );
};

export default HomePage;