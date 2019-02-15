import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF4 from './TableF4';
import Displayformula from './Displayformula';
import Createformula from './Createformula';
import Deleteformula from './Deleteformula';
import Editformula from './Editformula';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>แบบประเมิณ</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF4 />

                <Displayformula />

                <Createformula />

                <Deleteformula />

                <Editformula />
            </div>
        )
    }
}