import {Button, Card, Form, Input} from "antd";
import React from "react";
import './Dengluye.css'
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

    dengluxinxi = {
        zhanghao: 'ceshi',
        mima: 'ceshi'
    }

    render(): React.ReactNode
    {
        return (
            <div className='beijing'>
                <Card
                    style={{width: 300}}
                    actions={[<Button type="primary" style={{width: '95%'}}>登录</Button>]}
                >
                    <Meta title="测试" description="测试测试测试"/>

                    <Form labelCol={{span: 4}} wrapperCol={{span: 20}} style={{marginTop: '50px'}}>
                        <Form.Item label="帐号">
                            <Input value={this.dengluxinxi.zhanghao}/>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input.Password value={this.dengluxinxi.mima}/>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

