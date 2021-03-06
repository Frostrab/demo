
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

export default class Newtab extends React.Component{
    render(){
        return(
            <Table dataSource={data} bordered>

<Column
      title="Age"
      dataIndex="age"
      key="age"
      width="30%"
    />
    <ColumnGroup title="Name">
      <Column
        title="First Name"
        dataIndex="firstName"
        key="firstName"
      />
      <Column
        title="Last Name"
        dataIndex="lastName"
        key="lastName"
      />
    </ColumnGroup>
    <ColumnGroup title="Name">
    <Column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      )}
    />
  </ColumnGroup>
  </Table>
        
          
        )
    }
}