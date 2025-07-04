import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  return new NextResponse(
    `User-agent: *\nAllow: /\nSitemap: https://smartcardio.ru/sitemap.xml\n`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}