import { createContext } from 'react';
import {UsersStore} from './UsersStore';
import {UsersStoreType} from './UsersStore';

export type StoresType = {
  usersStore: UsersStoreType;
};

export const StoreContext = createContext<StoresType>({
  usersStore: new UsersStore(),
});
