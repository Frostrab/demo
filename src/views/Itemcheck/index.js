import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF8 from './TableF8';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>สินค้าสำหรับการประเมิณ CA</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF8 />
            </div>
        )
    }
}