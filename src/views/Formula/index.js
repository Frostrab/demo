import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF3 from './TableF3';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>หลักเกณฑ์</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF3 />
            </div>
        )
    }
}