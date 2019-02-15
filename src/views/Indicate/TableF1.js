import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF1 extends PureComponent{

state ={
  data:[{
    key: '1',
    name: 'ทอดลอง01',
    max: 100,
    type: 'ใส่จำนวน',
    status:'มีผลใช้งาน'
  }, {
    key: '2',
    name: 'ทอดลอง02',
    max: 100,
    type: 'ใส่จำนวน',
    status:'มีผลใช้งาน'
  }, {
    key: '3',
    name: 'ทดลอง03',
    max: 100,
    type: 'ใส่จำนวน',
    status:'ยังไม่มีผลใช้งาน'
  }, {
    key: '4',
    name: 'ทดลอง04',
    max: 90,
    type: 'ใส่จำนวน',
    status:'ยังไม่มีผลใช้งาน'
  },
  {
    key: '5',
    name: 'ทดลอง05',
    max: 100,
    type: 'ใส่จำนวน',
    status:'มีผลใช้งาน'
  }],
  col1:[{
    title: 'ชื่อตัวชี้วัด',
    dataIndex: 'name',
    width:'30%',
    filters: [{
      text: 'ทดลอง01',
      value: 'ทดลอง01',
    },
    {
      text: 'ทดลอง02',
      value: 'ทดลอง02',
    },
    {
      text: 'ทดลอง03',
      value: 'ทดลอง03',
    },
    {
      text: 'ทดลอง04',
      value: 'ทดลอง04',
    },
    {
      text: 'ทดลอง05',
      value: 'ทดลอง05',
    },
    
  ],
   
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  }, {
    title: 'คะแนนเต็ม',
    dataIndex: 'max',
    width:'10%',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.max - b.max,
  }, {
    title: 'รูปแบบการกรอกข้อมูล',
    dataIndex: 'type',
    width:'10%',
    filters: [{
      text: 'ใส่จำนวน',
      value: 'ใส่จำนวน',
    }, {
      text: 'ใส่ตัวอักษร',
      value: 'ใส่ตัวอักษร',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
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
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
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







          