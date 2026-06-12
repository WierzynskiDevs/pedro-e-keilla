import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Loader } from "@/components/Loader";

import p2Src from "@/assets/p2.jpeg";
import p3Src from "@/assets/p3.jpeg";
import p4Src from "@/assets/p4.jpeg";
import p5Src from "@/assets/p5.jpeg";
import p6Src from "@/assets/p6.jpeg";
import p7Src from "@/assets/p7.jpeg";
import p8Src from "@/assets/p8.jpeg";
import p9Src from "@/assets/p9.jpeg";
import p11Src from "@/assets/p11.png";
import coupleSrc from "@/assets/couple.jpeg";
import newbornSrc from "@/assets/newborn.jpeg";
import family4Src from "@/assets/family4.jpeg";

const p2 = { url: p2Src };
const p3 = { url: p3Src };
const p4 = { url: p4Src };
const p5 = { url: p5Src };
const p6 = { url: p6Src };
const p7 = { url: p7Src };
const p8 = { url: p8Src };
const p9 = { url: p9Src };
const p11 = { url: p11Src };
const couple = { url: coupleSrc };
const newborn = { url: newbornSrc };
const family4 = { url: family4Src };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nosso Para Sempre" },
      { name: "description", content: "Uma carta de amor em forma de livro — momentos, juras e o nosso para sempre." },
      { property: "og:title", content: "Nosso Para Sempre" },
      { property: "og:description", content: "Uma carta de amor em forma de livro." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Pinyon+Script&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="h-px w-16 bg-[color:var(--gold)] opacity-50" />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[color:var(--gold)]">
        <path d="M12 21s-7-4.5-9.5-9C.8 9.2 2.4 5 6 5c2.1 0 3.5 1.2 4.5 2.7C11.5 6.2 12.9 5 15 5c3.6 0 5.2 4.2 3.5 7-2.5 4.5-9.5 9-9.5 9z"
          fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="h-px w-16 bg-[color:var(--gold)] opacity-50" />
    </div>
  );
}

function PageFrame({ children, pageLabel }: { children: ReactNode; pageLabel: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[color:var(--cream)] px-4 py-10 md:px-12 md:py-14">
      <span className="page-edge page-edge-left" />
      <span className="page-edge page-edge-right" />
      {/* corner ornaments */}
      <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 border-l border-t border-[color:var(--gold)] opacity-50 md:left-8 md:top-8 md:h-16 md:w-16" />
      <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 border-r border-t border-[color:var(--gold)] opacity-50 md:right-8 md:top-8 md:h-16 md:w-16" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 border-b border-l border-[color:var(--gold)] opacity-50 md:bottom-8 md:left-8 md:h-16 md:w-16" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[color:var(--gold)] opacity-50 md:bottom-8 md:right-8 md:h-16 md:w-16" />
      <div className="relative flex h-full w-full items-center justify-center">{children}</div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-[color:var(--ink-soft)] md:bottom-5">
        {pageLabel}
      </div>
    </div>
  );
}

