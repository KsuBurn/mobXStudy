import React, {FC, useEffect, useState} from 'react';
import InputField from '../InputField/InputField';
import {UserType} from '../../store/UsersStore';
import {getLocalStorage} from '../../utils/getLocalStorage';
import UserForm from '../UserForm/UserForm';

type LocationType = {
  params: {
    userid: string;
  };
};

type EditUserType = {
  match: LocationType;
};

const EditUser: FC<EditUserType> = ({match}: EditUserType) => {
  const [userInfo, setUserInfo] = useState<UserType>();

  useEffect(() => {

    const getUserInfo = () => {
      return getLocalStorage('users').slice().filter(item => {
        return item.id === Number(match.params.userid);
      })
    };

    setUserInfo(getUserInfo()[0]);
  }, []);

  return (
    <div>
      {userInfo ? (
        <UserForm currentUserInfo={userInfo} actionType='editing'/>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default EditUser;
