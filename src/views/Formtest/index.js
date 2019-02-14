import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF4 from './TableF4';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>แบบประเมิณ</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF4 />
            </div>
        )
    }
}