import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF9 extends PureComponent{

state ={
  data:[{
    key: '1',
    yearstart: '2555',
    quarterstart:'ไตรมาส 1',
    yearend: '2570',
    quarterend:'ไตรมาส 4'
  }, {
    key: '2',
    yearstart: '2557',
    quarterstart:'ไตรมาส 2',
    yearend: '2565',
    quarterend:'ไตรมาส 4'
  }, {
    key: '3',
    yearstart: '2559',
    quarterstart:'ไตรมาส 1',
    yearend: '2576',
    quarterend:'ไตรมาส 2'
  }, {
    key: '4',
    yearstart: '2560',
    quarterstart:'ไตรมาส 1',
    yearend: '2570',
    quarterend:'ไตรมาส 4'
  }],

  col1:[{
    title: 'ปีเริ่มต้น',
    dataIndex: 'yearstart',
    filters: [{
      text: '2555',
      value: '2555',
    }, {
      text: '2557',
      value: '2557',
    },{
      text: '2559',
      value: '2559',
    }, {
      text: '2560',
      value: '2560',
    },],
   
    onFilter: (value, record) => record.yearstart.indexOf(value) === 0,
    sorter: (a, b) => a.yearstart - b.yearstart,
    sortDirections: ['descend','ascend'],
  }, {
    title: 'ไตรมาสเริ่มต้น',
    dataIndex: 'quarterstart',
    filters: [{
      text: 'ไตรมาส 1',
      value: 'ไตรมาส 1',
    }, {
      text: 'ไตรมาส 2',
      value: 'ไตรมาส 2',
    },{
      text: 'ไตรมาส 3',
      value: 'ไตรมาส 3',
    }, {
      text: 'ไตรมาส 4',
      value: 'ไตรมาส 4',
    },],
   
    onFilter: (value, record) => record.quarterstart.indexOf(value) === 0,
    sorter: (a, b) => a.quarterstart.length - b.quarterstart.length,
    sortDirections: ['descend','ascend'],
  }, {
    title: 'ปีสิ้นสุด',
    dataIndex: 'yearend',
    filters: [{
      text: '2565',
      value: '2565',
    }, {
      text: '2570',
      value: '2570',
    },{
      text: '2576',
      value: '2576',
    },],
   
    onFilter: (value, record) => record.yearend.indexOf(value) === 0,
    sorter: (a, b) => a.yearend - b.yearend,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'ไตรมาสสิ้นสุด',
    dataIndex: 'quarterend',
    filters: [{
      text: 'ไตรมาส 1',
      value: 'ไตรมาส 1',
    }, {
      text: 'ไตรมาส 2',
      value: 'ไตรมาส 2',
    },{
      text: 'ไตรมาส 3',
      value: 'ไตรมาส 3',
    }, {
      text: 'ไตรมาส 4',
      value: 'ไตรมาส 4',
    },],
   
    onFilter: (value, record) => record.quarterend.indexOf(value) === 0,
    sorter: (a, b) => a.quarterend.length - b.quarterend.length,
    sortDirections: ['descend','ascend'],
  },
  
  {
    title: '',
    dataIndex: 'address',
    render: () => (
      <Radio.Group size="small" value="" >
          <Radio.Button value="display">แสดง</Radio.Button>
          <Radio.Button value="edit">แก้ไข</Radio.Button>
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







          