'use client';

import SectionHeading from '@/components/SectionHeading';
import { instagramReels } from '@/data/instagram-reels';

const previews = [
  { src: 'bridal-makeup', poster: 'bridal-lehenga-portrait' },
  { src: 'bridal-preparation', poster: 'bridal-lehenga-palace' },
  { src: 'eye-makeup', poster: 'bridal-lehenga-details' },
  { src: 'salon-styling', poster: 'haircut-styling' },
  { src: 'salon-preparation', poster: 'hair-spa-wash' },
  { src: 'nail-polish', poster: 'photo-1604654894610-df63bc536371' },
  { src: 'manicure-detail', poster: 'photo-1604654894610-df63bc536371' },
  { src: 'hair-care', poster: 'haircut-styling' },
];

export default function VideoSection() {
  return (
    <section className="section video-section" aria-labelledby="video-heading">
      <SectionHeading
        eyebrow="BEAUTY IN MOTION"
        title="A little inspiration, brought to life"
        description="Swipe to explore. Tap a video to watch the linked reel on Instagram."
        center
      />
      <h2 id="video-heading" className="video-section-label">Beauty video inspiration</h2>
      <div className="video-grid" role="list" aria-label="Beauty videos linking to Instagram" tabIndex={0}>
        {instagramReels.map((url, index) => (
          <article className="video-card reel-preview-card" key={url} role="listitem">
            <a className="reel-preview" href={url} target="_blank" rel="noopener noreferrer" aria-label={'Watch reel ' + (index + 1) + ' on Instagram (opens in a new tab)'}
              onMouseEnter={(event) => { void event.currentTarget.querySelector('video')?.play().catch(() => {}); }}
              onMouseLeave={(event) => { event.currentTarget.querySelector('video')?.pause(); }}
              onFocus={(event) => { void event.currentTarget.querySelector('video')?.play().catch(() => {}); }}
              onBlur={(event) => { event.currentTarget.querySelector('video')?.pause(); }}>
              <video muted loop playsInline preload="none" poster={'/images/' + previews[index].poster + '.jpg'} aria-hidden="true" tabIndex={-1}>
                <source src={'/videos/' + previews[index].src + '.mp4'} type="video/mp4" />
              </video>
              <span className="reel-play" aria-hidden="true">&#9654;</span>
              <span className="reel-open">Watch on Instagram <span aria-hidden="true">&#8599;</span></span>
            </a>
          </article>
        ))}
      </div>
      <p className="price-note video-note">Illustrative stock previews. Each card opens an independent creator&#39;s Instagram reel.</p>
    </section>
  );
}
