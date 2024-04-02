import "../styles/dashboard.css"
import { Flex, Menu } from "antd";
import React from "react";
import { AliwangwangFilled , UserOutlined , LogoutOutlined , OrderedListOutlined , CarryOutOutlined , ProfileOutlined, SettingOutlined } from "@ant-design/icons";

const items = [
    {
        key : 1 ,
        icon : <UserOutlined className="sidebar-icons"/> ,
        label : "Dashboard"
    },
    {
        key : 2 ,
        icon : <CarryOutOutlined  className="sidebar-icons"/> ,
        label : "My Orders"
    } ,
    {
        key : 3 ,
        icon : <OrderedListOutlined  className="sidebar-icons"/> ,
        label : "ToDo"
    } ,
    {
        key : 4 ,
        icon : <ProfileOutlined  className="sidebar-icons"/> ,
        label : "Profile"
    } ,
    {
        key : 5 ,
        icon : <SettingOutlined  className="sidebar-icons"/> ,
        label : "Setting" 
    } ,
    {
        key : 6 ,
        icon : <LogoutOutlined  className="sidebar-icons"/> ,
        label : "Logout" 
    } ,
]

export function Sidebar() {
    return (
        <div>
            <Flex align="center" justify="center">
                <div className="logo">
                    <AliwangwangFilled style={{color : "#c5cafe" , position:"relative" ,  top : "-9px"}}/>
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
    )
}