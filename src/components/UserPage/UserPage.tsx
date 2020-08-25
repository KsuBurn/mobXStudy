import React, {FC, useEffect, useState} from 'react';
import {UserType} from '../../store/UsersStore';
import {useStore} from '../../hooks/useStore';
import {autorun} from 'mobx';
import {getLocalStorage} from '../../utils/getLocalStorage';

type LocationType = {
  params: {
    userid: string
  };
};

type UserPageType = {
  match: LocationType;
};

const UserPage: FC<UserPageType> = ({match}: UserPageType) => {
  const [userInfo, setUserInfo] = useState<UserType>();
  const {usersStore} = useStore();

  useEffect(() => {

    const getUserInfo = () => {
      return getLocalStorage('users').slice().filter(item => {
        return item.id === Number(match.params.userid);
      });
    };

    setUserInfo(getUserInfo()[0])

  }, []);

  return(
    <div>
      <p>{userInfo?.name}</p>
    </div>
  )
};

export default UserPage;
