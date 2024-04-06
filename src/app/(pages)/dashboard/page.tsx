"use client"
import "../../styles/dashboard.css"
import { Avatar, Typography } from 'antd';
import "../../styles/dashboard.css"
import React, { useState } from 'react';
import { MenuFoldOutlined , MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Flex , Card , Progress } from 'antd';
import { AliwangwangFilled , BellOutlined , MessageOutlined } from '@ant-design/icons';

import { MainHeader } from "../../(components)/Header"
import { MainContent } from "../../(components)/MainContent"
import { SideProfile } from '../../(components)/SideProfile';

import { Menu } from "antd";
import {WindowsFilled , RocketFilled , CompassFilled , FireFilled,} from "@ant-design/icons";

const items = [
  {
      key : 1 ,
      icon : <WindowsFilled className="sidebar-icons"/> ,
      label : "Dashboard"
  },
  {
      key : 2 ,
      icon : <CompassFilled className="sidebar-icons"/> ,
      label : "Explore"
  } ,
  {
      key : 3 ,
      icon : <FireFilled className="sidebar-icons"/> ,
      label : "For You"
  } ,
  {
      key : 4 ,
      icon : <RocketFilled  className="sidebar-icons"/> ,
      label : "Logout" 
  } ,
]

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
        {/* Inside Sider */}
        <div>
            <Flex align="center" justify="center">
                <div className="logo">
                    <AliwangwangFilled style={{color : "#051bc7ab" , position:"relative" ,  top : "-9px"}}/>
                </div>
            </Flex>
            <Menu
                style={{ backgroundColor : "#fff"}}
                mode="inline"
                defaultSelectedKeys={['1']}
                className="menu-bar"
                items= {items}
            >
            </Menu>
        </div>
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