import React, {FC} from 'react';
import style from './UserRowItem.module.css';
import {NavLink} from 'react-router-dom';

export type UserRowItemProps = {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type UserRowItemType = {
  item: UserRowItemProps;
}

const UserRowItem: FC<UserRowItemType> = ({item}: UserRowItemType) => {

  const changeUser = (id: number) => {
    window.location.href = `${window.location.origin}/user/${id}`;
  };

  return (
    <tr
      className={style.row}
      onClick={()=> changeUser(item.id)}
    >
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
    </tr>
  );
};

export default UserRowItem;
