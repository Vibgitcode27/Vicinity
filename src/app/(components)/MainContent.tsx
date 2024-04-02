import { Flex } from "antd"
import { Banner } from "./Banner"

export function MainContent()
{
    return (
        <div style={{flex : 1}}>
            <Flex vertical gap="2.3rem">
                <Banner/>
            </Flex>
        </div>
    )
}