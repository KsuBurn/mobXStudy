import {observable, action, extendObservable} from 'mobx';
import users from '../mocks/users.json';
import {act} from 'react-dom/test-utils';

type UserType = {
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
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  // guid: string;
  // age: number;
  // name: {
  //   first: string;
  //   last: string;
  // };
  // email: string;
}

export type UsersStoreType = {
  userList: UserType[];
  userState: () => Promise<UserType[]>;
  updateFilter: (inputValue: string, placeholder: string) => void;
  filteredUsers: () => UserType[];
}

export class UsersStore implements UsersStoreType {

  fullUserList: UserType[] = []
  @observable
  userList: UserType[] = this.fullUserList;
  filter: string = '';
  inputName: string = '';

  // @ts-ignore
  @action
  userState = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/users/');
    const response = await request.json();
    this.fullUserList = response;
    await action(() => this.userList = response)();

    return this.userList;
  }


  // saveLocal() {
  //   const lst = typeof localStorage === 'undefined' ? { users: {} } : localStorage;
  //
  //   lst.users = JSON.stringify(this.userList);
  // }
  //
  // @action
  // addUserItem = (userItem: object): void => {
  //   // const guid = uuidv4();
  //
  //   // @ts-ignore
  //   this.userList.push({ ...userItem, ...{ guid } });
  //   this.saveLocal();
  // };

  @action
  filteredUsers(): UserType[] {
    const matchesFilter = new RegExp(this.filter, 'i');

    const filteredUserList = this.fullUserList.slice().filter((item): UserType[] | boolean => {
      switch (this.inputName) {
        case 'Full Name':
          return !this.filter || matchesFilter.test(item.name);
        case 'Nick Name':
          return !this.filter || matchesFilter.test(item.username);
        case 'Email':
          return !this.filter || matchesFilter.test(item.email);
        default:
          return this.userList;
      }
    });
    this.userList = filteredUserList;
    return this.userList
  };

  @action
  updateFilter =  (inputValue: string, placeholder: string) => {
    this.filter = inputValue;
    this.inputName = placeholder;
    this.filteredUsers();
  };

  // Добавить функцию удаления
  // @action
  // deleteUser = (userId: number) => {
  //   const newUserList = this.users.filter((item, index) => index !== userId);
  //
  //   this.users = newUserList;
  //   this.saveLocal();
  // };
  //
  // // Добавить функцию редактирования
  // @action
  // editUser = (userInfo: itemKeys, userId: number): void => {
  //   const newUserList: itemKeys[] = this.users.map((item: itemKeys, index) => {
  //     const newItem = { ...item };
  //
  //     if (index === userId) {
  //       newItem.name.first = userInfo.name.first;
  //       newItem.name.last = userInfo.name.last;
  //       newItem.age = userInfo.age;
  //     }
  //
  //     return newItem;
  //   });
  //
  //   this.users = newUserList;
  //   this.saveLocal();
  // };
  //

  //
  // @action
  // sortUsers =  (sortedArray: itemKeys[]) => {
  //   this.users = sortedArray;
  // };
}
