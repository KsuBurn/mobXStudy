import authorizationData from '../mocks/authorizationData.json';

interface IInputData {
  login: string;
  password: string;
}

export const useAuthorization = (inputData: IInputData): boolean => {
  const { login, password } = inputData;

  if (authorizationData.every(item => item.login !== login)) {
    return false;
  }

  for (let i = 0; i < authorizationData.length; i++) {
    if (authorizationData[i].login === login) {
      return password === authorizationData[i].password;
    }
  }

  return false;
};
