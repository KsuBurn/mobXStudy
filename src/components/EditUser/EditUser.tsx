import React, {FC, useEffect, useState} from 'react';
import InputField from '../InputField/InputField';
import {UserType} from '../../store/UsersStore';
import {getLocalStorage} from '../../utils/getLocalStorage';

type LocationType = {
  params: {
    userid: string;
  };
};

type EditUserType = {
  match: LocationType;
};

type inputValue = {
  name: string;
  username: string;
  email: string;
  city: string;
  street: string;
  company: string;
  website: string;
}

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
        default: setUserInfo(userInfo => {
          if (userInfo != undefined) {
            return {...userInfo, [name]: value}
          }
        });
      }
  };
  
  return (
    <div>
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
  );
};

export default EditUser;
