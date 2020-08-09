import {Button} from "antd";
import React from "react";

export function Dengluye(shuxing: { shuxing: string })
{
    return (
        <div>
            {shuxing.shuxing}
            <br/>
            <br/>

            <Button type="primary" style={{width: 300, color: 'black'}}>Button</Button>
        </div>
    )
}
