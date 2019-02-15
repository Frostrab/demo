import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF6 from './TableF6';
import Displaymanage from './Displaymanage';
import Createmanage from './Createmanage';
import Copymanage from './Copymanage';
import Deletemanage from './Deletemanage';
import Editmanage from './Editmanage';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>รายการการกำหนดระยะเวลากับแบบประเมิณ</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF6 />

                <Displaymanage />

                <Createmanage />

                <Copymanage />

                <Deletemanage />

                <Editmanage />
            </div>
        )
    }
}