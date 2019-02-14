import React, {PureComponent} from 'react'
import TableF1 from './TableF1';


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>รายการตัวชี้วัด</h2>
                <Button type="primary">สร้างใหม่</Button>
               <TableF1 />
            </div>
        )
    }
}