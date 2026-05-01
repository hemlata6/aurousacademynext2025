import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1d4ed8 40%, #f59e0b 100%)',
          color: '#ffffff',
          fontFamily: 'Arial',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px',
            }}
          >
            A
          </div>
          Aurous Academy
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: '68px', fontWeight: 800, lineHeight: 1.05 }}>
            Best IIT JEE, NEET & Foundation Coaching in Bhopal
          </div>
          <div style={{ fontSize: '30px', lineHeight: 1.35, opacity: 0.92 }}>
            Expert mentors, proven results, structured preparation, and campus support for competitive exams.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '24px',
            opacity: 0.92,
          }}
        >
          <div>aurousacademy.com</div>
          <div>Bhopal, Madhya Pradesh</div>
        </div>
      </div>
    ),
    size
  );
}