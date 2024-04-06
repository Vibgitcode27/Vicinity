"use client"

import { Button, Typography } from "antd";
import { Card, Flex, Input, Spin } from 'antd';
import { AliwangwangFilled } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { use, useState } from "react";
// Redux Imports
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useUser } from "@clerk/nextjs";
import { signUpUser } from "@/lib/UserSlice/userSignUp";
import { useRouter } from "next/navigation";

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

    const router = useRouter();
    const { user } = useUser();
    const dispatch = useAppDispatch();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [loading, setLoading] = useState(false);

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

    // Getting Clerk Data
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    // const { email , setEmail } = useState<string>("");
    // const { username , setUsername } = useState<string>("");
    // const { profilepic , setProfilepic } = useState<string>("");


    let signUpObject = {
        Fname: firstname,
        Lname: lastname,
        Location: location,
        Bio: bio,
        Email: user?.emailAddresses[0].emailAddress,
        Username: user?.username,
        ProfilePic: user?.imageUrl,
    };



    return (
        <Flex align='center' justify='center' style={{ height: "100vh", margin: "auto" }}>
            {loading ? <Flex align="center" gap="middle">
                <Spin size="large" />
            </Flex>
                : (
                    <Card
                        hoverable
                        style={{ width: 700, border: "2px solid #b9b9b970" }}
                    >
                        <Flex justify='center' style={{ marginBottom: "10px" }}>
                            <AliwangwangFilled style={{ fontSize: "50px", color: "#051bc7ab" }} />
                        </Flex>
                        <Flex justify='center' style={{ marginBottom: "20px" }} vertical>
                            <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center" }}>Get started with your</h1>
                            <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center", marginTop: "-10px" }}>account</h1>
                        </Flex>
                        <Flex align="center" justify="center" style={{ marginTop: "20px", marginLeft: "270px" }}>
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
                                <h3 style={{ color: " #828282", marginBottom: "4px" }}>First Name</h3>
                                <Input onChange={(e) => { setFirstname(e.target.value) }} placeholder=".-.-." style={{ width: "300px", height: "40px", border: "2px solid black" }} />
                            </Flex>
                            <Flex vertical>
                                <h3 style={{ color: " #828282", marginBottom: "4px" }}>Last Name</h3>
                                <Input onChange={(e) => { setLastname(e.target.value) }} placeholder=".-.-." style={{ width: "300px", height: "40px", border: "2px solid black" }} />
                            </Flex>
                        </Flex>

                        <Flex vertical align="center" justify="center" style={{ marginTop: "20px" }}>
                            <h3 style={{ color: " #828282", marginBottom: "4px" }}>Location</h3>
                            <Input onChange={(e) => { setLocation(e.target.value) }} style={{ width: "300px", height: "40px", border: "2px solid black" }} />
                        </Flex>
                        {/* <SignOutButton/> */}
                        <h3 style={{ color: " #828282", marginLeft: "10px", fontSize: "15px" }}>Bio</h3>
                        <Flex vertical align="center" justify="center" style={{ marginTop: "20px" }}>
                            <TextArea
                                placeholder=".-.-."
                                style={{ border: "2px solid black", height: "80px" }}
                                onChange={(e) => { setBio(e.target.value) }}
                            />
                        </Flex>
                        <Flex align="center" justify="center">
                            <Button type='primary' style={{ backgroundColor: "#0015f6c1", marginTop: "10px", width: "40%" }} onClick={async () => {
                                dispatch(signUpUser(signUpObject))
                                console.log(signUpObject)
                                setLoading(true);
                                await fetch("http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000/postuser", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(signUpObject)
                                })
                                router.push("/dashboard");
                            }}>Submit</Button>
                        </Flex>
                    </Card>
                )}
        </Flex>
    );
}

// Last Name.
// 	First Name.
// 	Profile picture.
// 	Location.
// 	Bio.

