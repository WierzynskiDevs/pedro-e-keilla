import { useEffect, useRef, useState } from "react";

// Plays the audio from the requested YouTube video as background music via a hidden iframe.
// Browsers block autoplay with sound; user must tap the button once.
const VIDEO_ID = "2Vv-BfVoq4g";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [shown, setShown] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 600);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    const next = !playing;
    setPlaying(next);
    const msg = next
      ? '{"event":"command","func":"playVideo","args":""}'
      : '{"event":"command","func":"pauseVideo","args":""}';
    iframeRef.current?.contentWindow?.postMessage(msg, "*");
  };

  return (
    <>
      <iframe
        ref={iframeRef}
        title="bg-music"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1`}
        style={{ position: "fixed", width: 1, height: 1, opacity: 0, pointerEvents: "none", border: 0 }}
        allow="autoplay; encrypted-media"
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-[color:var(--rose-soft)] bg-white/80 px-4 py-3 text-xs uppercase tracking-[0.25em] text-[color:var(--ink)] shadow-[0_10px_40px_-15px_rgba(120,40,60,0.35)] backdrop-blur-md transition-all hover:scale-105"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 800ms ease, transform 800ms ease",
        }}
      >
        <span
          className={`inline-block h-2 w-2 rounded-full ${playing ? "bg-[color:var(--rose)]" : "bg-[color:var(--ink-soft)]"}`}
          style={{ animation: playing ? "pulse 1.6s ease-in-out infinite" : "none" }}
        />
        {playing ? "Tocando" : "Tocar música"}
      </button>
    </>
  );
}
