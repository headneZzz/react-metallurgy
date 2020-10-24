import {Button, Card, Col, Descriptions, Input, Layout, Modal, PageHeader, Row} from "antd";
import WaterWave from "ant-design-pro/lib/Charts/WaterWave";
import {ChartCard, MiniArea, MiniProgress} from "ant-design-pro/lib/Charts";
import React, {useState} from "react";
import GaugeChart from 'react-gauge-chart'
import moment from 'moment';

export default function Report(props) {
    console.log(props.info);
    const {Content} = Layout;
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
        visitData.push({
            x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
            y: Math.floor(Math.random() * 100) + 10,
        });
    }

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    };

    return (
        <Content style={{padding: '20px 50px'}}>
            <div className="site-card-wrapper">
                <Row>
                    <div className="site-page-header-ghost-wrapper">
                        <PageHeader
                            ghost={false}
                            avatar={{src: 'https://img1.freepng.ru/20180319/opq/kisspng-computer-icons-clip-art-check-yes-ok-icon-5ab061dfcd38e3.7297168415215088318406.jpg'}}
                            title={"Гильза 30013875"}
                            subTitle="Кристаллизатор 15"
                            extra={[
                                <Button key="3">Удалить</Button>,
                                <Button key="1" type="primary">Изменить</Button>,
                            ]}
                        >
                            <Descriptions size="small" column={1}>
                                <Descriptions.Item label="Добавлена">Иваном Ивановым</Descriptions.Item>
                                <Descriptions.Item label="Дата ввода">19.05.2020</Descriptions.Item>
                                <Descriptions.Item label="Заметка">смена сечения</Descriptions.Item>
                            </Descriptions>
                        </PageHeader>
                    </div>
                    <Modal
                        title="Изменить гильзу"
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                    >
                        <Input placeholder="Номер гильзы" value={134}/>
                    </Modal>
                </Row>

                {/*<Row gutter={16} className={"row"}>*/}
                {/*    <Col>*/}
                {/*        <Card title="Расход воды на кр-р" bordered={false}>*/}
                {/*            <GaugeChart id="gauge2" percent={0.5} textColor={"#000000"}*/}
                {/*                        needleColor={"#cdcdcd"} nrOfLevels={20}*/}
                {/*                        formatTextValue={value => 2155 + ' л/м'}/>*/}
                {/*        </Card>*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <Card title="Кол-во воды" bordered={false}>*/}
                {/*            <div style={{textAlign: 'center'}}>*/}
                {/*                <WaterWave height={135} percent={34}/>*/}
                {/*            </div>*/}
                {/*        </Card>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

                <Row gutter={62} className={"row"}>
                    <Col>
                        <Card title="Скорость разливки" bordered={false}>
                            <GaugeChart id="gauge1" percent={0.5} textColor={"#000000"}
                                        needleColor={"#cdcdcd"} nrOfLevels={20}
                                        formatTextValue={value => 2 + ' м/мин'}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Температура охладителя на входе" bordered={false}>
                            <GaugeChart id="gauge3" percent={0.22} textColor={"#000000"}
                                        needleColor={"#cdcdcd"}
                                        formatTextValue={value => 22 + ' °C'}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Уровень металла" bordered={false}>
                            <GaugeChart id="gauge4" percent={0.66} textColor={"#000000"}
                                        needleColor={"#cdcdcd"} nrOfLevels={30}
                                        colors={["#FF5F6D", "#FFC371"]}
                                        arcWidth={0.3}
                                        formatTextValue={value => 666}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Температура охладителя на выходе" bordered={false}>
                            <GaugeChart id="gauge5" percent={0.99} textColor={"#000000"}
                                        needleColor={"#cdcdcd"}
                                        formatTextValue={value => 99 + ' °C'}/>
                        </Card>
                    </Col>
                </Row>

                <Row className={"row"}>
                    <Col span={24}>
                        <ChartCard
                            title="Наработка гильзы"
                            total="78%"
                            contentHeight={46}
                        >
                            <MiniProgress percent={78} strokeWidth={8} target={80}/>
                        </ChartCard>
                    </Col>
                </Row>

                <Row className={"row"}>
                    <Col span={24}>
                        <ChartCard
                            title="Вероятность отказа"
                            total="78%"
                            contentHeight={46}
                        >
                            <MiniProgress percent={78} strokeWidth={8} target={80}/>
                        </ChartCard>
                    </Col>
                </Row>

                <Row className={"row"}>
                    <Col span={24}>
                        <ChartCard title="Показатели температуры за месяц" contentHeight={134}>
                            <MiniArea line height={45} data={visitData}/>
                        </ChartCard>
                    </Col>
                </Row>
            </div>
        </Content>
    )
};