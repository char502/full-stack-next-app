'use server';

import { cookies } from 'next/headers';

// get cookie
export const getCookieByKey = async (key: string) => {
  const cookie = (await cookies()).get(key);

  if (!cookie) {
    return null;
  }

  return cookie.value;
};

// set cookie
export const setCookieByKey = async (key: string, value: string) => {
  (await cookies()).set(key, value);
};

// delete cookie
export const deleteCookieByKey = async (key: string) => {
  (await cookies()).delete(key);
};

// Prevent multiple re renders as per strict mode
export const consumeCookiedByKey = async (key: string) => {
  const message = await getCookieByKey(key);

  //   await deleteCookieByKey('toast');
  await deleteCookieByKey(key);

  return message;
};
