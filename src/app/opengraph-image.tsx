import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const alt = `${siteConfig.name}, a product studio that ships and operates its own software`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: '#f6f7f9',
        color: '#17191e',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 28, fontWeight: 600 }}
      >
        <div style={{ width: 22, height: 22, borderRadius: 5, background: '#24468f' }} />
        {siteConfig.name}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            maxWidth: 980,
            fontSize: 76,
            fontWeight: 650,
            lineHeight: 0.94,
            letterSpacing: '-5px',
          }}
        >
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 34, fontSize: 24, color: '#5f6570' }}>
          Our own products · Client builds · Toronto
        </div>
      </div>
    </div>,
    size,
  );
}
