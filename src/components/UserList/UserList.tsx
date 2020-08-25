import React, {FC, useEffect, useState} from 'react';
import userListHead from './userListHead.json';
import UserRowItem from '../UserRowItem/UserRowItem';
import {UserRowItemProps} from '../UserRowItem/UserRowItem';
import style from './UserList.module.css';
import {Button, Input} from 'antd';
import {useStore} from '../../hooks/useStore';
import { observer } from 'mobx-react';
import {autorun} from 'mobx';

const UserList: FC = observer(() => {
  const { usersStore } = useStore();

  useEffect(() => {

    autorun(() => {
      usersStore.userState();
    })
  },[])

  const UsersRow = () => {
    return usersStore.userList.slice().map((item: UserRowItemProps, index: number) => {
      return (
        <UserRowItem
          key={index}
          item={item}
        />
      )
    })
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {value, name} = event.target;
console.log(name)
    usersStore.updateFilter(value, name);
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
            <td key={item.title}>
              <Input
                name={item.name}
                placeholder={item.title}
                onChange={handleChange}
              />
            </td>
          ))}
        </tr>
      {UsersRow()}
      </tbody>
    </table>
  )
});

export default UserList;
