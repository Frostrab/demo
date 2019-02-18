
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button, } from 'antd';
import Formindicate from './Formindicate';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Createindicate extends PureComponent{
    render(){
    return(
        <div>
            <h2>สร้างตัวชี้วัด</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Formindicate />
          </Panel>
        </Collapse>,
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
        <Button type="primary" style={{marginBottom:10 , marginTop:10}}>บันทึก</Button>{' '}
   
        </div>
    )
        
    }   
}
