import React, { PureComponent } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Collapse, DatePicker } from 'antd';
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;
const { MonthPicker, RangePicker } = DatePicker;


function callback(key) {
  console.log(key);
}

const text = '';

export default class Subplan extends PureComponent {

  render() {
    return (
      <div style={{marginBottom:20}}>
        <h2 style={{marginBottom:20}}>สร้างแผนงานย่อย</h2>
      <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginBottom:20}}>
      <Panel key="1" header='รายละเอียด'>
        
      <Form>
        <FormGroup row>
          <Label for="year" sm={2}>ปี</Label>
          <Col sm={3}>
            <DatePicker />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="plan" sm={2}>กิจกรรม</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
          </FormGroup>
        <FormGroup row>
          <Label sm={2}>แผนงาน</Label>
          <Col sm={3}>
            <Input type="select" name="activitie" id="activitie" defaultValue="กรุณาเลือกกลุ่มกิจกรรม" />
          </Col>
          <Label sm={2}>แผนงานย่อย</Label>
          <Col sm={3}>
            <Input type="text" name="activitie" id="activitie" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="group" sm={2}>หน่วยงาน</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
          <Col>
          <Label sm={4}></Label>
          <Input type="checkbox" name="check" id="exampleCheck"/> 
          <Label for="checkbox" >หน่วยงานภายใต้</Label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cost" sm={2}>ศูนย์ต้นทุน</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
      
          <Label for="budget" sm={2}>การคุมงบ</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup check>
        <Col sm={12}>
        <Label sm={2}></Label>
        <Input type="checkbox" name="check" id="exampleCheck"/> 
        <Label for="checkrate" check>ประเมิณ</Label>
        </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
          <Label for="actperone" sm={2}>จำนวนกิจกรรมต่อคน</Label>
          <Col sm={3}>
            <Input type="text" name="select" id="exampleSelect" />
          </Col>
          <Label for="per" sm={1}>ต่อ</Label>
          <Col sm={2}>
          <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row style={{marginBottom:30}}>
          <Label for="status" sm={2}>สถานะ</Label>
          <Col sm={3}>
            <Input type="select" name="select" id="status" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="M1" sm={1}>เดือน 1</Label>
          <Col sm={2}>
            <Input type="text" name="M1" id="M1" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M2" sm={1}>เดือน 2</Label>
          <Col sm={2}>
            <Input type="text" name="M2" id="M2" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M3" sm={1}>เดือน 3</Label>
          <Col sm={2}>
            <Input type="text" name="M3" id="M3" />
          </Col>
          <Label for="per" sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="M4" sm={1}>เดือน 4</Label>
          <Col sm={2}>
            <Input type="text" name="M4" id="M4" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M5" sm={1}>เดือน 5</Label>
          <Col sm={2}>
            <Input type="text" name="M5" id="M5" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M6" sm={1}>เดือน 6</Label>
          <Col sm={2}>
            <Input type="text" name="M6" id="M6"/>
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="M7" sm={1}>เดือน 7</Label>
          <Col sm={2}>
            <Input type="text" name="M7" id="M7" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M8" sm={1}>เดือน 8</Label>
          <Col sm={2}>
            <Input type="text" name="M8" id="M8" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M9" sm={1}>เดือน 9</Label>
          <Col sm={2}>
            <Input type="text" name="M9" id="M9" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="M10" sm={1}>เดือน 10</Label>
          <Col sm={2}>
            <Input type="text" name="M10" id="M10" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M11" sm={1}>เดือน 11</Label>
          <Col sm={2}>
            <Input type="text" name="M11" id="M11" />
          </Col>
          <Label sm={1}>บาท</Label>
        
          <Label for="M12" sm={1}>เดือน 12</Label>
          <Col sm={2}>
            <Input type="text" name="M12" id="M12" />
          </Col>
          <Label sm={1}>บาท</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="Total" sm={1}>รวม</Label>
          <Col sm={2}>
            <Input type="text" name="Total" id="Total" />
          </Col>
          <Label for="per" sm={1}>บาท</Label>
        </FormGroup>
      </Form>
      </Panel>
      <Panel header="รายการ" key="2">


      </Panel>
      </Collapse>
      
      <Button color="warning">ย้อนกลับ</Button>{' '}
      <Button color="primary">บันทึก</Button>{' '}
      </div>
    );
  }
}