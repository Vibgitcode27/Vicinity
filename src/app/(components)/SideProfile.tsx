"use client"

import { Avatar, Typography } from 'antd';
import React from 'react';
import { Flex, Card, Progress } from 'antd';
import { BellOutlined, MessageOutlined } from '@ant-design/icons';

import asset1 from "../assets/asset1.jpg"
import asset2 from "../assets/asset5.webp"

const { Meta } = Card;

export function SideProfile() {

  return (
    <Card
      style={{
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        backgroundColor: "#fff",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "auto" // Set width to "auto" for automatic adjustment
      }}
    >
      <Flex align="center" justify="space-between" gap="40px">
        <BellOutlined className='profile-icons' />
        <Flex gap="small" wrap="wrap">
          <Progress type="circle" style={{ padding: "2px" }} percent={80} format={() => {
            return (
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 90 }}
                // icon={<AliwangwangFilled />}
                src={asset1.src}
              />
            )
          }} />
        </Flex>
        <MessageOutlined className='profile-icons' />
      </Flex>
      <Flex align='center' justify='center' vertical style={{ margin: "10px" }}>
        <Typography.Title level={4} style={{ padding: "0", margin: "0", fontWeight: 600 }}>Vibhor Phalke</Typography.Title>
        <Typography.Text>vibgitcode27</Typography.Text>
      </Flex>
      <Flex align='center' justify='center' style={{ margin: "10px" }}>
      <Card
        hoverable
        style={{ width: 240 }}
       >
          <Meta title="Your Bio" description="Fueling connections and creativity through words and community on a social media platform designed for meaningful engagement and expression." />
      </Card>
      </Flex>
        <Typography.Title style={{ marginTop: "20px" }} level={5} >Current Vicinities</Typography.Title>
      <Flex style={{
        width: "298px",
        overflowX: "scroll",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none"
      }}>
        <Card style={{
          marginRight: "10px",
          borderRadius: "20px",
          backgroundImage: `url(${asset2.src})`, // Use the imported image variable
          backgroundSize: 'cover', // Optional: Set background size to cover for better fitting
          backgroundPosition: 'center', // Optional: Set background position to center
        }}>
          <Typography.Title style={{ marginTop: "10px", width: "90px" }} level={5} >Title</Typography.Title>
          <Typography.Text>More</Typography.Text>
          <Flex align='center' justify='center' style={{ marginTop: "70px" }}>
            <Typography.Text>50%</Typography.Text>
          </Flex>
        </Card>
        <Card style={{ marginRight: "10px", backgroundColor: "#bff8ff", borderRadius: "15px" }}>
          <Typography.Title style={{ marginTop: "10px", width: "90px" }} level={5} >Title</Typography.Title>
          <Typography.Text>More</Typography.Text>
          <Flex align='center' justify='center' style={{ marginTop: "70px" }}>
            <Typography.Text>50%</Typography.Text>
          </Flex>
        </Card>
        <Card style={{
          marginRight: "10px",
          borderRadius: "20px",
          backgroundImage: `url(${asset2.src})`, // Use the imported image variable
          backgroundSize: 'cover', // Optional: Set background size to cover for better fitting
          backgroundPosition: 'center', // Optional: Set background position to center
        }}>
          <Typography.Title style={{ marginTop: "10px", width: "90px" }} level={5} >Current Projects</Typography.Title>
          <Typography.Text>More</Typography.Text>
          <Flex align='center' justify='center' style={{ marginTop: "70px" }}>
            <Typography.Text>50%</Typography.Text>
          </Flex>
        </Card>
        <Card style={{ marginRight: "10px", backgroundColor: "#bff8ff", borderRadius: "20px" }}>
          <Typography.Title style={{ marginTop: "10px", width: "90px" }} level={5} >Current Projects</Typography.Title>
          <Typography.Text>More</Typography.Text>
          <Flex align='center' justify='center' style={{ marginTop: "70px" }}>
            <Typography.Text>50%</Typography.Text>
          </Flex>
        </Card>
      </Flex>
    </Card>
  )
}