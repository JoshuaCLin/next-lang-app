'use client';

import { useRouter } from 'next/navigation';

export const getUser = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    return undefined;
  }
  return user;
};
