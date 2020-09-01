import React, {FC} from 'react';
import style from './UserRowItem.module.css';
import {Link} from 'react-router-dom';
import CurrentButton from '../CurrentButton/CurrentButton';
import {useStore} from '../../hooks/useStore';

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
  avatar: string;
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
  const {usersStore} = useStore();

  const handleClick = (userId: number) => {
    usersStore.deleteUser(userId)
  };

  return (
    <tr className={style.row}>
      <td className={style.cell}>
        <Link
          to={`/user/${item.id}`}
          className={style.rowLink}
        >
          {item.id}
        </Link>
      </td>
      <td className={style.cell}>
        <Link
          to={`/user/${item.id}`}
          className={style.rowLink}
        >
          {item.name}
        </Link>
      </td>
      <td className={style.cell}>
        <Link
          to={`/user/${item.id}`}
          className={style.rowLink}
        >
          {item.username}
        </Link>
      </td>
      <td className={style.cell}>
        <Link
          to={`/user/${item.id}`}
          className={style.rowLink}
        >
          {item.email}
        </Link>
      </td>
      <td>
        <CurrentButton
          buttonTitle='Del'
          danger={true}
          onClick={() => handleClick(item.id)}
        />
      </td>
    </tr>

  );
};

export default UserRowItem;
