"use client";

import clsx from "clsx";
import Image from "next/image";
import { useId, useState } from "react";
import Modal from "@/shared/ui/Modal/Modal";

type HomeCertificateCardProps = {
  title: string;
  description: string;
  buttonText: string;
};

export default function HomeCertificateCard({
  title,
  description,
  buttonText,
}: HomeCertificateCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      <div className="mt-6 rounded-[28px] border border-white/12 bg-white/6 p-4">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => setIsExpanded((current) => !current)}
          className="flex w-full items-center justify-between gap-4 text-left text-[14px] font-semibold text-white"
        >
          <span>{buttonText}</span>

          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/10 transition-[transform,background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/14">
            <span className="relative h-3 w-3">
              <span className="absolute left-0 top-1/2 h-[2px] w-3 -translate-y-1/2 rounded-full bg-white" />
              <span
                className={clsx(
                  "absolute left-1/2 top-0 h-3 w-[2px] -translate-x-1/2 rounded-full bg-white transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isExpanded ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
                )}
              />
            </span>
          </span>
        </button>

        <div
          id={panelId}
          className={clsx(
            "grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isExpanded ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-70"
          )}
        >
          <div className="overflow-hidden">
            <div
              className={clsx(
                "relative overflow-hidden rounded-[24px] border border-white/12 bg-white/4 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isExpanded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
            >
              <Image
                src="/certificate_amoSTART.jpg"
                alt={title}
                width={1024}
                height={768}
                className="h-auto w-full"
              />

              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-[rgba(10,20,40,0.68)] text-white shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-[1px] hover:bg-[rgba(18,33,64,0.86)]"
                aria-label="Открыть сертификат крупнее"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="8.5" cy="8.5" r="5.75" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12.8 12.8L17 17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        panelClassName="!mx-4 !max-w-[980px] !rounded-[28px] !border-[rgba(140,167,255,0.24)] !bg-[#081427] !shadow-[0_40px_120px_rgba(2,10,30,0.55)]"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#081427] p-3 sm:p-4">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(false)}
            className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[rgba(10,20,40,0.72)] text-white/88 transition-colors duration-200 hover:bg-[rgba(17,34,66,0.92)]"
            aria-label="Закрыть просмотр сертификата"
          >
            <span className="text-xl leading-none">×</span>
          </button>

          <div className="overflow-hidden rounded-[22px] border border-white/10">
            <Image
              src="/certificate_amoSTART.jpg"
              alt={description}
              width={1024}
              height={768}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
