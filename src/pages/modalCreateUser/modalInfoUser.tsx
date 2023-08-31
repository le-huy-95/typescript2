import { UserOutlined ,DownloadOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar ,DatePicker} from 'antd';
import "./modalCreateUser.scss"
import { Col, Row  ,Input ,Form ,Select  } from 'antd';
import "./modalInfoUser.scss"


const ModalInfoUser= () => {
    const { Option } = Select;

  return(
    
    <div className='modal-container'>
    <Row>
     <Col span={18} push={6}>
     <Row>
       <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
      <Form.Item name="Name-user" label="Tên nhân viên" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
        </Col>
      <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
        <Form.Item name="Employee-number" label="Mã nhân viên" rules={[{ required: true }]}>
        <Input showCount maxLength={10} />
      </Form.Item>
      
     </Col>
     <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
       <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
        <Input />
       </Form.Item>
     </Col>
    </Row>    
    {/* ///// */}
    <Row>
     <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
      <Form.Item name="Sex" label="Giới tính" rules={[{ required: true }]}>
      <Select
          placeholder="Chọn giới tính nhân viên"
          allowClear
        >S
          <Option value="male">Nam</Option>
          <Option value="female">Nữ</Option>
          <Option value="other">Khác</Option>
        </Select>
      </Form.Item>
        </Col>
     <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
        <Form.Item name="Employee-phone" label="Số điện thoại" rules={[{ required: true }]}>
        <Input showCount maxLength={10} />
      </Form.Item>
      </Col>
      <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
       <Form.Item name="Birthday" label="Ngày sinh" rules={[{ required: true }]}>
       <DatePicker  style={{ width: '100%' }} placeholder='Chọn ngày sinh' />
       </Form.Item>
     </Col>
    </Row>    
    <Row>
    <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
        <Form.Item name="Team" label="Nhóm" rules={[{ required: true }]}>
        <Select
          placeholder="Chọn nhóm làm việc"
          allowClear
        >
          <Option value="Front-end">Nhóm Front-end</Option>
          <Option value="Back-end">Nhóm Back-end</Option>
          <Option value="Tester">Nhóm Tester</Option>
        </Select>
      </Form.Item>
      </Col>
     <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
      <Form.Item name="Citizen Identity Card" label="Căn cước công dân" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
        </Col>
        <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
      <Form.Item name=" Place of issue" label="Nơi cấp" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
        </Col>
         <Col xs={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
       <Form.Item name="issue day" label="Ngày cấp" rules={[{ required: true }]}>
       <DatePicker  style={{ width: '100%' }} placeholder='Chọn ngày cấp' />
       </Form.Item>
     </Col>
     <Col xs={{ span: 14, offset: 1 }} lg={{ span: 13, offset: 1 }}>
       <Form.Item name="Address" label="Địa chỉ" rules={[{ required: true }]}>
        <Input showCount maxLength={100}/>
       </Form.Item>
     </Col>
    </Row>    
  </Col>
    <Col span={6} pull={18} className='image-user'>
    <Avatar size={200} icon={<UserOutlined />} />   
    <div className='avata-user'>
     <input type="file" id='previewimage' hidden/>
     <label htmlFor="previewimage" className='Update-image '>Tải ảnh lên <DownloadOutlined/>
    </label>
    </div>
     </Col>
  </Row>

    </div>
   
  )
  };

export default ModalInfoUser;