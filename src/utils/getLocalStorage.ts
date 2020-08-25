import {UserType} from '../store/UsersStore';

export const getLocalStorage = (key: string): UserType[] => {
  const lst = typeof localStorage === 'undefined' ? { [key]: {} } : localStorage;

  return JSON.parse(lst[key])
};
