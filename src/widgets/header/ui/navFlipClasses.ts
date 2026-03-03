export const navFlip = {
  link:
    "group relative inline-flex items-center [perspective:900px] [-webkit-font-smoothing:antialiased] no-underline [--nav-flip-depth:0.55em] motion-reduce:group-hover:text-[var(--nav-flip-hover-color,rgb(37_99_235))] motion-reduce:group-focus-visible:text-[var(--nav-flip-hover-color,rgb(37_99_235))]",
  inner:
    "relative inline-block [transform-style:preserve-3d] [transform-origin:50%_50%_calc(-1*var(--nav-flip-depth))] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:[transform:rotateX(90deg)] group-focus-visible:[transform:rotateX(90deg)] motion-reduce:!transition-none motion-reduce:!transform-none motion-reduce:group-hover:!transform-none motion-reduce:group-focus-visible:!transform-none",
  front:
    "block [backface-visibility:hidden] [transform:translateZ(var(--nav-flip-depth))]",
  top: "absolute inset-0 block [backface-visibility:hidden] [transform-origin:50%_50%] [transform:translateY(-0.04em)_rotateX(-90deg)_translateZ(var(--nav-flip-depth))] text-[var(--nav-flip-hover-color,rgb(37_99_235))]",
};
