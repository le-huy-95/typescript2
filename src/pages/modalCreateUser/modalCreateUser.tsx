import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "./modalCreateUser.scss"
import { Tabs, theme } from 'antd';
import ModalInfoUser from "./modalInfoUser"
import Relationship from "./relationshipUser"

interface PostItemModal {
     open:any
     showModal: () => void
     setOpen:any
  }

const ModalCreatUser = ({open  , setOpen}:PostItemModal) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <>
    
      <Modal
        open={open}
        title="THÊM THÔNG TIN NHÂN VIÊN"
        onOk={handleOk}
        width={1200}

        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Thoát
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Thêm thông tin
          </Button>,
         
        ]}
      >
        <div className='tabs-modal'>
        <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'THÔNG TIN NHÂN VIÊN',
        key: '1',
        children: <ModalInfoUser/>,
      },
      {
        label: 'QUAN HỆ GIA ĐÌNH',
        key: '2',
        children: <Relationship/>,
      },
      {
        label: 'THÔNG TIN VĂN BẰNG',
        key: '3',
        children: 'Tab 3',
      },
    ]}
  />        </div>
        
      </Modal>
    </>
  );
};

export default ModalCreatUser;