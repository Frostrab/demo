
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
  
  export default class Formgrade extends PureComponent {
  
   
  
    render() {
      return (
        <div style={{marginBottom:20}} >
       
       <InputGroup compact>
            <Col sm={2}>ตั้งแต่</Col>
            <Col sm={2}>ปีเริ่มต้น</Col>
            <Col span={3}>
            <DatePicker onChange={onChange} />
            </Col>
            <Col sm={3}>ไตรมาสเริ่มต้น</Col>
            <Col sm={3}>
            <Select defaultValue="ไตรมาส 1">
            <Option value="ไตรมาส 1">ไตรมาส 1</Option>
            <Option value="ไตรมาส 2">ไตรมาส 2</Option>
            <Option value="ไตรมาส 3">ไตรมาส 3</Option>
            <Option value="ไตรมาส 4">ไตรมาส 4</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
          <InputGroup compact>
            <Col sm={2}>จนถึง</Col>
            <Col sm={2}>ปีสิ้นสุด</Col>
            <Col span={3}>
            <DatePicker onChange={onChange} />
            </Col>
            <Col sm={3}>ไตรมาสสิ้นสุด</Col>
            <Col sm={3}>
            <Select defaultValue="ไตรมาส 1">
            <Option value="ไตรมาส 1">ไตรมาส 1</Option>
            <Option value="ไตรมาส 2">ไตรมาส 2</Option>
            <Option value="ไตรมาส 3">ไตรมาส 3</Option>
            <Option value="ไตรมาส 4">ไตรมาส 4</Option>
          </Select>
            </Col>
          </InputGroup>
          <br /> 
         
     
          
        </div>
      );
    }
  }