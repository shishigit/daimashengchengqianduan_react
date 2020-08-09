import {Button} from "antd";
import React from "react";

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
            <div>
                <br/>
                <br/>

                <Button type="primary" style={{width: 300, color: 'black'}}>Button</Button>
            </div>
        )
    }
}

