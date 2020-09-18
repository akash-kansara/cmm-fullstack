import React from 'react';

import { Form, Input } from 'antd';

function UpsertForm(props) {
  return (
    <>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 17 }}
        layout="horizontal"
      >
        <Form.Item label="firstname">
          <Input />
        </Form.Item>
        <Form.Item label="lastname">
          <Input />
        </Form.Item>
        <Form.Item label="avatar">
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default UpsertForm;