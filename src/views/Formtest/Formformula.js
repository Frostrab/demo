
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
  
  export default class Formformula extends PureComponent {
  
   
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
            <Col sm={4}>ชื่อแบบประเมิณ</Col>
            <Col span={12}>
            <Input style={{width:'100%'}} type="text" name="indiname" id="indiname" placeholder="แบบประเมิณ" />
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={4}>สถานะ</Col>
            <Col span={12}>
            <Select defaultValue="มีผลใช้งาน">
            <Option value="มีผลใช้งาน">มีผลใช้งาน</Option>
            <Option value="ยังมีผลใช้งาน">ยังมีผลใช้งาน</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
         
        
        </div>
      );
    }
  }