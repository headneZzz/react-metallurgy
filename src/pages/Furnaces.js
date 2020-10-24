import {Card, Col, Layout, Menu, Row} from "antd";
import React from "react";
import GaugeChart from 'react-gauge-chart'
import {Gauge} from 'ant-design-pro/lib/Charts';
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import WaterWave from "ant-design-pro/lib/Charts/WaterWave";
import {ChartCard, MiniArea, MiniProgress} from 'ant-design-pro/lib/Charts';
import moment from 'moment';


export default function Furnaces() {
    const {SubMenu} = Menu;
    const {Header, Content, Sider} = Layout;

    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
        visitData.push({
            x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
            y: Math.floor(Math.random() * 100) + 10,
        });
    }

    const handleClick = () => alert("hi");

    return (
        <Layout className="wrapper">
            <Header className="header">
                <Menu theme="dark" mode="horizontal">
                </Menu>
            </Header>
            <Layout>
                <Sider className="site-layout-background" width={225}>
                    <Menu
                        onClick={handleClick}
                        mode="inline"
                        defaultOpenKeys={['NOT_OK']}
                        style={{height: '100%'}}
                    >
                        <SubMenu key="NOT_OK" icon={<CloseCircleOutlined/>} title="Что то не так">
                            <Menu.Item key={1}>{"Печь 1"}</Menu.Item>
                        </SubMenu>
                        <SubMenu key="OK" icon={<CheckCircleOutlined/>} title="Все хорошо">
                            <Menu.Item key={2}>{"Печь 2"}</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Content style={{padding: '20px 50px'}}>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={4}>
                                <Card title="Температура воды" bordered={false}>
                                    <GaugeChart percent={0.5} textColor={"#000000"} id="gauge-chart1"/>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card bordered={false}>
                                    <Gauge title="Кристаллизатор" height={164} percent={87}/>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card bordered={false}>
                                    <div style={{textAlign: 'center'}}>
                                        <WaterWave height={161} title="Кол-во воды" percent={34}/>
                                    </div>
                                </Card>
                            </Col>
                        </Row>


                        <Row>
                            <Col span={24} style={{marginTop: 24}}>
                                <ChartCard
                                    title="Наработка гильзы"
                                    total="78%"
                                    contentHeight={46}
                                >
                                    <MiniProgress percent={78} strokeWidth={8} target={80}/>
                                </ChartCard>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24} style={{marginTop: 24}}>
                                <ChartCard
                                    title="Вероятность отказа"
                                    total="78%"
                                    contentHeight={46}
                                >
                                    <MiniProgress percent={78} strokeWidth={8} target={80}/>
                                </ChartCard>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24} style={{marginTop: 24}}>
                                <ChartCard title="Показатели температуры за месяц" contentHeight={134}>
                                    <MiniArea line height={45} data={visitData}/>
                                </ChartCard>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}