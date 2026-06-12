import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "2Vv-BfVoq4g";

interface Props {
  onEnter: () => void;
}

export function Loader({ onEnter }: Props) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const start = performance.now();
    const duration = 2400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setReady(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const enter = () => {
    // Start the music — must be inside a user gesture for sound to play.
    iframeRef.current?.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*",
    );
    setLeaving(true);
    setTimeout(onEnter, 1100);
  };

  return (
    <>
      {/* Persistent hidden iframe — survives loader unmount via portal-like fixed position on body */}
      <iframe
        ref={iframeRef}
        title="bg-music"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1`}
        style={{ position: "fixed", width: 1, height: 1, opacity: 0, pointerEvents: "none", border: 0, top: 0, left: 0 }}
        allow="autoplay; encrypted-media"
      />
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{
          backgroundColor: "var(--cream)",
          opacity: leaving ? 0 : 1,
          transform: leaving ? "scale(1.05)" : "scale(1)",
          transition: "opacity 1s ease, transform 1.2s ease",
          pointerEvents: leaving ? "none" : "auto",
        }}
      >
        {/* Floating gold particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute block rounded-full"
              style={{
                width: `${3 + (i % 4)}px`,
                height: `${3 + (i % 4)}px`,
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 11) % 100}%`,
                background: i % 2 ? "var(--gold)" : "var(--rose-soft)",
                opacity: 0.4,
                animation: `float ${6 + (i % 4)}s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Animated heart */}
        <div className="relative mb-12">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s-7-4.5-9.5-9C.8 9.2 2.4 5 6 5c2.1 0 3.5 1.2 4.5 2.7C11.5 6.2 12.9 5 15 5c3.6 0 5.2 4.2 3.5 7-2.5 4.5-9.5 9-9.5 9z"
              stroke="var(--rose)"
              strokeWidth="0.5"
              fill="var(--rose)"
              fillOpacity={progress}
              style={{ transition: "fill-opacity 0.2s linear" }}
            />
          </svg>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: `0 0 ${40 + progress * 60}px ${progress * 20}px rgba(184,107,122,0.3)`,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>

        <p className="font-script text-4xl text-[color:var(--rose)] md:text-5xl">nossa história</p>
        <div className="mt-3 font-serif text-xs uppercase tracking-[0.6em] text-[color:var(--ink-soft)]">
          está prestes a começar
        </div>

        {/* Progress line */}
        <div className="mt-12 h-px w-64 overflow-hidden bg-[color:var(--rose-soft)]">
          <div
            className="h-full bg-[color:var(--gold)]"
            style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }}
          />
        </div>

        <button
          onClick={enter}
          disabled={!ready}
          className="mt-16 rounded-full border border-[color:var(--gold)] px-10 py-4 font-serif text-sm uppercase tracking-[0.4em] text-[color:var(--ink)] transition-all hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] disabled:cursor-not-allowed"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease, transform 1s ease, background 0.4s ease, color 0.4s ease",
          }}
        >
          ler
        </button>
        <p
          className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[color:var(--ink-soft)]"
          style={{ opacity: ready ? 0.7 : 0, transition: "opacity 1s ease 0.3s" }}
        >
          com som ♪
        </p>
      </div>
    </>
  );
}
