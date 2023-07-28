export const getUser = () => {
  // if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    const password = localStorage.getItem('password');
    if (user !== "pg123" || password !== "pg123123") {
      return false;
    }
  // }
  return true;
};
