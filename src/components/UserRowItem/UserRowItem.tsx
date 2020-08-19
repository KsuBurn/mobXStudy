import React, {FC} from 'react';
import style from './UserRowItem.module.css';

export type UserRowItemProps = {
  guid: string;
  age: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
};

export type UserRowItemType = {
  item: UserRowItemProps;
}

const UserRowItem: FC<UserRowItemType> = ({item}: UserRowItemType) => {
  return (
    <tr className={style.row}>
      <td></td>
      <td>{item.name.first}</td>
      <td>{item.name.last}</td>
      <td>{item.age}</td>
    </tr>
  );
};

export default UserRowItem;
