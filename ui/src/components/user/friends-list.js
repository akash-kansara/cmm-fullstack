import React, { useState, useEffect } from 'react'
import { Table } from '../../base';

import { UserAddOutlined, CheckOutlined } from '@ant-design/icons';

import { getUser } from '../../service/user';
import { createFriend, getFriends } from '../../service/friends';

function FriendList(props) {

  const [data, setData] = useState([]);

  function fetchUsers() {
    if (props.level === 1) {
      Promise.all([getUser(), getFriends(props.user.id, props.level)])
        .then((results) => {
          let users = results[0];
          let friends = results[1];
          let friendIDs = friends.map((e) => e.id);
          users = users.filter((e) => e.id !== props.user.id);
          users = users.map((e) => {
            return {
              ...e,
              friend: friendIDs.includes(e.id)
            }
          });
          setData(users);
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      getFriends(props.user.id, props.level)
        .then((results) => {
          setData(results)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  async function addFriend(friend_id) {
    try {
      await createFriend({ user_id: props.user.id, friend_id })
      await fetchUsers();
    } catch (err) {
      console.log(err)
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <p>{record.firstname} {record.lastname}</p>
      )
    }
  ];

  if (props.level == 1) {
    columns.push(
      {
        title: 'Action',
        dataIndex: 'action',
        render: (text, record) => {
          if (record.friend) {
            return (<CheckOutlined />)
          }
          else {
            return (<UserAddOutlined onClick={addFriend.bind(this, record.id)} />)
          }
        }
      }
    )
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div>
      <Table
        rowKey={'id'} columns={columns} data={data} defaultPageSize={5}
        showHeader={false}
      />
    </div>
  )
}

export default FriendList