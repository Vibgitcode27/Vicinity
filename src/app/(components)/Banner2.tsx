import { Image, Upload } from 'antd';
import React, { useEffect, useState } from "react";
import { AliwangwangFilled } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import image from "../assets/dashboard_png.png";
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Card, Flex, Typography, Button, Modal, Input, Spin } from "antd";
import { useUser } from '@clerk/nextjs';
import { postUser } from '@/lib/UserSlice/userSignUp';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

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

export function Banner2() {
  const { user } = useUser()
  const router = useRouter()
  const dispatch = useAppDispatch();
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // Redux State 
  const [imageData, setImageData] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  // Redux Selectors
  const FirstName = useAppSelector(state => state.signUpUser.Fname)

  useEffect(() => {
    async function Async() {
      console.log(uploadReuxObejct)
      await fetch("http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(uploadReuxObejct)
      })
    }
    if(imageData)
    {
      Async();
      console.log("useEffect")
    }
  }, [imageData])

  let uploadReuxObejct = {
    Picture: imageData,
    Description: description,
    Duration: duration,
    RequirementsAndRestriction: title,
    Location: location,
    Cost: cost,
    Username: user?.username,
  }

  // File Upload logic

  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('photos', file);

    try {
      const response = await fetch('http://ec2-13-126-223-141.ap-south-1.compute.amazonaws.com:4000/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log("data" , data.data.imageName)
      let ok = JSON.stringify(data.data.imageName);
      console.log("ok" ,ok)
      setImageData(ok)
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  let faFile: any;

  if (fileList.length > 0) {
    faFile = fileList[0].originFileObj;
  }


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

  const handleModalClose = () => {
    setModal2Open(false);
  };

  const handleModalClose2 = () => {
    setModal3Open(false);
  };

  const Modal1 = () => (
    loading ? (
      <Modal
        centered
        visible={modal3Open}
        onCancel={handleModalClose2}
      >
        <Flex align="center" justify='center' style={{ height: "30vh" }} gap="middle">
          <Spin size="large" />
        </Flex>
      </Modal>
    ) : (
      <Modal
        centered
        visible={modal2Open}
        onCancel={handleModalClose}
        style={{ height: "100vh", width: "3000px", display: "flex" }}
      >
        <div style={{ width: 700 }}>
          <Flex justify='center' style={{ marginBottom: "10px" }}>
            <AliwangwangFilled style={{ fontSize: "50px", color: "#051bc7ab" }} />
          </Flex>
          <Flex justify='center' style={{ marginBottom: "20px" }} vertical>
            <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center" }}>Get started with your</h1>
            <h1 style={{ fontSize: "30px", display: "flex", alignContent: 'center', justifyContent: "center", marginTop: "-10px" }}>account</h1>
          </Flex>
          <Flex align="center" justify="center" style={{ marginTop: "20px", marginLeft: "290px" }}>
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
              <h3 style={{ color: " #828282", marginBottom: "4px" }}>Title</h3>
              <Input
                onChange={(e) => { setTitle(e.target.value) }}
                placeholder=".-.-."
                style={{ width: "300px", height: "40px", border: "2px solid black" }}
              />
            </Flex>
            <Flex vertical>
              <h3 style={{ color: " #828282", marginBottom: "4px" }}>Duration</h3>
              <Input onChange={(e) => { setDuration(e.target.value) }} placeholder=".-.-." style={{ width: "300px", height: "40px", border: "2px solid black" }} />
            </Flex>
          </Flex>

          <Flex align='center' justify="space-between">
            <Flex vertical>
              <h3 style={{ color: " #828282", marginBottom: "4px" }}>Location</h3>
              <Input onChange={(e) => { setLocation(e.target.value) }} placeholder=".-.-." style={{ width: "300px", height: "40px", border: "2px solid black" }} />
            </Flex>
            <Flex vertical>
              <h3 style={{ color: " #828282", marginBottom: "4px" }}>Cost</h3>
              <Input onChange={(e) => { setCost(e.target.value) }} placeholder=".-.-." style={{ width: "300px", height: "40px", border: "2px solid black" }} />
            </Flex>
          </Flex>
          {/* <SignOutButton/> */}
          <h3 style={{ color: " #828282", marginLeft: "10px", marginTop: "10px", fontSize: "15px" }}>Description</h3>
          <Flex vertical align="center" justify="center" style={{ marginTop: "10px" }}>
            <TextArea
              onChange={(e) => setDescription(e.target.value)}
              placeholder=".-.-."
              autoSize={{ minRows: 3, maxRows: 5 }}
              style={{ border: "2px solid black" }}
            />
          </Flex>
          <Flex align="center" justify="center">
            <Button type='primary' style={{ backgroundColor: "#0015f6c1", marginTop: "10px", width: "40%" }} onClick={async () => {
              setLoading(true);
              dispatch(postUser(uploadReuxObejct))
              await uploadFile(faFile);

              setLoading(false);
              setModal2Open(false);
            }}>Submit</Button>
          </Flex>
        </div>
      </Modal>
    )
  );


  return (
    <div>
      <Card
        style={{
          height: 260,
          padding: "20px",
          backgroundColor: "#ffe5e6",
          border: "2px solid #ff979e",
          borderRadius: "15px"
        }}
      >
        <Flex>
          <Flex vertical gap="30px">
            <Flex vertical align="flex-start">
              <Typography.Title level={2} style={{ fontWeight: 600, color: "#ff3e4b" }}>
                Welcome back {FirstName}
              </Typography.Title>
              <Typography.Text style={{ fontWeight: 600 }}>
                Start your journey by creating your first vicinity.
              </Typography.Text>
            </Flex>

            <Flex gap="large">
              <Button size="large" onClick={() => setModal2Open(true)} style={{ backgroundColor: "#0015f6c1" }}>
                <span style={{ color: "white" }}>Create Vicinity</span>
              </Button>
            </Flex>
          </Flex>
          <Flex>
            <img
              src={image.src}
              alt=""
              style={{ height: 350, width: 300, position: "relative", top: "-100px", left: "180px" }}
            />
          </Flex>
        </Flex>
      </Card>
      {Modal1()}
    </div>
  );
}