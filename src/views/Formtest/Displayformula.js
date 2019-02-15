
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import Formformula from './Formformula';
import Tableformula from './Tableformula';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Displayformula extends PureComponent{
    render(){
    return(
        <div>
            <h2>รายละเอียดแบบประเมิณ</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Formformula />
          </Panel>
          <Panel header="รายการ" key="2">
          <Tableformula />
          </Panel>
        </Collapse>
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
   
        </div>
    )
        
    }   
}
