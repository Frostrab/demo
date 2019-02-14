import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF5 from './TableF5';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>ระยะเวลาการประเมิณ</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF5 />
            </div>
        )
    }
}