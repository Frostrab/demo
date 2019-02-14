import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

   

export default class TableF4 extends PureComponent{

state ={
  data:[{
    key: '1',
    name: 'John Brown',
    max: 32,
    type: 'New York No. 1 Lake Park',
    status:''
  }, {
    key: '2',
    name: 'Jim Green',
    max: 32,
    type: 'New York No. 1 Lake Park',
    status:''
  }, {
    key: '3',
    name: 'Joe Black',
    max: 32,
    type: 'New York No. 1 Lake Park',
    status:''
  }, {
    key: '4',
    name: 'Jim Red',
    max: 32,
    type: 'New York No. 1 Lake Park',
    status:''
  }],
  col1:[{
    title: 'ชื่อแบบประเมิณ',
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
    dataIndex: 'type',
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
    dataIndex: 'button',
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







          