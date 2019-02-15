
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

function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function callback(key) {
    console.log(key);
  }
  
  const Step = Steps.Step;
  
  export default class Form5 extends PureComponent {
  
   
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
            <Col sm={4}>ปี</Col>
            <Col span={12}>
            <Input style={{width:'100%'}} type="text" name="indiname" id="indiname" placeholder="" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>ชื่อ Period</Col>
            <Col span={12}>
            <Input style={{width:'100%'}} type="text" name="indiname" id="indiname" placeholder="" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>ประเภท Period</Col>
            <Col span={12}>
            <Select defaultValue="รายสัปดาห์">
            <Option value="รายสัปดาห์">รายสัปดาห์</Option>
            <Option value="รายเดือน">รายเดือน</Option>
            <Option value="รายไตรมาส">รายไตรมาส</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>สถานะ</Col>
            <Col span={12}>
            <Select defaultValue="ยังไม่มีผลใช้งาน">
            <Option value="มีผลใช้งาน">มีผลใช้งาน</Option>
            <Option value="ยังไม่มีผลใช้งาน">ยังไม่มีผลใช้งาน</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>วันที่เริ่มต้น</Col>
            <Col span={12}>
            <DatePicker onChange={onChange} />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>วันที่สิ้นสุด</Col>
            <Col span={12}>
            <DatePicker onChange={onChange} />
            </Col>
          </InputGroup>
          <br /> 
     
         
        </div>
      );
    }
  }