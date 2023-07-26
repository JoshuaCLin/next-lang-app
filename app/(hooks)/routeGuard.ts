'use client';

import { useRouter } from 'next/navigation';

export const getUser = () => {
  const user = localStorage.getItem('user');
  const password = localStorage.getItem('password')
  if (user !== "pg123" || password !== "pg123123") {
    return undefined;
  }
  return user;
};
