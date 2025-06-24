// utils/tokenStorage.ts
import fs from "fs";
import path from 'path'

const FILE_PATH = path.join(process.cwd(), 'token.json')

type TokenData = {
  access_token: string
  expires_at: number
}

export async function saveToken(token: string, expiresInMs: number): Promise<void> {
  const data: TokenData = {
    access_token: token,
    expires_at: Date.now() + expiresInMs,
  }
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), {
    flag: 'w', // 'w' создаёт файл, если его нет
  })
}

export async function readToken(): Promise<TokenData | null> {
  if (!fs.existsSync(FILE_PATH)) {
    return null
  }
  try {
    const fileData = fs.readFileSync(FILE_PATH, 'utf8')
    return JSON.parse(fileData)
  } catch (error) {
    console.error('Error reading token file:', error)
    return null
  }
}