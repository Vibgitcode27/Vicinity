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
          <Flex gap="small" wrap="wrap">
            <Progress type="circle" style={{  padding : "2px"}} percent={80} format={() => { return (
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 90 }}
                // icon={<AliwangwangFilled />}
                src={asset1.src}
              />
            )}}/>
          </Flex>
          <MessageOutlined className='profile-icons' />
        </Flex>
        <Flex align='center' justify='center' vertical style={{margin : "10px"}}>
          <Typography.Title  level={4} style={{ padding : "0" , margin : "0" , fontWeight : 600}}>Vibhor Phalke</Typography.Title>
          <Typography.Text>Full Stack developer</Typography.Text>
        </Flex>
        <Flex align='center' justify="space-between" >
          <Typography.Title style={{ marginTop : "10px"}}  level={5} >Current Projects</Typography.Title>
          <Typography.Text>More</Typography.Text>
        </Flex>
        <Flex>
              <Card style= {{
                marginRight : "10px" ,
                borderRadius : "20px" ,
                backgroundImage: `url(${asset2.src})`, // Use the imported image variable
                backgroundSize: 'cover', // Optional: Set background size to cover for better fitting
                backgroundPosition: 'center', // Optional: Set background position to center
              }}>
                <Typography.Title style={{ marginTop : "10px"}}  level={5} >Current Projects</Typography.Title>
                <Typography.Text>More</Typography.Text>
                <Flex align='center' justify='center' style={{ marginTop : "100px"}}>
                  <Typography.Text>50%</Typography.Text>
                </Flex> 
              </Card>
              <Card style={{ marginRight : "10px" , backgroundColor : "#bff8ff" , borderRadius : "20px"}}>
                <Typography.Title style={{ marginTop : "10px"}}  level={5} >Current Projects</Typography.Title>
                <Typography.Text>More</Typography.Text>
                <Flex align='center' justify='center' style={{ marginTop : "100px"}}>
                  <Typography.Text>50%</Typography.Text>
                </Flex>
              </Card>
        </Flex>
      </Card>
    </Layout>

  );
}