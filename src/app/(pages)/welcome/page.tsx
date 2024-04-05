import { Button, Typography } from "antd";
import { Card, Flex, Input } from 'antd';
import { AliwangwangFilled } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };
  
  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

const { Text } = Typography;

export default function welcome() {
    return (
        <Flex align='center' justify='center' style={{ height: "60vh", margin: "auto" }}>
            <Card
                hoverable
                style={{ width: 700, border: "2px solid #b9b9b970" }}
            >
                <Flex justify='center' style={{ marginBottom: "10px" }}>
                    <AliwangwangFilled style={{ fontSize: "50px", color: "#051bc7ab" }} />
                </Flex>
                <Flex justify='center' style={{ marginBottom: "20px" }} vertical>
                    <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center" }}>Get started with your</h1>
                    <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center" }}>account</h1>
                </Flex>
                <Flex align='center' justify="space-between">
                    <Flex vertical>
                        <h3 style={{ color : " #828282" , marginBottom : "4px"}}>First Name</h3>
                        <Input placeholder="Basic usage" style={{ width : "300px" , height : "40px"}} />
                    </Flex>
                    <Flex vertical>
                        <h3 style={{ color : " #828282" , marginBottom : "4px"}}>Last Name</h3>
                        <Input placeholder="Basic usage" style={{ width : "300px" , height : "40px"}}/>
                    </Flex>
                </Flex>

                {/* <SignOutButton/> */}
            </Card>
        </Flex>
    );
}

// Last Name.
// 	First Name.
// 	Profile picture.
// 	Location.
// 	Bio.