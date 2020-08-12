import {Button, Card, Form, Input} from "antd";
import React from "react";
import css from './dengluye.module.css'
import Meta from "antd/es/card/Meta";
import {browserHistory} from "../../gongju/gongju";

export class DengluyeComponent extends React.Component<any, any>
{
    private dengluxinxi = {
        zhanghao: 'ceshi',
        mima: 'ceshi'
    }

    render(): React.ReactNode
    {
        return (
            <div className={css.beijing}>
                <Card
                    style={{width: 300}}
                    actions={[
                        <Button type="primary" style={{width: '95%'}}
                                onClick={() => browserHistory.push('/zhuye')}>
                            登录
                        </Button>
                    ]}
                >
                    <Meta title="测试" description="测试测试测试"/>

                    <Form labelCol={{span: 4}} wrapperCol={{span: 20}} style={{marginTop: '50px'}}>
                        <Form.Item label="帐号">
                            <Input value={this.dengluxinxi.zhanghao} onChange={(event) =>
                            {
                                this.dengluxinxi.zhanghao = event.target.value
                                this.setState({})
                            }}/>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input.Password value={this.dengluxinxi.mima} onChange={(event) =>
                            {
                                this.dengluxinxi.mima = event.target.value
                                this.setState({})
                            }}/>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

