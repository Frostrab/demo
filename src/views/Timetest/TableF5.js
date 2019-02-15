import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF5 extends PureComponent{

state ={
  data:[{
    key: '1',
    year: '2570',
    Ptype: 'รายไตรมาส',
    Pname: '2570 รายไตรมาส',
    status:'ยังไม่มีผลใช้งาน'
  }, {
    key: '2',
    year: '2570',
    Ptype: 'รายสัปดาห์',
    Pname: '2570 รายสัปดาห์',
    status:'ยังไม่มีผลใช้งาน'
  }, {
    key: '3',
    year: '2561',
    Ptype: 'รายไตรมาส',
    Pname: '2561 รายไตรมาส',
    status:'มีผลใช้งาน'
  }, {
    key: '4',
    year: '2561',
    Ptype: 'รายสัปดาห์',
    Pname: '2561 รายสัปดาห์',
    status:'มีผลใช้งาน'
  }],
  col1:[{
    title: 'ปี',
    dataIndex: 'year',
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
    title: 'ประเภท Period',
    dataIndex: 'Ptype',
    filters: [{
      text: 'รายสัปดาห์',
      value: 'รายสัปดาห์',
    }, {
      text: 'รายเดือน',
      value: 'รายเดือน',
    },
    {
      text: 'รายไตรมาส',
      value: 'รายไตรมาส', 
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  }, {
    title: 'ชื่อ Period',
    dataIndex: 'Pname',
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
    title: 'สถานะ',
    dataIndex: 'status',
    filters: [{
      text: 'มีผลใช้งาน',
      value: 'มีผลใช้งาน',
    }, {
      text: 'ยังไม่มีผลใช้งาน',
      value: 'ยังไม่มีผลใช้งาน',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
 
  },{
    title: '',
    dataIndex: 'button',
    render: () => (
      <Radio.Group size="small" value="" >
          <Radio.Button value="display">แสดง</Radio.Button>
          <Radio.Button value="edit">แก้ไข</Radio.Button>
          <Radio.Button value="delete">ลบ</Radio.Button>
        </Radio.Group> ),
  }
]
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







          