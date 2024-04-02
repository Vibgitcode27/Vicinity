import React from "react";
import {Flex , Typography , Button , Layout} from "antd"

export function MainHeader() {
    return (
        <Flex align="center" justify="space-between">
            <Typography.Title level={3} type="secondary" style={{color : "black"}}>
                Dashboard
            </Typography.Title>
            
            <Button>Contribute</Button>
        </Flex>
    )
}