interface ChapterProps {
  image: { url: string };
  chapter: string;
  title: string;
  body: string;
  reverse?: boolean;
}
function Chapter({ image, chapter, title, body, reverse }: ChapterProps) {
  return (
    <div className={`grid h-full w-full max-w-5xl items-center gap-3 md:grid-cols-2 md:gap-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="relative mx-auto h-[32vh] w-full max-w-[14rem] md:h-auto md:max-h-[70vh] md:max-w-sm">
        <div className="absolute -inset-1.5 rounded-sm border border-[color:var(--gold)] opacity-50 md:-inset-3" />
        <img src={image.url} alt={title}
          className="relative h-full w-full rounded-sm object-cover shadow-[0_30px_80px_-30px_rgba(120,40,60,0.45)]" />
      </div>
      <div className="text-center md:text-left">
        <p className="font-script text-xl text-[color:var(--rose)] md:text-3xl">{chapter}</p>
        <h2 className="mt-1 font-serif text-2xl italic leading-tight md:text-5xl">{title}</h2>
        <div className={reverse ? "md:[&_.ornament]:justify-start" : ""}><Ornament /></div>
        <p className="mx-auto mt-2 max-w-md font-serif text-sm leading-relaxed text-[color:var(--ink-soft)] md:mx-0 md:mt-3 md:text-lg lg:text-xl">
          {body}
        </p>
      </div>
    </div>
  );
}

const chapters = [
  { image: p11, chapter: "capítulo um", title: "O primeiro olhar", body: "Antes mesmo de saber teu nome, algo no teu sorriso já me pertencia. Foi ali, num instante simples, que o mundo se reorganizou ao nosso redor." },
  { image: p2,  chapter: "capítulo dois", title: "Os dias comuns", body: "Aprendi que o extraordinário mora nas tardes lentas, nas risadas sem motivo, nas conversas que duram até o sono chegar.", reverse: true },
  { image: p3,  chapter: "capítulo três", title: "Cumplicidade", body: "Não precisamos dizer — um olhar, um toque, e tudo já está entendido. Esse silêncio nosso é a língua mais bonita que aprendi." },
  { image: p4,  chapter: "capítulo quatro", title: "Cada véspera contigo", body: "Mesmo os dias mais bobos viram lembrança quando partilhados. Tu transformas o ordinário em coisa de guardar.", reverse: true },
  { image: p5,  chapter: "capítulo cinco", title: "As festas, os abraços", body: "Em cada celebração, em cada beijo no rosto, a certeza: meu lugar favorito é ao teu lado." },
  { image: p7,  chapter: "capítulo seis", title: "O sim eterno", body: "Diante de todos e diante de nós mesmos, repeti a única promessa que sempre soube ser verdadeira: para sempre.", reverse: true },
  { image: p6,  chapter: "capítulo sete", title: "Casa", body: "Descobri que casa não é endereço — é o teu colo, teu cheiro, tua presença quieta. Onde tu estás, eu estou em casa." },
  { image: p8,  chapter: "capítulo oito", title: "Caminhos lado a lado", body: "Atravessamos cidades, paisagens e estações. Em todas as fotos, a mesma certeza: nenhum caminho é longo demais contigo.", reverse: true },
  { image: couple, chapter: "capítulo nove", title: "Costas com costas, alma com alma", body: "Mesmo sem nos olharmos, sabíamos: éramos o apoio um do outro. Foi assim que aprendemos a confiar — sustentando o silêncio um do outro." },
  { image: newborn, chapter: "capítulo dez", title: "O primeiro suspiro dela", body: "Quando ela chegou, o mundo se aquietou. Em meio ao dourado da festa, o brilho maior era aquele pequeno rosto adormecido nos nossos braços.", reverse: true },
  { image: p9,  chapter: "capítulo onze", title: "A espera mais doce", body: "Um amor que cabia em dois agora se preparava para caber em mais um. Cada batida — minha, tua, dele — em ritmo certo." },
  { image: family4, chapter: "capítulo doze", title: "Agora somos quatro", body: "Os colos cheios, o riso multiplicado, o coração transbordando. O nosso para sempre virou família — e nunca foi tão inteiro.", reverse: true },
];

function HeroPage() {
  return (
    <div className="text-center">
      <p className="text-[10px] uppercase tracking-[0.6em] text-[color:var(--ink-soft)] md:text-xs">Para sempre · Forever</p>
      <div className="my-4 md:my-6"><Ornament /></div>
      <h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
        <span className="shimmer-text italic">Nosso</span><br />
        <span className="font-script text-6xl text-[color:var(--rose)] md:text-8xl lg:text-9xl">Para Sempre</span>
      </h1>
      <p className="mx-auto mt-6 max-w-md font-serif text-base italic text-[color:var(--ink-soft)] md:mt-10 md:text-lg">
        "I found a love for me…<br />darling, just dive right in."
      </p>
    </div>
  );
}

function ClosingPage() {
  return (
    <div className="text-center">
      <Ornament />
      <h2 className="mt-6 font-script text-5xl text-[color:var(--rose)] md:text-7xl lg:text-8xl">
        para sempre,<br />e um dia a mais
      </h2>
      <p className="mt-8 font-serif text-base italic text-[color:var(--ink-soft)] md:text-lg">
        — com todo o meu amor.
      </p>
      <div className="mt-10 flex items-center justify-center gap-3 text-[color:var(--gold)]">
        <span className="h-px w-20 bg-current opacity-50" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21s-7-4.5-9.5-9C.8 9.2 2.4 5 6 5c2.1 0 3.5 1.2 4.5 2.7C11.5 6.2 12.9 5 15 5c3.6 0 5.2 4.2 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
        </svg>
        <span className="h-px w-20 bg-current opacity-50" />
      </div>
    </div>
  );
}

function Index() {
  const [entered, setEntered] = useState(false);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);


  const pages: { node: ReactNode; label: string }[] = [
    { node: <HeroPage />, label: "prólogo" },
    ...chapters.map((c, i) => ({
      node: <Chapter {...c} />,
      label: `página ${i + 1} de ${chapters.length}`,
    })),
    { node: <ClosingPage />, label: "epílogo" },
  ];

  const total = pages.length;

  const go = useCallback(
    (delta: number) => {
      if (animating) return;
      const next = current + delta;
      if (next < 0 || next >= total) return;
      setAnimating(true);
      setCurrent(next);
      setTimeout(() => setAnimating(false), 1150);
    },
    [animating, current, total],
  );

  useEffect(() => {
    if (!entered) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [entered, go]);


  return (
    <div className="fixed inset-0 overflow-hidden" style={{ backgroundColor: "var(--cream-deep)" }}>
      {!entered && <Loader onEnter={() => setEntered(true)} />}

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 1.2s ease 0.2s",
        }}
      >
        {/* Floating ambient particles */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="absolute block rounded-full"
              style={{
                width: `${5 + (i % 4) * 3}px`, height: `${5 + (i % 4) * 3}px`,
                left: `${(i * 8.3) % 100}%`, top: `${(i * 13) % 100}%`,
                background: i % 2 ? "var(--rose-soft)" : "var(--gold)",
                opacity: 0.18,
                animation: `float ${8 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
              }} />
          ))}
        </div>

        {/* Book */}
        <div className="book-stage relative h-[88vh] w-[94vw] max-w-6xl">
          {pages.map((p, i) => {
            const flipped = i < current;
            const isCurrent = i === current;
            // z-ordering: pages stacked, top of stack should be the current page.
            // Flipped pages need to sit above un-flipped further ones during animation.
            const z = flipped ? 10 + i : total - i;
            return (
              <div
                key={i}
                className={`book-page ${flipped ? "is-flipped" : isCurrent ? "is-current" : ""}`}
                style={{ zIndex: z }}
                aria-hidden={!isCurrent}
              >
                <PageFrame pageLabel={p.label}>{p.node}</PageFrame>
              </div>
            );
          })}
        </div>

        {/* Navigation controls */}
        <button
          onClick={() => go(-1)}
          disabled={current === 0 || animating}
          aria-label="página anterior"
          className="absolute left-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--gold)] bg-white/70 text-[color:var(--ink)] backdrop-blur-md transition-all hover:scale-110 hover:bg-white disabled:opacity-30 md:left-6 md:h-14 md:w-14"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          disabled={current === total - 1 || animating}
          aria-label="próxima página"
          className="absolute right-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--gold)] bg-white/70 text-[color:var(--ink)] backdrop-blur-md transition-all hover:scale-110 hover:bg-white disabled:opacity-30 md:right-6 md:h-14 md:w-14"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {/* Progress dots */}
        <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2 md:bottom-6">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => !animating && setCurrent(i)}
              aria-label={`ir para página ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === current ? 28 : 8,
                background: i === current ? "var(--rose)" : "var(--rose-soft)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
