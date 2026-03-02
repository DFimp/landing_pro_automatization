'use client';

import React from 'react';
import './PreviewCard.css';

interface PreviewCardProps {
  title: string;
  subtitle: string;
  videoUrl?: string;   // mp4/webm или embed-ссылка YouTube/Vimeo
  imageUrl?: string;   // постер или GIF
  id?: string
}

const PreviewCard: React.FC<PreviewCardProps> = ({ title, subtitle, videoUrl, imageUrl, id }) => {
  const isYouTubeOrVimeo = !!videoUrl && /(youtube\.com|youtu\.be|vimeo\.com)/i.test(videoUrl);
  const isGif = !!(videoUrl && videoUrl.toLowerCase().endsWith('.gif'));
  const isMp4 = !!(videoUrl && videoUrl.toLowerCase().endsWith('.mp4'));
  const isWebm = !!(videoUrl && videoUrl.toLowerCase().endsWith('.webm'));
  
  const hasMedia = !!(videoUrl || imageUrl);

  return (
    <section id={id} className={`preview-section ${hasMedia ? 'has-media' : ''}`}>
      <div className="at-container mx-auto w-full max-w-[1200px] px-4">
        <h2 className="preview-title">{title}</h2>
        <p className="preview-subtitle">{subtitle}</p>

        {hasMedia && (
          <div className="preview-frame">
            {isYouTubeOrVimeo ? (
              <div className="preview-embed">
                <iframe
                  src={videoUrl}
                  title="Видео"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : isGif ? (
              <img src={videoUrl} alt="превью" className="preview-image" />
            ) : isMp4 || isWebm ? (
              <video
                className="preview-video"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                poster={imageUrl}
                preload="metadata"
              >
                {isMp4 && <source src={videoUrl} type="video/mp4" />}
                {isWebm && <source src={videoUrl} type="video/webm" />}
              </video>
            ) : (
              <div className="preview-placeholder">
                <img src={imageUrl} alt="превью" className="preview-image" />
                <div className="preview-play">▶</div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviewCard;
