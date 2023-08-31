import React from 'react';
import { Button, Result } from 'antd';
import { Col, Row  ,Input ,Form , Select ,DatePicker,Table ,Space, Tag } from 'antd';
import "./relationshipUser.scss"
import type { ColumnsType, TableProps } from 'antd/es/table';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  


const Relationship= () => {
    const { Option } = Select;

return(
    <div className='Container-Relationship'>
    <div className='Form-realtive'>
     <Row>
       <Col xs={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }}>
      <Form.Item name="Name-relative" label="Họ tên người thân" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
        </Col>
      <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
        <Form.Item name="birthday" label="ngày sinh " rules={[{ required: true }]}>
        <DatePicker  style={{ width: '100%' }} placeholder='Chọn ngày sinh' />
      </Form.Item>
      
     </Col>
     <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
       <Form.Item name="Citizen Identity Card" label="Căn cước công dân" rules={[{ required: true }]}>
        <Input />
       </Form.Item>
     </Col>
     <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
       <Form.Item name="realtionship" label="Mối quan hệ" rules={[{ required: true }]}>
        <Input />
       </Form.Item>
     </Col>
     <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
       <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
        <Input />
       </Form.Item>
     </Col>
    </Row>  
    <Row>
     <Col xs={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }}>
      <Form.Item name="Sex" label="Giới tính" rules={[{ required: true }]}>
      <Select
          placeholder="Chọn giới tính nhân viên"
          allowClear
        >
          <Option value="male">Nam</Option>
          <Option value="female">Nữ</Option>
          <Option value="other">Khác</Option>
        </Select>
      </Form.Item>
        </Col> 
        <Col xs={{ span: 19, offset: 1 }} lg={{ span: 19, offset: 1 }}>
       <Form.Item name="address" label="Địa chỉ" rules={[{ required: true }]}>
        <Input showCount maxLength={100} />
       </Form.Item>
     </Col>
    </Row> 
    </div>
    <div className='render-relative'>
    <Table columns={columns} dataSource={data}  />
    </div>
    </div>
)
};

export default Relationship;