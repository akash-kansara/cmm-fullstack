import React, { Component, useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import Avatar from 'react-avatar';

import { getUser } from '../../service/user';

import { Modal, Table } from '../../base';
import UpsertForm from './upsert-form';

const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    render: (text, record) => (
      <Avatar size={30} src={`${record.avatar}`} />
    ),
  },
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'First Name',
    dataIndex: 'firstname'
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <Actions user={record} />
    ),
  }
];

function Actions(props) {
  let visible = false;
  function updateForm() {
    visible = true;
  }
  function closeForm() {
    visible = false;
  }
  return (
    <Space size="small">
      <Button size='small' type='primary' onClick={updateForm}>Edit</Button>
      <Modal
        title={'Edit User'}
        component={<UpsertForm />}
        visible={visible}
        onOk={closeForm}
        onCancel={closeForm}
      />
      <Button size='small' type='default' >Friends</Button>
      <Button size='small' type='default'>Friends of friends</Button>
    </Space>
  )
}

class Dashboard extends Component {
  state = {
    data: [],
    showForm: false
  }
  async componentDidMount() {
    let data = await getUser();
    this.setState({
      data: data
    });
  }
  createForm() {
    this.setState({
      showForm: true
    });
  }
  closeForm() {
    this.setState({
      showForm: false
    });
  }
  render() {
    return (
      <>
        <Button type='primary' onClick={() => this.createForm()}>Create User</Button>
        <Modal
          title={'Create User'}
          component={<UpsertForm />}
          visible={this.state.showForm}
          onOk={() => this.closeForm()}
          onCancel={() => this.closeForm()}
        />
        <Table
          rowKey={'id'} columns={columns} data={this.state.data}
        />
      </>
    );
  }
}

export default Dashboard;