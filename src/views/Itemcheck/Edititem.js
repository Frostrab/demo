
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Collapse, Button,  } from 'antd';
import Formitem from './Formitem';
import Tableitem from './Tableitem';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}


export default class Edititem extends PureComponent{
    render(){
    return(
        <div>
            <h2>แก้ไขสินค้าสำหรับการประเมิณ CA</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="รายละเอียด" key="1">
           <Formitem />
          </Panel>
          <Panel header="สินค้าสำหรับการประเมิณ CA" key="2">
        <Button type="primary" style={{marginBottom:10 , marginTop:10}}>เพิ่ม</Button>{' '}
           <Tableitem />
          </Panel>
        </Collapse>
        <Button color="warning" style={{marginBottom:10 , marginTop:10}}>ย้อนกลับ</Button>{' '}
        <Button type="primary" style={{marginBottom:10 , marginTop:10}}>บันทึก</Button>{' '}
   
        </div>
    )
        
    }   
}
