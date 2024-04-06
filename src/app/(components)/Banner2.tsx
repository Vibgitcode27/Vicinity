import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { Card, Flex, Typography, Button } from "antd";
import image from "../assets/dashboard_png.png";

export function Banner2() {
    return (
        <Card style={{ height: 260, padding: "20px" , backgroundColor : "#ffd7d9" , border :"2px solid #ff7982" , borderRadius : "15px"}}>
            <Flex>
                <Flex vertical gap="30px">
                    <Flex vertical align="flex-start">
                        <Typography.Title level={2} style={{ fontWeight: 600 , color : "#ff3e4b" }}>
                            Welcome back Vibhor
                        </Typography.Title>
                        <Typography.Text style={{ fontWeight: 600 }}>
                            Start your journey by creating your first vicinity.
                        </Typography.Text>
                    </Flex>

                    <Flex gap="large">
                        <Button size="large">
                            Create Vicinity
                        </Button>
                    </Flex>
                </Flex>
                <Flex>
                    <img src={image.src} alt="" style={{ height: 350, width: 300, position: "relative", top: "-100px", left: "180px" }} />
                </Flex>
            </Flex>
        </Card>
    )
}