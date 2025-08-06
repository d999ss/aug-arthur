import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #F5C518 0%, #E6B800 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: '-0.025em',
            marginBottom: 20,
          }}
        >
          Arthur Companies
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
          }}
        >
          Where Innovation Grows
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}