import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF3 from './TableF3';
import Display3 from './Display3';
import Create3 from './Create3';
import Copy3 from './Copy3';
import Delete3 from './Delete3';
import Edit3 from './Edit3';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>หลักเกณฑ์</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF3 />

                <Display3 />

                <Create3 />

                <Copy3 />

                <Delete3 />

                <Edit3 />
            </div>
        )
    }
}