"use client"

import { Avatar, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { Flex, Card, Progress, List, Skeleton, Button } from 'antd';
import { BellOutlined, MessageOutlined } from '@ant-design/icons';

import asset1 from "../assets/asset1.jpg"
import asset2 from "../assets/asset5.webp"


interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


export function SideProfile() {

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };

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
        <Typography.Text></Typography.Text>
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

      {/* List Items here  */}
      {/* <Flex align='center' justify="space-between" >
        <Typography.Title style={{ marginTop: "10px" }} level={5} >Last Clients</Typography.Title>
        <Typography.Text onClick={onLoadMore}>More</Typography.Text>
      </Flex>
      <div style={{ overflowX: "auto", maxHeight: "300px", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <Card style={{ padding: "0px" }}>
              <List.Item
                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.medium} />}
                    title={<a href="https://ant.design">{item.name?.last}</a>}
                    description={<span style={{ margin: "0px", padding: "0px" }}>Ant Design</span>}
                  />
                </Skeleton>
              </List.Item>
            </Card>
          )}
        />
      </div> */}
    </Card>
  )
}