import React, {FC, useState} from 'react';
import userListHead from './userListHead.json';
import UserRowItem from '../UserRowItem/UserRowItem';
import {UserRowItemProps} from '../UserRowItem/UserRowItem';
import style from './UserList.module.css';
import {Button, Input} from 'antd';
import {useStore} from '../../hooks/useStore';
import { observer } from 'mobx-react';

const UserList: FC = observer(() => {
  const { userList } = useStore();
  const [users] = useState(userList.userList)

  const UsersRow = () => {
    return users.slice().map((item: UserRowItemProps, index: number) => {
      return (
        <UserRowItem
          key={index}
          item={item}
        />
      )
    })
  };

  return (
    <table className={style.wrap}>
      <thead>
      <tr className={style.tableHead}>
        {userListHead.map(item => (
          <th key={item.title}>
            <Button>
              {item.title}
            </Button>
          </th>
        ))}
      </tr>
      </thead>
      <tbody>
        <tr className={style.tableSearch}>
          {userListHead.map(item => (
            <td>
              <Input placeholder={item.title}/>
            </td>
          ))}
        </tr>
      {UsersRow()}
      </tbody>
    </table>
  )
});

export default UserList;
