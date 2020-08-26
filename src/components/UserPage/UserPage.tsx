import React, {FC, useEffect, useState} from 'react';
import {UserType} from '../../store/UsersStore';
import {getLocalStorage} from '../../utils/getLocalStorage';
import style from './UserPage.module.css';
import CurrentButton from '../CurrentButton/CurrentButton';
import {Link} from 'react-router-dom';

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

  useEffect(() => {

    const getUserInfo = () => {
      return getLocalStorage('users').slice().filter(item => {
        return item.id === Number(match.params.userid);
      });
    };

    setUserInfo(getUserInfo()[0])

  }, []);



  return (
    <div className={style.wrap}>
      <div className={style.userInfo}>
        <img className={style.avatar} src={userInfo?.avatar} alt="avatar"/>
        <div>
          <h3>{userInfo?.name}</h3>
          <p className={style.nickname}>
            aka: {userInfo?.username}
          </p>
        </div>
        <p className={style.emailTitle}>
          Email:
        </p>
        <p className={style.email}>
          {userInfo?.email}
        </p>
        <p className={style.addressTitle}>
          Address:
        </p>
        <p className={style.address}>
          {userInfo?.address.city} city, {userInfo?.address.street} street
        </p>
        <p className={style.jobTitle}>
          Job:
        </p>
        <p className={style.job}>
          {userInfo?.company.name}
        </p>
        <p className={style.websiteTitle}>
          Website:
        </p>
        <a
          href={`https://${userInfo?.website}`}
          target='_blank'
          className={style.website}
        >
          {userInfo?.website}
        </a>
      </div>
      <div className={style.buttonWrap}>
        <Link to={`/user/${userInfo?.id}/edit`}>
          <CurrentButton
            buttonTitle='Edit'
            type='primary'
          />
        </Link>

      </div>
    </div>
  );
};

export default UserPage;
