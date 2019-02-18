import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF7 from './TableF7';
import Displaycheck from './Displaycheck';
import Createcheck from './Createcheck';
import Editcheck from './Editcheck';
import Deletecheck from './Deletecheck';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>สินค้านับสต็อก</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF7 />

                <Displaycheck />

                <Createcheck />

                <Editcheck />

                <Deletecheck />
            </div>
        )
    }
}