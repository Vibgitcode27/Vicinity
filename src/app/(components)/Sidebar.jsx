import { Flex, Menu } from "antd";
import React from "react";
import { AliwangwangFilled , UserOutlined , LogoutOutlined , OrderedListOutlined , CarryOutOutlined , ProfileOutlined, SettingOutlined } from "@ant-design/icons";

const items = [
    {
        key : 1 ,
        icon : <UserOutlined/> ,
        label : "Dashboard"
    },
    {
        key : 2 ,
        icon : <CarryOutOutlined/> ,
        label : "My Orders"
    } ,
    {
        key : 3 ,
        icon : <OrderedListOutlined/> ,
        label : "ToDo"
    } ,
    {
        key : 4 ,
        icon : <ProfileOutlined/> ,
        label : "Profile"
    } ,
    {
        key : 5 ,
        icon : <SettingOutlined/> ,
        label : "Setting" 
    } ,
    {
        key : 6 ,
        icon : <LogoutOutlined/> ,
        label : "Logout" 
    } ,
]

export function Sidebar() {
    return (
        <div>
            <Flex align="center" justify="center">
                <div className="logo">
                    <AliwangwangFilled />
                </div>
            </Flex>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                className="menu-bar"
                items= {items}
            >
            </Menu>
        </div>
    )
}