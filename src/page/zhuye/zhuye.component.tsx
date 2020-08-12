import React from "react";
import {Layout, Menu, Breadcrumb} from 'antd';

import css from './zhuye.module.css'

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export class ZhuyeComponent extends React.Component<any, any>
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
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className={css.logo}/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2">
                            Option 2
                        </Menu.Item>
                        <SubMenu key="sub1" title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9"/>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={` ${css.site_layout_background} `} style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className={css.site_layout_background} style={{padding: 24, minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}