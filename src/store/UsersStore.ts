import {observable, action} from 'mobx';

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
  avatar: string
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
}

export class UsersStore implements UsersStoreType {

  fullUserList: UserType[] = []
  @observable
  userList: UserType[] = this.fullUserList;
  filter: string = '';
  inputName: string = '';

  @action
  userState = async () => {
    const request = await fetch('https://my-json-server.typicode.com/KsuBurn/myJsonServer/users');
    const response = await request.json();
    this.fullUserList = response;
    await action(() => this.userList = response)();
    this.saveLocal()

    return this.userList;
  }


  saveLocal() {
    const lst = typeof localStorage === 'undefined' ? { users: {} } : localStorage;

    lst.users = JSON.stringify(this.userList);
  }
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


}
