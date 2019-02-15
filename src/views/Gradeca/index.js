import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF9 from './TableF9';
import Displaygrade from './Displaygrade';
import Creategrade from './Creategrade';
import Copygrade from './Copygrade';
import Editgrade from './Editgrade';
import Deletegrade from './Deletegrade';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>ตารางเกรด CA</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF9 />

                <Displaygrade />

                <Creategrade />

                <Copygrade />

                <Editgrade />

                <Deletegrade />

            </div>
        )
    }
}