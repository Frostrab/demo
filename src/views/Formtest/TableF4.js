import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF4 extends PureComponent{

state ={
  data:[{
    key: '1',
    name: 'แบบประเมิณ1',
    status:'มีผลใช้งาน',
  }, {
    key: '2',
    name: 'แบบประเมิณ2',
    status:'ยังไม่มีผลใช้งาน',
  }, {
    key: '3',
    name: 'แบบประเมิณ3',
    status:'มีผลใช้งาน',
  }, {
    key: '4',
    name: 'แบบประเมิณ4',
    status:'มีผลใช้งาน',
  }],
  col1:[{
    title: 'ชื่อแบบประเมิณ',
    dataIndex: 'name',
    width:'40%',
    filters: [{
      text: 'แบบประเมิณ1',
      value: 'แบบประเมิณ1',
    }, {
      text: 'แบบประเมิณ2',
      value: 'แบบประเมิณ2',
    },{
      text: 'แบบประเมิณ3',
      value: 'แบบประเมิณ3',
    },{
      text: 'แบบประเมิณ4',
      value: 'แบบประเมิณ4',
    },
  ],
   
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend','ascend'],
  },{
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
  
  />
            </div>
        )
    }
}







          