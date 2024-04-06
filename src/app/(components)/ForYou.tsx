import { Avatar, Card, Flex, Typography } from "antd";
import { AliwangwangFilled } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Image } from 'antd';
import { useAppDispatch , useAppSelector } from "@/lib/hooks";
import { getPostUser } from "@/lib/UserSlice/userSignUp";
import { useRouter } from "next/navigation";

const { Meta } = Card;
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#0015f6c1',
        }}
    />
);

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


export function ForYou() {

    const { user } = useUser()
    const [data, setData] = useState([])
    const dispatch = useAppDispatch();
    const router = useRouter();

    const location = useAppSelector(state => state.getPostUser.Location);

    function handleItemClick(item : any) {
        dispatch(getPostUser(item));
        console.log(item)
        router.push("/vicinities");
    }

    async function Async() {
        let data = await fetch("http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000/getPostsByCity", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Location: JSON.stringify(location) })
        })
        let res = await data.json();
        console.log(res)
        setData(res);
    }

    useEffect(() => {
        Async();
    }, [user?.username])

    return (
        <Flex align="center" justify="center" style={{ width: "100%" }} vertical>
            <Flex >
                <Flex
                    style={{ width: "50vw", backgroundColor: "white", borderRadius: "10px", marginTop: "-35px" }}
                    align="center" justify="space-between"
                >
                    <Flex>
                        <Avatar style={{ backgroundColor: "white" }} size={84} icon={<AliwangwangFilled style={{ color: "#0015f6c1" }} />} />
                        <Typography.Title level={4} style={{ color: "#0015f6c1", marginTop: "30px" }}>Vicinity</Typography.Title>
                    </Flex>
                    <Space direction="vertical" style={{ marginRight: "10px" }}>
                        <Search
                            placeholder="Search for vicinities"
                            allowClear
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                        />
                    </Space>
                </Flex>
            </Flex>
            <div style={{
                height: "75vh",
                overflowY: "scroll",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
            }}>
                {data.map((item, index) => (
                    <Flex key={index}> {/* Assuming Flex is a valid component */}
                        <Card
                            style={{ width: "30vw", marginTop: "20px" }}
                            cover={
                                <Image
                                    alt="example"
                                    src={item.Picture}
                                />
                            }
                            onClick={() => handleItemClick(item)} // Add onClick event here
                        >
                            <div onClick={() => console.log("Clicked")}>
                                <Meta
                                    title={item.RequirementsAndRestriction}
                                    description={item.Description}
                                />
                            </div>
                            <Typography.Title level={5} style={{ marginTop: "20px" }}>Duration : {item.Duration}</Typography.Title>
                        </Card>
                    </Flex>
                ))}
            </div>
        </Flex>
    );
}