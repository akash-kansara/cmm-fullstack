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
      closable={false}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      {props.component}
    </Modal>
  )
}

export default MyModal;