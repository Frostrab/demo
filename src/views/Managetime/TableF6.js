import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF6 extends PureComponent{

state ={
  data:[{
    key: '1',
    name: 'ประเมิณ CA สำหรับ ไตรมาส 3 2570 by Tik',
    status:'ยังไม่มีผลใช้งาน'
  }, {
    key: '2',
    name: 'ประเมิณ CA สำหรับ ไตรมาส 1 2560 by Petch',
    status:'มีผลใช้งาน'
  }, {
    key: '3',
    name: 'ประเมิณ CA สำหรับ ไตรมาส 3 2570 by To',
    status:'ยังไม่มีผลใช้งาน'
  }, {
    key: '4',
    name: 'ประเมิณ CA สำหรับ ไตรมาส 3 2561 by Tee',
    status:'มีผลใช้งาน'
  }],

  col1:[{
    title: 'ชื่อการประเมิณ',
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
  },{
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
  },
  
  {
    title: '',
    dataIndex: 'address',
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







          