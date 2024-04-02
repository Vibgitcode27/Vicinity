import "../styles/dashboard.css"
import { Flex, Menu ,Progress } from "antd";
import React from "react";
import { AliwangwangFilled , WindowsFilled , RocketFilled , OrderedListOutlined , CarryOutFilled , ProfileFilled, SettingFilled } from "@ant-design/icons";

const items = [
    {
        key : 1 ,
        icon : <WindowsFilled className="sidebar-icons"/> ,
        label : "Dashboard"
    },
    {
        key : 2 ,
        icon : <CarryOutFilled  className="sidebar-icons"/> ,
        label : "My Orders"
    } ,
    {
        key : 3 ,
        icon : <ProfileFilled  className="sidebar-icons"/> ,
        label : "ToDo"
    } ,
    {
        key : 4 ,
        icon : <SettingFilled  className="sidebar-icons"/> ,
        label : "Setting" 
    } ,
    {
        key : 5 ,
        icon : <RocketFilled  className="sidebar-icons"/> ,
        label : "Logout" 
    } ,
]

export function Sidebar() {
    return (
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
    )
}