"use client"
import { Avatar } from 'antd';
import "../../styles/dashboard.css"
import React, { useState } from 'react';
import { MenuFoldOutlined , MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Flex , Card } from 'antd';
import { AliwangwangFilled , BellOutlined , MessageOutlined } from '@ant-design/icons';

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
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    
      <Card
        style={{
          borderTopLeftRadius : "20px" ,
          borderBottomLeftRadius : "20px" ,
          backgroundColor: "#fff",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "40px",
          width: "auto" // Set width to "auto" for automatic adjustment
        }}
      >
        <Flex align="center" justify="space-between" gap="40px">
          <BellOutlined className='profile-icons' />
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AliwangwangFilled />}
          />
          <MessageOutlined className='profile-icons' />
        </Flex>
      </Card>
    </Layout>

  );
}