import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio, Button, Select } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

  const Option = Select.Option;
   

export default class TableGroup extends PureComponent{

state ={
  data:[{
    key: '1',
    indicator: 'Indicator1',
    max:10,
    type: 'ใส่จำนวน',
    unit:'มีผลใช้งาน'
  },],

  col1:[{
    title: 'ตัวชี้วัด',
    dataIndex: 'indicator',
    width:'40%',
    render: () => (
        <Select defaultValue="Indicator1">
            <Option value={this.state.indicator}>{this.state.indicator}</Option>
            
        </Select>
    ),
  },
  {
    title: 'คะแนนเต็ม',
    dataIndex: 'max',
    width:'10%',
   
  },
  {
    title: 'รูปแบบการกรอกข้อมูล',
    dataIndex: 'type',
    width:'10%',
   
  },
  
  {
    title: 'หน่วย',
    dataIndex: 'unit',
    width:'20%',
   
  },]
}

    
    render(){
        return(
            <div>
                
  <Table 
  style={{marginTop:20}}
  bordered={true}
  columns={this.state.col1} 
  dataSource={this.state.data} 
  onChange={onChange}
  
  />,
            </div>
        )
    }
}







          