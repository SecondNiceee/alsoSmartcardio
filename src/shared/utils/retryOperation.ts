// utils/retryOperation.ts

import authorize from '../api/authorize';
import { saveAccessToken } from './saveAccesToken';

export default async function retryOperation<T>(
  operation: () => Promise<T>,
  retries = 10,
  baseDelay = 1000
): Promise<T> {
  console.warn("Вызов чего-то")
  console.warn("as");
  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error: any) {

      const status = error?.response?.status || error.status;

      if (status === 401 || status === 403) {
        console.warn(status);
        await authorize().then( (token) => {
          if (token)
          saveAccessToken(token);
        } )
        continue;
      }

      if (i === retries - 1) throw error;

      const delay = baseDelay * Math.pow(2, i);
      console.log(`Retry ${i + 1} after ${delay}ms`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error("Unexpected retry loop exit");
}