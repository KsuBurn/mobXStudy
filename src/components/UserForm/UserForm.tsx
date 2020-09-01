import React, {FC, useEffect, useState} from 'react';
import InputField from '../InputField/InputField';
import {UserType} from '../../store/UsersStore';
import CurrentButton from '../CurrentButton/CurrentButton';
import style from './UserForm.module.css';
import {useStore} from '../../hooks/useStore';

type UserFormType = {
  currentUserInfo?: UserType | undefined;
  actionType: 'editing' | 'addition'
}

const UserForm: FC<UserFormType> = ({currentUserInfo, actionType}: UserFormType) => {
  const [userInfo, setUserInfo] = useState<UserType>();
  const {usersStore} = useStore();

  useEffect(() => {
    if (currentUserInfo != undefined) {
      setUserInfo(currentUserInfo);
    } else {
      setUserInfo({
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
        avatar: '',
        email: '',
        id: usersStore.userList.length + 1,
        name: '',
        phone: '',
        username: '',
        website: '',
      })
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {value, name} = event.currentTarget;

    switch (name) {
      case 'address.city':
        setUserInfo( userInfo => {
          if (userInfo != undefined) {
            return {
              ...userInfo,
              address: {
                ...userInfo?.address,
                city: value
              }
            }
          }
        });
        break;
      case 'address.street':
        setUserInfo( userInfo => {
          if (userInfo != undefined) {
            return {
              ...userInfo,
              address: {
                ...userInfo?.address,
                street: value
              }
            }
          }
        });
        break;
      case 'company.name':
        setUserInfo( userInfo => {
          if (userInfo != undefined) {
            return {
              ...userInfo,
              company: {
                ...userInfo?.company,
                name: value
              }
            }
          }
        });
        break;
      default:
        setUserInfo(userInfo => {
        if (userInfo != undefined) {
          return {...userInfo, [name]: value}
        }
      });
    }
  };

  const handleClick = () => {
    switch (actionType) {
      case 'addition':
        setUserInfo(userInfo => {
          if (userInfo != undefined) {
            return {
              ...userInfo,
              id: usersStore.userList.length + 1,
            }
          }
        });
        if (userInfo != undefined) {
          usersStore.addUserItem(userInfo);
        } else {
          console.log('Ошибка, заполните поля')
        }
        break;
      case 'editing':
        usersStore.editUser(userInfo!);
        break;
    }
  };

  return (
    <>
      <div className={style.form}>
        <InputField
          placeholder='Name'
          addonBefore='Name: '
          name='name'
          value={userInfo?.name}
          onChange={handleChange}
        />
        <InputField
          placeholder='Nick name'
          addonBefore='Nick name: '
          name='username'
          value={userInfo?.username}
          onChange={handleChange}
        />
        <InputField
          placeholder='Email'
          addonBefore='Email: '
          name='email'
          value={userInfo?.email}
          onChange={handleChange}
        />
        <InputField
          placeholder='City'
          addonBefore='City: '
          name='address.city'
          value={userInfo?.address.city}
          onChange={handleChange}
        />
        <InputField
          placeholder='Street'
          addonBefore='Street: '
          name='address.street'
          value={userInfo?.address.street}
          onChange={handleChange}
        />
        <InputField
          placeholder='Job'
          addonBefore='Job: '
          name='company.name'
          value={userInfo?.company.name}
          onChange={handleChange}
        />
        <InputField
          placeholder='Website'
          addonBefore='Website: '
          name='website'
          value={userInfo?.website}
          onChange={handleChange}
        />
      </div>
      <CurrentButton
        buttonTitle='Save'
        type='primary'
        onClick={handleClick}
      />
    </>
  );
};

export default UserForm;
