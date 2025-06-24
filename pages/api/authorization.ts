// pages/api/oauth/token.ts
import { account, HOST, password } from '@/shared/config/constants'
import { saveToken } from '../../src/shared/utils/secureStorage';

let refreshInProgress = false

async function fetchNewToken(): Promise<{ access_token: string; expires_in?: number }> {
    const searchParams = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: account,
      client_secret: password,
    });

    const response = await fetch(`${HOST}/v2/oauth/token?${searchParams}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), 
    });

  if (!response.ok) {
    throw new Error(`OAuth error: ${response.status} ${response.statusText}`)
  }
  return await response.json()
}

export async function startTokenRefreshLoop() {
  if (refreshInProgress) return
  refreshInProgress = true

  const maxRetries = 3
  let attempt = 0
  let success = false

  while (attempt < maxRetries && !success) {
    attempt++
    try {
      const data = await fetchNewToken()
      const expiresInMs = 1800 * 1000 // 30 минут
      await saveToken(data.access_token, expiresInMs)
      console.log('Token updated and saved to file')
      success = true
    } catch (err) {
      console.warn(`Attempt ${attempt} failed to refresh token:`, err)
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * 60 * 5)) // ждём 5 минут перед повтором
      } else {
        console.error('Max retry attempts reached. Giving up.')
      }
    }
  }

  refreshInProgress = false
  setTimeout(startTokenRefreshLoop, 1000 * 60 * 30) // каждые 30 минут
}
