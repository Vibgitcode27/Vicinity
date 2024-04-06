import { Flex, Card, Avatar, Progress, Image, Typography, Button } from 'antd';
import { AliwangwangFilled } from '@ant-design/icons';
import { BellOutlined, MessageOutlined } from '@ant-design/icons';

import asset1 from "../assets/asset1.jpg"
import asset2 from "../assets/asset5.webp"

export function VicinityPage() {
    return (
        <Flex align='center' justify='center' style={{ width: "100%", height: "auto" }}>
            <Card style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Flex align='center' justify='center' style={{ width: "70%", marginLeft: "140px" }}>
                    <Image style={{ borderRadius: "20px" }} src={asset1.src}></Image>
                </Flex>
                <Flex align='center' justify='center' vertical>
                    <Typography.Title level={2} style={{ color: "#0015f6c1", marginTop: "30px" }}>Experience the Ghavan Ghatla</Typography.Title>
                    <Typography.Text style={{ fontSize: "16px", color: "gray", marginTop: "30px", width: "70%" }}>Indulge in the delightful flavors of Ghavan Ghatla, a beloved Marathi dish that offers a harmonious blend of textures and spices. Ghavan, thin crepe-like pancakes made from rice flour and coconut, are skillfully cooked until crisp yet tender. Paired with a rich coconut-based curry infused with mustard seeds, cumin, and aromatic spices, Ghavan Ghatla offers a satisfying culinary experience. Whether enjoyed for breakfast, lunch, or dinner, this dish promises a taste of authentic Marathi cuisine that is both comforting and flavorful.</Typography.Text>
                </Flex>
                <br />
                <Flex align='center' justify="space-between" style={{ marginLeft: "140px" }}>
                    <Flex >
                        <Card>
                            <Typography.Title level={4} style={{ color: "black", width: "250px" }}>Duration :- </Typography.Title>
                            <Typography.Text style={{ fontSize: "16px", color: "coral", marginTop: "33px", width: "70%" }}> 2 hours</Typography.Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card>
                            <Typography.Title level={4} style={{ color: "black", marginTop: "30px", width: "250px" }}>Pricings :- </Typography.Title>
                            <Typography.Text style={{ fontSize: "16px", color: "coral", marginTop: "33px", width: "70%" }}>1660/- Rs</Typography.Text>
                        </Card>
                    </Flex>
                </Flex>
                <Flex align='center' justify='center' style={{ paddingBottom: "30px", marginTop: "40px", borderBottom: "2px solid #ebebeb" }}>
                    <Button type='primary' style={{ backgroundColor: "#e73a3a", color: "white", width: "150px", height: "40px", fontSize: "18px" }}>Book Now !</Button>
                </Flex>

                {/* // Bookings */}
                <Card style={{ height: 260, borderRadius: '15px' , marginTop :"30px" , backgroundColor : "#ffdddd" , border : "2px solid coral" }}>
                    <Flex vertical gap="30px">
                        <Flex vertical align="flex-start">
                            <Typography.Title level={3} style={{ fontWeight: 600 }}>
                                Current Bookings :-
                            </Typography.Title>
                        </Flex>

                        <div style={{ overflowX: "auto", display: "flex" }}>
                            <Card style={{ width: "300px", borderRadius: "25px", backgroundColor: "#150d87d4", marginRight: "20px" }}>
                                <Flex>
                                    <div style={{ height: "60px", width: "60px", background: "#6773fce2", borderRadius: "10px", display: "flex", alignContent: "center", justifyContent: "center" }} >
                                        <AliwangwangFilled style={{ fontSize: "35px", color: "white" }} />
                                    </div>
                                    <Flex vertical style={{ marginLeft: "20px" }}>
                                        <Typography.Title level={4} style={{ color: "white" }}>
                                            Snehal Saurabh
                                        </Typography.Title>
                                        <Typography.Text style={{ color: "white" }}>
                                            snehaeats
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
                                            Vibhor Phalke
                                        </Typography.Title>
                                        <Typography.Text style={{ color: "white" }}>
                                            vibgitcode
                                        </Typography.Text>
                                    </Flex>
                                </Flex>
                            </Card>
                        </div>
                    </Flex>
                </Card>
            </Card>
        </Flex>
    );
}