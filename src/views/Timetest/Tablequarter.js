import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import { Table, Radio, Button, Select } from 'antd';

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
  

  const Option = Select.Option;
   

export default class Tablequarter extends PureComponent{

state ={
  data:[{
    key: '1',
    seq:'1',
    quarter: 'Indicator1',
    startdatatest:'01/01/2570',
    enddatatest: '31/03/2570',
    starttest:'01/01/2570',
    endtest:'31/03/2570',
    noticdate:'25/01/2570',
  },
  {
    key: '2',
    seq:'2',
    quarter: 'Indicator2',
    startdatatest:'01/04/2570',
    enddatatest: '30/06/2570',
    starttest:'01/04/2570',
    endtest:'30/06/2570',
    noticdate:'25/04/2570',
  },],

  col1:[{
    title: 'ลำดับ',
    dataIndex: 'seq',
    width:'10%',
    
  },
  {
    title: 'ไตรมาส',
    dataIndex: 'quarter',
    width:'10%',
    render: () => (
        <Select defaultValue="ไตรมาส1">
            <Option value={this.state.indicator}>{this.state.indicator}</Option>
            
        </Select>
    ),
   
  },
  {
    title: 'วันที่เริ่มต้นข้อมูลประเมิณ',
    dataIndex: 'startdatatest',
    width:'10%',
   
  },
  
  {
    title: 'วันที่สิ้นสุดข้อมูลประเมิณ',
    dataIndex: 'enddatatest',
    width:'10%',
   
  },
  {
    title: 'วันที่เริ่มต้นการประเมิณ',
    dataIndex: 'starttest',
    width:'10%',
   
  },
  {
    title: 'วันที่สิ้นสุดการประเมิณ',
    dataIndex: 'endtest',
    width:'10%',
   
  },
  {
    title: 'วันที่แจ้งเตือน',
    dataIndex: 'noticdate',
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
  
  />
            </div>
        )
    }
}







          