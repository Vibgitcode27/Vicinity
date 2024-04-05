"use client"
import React from 'react';
import { useAppDispatch , useAppSelector } from "@/lib/hooks";
import { increment , decrement , incrementByAmount , fetchApiData } from "@/lib/CounterSlice/counter";
import { useUser } from "@clerk/nextjs";
import { SignInButton , SignUpButton , SignOutButton} from "@clerk/nextjs";
import { Card , Flex , Button} from 'antd';
import { AliwangwangFilled } from '@ant-design/icons';
const { Meta } = Card;
export default function Home() {
  
  const { isLoaded, isSignedIn, user } = useUser();
  const count = useAppSelector(state => state.counter.value)
  const api = useAppSelector(state => state.counter.api)
  const dispatch = useAppDispatch()
  console.log(user);
  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(incrementByAmount(parseInt(e.target.value)))
  }

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   { user && (
    //       <span>User :- {user.username} </span>
    //     )
    //   }
    //   {count}
    //   <button onClick={() => dispatch(increment())}>Increment</button>
    //   <button onClick={() => dispatch(decrement())}>Decrement</button>
    //   <input onChange={handleInputChange} type="text" placeholder="decrement by amount" />
    //   <button >Increase</button>
    //   <button onClick={() => {dispatch(fetchApiData())}}>Fetch Api</button>
    //   {JSON.stringify(api)}
    // </main>
      <Flex align='center' justify='center' style={{ height : "90vh" , margin : "auto"}}>
        <Card
          hoverable
          style={{ width: 360 , border : "2px solid #b9b9b970" }}
        >
          <Flex justify='center' style={{ marginBottom : "10px"}}>
            <AliwangwangFilled style={{ fontSize : "50px" , color : "#051bc7ab"}}/>
          </Flex>
          <Flex justify='center' style={{ marginBottom : "20px"}}>
            <h1 style={{ fontSize : "30px"}}>Welcome to Vicinity</h1>
          </Flex>
          <Flex align='center' vertical>
            <Button type='primary' style={{ backgroundColor : "#0015f6c1" , marginBottom : "10px" , width : "100%"}}>
                <SignInButton redirectUrl="/dashboard"/>
              </Button>

              <Button type='primary' style={{ backgroundColor : "#0015f6c1" , marginBottom : "10px" , width : "100%"}}>
                <SignUpButton redirectUrl="/welcome"/>
              </Button>
          </Flex>
          
          <SignOutButton/>
      </Card>
      </Flex>
  );
}
