
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import Formcheck from './Formcheck';
import Tablecheck from './Tablecheck';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Displaycheck extends PureComponent{
    render(){
    return(
        <div>
            <h2>รายละเอียดสินค้าสำหรับนับสต็อค</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Formcheck />
          </Panel>
          <Panel header="สินค้าสำหรับนับสต็อค" key="2">
          <Tablecheck />
          </Panel>
        </Collapse>
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
   
        </div>
    )
        
    }   
}
