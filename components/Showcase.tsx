import React, { useEffect, useMemo, useRef, useState } from "react";
import { SHOWCASE_IMAGES } from "../constants";

const COLS = 5;
const DURATION = 90000;          // column loop speed
const GAP = "1rem";
const BASE_GRID_OPACITY = 0.9;   // bright like Lux

const Showcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  const [entered, setEntered] = useState(false);
  const [progress, setProgress] = useState(0); // 0 (top) -> 1 (bottom of section)
  const [dirUp, setDirUp] = useState(false);

  // reveal animations only when visible
  useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setEntered(true)),
      { threshold: 0.2 }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // track scroll progress & direction
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setDirUp(y < lastY.current);
      lastY.current = y;

      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const dist = Math.max(1, height - vh);
      const amt = Math.min(Math.max(-top, 0), dist);
      setProgress(amt / dist);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 5 columns (round-robin) for a masonry feel
  const columns = useMemo(() => {
    const cols: string[][] = Array.from({ length: COLS }, () => []);
    SHOWCASE_IMAGES.forEach((src, i) => cols[i % COLS].push(src));
    return cols;
  }, []);

  // Grid opacity & zoom (zoom in while scrolling down; zoom back on up)
  const gridOpacity = (entered ? BASE_GRID_OPACITY : 0) * (1 - progress);
  const gridScale = dirUp ? 1 - progress * 0.03 : 1 + progress * 0.05;

  // Title: move back in 3D, shrink, fade out as we scroll down
  const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
  const p = clamp(progress);

  const titleScale = clamp(1 - p * 0.5);     // 1 → 0.5
  const titleTranslateZ = -600 * p;          // 0 → -600px
  const titleOpacity = clamp(1 - p * 1.3);   // 1 → 0 (slightly quick fade)
  const titleOpacityBiased = clamp(dirUp ? Math.min(1, titleOpacity + 0.12) : titleOpacity);
  const titleTransform = `translateZ(${titleTranslateZ}px) scale(${titleScale})`;

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-black">
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0 transition-[opacity,transform]"
          style={{
            opacity: gridOpacity,
            transform: `scale(${gridScale})`,
            transition: "opacity 800ms ease-out, transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "opacity, transform"
          }}
          aria-hidden
        >
          <div
            className="absolute inset-0"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${COLS}, minmax(0,1fr))`,
              gap: GAP,
              padding: GAP
            }}
          >
            {columns.map((col, i) => {
              const anim = i % 2 === 0 ? "col-up" : "col-down";
              const delay = i * 240; // subtle stagger
              return (
                <div key={i} className="relative h-full w-full overflow-hidden rounded-xl">
                  <div
                    className={`absolute left-0 top-0 w-full ${anim}`}
                    style={{
                      animationDuration: `${DURATION}ms`,
                      animationDelay: `${delay}ms`
                    }}
                  >
                    {/* block 1 */}
                    <div className="flex flex-col gap-4">
                      {col.map((src, j) => (
                        <div
                          key={`a-${i}-${j}`}
                          className="w-full overflow-hidden rounded-lg shadow-lg"
                          style={{
                            aspectRatio: j % 3 === 0 ? "4 / 5" : j % 3 === 1 ? "3 / 4" : "1 / 1"
                          }}
                        >
                          <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    {/* block 2 duplicate for seamless loop */}
                    <div className="mt-4 flex flex-col gap-4">
                      {col.map((src, j) => (
                        <div
                          key={`b-${i}-${j}`}
                          className="w-full overflow-hidden rounded-lg shadow-lg"
                          style={{
                            aspectRatio: j % 3 === 0 ? "4 / 5" : j % 3 === 1 ? "3 / 4" : "1 / 1"
                          }}
                        >
                          <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft overlay for legibility */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/15 via-black/35 to-black/15" />

        {/* Title */}
        <div
          className="relative z-10 flex h-full items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="text-center text-white"
            style={{
              opacity: titleOpacityBiased,
              transform: titleTransform,
              transformOrigin: "50% 50%",
              transition: "opacity 420ms ease-out, transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "opacity, transform"
            }}
          >
            <h2
              className="text-6xl md:text-8xl font-extrabold tracking-tight"
              style={{
                fontFamily: "'Poppins','Inter','Helvetica Neue',sans-serif",
                letterSpacing: "-0.04em",
                textShadow: "0 8px 25px rgba(0,0,0,0.4)"
              }}
            >
              RS Wedding
            </h2>

            <p
              className="text-2xl md:text-3xl italic mt-2"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontFamily: "'Playfair Display','Georgia',serif",
                letterSpacing: "0.04em",
                textShadow: "0 2px 10px rgba(0,0,0,0.45)"
              }}
            >
              Photography
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Alternating column motion */
        @keyframes column-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes column-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .col-up   { animation: column-up   linear infinite; will-change: transform; }
        .col-down { animation: column-down linear infinite; will-change: transform; }

        /* Title initial entrance */
        @keyframes fade-slide-in {
          0%   { opacity: 0; transform: translateY(24px) scale(0.98); filter: blur(2px); }
          60%  { opacity: 0.85; transform: translateY(6px)  scale(0.995); filter: blur(0.5px); }
          100% { opacity: 1; transform: translateY(0)     scale(1);     filter: blur(0); }
        }
        .heading-reveal {
          opacity: 0;
          animation: fade-slide-in 1.1s ease-out forwards;
          animation-delay: 120ms;
        }
        .sub-reveal {
          opacity: 0;
          animation: fade-slide-in 1.25s ease-out forwards;
          animation-delay: 380ms;
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .col-up, .col-down { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
