
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import FormGroup from './FormGroup';
import TableGroup from './TableGroup';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class CreateGroup extends PureComponent{
    render(){
    return(
        <div>
            <h2>สร้างกลุ่มตัวชี้วัด</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <FormGroup />
          </Panel>
          <Panel header="รายการ" key="2">
          <Button type="primary" style={{marginBottom:10 , marginTop:10}}>เพิ่ม</Button>{' '}
          <TableGroup />
          </Panel>
        </Collapse>,
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
        <Button type="primary" style={{marginBottom:10 , marginTop:10}}>บันทึก</Button>{' '}
   
        </div>
    )
        
    }   
}
