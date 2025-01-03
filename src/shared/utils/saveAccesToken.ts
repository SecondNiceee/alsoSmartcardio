export const saveAccessToken = (token:string) => {
    localStorage.setItem('access_token', token);
  };