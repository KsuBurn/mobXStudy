import React, {FC, useState} from 'react';
import userListHead from './userListHead.json';
import UserRowItem from '../UserRowItem/UserRowItem';
import {UserRowItemProps} from '../UserRowItem/UserRowItem';
import style from './UserList.module.css';
import {Button, Input} from 'antd';
import {useStore} from '../../hooks/useStore';
import {observer} from 'mobx-react';

const UserList: FC = observer(() => {
  const {usersStore} = useStore();
  const [isDirectSorting, setIsDirectSorting] = useState(true);

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

    usersStore.updateFilter(value, name);
  };

  const handleSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    let sortValueA: object;
    let sortValueB: object;

    const sortUsers = usersStore.userList.slice().sort((a: any, b: any) => {
      sortValueA = a[event.currentTarget.name];
      sortValueB = b[event.currentTarget.name];

      if (sortValueA < sortValueB) {
        return isDirectSorting ? -1 : 1;
      }

      if (sortValueA > sortValueB) {
        return isDirectSorting ? 1 : -1;
      }

      return 0;
    });

    usersStore.sortUsers(sortUsers);
    setIsDirectSorting(!isDirectSorting);
  };

  return (
    <table className={style.wrap}>
      <thead>
      <tr className={style.tableHead}>
        {userListHead.map(item => (
          <th key={item.title}>
            <Button
              htmlType='button'
              name={item.name}
              onClick={handleSort}
            >
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
