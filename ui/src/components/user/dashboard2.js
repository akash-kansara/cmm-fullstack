import React, { Component } from 'react';

import { Table, Space } from 'antd';
import { Button } from 'antd';
import Avatar from 'react-avatar';

import { getUser } from '../../service/user';

import FormModal from '../user/form-modal';

import BaseModal from '../../base/modal';

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
      <Space size="middle">
        <a>Invite {record.firstname}</a>
        <a>Delete</a>
      </Space>
    ),
  }
];

class Dashboard extends Component {
  state = {
    rows: [],
    showForm: false
  }
  async componentDidMount() {
    let rows = await getUser();
    this.setState({
      rows: rows
    });
  }
  createForm() {
    this.setState({
      showForm: true
    });
    console.log(this.state)
  }
  render() {
    return (
      <>
        {/* <BaseModal visible={this.state.showForm} /> */}
        <Button type='primary' style={{ margin: '10px' }}
          onClick={() => this.createForm()}
        >Create User</Button>
        <Table
          rowKey="id"
          columns={columns} dataSource={this.state.rows}
          pagination={{ defaultPageSize: 10 }}
        />
      </>
    );
  }
}

export default Dashboard;