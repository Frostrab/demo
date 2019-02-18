import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  


export default class TableF8 extends PureComponent{

state ={
  data:[{
    key: '1',
    yearstart: '2561',
    quarterstart: 'ไตรมาส 1',
    yearend:'2562',
    quarterend:'ไตรมาส 1',
  }, {
    key:'2',
    yearstart: '2570',
    quarterstart: 'ไตรมาส 3',
    yearend:'2570',
    quarterend:'ไตรมาส 4',
  }, {
    key: '3',
    yearstart: '2571',
    quarterstart: 'ไตรมาส 2',
    yearend:'2572',
    quarterend:'ไตรมาส 1',
  }, {
    key: '4',
    yearstart: '2577',
    quarterstart: 'ไตรมาส 1',
    yearend:'2579',
    quarterend:'ไตรมาส 4',
  }],

  col1:[{
    title: 'ปีเริ่มต้น',
    dataIndex: 'yearstart',
    width:'15%',
    filters: [{
      text: '2561',
      value: '2561',
    }, {
      text: '2570',
      value: '2570',
    },{
      text: '2571',
      value: '2571',
    }, {
      text: '2577',
      value: '2577',
    },],
   
    onFilter: (value, record) => record.yearstart.indexOf(value) === 0,
    sorter: (a, b) => a.yearstart - b.yearstart,
    sortDirections: ['descend','ascend'],
  }, {
    title: 'ไตรมาสเริ่มต้น',
    dataIndex: 'quarterstart',
    width:'20%',
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
    width:'15%',
    filters: [{
      text: '2562',
      value: '2562',
    }, {
      text: '2570',
      value: '2570',
    },{
      text: '2572',
      value: '2572',
    }, {
      text: '2579',
      value: '2579',
    },],
   
    onFilter: (value, record) => record.yearend.indexOf(value) === 0,
    sorter: (a, b) => a.yearend - b.yearend,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'ไตรมาสสิ้นสุด',
    dataIndex: 'quarterend',
    width:'20%',
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
    width:'20%',
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







          