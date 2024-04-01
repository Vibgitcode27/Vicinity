"use client"
import "../../styles/dashboard.css"
import React, { useState } from 'react';
import { MenuFoldOutlined , MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Collapse } from 'antd';
import { Sidebar } from "../../(components)/Sidebar"

const { Header, Content, Sider } = Layout;
export default function Dashboard() {

  const [collapsed , setCollapsed] = useState<boolean>(true)
  return (
    <Layout>
        <Sider
          theme='light'
          trigger={null} 
          collapsible 
          collapsed={collapsed} 
          className='sider'>
            <Sidebar/>
            <Button 
              type="text"
              icon={collapsed ? < MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
              onClick={() => { setCollapsed(!collapsed)}}
              className="trigger-btn"
            />
        </Sider>
      <Layout>
        <Header className='header'></Header>
        <Content className='content'></Content>
      </Layout>
    </Layout>
  );
}