import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

function MyModal(props) {
  const [visible, setVisible] = useState(props.visible);
  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible]);
  return (
    <Modal
      title={props.title || ''}
      visible={visible}
      closable={props.closable || false}
      footer={props.footer}
      cancelButtonProps={{...props.cancelButtonProps}}
      okButtonProps={{...props.okButtonProps}}
      onOk={props.onOk}
      onCancel={props.onCancel}
      destroyOnClose={props.destroyOnClose || true}
    >
      {props.component}
    </Modal>
  )
}

export default MyModal;