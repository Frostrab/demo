import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF7 extends PureComponent{

state ={
  data:[{
    key: '1',
    yearstart: '2561',
    quarterstart: 'ไตรมาส 1',
    yearend:'2562',
    quarterend:'ไตรมาส 2',
  }, {
    key: '2',
    yearstart: '2560',
    quarterstart: 'ไตรมาส 1',
    yearend:'2561',
    quarterend:'ไตรมาส 3',
  }, {
    key: '3',
    yearstart: '2561',
    quarterstart: 'ไตรมาส 2',
    yearend:'2562',
    quarterend:'ไตรมาส 3',
  }, {
    key: '4',
    yearstart: '2561',
    quarterstart: 'ไตรมาส 1',
    yearend:'2562',
    quarterend:'ไตรมาส 32',
  }],

  col1:[{
    title: 'ปีเริ่มต้น',
    dataIndex: 'yearstart',
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
    title: 'ไตรมาสเริ่มต้น',
    dataIndex: 'quarterstart',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'ปีสิ้นสุด',
    dataIndex: 'yearend',
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
    title: 'ไตรมาสสิ้นสุด',
    dataIndex: 'quarterend',
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
  
  />,
            </div>
        )
    }
}







          