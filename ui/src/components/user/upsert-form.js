import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import get from 'lodash.get';

import { createUser, updateUser } from '../../service/user';

function UpsertForm(props) {

  const mode = get(props, 'user') ? 'UPDATE' : 'CREATE';

  const [form] = Form.useForm();

  async function submit() {
    try {
      await form.validateFields();
      let result;
      switch(mode) {
        case 'CREATE': {
          let user = form.getFieldsValue();
          result = await createUser(user);
          break;
        }
        case 'UPDATE': {
          let user = {
            id: props.user.id,
            ...form.getFieldsValue()
          }
          result = await updateUser(user);
          break;
        }
      }
      console.log(result);
      form.resetFields();
      props.submit();
    } catch (err) {

    }
  }

  function cancel() {
    form.resetFields();
    props.cancel();
  }

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 17 }}
        layout="horizontal"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          initialValue={get(props, 'user.firstname', '')}
          rules={
            [{ required: true, message: "First Name is required" }]
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastname"
          initialValue={get(props, 'user.lastname', '')}
          rules={
            [{ required: true, message: "Last Name is required" }]
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Avatar URL"
          name="avatar"
          initialValue={get(props, 'user.avatar')}
          rules={
            [{ type: "url", message: "Avatar has to be a valid URL" }]
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 16, span: 8 }}
        >
          <Space size="small" >
            <Button
              type="primary"
              htmlType="submit"
              onClick={submit}
            >
              Save
          </Button>
            <Button
              onClick={cancel}
            >
              Cancel
          </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpsertForm;