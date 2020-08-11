import {Avatar, Card} from "antd";
import React from "react";
import './Dengluye.css'
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import Meta from "antd/es/card/Meta";

interface shuxing
{
    shuxing: string
}

interface zhuangtai
{
    zhuangai: number
}

export class Dengluye extends React.Component<shuxing, zhuangtai>
{

    render(): React.ReactNode
    {
        return (
            <div className='beijing'>
                <Card
                    style={{width: 300}}
                    actions={[
                        <SettingOutlined key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        )
    }
}

