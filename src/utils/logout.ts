interface IHistory {
  push: (path: string, state?: object) => void;
}

export const logout = (history: IHistory): void => {
  localStorage.clear();
  history.push('/');
  window.location.reload();
};
