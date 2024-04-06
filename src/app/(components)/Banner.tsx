import { Card, Flex, Typography, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useUser } from '@clerk/nextjs';
import { AliwangwangFilled } from '@ant-design/icons';

// getBookingUsername
// http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000/getBookingUsername



export function Banner() {

    const { user } = useUser()
    const [data, setData] = useState([])

    async function Async() {
        let data = await fetch("http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000/getBookingUsername", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username: user?.username })
        })
        let res = await data.json();
        console.log(res)
        setData(res);
    }

    useEffect(() => {
        Async();
    }, [user?.username])

    return (
        <Card style={{ height: 260, borderRadius: '15px' }}>
            <Flex vertical gap="30px">
                <Flex vertical align="flex-start">
                    <Typography.Title level={3} style={{ fontWeight: 600 }}>
                        Your Bookings :-
                    </Typography.Title>
                    <Typography.Text type="secondary" style={{ fontWeight: 600 }}>
                        View your bookings and manage them.
                    </Typography.Text>
                </Flex>

                <div style={{ overflowX: "auto", display: "flex" }}>
                    {data.map((item) => (
                        <Card style={{ width: "300px", borderRadius: "25px", backgroundColor: "#150d87d4", marginRight: "20px" }}>
                            <Flex>
                                <div style={{ height: "60px", width: "60px", background: "#6773fce2", borderRadius: "10px", display: "flex", alignContent: "center", justifyContent: "center" }} >
                                    <AliwangwangFilled style={{ fontSize: "35px", color: "white" }} />
                                </div>
                                <Flex vertical style={{ marginLeft: "20px" }}>
                                    <Typography.Title level={4} style={{ color: "white" }}>
                                        {item.title}
                                    </Typography.Title>
                                    <Typography.Text style={{ color: "white" , fontSize : "9px" }}>
                                        BookingID :- {item.bookID}
                                    </Typography.Text>
                                </Flex>
                            </Flex>
                        </Card>
                    ))}

                </div>
            </Flex>
        </Card>
    )
}