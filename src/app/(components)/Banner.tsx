import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { Card, Flex, Typography, Button } from "antd";
import { AliwangwangFilled } from '@ant-design/icons';

export function Banner() {
    return (
        <Card style={{ height: 260 }}>
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
                    <Card style={{ width: "300px", borderRadius: "25px", backgroundColor: "#150d87d4", marginRight: "20px" }}>
                        <Flex>
                            <div style={{ height: "60px", width: "60px", background: "#6773fce2", borderRadius: "10px", display: "flex", alignContent: "center", justifyContent: "center" }} >
                                <AliwangwangFilled style={{ fontSize: "35px", color: "white" }} />
                            </div>
                            <Flex vertical style={{ marginLeft: "20px" }}>
                                <Typography.Title level={4} style={{ color: "white" }}>
                                    Title
                                </Typography.Title>
                                <Typography.Text style={{ color: "white" }}>
                                    Upcoming
                                </Typography.Text>
                            </Flex>
                        </Flex>
                    </Card>
                    <Card style={{ width: "300px", borderRadius: "25px", backgroundColor: "#150d87d4" }}>
                        <Flex>
                            <div style={{ height: "60px", width: "60px", background: "#6773fce2", borderRadius: "10px", display: "flex", alignContent: "center", justifyContent: "center" }} >
                                <AliwangwangFilled style={{ fontSize: "35px", color: "white" }} />
                            </div>
                            <Flex vertical style={{ marginLeft: "20px" }}>
                                <Typography.Title level={4} style={{ color: "white" }}>
                                    Title
                                </Typography.Title>
                                <Typography.Text style={{ color: "white" }}>
                                    Upcoming
                                </Typography.Text>
                            </Flex>
                        </Flex>
                    </Card>
                    
                </div>
            </Flex>
        </Card>
    )
}