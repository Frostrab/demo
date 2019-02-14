import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF6 from './TableF6';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>การกำหนดระยะเวลากับแบบประเมิณ</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF6 />
            </div>
        )
    }
}