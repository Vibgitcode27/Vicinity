import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { Card , Flex, Typography , Button } from "antd";

export function Banner() {
    return (
        <Card style={{height : 260 , padding : "20px"}}>
            <Flex vertical gap="30px">
                <Flex vertical align="flex-start">
                    <Typography.Title level={2} style={{ fontWeight : 600}}>
                        Create and Sell Products
                    </Typography.Title>
                    <Typography.Text type="secondary" style={{ fontWeight : 600}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, nemo.
                    </Typography.Text>
                </Flex>
            
                <Flex gap="large">
                    <Button size="large">
                        Explore More
                    </Button>
                    <Button size="large">
                        Top Sellers
                    </Button>
                </Flex>
            </Flex>
        </Card>
    )
}