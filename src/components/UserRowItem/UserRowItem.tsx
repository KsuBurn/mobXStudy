import React, {FC} from 'react';
import style from './UserRowItem.module.css';

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
  // guid: string;
  // age: number;
  // name: {
  //   first: string;
  //   last: string;
  // };
  // email: string;
};

export type UserRowItemType = {
  item: UserRowItemProps;
}

const UserRowItem: FC<UserRowItemType> = ({item}: UserRowItemType) => {
  return (
    <tr className={style.row}>
      <td></td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      {/*<td>{item.name.first}</td>*/}
      {/*<td>{item.name.last}</td>*/}
      {/*<td>{item.age}</td>*/}
    </tr>
  );
};

export default UserRowItem;
