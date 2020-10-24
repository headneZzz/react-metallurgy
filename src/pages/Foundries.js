import {Card, Col, Layout, Menu, Row} from "antd";
import React from "react";

export default function Foundries(props) {
    const {Content, Footer, Header} = Layout;
    return (
        <Layout className="wrapper">
            <Header className="header">
                <Menu theme="dark" mode="horizontal">
                </Menu>
            </Header>
            <Layout style={{padding: '20px 50px'}}>
                <Content style={{padding: '0 50px'}}>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={4}>
                                <Card id={1} headStyle={{color: "red"}} title="Цех 1" bordered={false} hoverable
                                      onClick={(event) => props.history.push("/main/" + event.currentTarget.id)}>
                                    Гильз с вероятностью отказа: 0/11
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card title="Цех 2" bordered={false} hoverable>
                                    Гильз с вероятностью отказа: 0/11
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card title="Цех 69" bordered={false} hoverable>
                                    Гильз с вероятностью отказа: 0/11
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
            <Footer style={{textAlign: 'center'}}>X5pro</Footer>
        </Layout>
    )
}