import {NextRequest} from 'next/server'

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get('url')

  if (!imageUrl) {
    return new Response('Missing image url', {status: 400})
  }

  const image = await fetch(imageUrl)
  const buffer = await image.arrayBuffer()

  return new Response(buffer, {
    headers: {
      'Content-Type': image.headers.get('content-type') || 'image/jpeg',
      'Content-Disposition': 'attachment; filename="product-image.jpg"',
    },
  })
}
