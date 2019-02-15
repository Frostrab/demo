
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import Formgrade from './Formgrade';
import Tablegrade from './Tablegrade';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Deletegrade extends PureComponent{
    render(){
    return(
        <div>
            <h2>ลบตารางเกรด CA</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Formgrade />
          </Panel>
          <Panel header="Item" key="2">
           <Tablegrade />
          </Panel>
        </Collapse>
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
        <Button type="danger" style={{marginBottom:10 , marginTop:10}}>ลบ</Button>{' '}
   
        </div>
    )
        
    }   
}
