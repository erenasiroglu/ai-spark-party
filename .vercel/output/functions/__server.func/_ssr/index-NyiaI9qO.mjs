import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-3 bg-white rounded-full animate-pulse" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-xl tracking-tighter", children: "TADADO" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex gap-8 text-sm font-medium text-foreground/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#game", className: "hover:text-foreground transition-colors", children: "The Game" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#engine", className: "hover:text-foreground transition-colors", children: "AI Engine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground transition-colors", children: "Features" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#play",
        className: "bg-foreground text-background px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-colors",
        children: "Play Now"
      }
    )
  ] }) });
}
function TadadoCard({
  index = "082/AI",
  word,
  forbidden,
  points = 15,
  className = "",
  initialDelay = 1200
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative w-full max-w-md aspect-[3/4] bg-surface rounded-[2rem] shadow-2xl border border-border p-10 flex flex-col hover:rotate-1 transition-transform duration-500 ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs uppercase tracking-widest text-foreground/50", children: [
            "Card ",
            index
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full border-2 border-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl font-extrabold tracking-tighter mb-6", children: word }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: forbidden.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-medium text-foreground/40 italic", children: w }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-[-2.5%] top-1/2 h-[3px] bg-primary/70 animate-strike",
                style: { animationDelay: `${initialDelay + i * 220}ms` }
              }
            )
          ] }) }, w)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex justify-between items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex -space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-zinc-200 border-2 border-surface" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-zinc-300 border-2 border-surface" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-zinc-400 border-2 border-surface" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm font-bold text-primary", children: [
            "+",
            points,
            " PTS"
          ] })
        ] })
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative pt-20 pb-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col items-start text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 bg-primary rounded-full animate-pulse" }),
        "The future of social play"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-tighter text-balance leading-[0.88] mb-8 animate-reveal [animation-delay:120ms]", children: [
        "Words are the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "new" }),
        " playground."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-lg md:text-xl text-foreground/60 text-pretty mb-10 animate-reveal [animation-delay:240ms]", children: "Tadado is the AI-powered party game that generates infinite decks for your friend group. Explain without saying. Laugh until you can't. Never play the same round twice." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 animate-reveal [animation-delay:340ms]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#play",
            className: "inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary transition-colors",
            children: [
              "Start a Game",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs opacity-80", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#engine",
            className: "inline-flex items-center gap-2 bg-transparent text-foreground border border-border px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-surface transition-colors",
            children: "See how it works"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-6 animate-reveal [animation-delay:460ms]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex -space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-zinc-300 border-2 border-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-zinc-400 border-2 border-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-primary border-2 border-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-foreground border-2 border-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/60", children: "50,000+ rounds played this week" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center lg:justify-end animate-reveal [animation-delay:380ms]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 bg-primary/10 blur-3xl rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -rotate-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TadadoCard,
          {
            index: "082/AI",
            word: "DOPAMINE",
            forbidden: ["Brain", "Pleasure", "Reward"],
            points: 15
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -top-4 -z-10 h-full w-full rotate-6 rounded-[2rem] bg-foreground/5 border border-border" })
      ] })
    ] }) })
  ] }) });
}
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
const STEPS = [
  {
    n: "01",
    title: "Pick a vibe",
    body: "Type any prompt. From 'office gossip' to 'obscure 80s synth-pop'. Tadado understands."
  },
  {
    n: "02",
    title: "AI builds the deck",
    body: "Forty cards. Forbidden words. Scoring tuned to your group. Generated in seconds, never repeated."
  },
  {
    n: "03",
    title: "Play in 60 seconds",
    body: "Pass the phone. Explain without saying. Laugh, scream, score. Fast rounds, infinite replays."
  }
];
function HowItWorks() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "game", className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal-on-scroll mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-2xl", children: [
        "From idea to chaos ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "in three taps." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/50", children: "§02 / The Loop" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border", children: STEPS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-10 flex flex-col gap-6 min-h-[280px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-bold text-primary", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold tracking-tight", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 text-pretty", children: s.body })
    ] }, s.n)) })
  ] }) });
}
const PROMPTS = [
  '"90s sci-fi movies and cult classics"',
  '"Office inside jokes from last summer"',
  '"Y2K pop culture, trashy and beloved"',
  '"Italian dinner party, but chaotic"',
  '"Things only millennials still say"'
];
function PromptCycler() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % PROMPTS.length), 2800);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-zinc-900 rounded-2xl border border-zinc-800 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-zinc-500 uppercase tracking-widest", children: "Prompt Input" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-medium text-zinc-200 min-h-[1.75rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-reveal", children: PROMPTS[i] }, i) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full bg-zinc-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary animate-loading-bar" }, i) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-zinc-500 uppercase tracking-widest pt-1", children: "Generating 40 cards · forbidden words · scoring rules" })
  ] });
}
const MINI_CARDS = [
  { word: "Matrix", forbidden: ["Neo", "Simulation", "Pills"] },
  { word: "Alien", forbidden: ["Space", "Ripley", "Acid"] },
  { word: "Blade", forbidden: ["Runner", "Replicant", "Rain"] },
  { word: "Tron", forbidden: ["Disc", "Grid", "Cycle"] }
];
function AiEngine() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "engine", className: "py-32 bg-foreground text-background overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "reveal-on-scroll mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-zinc-500", children: "§03 / The Engine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]", children: [
        "Generate any theme ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: "in seconds." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PromptCycler, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 max-w-md text-pretty", children: "Our engine crafts unique forbidden words for every prompt — calibrated to be just hard enough to make you scream. No two games ever feel the same." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: MINI_CARDS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "aspect-[3/4] bg-zinc-900 rounded-2xl p-6 border border-zinc-800 flex flex-col",
        style: { marginTop: i % 2 === 1 ? "3rem" : 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-auto", children: [
            "Card ",
            String(i + 12).padStart(3, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold tracking-tighter mb-3", children: c.word }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: c.forbidden.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-sm text-zinc-500 italic line-through decoration-primary decoration-2",
                children: f
              },
              f
            )) })
          ] })
        ]
      },
      c.word
    )) }) })
  ] }) }) });
}
const appUi = "/assets/app-ui-DGyXCPTN.jpg";
function FeatureBento() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal-on-scroll mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-2xl", children: [
        "Built for the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "group chat" }),
        ", played at the table."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/50", children: "§04 / Features" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 p-10 bg-surface rounded-3xl border border-border flex flex-col justify-between min-h-[420px] hover:-translate-y-1 transition-transform duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/50", children: "Mobile-first" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold tracking-tight mt-2", children: "Adrenaline in your pocket." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 max-w-md mt-4 text-pretty", children: "Designed for the phone in your hand and the table you're sitting at. One tap to join. Zero accounts. Lightning rounds." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[2/1] rounded-2xl overflow-hidden mt-8 border border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: appUi,
            alt: "Tadado mobile interface showing a guessing card with forbidden words",
            className: "w-full h-full object-cover",
            loading: "lazy"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 bg-primary text-white rounded-3xl flex flex-col justify-between min-h-[420px] hover:-translate-y-1 transition-transform duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-white/70", children: "Social" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold tracking-tight mt-2 leading-[0.95]", children: "Viral by design." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 mt-4 text-pretty", children: "Every round produces a quote screenshot. The kind that ends up pinned in your group chat at 2am." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-sm font-medium", children: [
            `"It's `,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through opacity-60", children: "crunchy" }),
            '… you eat it… in Italy?"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-sm font-medium ml-8", children: '"BISCOTTI?!"' })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 bg-foreground text-background rounded-3xl flex flex-col justify-between min-h-[280px] hover:-translate-y-1 transition-transform duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-zinc-500", children: "60s rounds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold tracking-tight", children: "Faster than a meme." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 mt-3 text-sm text-pretty", children: "Sub-minute turns keep the energy up and the awkward silences out." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 bg-surface border border-border rounded-3xl flex flex-col justify-between min-h-[280px] hover:-translate-y-1 transition-transform duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/50", children: "Infinite decks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold tracking-tight", children: "Never the same twice." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 mt-3 text-sm text-pretty", children: "AI generates new cards on demand. Replay forever without recognising a single word." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 bg-surface border border-border rounded-3xl flex flex-col justify-between min-h-[280px] hover:-translate-y-1 transition-transform duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/50", children: "Custom themes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold tracking-tight", children: "Your world. Your words." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 mt-3 text-sm text-pretty", children: "Inside jokes, fandoms, your roommate's love life. If you can prompt it, you can play it." })
        ] })
      ] })
    ] })
  ] }) });
}
const QUOTES = [
  {
    body: "We made a deck about our group chat. I have not recovered.",
    who: "Maya",
    meta: "Brooklyn / Friday night"
  },
  {
    body: "Cards Against Humanity wishes it had this much range.",
    who: "Jonas",
    meta: "Berlin / Birthday party"
  },
  {
    body: "Genuinely the funniest 12 minutes I've had this year.",
    who: "Priya",
    meta: "London / Dinner party"
  }
];
function Testimonials() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal-on-scroll mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/50", children: "§05 / Field reports" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-10", children: QUOTES.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        className: "p-8 bg-surface border border-border rounded-3xl flex flex-col gap-8 min-h-[260px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-2xl font-semibold tracking-tight text-pretty leading-snug", children: [
            '"',
            q.body,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-auto flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: q.who }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-foreground/50", children: q.meta })
          ] })
        ]
      },
      q.who
    )) })
  ] }) });
}
const party = "/assets/party-moment-CGg5xNdr.jpg";
function FinalCta() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "play", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "reveal-on-scroll mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[3rem] border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: party,
        alt: "",
        "aria-hidden": true,
        className: "absolute inset-0 w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-8 py-24 md:py-32 md:px-16 text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-background/60", children: "§06 / Press start" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl", children: [
        "Ready to start ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "the chaos?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-background/70 max-w-xl text-pretty", children: "One link. Five friends. Forty AI-generated cards. The next 12 minutes are going to be very loud." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:scale-[0.98] transition-transform",
            children: [
              "Start a Game",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs opacity-80", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#engine",
            className: "inline-flex items-center gap-2 bg-background/10 text-background border border-background/20 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-background/20 transition-colors backdrop-blur-sm",
            children: "See sample decks"
          }
        )
      ] })
    ] })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "py-24 border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-6 bg-primary rounded-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-lg tracking-tighter uppercase", children: "Tadado" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-sm max-w-xs", children: "The world's first AI-generated party game for the modern digital group." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-4", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#game", className: "hover:text-primary transition-colors", children: "How to Play" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#engine", className: "hover:text-primary transition-colors", children: "Deck Engine" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-primary transition-colors", children: "Features" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-4", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Discord" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Twitter" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Support" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 mt-24 pt-8 border-t border-border flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-foreground/50", children: "© 2026 Tadado AI Inc." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 text-[10px] font-mono uppercase tracking-widest text-foreground/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms" })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground selection:bg-primary/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AiEngine, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBento, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCta, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
