import React, {PureComponent} from 'react'


import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import TableF5 from './TableF5';
import Displaytimetest from './Displaytimetest';
import Createtimetest from './Createtimetest';
import Deletetimetest from './Deletetimetest';
import Edittimetest from './Edittimetest';

export default class index extends PureComponent{
    render(){
        return(
            <div>
                
                <h2 style={{marginTop:20}}>ระยะเวลาการประเมิณ</h2>
                <Button type="primary">สร้างใหม่</Button>
                <TableF5 />

                <Displaytimetest />

                <Createtimetest />

                <Deletetimetest />

                <Edittimetest />
            </div>
        )
    }
}