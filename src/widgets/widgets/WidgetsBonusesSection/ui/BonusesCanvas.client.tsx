"use client";

import { useEffect } from "react";

function drawLines() {
    const canvas = document.querySelector<HTMLCanvasElement>("#bonuses_list canvas");
    const circle = document.getElementById("bonus_center");
    const bonuses = document.querySelectorAll<HTMLElement>("#bonuses_list .bonus");
    const container = document.getElementById("bonuses_list");

    if (!canvas || !circle || !container || bonuses.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(containerRect.width * dpr);
    canvas.height = Math.round(containerRect.height * dpr);
    canvas.style.width = `${containerRect.width}px`;
    canvas.style.height = `${containerRect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, containerRect.width, containerRect.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    bonuses.forEach((bonus, index) => {
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
        }

        ctx.beginPath();
        ctx.moveTo(
            circleRect.width / 2 + circleRect.x - canvasRect.x,
            circleRect.height / 2 + circleRect.y - canvasRect.y
        );
        ctx.lineTo(
            widthOffset + bonusRect.x - canvasRect.x,
            heightOffset + bonusRect.y - canvasRect.y
        );
        ctx.stroke();
    });
}

export default function BonusesCanvas() {
    useEffect(() => {
        const t = window.setTimeout(drawLines, 0);

        const onResize = () => drawLines();
        window.addEventListener("resize", onResize);

        return () => {
            window.clearTimeout(t);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return null;
}
