
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import Tableindiname3 from './Tableindiname3';
import Form3 from './Form3';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Delete3 extends PureComponent{
    render(){
    return(
        <div>
            <h2>ลบหลักเกณฑ์</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Form3 />
          </Panel>
          <Panel header="รายการ" key="2">
          <Tableindiname3 />
          </Panel>
        </Collapse>
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
        <Button type="danger" style={{marginBottom:10 , marginTop:10}}>ลบ</Button>{' '}
   
        </div>
    )
        
    }   
}
