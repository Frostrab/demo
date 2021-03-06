import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class SaleData extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Sale Data (กรอกเฉพาะ Material ที่มีการขาย)" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Sale Org. *</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Distribution Channel *</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} ></Label>
                        <Col sm={3}>
                        {/* <Input type="email" name="email" id="exampleEmail" /> */}
                        </Col>  
                        <Label for="exampleEmail" sm={1} >MaterialGroup 1 </Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Delivery Plant</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>MaterialGroup 2</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >TaxClassification</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >MaterialGroup 3</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} ></Label>
                        <Col sm={3}>
                        {/* <Input type="email" name="email" id="exampleEmail" /> */}
                        </Col>  
                        <Label for="exampleEmail" sm={1} >MaterialGroup 4</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >Product Hierarchy</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>  
                        <Label for="exampleEmail" sm={1} >MaterialGroup 5</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >Acct assignment grp*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>  
                        <Label for="exampleEmail" sm={1} >Matl. Statistics grp</Label>
                        <Col sm={1}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>     
                        <Label for="exampleEmail" sm={1} >Availability check </Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                 
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >Item Catagory Group*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>  
                        <Label for="exampleEmail" sm={1} >Transport Group*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>     
                        <Label for="exampleEmail" sm={1} >Loading Group*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                 
                      </FormGroup>
                  </Form>
              </Panel>             
            </Collapse>
            </div>
        )
    }
}
