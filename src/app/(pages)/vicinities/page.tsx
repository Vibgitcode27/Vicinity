"use client"
import "../../styles/dashboard.css"
import "../../styles/dashboard.css"
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Flex, Card, Progress } from 'antd';
import { AliwangwangFilled } from '@ant-design/icons';

import { MainHeader } from "../../(components)/Header"
import { SideProfile } from '../../(components)/SideProfile';

import { Menu } from "antd";
import { RocketFilled, LogoutOutlined, CompassFilled, FireFilled, } from "@ant-design/icons";

import { useRouter } from "next/navigation";
import { VicinityPage } from "@/app/(components)/VicinityPage";

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
export default function Vicinities() {
    const router = useRouter()
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleMenuClick = (index: number) => {
        setSelectedIndex(index);
        console.log(selectedIndex);
    }

    return (
        <Layout>
            <Sider
                style={{ backgroundColor: "#fff" }}
                trigger={null}
                collapsible
                collapsed={collapsed}
                className='sider'
                onClick={() => { router.push('/dashboard') }}
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
                        {items.map(item => (
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
                <Content className='content' style={{
                    height: "80vh",
                    overflowY: "scroll",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}>
                    <VicinityPage />
                </Content>
            </Layout>
            <SideProfile />
        </Layout>
    );
}