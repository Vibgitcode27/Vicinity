import { ContentSideBar } from "./ContentSideBar"
import { Flex } from "antd"

export function SideContent()
{
    return (
        <Flex style={{width : 350}}>
            <ContentSideBar/>
        </Flex>
    )
}