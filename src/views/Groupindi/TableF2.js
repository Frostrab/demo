import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF2 extends PureComponent{

state ={
  data:[{
    key: '1',
    name: 'กลุ่มตัวชี้วัด1',
    max: 10,
    status:''
  }, {
    key: '2',
    name: 'กลุ่มตัวชี้วัด2',
    max: 10,
    status:''
  }, {
    key: '3',
    name: 'กลุ่มตัวชี้วัด3',
    max: 15,
    status:''
  }, {
    key: '4',
    name: 'กลุ่มตัวชี้วัด4',
    max: 15,
    status:''
  }],

  col1:[{
    title: 'ชื่อกลุ่มตัวชี้วัด',
    dataIndex: 'name',
    filters: [{
      text: 'Joe',
      value: 'Joe',
    }, {
      text: 'Jim',
      value: 'Jim',
    }, {
      text: 'Submenu',
      value: 'Submenu',
      children: [{
        text: 'Green',
        value: 'Green',
      }, {
        text: 'Black',
        value: 'Black',
      }],
    }],
   
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  }, {
    title: 'คะแนนเต็ม',
    dataIndex: 'max',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'สถานะ',
    dataIndex: 'status',
    filters: [{
      text: 'London',
      value: 'London',
    }, {
      text: 'สถานะ',
      value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  
  {
    title: '',
    dataIndex: 'address',
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







          