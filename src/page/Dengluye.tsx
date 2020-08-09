import {Button} from "antd";
import React from "react";
import {ceshizhuangtai} from "./zhuangtai";

export function Dengluye(shuxing: { ceshi: string })
{
    let neibuceshi: string = 'ffffffffffffffff'
    return (
        <div>
            {neibuceshi}
            {ceshizhuangtai}
            {shuxing.ceshi}
            <Button type="primary" style={{width: 300, color: 'black'}}>Button</Button>
        </div>
    )
}
