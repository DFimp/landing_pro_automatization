'use client';

import React from 'react';
import './PreviewCard.css';

interface PreviewCardProps {
    title: string;
    subtitle: string;
    videoUrl?: string;
    imageUrl?: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ title, subtitle, videoUrl, imageUrl }) => {
    return (
        <section className="preview-section">
            <div className="at-container">
                <h2 className="preview-title">{title}</h2>
                <p className="preview-subtitle">{subtitle}</p>

                <div className="preview-frame">
                    {videoUrl ? (
                        <video className="preview-video" controls poster={imageUrl}>
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    ) : (
                        <div className="preview-placeholder">
                            <img src={imageUrl} alt="Превью" className="preview-image" />
                            <div className="preview-play">
                                ▶
                            </div>
                        </div>
                    )}
                </div>

                <p className="preview-footer">
                    Виджет показывает время клиента, регион и оператора связи прямо в amoCRM
                </p>
            </div>
        </section>
    );
};

export default PreviewCard;
