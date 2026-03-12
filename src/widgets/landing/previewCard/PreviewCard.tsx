'use client';

import React from 'react';
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
    <section
      id={id}
      style={{ paddingTop: "30px", paddingBottom: "30px" }}
      className={`relative z-0 overflow-hidden bg-white text-left max-[768px]:text-center [--pc-pt:80px] [--pc-pb:80px] max-[768px]:[--pc-pt:48px] max-[768px]:[--pc-pb:56px] max-[480px]:[--pc-pt:40px] max-[480px]:[--pc-pb:44px] ${hasMedia ? "before:content-[''] before:absolute before:top-[-140px] before:bottom-[-140px] before:left-[calc(50%-60vw)] before:w-[680px] before:bg-[url('/widgets/TelegramButton/subtract.webp')] before:bg-no-repeat before:bg-left before:bg-[length:520px_auto] before:z-[1] before:pointer-events-none after:content-[''] after:absolute after:left-[calc(50%-55vw-260px)] after:top-1/2 after:w-[1020px] after:h-[820px] after:-translate-y-1/2 after:z-0 after:pointer-events-none after:blur-[70px] after:bg-[radial-gradient(closest-side_at_58%_50%,rgba(60,14,224,0.85),transparent_70%),radial-gradient(closest-side_at_60%_52%,rgba(16,0,241,0.82),transparent_90%)] max-[1200px]:before:left-[calc(50%-55vw)] max-[1200px]:before:w-[600px] max-[1200px]:before:bg-[length:480px_auto] max-[1200px]:after:left-[calc(50%-58vw-220px)] max-[1200px]:after:w-[900px] max-[1200px]:after:h-[720px] max-[1200px]:after:blur-[60px] max-[768px]:before:top-[-120px] max-[768px]:before:bottom-[-120px] max-[768px]:before:left-[calc(50%-68vw)] max-[768px]:before:w-[420px] max-[768px]:before:bg-[length:360px_auto] max-[768px]:after:left-[calc(50%-78vw-140px)] max-[768px]:after:w-[720px] max-[768px]:after:h-[560px] max-[768px]:after:blur-[60px] max-[480px]:before:left-[calc(50%-80vw)] max-[480px]:before:w-[360px] max-[480px]:before:bg-[length:320px_auto] max-[480px]:after:left-[calc(50%-90vw-120px)] max-[480px]:after:w-[620px] max-[480px]:after:h-[500px] max-[480px]:after:blur-[55px]" : ""}`}
    >
      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-4">
        <h2 className="text-[clamp(22px,3.2vw,32px)] font-bold text-[#0f1427] mb-[6px] max-[768px]:text-[clamp(22px,6.4vw,30px)] max-[768px]:mx-auto max-[768px]:mb-2 max-[768px]:max-w-[92%] max-[480px]:text-[clamp(20px,7.5vw,28px)] max-[480px]:mb-[6px]">{title}</h2>
        <p className="text-[#5a6180] my-[4px] mb-[18px] text-[16px] leading-[1.6] max-[768px]:mx-auto max-[768px]:mb-[18px] max-[768px]:text-[15px] max-[768px]:leading-[1.55] max-[768px]:max-w-[92%] max-[480px]:text-[14px] max-[480px]:mb-[16px]">{subtitle}</p>

        {hasMedia && (
          <div className="border border-[#d6daf3] rounded-[14px] overflow-hidden bg-[#f9fafc] p-8 flex justify-center items-center mx-auto mb-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] h-[700px] max-[768px]:w-[92%] max-[768px]:max-w-[560px] max-[768px]:mb-[14px] max-[768px]:p-[18px] max-[768px]:rounded-[22px] max-[768px]:border-[2px] max-[768px]:border-[#5f78ff] max-[768px]:bg-white max-[768px]:shadow-[0_14px_26px_rgba(20,27,51,0.08),0_0_0_1px_rgba(95,120,255,0.04)] max-[768px]:h-auto max-[768px]:aspect-[16/9] max-[480px]:w-[92%] max-[480px]:p-4 max-[480px]:rounded-[20px] max-[480px]:border-[2px] max-[480px]:aspect-[16/9]">
            {isYouTubeOrVimeo ? (
              <div className="w-full h-full">
                <iframe
                  src={videoUrl}
                  title="Видео"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : isGif ? (
              <img src={videoUrl} alt="превью" className="block w-full h-auto rounded-[10px]" />
            ) : isMp4 || isWebm ? (
              <video
                className="w-full h-full object-cover rounded-[10px]"
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
              <div className="relative inline-block max-w-full">
                <img src={imageUrl} alt="превью" className="block w-full h-auto rounded-[10px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-[linear-gradient(135deg,#715cff_0%,#8a63ff_100%)] text-white text-[30px] flex items-center justify-center shadow-[0_6px_14px_rgba(0,0,0,0.25)] cursor-pointer transition-[transform,background] duration-200 hover:scale-[1.08] hover:bg-[linear-gradient(135deg,#5d49e8_0%,#7e56ff_100%)] max-[768px]:w-[56px] max-[768px]:h-[56px] max-[768px]:text-[24px] max-[768px]:shadow-[0_6px_16px_rgba(0,0,0,0.22)] max-[480px]:w-[52px] max-[480px]:h-[52px] max-[480px]:text-[22px]">▶</div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviewCard;
