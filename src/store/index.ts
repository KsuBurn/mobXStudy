import { createContext } from 'react';
import {UsersStore} from './UsersStore';
import {UsersStoreType} from './UsersStore';

export type StoresType = {
  userList: UsersStoreType;
};

export const StoreContext = createContext<StoresType>({
  userList: new UsersStore(),
});
