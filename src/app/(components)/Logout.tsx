import { useClerk } from "@clerk/nextjs"
import { Card , Flex , Button } from "antd";
import { useRouter } from 'next/navigation'
import { AliwangwangFilled } from '@ant-design/icons';

export function Logout() {
    const router = useRouter()
    const { signOut } = useClerk();

    return (
        // <Card>
        //     <Card.Grid onClick={() => signOut(() => router.push("/"))} style={{ width: '100%', textAlign: 'center' }}>
        //         Logout
        //     </Card.Grid>
        // </Card>
        <Flex align='center' justify='center' style={{ height : "60vh" , margin : "auto"}}>
        <Card
          hoverable
          style={{ width: 360 , border : "2px solid #b9b9b970" }}
        >
          <Flex justify='center' style={{ marginBottom : "10px"}}>
            <AliwangwangFilled style={{ fontSize : "50px" , color : "#051bc7ab"}}/>
          </Flex>
          <Flex justify='center' style={{ marginBottom : "20px"}}>
            <h1 style={{ fontSize : "18px"}}>Are you sure you wanna to log out?</h1>
          </Flex>
          <Flex align='center' vertical>
            <Button type='primary' onClick={() => signOut(() => router.push("/"))} style={{ backgroundColor : "#0015f6c1" , marginBottom : "10px" , width : "100%"}}>
                Logout
            </Button>
          </Flex>
      </Card>
      </Flex>
    )
}