import {UserType} from '../store/UsersStore';

export const getLocalStorage = (key: string): UserType[] => {

  let lst;

  if (typeof localStorage === 'undefined') {
    lst = { [key]: {} }
  } else if (typeof localStorage[key] !== 'undefined') {
    lst = JSON.parse(localStorage[key])
  } else {
    lst = { [key]: {} }
  }

  return lst
};
