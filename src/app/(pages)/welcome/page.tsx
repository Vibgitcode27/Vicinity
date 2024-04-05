"use client"

import { Button, Typography } from "antd";
import { Card, Flex, Input } from 'antd';
import { AliwangwangFilled } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { useState } from "react";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  const { TextArea } = Input;
const { Text } = Typography;

export default function welcome() {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [value, setValue] = useState('');

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  

    return (
        <Flex align='center' justify='center' style={{ height: "100vh", margin: "auto" }}>
            <Card
                hoverable
                style={{ width: 700, border: "2px solid #b9b9b970" }}
            >
                <Flex justify='center' style={{ marginBottom: "10px" }}>
                    <AliwangwangFilled style={{ fontSize: "50px", color: "#051bc7ab" }} />
                </Flex>
                <Flex justify='center' style={{ marginBottom: "20px" }} vertical>
                    <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center" }}>Get started with your</h1>
                    <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center" , marginTop : "-10px"}}>account</h1>
                </Flex>
                <Flex align="center" justify="center" style={{ marginTop : "20px" , marginLeft : "270px"}}>
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-circle"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    {previewImage && (
                        <Image
                        wrapperStyle={{ display: 'none' }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: (visible) => setPreviewOpen(visible),
                            afterOpenChange: (visible) => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                        />
                    )}
                </Flex>
                <Flex align='center' justify="space-between">
                    <Flex vertical>
                        <h3 style={{ color : " #828282" , marginBottom : "4px"}}>First Name</h3>
                        <Input placeholder=".-.-." style={{ width : "300px" , height : "40px" , border :"2px solid black"}} />
                    </Flex>
                    <Flex vertical>
                        <h3 style={{ color : " #828282" , marginBottom : "4px"}}>Last Name</h3>
                        <Input placeholder=".-.-." style={{ width : "300px" , height : "40px" ,  border :"2px solid black"}}/>
                    </Flex>
                </Flex>
               
                <Flex vertical align="center" justify="center" style={{ marginTop : "20px" }}>
                    <h3 style={{ color : " #828282" , marginBottom : "4px"}}>Location</h3>
                    <Input style={{ width : "300px" , height : "40px" ,  border :"2px solid black"}}/>     
                </Flex>
                {/* <SignOutButton/> */}
                <h3 style={{ color : " #828282" , marginLeft : "10px", fontSize : "15px"}}>Bio</h3>
                <Flex vertical align="center" justify="center" style={{ marginTop : "20px" }}>
                    <TextArea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder=".-.-."
                        autoSize={{ minRows: 3, maxRows: 5 }}
                        style={{ border :"2px solid black"}}
                    />
                </Flex>
                <Flex align="center" justify="center">
                <Button type='primary' style={{ backgroundColor : "#0015f6c1" , marginTop : "10px" , width : "40%"}}>Submit</Button>
                </Flex>
            </Card>
        </Flex>
    );
}

// Last Name.
// 	First Name.
// 	Profile picture.
// 	Location.
// 	Bio.

