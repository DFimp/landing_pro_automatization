"use client"

export const MOBILE_BREAKPOINT = 600

export function isMobile() {
    return window.screen.width <= MOBILE_BREAKPOINT
}