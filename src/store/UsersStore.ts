import {observable, extendObservable} from 'mobx';
import users from '../mocks/users.json';

type UserType = {
  guid: string;
  age: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
}

export type UsersStoreType = {
  userList: UserType[];
}

export class UsersStore implements UsersStoreType{
  @observable
  userList: UserType[] = users;

}
