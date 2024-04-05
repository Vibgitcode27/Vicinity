"use client"
import { Avatar, Typography } from 'antd';
import "../../styles/dashboard.css"
import React, { useState } from 'react';
import { MenuFoldOutlined , MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Flex , Card , Progress } from 'antd';
import { AliwangwangFilled , BellOutlined , MessageOutlined } from '@ant-design/icons';

import asset1 from "../../assets/asset1.jpg"
import asset2 from "../../assets/asset5.webp"

import { Sidebar } from "../../(components)/Sidebar"
import { MainHeader } from "../../(components)/Header"
import { MainContent } from "../../(components)/MainContent"
import { SideContent } from "../../(components)/SideContent"
import { SideProfile } from '../../(components)/SideProfile';


const { Header, Content, Sider } = Layout;
export default function Dashboard() {

  const [collapsed , setCollapsed] = useState<boolean>(true)
  return (
    <Layout>
      <Sider
        style={{ backgroundColor: "#fff" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className='sider'
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => { setCollapsed(!collapsed) }}
          className="trigger-btn"
        />
      </Sider>

      <Layout style={{ backgroundColor: "#f1f2ff70" }}>
        <Header className='header'>
          <MainHeader />
        </Header>
        <Content className='content'>
          <Flex gap="large">
            <MainContent />
            {/* <SideContent /> */}
          </Flex>
        </Content>
      </Layout>
      <SideProfile/>
    </Layout>

  );
}