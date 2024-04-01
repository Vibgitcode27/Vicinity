"use client"
import "../../styles/dashboard.css"
import React, { useState } from 'react';
import { MenuFoldOutlined , MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Flex } from 'antd';
import { Sidebar } from "../../(components)/Sidebar"
import { MainHeader } from "../../(components)/Header"
import { MainContent } from "../../(components)/MainContent"
import { SideContent } from "../../(components)/SideContent"


const { Header, Content, Sider } = Layout;
export default function Dashboard() {

  const [collapsed , setCollapsed] = useState<boolean>(true)
  return (
    <Layout>
        <Sider
          style={{ backgroundColor : "#fff"}}
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
        <Header className='header'>
          <MainHeader/>
        </Header>
        <Content className='content'>
          <Flex gap="large">
            <MainContent/>
            <SideContent/>
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}