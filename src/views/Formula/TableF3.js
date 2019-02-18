import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio, } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF3 extends PureComponent{

state ={
  data:[{
    key: '1',
    name: 'หลักเกณฑ์1',
    frequency: 'รายสัปดาห์',
    status:'มีผลใช้งาน'
  }, {
    key: '2',
    name: 'หลักเกณฑ์2',
    frequency: 'รายเดือน',
    status:'มีผลใช้งาน'
  }, {
    key: '3',
    name: 'หลักเกณฑ์3',
    frequency: 'รายไตรมาส',
    status:'ยังไม่มีผลใช้งาน'
  }, ],
  col1:[{
    title: 'ชื่อหลักเกณฑ์',
    dataIndex: 'name',
    width:'40%',
    filters: [{
      text: 'หลักเกณฑ์1',
      value: 'หลักเกณฑ์1',
    }, {
      text: 'หลักเกณฑ์2',
      value: 'หลักเกณฑ์2',
    },
    {
      text: 'หลักเกณฑ์3',
      value: 'หลักเกณฑ์3',
    },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend','ascend'],
  }, {
    title: 'ความถี่การกรอกข้อมูล',
    dataIndex: 'frequency',
    width:'10%',
    defaultSortOrder: 'descend',
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
    },
    ],
    onFilter: (value, record) => record.frequency.indexOf(value) === 0,
    sorter: (a, b) => a.frequency.length - b.frequency.length,
  }, {
    title: 'สถานะ',
    dataIndex: 'status',
    width:'10%',
    filters: [{
      text: 'มีผลใช้งาน',
      value: 'มีผลใช้งาน',
    }, {
      text: 'ยังไม่มีผลใช้งาน',
      value: 'ยังไม่มีผลใช้งาน',
    }],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '',
    dataIndex: 'button',
    width:'20%',
    render: () => (
      <Radio.Group size="small" value="" >
          <Radio.Button value="display">แสดง</Radio.Button>
          <Radio.Button value="edit">แก้ไข</Radio.Button>
          <Radio.Button value="copy">คัดลอก</Radio.Button>
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
  
  />,
            </div>
        )
    }
}







          