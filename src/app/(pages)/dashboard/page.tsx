"use client"
import "../../styles/dashboard.css"
import { Avatar, Typography } from 'antd';
import "../../styles/dashboard.css"
import React, { useEffect, useState } from 'react';
import { FilterFilled, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Flex, Card, Progress } from 'antd';
import { AliwangwangFilled } from '@ant-design/icons';

import { MainHeader } from "../../(components)/Header"
import { MainContent } from "../../(components)/MainContent"
import { SideProfile } from '../../(components)/SideProfile';

import { Menu } from "antd";
import { RocketFilled, LogoutOutlined, CompassFilled, FireFilled, } from "@ant-design/icons";
import { Explore } from "@/app/(components)/Explore";
import { ForYou } from "@/app/(components)/ForYou";
import { Logout } from "@/app/(components)/Logout";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

// Redux Imports
import { useAppDispatch , useAppSelector } from "@/lib/hooks";
import { signUpUser } from "@/lib/UserSlice/userSignUp";

const items = [
  {
    key: 1,
    icon: <RocketFilled className="sidebar-icons" />,
    label: "Dashboard"
  },
  {
    key: 2,
    icon: <CompassFilled className="sidebar-icons" />,
    label: "Explore"
  },
  {
    key: 3,
    icon: <FireFilled className="sidebar-icons" />,
    label: "For You"
  },
  {
    key: 4,
    icon: <LogoutOutlined className="sidebar-icons" />,
    label: "Logout"
  },
]

const { Header, Content, Sider } = Layout;
export default function Dashboard() {

  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const handleMenuClick = (index: number) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  }
  const { user } = useUser()
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      console.log(user?.username);
      const response = await fetch("http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000/getUserInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ Username: user?.username })
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      let tobeDispatched = {
        Username: data?.Username,
        Fname: data?.FirstName,
        Lname: data?.LastName,
        Bio: data?.Bio,
        Location: data?.Location,
        ProfilePic: data?.ProfilePic
      };
      
      // Dispatch to your state or store here
      dispatch(signUpUser(tobeDispatched));
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately
    }
  };
  
  useEffect(() => {
    fetchData();
  } , [user?.username]);



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
              <AliwangwangFilled style={{ color: "#051bc7ab", position: "relative", top: "-9px" }} />
            </div>
          </Flex>
          <Menu
            style={{ backgroundColor: "#fff" }}
            mode="inline"
            defaultSelectedKeys={['1']}
            className="menu-bar"
            selectedKeys={[String(selectedIndex + 1)]}
          >
            {items?.map(item => (
              <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key - 1)}>
                {item.label}
              </Menu.Item>
            ))}
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

            {/* DASHBOARD CONTENT */}
            {selectedIndex == 0 && (
              <MainContent />
            )}
            {/* EXPLORE CONTENT */}
            {selectedIndex == 1 && (
              <Explore />
            )}
            {/* FOR YOU CONTENT */}
            {selectedIndex == 2 && (
              <ForYou />
            )}
            {/* LOGOUT METHOD */}
            {selectedIndex == 3 && (
              <Logout />
            )}
          </Flex>
        </Content>
      </Layout>
      <SideProfile />
    </Layout>
  );
}