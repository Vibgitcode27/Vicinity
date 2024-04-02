import { Card, Flex, Typography } from "antd";

export function ContentSideBar() {
    return (
        <div>
            <Card style={{width : 350 , height : 260}}>
                <Flex vertical gap="large">
                    <Typography.Title level={4}>
                        Today <br/>5 orders
                    </Typography.Title>
                    <Typography.Title level={4}>
                        This Month <br/>240 orders
                    </Typography.Title>
                </Flex>
            </Card>
        </div>
    )
}