
import React, {PureComponent} from 'react';

import 'antd/dist/antd.css';
import { 
    Collapse, 
    DatePicker, 
    Steps, 
    Card, 
    Table,
    Input, 
    Icon, 
    Col, 
    Button,
    Select,
    Checkbox,
    Form,

} from 'antd';
import 'antd/dist/antd.css';
import TextArea from 'antd/lib/input/TextArea';
  
const InputGroup = Input.Group;
const Option = Select.Option;
  
  function callback(key) {
    console.log(key);
  }
  
  const Step = Steps.Step;

  
  export default class Formindicate extends PureComponent {
  
   
    state ={
      checkNick: false,
      col1 :[{
        title:"GL Account",
        dataIndex:"GLAcc",
        key:"GLAcc",
        width:"50%",
    
      },
      {
        title:"IO",
        dataIndex:"IO",
        key:"IO",
        width:"50%",
    
      },]
    }

    
  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    })
  }
  
    render() {


      return (
        <div style={{marginBottom:20}} >
       
        
          <InputGroup compact>
            <Col sm={4}>
            ชื่อตัวชี้วัด
            </Col>
            <Col span={12}>
            <Input style={{width:'100%'}} type="text" name="indiname" id="indiname" placeholder="Indicator1"  />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> ข้อความที่ถูกแสดงบนแบบฟอร์ม</Col>
            <Col span={12}>
            <TextArea  name="textonform" id="textonform" placeholder="Indicator1" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
          <Col sm={4}>ข้อความที่ถูกแสดงบนรายงาน</Col>
            <Col span={12}>
            <TextArea  name="textonreport" id="textonreport" placeholder="Indicator1" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> คะแนนเต็ม</Col>
            <Col span={12}>
            <Select defaultValue="ไม่ระบุคะแนน">
            <Option value="10">10</Option>
            <Option value="15">15</Option>
            <Option value="20">20</Option>
            <Option value="50">50</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> รูปแบบการกรอกข้อมูล</Col>
            <Col sm={3}>
            <Select defaultValue="ใส่จำนวน">
            <Option value="ใส่จำนวน">ใส่จำนวน</Option>
            <Option value="ใส่ตัวอักษร">ใส่ตัวอักษร</Option>
            
          </Select>
          </Col>
          <Col sm={3}>
          <Select defaultValue="Activity Unit">
            <Option value="10">10</Option>
            <Option value="15">15</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> ฟังก์ชันการคิดคะแนน</Col>
            <Col span={12}>
            <Input style={{width:'100%'}} type="text" name="format" id="format" />
            </Col>
          </InputGroup>
          <br /> 
          <Col sm={4}></Col>
          <Col>
          <Checkbox
            checked={this.state.checkNick}
            onChange={this.handleChange}
          >
            Nickname is required
          </Checkbox>
          </Col>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> สถานะ</Col>
            <Col span={12}>
            <Select defaultValue="สถานะ">
            <Option value="มีผลใช้งาน">มีผลใช้งาน</Option>
            <Option value="ไม่มีผลใช้งาน">ไม่มีผลใช้งาน</Option>
          </Select>
          </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> ตัวแปรเพิ่มเติม 1</Col>
            <Col span={12}>
            <Input  style={{width:'100%'}} type="text" name="indiname" id="indiname" />
            </Col>
            <Col sm={3}> (กรอกตัวเลขเท่านั้น)</Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> ตัวแปรเพิ่มเติม 2</Col>
            <Col span={12}>
            <Input  style={{width:'100%'}} type="text" name="indiname" id="indiname" />
            </Col>
            <Col sm={3}> (กรอกตัวเลขเท่านั้น)</Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> ตัวแปรเพิ่มเติม 3</Col>
            <Col span={12}>
            <Input  style={{width:'100%'}} type="text" name="indiname" id="indiname" />
            </Col>
            <Col sm={3}> (กรอกตัวเลขเท่านั้น)</Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> หมายเหตุ</Col>
            <Col span={12}>
            <TextArea name="comment" id="comment" />
            </Col>
          </InputGroup>
          <br /> 
         
     
        
        </div>
      );
    }
  }