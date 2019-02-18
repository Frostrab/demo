import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio, Button } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF2 extends PureComponent{

state ={
  data:[{
    key: '1',
    name: 'กลุ่มตัวชี้วัด1',
    max: '10',
    status:'มีผลใช้งาน'
  }, {
    key: '2',
    name: 'กลุ่มตัวชี้วัด2',
    max: '10',
    status:'ไม่มีผลใช้งาน'
  }, {
    key: '3',
    name: 'กลุ่มตัวชี้วัด3',
    max: '15',
    status:'ไม่มีผลใช้งาน'
  }, {
    key: '4',
    name: 'กลุ่มตัวชี้วัด4',
    max: '15',
    status:'มีผลใช้งาน'
  }],

  col1:[{
    title: 'ชื่อกลุ่มตัวชี้วัด',
    dataIndex: 'name',
    width:'40%',
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
    sortDirections: ['descend','ascend'],
  }, {
    title: 'คะแนนเต็ม',
    dataIndex: 'max',
    width:'10%',
    filters:[{
      text:'10',
      value:'10',
    },{
      text:'15',
      value:'15',
    },],
    defaultSortOrder: 'descend',
    onFilter: (value, record) => record.max.indexOf(value) === 0,
    sorter: (a, b) => a.max - b.max,
  }, {
    title: 'สถานะ',
    dataIndex: 'status',
    width:'10%',
    filters: [{
      text: 'มีผลใช้งาน',
      value: 'มีผลใช้งาน',
    }, {
      text: 'ไม่มีผลใช้งาน',
      value: 'ไม่มีมีผลใช้งาน',
    }],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
    sortDirections: ['descend', 'ascend'],
  },
  
  {
    title: '',
    dataIndex: 'address',
    width:'20%',
    render: () => (
      <Radio.Group size="small" value="" >
          <Radio.Button value="display">แสดง</Radio.Button>
          <Radio.Button value="edit">แก้ไข</Radio.Button>
          <Radio.Button value="copy">คัดลอก</Radio.Button>
          <Radio.Button value="delete">ลบ</Radio.Button>
        </Radio.Group> ),
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
  
  />
            </div>
        )
    }
}







          