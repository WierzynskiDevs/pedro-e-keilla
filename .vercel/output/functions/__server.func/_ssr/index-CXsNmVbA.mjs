import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const VIDEO_ID = "2Vv-BfVoq4g";
function Loader({ onEnter }) {
  const [progress, setProgress] = reactExports.useState(0);
  const [ready, setReady] = reactExports.useState(false);
  const [leaving, setLeaving] = reactExports.useState(false);
  const iframeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const start = performance.now();
    const duration = 2400;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setReady(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const enter = () => {
    iframeRef.current?.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
    setLeaving(true);
    setTimeout(onEnter, 1100);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        ref: iframeRef,
        title: "bg-music",
        src: `https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1`,
        style: { position: "fixed", width: 1, height: 1, opacity: 0, pointerEvents: "none", border: 0, top: 0, left: 0 },
        allow: "autoplay; encrypted-media"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-[100] flex flex-col items-center justify-center",
        style: {
          backgroundColor: "var(--cream)",
          opacity: leaving ? 0 : 1,
          transform: leaving ? "scale(1.05)" : "scale(1)",
          transition: "opacity 1s ease, transform 1.2s ease",
          pointerEvents: leaving ? "none" : "auto"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: Array.from({ length: 18 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute block rounded-full",
              style: {
                width: `${3 + i % 4}px`,
                height: `${3 + i % 4}px`,
                left: `${i * 7.3 % 100}%`,
                top: `${i * 11 % 100}%`,
                background: i % 2 ? "var(--gold)" : "var(--rose-soft)",
                opacity: 0.4,
                animation: `float ${6 + i % 4}s ease-in-out ${i * 0.2}s infinite`
              }
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "80", height: "80", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M12 21s-7-4.5-9.5-9C.8 9.2 2.4 5 6 5c2.1 0 3.5 1.2 4.5 2.7C11.5 6.2 12.9 5 15 5c3.6 0 5.2 4.2 3.5 7-2.5 4.5-9.5 9-9.5 9z",
                stroke: "var(--rose)",
                strokeWidth: "0.5",
                fill: "var(--rose)",
                fillOpacity: progress,
                style: { transition: "fill-opacity 0.2s linear" }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 rounded-full",
                style: {
                  boxShadow: `0 0 ${40 + progress * 60}px ${progress * 20}px rgba(184,107,122,0.3)`,
                  animation: "pulse 2s ease-in-out infinite"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-4xl text-[color:var(--rose)] md:text-5xl", children: "nossa história" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-serif text-xs uppercase tracking-[0.6em] text-[color:var(--ink-soft)]", children: "está prestes a começar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 h-px w-64 overflow-hidden bg-[color:var(--rose-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-[color:var(--gold)]",
              style: { width: `${progress * 100}%`, transition: "width 0.1s linear" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: enter,
              disabled: !ready,
              className: "mt-16 rounded-full border border-[color:var(--gold)] px-10 py-4 font-serif text-sm uppercase tracking-[0.4em] text-[color:var(--ink)] transition-all hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] disabled:cursor-not-allowed",
              style: {
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 1s ease, transform 1s ease, background 0.4s ease, color 0.4s ease"
              },
              children: "ler"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-4 text-[10px] uppercase tracking-[0.4em] text-[color:var(--ink-soft)]",
              style: { opacity: ready ? 0.7 : 0, transition: "opacity 1s ease 0.3s" },
              children: "com som ♪"
            }
          )
        ]
      }
    )
  ] });
}
const p2Src = "/assets/p2-BIRA5jVL.jpeg";
const p3Src = "/assets/p3-CePGw957.jpeg";
const p4Src = "/assets/p4-BP_3bIZp.jpeg";
const p5Src = "/assets/p5-CPDzL3gb.jpeg";
const p6Src = "/assets/p6-DlEGDXti.jpeg";
const p7Src = "/assets/p7-BeAasinZ.jpeg";
const p8Src = "/assets/p8-DkPQQbr-.jpeg";
const p9Src = "/assets/p9-Dh8iJzSm.jpeg";
const p11Src = "/assets/p11-DRTGE2tC.png";
const coupleSrc = "/assets/couple-jJcuj64w.jpeg";
const newbornSrc = "/assets/newborn-BJtxHy5P.jpeg";
const family4Src = "/assets/family4-C-gSkHWh.jpeg";
const p2 = {
  url: p2Src
};
const p3 = {
  url: p3Src
};
const p4 = {
  url: p4Src
};
const p5 = {
  url: p5Src
};
const p6 = {
  url: p6Src
};
const p7 = {
  url: p7Src
};
const p8 = {
  url: p8Src
};
const p9 = {
  url: p9Src
};
const p11 = {
  url: p11Src
};
const couple = {
  url: coupleSrc
};
const newborn = {
  url: newbornSrc
};
const family4 = {
  url: family4Src
};
function Ornament() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-[color:var(--gold)] opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", className: "text-[color:var(--gold)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 21s-7-4.5-9.5-9C.8 9.2 2.4 5 6 5c2.1 0 3.5 1.2 4.5 2.7C11.5 6.2 12.9 5 15 5c3.6 0 5.2 4.2 3.5 7-2.5 4.5-9.5 9-9.5 9z", fill: "currentColor", fillOpacity: "0.3", stroke: "currentColor", strokeWidth: "1" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-[color:var(--gold)] opacity-50" })
  ] });
}
function PageFrame({
  children,
  pageLabel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full overflow-hidden bg-[color:var(--cream)] px-4 py-10 md:px-12 md:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "page-edge page-edge-left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "page-edge page-edge-right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-4 top-4 h-12 w-12 border-l border-t border-[color:var(--gold)] opacity-50 md:left-8 md:top-8 md:h-16 md:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-4 top-4 h-12 w-12 border-r border-t border-[color:var(--gold)] opacity-50 md:right-8 md:top-8 md:h-16 md:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-4 left-4 h-12 w-12 border-b border-l border-[color:var(--gold)] opacity-50 md:bottom-8 md:left-8 md:h-16 md:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b border-r border-[color:var(--gold)] opacity-50 md:bottom-8 md:right-8 md:h-16 md:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-full w-full items-center justify-center", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-[color:var(--ink-soft)] md:bottom-5", children: pageLabel })
  ] });
}
function Chapter({
  image,
  chapter,
  title,
  body,
  reverse
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid h-full w-full max-w-5xl items-center gap-3 md:grid-cols-2 md:gap-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto h-[32vh] w-full max-w-[14rem] md:h-auto md:max-h-[70vh] md:max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1.5 rounded-sm border border-[color:var(--gold)] opacity-50 md:-inset-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.url, alt: title, className: "relative h-full w-full rounded-sm object-cover shadow-[0_30px_80px_-30px_rgba(120,40,60,0.45)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-xl text-[color:var(--rose)] md:text-3xl", children: chapter }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-serif text-2xl italic leading-tight md:text-5xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: reverse ? "md:[&_.ornament]:justify-start" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-2 max-w-md font-serif text-sm leading-relaxed text-[color:var(--ink-soft)] md:mx-0 md:mt-3 md:text-lg lg:text-xl", children: body })
    ] })
  ] });
}
const chapters = [{
  image: p11,
  chapter: "capítulo um",
  title: "O primeiro olhar",
  body: "Antes mesmo de saber teu nome, algo no teu sorriso já me pertencia. Foi ali, num instante simples, que o mundo se reorganizou ao nosso redor."
}, {
  image: p2,
  chapter: "capítulo dois",
  title: "Os dias comuns",
  body: "Aprendi que o extraordinário mora nas tardes lentas, nas risadas sem motivo, nas conversas que duram até o sono chegar.",
  reverse: true
}, {
  image: p3,
  chapter: "capítulo três",
  title: "Cumplicidade",
  body: "Não precisamos dizer — um olhar, um toque, e tudo já está entendido. Esse silêncio nosso é a língua mais bonita que aprendi."
}, {
  image: p4,
  chapter: "capítulo quatro",
  title: "Cada véspera contigo",
  body: "Mesmo os dias mais bobos viram lembrança quando partilhados. Tu transformas o ordinário em coisa de guardar.",
  reverse: true
}, {
  image: p5,
  chapter: "capítulo cinco",
  title: "As festas, os abraços",
  body: "Em cada celebração, em cada beijo no rosto, a certeza: meu lugar favorito é ao teu lado."
}, {
  image: p7,
  chapter: "capítulo seis",
  title: "O sim eterno",
  body: "Diante de todos e diante de nós mesmos, repeti a única promessa que sempre soube ser verdadeira: para sempre.",
  reverse: true
}, {
  image: p6,
  chapter: "capítulo sete",
  title: "Casa",
  body: "Descobri que casa não é endereço — é o teu colo, teu cheiro, tua presença quieta. Onde tu estás, eu estou em casa."
}, {
  image: p8,
  chapter: "capítulo oito",
  title: "Caminhos lado a lado",
  body: "Atravessamos cidades, paisagens e estações. Em todas as fotos, a mesma certeza: nenhum caminho é longo demais contigo.",
  reverse: true
}, {
  image: couple,
  chapter: "capítulo nove",
  title: "Costas com costas, alma com alma",
  body: "Mesmo sem nos olharmos, sabíamos: éramos o apoio um do outro. Foi assim que aprendemos a confiar — sustentando o silêncio um do outro."
}, {
  image: newborn,
  chapter: "capítulo dez",
  title: "O primeiro suspiro dela",
  body: "Quando ela chegou, o mundo se aquietou. Em meio ao dourado da festa, o brilho maior era aquele pequeno rosto adormecido nos nossos braços.",
  reverse: true
}, {
  image: p9,
  chapter: "capítulo onze",
  title: "A espera mais doce",
  body: "Um amor que cabia em dois agora se preparava para caber em mais um. Cada batida — minha, tua, dele — em ritmo certo."
}, {
  image: family4,
  chapter: "capítulo doze",
  title: "Agora somos quatro",
  body: "Os colos cheios, o riso multiplicado, o coração transbordando. O nosso para sempre virou família — e nunca foi tão inteiro.",
  reverse: true
}];
function HeroPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.6em] text-[color:var(--ink-soft)] md:text-xs", children: "Para sempre · Forever" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-4 md:my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text italic", children: "Nosso" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-6xl text-[color:var(--rose)] md:text-8xl lg:text-9xl", children: "Para Sempre" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-6 max-w-md font-serif text-base italic text-[color:var(--ink-soft)] md:mt-10 md:text-lg", children: [
      '"I found a love for me…',
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      'darling, just dive right in."'
    ] })
  ] });
}
function ClosingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-script text-5xl text-[color:var(--rose)] md:text-7xl lg:text-8xl", children: [
      "para sempre,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "e um dia a mais"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-serif text-base italic text-[color:var(--ink-soft)] md:text-lg", children: "— com todo o meu amor." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-center gap-3 text-[color:var(--gold)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-20 bg-current opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 21s-7-4.5-9.5-9C.8 9.2 2.4 5 6 5c2.1 0 3.5 1.2 4.5 2.7C11.5 6.2 12.9 5 15 5c3.6 0 5.2 4.2 3.5 7-2.5 4.5-9.5 9-9.5 9z" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-20 bg-current opacity-50" })
    ] })
  ] });
}
function Index() {
  const [entered, setEntered] = reactExports.useState(false);
  const [current, setCurrent] = reactExports.useState(0);
  const [animating, setAnimating] = reactExports.useState(false);
  const pages = [{
    node: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroPage, {}),
    label: "prólogo"
  }, ...chapters.map((c, i) => ({
    node: /* @__PURE__ */ jsxRuntimeExports.jsx(Chapter, { ...c }),
    label: `página ${i + 1} de ${chapters.length}`
  })), {
    node: /* @__PURE__ */ jsxRuntimeExports.jsx(ClosingPage, {}),
    label: "epílogo"
  }];
  const total = pages.length;
  const go = reactExports.useCallback((delta) => {
    if (animating) return;
    const next = current + delta;
    if (next < 0 || next >= total) return;
    setAnimating(true);
    setCurrent(next);
    setTimeout(() => setAnimating(false), 1150);
  }, [animating, current, total]);
  reactExports.useEffect(() => {
    if (!entered) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [entered, go]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 overflow-hidden", style: {
    backgroundColor: "var(--cream-deep)"
  }, children: [
    !entered && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { onEnter: () => setEntered(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", style: {
      opacity: entered ? 1 : 0,
      transition: "opacity 1.2s ease 0.2s"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-0 overflow-hidden", children: Array.from({
        length: 12
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute block rounded-full", style: {
        width: `${5 + i % 4 * 3}px`,
        height: `${5 + i % 4 * 3}px`,
        left: `${i * 8.3 % 100}%`,
        top: `${i * 13 % 100}%`,
        background: i % 2 ? "var(--rose-soft)" : "var(--gold)",
        opacity: 0.18,
        animation: `float ${8 + i % 5}s ease-in-out ${i * 0.4}s infinite`
      } }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "book-stage relative h-[88vh] w-[94vw] max-w-6xl", children: pages.map((p, i) => {
        const flipped = i < current;
        const isCurrent = i === current;
        const z = flipped ? 10 + i : total - i;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `book-page ${flipped ? "is-flipped" : isCurrent ? "is-current" : ""}`, style: {
          zIndex: z
        }, "aria-hidden": !isCurrent, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageFrame, { pageLabel: p.label, children: p.node }) }, i);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => go(-1), disabled: current === 0 || animating, "aria-label": "página anterior", className: "absolute left-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--gold)] bg-white/70 text-[color:var(--ink)] backdrop-blur-md transition-all hover:scale-110 hover:bg-white disabled:opacity-30 md:left-6 md:h-14 md:w-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 18l-6-6 6-6" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => go(1), disabled: current === total - 1 || animating, "aria-label": "próxima página", className: "absolute right-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--gold)] bg-white/70 text-[color:var(--ink)] backdrop-blur-md transition-all hover:scale-110 hover:bg-white disabled:opacity-30 md:right-6 md:h-14 md:w-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 6l6 6-6 6" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2 md:bottom-6", children: pages.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => !animating && setCurrent(i), "aria-label": `ir para página ${i + 1}`, className: "h-1.5 rounded-full transition-all", style: {
        width: i === current ? 28 : 8,
        background: i === current ? "var(--rose)" : "var(--rose-soft)"
      } }, i)) })
    ] })
  ] });
}
export {
  Index as component
};
