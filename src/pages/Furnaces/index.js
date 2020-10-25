import {Button, Input, Layout, Menu, Modal} from "antd";
import React, {useEffect, useState} from "react";
import Report from "./components/Report";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {api} from "../../api";

export default function Furnaces({match}) {
    const {Sider, Header} = Layout;
    const {SubMenu} = Menu;
    const [newItemVisible, setNewItemVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentStream, setCurrentStream] = useState("1");
    const [currentStatus, setCurrentStatus] = useState("OK");
    const [info, setInfo] = useState({});

    useEffect(() => {
        const thisInfo = api.filter(v => v.streamId === parseInt(currentStream))[0];
        setInfo(thisInfo);
    },[currentStream]);

    const handleClickSider = (event) => {
        setCurrentStream(event.key);
        setCurrentStatus(event.keyPath[1])
    };
    const handleNewItemOk = () => {
        setTimeout(() => {
            setLoading(false);
            setNewItemVisible(false);
        }, 3000)
    };

    const maxDays = 8;

    const notOkStreams = api.filter(v => v.installationDate >= "25.05.2020" && v.releaseDate <= "25.05.2020" && parseInt(v.deltaDate) >= maxDays).map(v => v.streamId).filter((v, i, a) => a.indexOf(v) === i);
    const okStreams = api.filter(v => v.installationDate >= "25.05.2020" && v.releaseDate <= "25.05.2020" && parseInt(v.deltaDate) < maxDays).map(v => v.streamId).filter((v, i, a) => notOkStreams.indexOf(v) === -1 && a.indexOf(v) === i);

    return (
        <Layout className="wrapper">
            <Header className="header">
                <Button type={"primary"} icon={<PlusCircleOutlined/>} onClick={() => setNewItemVisible(true)}>Новая
                    гильза</Button>
                <Modal
                    title="Новая гильза"
                    visible={newItemVisible}
                    onOk={handleNewItemOk}
                    onCancel={() => setNewItemVisible(false)}
                    footer={[
                        <Button key="back" onClick={() => setNewItemVisible(false)}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={handleNewItemOk}>
                            Добавить
                        </Button>,
                    ]}
                >
                    <Input placeholder="Номер гильзы"/>
                </Modal>
            </Header>
            <Layout>
                <Sider className="site-layout-background" width={225}>
                    <Menu
                        onClick={handleClickSider}
                        mode="inline"
                        defaultOpenKeys={["NOT_OK", "OK"]}
                        style={{height: '100%'}}
                        selectedKeys={currentStream}
                    >
                        <SubMenu key="NOT_OK" icon={<CloseCircleOutlined/>} title="Что то не так">
                            {notOkStreams.map(stream => <Menu.Item key={stream}>{`Ручей ${stream}`}</Menu.Item>)}
                        </SubMenu>
                        <SubMenu key="OK" icon={<CheckCircleOutlined/>} title="Все хорошо">
                            {okStreams.map(stream => <Menu.Item key={stream}>{`Ручей ${stream}`}</Menu.Item>)}
                        </SubMenu>

                    </Menu>
                </Sider>
                <Report info={info} status={currentStatus}/>
            </Layout>
        </Layout>
    )
}