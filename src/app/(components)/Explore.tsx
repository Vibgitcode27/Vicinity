import { Avatar, Card, Flex, Typography } from "antd";
import { AliwangwangFilled } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Meta } = Card;
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#0015f6c1',
        }}
    />
);

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


export function Explore() {
    return (
        <Flex align="center" justify="center" style={{ width: "100%" }} vertical>
            <Flex >
                <Flex
                    style={{ width: "50vw", backgroundColor: "white", borderRadius: "10px", marginTop: "-35px" }}
                    align="center" justify="space-between"
                >
                    <Flex>
                        <Avatar style={{ backgroundColor: "white" }} size={84} icon={<AliwangwangFilled style={{ color: "#0015f6c1" }} />} />
                        <Typography.Title level={4} style={{ color: "#0015f6c1", marginTop: "30px" }}>Vicinity</Typography.Title>
                    </Flex>
                    <Space direction="vertical" style={{marginRight : "10px"}}>
                        <Search
                            placeholder="Search for vicinities"
                            allowClear
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                        />
                    </Space>
                </Flex>
            </Flex>
            <div style={{
                height: "75vh",
                overflowY: "scroll",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
            }}>
                <Flex>
                    <Card
                        style={{ width: "30vw", marginTop: "20px" }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                    >
                        <Meta
                            title="Experience bhakri making"
                            description="Bhakri making is an authentic culinary experience from Maharashtra, India. It involves handcrafting round, unleavened flatbreads made from coarse grains like jowar (sorghum) or bajra (pearl millet). Traditionally, the dough is kneaded with water and shaped into discs, then cooked on a hot griddle until golden brown and crispy. This process requires skill and patience, as the thickness and texture of the bhakri greatly influence its taste."
                        />
                        <Typography.Title level={5} style={{ marginTop: "20px" }}>Duration : 1hr</Typography.Title>
                    </Card>
                </Flex>

                <Flex>
                    <Card
                        style={{ width: "30vw", marginTop: "20px" }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                    >
                        <Meta
                            title="Experience bhakri making"
                            description="Bhakri making is an authentic culinary experience from Maharashtra, India. It involves handcrafting round, unleavened flatbreads made from coarse grains like jowar (sorghum) or bajra (pearl millet). Traditionally, the dough is kneaded with water and shaped into discs, then cooked on a hot griddle until golden brown and crispy. This process requires skill and patience, as the thickness and texture of the bhakri greatly influence its taste."
                        />
                        <Typography.Title level={5} style={{ marginTop: "20px" }}>Duration : 1hr</Typography.Title>
                    </Card>
                </Flex>
            </div>
        </Flex>
    );
}