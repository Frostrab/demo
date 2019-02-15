import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio, Button, Select } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

  const Option = Select.Option;
   

export default class Tablegrade extends PureComponent{

state ={
  data:[{
    key: '1',
    pointstart: '4',
    pointend:'5',
    grade:'A',
    level:'Non-CA'
  },
  {
    key: '2',
    pointstart: '1',
    pointend:'5',
    grade:'B',
    level:'Non-CA'
  },
  {
    key: '3',
    pointstart: '2',
    pointend:'10',
    grade:'A',
    level:'Non-CA'
  },],

  col1:[{
    title: 'คะแนนเริ่มต้น',
    dataIndex: 'pointstart',
    width:'10%',
   
  },
  {
    title: 'คะแนนสิ้นสุด',
    dataIndex: 'pointend',
    width:'40%',
   
  },
  {
    title: 'เกรด',
    dataIndex: 'grade',
    width:'10%',
   
  },
  {
    title: 'ระดับ',
    dataIndex: 'level',
    width:'10%',
   
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







          