import "../styles/dashboard.css"
import { Flex, Menu ,Progress } from "antd";
import React from "react";
import { AliwangwangFilled , WindowsFilled , RocketFilled , CompassFilled , FireFilled,} from "@ant-design/icons";

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