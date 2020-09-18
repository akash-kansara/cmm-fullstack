import React, { useEffect, useState } from 'react';
import { Button, Space, Avatar } from 'antd';

import { getUser } from '../../service/user';

import { Modal, Table } from '../../base';
import UpsertForm from './upsert-form';
import FriendsList from './friends-list';

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
    const [l1FriendsVisible, setL1FriendsVisible] = useState(false);
    const [l2FriendsVisible, setL2FriendsVisible] = useState(false);
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
        <Button size='small' type='default' onClick={setL1FriendsVisible.bind(this, true)}>Friends</Button>
        <Modal
          title={null}
          component={
            <FriendsList user={props.user} level={1} />
          }
          visible={l1FriendsVisible}
          okButtonProps={{ style: { display: 'none' } }}
          onCancel={setL1FriendsVisible.bind(this, false)}
        />
        <Button size='small' type='default' onClick={setL2FriendsVisible.bind(this, true)}>Friends of friends</Button>
        <Modal
          title={null}
          component={
            <FriendsList user={props.user} level={2} />
          }
          visible={l2FriendsVisible}
          okButtonProps={{ style: { display: 'none' } }}
          onCancel={setL2FriendsVisible.bind(this, false)}
        />
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