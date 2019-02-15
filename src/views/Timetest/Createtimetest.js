
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import Formtimetest from './Formtimetest';
import Tablequarter from './Tablequarter';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Createtimetest extends PureComponent{
    render(){
    return(
        <div>
            <h2>สร้างระยะเวลาการประเมิณ</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Formtimetest />
          </Panel>
          <Panel header="รายการ" key="2">
        <Button type="primary" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
           <Tablequarter />
          </Panel>
        </Collapse>
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
   
        </div>
    )
        
    }   
}
