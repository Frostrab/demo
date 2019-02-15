import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF2 from './TableF2';
import DisplayGroup from './DisplayGroup';
import CreateGroup from './CreateGroup';
import CopyGroup from './CopyGroup';
import DeleteGroup from './DeleteGroup';
import EditGroup from './EditGroup';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marGroupinTop:20}}>กลุ่มตัวชี้วัด</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF2 />

                <DisplayGroup />

                <CreateGroup />

                <CopyGroup />

                <DeleteGroup />

                <EditGroup />
            </div>
        )
    }
}