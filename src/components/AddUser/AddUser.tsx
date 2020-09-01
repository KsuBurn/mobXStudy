import React, {FC} from 'react';
import UserForm from '../UserForm/UserForm';

const AddUser: FC = () => {
  return (
    <>
        <UserForm actionType='addition'/>
    </>
  );
};

export default AddUser;
