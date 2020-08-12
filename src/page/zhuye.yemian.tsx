import React, {CSSProperties} from "react";
import {Layout, Menu, Breadcrumb} from 'antd';

const yangshi: CSSProperties = {
    height: '32px',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '16px'
}

export class ZhuyeYemian extends React.Component<any, any>
{
    state = {
        collapsed: false,
    };


    onCollapse = (collapsed: any) =>
    {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render()
    {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div style={yangshi}/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2">
                            Option 2
                        </Menu.Item>
                        <Menu.SubMenu key="sub1" title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sub2" title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="9"/>
                    </Menu>
                </Layout.Sider>
                <Layout>
                    <Layout.Header style={{padding: 0, background: '#fff'}}/>
                    <Layout.Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, minHeight: 360, background: '#fff'}}>
                            Bill is a cat.
                        </div>
                    </Layout.Content>
                    <Layout.Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
                </Layout>
            </Layout>
        );
    }
}