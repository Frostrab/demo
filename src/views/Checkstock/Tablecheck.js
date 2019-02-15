import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio, Button, Select } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

  const Option = Select.Option;
   

export default class Tablecheck extends PureComponent{

state ={
  data:[{
    key: '1',
    seq: '1',
    name:'Item01',
    unit: 'ลัง',
    group:'Itemgroup1'
  },
  {
    key: '2',
    seq: '2',
    name:'Item02',
    unit: 'กล่อง',
    group:'Itemgroup2'
  },
  {
    key: '3',
    seq: '3',
    name:'Item03',
    unit: 'ถาด',
    group:'Itemgroup3'
  },],

  col1:[{
    title: 'ลำดับ',
    dataIndex: 'seq',
    width:'10%',
   
  },
  {
    title: 'ชื่อสินค้า',
    dataIndex: 'name',
    width:'40%',
   
  },
  {
    title: 'หน่วย',
    dataIndex: 'unit',
    width:'20%',
   
  },
  {
    title: 'กลุ่มสินค้า',
    dataIndex: 'group',
    width:'10%',
   
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







          