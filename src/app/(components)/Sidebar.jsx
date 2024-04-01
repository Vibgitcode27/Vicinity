import { Flex, Menu } from "antd";
import React from "react";
import { AliwangwangFilled , UserOutlined , LoginOutlined , OrderedListOutlined , CarryOutOutlined } from "@ant-design/icons";

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
        icon : <UserOutlined/> ,
        label : "ToDo"
    } ,
    {
        key : 4 ,
        icon : <UserOutlined/> ,
        label : "Dashboard"
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
                items={[{
                    key : "1" ,
                    icon : <
                }]}
            >
            </Menu>
        </div>
    )
}