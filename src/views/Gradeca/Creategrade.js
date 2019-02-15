
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import Formgrade from './Formgrade';
import Tablegrade from './Tablegrade';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Creategrade extends PureComponent{
    render(){
    return(
        <div>
            <h2>สร้างตารางเกรด CA</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Formgrade />
          </Panel>
          <Panel header="Item" key="2">
        <Button type="primary" style={{marginBottom:10 , marginTop:10}}>เพิ่ม</Button>{' '}
           <Tablegrade />
          </Panel>
        </Collapse>
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
        <Button type="primary" style={{marginBottom:10 , marginTop:10}}>บันทึก</Button>{' '}
   
        </div>
    )
        
    }   
}
