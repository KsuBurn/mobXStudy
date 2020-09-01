import {observable, action} from 'mobx';
import {getLocalStorage} from '../utils/getLocalStorage';

export type UserType = {
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
  avatar: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type UsersStoreType = {
  fullUserList: UserType[];
  userList: UserType[];
  userState: () => Promise<UserType[]>;
  updateFilter: (inputValue: string, placeholder: string) => void;
  filteredUsers: () => UserType[];
  sortUsers: (sortedArray: UserType[]) => void;
  addUserItem: (userItem: UserType) => void;
  editUser: (userInfo: UserType) => void;
}

export class UsersStore implements UsersStoreType {

  fullUserList: UserType[] = []
  @observable
  userList: UserType[] = this.fullUserList;
  filter: string = '';
  inputName: string = '';

  @action
  userState = async () => {
    if (typeof localStorage.users === 'undefined') {
      const request = await fetch('https://my-json-server.typicode.com/KsuBurn/myJsonServer/users');
      const response = await request.json();
      this.fullUserList = response;
      await action(() => this.userList = response)();
      this.saveLocal();

      return this.userList;
    } else {
      this.fullUserList = getLocalStorage('users');
      await action(() => this.userList = getLocalStorage('users'))();

      return this.userList;
    }
  };


  saveLocal() {
    const lst = typeof localStorage === 'undefined' ? { users: {} } : localStorage;

    lst.users = JSON.stringify(this.userList);
  }

  @action
  addUserItem = (userItem: UserType): void => {
    this.userList.push({ ...userItem });
    this.fullUserList.push({ ...userItem });
    this.saveLocal();
  };

  @action
  filteredUsers(): UserType[] {
    const matchesFilter = new RegExp(this.filter, 'i');

    const filteredUserList = this.fullUserList.slice().filter((item): boolean => {
      if(this.filter) {
        // @ts-ignore
        return matchesFilter.test(item[this.inputName]);
      }
      return true;
    });
    this.userList = filteredUserList;
    return this.userList
  };

  @action
  updateFilter =  (inputValue: string, inputName: string) => {
    this.filter = inputValue;
    this.inputName = inputName;
    this.filteredUsers();
  };

  @action
  sortUsers =  (sortedArray: UserType[]) => {

    this.userList = sortedArray;
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

  @action
  editUser = (userInfo: UserType): void => {
    const newUserList: UserType[] = this.userList.map((item: UserType) => {
      let newItem = {...item};

      if (userInfo.id === item.id) {
       newItem = {...userInfo};
      }

      return newItem;
    });

    action(() => this.userList = newUserList)()
    this.saveLocal();
  };
};
