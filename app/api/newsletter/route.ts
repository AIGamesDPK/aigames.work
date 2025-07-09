// Newsletter API temporarily disabled for Cloudflare Pages compatibility
export const runtime = 'edge'

export async function GET() {
  return new Response(JSON.stringify({ message: 'Newsletter API disabled' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function POST() {
  return new Response(JSON.stringify({ message: 'Newsletter API disabled' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
