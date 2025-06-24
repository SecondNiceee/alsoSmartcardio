// utils/retryOperation.ts
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

      if (i === retries - 1) throw error;

      const delay = baseDelay * Math.pow(2, i);
      console.log(`Retry ${i + 1} after ${delay}ms`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error("Unexpected retry loop exit");
}