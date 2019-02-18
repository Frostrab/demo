
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

} from 'antd';
import 'antd/dist/antd.css';
import TextArea from 'antd/lib/input/TextArea';
  
const InputGroup = Input.Group;
const Option = Select.Option;
  
  function callback(key) {
    console.log(key);
  }
  
  const Step = Steps.Step;
  
  export default class Form3 extends PureComponent {
  
   
    state ={
      checkNick: false,
    
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
            <Col sm={4}> ชื่อหลักเกณฑ์</Col>
            <Col span={12}>
            <Input style={{width:'100%'}} type="text" name="indiname" id="indiname" placeholder="Criterial" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> ข้อความที่ถูกแสดงบนแบบฟอร์ม</Col>
            <Col span={12}>
            <TextArea  name="textonform" id="textonform" placeholder="Criterial" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
          <Col sm={4}>ข้อความที่ถูกแสดงบนรายงาน</Col>
            <Col span={12}>
            <TextArea  name="textonreport" id="textonreport" placeholder="Criterial" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}> ความถี่การกรอกข้อมูล</Col>
            <Col span={12}>
            <Select defaultValue="รายสัปดาห์">
            <Option value="Weekly">รายสัปดาห์</Option>
            <Option value="Monthly">รายเดือน</Option>
            <Option value="Quater">รายไตรมาส</Option>
          </Select>
            </Col>
          </InputGroup>
          <br />
           
          <InputGroup compact>
            <Col sm={4}>ฟังก์ชันการคิดคะแนน</Col>
            <Col span={12}>
            <Input style={{width:'100%'}} type="text" name="format" id="format" placeholder="Criterial" />
            </Col>
          </InputGroup>
          <br />  
          <InputGroup compact>
            <Col sm={4}>คะแนนเต็ม</Col>
            <Col span={12}>
            <Select defaultValue="100">
            <Option value="10">100</Option>
            <Option value="15">150</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
          <Col sm={4}>จุดมุ่งหมายในการจัดทำเกณฑ์</Col>
            <Col span={12}>
            <TextArea  name="textonreport" id="textonreport" placeholder="Criterial"  />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>เมนู</Col>
            <Col span={12}>
            <Select defaultValue="เมนูยอดขาย">
            <Option value="เมนู_1">เมนู_1</Option>
            <Option value="เมนู_2">เมนู_2</Option>
          </Select>
          </Col>
          </InputGroup>
          <br /> 
         
          
          <InputGroup compact>
            <Col sm={4}>สถานะ</Col>
            <Col span={12}>
            <Select defaultValue="สถานะ">
            <Option value="มีผลใช้งาน">มีผลใช้งาน</Option>
            <Option value="ไม่มีผลใช้งาน">ไม่มีผลใช้งาน</Option>
          </Select>
          </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>ตัวแปรเพิ่มเติม 1</Col>
            <Col span={12}>
            <Input  style={{width:'100%'}} type="text" name="indiname" id="indiname" />
            </Col>
            <Col sm={3}>(กรอกตัวเลขเท่านั้น)</Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>ตัวแปรเพิ่มเติม 2</Col>
            <Col span={12}>
            <Input  style={{width:'100%'}} type="text" name="indiname" id="indiname" />
            </Col>
            <Col sm={3}>(กรอกตัวเลขเท่านั้น)</Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>ตัวแปรเพิ่มเติม 3</Col>
            <Col span={12}>
            <Input  style={{width:'100%'}} type="text" name="indiname" id="indiname" />
            </Col>
            <Col sm={3}>(กรอกตัวเลขเท่านั้น)</Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>หมายเหตุ</Col>
            <Col span={12}>
            <TextArea name="comment" id="comment" />
            </Col>
          </InputGroup>
          <br /> 
         
     
        
        </div>
      );
    }
  }