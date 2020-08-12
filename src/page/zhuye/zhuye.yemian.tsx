import React from "react";
import {Layout, Menu} from 'antd';
import css from './zhuye.module.css'

export class ZhuyeYemian extends React.Component<{}, {}>
{
    private collapsed = false

    render()
    {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout.Sider collapsible
                              collapsed={this.collapsed}
                              onCollapse={collapsed =>
                              {
                                  this.collapsed = collapsed;
                                  this.setState({})
                              }}
                >
                    <div className={css.logo}/>
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
                    </Menu>
                </Layout.Sider>
                <Layout>
                    <Layout.Header style={{padding: 0, background: '#fff'}}/>
                    <Layout.Content style={{margin: '0 16px'}}>
                        <div style={{margin: '16px 0'}}/>
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