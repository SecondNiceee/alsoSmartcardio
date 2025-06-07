export const saveAccessToken = (token:string) => {
    localStorage.removeItem('access_token');
    localStorage.setItem('access_token', token);
  };