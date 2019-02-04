import React, { PureComponent } from 'react'
import NewTab from './NewTab.js'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Collapse, DatePicker, Radio, Checkbox, Row } from 'antd';
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;
const { MonthPicker, RangePicker } = DatePicker;

const RadioGroup = Radio.Group;

function callback(key) {
  console.log(key);
}
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

export default class Newprop extends PureComponent {

    state = {
        value: 1,
      }
    
      onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }  

  render() {
    return (
      <div style={{marginBottom:20}}>
        <h2 style={{marginBottom:20}}>สร้างข้อตกลงทางการค้า</h2>
      <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginBottom:20}}>
      <Panel key="1" header='รายละเอียด'>
        
      <Form>
        <FormGroup row>
          <Label for="docNo" sm={2}>เลขที่เอกสาร</Label>
          <Col sm={3}>
          <Input type="text" name="activitie" id="activitie" disabled />
            
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>วันที่</Label>
          <Col sm={3}>
          <DatePicker />
          </Col>
          </FormGroup>  
          <FormGroup row>
          <Label for="cost" sm={2}>ผู้ขออนุมัติ</Label>
          <Col sm={3}>
            <Input type="select" name="cost" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="group" sm={2}>ร้านค้า</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        
        
        <FormGroup row style={{marginBottom:30}}>
          <Label  sm={2}>ที่อยู่</Label>
          <Col sm={7}>
            <Input type="textarea" name="select" id="status" disabled />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>ผู้ติดต่อ</Label>
          <Col sm={7}>
            <Input type="text" name="select" id="status"  disabled />
          </Col>
        </FormGroup>  
        <FormGroup row>
          <Label  sm={2}>เบอร์ติดต่อ</Label>
          <Col sm={7}>
            <Input type="text" name="select" id="status"  disabled />
          </Col>
        </FormGroup>  
        <FormGroup row style={{marginBottom:30}}>
          <Label  sm={2}>โครงการ</Label>
          <Col >
        <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>SH</Radio>
        <Radio value={2}>SE</Radio>
        <Radio value={3}>SN</Radio>
        <Radio value={4}>SO</Radio>
        </RadioGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="activitie" sm={2}>ระยะเวลาที่เริ่มต้น</Label>
          <Col sm={3}>
          <DatePicker />
          </Col>
        <Label for="activitie" sm={2}>ระยะเวลาที่สิ้นสุด</Label>
          <Col sm={3}>
          <DatePicker />
          </Col>  
          </FormGroup>  
          <FormGroup row>
          <Label for="cost" sm={2}>เงื่อนไขการจ่าย</Label>
          <Col sm={3}>
            <Input type="select" name="cost" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cost" sm={2}>ระยะเวลาโครงการ</Label>
          <Col sm={3}>
            <Input type="text" name="cost" id="exampleSelect"  disabled />
          </Col>
        <Label  sm={2}>เดือน</Label>
         
        </FormGroup>
        <FormGroup row>
          <Label for="cost" sm={2}>วัตถุประสงค์</Label>
          <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <Row>
                <Col span={8}><Checkbox value="A">1.เพื่อสร้างความสัมพันธุ์ที่ดีกับร้านค้า</Checkbox></Col>
                <Col span={8}><Checkbox value="B">2.เพื่อเพิ่มยอดขายสินค้า</Checkbox></Col>
                <Col span={8}><Checkbox value="C">3.เพื่อสกัดกั้นคู่แข่ง</Checkbox></Col>
                <Col span={8}><Checkbox value="D">4.เพื่อต่อระยะโครงการ</Checkbox></Col>
                
            </Row>
            </Checkbox.Group>
          </FormGroup>
      </Form>
      

      </Panel>
      <Panel header='เป้าหมาย'>
      <NewTab />
      </Panel>
      </Collapse>
      
      <Button color="warning">ย้อนกลับ</Button>{' '}
      <Button color="primary">บันทึก</Button>{' '}
      </div>
    );
  }
}