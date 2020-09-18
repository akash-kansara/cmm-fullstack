import React, { useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import Avatar from 'react-avatar';

import { getUser } from '../../service/user';

import { Modal, Table } from '../../base';
import UpsertForm from './upsert-form';

function Dashboard(props) {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  function fetchUsers() {
    getUser()
      .then((users) => setData(users))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchUsers()
  }, []);
  async function closeAndRef() {
    await fetchUsers();
    setVisible(false);
  }
  function Actions(props) {
    const [visible, setVisible] = useState(false);
    return (
      <Space size="small">
        <Button size='small' type='primary' onClick={setVisible.bind(this, true)}>Edit</Button>
        <Modal
          title={'Edit User'}
          component={
            <UpsertForm submit={closeAndRef} cancel={setVisible.bind(this, false)} user={props.user} />
          }
          visible={visible}
          footer={null}
        />
        <Button size='small' type='default' >Friends</Button>
        <Button size='small' type='default'>Friends of friends</Button>
      </Space>
    )
  }
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      render: (text, record) => {
        if (record.avatar)
          return (
            <Avatar size={30} src={`${record.avatar}`} />
          );
        else
          return (
            <Avatar size={30} />
          );
      },
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
  return (
    <>
      <Button type='primary' onClick={setVisible.bind(this, true)}>Create User</Button>
      <Modal
        title={'Create User'}
        component={
          <UpsertForm submit={closeAndRef} cancel={setVisible.bind(this, false)} />
        }
        visible={visible}
        footer={null}
      />
      <Table
        rowKey={'id'} columns={columns} data={data}
      />
    </>
  );
}

export default Dashboard;