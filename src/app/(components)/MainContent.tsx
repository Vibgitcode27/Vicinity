import { Flex } from "antd"
import { Banner } from "./Banner"
import { Banner2 } from "./Banner2"

export function MainContent()
{
    return (
        <div style={{flex : 1}}>
            <Flex vertical gap="2.3rem">
                <Banner2/>
                <Banner/>
            </Flex>
        </div>
    )
}