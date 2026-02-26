"use client";

import { useEffect, useRef } from "react";

type Props = {
  activeIndex: number | null;
};

type Point = { x: number; y: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function measurePoints(container: HTMLElement) {
  const canvas = container.querySelector<HTMLCanvasElement>("canvas");
  const circle = document.getElementById("bonus_center");
  const bonuses = Array.from(container.querySelectorAll<HTMLElement>(".bonus"));

  if (!canvas || !circle || bonuses.length === 0) return null;

  const containerRect = container.getBoundingClientRect();
  const canvasRect = canvas.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();

  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(containerRect.width * dpr);
  canvas.height = Math.round(containerRect.height * dpr);
  canvas.style.width = `${containerRect.width}px`;
  canvas.style.height = `${containerRect.height}px`;

  const start: Point = {
    x: circleRect.width / 2 + circleRect.x - canvasRect.x,
    y: circleRect.height / 2 + circleRect.y - canvasRect.y,
  };

  const ends: Point[] = bonuses.map((bonus, index) => {
    const bonusRect = bonus.getBoundingClientRect();

    const heightOffset = index < 2 ? bonusRect.height / 2 : 0;
    let widthOffset = 0;

    switch (index) {
      case 0:
        widthOffset = bonusRect.width;
        break;
      case 1:
        widthOffset = 0;
        break;
      case 2:
        widthOffset = bonusRect.width / 1.25;
        break;
      case 3:
        widthOffset = bonusRect.width / 3;
        break;
      default:
        widthOffset = bonusRect.width / 2;
    }

    return {
      x: widthOffset + bonusRect.x - canvasRect.x,
      y: heightOffset + bonusRect.y - canvasRect.y,
    };
  });

  return { canvas, start, ends, containerRect, dpr };
}

function drawLine(ctx: CanvasRenderingContext2D, a: Point, b: Point) {
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
}

export default function BonusesCanvas({ activeIndex }: Props) {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = document.getElementById("bonuses_list") as HTMLElement | null;
    if (!container) return;

    let frameStart = 0;

    const render = (t: number) => {
      if (!frameStart) frameStart = t;
      const measured = measurePoints(container);
      if (!measured) return;

      const { canvas, start, ends, dpr } = measured;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ends.forEach((end) => drawLine(ctx, start, end));

      if (activeIndex != null && ends[activeIndex]) {
        const end = ends[activeIndex];
        const pulse = 0.65 + 0.35 * Math.sin((t - frameStart) * 0.008);

        ctx.save();
        ctx.strokeStyle = `rgba(255,255,255,${clamp(pulse, 0.25, 1)})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(55,96,231,0.9)";
        ctx.shadowBlur = 12;
        drawLine(ctx, start, end);

        // Spark point moving towards the center
        const p = ((t - frameStart) / 900) % 1;
        const sx = end.x + (start.x - end.x) * p;
        const sy = end.y + (start.y - end.y) * p;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${clamp(pulse, 0.2, 1)})`;
        ctx.arc(sx, sy, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // subtle twinkle near the badge
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.12 + 0.12 * pulse})`;
        ctx.arc(end.x, end.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const drawOnce = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      const loop = (t: number) => {
        render(t);
        rafId.current = requestAnimationFrame(loop);
      };
      rafId.current = requestAnimationFrame(loop);
    };

    const onResize = () => {
      if (activeIndex == null) drawOnce();
    };

    window.addEventListener("resize", onResize);
    const timeout = window.setTimeout(() => {
      if (activeIndex == null) drawOnce();
      else startLoop();
    }, 0);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [activeIndex]);

  return null;
}

