import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF9 from './TableF9';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>ตารางเกรด CA</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF9 />
            </div>
        )
    }
}