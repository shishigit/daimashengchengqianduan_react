import {Button} from "antd";
import React from "react";
import './Dengluye.css'

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
                <br/>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}

