var $o = Object.defineProperty;
var Fo = (s, t, r) => t in s ? $o(s, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : s[t] = r;
var Te = (s, t, r) => (Fo(s, typeof t != "symbol" ? t + "" : t, r), r);
import {
  E as Ro,
  w as Uo,
  i as Vo,
  B as Ho,
  r as Bo,
  R as zo
} from "./sentry-5j6PG3CH.js";
import {
  r as l,
  j as e,
  M as Is,
  u as cs,
  a as Wo,
  H as Vr,
  l as Bt,
  b as Yo,
  D as Go,
  c as rr,
  d as Hr,
  i as bs,
  I as qo,
  e as Ko,
  R as Bs,
  Q as Qo,
  f as Zo,
  g as Jo,
  h as Xo,
  W as en,
  k as tn,
  m as z,
  L as pe,
  n as ge,
  X as Br,
  C as zs,
  o as zr,
  p as sn,
  A as rn,
  q as or,
  s as Wr,
  T as ne,
  N as jt,
  t as on,
  v as kt,
  w as Ws,
  x as Yr,
  y as nn,
  z as Gr,
  B as an,
  E as ln,
  F as Je,
  G as ot,
  J as cn,
  K as dn,
  O as un,
  P as hn,
  S as Ys,
  U as xn,
  V as fn,
  Y as gn,
  Z as qr,
  _ as ds,
  $ as Kr,
  a0 as nr,
  a1 as ws,
  a2 as zt,
  a3 as mn,
  a4 as pn,
  a5 as jn,
  a6 as ar,
  a7 as lr,
  a8 as vn,
  a9 as yn,
  aa as bn,
  ab as wn,
  ac as Wt,
  ad as ir,
  ae as Cn,
  af as _n,
  ag as Nn,
  ah as Sn,
  ai as kn
} from "./vendor-wy7GaLsu.js";
import "./main-Am8oi9W5.js";
(function () {
  try {
    var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
      t = new Error().stack;
    t && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[t] = "9a9df395-b5ef-4690-b746-d636aa3a2580", s._sentryDebugIdIdentifier = "sentry-dbid-9a9df395-b5ef-4690-b746-d636aa3a2580")
  } catch {}
})();
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver(n => {
    for (const a of n)
      if (a.type === "childList")
        for (const c of a.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function r(n) {
    const a = {};
    return n.integrity && (a.integrity = n.integrity), n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? a.credentials = "include" : n.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
  }

  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = r(n);
    fetch(n.href, a)
  }
})();
var Vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Hi(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}

function Bi(s) {
  if (s.__esModule) return s;
  var t = s.default;
  if (typeof t == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
    };
    r.prototype = t.prototype
  } else r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.keys(s).forEach(function (o) {
    var n = Object.getOwnPropertyDescriptor(s, o);
    Object.defineProperty(r, o, n.get ? n : {
      enumerable: !0,
      get: function () {
        return s[o]
      }
    })
  }), r
}
const Qr = l.createContext({}),
  Tn = ({
    children: s
  }) => {
    const [t, r] = l.useState(!0);
    return e.jsx(Qr.Provider, {
      value: {
        isMenuCollapsed: t,
        setIsMenuCollapsed: r
      },
      children: s
    })
  },
  Pe = () => l.useContext(Qr),
  Zr = Is,
  cr = Object.fromEntries(Zr.map(s => [s.internalName, s.id])),
  En = (s = "ethereum") => cr[s.toLowerCase()] ? cr[s.toLowerCase()] : 0,
  dr = (s, t) => Xe[s].stables.some(r => r.toLowerCase() === t.toLowerCase()),
  Xe = Object.fromEntries(Zr.map(s => [s.id, s])),
  R = () => Wo("chain"),
  Ln = async ({
    params: s
  }) => {
    const t = s.chain,
      r = En(s.chain),
      o = Xe[r] ? Xe[r] : Xe[1];
    return {
      chain: t,
      currentChainInfo: o,
      chainID: r
    }
  }, Ye = s => {
    let {
      pageTitle: t
    } = s;
    return t = t ? t.toString() : "oku.trade", e.jsxs(Vr, {
      children: [e.jsx("title", {
        children: t
      }), e.jsx("meta", {
        property: "og:title",
        content: t
      }), e.jsx("meta", {
        property: "twitter:title",
        content: t
      })]
    })
  }, Jr = "Ukia.Trade Analytics is a high powered analytics interface for DeFi, with support for protocols such as Uniswap V3 and more.", Xr = "Trade DeFi with Ukia, a professional-grade Uniswap v3 front-end platform. Enjoy live trading, track orders, and implement limit and market orders with precision. Ideal for pro traders seeking advanced DEX features.", et = s => {
    let {
      pageDescription: t,
      longPageDescription: r
    } = s;
    return t = t || Jr, r = r || Xr, e.jsxs(Vr, {
      children: [e.jsx("meta", {
        name: "description",
        content: t
      }), e.jsx("meta", {
        property: "og:description",
        content: r
      }), e.jsx("meta", {
        property: "twitter:description",
        content: r
      })]
    })
  }, Dn = () => {
    const s = cs(),
      t = Jr,
      r = Xr;
    return e.jsxs(e.Fragment, {
      children: [e.jsx(Ye, {
        pageTitle: "Ukia"
      }), et({
        pageDescription: t
      }), e.jsx("meta", {
        property: "og:description",
        content: r
      }), e.jsx("meta", {
        property: "twitter:description",
        content: r
      }), e.jsx("meta", {
        property: "og:type",
        content: "website"
      }), e.jsx("meta", {
        property: "og:url",
        content: `/info${s.pathname}`
      }), e.jsx("meta", {
        property: "og:image",
        content: "https://cdn.gfx.xyz/okusplash.png"
      })]
    })
  };
var Be;
(function (s) {
  s.DEFAULT = "default", s.UNICORN_POWER = "unicornPower", s.ACCESSIBLE = "accessible", s.GALACTIC = "galactic"
})(Be || (Be = {}));
var Xt;
(function (s) {
  s.DEFAULT = "default"
})(Xt || (Xt = {}));
var Ve;
(function (s) {
  s.OPEN = "OPEN", s.FILLED = "FILLED", s.CLOSED = "CLOSED", s.IN_RANGE = "INRANGE", s.OUT_OF_RANGE = "OUTRANGE", s.CLAIMED = "CLAIMED", s.CANCELLED = "CANCELLED"
})(Ve || (Ve = {}));
var Le;
(function (s) {
  s.OUT_OF_RANGE = "out of range", s.IN_RANGE = "in range", s.CLOSED = "closed"
})(Le || (Le = {}));
var Ps;
(function (s) {
  s.DEFAULT = "default"
})(Ps || (Ps = {}));
var O;
(function (s) {
  s.SEMIBOLD = "600", s.MEDIUM = "500", s.REGULAR = "400"
})(O || (O = {}));
var L;
(function (s) {
  s.VOLUME = "Volume", s.ACTIVITY = "Activity", s.TVL = "TVL", s.PRICE = "Price", s.FEES = "Fees", s.LIQUIDITY = "Liquidity", s.TOKEN_COUNT = "Tvl"
})(L || (L = {}));
var te;
(function (s) {
  s.MINUTE_5 = "5m", s.HOUR_1 = "1h", s.DAY_1 = "1d", s.DAY_7 = "7d", s.DAY_14 = "14d", s.DAY_30 = "30d", s.YEAR_1 = "1y"
})(te || (te = {}));
var Ae;
(function (s) {
  s.OVERVIEW = "overview", s.POOLS = "pools", s.TOKENS = "tokens", s.POSITIONS = "positions"
})(Ae || (Ae = {}));
var oe;
(function (s) {
  s.ALL = "All", s.MINT = "Mint", s.SWAP = "Swap", s.BURN = "Burn", s.COLLECT = "Collect"
})(oe || (oe = {}));
var T;
(function (s) {
  s.DESC = "Descending", s.ASC = "Ascending"
})(T || (T = {}));
var ce;
(function (s) {
  s.TVL = "tvl_usd", s.Volume24H = "t0_volume_usd", s.Volume7D = "total_volume_7d_usd", s.Fees = "total_fees_usd", s.Transactions = "tx_count", s.CurrentPrice = "t1_price"
})(ce || (ce = {}));
var He;
(function (s) {
  s.Volume = "volume", s.Swaps = "swaps", s.Positions = "positions"
})(He || (He = {}));
var Oe;
(function (s) {
  s[s.FEE_001 = .01] = "FEE_001", s[s.FEE_005 = .05] = "FEE_005", s[s.FEE_03 = .3] = "FEE_03", s[s.FEE_1 = 1] = "FEE_1"
})(Oe || (Oe = {}));
var $e;
(function (s) {
  s.WINDOWS = "Windows", s.MACOS = "macOS", s.LINUX = "Linux", s.ANDROID = "Android", s.IOS = "iOS", s.UNIX = "Unix", s.OTHER = "Other"
})($e || ($e = {}));
var Ee;
(function (s) {
  s.CHROME = "Chrome", s.FIREFOX = "FireFox", s.MSIE = "MSIE", s.EDGE = "Edge", s.SAFARI = "Safari", s.OPERA = "Opera", s.YA = "Ya", s.SAMSUNG = "Samsung", s.OTHER = "Other"
})(Ee || (Ee = {}));
const In = () => {
    const s = navigator.userAgent;
    return s.indexOf("Firefox") > -1 ? Ee.FIREFOX : s.indexOf("SamsungBrowser") > -1 ? Ee.SAMSUNG : s.indexOf("Opera") > -1 || s.indexOf("OPR") > -1 ? Ee.OPERA : s.indexOf("Trident") > -1 ? Ee.MSIE : s.indexOf("Edge") > -1 ? Ee.EDGE : s.indexOf("Chrome") > -1 ? Ee.CHROME : s.indexOf("Safari") > -1 ? Ee.SAFARI : Ee.OTHER
  },
  Pn = () => {
    const s = navigator.userAgent;
    return s.indexOf("Win") !== -1 ? $e.WINDOWS : s.indexOf("Mac") !== -1 ? $e.MACOS : s.indexOf("X11") !== -1 ? $e.UNIX : s.indexOf("Linux") !== -1 ? $e.LINUX : s.indexOf("iPhone") !== -1 || s.indexOf("iPad") !== -1 ? $e.IOS : s.indexOf("Android") !== -1 ? $e.ANDROID : $e.OTHER
  };
if (window.log === void 0) {
  window.log = Bt;
  const s = Bt.methodFactory;
  Bt.methodFactory = function (t, r, o) {
    const n = s(t, r, o);
    return n.bind(n, `[${t}]`)
  }, Bt.setLevel(0)
}
const Mn = {
    Chat: {
      enabled: "false",
      url: "wss://chat.apiary.software"
    },
    Login: {
      url: "https://login.oku.trade",
      app_id: "7OfZGYJMyygFQwnTYwZtWp3aUh1cbhfn",
      path_prefix: "/info"
    },
    Whitelist: {
      enabled: "false"
    },
    Swap: {
      enabled: "true"
    },
    ChainRpc: {
      omni: "wss://omni.oku.zone/"
    },
    Telemetry: {
      enabled: "true",
      url: "https://telemetry.apiary.software",
      multibase_key: "88e5b8a6-ac60-44b1-bcc3-0f8f5a249313"
    },
    Geoblock: {
      provider: "https://geoip.gfx-workers.workers.dev",
      banned: ["CU", "IR", "KP", "RU", "SY"]
    },
    Logging: {
      level: "warn"
    },
    Chains: {
      hidden: [],
      featured: [],
      comingsoon: []
    }
  },
  An = window.OkuTokenList;
var Cs = {
  BASE_URL: "/info",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1
};
const _s = (s, t) => s || t,
  On = {
    Chat: {
      enabled: _s(Cs.VITE_CHAT_ENABLED, "false")
    },
    Swap: {
      enabled: _s(Cs.VITE_SWAP_ENABLED, "false")
    },
    Telemetry: {
      enabled: _s(Cs.VITE_TELEMETRY_ENABLED, "true")
    }
  },
  us = () => {
    const s = {
      ...Mn,
      ...window.ConfigJsStaticOptions
    };
    s.Logging || (s.Logging = {
      level: 3
    }), window.log.setLevel(s.Logging.level);
    try {
      Yo(s.Telemetry.multibase_key, {
        enabled: !!s.Telemetry.multibase_key,
        debug: !1
      })
    } catch {
      window.log.log("failed to initiate multibase")
    }
    const t = {
      ...On
    };
    return {
      features: s,
      flags: t
    }
  };
class $n {
  constructor(t) {
    Te(this, "apis");
    Te(this, "root");
    this.root = t, this.apis = new Map
  }
  network(t) {
    const r = this.apis.get(t),
      o = In(),
      n = Pn();
    if (r) return r;
    let a;
    o === Ee.SAFARI || n === $e.IOS ? a = ["https"] : a = ["wss", "https"];
    const c = Go(`${this.root}${t}`, a);
    return this.apis.set(t, c), c
  }
}
const eo = l.createContext({}),
  Fn = ({
    children: s
  }) => {
    const {
      features: t
    } = us(), [r] = l.useState(new $n(t.ChainRpc.omni));
    return e.jsx(eo.Provider, {
      value: {
        omniCush: r
      },
      children: s
    })
  },
  Gs = () => {
    const s = l.useContext(eo);
    if (s === null) throw new Error('"useRpcContext" should be used inside a "RpcContextProvider"');
    return s
  },
  to = l.createContext({}),
  Rn = [rr.optimism.id, rr.arbitrum.id],
  Un = (s, t) => {
    const r = Rn.includes(t) ? 3 : 1;
    return s % r === 0
  },
  Vn = ({
    children: s
  }) => {
    const [t, r] = l.useState(0), [o, n] = l.useState(0), {
      chainID: a
    } = R(), {
      omniCush: c
    } = Gs(), {
      chain: d
    } = R(), {
      data: u,
      error: h
    } = Hr({
      queryKey: [d, "blockNumber"],
      refetchInterval: 1e3,
      queryFn: async () => await c.network(d).call("cush_liveBlock", [])
    });
    return l.useEffect(() => {
      h && (r(-1), n(-1))
    }, [h]), l.useEffect(() => {
      r(-1), n(-1)
    }, [d]), l.useEffect(() => {
      u && u > t && (r(u), Un(u, a) && n(u))
    }, [u, d]), e.jsx(to.Provider, {
      value: {
        blockNumber: t,
        blockNumberByChain: o
      },
      children: s
    })
  },
  so = () => {
    const s = l.useContext(to);
    if (s === null) throw new Error('"useRpcBlockContext" should be used inside a "RpcBlockContextProvider"');
    return s
  },
  Hn = l.createContext({
    login: async () => {},
    logout: async () => {},
    whitelisted: !1
  }),
  Bn = ({
    children: s
  }) => {
    const {
      features: {
        Login: {
          url: t,
          app_id: r
        }
      }
    } = us(), [o, n] = l.useState(localStorage.getItem("id_token") ?? void 0), [a, c] = l.useState(localStorage.getItem("nonce") ?? void 0), [d, u] = l.useState(void 0), [h, g] = l.useState(!1), x = _ => {
      const y = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";
      let N = "";
      for (; _ > 0;) {
        const w = new Uint8Array(16),
          p = window.crypto.getRandomValues(w);
        for (let S = 0; S < p.length && _ !== 0; S++) p[S] < y.length && (N += y[p[S]], _--)
      }
      return N
    }, f = () => new Promise(_ => {
      const y = x(32);
      localStorage.setItem("nonce", y), c(y), localStorage.removeItem("id_token"), n(void 0);
      const N = `${(t+"/authorize").replaceAll("//authorize","/authorize")}?response_type=id_token&scope=${encodeURIComponent("openid eth_address whitelisted")}&client_id=${r}&redirect_uri=${encodeURIComponent((window.location.origin+"/auth/").replaceAll("//auth","/auth"))}&prompt=switch_account&nonce=${y}`,
        w = window.open(N, "_blank", "toolbar=no,innerWidth=500,innerHeight=700"),
        p = window.setInterval(() => {
          if (w === null || w.closed) {
            window.clearInterval(p);
            const S = localStorage.getItem("id_token") ?? void 0;
            n(S), S === void 0 && (localStorage.removeItem("nonce"), c(void 0)), _()
          }
        }, 100)
    }), j = async () => {
      localStorage.removeItem("id_token"), localStorage.removeItem("nonce"), n(void 0), c(void 0)
    }, m = _ => {
      const y = _.split(".")[1];
      if (!y) return {};
      const N = y.replace(/-/g, "+").replace(/_/g, "/"),
        w = decodeURIComponent(atob(N).split("").map(function (p) {
          return "%" + ("00" + p.charCodeAt(0).toString(16)).slice(-2)
        }).join(""));
      return JSON.parse(w)
    };
    return l.useEffect(() => {
      if (o === void 0) return;
      if (a === null) {
        (async () => await j())();
        return
      }
      const {
        eth_address: _,
        whitelisted: y,
        exp: N,
        nonce: w
      } = m(o);
      if (a !== w) {
        (async () => await j())();
        return
      }
      if (u(_), g(y !== void 0), Date.now() > N * 1e3) {
        (async () => await j())();
        return
      }
    }, [o]), e.jsx(Hn.Provider, {
      value: {
        idToken: o,
        nonce: a,
        login: f,
        logout: j,
        address: d,
        whitelisted: h
      },
      children: s
    })
  },
  zn = l.createContext({}),
  Wn = ({
    children: s
  }) => {
    const t = us(),
      [r, o] = l.useState(""),
      [n, a] = l.useState(1),
      c = async () => fetch(t.features.Geoblock.provider).then(u => u.json()).then(u => u.country), d = async () => {
        if (n < 10) return c().then(u => {
          o(u), a(100)
        }).catch(() => {
          a(n + 1)
        })
      };
    return l.useEffect(() => {
      d()
    }, [n]), e.jsx(zn.Provider, {
      value: {
        countryCode: r
      },
      children: s
    })
  },
  Yn = "modulepreload",
  Gn = function (s) {
    return "/info/" + s
  },
  ur = {},
  hr = function (t, r, o) {
    let n = Promise.resolve();
    if (r && r.length > 0) {
      const a = document.getElementsByTagName("link");
      n = Promise.all(r.map(c => {
        if (c = Gn(c), c in ur) return;
        ur[c] = !0;
        const d = c.endsWith(".css"),
          u = d ? '[rel="stylesheet"]' : "";
        if (!!o)
          for (let x = a.length - 1; x >= 0; x--) {
            const f = a[x];
            if (f.href === c && (!d || f.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${c}"]${u}`)) return;
        const g = document.createElement("link");
        if (g.rel = d ? "stylesheet" : Yn, d || (g.as = "script", g.crossOrigin = ""), g.href = c, document.head.appendChild(g), d) return new Promise((x, f) => {
          g.addEventListener("load", x), g.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${c}`)))
        })
      }))
    }
    return n.then(() => t()).catch(a => {
      const c = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (c.payload = a, window.dispatchEvent(c), !c.defaultPrevented) throw a
    })
  },
  qn = (s, t) => {
    const r = s[t];
    return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((o, n) => {
      (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + t)))
    })
  },
  Kn = {
    locale: "en",
    setLocale: () => {}
  },
  Qn = l.createContext(Kn),
  Zn = ({
    children: s
  }) => {
    const [t, r] = l.useState("en");
    return l.useEffect(() => {
      (async () => {
        const {
          messages: o
        } = await qn(Object.assign({
          "../../locales/en.po": () => hr(() => Promise.resolve().then(() => Mi), void 0),
          "../../locales/zh.po": () => hr(() => Promise.resolve().then(() => Oi), void 0)
        }), `../../locales/${t}.po`);
        bs.load(t, o), bs.activate(t)
      })()
    }, []), e.jsx(Qn.Provider, {
      value: {
        locale: t,
        setLocale: r
      },
      children: e.jsx(qo, {
        i18n: bs,
        children: s
      })
    })
  },
  Jn = l.createContext({
    showSettingsModal: !1,
    setShowSettingsModal: () => {},
    showChartLayoutModal: !1,
    setShowChartLayoutModal: () => {},
    showMobileMenu: !1,
    setShowMobileMenu: () => {},
    showClosePositionModal: !1,
    setShowClosePositionModal: () => {},
    showClaimFeesModal: !1,
    setShowClaimFeesModal: () => {},
    isLoading: !0,
    setIsLoading: () => {},
    showTransactionsModal: !1,
    setShowTransactionsModal: () => {},
    transactionContent: void 0,
    setTransactionContent: () => {}
  }),
  Xn = s => {
    const {
      children: t
    } = s, [r, o] = l.useState(!1), [n, a] = l.useState(!1), [c, d] = l.useState(!1), [u, h] = l.useState(!1), [g, x] = l.useState(!1), [f, j] = l.useState(!1), [m, _] = l.useState(!0), [y, N] = l.useState();
    return l.useEffect(() => {
      f || N(void 0)
    }, [f]), e.jsx(Jn.Provider, {
      value: {
        showSettingsModal: r,
        setShowSettingsModal: o,
        showChartLayoutModal: n,
        setShowChartLayoutModal: a,
        setShowMobileMenu: d,
        showMobileMenu: c,
        showClosePositionModal: u,
        setShowClosePositionModal: h,
        showClaimFeesModal: g,
        setShowClaimFeesModal: x,
        isLoading: m,
        setIsLoading: _,
        showTransactionsModal: f,
        setShowTransactionsModal: j,
        transactionContent: y,
        setTransactionContent: N
      },
      children: t
    })
  },
  ea = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        transparent: "#00000000",
        black_overlay: "#00000061",
        hover: "#40496314",
        hover_background: "#99A1BD14",
        gray: {
          50: "#F5F6FC",
          100: "#E8ECFB",
          200: "#C9D0E7",
          300: "#99A1BD",
          400: "#7C85A2",
          500: "#5E6887",
          600: "#404963",
          700: "#293249",
          750: "#1B1F2E",
          800: "#141B2B",
          900: "#0E111A",
          950: "#1c1f29",
          dark: "#0B0B0E",
          footer_icons: "#7C7C7D"
        },
        pink: {
          50: "#F9ECF1",
          100: "#FFD9E4",
          200: "#FBA4C0",
          300: "#FF6FA3",
          400: "#FB118E",
          500: "#C41969",
          600: "#8C0F49",
          700: "#55072A",
          800: "#350318",
          900: "#2B000B",
          vibrant: "#F51A70"
        },
        red: {
          50: "#FAECEA",
          100: "#FED5CF",
          200: "#FEA79B",
          300: "#FD766B",
          400: "#FA2B39",
          500: "#C4292F",
          600: "#891E20",
          700: "#530F0F",
          800: "#380A03",
          900: "#240800",
          vibrant: "#F14544"
        },
        yellow: {
          50: "#F6F2D5",
          100: "#DBBC19",
          200: "#BB9F13",
          300: "#A08116",
          400: "#866311",
          500: "#5D4204",
          600: "#3E2B04",
          700: "#231902",
          800: "#180F02",
          vibrant: "##FAF40A"
        },
        gold: {
          200: "#EEB317"
        },
        orange: {
          accesible: "#FF7A00"
        },
        green: {
          50: "#E3F3E6",
          100: "#BFEECA",
          200: "#76D191",
          300: "#40B66B",
          400: "#209853",
          500: "#0C522A",
          600: "#0C522A",
          700: "#053117",
          800: "#091F10",
          900: "#09130B",
          vibrant: "#5CFE9D"
        },
        blue: {
          50: "#EDEFF8",
          100: "#DEE1FF",
          200: "#ADBCFF",
          300: "#869EFF",
          400: "#4C82FB",
          500: "#1267D6",
          600: "#1D4294",
          700: "#09265E",
          800: "#0B193F",
          900: "#040E34",
          vibrant: "#587BFF",
          accessible: "#2346FD",
          gradient: "#3E43BB",
          chart: "#002BA3"
        },
        purple: {
          100: "#3F2098"
        },
        turquoise: {
          100: "#0081AA"
        },
        chain: {
          ethereum: "#627EEA",
          optimism: "#FF0420",
          polygon: "#A457FF"
        },
        activity_chart: {
          blue0: "#131B2B",
          blue1: "#182660",
          blue2: "#1D3194",
          blue3: "#203BC9",
          blue4: "#2446FD"
        },
        volume_chart: {
          line: "#1267D6",
          shadow0: "#0B193F",
          shadow1: "#0B0B0E"
        },
        tvl_chart: {
          line: "#209853",
          shadow0: "#091F10",
          shadow1: "#0B0B0E"
        },
        fees_chart: {
          line: "#C9D0E7",
          shadow0: "#293249",
          shadow1: "#0B0B0E"
        },
        multi_tvl_chart: {
          line0: "#8C0F49",
          line1: "#0C522A",
          line2: "#1D4294",
          shadow0: "#0B0B0E",
          shadow1: "#0B0B0E",
          shadow2: "#0B0B0E"
        },
        liquidity_chart: {
          hover: "#B6B6B617"
        }
      },
      extend: {
        opacity: {
          hover: ".08"
        },
        keyframes: {
          slideDown: {
            "0%": {
              transform: "translateY(-10%)"
            },
            "100%": {
              transform: "translateY(0)"
            }
          },
          shimmer: {
            "100%": {
              transform: "translateX(100%)"
            }
          },
          shimmerBackground: {
            "0%": {
              "background-position": "-1000px 0"
            },
            "100%": {
              "background-position": "1000px 0"
            }
          },
          slideDownAndFade: {
            from: {
              opacity: "0",
              transform: "translateY(-2px)"
            },
            to: {
              opacity: "1",
              transform: "translateY(0)"
            }
          },
          slideLeftAndFade: {
            from: {
              opacity: "0",
              transform: "translateX(2px)"
            },
            to: {
              opacity: "1",
              transform: "translateX(0)"
            }
          },
          slideUpAndFade: {
            from: {
              opacity: "0",
              transform: "translateY(2px)"
            },
            to: {
              opacity: "1",
              transform: "translateY(0)"
            }
          },
          slideRightAndFade: {
            from: {
              opacity: "0",
              transform: "translateX(-2px)"
            },
            to: {
              opacity: "1",
              transform: "translateX(0)"
            }
          }
        },
        animation: {
          "slide-down": "slideDown 0.1s ease-in-out",
          shimmer: "shimmer 2s ease-in-out infinite",
          "shimmer-background": "shimmerBackground 10s infinite linear",
          slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)"
        }
      },
      screens: {
        sm: "640px",
        md: "800px",
        lg: "1167px",
        xl: "1280px",
        "2xl": "1536px"
      }
    },
    plugins: []
  },
  ro = Ko(ea);
var Rr;
const i = (Rr = ro.theme) == null ? void 0 : Rr.colors;
var Ur;
const oo = (Ur = ro.theme) == null ? void 0 : Ur.opacity,
  ta = s => {
    const t = window.localStorage.getItem(s);
    try {
      return t ? JSON.parse(t) : null
    } catch {
      return null
    }
  },
  sa = (s, t) => (window.localStorage.setItem(s, JSON.stringify(t)), t),
  Ms = {
    [Be.DEFAULT]: {
      neg_color: i.red[400],
      pos_color: i.green[400],
      neg_vol_color: i.red[700],
      pos_vol_color: i.green[800],
      background_gradient: i.blue.gradient
    },
    [Be.UNICORN_POWER]: {
      neg_color: i.pink[400],
      pos_color: i.blue.vibrant,
      neg_vol_color: i.pink[700],
      pos_vol_color: i.blue[600],
      background_gradient: i.pink[400]
    },
    [Be.ACCESSIBLE]: {
      neg_color: i.orange.accesible,
      pos_color: i.blue.accessible,
      neg_vol_color: i.yellow[600],
      pos_vol_color: i.blue.accessible,
      background_gradient: i.orange.accesible
    },
    [Be.GALACTIC]: {
      neg_color: i.blue[400],
      pos_color: i.green[400],
      neg_vol_color: i.blue[900],
      pos_vol_color: i.green[500],
      background_gradient: i.green.vibrant
    }
  },
  no = {
    size: Ps.DEFAULT
  },
  ra = l.createContext({
    colorScheme: Be.DEFAULT,
    setColorScheme: () => {},
    appLayout: Xt.DEFAULT,
    setAppLayout: () => {},
    chart: no,
    setChart: () => {},
    colors: Ms[Be.DEFAULT]
  }),
  oa = s => {
    const {
      children: t
    } = s, r = ta("appLayout"), [o, n] = l.useState(Be.DEFAULT), [a, c] = l.useState(r || Xt.DEFAULT), [d, u] = l.useState(no), [h, g] = l.useState(Ms[o]);
    return l.useEffect(() => {
      g(Ms[o])
    }, [o]), l.useEffect(() => {
      sa("appLayout", a)
    }, [a]), e.jsx(ra.Provider, {
      value: {
        colorScheme: o,
        setColorScheme: n,
        appLayout: a,
        setAppLayout: c,
        chart: d,
        setChart: u,
        colors: h
      },
      children: t
    })
  },
  ao = Bs.createContext({
    height: 0,
    width: 0
  }),
  na = s => {
    const {
      children: t
    } = s, r = l.useCallback(() => Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0), []), o = l.useCallback(() => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), []), [n, a] = l.useState(r()), [c, d] = l.useState(o());
    return l.useEffect(() => {
      const u = () => {
        a(r()), d(o())
      };
      return window.addEventListener("resize", u), () => {
        window.removeEventListener("resize", u)
      }
    }, [r, o]), e.jsx(ao.Provider, {
      value: {
        height: n,
        width: c
      },
      children: t
    })
  },
  aa = () => {
    const s = l.useContext(ao);
    if (s === null) throw new Error('"useWindowContext" should be used inside a "WindowContextProvider"');
    return s
  },
  la = ({
    children: s
  }) => {
    const t = new Qo({});
    return e.jsx(Zo, {
      client: t,
      children: s
    })
  },
  ia = Object.fromEntries,
  lo = Jo({
    chains: Is,
    transports: ia(Is.map(s => [s.id, Xo()]))
  }),
  Et = lo,
  ca = ({
    children: s
  }) => e.jsx(en, {
    config: lo,
    children: s
  });

function da(s) {
  const {
    children: t
  } = s, r = [tn, na, ca, la, Zn, oa, Wn, Fn, Xn, Bn, Tn, Vn];
  return e.jsx(e.Fragment, {
    children: r.reduceRight((o, n) => e.jsx(n, {
      children: o
    }), t)
  })
}
const xr = () => e.jsxs("div", {
    children: [e.jsx(Ye, {
      pageTitle: "404"
    }), e.jsx("div", {
      children: "analytics 404 page"
    })]
  }),
  ua = () => {
    const s = cs(),
      t = l.useMemo(() => {
        const r = s.hash,
          o = n => n.slice(1);
        return r ? document.getElementById(o(r)) : null
      }, [s]);
    return l.useEffect(() => {
      t && t.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      })
    }, [t]), l.useEffect(() => {
      if (s && !t) {
        const r = document.getElementById("start");
        r && r.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        })
      }
    }, [s, t]), null
  };

function vt() {
  const {
    width: s,
    height: t
  } = aa();
  return {
    width: s,
    height: t
  }
}
const qe = {
  base: 0,
  sm: 760,
  md: 1024,
  lg: 1400,
  xl: 1600
};

function J(s) {
  const {
    width: t
  } = vt();
  if (s) {
    const r = s.base,
      o = s.sm,
      n = s.md,
      a = s.lg,
      c = s.xl;
    return t >= qe.base && t < qe.sm ? r : t >= qe.sm && t < qe.md ? o !== void 0 ? o : r : t >= qe.md && t < qe.lg ? n !== void 0 ? n : o !== void 0 ? o : r : t >= qe.lg && t < qe.xl ? a !== void 0 ? a : n !== void 0 ? n : o !== void 0 ? o : r : c !== void 0 ? c : a !== void 0 ? a : n !== void 0 ? n : o !== void 0 ? o : r
  } else return "0"
}
const F = s => {
    const {
      weight: t = O.REGULAR,
      children: r,
      color: o = i.white,
      className: n
    } = s, a = J({
      base: "16px",
      sm: "16px"
    }), c = J({
      base: "18px",
      sm: "18px"
    });
    return e.jsx("div", {
      className: n,
      style: {
        fontWeight: t,
        fontSize: a,
        lineHeight: c,
        color: o
      },
      children: r
    })
  },
  C = s => {
    const {
      weight: t = O.REGULAR,
      children: r,
      color: o = i.white,
      className: n
    } = s, a = J({
      base: "12px",
      sm: "14px"
    }), c = J({
      base: "14px",
      sm: "16px"
    });
    return e.jsx("div", {
      className: n,
      style: {
        fontWeight: t,
        fontSize: a,
        lineHeight: c,
        color: o
      },
      children: r
    })
  },
  X = s => {
    const {
      weight: t = O.REGULAR,
      children: r,
      color: o = i.white,
      className: n
    } = s, a = J({
      base: "12px",
      sm: "12px"
    }), c = J({
      base: "14px",
      sm: "14px"
    });
    return e.jsx("div", {
      className: n,
      style: {
        fontWeight: t,
        fontSize: a,
        lineHeight: c,
        color: o
      },
      children: r
    })
  },
  Fe = s => {
    const {
      weight: t = O.REGULAR,
      children: r,
      color: o = i.white,
      className: n,
      fontSize: a
    } = s, c = J({
      base: "10px",
      sm: "10px"
    }), d = J({
      base: "12px",
      sm: "12px"
    });
    return e.jsx("p", {
      style: {
        fontWeight: t,
        fontSize: a || c,
        lineHeight: d,
        color: o
      },
      className: n,
      children: r
    })
  };

function ha() {
  const s = [{
      icon: e.jsx(z, {
        style: {
          color: i.gray.footer_icons,
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/discordIcon.svg"
      }),
      link: "https://discord.gg/ugVW3uM4sr"
    }, {
      icon: e.jsx(z, {
        style: {
          color: i.gray.footer_icons,
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/xIcon.svg"
      }),
      link: "https://twitter.com/"
    }, {
      icon: e.jsx(z, {
        style: {
          color: i.gray.footer_icons,
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/instagramIcon.svg"
      }),
      link: "https://instagram.com/oku.trade/"
    }, {
      icon: e.jsx(z, {
        style: {
          color: i.gray.footer_icons,
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/debankIcon.svg"
      }),
      link: "https://debank.com/official-account/111487"
    }, {
      icon: e.jsx(z, {
        style: {
          color: i.gray.footer_icons,
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/mirrorIcon.svg"
      }),
    }, {
      icon: e.jsx(z, {
        style: {
          color: i.gray.footer_icons,
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/farcasterIcon.svg"
      }),
      link: "https://warpcast.com/oku"
    }],
    t = [{
      title: "About us",
      link: "/about.html"
    }, {
      title: "Ukia Trade",
      link: "/app"
    }, {
      title: "Contact us",
      link: "https://discord.gg/ugVW3uM4sr"
    }, {
      title: "Privacy policy",
      link: "/privacy-policy.html"
    }, {
      title: "Terms and conditions",
      link: "/terms-of-service.html"
    }],
    r = [{
      title: "Overview",
      link: "overview"
    }, {
      title: "Tokens",
      link: "tokens"
    }, {
      title: "Positions",
      link: "positions"
    }, {
      title: "Pools",
      link: "pools"
    }],
    o = () => e.jsxs(e.Fragment, {
      children: [e.jsx(F, {
        color: i.gray[50],
        weight: O.SEMIBOLD,
        children: "Ukia Analytics"
      }), e.jsxs("div", {
        children: [e.jsx(F, {
          color: i.gray[300],
          children: "Powered by Uniswap V3"
        }), e.jsx(F, {
          color: i.gray[300],
          children: "Built by GFX Labs"
        })]
      })]
    });
  return e.jsxs("div", {
    className: "flex flex-col bg-gray-dark mt-20 -mx-2 md:-mx-5 px-3 lg:px-8 py-16 gap-20 ",
    children: [e.jsx("div", {
      className: "space-y-5 md:hidden",
      children: o()
    }), e.jsxs("div", {
      className: "flex justify-between",
      children: [e.jsx("div", {
        className: "space-y-5 hidden md:block",
        children: o()
      }), e.jsxs("div", {
        className: "flex-col space-y-4",
        children: [e.jsx(F, {
          color: i.gray[50],
          weight: O.SEMIBOLD,
          children: "Company"
        }), t.map((n, a) => e.jsx("div", {
          className: "hover:opacity-80",
          children: e.jsx(pe, {
            to: n.link,
            target: "_blank",
            rel: "noopener noreferrer",
            children: e.jsx(F, {
              color: i.gray[300],
              children: n.title
            })
          })
        }, a))]
      }), e.jsxs("div", {
        className: "flex-col space-y-4",
        children: [e.jsx(F, {
          color: i.gray[50],
          weight: O.SEMIBOLD,
          children: "Popular categories"
        }), r.map((n, a) => e.jsx("div", {
          className: "hover:opacity-80",
          children: e.jsx(pe, {
            className: "hover:opacity-80",
            to: n.link,
            children: e.jsx(F, {
              color: i.gray[300],
              children: n.title
            })
          }, a)
        }, a))]
      }), e.jsxs("div", {
        className: "flex gap-4 space-y-4 hidden md:block",
        children: [e.jsx(F, {
          color: i.gray[50],
          weight: O.SEMIBOLD,
          children: "Follow along"
        }), e.jsx("div", {
          className: "flex gap-2 justify-end",
          children: s.map((n, a) => e.jsx("div", {
            className: "hover:opacity-80",
            children: e.jsx(pe, {
              to: n.link,
              target: "_blank",
              rel: "noopener noreferrer",
              children: n.icon
            })
          }, a))
        })]
      })]
    }), e.jsx("div", {
      className: "flex gap-1 md:hidden",
      children: s.map((n, a) => e.jsx("div", {
        className: "hover:opacity-80",
        children: e.jsx(pe, {
          to: n.link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: n.icon
        })
      }, a))
    })]
  })
}

function Yt(s) {
  return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)
}

function io(s) {
  const t = s.split(" ");
  for (let r = 0; r < t.length; r++) t[r] = t[r][0].toUpperCase() + t[r].substr(1);
  return t.join(" ")
}
const xa = (...s) => {
  for (const t of s)
    if (t) return t;
  return ""
};

function fa() {
  const {
    address: s,
    uuid: t
  } = ge();
  return e.jsx("div", {
    className: "my-3 ml-1",
    children: ga(xa(s, t))
  })
}
const ga = s => {
  switch (s) {
    case Ae.OVERVIEW:
      return e.jsx("div", {
        className: "text-[20px] text-white",
        children: Yt(Ae.OVERVIEW)
      });
    case Ae.POOLS:
      return e.jsx("div", {
        className: "text-[20px] text-white",
        children: Yt(Ae.POOLS)
      });
    case Ae.TOKENS:
      return e.jsx("div", {
        className: "text-[20px] text-white",
        children: Yt(Ae.TOKENS)
      });
    case Ae.POSITIONS:
      return e.jsx("div", {
        className: "text-[20px] text-white",
        children: Yt(Ae.POSITIONS)
      });
    default:
      return e.jsx(e.Fragment, {})
  }
};

function de() {
  const s = J({
    base: 0,
    sm: 1,
    md: 2
  });
  return s === 0 ? {
    isMobile: !0,
    isTablet: !1,
    isDesktop: !1
  } : s === 1 ? {
    isMobile: !1,
    isTablet: !0,
    isDesktop: !1
  } : {
    isMobile: !1,
    isTablet: !1,
    isDesktop: !0
  }
}
const ma = s => "#" + s.map(t => {
    const r = t.toString(16);
    return r.length === 1 ? "0" + r : r
  }).join(""),
  pa = (s, t, r) => {
    const o = h => [parseInt(h[0], 16), parseInt(h[1], 16), parseInt(h[2], 16)],
      n = o(s),
      a = o(t),
      c = n.map(h => h * r),
      d = a.map(h => h * (1 - r)),
      u = c.map((h, g) => Math.round(h + d[g]));
    return ma(u)
  },
  Se = s => {
    const t = i.hover,
      r = s.slice(-6).match(/.{1,2}/g),
      o = t.slice(-6).match(/.{1,2}/g),
      n = 1 - Number(oo.hover);
    return r && o ? pa(r, o, n) : i.black
  },
  Lt = ({
    onClose: s,
    showOverlay: t = !0
  }) => e.jsx("div", {
    className: "fixed h-full w-full left-0 top-0",
    onClick: s,
    style: {
      backgroundColor: i.black,
      opacity: t ?.61 : 0
    }
  }),
  ja = s => {
    const {
      onClick: t
    } = s, [r, o] = l.useState(!1);
    return e.jsx("button", {
      onClick: t,
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: e.jsx(Br, {
        fill: r ? Se(i.gray[400]) : i.gray[400],
        width: 16
      })
    })
  };

function va(s) {
  const {
    showModal: t,
    onClose: r,
    children: o,
    offsetLeft: n = "auto",
    offsetTop: a = "40vh",
    offsetRight: c = "auto",
    offsetBottom: d = "auto",
    showOverlay: u = !0,
    showCloseButton: h = !1
  } = s;
  return e.jsx(e.Fragment, {
    children: t && e.jsxs("div", {
      className: "fixed z-10  h-full w-full flex",
      style: {
        left: 0,
        top: 0
      },
      children: [e.jsx(Lt, {
        onClose: r,
        showOverlay: u
      }), e.jsxs("div", {
        className: "relative w-fit h-fit",
        style: {
          zIndex: 2,
          marginLeft: n,
          marginRight: c,
          marginTop: a,
          marginBottom: d
        },
        children: [h && e.jsx("div", {
          className: "absolute h-fit w-fit",
          style: {
            right: "16px",
            top: "10px"
          },
          children: e.jsx(ja, {
            onClick: r
          })
        }), o]
      })]
    })
  })
}

function co() {
  var n, a, c, d, u;
  const [s, t] = l.useState(!1), r = l.useRef(null), {
    isMobile: o
  } = de();
  return e.jsxs("div", {
    className: "",
    children: [e.jsx("div", {
      ref: r,
      children: e.jsx(ba, {
        setShowModal: t
      })
    }), e.jsx("div", {
      className: "z-40 right-8 ",
      children: e.jsx(ya, {
        showModal: s,
        setShowModal: t,
        offsetLeft: o ? r.current ? ((n = r.current) == null ? void 0 : n.offsetLeft) - ((a = r.current) == null ? void 0 : a.clientWidth) / 3 : 0 : r.current ? ((c = r.current) == null ? void 0 : c.offsetLeft) - 155 + ((d = r.current) == null ? void 0 : d.clientWidth) : 0,
        offsetTop: r.current ? ((u = r.current) == null ? void 0 : u.offsetTop) + r.current.clientHeight + 4 : 0
      })
    })]
  })
}
const ya = ({
    showModal: s,
    setShowModal: t,
    offsetLeft: r,
    offsetTop: o
  }) => {
    const {
      features: {
        Chains: n
      }
    } = us(), {
      currentChainInfo: a
    } = R();
    return e.jsx(va, {
      showModal: s,
      onClose: () => t(!1),
      showOverlay: !1,
      offsetLeft: r,
      offsetTop: o,
      children: e.jsx("div", {
        className: " border-[1px] rounded-[6px] h-fit text-white  flex flex-col animate-slide-down  ",
        style: {
          borderColor: i.gray[700],
          backgroundColor: i.gray[900]
        },
        children: Object.values(Xe).sort((c, d) => n.comingsoon.includes(c.internalName) < n.comingsoon.includes(d.internalName) || c.sortIndex < d.sortIndex ? -1 : c.id === d.id ? 0 : 1).filter(c => !n.hidden.includes(c.internalName)).map(c => e.jsx(wa, {
          setShowModal: t,
          chain_info: c,
          chain: a,
          comingSoon: n.comingsoon.includes(c.internalName)
        }, c.id))
      })
    })
  },
  ba = ({
    setShowModal: s
  }) => {
    const {
      currentChainInfo: t
    } = R(), r = J({
      base: "16px",
      sm: "20px"
    }), o = J({
      base: "24px",
      sm: "32px"
    }), {
      blockNumber: n
    } = so();
    return e.jsxs("button", {
      onClick: () => {
        s(!0)
      },
      className: "bg-gray-900 border-[1px] border-gray-600 hover:opacity-70 flex items-center justify-between px-2 rounded-[6px] ",
      style: {
        height: o
      },
      children: [e.jsxs("div", {
        className: "flex flex-row gap-1",
        children: [e.jsx("img", {
          src: t.logoUrl,
          style: {
            width: r,
            minWidth: r,
            minHeight: r,
            height: r
          },
          alt: t.name
        }), e.jsx("div", {
          className: "w-fit flex flex-1  items-center ",
          children: e.jsx(C, {
            className: "text-xs mr-2 whitespace-nowrap",
            color: n > 0 ? i.gray[300] : i.yellow[400],
            children: n > 0 ? n : "DISCONNECTED"
          })
        })]
      }), e.jsx(zs, {
        width: 13,
        height: 12,
        fill: i.gray[50]
      })]
    })
  },
  wa = ({
    chain_info: s,
    setShowModal: t,
    comingSoon: r,
    chain: o
  }) => {
    const [n, a] = l.useState(!1), c = zr(), d = r, {
      pathname: u
    } = cs(), {
      chain: h,
      address: g,
      uuid: x,
      userAddress: f
    } = ge();
    return e.jsxs("button", {
      className: `${r?"line-through":""} flex items-center px-4 py-2 first:rounded-t-[6px] last:rounded-b-[6px] text-sm  justify-between`,
      style: {
        color: n || s.id === (o == null ? void 0 : o.id) ? i.gray[100] : i.gray[300],
        backgroundColor: n ? i.hover : i.gray[900]
      },
      disabled: d,
      onMouseEnter: () => {
        a(!0)
      },
      onMouseLeave: () => {
        a(!1)
      },
      onClick: () => {
        let j = u.replace(h || "ethereum", s.internalName);
        f && (j = `/${s.internalName}/user/${f}`), (g || x) && (j = `/${s.internalName}/overview`), c(j), t(!1)
      },
      children: [e.jsxs("div", {
        className: "flex flex-row",
        children: [e.jsx("img", {
          src: s.logoUrl || Xe[1].logoUrl,
          className: "w-5 h-5 mr-2",
          alt: s.name,
          style: {
            width: 16,
            height: 16
          }
        }), s.name]
      }), s.id === (o == null ? void 0 : o.id) ? e.jsx(sn, {
        color: i.green[300],
        height: 12,
        width: 13,
        className: "ms-4"
      }) : e.jsx(e.Fragment, {})]
    }, s.id)
  },
  qs = "/",
  uo = () => {
    const [s, t] = l.useState(!1), {
      currentChainInfo: r
    } = R();
    return e.jsxs("button", {
      className: "flex flex-row items-center gap-1  ",
      onMouseEnter: () => {
        t(!0)
      },
      onMouseLeave: () => {
        t(!1)
      },
      onClick: () => {
        window.open(`${qs}/app/${r.internalName}`)
      },
      children: [e.jsx(C, {
        color: s ? Se(i.gray[200]) : i.gray[200],
        children: "Ukia Trade"
      }), e.jsx(rn, {
        width: 16,
        color: s ? Se(i.gray[300]) : i.gray[300]
      })]
    })
  };

function ho() {
  const s = "https://assets.oku.trade/uni-v3.webp",
    t = J({
      base: "24px",
      sm: "32px"
    }),
    r = J({
      base: "44px",
      sm: "56px"
    }),
    o = J({
      base: "12px",
      sm: "18px"
    });
  return e.jsxs("div", {
    className: " border-[1px] rounded-[6px] border-gray-600 bg-gray-900 flex items-center justify-center gap-x-1 ",
    style: {
      height: t,
      width: r
    },
    children: [e.jsx("img", {
      src: s,
      alt: "UNIv3",
      width: o,
      height: o
    }), e.jsx(C, {
      color: i.gray[200],
      children: "V3"
    })]
  })
}

function Ca() {
  return e.jsx("div", {
    className: " z-[20] w-full flex flex-row flex-1 justify-end bg-gray-900 max-h-[52px] py-2 px-3 lg:flex",
    children: e.jsxs("div", {
      className: "mr-2 mb-4 flex flex-row items-center h-fit gap-4 pt-1",
      children: [e.jsx(ho, {}), e.jsx(co, {}), e.jsx(uo, {})]
    })
  })
}
const _a = ({
    lines: s,
    random: t = !1
  }) => {
    const r = ["w-[50%]", "w-[60%]", "w-[70%]", "w-[80%]", "w-[90%]", "w-[100%]"],
      o = Array.from({
        length: s
      }, (n, a) => a).map(n => {
        const a = t ? r[Math.floor(Math.random() * r.length)] : "w-full";
        return e.jsx("div", {
          className: `h-2 rounded-full dark:bg-gray-800 ${a} my-3`
        }, n)
      });
    return e.jsxs("div", {
      role: "status",
      className: "animate-pulse px-2 w-full",
      children: [o, e.jsx("span", {
        className: "sr-only",
        children: "Loading..."
      })]
    })
  },
  yt = ({
    classes: s
  }) => e.jsxs("div", {
    role: "status",
    className: `animate-pulse px-2 my-3 ${s}`,
    children: [e.jsx("div", {
      className: "h-2.5 rounded-full dark:bg-gray-800 w-full"
    }), e.jsx("span", {
      className: "sr-only",
      children: "Loading..."
    })]
  }),
  hs = ({
    classes: s
  }) => e.jsxs("div", {
    role: "status",
    className: `animate-pulse px-2 my ${s}`,
    children: [e.jsx("div", {
      className: "h-8: lg:h-9 rounded-[8px] dark:bg-gray-800 w-full"
    }), e.jsx("span", {
      className: "sr-only",
      children: "Loading..."
    })]
  });

function Y(s, t, r = {
  placeholderData: or
}) {
  const {
    omniCush: o
  } = Gs(), {
    chain: n
  } = R(), {
    blockNumber: a
  } = so();
  r && (r.placeholderData || (r.placeholderData = or), r.enabled !== !1 && (r.enabled = !0));
  const c = {
    queryKey: [n, s, a, t],
    ...r
  };
  c.queryFn = async () => typeof s == "string" ? o.network(n).call(s, t) : o.network(n).call(s[0], t), c.gcTime || (c.gcTime = 30 * 1e3);
  const d = Hr(c);
  l.useEffect(() => {
    r.enabled == !0 && d.refetch()
  }, [o, n]);
  const u = typeof s != "string" ? s[1] : f => f,
    [h, g] = l.useState(u(d.data));
  l.useEffect(() => {
    g(u(d.data))
  }, [d.data]);
  const x = d;
  return x.mutatedData = h, x
}

function Na(s) {
  const {
    showModal: t,
    setShowModal: r,
    children: o,
    offset: n = [0, 0, 0, 0],
    showOverlay: a = !0
  } = s;
  return e.jsx("div", {
    className: "z-50 absolute",
    children: t && e.jsxs("div", {
      className: "z-30 flex flex-1",
      children: [e.jsx(Lt, {
        onClose: () => r(!1),
        showOverlay: a
      }), e.jsx("div", {
        className: " h-fit  ml-auto mr-auto mb-auto mt-auto z-30 animate-slide-down",
        style: {
          right: n[0],
          left: n[1],
          top: n[2],
          bottom: n[3]
        },
        children: o
      })]
    })
  })
}
const Dt = ({
    modalContent: s,
    buttonContent: t,
    fullWidthButton: r,
    showCarot: o,
    buttonStyle: n,
    showModal: a,
    setShowModal: c
  }) => e.jsxs("div", {
    className: `${r?"w-full":""}`,
    children: [e.jsx(ka, {
      onClick: () => c(!0),
      buttonContent: t,
      showCarot: o,
      buttonStyle: n
    }), e.jsx(Sa, {
      showModal: a,
      setShowModal: c,
      width: "fit-content",
      children: s
    })]
  }),
  Sa = ({
    children: s,
    showModal: t,
    setShowModal: r,
    width: o
  }) => e.jsx(Na, {
    showModal: t,
    setShowModal: r,
    showOverlay: !1,
    children: e.jsx("div", {
      style: {
        width: o
      },
      children: s
    })
  }),
  ka = ({
    buttonContent: s,
    onClick: t,
    showCarot: r = !0,
    buttonStyle: o = {}
  }) => {
    const {
      isMobile: n
    } = de();
    return e.jsxs("button", {
      className: "bg-gray-dark text-white w-full flex flex-row items-center text-[12px] font-medium justify-between",
      style: o,
      onClick: t,
      children: [s, r && e.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 2,
        stroke: "white",
        style: {
          width: n ? "12px" : "16px",
          height: n ? "9px" : "12px"
        },
        children: e.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        })
      })]
    })
  };

function Ta(s) {
  const {
    setFee: t
  } = s, [r, o] = l.useState(!1);
  return e.jsx(Dt, {
    showModal: r,
    setShowModal: o,
    buttonContent: e.jsx(La, {
      setShowModal: o
    }),
    modalContent: e.jsx(Da, {
      setFee: t,
      setShowModal: o
    }),
    showCarot: !1
  })
}
const Ea = s => {
    const {
      onClick: t,
      fee: r
    } = s, [o, n] = l.useState(!1);
    return e.jsx("button", {
      onClick: () => t(r),
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      className: "w-[74px] py-2 px-2 justify-center rounded-[4px] flex",
      style: {
        background: o ? Se(i.gray[900]) : i.gray[900]
      },
      children: e.jsx(X, {
        children: r !== void 0 ? (r / 1e4).toFixed(2).concat(" %") : "All Fees"
      })
    }, r)
  },
  La = ({
    setShowModal: s
  }) => {
    const [t, r] = l.useState(!1);
    return e.jsx("div", {
      onClick: () => s(!0),
      onMouseEnter: () => {
        r(!0)
      },
      onMouseLeave: () => {
        r(!1)
      },
      className: "flex items-center gap-1 rounded-[6px] w-[78px] h-[24px] flex-row jusitfy-between border-[1px]",
      style: {
        backgroundColor: t ? Se(i.gray[900]) : i.gray[900],
        borderColor: i.gray[700]
      },
      children: e.jsxs("div", {
        className: "w-full flex flex-row justify-between  px-[6px]",
        children: [e.jsx(X, {
          children: "Fee"
        }), e.jsx(zs, {
          width: 14,
          color: i.gray[200]
        })]
      })
    })
  },
  Da = ({
    setFee: s,
    setShowModal: t
  }) => {
    const r = [void 0, 100, 500, 3e3, 1e4],
      o = n => {
        s(n), t(!1)
      };
    return e.jsx("div", {
      className: " border-[1px] rounded-[6px] h-fit  flex flex-col",
      style: {
        borderColor: i.gray[700],
        backgroundColor: i.gray[900]
      },
      children: r.map(n => e.jsx(Ea, {
        fee: n,
        onClick: o
      }, n))
    })
  },
  Ia = "en";

function Pa(s) {
  const {
    number: t,
    showOnly2Digits: r,
    minimumNumber: o = .01,
    removeTrailingZeros: n = !1,
    stringOut: a
  } = s, c = t < 0, d = Math.abs(t) < o, u = () => -Math.floor(Math.log10(Math.abs(t)) + 1), h = () => {
    let g = (Math.abs(t) * Math.pow(10, u() + 4)).toPrecision(4);
    return g = g.includes(".") ? `${g.slice(0,g.indexOf("."))} ${n?"":"000"}` : g, g = r ? g.substring(0, g.length - 2) : g, g
  };
  return a ? `${c?"-0.0":"0.0"}(${u()})${h()}` : e.jsx("span", {
    children: d && t !== 0 ? e.jsxs(e.Fragment, {
      children: [e.jsx("span", {
        children: c ? "-0.0" : "0.0"
      }), e.jsx("sub", {
        children: `${u()}`
      }), e.jsx("span", {
        children: h()
      })]
    }) : t
  })
}
const k = s => {
  const {
    singleLetterNotation: t,
    showOnly2Digits: r,
    smallNumberOn2Zeros: o,
    useScientificNotation: n,
    hideDecimals: a,
    stringOut: c
  } = s;
  let {
    num: d
  } = s;
  const u = {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    },
    h = "0.00",
    g = "0";
  if (typeof d == "string" && (d = Number(d)), d === 0) return a ? c ? g : e.jsx(e.Fragment, {
    children: g
  }) : c ? h : e.jsx(e.Fragment, {
    children: h
  });
  if (isNaN(d)) return c ? "" : e.jsx(e.Fragment, {});
  if (Math.abs(d) < 1e-6 || o && Math.abs(d) < .01) return Pa({
    number: d,
    showOnly2Digits: r,
    stringOut: c
  });
  Math.abs(d) < 1 && (u.maximumFractionDigits = 6, u.minimumFractionDigits = 6), t && Math.abs(d) > 1e4 && (u.notation = "compact"), r && (u.minimumFractionDigits = 2, u.maximumFractionDigits = 2), a && (!t || Math.abs(d) < 1e4) && (u.maximumFractionDigits = 0, u.minimumFractionDigits = 0), (Math.abs(d) >= Math.pow(10, 15) || n) && (u.notation = "scientific");
  const x = new Intl.NumberFormat(Ia, u).format(d);
  return c ? x : e.jsx(e.Fragment, {
    children: x
  })
};
class Ma {
  constructor(t, r, o, n) {
    Te(this, "chainId");
    Te(this, "decimals");
    Te(this, "symbol");
    Te(this, "name");
    this.chainId = t, this.decimals = r, this.symbol = o, this.name = n
  }
}
class Aa extends Ma {
  constructor(r, o, n, a, c) {
    super(r, n, a, c);
    Te(this, "isNative", !1);
    Te(this, "isToken", !0);
    Te(this, "address");
    this.address = Wr(o)
  }
  equals(r) {
    return r.isToken && this.chainId === r.chainId && this.address === r.address
  }
  sortsBefore(r) {
    return this.address.toLowerCase() < r.address.toLowerCase()
  }
  get wrapped() {
    return this
  }
}
const Oa = ({
    chainId: s = 1,
    address: t,
    decimals: r = 18,
    symbol: o,
    name: n
  }) => new Aa(s, t, r, o, n),
  fr = s => ({
    chainId: 1,
    address: "",
    decimals: 18,
    name: "UNKNOWN TOKEN",
    symbol: s,
    logoURI: "https://assets.oku.trade/no-token-logo.webp",
    isNative: !1,
    isToken: !0
  }),
  As = (s, t) => `${s.toUpperCase()}_${t}`,
  $a = s => {
    const t = new Map;
    return s.tokens.forEach(r => {
      r.logoURI && r.logoURI.includes("ipfs://") && (r.logoURI = r.logoURI.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/")), t.set(As(r.symbol.toUpperCase(), r.chainId), r), t.set(As(r.address.toLowerCase(), r.chainId), r)
    }), t
  },
  Fa = $a(An),
  es = (s, t) => {
    if (!s || s === "") return fr("NULL");
    const r = Fa.get(As(s, t));
    if (!r) return fr("NULL");
    const {
      chainId: o,
      address: n,
      decimals: a,
      name: c,
      symbol: d
    } = r, h = Oa({
      chainId: o,
      address: n,
      decimals: a,
      name: c,
      symbol: d
    });
    return h.logoURI = r.logoURI || "https://assets.oku.trade/no-token-logo.webp", h
  },
  ze = (s, t) => es(s, t).logoURI,
  ft = s => {
    const {
      currentChainInfo: t
    } = R(), r = () => ze(s, t.id), [o, n] = l.useState(r());
    return l.useEffect(() => {
      const a = r();
      o !== a && n(o)
    }, [t]), o
  },
  It = s => {
    const {
      token0Symbol: t,
      token1Symbol: r,
      token0Address: o,
      token1Address: n,
      fee: a
    } = s, c = ft(o), d = ft(n);
    return c && d ? e.jsxs("div", {
      className: "flex items-center",
      children: [e.jsxs("div", {
        className: "flex  w=[40px] min-w-[40px] mr-1",
        children: [e.jsx("img", {
          className: "rounded-full h-[20px] w-[20px] -mr-1",
          src: c,
          alt: t
        }), e.jsx("img", {
          className: "rounded-full h-[20px] w-[20px]",
          src: d,
          alt: r
        })]
      }), e.jsxs("div", {
        className: "flex flex-row gap-1 items-center",
        children: [e.jsx(C, {
          weight: O.MEDIUM,
          color: i.gray[100],
          children: t
        }), e.jsx(C, {
          weight: O.MEDIUM,
          color: i.gray[100],
          children: "/"
        }), e.jsxs(C, {
          weight: O.MEDIUM,
          color: i.gray[100],
          children: [r, " "]
        })]
      }), e.jsx("div", {
        className: "rounded-[6px] flex  min-w-[48px] items-center justify-center",
        children: e.jsxs(C, {
          weight: O.MEDIUM,
          color: i.gray[100],
          children: [a / 1e4, "%"]
        })
      })]
    }) : e.jsx(yt, {})
  },
  Ra = s => {
    const {
      token0Symbol: t,
      token1Symbol: r,
      token0Address: o,
      token1Address: n,
      fee: a,
      poolAddress: c
    } = s, d = ft(o), u = ft(n), [h, g] = l.useState(!1);
    return d && u ? e.jsx(pe, {
      to: `../pool/${c}`,
      rel: "noopener noreferrer",
      children: e.jsxs("div", {
        className: "flex items-center",
        onMouseEnter: () => {
          g(!0)
        },
        onMouseLeave: () => {
          g(!1)
        },
        children: [e.jsxs("div", {
          className: "flex w-[36px] mr-1",
          children: [e.jsx("img", {
            className: "rounded-full h-[18px] w-[18px] -mr-1",
            src: d,
            alt: t
          }), e.jsx("img", {
            className: "rounded-full  h-[18px]  w-[18px]",
            src: u,
            alt: r
          })]
        }), e.jsxs("div", {
          className: "flex flex-row gap-1 items-center",
          children: [e.jsx(ts, {
            hover: h,
            setHover: g,
            symbol: t
          }), e.jsx("div", {
            className: "text-[20px] text-gray-100 font-semibold ",
            children: "/"
          }), e.jsx(ts, {
            hover: h,
            setHover: g,
            symbol: r
          })]
        }), e.jsx("div", {
          className: "rounded-[6px] p-1 px-2 h-fit",
          children: e.jsxs("div", {
            className: "text-[20px] text-white font-semibold ",
            style: {
              color: h ? i.gray[400] : i.gray[100]
            },
            children: [a / 1e4, "%"]
          })
        })]
      })
    }) : e.jsx(yt, {})
  },
  Ua = s => {
    const {
      token0Symbol: t,
      token1Symbol: r,
      token0Address: o,
      token1Address: n,
      fee: a
    } = s, c = ft(o), d = ft(n), [u, h] = l.useState(!1), [g, x] = l.useState(!1);
    return c && d ? e.jsxs("div", {
      className: "flex items-center",
      children: [e.jsxs("div", {
        className: "flex w-[36px] mr-1",
        children: [e.jsx("img", {
          className: "rounded-full h-[18px] w-[18px] -mr-1",
          src: c,
          alt: t
        }), e.jsx("img", {
          className: "rounded-full   h-[18px] w-[18px]",
          src: d,
          alt: r
        })]
      }), e.jsxs("div", {
        className: "flex flex-row gap-1 items-center",
        children: [e.jsx(pe, {
          to: `../token/${o}`,
          rel: "noopener noreferrer",
          children: e.jsx(ts, {
            hover: u,
            setHover: h,
            symbol: t
          })
        }), e.jsx("div", {
          className: "text-[20px] text-gray-100 font-semibold ",
          children: "/"
        }), e.jsx(pe, {
          to: `../token/${n}`,
          rel: "noopener noreferrer",
          children: e.jsx(ts, {
            hover: g,
            setHover: x,
            symbol: r
          })
        })]
      }), e.jsx("div", {
        className: "rounded-[6px] p-1 px-2 h-fit",
        children: e.jsxs("div", {
          className: "text-[20px] text-gray-100 font-semibold ",
          children: [a / 1e4, "%"]
        })
      })]
    }) : e.jsx(yt, {})
  },
  ts = s => {
    const {
      setHover: t,
      hover: r,
      symbol: o
    } = s;
    return e.jsx("div", {
      onMouseEnter: () => {
        t(!0)
      },
      onMouseLeave: () => {
        t(!1)
      },
      className: "text-[20px] text-white font-semibold ",
      style: {
        color: r ? i.gray[400] : i.gray[100]
      },
      children: o
    })
  },
  be = (s, t, r) => {
    if (s === "") return t;
    let o = es(s, r).symbol;
    return (!o || o === "NULL") && (o = t), o
  },
  xs = "grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
  Va = () => e.jsxs("div", {
    className: `grid ${xs} items-center justify-end text-right px-4 lg:px-5  mb-[6px] lg:mb-2`,
    children: [e.jsx("div", {
      className: " text-left",
      children: e.jsx(C, {
        color: i.gray[400],
        children: e.jsx(ne, {
          id: "ou6PkF"
        })
      })
    }), e.jsx(C, {
      color: i.gray[400],
      children: e.jsx(ne, {
        id: "UOq4hK"
      })
    }), e.jsx(C, {
      color: i.gray[400],
      className: "hidden md:block",
      children: e.jsx(ne, {
        id: "UayI0g"
      })
    }), e.jsx(C, {
      color: i.gray[400],
      className: "hidden lg:block",
      children: e.jsx(ne, {
        id: "pP3soS"
      })
    }), e.jsx(C, {
      color: i.gray[400],
      className: "hidden md:block",
      children: e.jsx(ne, {
        id: "FHKsZF"
      })
    }), e.jsx(C, {
      color: i.gray[400],
      className: "hidden lg:block",
      children: e.jsx(ne, {
        id: "4wyw8H"
      })
    })]
  }),
  Ha = () => e.jsxs("div", {
    className: `grid ${xs} items-center justify-end text-right px-4 lg:px-5   mb-[6px] lg:mb-2`,
    children: [e.jsx("div", {
      className: " text-left mr-5",
      children: e.jsx(C, {
        color: i.gray[400],
        children: e.jsx(ne, {
          id: "TP9/K5"
        })
      })
    }), e.jsx(C, {
      color: i.gray[400],
      children: e.jsx(ne, {
        id: "a7u1N9"
      })
    }), e.jsx(C, {
      color: i.gray[400],
      className: "hidden md:block",
      children: e.jsx(ne, {
        id: "UOq4hK"
      })
    }), e.jsx(C, {
      color: i.gray[400],
      className: "hidden lg:block",
      children: e.jsx(ne, {
        id: "pP3soS"
      })
    }), e.jsx(C, {
      color: i.gray[400],
      className: "hidden md:block",
      children: e.jsx(ne, {
        id: "FHKsZF"
      })
    }), e.jsxs(C, {
      color: i.gray[400],
      className: "hidden lg:block",
      children: [" ", e.jsx(ne, {
        id: "4wyw8H"
      })]
    })]
  }),
  Ba = ({
    hasEns: s,
    isEns: t
  }) => e.jsxs("div", {
    className: `flex ${t?"flex-row-reverse":"flex-row"} items-between flex-1 justify-between w-full text-right px-4 lg:px-5   mb-[6px] lg:mb-2`,
    children: [e.jsx("div", {
      className: " text-left ",
      children: e.jsx(C, {
        color: i.gray[400],
        children: e.jsx(ne, {
          id: "Du6bPw"
        })
      })
    }), s && e.jsx(C, {
      color: i.gray[400],
      children: e.jsx(ne, {
        id: "4+VnE8"
      })
    })]
  }),
  za = () => e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className: "grid grid-cols-2 lg:grid-cols-6 items-center justify-between text-right px-4 lg:px-5  mb-[6px] lg:mb-2",
      children: [e.jsx("div", {
        className: " text-left mr-5",
        children: e.jsx(C, {
          color: i.gray[400],
          children: e.jsx(ne, {
            id: "ou6PkF"
          })
        })
      }), e.jsx("div", {
        className: "hidden lg:block"
      }), e.jsx(C, {
        color: i.gray[400],
        className: "col-span-1 text-end lg:text-end",
        children: e.jsx(ne, {
          id: "8glx+u"
        })
      }), e.jsx(C, {
        color: i.gray[400],
        className: "hidden lg:block",
        children: e.jsx(ne, {
          id: "jjuKOj"
        })
      }), e.jsxs(C, {
        color: i.gray[400],
        className: "hidden lg:block",
        children: [" ", e.jsx(ne, {
          id: "Eq83tw"
        })]
      }), e.jsxs(C, {
        color: i.gray[400],
        className: "hidden lg:block",
        children: [" ", e.jsx(ne, {
          id: "wMHvYH"
        })]
      })]
    })
  }),
  gr = s => {
    const {
      pool: t,
      onClose: r
    } = s, [o, n] = l.useState(!1), {
      currentChainInfo: a
    } = R(), [c, d] = l.useState(), [u, h] = l.useState();
    return l.useEffect(() => {
      (async () => {
        const x = ze(t.t0, a.id),
          f = ze(t.t1, a.id);
        d(x), h(f)
      })()
    }, [t]), e.jsx("div", {
      className: "flex relative gap-1 justify-between w-full  cursor-pointer  ",
      children: e.jsx(jt, {
        to: `/${a.internalName.toLocaleLowerCase()}/pool/${t.address}`,
        onClick: () => {
          r()
        },
        onMouseEnter: () => {
          n(!0)
        },
        onMouseLeave: () => {
          n(!1)
        },
        className: "w-full col-span-5",
        style: {
          backgroundColor: o ? i.hover_background : i.gray[900]
        },
        children: e.jsxs("div", {
          className: `grid ${xs} items-center text-right px-4 lg:px-5  lg:py-2 py-[6px]`,
          children: [e.jsx("div", {
            className: " items-center w-fit flex gap-1 flex-nowrap m-0 p-0 flex-row",
            children: e.jsx("div", {
              className: "flex flex-row gap-0 m-0 ",
              children: c && u ? e.jsx("div", {
                className: "flex gap-1",
                children: e.jsx(It, {
                  token0Address: t.t0,
                  token1Address: t.t1,
                  token0Symbol: be(t.t0, t.t0_symbol, a.id),
                  token1Symbol: be(t.t1, t.t1_symbol, a.id),
                  fee: t.fee
                })
              }) : e.jsx(yt, {})
            })
          }), e.jsx("span", {
            className: "col-span-1",
            children: e.jsx(C, {
              color: i.gray[100],
              children: e.jsx(k, {
                num: t.t1_change_usd,
                singleLetterNotation: !0
              })
            })
          }), e.jsx("span", {
            className: "hidden md:block",
            children: e.jsx(C, {
              color: i.gray[100],
              children: e.jsx(k, {
                num: t.t0_volume,
                singleLetterNotation: !0
              })
            })
          }), e.jsx("span", {
            className: "hidden lg:block",
            children: e.jsxs(C, {
              color: (t.t0_volume_change + t.t1_volume_change) / 2 < 0 ? i.red[400] : i.green[300],
              children: [(t.t0_volume_change + t.t1_volume_change) / 2 < 0 ? "" : "+", e.jsx(k, {
                num: (t.t0_volume_change + t.t1_volume_change) / 2,
                singleLetterNotation: !0
              }), "%"]
            })
          }), e.jsx("span", {
            className: "hidden md:block",
            children: e.jsxs(C, {
              color: i.gray[100],
              children: ["$", e.jsx(k, {
                num: t.tvl_usd,
                singleLetterNotation: !0
              })]
            })
          }), e.jsx("span", {
            className: "hidden lg:block",
            children: e.jsx(C, {
              color: i.gray[100],
              children: t.tx_count
            })
          })]
        })
      }, t.address)
    })
  },
  Wa = s => {
    const {
      searchQuery: t,
      onClose: r,
      setPoolResultExists: o
    } = s, [n, a] = l.useState(void 0), c = {
      fee_tiers: [],
      result_offset: 0,
      sort_by: ce.Volume7D,
      result_size: 20,
      sort_order: !1
    }, d = t.slice(-1) === " " || t.slice(-1) === "/" ? t.replaceAll(" ", "").replaceAll("/", "") : t.replaceAll("/", " "), {
      data: u,
      error: h
    } = Y("cush_search", [d, c]), [g, x] = l.useState(!0);
    l.useEffect(() => {
      x(!0)
    }, []), l.useEffect(() => {
      x(!0)
    }, [d]), l.useEffect(() => {
      x(!1)
    }, [u]);
    const [f, j] = l.useState(!1);
    l.useEffect(() => {
      j(!1)
    }, [t]), l.useEffect(() => {
      (h || u === void 0 && g === !1 || u && u.result_size === 0) && j(!0), h || u === void 0 && g === !1 || u && u.result_size === 0 ? o(!1) : o(!0), u && (u == null ? void 0 : u.result_size) > 0 && j(!1)
    }, [u, h, t]);
    const m = window.innerWidth < 1167 ? 32 : 36;
    return e.jsx(e.Fragment, {
      children: !f && e.jsxs("div", {
        className: "text-white",
        children: [e.jsxs("div", {
          className: "px-4 lg:px-5 pt-4 pb-5 lg:pt-5 lg:pb-6 flex flex-row justify-between ",
          children: [e.jsx("div", {
            className: " ",
            children: e.jsx(F, {
              weight: O.SEMIBOLD,
              color: i.gray[50],
              children: t === "" ? "Top Pools " : "Pools"
            })
          }), e.jsx(Ta, {
            setFee: a
          })]
        }), e.jsx(Va, {}), e.jsx("div", {
          className: " overflow-hidden no-scrollbar overflow-y-scroll flex flex-col flex-1 ",
          style: {
            height: u && u.result_size < 5 ? u.result_size * m : m * 4,
            minHeight: m
          },
          children: g ? e.jsx(hs, {}) : u !== void 0 && u.result_size !== 0 && (n !== void 0 ? u.pools.slice(0, 20).filter(_ => _.fee === n).map(_ => e.jsx(gr, {
            pool: _,
            onClose: r
          }, _.address)) : u.pools.slice(0, 20).map(_ => e.jsx(gr, {
            pool: _,
            onClose: r
          }, _.address)))
        })]
      })
    })
  },
  Ks = () => e.jsx("div", {
    className: " flex ",
    children: e.jsx("div", {
      className: "h-[2px] mt-4 lg:mt-5  w-full mx-4",
      style: {
        backgroundColor: i.gray[700]
      }
    })
  }),
  Ya = s => {
    const {
      positionId: t,
      onClose: r
    } = s, [o, n] = l.useState(!1), {
      currentChainInfo: a
    } = R();
    return e.jsx("div", {
      className: "flex relative gap-1 justify-between w-full  cursor-pointer ",
      children: t === "loading" ? e.jsx(_a, {
        lines: 2
      }) : e.jsx(jt, {
        to: `/${a.internalName.toLocaleLowerCase()}/position/${t.position.tokenId}`,
        onClick: () => {
          r()
        },
        onMouseEnter: () => {
          n(!0)
        },
        onMouseLeave: () => {
          n(!1)
        },
        className: "w-full col-span-5",
        style: {
          backgroundColor: o ? i.hover_background : i.gray[900]
        },
        children: e.jsxs("div", {
          className: "grid grid-cols-2 lg:grid-cols-6 items-center text-right px-4 lg:px-5   lg:py-2 py-[6px]",
          children: [e.jsx("span", {
            className: "col-span-1 text-left",
            children: e.jsx(It, {
              token0Address: t.position.position_pool_data.token0,
              token1Address: t.position.position_pool_data.token1,
              token0Symbol: be(t.position.position_pool_data.token0, t.position.position_pool_data.token0_symbol, a.id),
              token1Symbol: be(t.position.position_pool_data.token1, t.position.position_pool_data.token1_symbol, a.id),
              fee: t.position.position_pool_data.fee
            })
          }), e.jsx("div", {
            className: "hidden lg:block"
          }), e.jsx("div", {
            className: "flex gap-1 justify-end  lg:justify-end",
            children: e.jsx(C, {
              children: t == null ? void 0 : t.position.tokenId
            })
          }), e.jsx("span", {
            className: "hidden lg:block",
            children: e.jsx(C, {
              children: e.jsx(k, {
                num: t == null ? void 0 : t.position.position_price_range.lower_price,
                singleLetterNotation: !0
              })
            })
          }), e.jsx("span", {
            className: "hidden lg:block",
            children: e.jsx(C, {
              children: e.jsx(k, {
                num: t == null ? void 0 : t.position.position_price_range.upper_price,
                singleLetterNotation: !0
              })
            })
          }), e.jsx("span", {
            className: "hidden lg:block",
            children: e.jsxs(C, {
              children: ["$", e.jsx(k, {
                num: t == null ? void 0 : t.position.current_position_values.total_value_current_usd,
                singleLetterNotation: !0
              })]
            })
          })]
        })
      }, t.position.tokenId)
    })
  },
  Ga = s => {
    const {
      searchQuery: t,
      onClose: r,
      setPositionResultExists: o,
      showBottomLine: n
    } = s, [a, c] = l.useState(!0), [d, u] = l.useState(!1), {
      data: h,
      error: g
    } = Y("cush_analyticsPosition", [{
      token_id: parseInt(t)
    }]);
    return l.useEffect(() => {
      c(!0), u(!1)
    }, [t]), l.useEffect(() => {
      h && c(!1), h && o(!0), g && u(!0)
    }, [h, g]), l.useEffect(() => {
      d && o(!1)
    }, [d]), e.jsx(e.Fragment, {
      children: !d && e.jsxs("div", {
        children: [e.jsx("div", {
          className: "px-4 lg:px-5  pb-5 lg:pt-5 lg:pb-6",
          children: e.jsx(F, {
            weight: O.SEMIBOLD,
            color: i.gray[50],
            children: "Position"
          })
        }), e.jsx(za, {}), a ? e.jsx(hs, {}) : h && e.jsx(Ya, {
          positionId: h,
          onClose: r
        }), n && e.jsx(Ks, {})]
      })
    })
  },
  qa = ({
    tokenSymbol: s,
    tokenAddress: t,
    tokenName: r
  }) => {
    const {
      currentChainInfo: o
    } = R(), [n, a] = l.useState();
    return l.useEffect(() => {
      const c = ze(t, o.id);
      a(c)
    }, [s]), n ? e.jsxs("div", {
      className: "flex items-cente gap-2",
      children: [e.jsx("div", {
        className: "flex w-[20px]",
        children: e.jsx("img", {
          className: "rounded-full h-[20px] w-[20px] min-w-[20px] -mr-1",
          src: n,
          alt: s
        })
      }), e.jsxs("div", {
        className: "flex flex-row gap-1 items-center",
        children: [e.jsx("div", {
          className: "flex w-full nowrap",
          children: e.jsx(C, {
            color: i.gray[100],
            weight: O.MEDIUM,
            className: "flex whitespace-nowrap ",
            children: r.length > 15 ? r.slice(0, 10).concat("...") : r.slice(0, 15)
          })
        }), e.jsxs(C, {
          color: i.gray[100],
          weight: O.MEDIUM,
          className: "flex whitespace-nowrap ",
          children: ["(", s.length > 10 ? s.slice(0, 10).concat("...") : s, ")"]
        })]
      })]
    }) : e.jsx(yt, {})
  },
  Ka = s => {
    const {
      token: t,
      onClose: r
    } = s, [o, n] = l.useState(!1), {
      currentChainInfo: a
    } = R(), c = ze(t.contract, a.id);
    return e.jsx("div", {
      className: "flex relative gap-1 justify-between w-full  cursor-pointer ",
      children: e.jsx(jt, {
        to: `/${a.internalName.toLocaleLowerCase()}/token/${t.contract}`,
        onClick: () => {
          r()
        },
        onMouseEnter: () => {
          n(!0)
        },
        onMouseLeave: () => {
          n(!1)
        },
        className: "w-full col-span-5",
        style: {
          backgroundColor: o ? i.hover_background : i.gray[900]
        },
        children: e.jsxs("div", {
          className: `grid ${xs} items-center text-right px-4 lg:px-5  lg:py-2 py-[6px]`,
          children: [e.jsx("div", {
            className: " items-center w-fit flex gap-1 flex-nowrap m-0 p-0",
            children: e.jsx("div", {
              className: "flex flex-row gap-0 m-0 ",
              children: c ? e.jsx("div", {
                className: "flex gap-1",
                children: e.jsx(qa, {
                  tokenAddress: t.contract,
                  tokenSymbol: t.symbol,
                  tokenName: t.name
                })
              }) : e.jsx(yt, {})
            })
          }), e.jsx("span", {
            children: e.jsx(C, {
              color: i.gray[100],
              children: e.jsx(k, {
                num: t.price,
                singleLetterNotation: !0
              })
            })
          }), e.jsx("span", {
            className: "hidden md:block",
            children: e.jsx(C, {
              color: i.gray[100],
              children: e.jsx(k, {
                num: t.volume_24h,
                singleLetterNotation: !0
              })
            })
          }), e.jsx("span", {
            className: "hidden lg:block",
            children: e.jsxs(C, {
              color: t.change_24h < 0 ? i.red[400] : i.green[300],
              children: [t.change_24h < 0 ? "" : "+", e.jsx(k, {
                num: t.change_24h,
                singleLetterNotation: !0
              }), "%"]
            })
          }), e.jsx("span", {
            className: "hidden md:block",
            children: e.jsxs(C, {
              color: i.gray[100],
              children: ["$", e.jsx(k, {
                num: t.tvl,
                singleLetterNotation: !0
              })]
            })
          }), e.jsx("span", {
            className: "hidden lg:block",
            children: e.jsx(C, {
              color: i.gray[100],
              children: e.jsx(k, {
                num: t.tx_24h,
                singleLetterNotation: !0,
                smallNumberOn2Zeros: !0
              })
            })
          })]
        })
      }, t.contract)
    })
  },
  Qa = s => {
    const {
      searchQuery: t,
      onClose: r,
      setTokenResultExists: o,
      showBottomLine: n
    } = s, a = {
      fee_tiers: [],
      result_offset: 0,
      sort_by: ce.Volume7D,
      result_size: 20,
      sort_order: !1
    }, {
      data: c
    } = Y("cush_searchToken", [t, a]), [d, u] = l.useState(!1);
    l.useEffect(() => {
      u(!0)
    }, []), l.useEffect(() => {
      u(!0)
    }, [t]), l.useEffect(() => {
      u(!1)
    }, [c]), l.useEffect(() => {
      c !== void 0 && c.result_size !== 0 ? o(!0) : o(!1)
    }, [c]);
    const h = window.innerWidth < 1167 ? 32 : 36;
    return e.jsx(e.Fragment, {
      children: c !== void 0 && c.result_size !== 0 && e.jsxs("div", {
        className: "text-white",
        children: [e.jsx("div", {
          className: "px-4 lg:px-5  pb-5 pt-4 lg:pt-5 lg:pb-6",
          children: e.jsx(F, {
            weight: O.SEMIBOLD,
            color: i.gray[50],
            children: t === "" ? "Top Tokens " : "Tokens"
          })
        }), e.jsx(Ha, {}), e.jsx("div", {
          className: " overflow-hidden no-scrollbar overflow-y-scroll flex flex-col flex-1 ",
          style: {
            height: c && c.result_size < 5 ? c.result_size * h : h * 4,
            minHeight: h
          },
          children: d ? e.jsx(hs, {}) : c !== void 0 && c.result_size !== 0 ? c.results.slice(0, 20).map(g => e.jsx(Ka, {
            token: g,
            onClose: r
          }, g.contract)) : e.jsx("div", {
            className: "w-full px-3 py-4",
            children: e.jsx(F, {
              children: "No Matches Found"
            })
          })
        }), n && e.jsx(Ks, {})]
      })
    })
  },
  nt = s => s.slice(0, 6).concat("..".concat(s.slice(-4))),
  xo = s => s.length > 14 ? s.slice(0, 6).concat("..".concat(s.slice(-8))) : s,
  Za = s => {
    const {
      address: t,
      onClose: r,
      isEns: o,
      ens: n = void 0
    } = s, [a, c] = l.useState(!1), {
      currentChainInfo: d
    } = R(), u = J({
      base: 0,
      sm: 1,
      md: 2
    });
    return e.jsx("div", {
      className: "flex relative gap-1 justify-between w-full  cursor-pointer ",
      children: e.jsx(jt, {
        to: `/${d.internalName.toLocaleLowerCase()}/user/${t}`,
        onClick: () => {
          r()
        },
        onMouseEnter: () => {
          c(!0)
        },
        onMouseLeave: () => {
          c(!1)
        },
        className: "w-full col-span-5",
        style: {
          backgroundColor: a ? i.hover_background : i.gray[900]
        },
        children: e.jsxs("div", {
          className: `flex ${o?"flex-row-reverse":"flex-row"} justify-between s items-center text-left px-4 lg:px-5  lg:py-2 py-[6px]`,
          children: [e.jsx("span", {
            className: "row-span-1",
            children: e.jsx(C, {
              color: i.gray[100],
              weight: o ? O.REGULAR : O.MEDIUM,
              children: u > 0 ? t : nt(t)
            })
          }), n && e.jsx("span", {
            className: "row-span-2",
            children: e.jsx(C, {
              weight: o ? O.SEMIBOLD : O.REGULAR,
              color: i.gray[100],
              children: u > 0 && n.length < 50 ? n : xo(n)
            })
          })]
        })
      }, t)
    })
  };

function Ja(s) {
  const {
    searchQuery: t,
    onClose: r,
    showUser: o,
    setUserResultExists: n
  } = s, [a, c] = l.useState(""), [d, u] = l.useState(void 0), [h, g] = l.useState(void 0), [x, f] = l.useState(!0), [j, m] = l.useState(void 0);
  return l.useEffect(() => {
    f(!0), g(void 0), u(void 0)
  }, []), l.useEffect(() => {
    f(!0), c("")
  }, [t]), l.useEffect(() => {
    x && on(Et, {
      chainId: 1,
      name: t
    }).then(_ => {
      _ && m(t), _ && u(!0), _ && c(_), _ && g(!0)
    }).catch(() => {
      m(void 0), u(!1), g(!1), c(void 0)
    })
  }, [t, x]), l.useEffect(() => {
    d === !1 && (kt(t) ? (u(void 0), c(t), g(!1), m(void 0)) : (m(void 0), u(void 0), c(void 0)))
  }, [d]), l.useEffect(() => {
    Ws(Et, {
      chainId: 1,
      address: a
    }).then(_ => {
      _ && g(!0), _ && m(_), f(!1)
    }).catch(() => {
      f(!1), g(!1)
    })
  }, [a]), l.useEffect(() => {
    o && a != null && (kt(t) || t.includes(".eth") && d) ? n(!0) : n(!1)
  }, [o, a, t, d]), e.jsx(e.Fragment, {
    children: o && a != null && (kt(t) || t.includes(".eth") && d) && e.jsxs(e.Fragment, {
      children: [e.jsxs("div", {
        className: "text-white",
        children: [e.jsx("div", {
          className: "px-4 lg:px-5  pb-5 lg:pt-5 lg:pb-6",
          children: e.jsx(F, {
            weight: O.SEMIBOLD,
            color: i.gray[50],
            children: "User"
          })
        }), e.jsx(Ba, {
          hasEns: h,
          isEns: d
        }), a === void 0 ? e.jsx(hs, {}) : e.jsx("div", {
          className: " overflow-hidden no-scrollbar overflow-y-scroll flex flex-col flex-1 ",
          children: e.jsx(Za, {
            address: a,
            onClose: r,
            isEns: d,
            ens: j
          })
        })]
      }), a === "" && e.jsx(Ks, {})]
    })
  })
}
const Xa = s => {
    const {
      onClose: t,
      val: r
    } = s, [o, n] = l.useState(!0), [a, c] = l.useState(!0), [d, u] = l.useState(!0), [h, g] = l.useState(!0), [x, f] = l.useState(!0);
    l.useEffect(() => {
      j(r) ? f(!0) : f(!1), r.includes("/") ? c(!1) : c(!0)
    }, [r]), l.useEffect(() => {
      n(!0), c(!1)
    }, [r]), l.useEffect(() => {
      n(!(d || a))
    }, [d, a]);
    const j = m => /^[0-9]*$/.test(m) && m !== "";
    return e.jsxs("div", {
      style: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
      },
      className: " bg-gray-900 border-[1px] border-gray-600 pt-2 lg:pt-0  h-fit w-full pb-4 lg:pb-5 text-white flex flex-col animate-slide-down drop-shadow-xl z-[400] ",
      children: [j(r) && e.jsx(Ga, {
        searchQuery: r,
        setPositionResultExists: f,
        showBottomLine: a,
        onClose: () => {
          t()
        }
      }), e.jsx(Ja, {
        showUser: o,
        searchQuery: r,
        setUserResultExists: g,
        onClose: () => {
          t()
        }
      }), (j(r) || kt(r) || r === "" || r && !r.includes("/")) && e.jsx(Qa, {
        searchQuery: r,
        setTokenResultExists: c,
        showBottomLine: d,
        onClose: () => {
          t()
        }
      }), (j(r) || kt(r) || r === "" || r) && e.jsx(Wa, {
        searchQuery: r,
        setPoolResultExists: u,
        onClose: () => {
          t()
        }
      }), !a && !d && !x && !h && e.jsx("div", {
        className: "w-fit px-4 pt-3",
        children: e.jsx(X, {
          color: i.gray[500],
          children: "No matches found"
        })
      })]
    })
  },
  fo = ({
    value: s,
    delay: t = 250
  }) => {
    const [r, o] = l.useState(s);
    return l.useEffect(() => {
      const n = setTimeout(() => {
        o(s)
      }, t);
      return () => {
        clearTimeout(n)
      }
    }, [s, t]), r
  };

function go(s, t = 250) {
  const [r, o] = l.useState(s), n = fo({
    value: r,
    delay: t
  });
  return t === 0 ? [r, o] : [n, o]
}
const el = ({
    onInputChange: s,
    reset: t,
    ...r
  }) => {
    const [o, n] = l.useState(""), a = fo({
      value: o,
      delay: 500
    });
    return l.useEffect(() => {
      s(a)
    }, [a]), l.useEffect(() => {
      t && n("")
    }, [t]), e.jsx("input", {
      value: o,
      ...r,
      onChange: c => n(c.target.value),
      spellCheck: !1
    })
  },
  tl = ({
    setShowModal: s,
    showModal: t,
    setVal: r
  }) => {
    const [a, c] = l.useState(!1), [d, u] = l.useState(!1), [h, {
      width: g
    }] = Yr();
    return e.jsxs("div", {
      className: "w-full relative items-center flex ",
      ref: h,
      children: [e.jsxs("button", {
        onClick: () => s(!0),
        className: "w-full outline-none",
        style: {
          zIndex: t ? 160 : 0
        },
        children: [e.jsx("div", {
          className: "absolute left-4 z-[180]  top-3.5",
          children: e.jsx(nn, {
            width: 14,
            color: a ? i.blue[400] : i.gray[500]
          })
        }), e.jsx(el, {
          onMouseEnter: () => {
            u(!0)
          },
          onMouseLeave: () => {
            u(!1)
          },
          placeholder: g < 400 ? "" : "Search tokens, pools, positions, or users",
          className: "placeholder:text-gray-400 focus:outline-0 placeholder:text-[16px] placeholder:font-[400]  border-[1px] text-white  outline-none ",
          style: {
            borderBottomLeftRadius: t ? 0 : 48,
            borderBottomRightRadius: t ? 0 : 48,
            borderTopLeftRadius: t ? 20 : 48,
            borderTopRightRadius: t ? 20 : 48,
            width: "100%",
            height: 40,
            backgroundColor: i.gray[900],
            borderColor: d || a ? i.blue[400] : i.gray[600],
            paddingLeft: 42,
            marginTop: 0,
            backgroundSize: "12px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10px center"
          },
          onFocus: () => {
            c(!0)
          },
          onBlur: () => {
            c(!1)
          },
          onInputChange: x => {
            r(x.trim())
          },
          reset: !t
        })]
      }), t && e.jsx("button", {
        className: "absolute right-4 z-[180] ",
        onClick: () => {
          s(!1)
        },
        children: e.jsx(Br, {
          width: 19,
          color: i.gray[400]
        })
      })]
    })
  };
var mr;
(function (s) {
  s.loading = "loading"
})(mr || (mr = {}));

function sl() {
  const [s, t] = l.useState(!1), [r, o] = l.useState("");
  return e.jsx("div", {
    className: "h-full z-[10] flex flex-col items-center justify-center  w-full",
    children: e.jsxs("div", {
      className: "w-full flex h-full flex-col relative",
      children: [s && e.jsx(Lt, {
        showOverlay: s,
        onClose: () => t(!1)
      }), e.jsx(tl, {
        setShowModal: t,
        setVal: o,
        val: r,
        showModal: s
      }), s && e.jsxs("div", {
        className: "absolute top-10 w-full z-20",
        children: [" ", e.jsx(Xa, {
          onClose: () => t(!1),
          val: r
        })]
      })]
    })
  })
}

function Os(s) {
  const {
    inExpandedMenu: t
  } = s, [r, o] = l.useState(!1), {
    isMobile: n
  } = de(), a = n ? 18 : 24;
  return e.jsx(pe, {
    to: "../ethereum/overview",
    relative: "route",
    children: e.jsxs("div", {
      onMouseEnter: () => {
        o(!0)
      },
      onMouseLeave: () => {
        o(!1)
      },
      className: "relative flex",
      style: {
        width: a,
        height: a,
        borderRadius: a
      },
      children: [e.jsx("img", {
        className: `${t?"":"absolute"}`,
        alt: "Home Icon",
        style: {
          width: a,
          height: a,
          borderRadius: a
        },
        src: "/image/logo.png"
      }), r && e.jsx("div", {
        className: `${t?"":"absolute"} h-[32px] w-[32px] rounded-[32px] top-[-6px] left-[-6px] md:top-[-5px] md:left-[-5px]`,
        style: {
          backgroundColor: i.hover,
          opacity: oo.hover
        }
      })]
    })
  })
}
const ss = ({
    text: s,
    extraStyle: t
  }) => e.jsx("div", {
    className: `absolute  top-[-40px] bg-gray-800 border-[1px] rounded-[8px] border-gray-700 p-2 w-fit flex-nowrap min-w-[100px] ${t||""}`,
    children: e.jsx(Fe, {
      children: s
    })
  }),
  $s = [{
    link: "overview",
    icon: {
      icon: e.jsx(z, {
        style: {
          color: i.gray[400],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/chartBarSquareIcon.svg"
      })
    },
    header: {
      name: "Overview"
    },
    subHeader: [{
      name: "Top Tokens",
      section: "overview_top_tokens"
    }, {
      name: "Recent Positions",
      section: "overview_recent_positions"
    }, {
      name: "Top Pools",
      section: "overview_top_pools"
    }, {
      name: "Top Users",
      section: "overview_whale_watch"
    }]
  }, {
    link: "pools",
    icon: {
      icon: e.jsx(z, {
        style: {
          color: i.gray[400],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/curveIcon.svg"
      })
    },
    header: {
      name: "Pools"
    },
    subHeader: []
  }, {
    link: "tokens",
    icon: {
      icon: e.jsx(z, {
        style: {
          color: i.gray[400],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/currencyDollarIcon.svg"
      })
    },
    header: {
      name: "Tokens"
    },
    subHeader: []
  }, {
    link: "positions",
    icon: {
      icon: e.jsx(z, {
        style: {
          color: i.gray[400],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/mapIcon.svg"
      })
    },
    header: {
      name: "Positions"
    },
    subHeader: []
  }];

function rl() {
  const {
    isMenuCollapsed: s,
    setIsMenuCollapsed: t
  } = Pe(), {
    currentChainInfo: r
  } = R(), o = () => {
    t(!s)
  }, n = () => e.jsxs("div", {
    className: "w-[66px] bg-gray-900 duration-[500ms]",
    children: [e.jsx("div", {
      className: "border-b-2 border-b-gray-700 w-[65px] items-center justify-center flex  h-[68px]",
      children: e.jsx(Os, {})
    }), e.jsx("div", {
      className: "flex flex-col mt-12 px-2 items-start justify-start",
      children: e.jsxs("div", {
        className: "flex flex-col gap-2 items-center",
        children: [e.jsx(ol, {
          onClick: o,
          children: e.jsx(z, {
            style: {
              color: i.gray[400],
              strokeWidth: 1.5
            },
            src: "https://assets.oku.trade/chevronRightIcon.svg"
          })
        }), e.jsx("nav", {
          id: "icon_sidebar",
          children: $s.map((c, d) => e.jsx(jo, {
            to: `/${r.internalName}/${c.link}`,
            title: c.header.name,
            children: c.icon.icon
          }, d))
        })]
      })
    })]
  }), a = () => e.jsxs("div", {
    className: "w-[305px] bg-gray-900 duration-[500ms] ",
    children: [e.jsxs("div", {
      className: "flex flex-1 justify-end border-b-2 border-gray-700 relative ",
      children: [e.jsx("div", {
        className: " w-[66px] h-full flex items-center justify-center border-r-2 border-gray-700 absolute left-0  ",
        children: e.jsx(Os, {
          inExpandedMenu: !0
        })
      }), e.jsx("div", {
        className: " h-[66px] px-4 w-full flex justify-end items-center ",
        children: e.jsx(al, {
          onClick: o
        })
      })]
    }), e.jsx("div", {
      className: "border-r-2 border-gray-700 h-6 w-[66px] "
    }), e.jsx("div", {
      className: "flex flex-col w-full  duration-[5s] ",
      children: $s.map((c, d) => e.jsx(nl, {
        data: c
      }, `k-${d}`))
    }), e.jsx("div", {
      className: "border-r-2 border-gray-700 h-full w-[66px] d"
    })]
  });
  return e.jsx("div", {
    className: "flex flex-1 h-screen",
    children: s ? n() : a()
  })
}
const mo = s => {
    const {
      name: t,
      link: r,
      focus: o,
      icon: n = void 0,
      closeOnClick: a
    } = s, [c, d] = l.useState(!1), {
      setIsMenuCollapsed: u
    } = Pe();
    return e.jsxs(pe, {
      relative: "route",
      to: r,
      className: "px-4 lg:py-4 mb-2  lg:mx-0 rounded-lg lg:rounded-l-[0px] w-full flex  justify-between items-center",
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      style: {
        backgroundColor: o || c ? i.gray[600] : ""
      },
      onClick: () => {
        u(a)
      },
      children: [e.jsx(C, {
        children: t
      }), n && e.jsx("div", {
        className: "h-[44px] w-[44px] flex items-center justify-center rounded-lg",
        style: {
          stroke: c || o ? "white" : i.gray[400]
        },
        children: n
      })]
    })
  },
  po = s => {
    const {
      name: t,
      link: r
    } = s, [o, n] = l.useState(!1), {
      setIsMenuCollapsed: a
    } = Pe();
    return e.jsx(jt, {
      to: r,
      relative: "route",
      onMouseEnter: () => {
        n(!0)
      },
      onMouseLeave: () => {
        n(!1)
      },
      className: "pl-4 py-2",
      onClick: () => {
        a(!0)
      },
      children: e.jsx(C, {
        color: o ? Se(i.gray[400]) : i.gray[400],
        weight: O.REGULAR,
        children: t
      })
    })
  },
  jo = s => {
    const [t, r] = l.useState(!1), {
      children: o,
      to: n,
      focus: a = !1,
      title: c
    } = s, {
      isMenuCollapsed: d
    } = Pe();
    return e.jsxs("div", {
      className: "relative",
      children: [e.jsx(jt, {
        relative: "route",
        to: n,
        className: "h-[44px] w-[44px] flex items-center justify-center rounded-lg relative ",
        style: ({
          isActive: u
        }) => ({
          backgroundColor: a || u || t ? i.gray[750] : "",
          stroke: a || u || t ? i.gray[200] : i.gray[400]
        }),
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1),
        children: o
      }), d && t && c && e.jsx(ss, {
        text: c,
        extraStyle: "left-12 top-2 z-50"
      })]
    })
  },
  ol = s => {
    const [t, r] = l.useState(!1), {
      children: o,
      onClick: n,
      focus: a = !1
    } = s;
    return e.jsx("button", {
      onClick: n,
      className: "w-9 h-9 flex items-center justify-center rounded-full ",
      style: {
        backgroundColor: a || t ? i.gray[750] : "",
        stroke: a || t ? "white" : i.gray[400]
      },
      onMouseEnter: () => r(!0),
      onMouseLeave: () => r(!1),
      children: o
    })
  },
  nl = s => {
    const {
      data: t
    } = s, o = !!Gr(`/:chain/${t.header.name.toLowerCase()}`), {
      currentChainInfo: n
    } = R();
    return e.jsxs("div", {
      className: "flex flex-1 relative bg-gray-900   justify-end  ",
      children: [e.jsx("div", {
        className: " absolute left-0 flex items-start justify-center  h-full  bg-gray-900  border-r-[2px] border-gray-700 w-[66px]",
        children: e.jsx(jo, {
          to: `/${n.internalName}/${t.link}`,
          focus: o,
          children: t.icon.icon
        })
      }), e.jsxs("div", {
        className: " pr-4 w-full flex flex-col items-start pl-[66px] min-w-[239px]  ",
        children: [e.jsx(mo, {
          name: t.header.name,
          link: `/${n.internalName}/${t.link}`,
          focus: o,
          closeOnClick: t.subHeader.length === 0
        }), o && e.jsx("div", {
          className: "flex flex-col items-start",
          children: t.subHeader.map((a, c) => e.jsx(po, {
            name: a.name,
            link: `#${a.section}`,
            section: a.section
          }, c))
        })]
      })]
    })
  },
  al = s => {
    const {
      onClick: t
    } = s, [r, o] = l.useState(!1);
    return e.jsx("button", {
      onClick: t,
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: e.jsx(z, {
        style: {
          color: r ? "white" : i.gray[400],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/chevronLeftIcon.svg"
      })
    })
  };

function ll(s) {
  const {
    onClick: t
  } = s;
  return e.jsx("button", {
    className: "flex items-center",
    onClick: t,
    children: e.jsx(z, {
      style: {
        color: i.gray[400]
      },
      src: "https://assets.oku.trade/bars3MenuIcon.svg"
    })
  })
}

function il() {
  const {
    setIsMenuCollapsed: s
  } = Pe();
  return e.jsxs("div", {
    className: "flex justify-between bg-gray-900 px-3 py-2 items-center",
    children: [e.jsx(Os, {
      inExpandedMenu: !0
    }), e.jsxs("div", {
      className: "mr-0 flex flex-row gap-2 items-center",
      children: [e.jsx(ho, {}), e.jsx(co, {}), e.jsx(ll, {
        onClick: () => {
          s(!1)
        }
      })]
    })]
  })
}

function cl() {
  const {
    isMenuCollapsed: s,
    setIsMenuCollapsed: t
  } = Pe();
  return e.jsxs("div", {
    className: " ",
    children: [e.jsx("div", {
      className: `fixed right-0  min-h-screen z-[40] w-[235px] bg-gray-900 transition-[right] duration-300 ease-in overflow-hidden border-[1px] border-gray-700  ${s?"right-[-235px]":"right-[0px]"}`,
      children: e.jsxs("div", {
        className: "flex flex-col w-full",
        children: [e.jsxs("div", {
          className: "flex  flex-col justify-between p-6 gap-4",
          children: [e.jsx(ul, {
            onClick: () => {
              t(!0)
            }
          }), e.jsx(uo, {}), e.jsx("div", {
            className: "w-full h-[1px] bg-gray-700"
          })]
        }), $s.map((r, o) => e.jsx(dl, {
          data: r
        }, o))]
      })
    }), !s && e.jsx(Lt, {
      onClose: () => t(!0),
      showOverlay: !s
    })]
  })
}
const dl = s => {
    const {
      data: t
    } = s, o = !!Gr(`/:chain/${t.header.name.toLowerCase()}`), {
      currentChainInfo: n
    } = R();
    return e.jsx("div", {
      className: "flex flex-1 relative bg-gray-900  justify-end",
      children: e.jsxs("div", {
        className: "  w-full flex flex-col items-start mx-4",
        children: [e.jsx(mo, {
          name: t.header.name,
          link: `/${n.internalName}/${t.link}`,
          focus: o,
          icon: t.icon.icon,
          closeOnClick: t.subHeader.length === 0
        }), o && e.jsx("div", {
          className: "flex flex-col items-start",
          children: t.subHeader.map((a, c) => e.jsx(po, {
            name: a.name,
            link: `#${a.section}`,
            section: a.section
          }, c))
        })]
      })
    })
  },
  ul = ({
    onClick: s
  }) => {
    const [t, r] = l.useState(!1);
    return e.jsx("button", {
      onMouseEnter: () => {
        r(!0)
      },
      onMouseLeave: () => {
        r(!1)
      },
      onClick: s,
      children: e.jsx(an, {
        fill: t ? Se(i.white) : i.white,
        width: 16
      })
    })
  };

function hl(s) {
  const {
    children: t
  } = s;
  return e.jsx("div", {
    className: "bg-black",
    children: e.jsx("div", {
      className: "flex h-screen",
      children: e.jsxs("div", {
        className: "flex flex-1 overflow-hidden ",
        children: [e.jsx("div", {
          className: "hidden lg:block",
          children: e.jsx(rl, {})
        }), e.jsx("div", {
          className: "block lg:hidden ",
          children: e.jsx(cl, {})
        }), e.jsxs("div", {
          className: "flex flex-1 flex-col overflow-y-auto no-scrollbar min-h-screen ",
          children: [e.jsxs("div", {
            id: "start",
            children: [e.jsx("div", {
              className: "block lg:hidden",
              children: e.jsx(il, {})
            }), e.jsx("div", {
              className: "hidden lg:block",
              children: e.jsx(Ca, {})
            }), e.jsx("div", {
              className: "m-5 mb-2",
              children: e.jsx(sl, {})
            })]
          }), e.jsx("div", {
            className: "h-full pt-0 md:pt-0 p-2 md:p-5 ",
            children: t
          })]
        })]
      })
    })
  })
}

function xl({
  children: s
}) {
  return e.jsx(hl, {
    children: e.jsxs("div", {
      className: "flex flex-col justify-between h-full",
      children: [e.jsxs("div", {
        children: [e.jsx(fa, {}), e.jsx("div", {
          children: s
        })]
      }), e.jsx(ha, {})]
    })
  })
}
const Pt = 8,
  gt = 20,
  bt = 399,
  wt = 412,
  fs = 351,
  mt = 393,
  Mt = 305,
  Ie = 66,
  ae = 1,
  Re = 8,
  Ct = 12,
  At = 16,
  Ot = 12,
  _t = 16;
var xe;
(function (s) {
  s.MINUTE_5 = "5m", s.HOUR_1 = "1h", s.DAY_1 = "1d", s.DAY_7 = "7d", s.DAY_14 = "14d", s.DAY_30 = "30d", s.YEAR_1 = "1y"
})(xe || (xe = {}));
var We;
(function (s) {
  s.INDV_POOL_PAGE = "pool", s.OVERVIEW_PAGE = "overview", s.INDV_POS_PAGE = "position", s.INDV_TOK_PAGE = "token"
})(We || (We = {}));

function pr(s) {
  const {
    token: t,
    setTokenSelected: r,
    token0Address: o,
    token0Symbol: n,
    token1Address: a,
    token1Symbol: c,
    isLogo: d = !1
  } = s, {
    currentChainInfo: u
  } = R(), {
    isMobile: h
  } = de();
  return d ? e.jsxs("div", {
    className: "min-w-[75px] h-[32px] rounded-full border-[1px] text-[14px] font-normal items-center relative",
    style: {
      backgroundColor: i.gray[900],
      borderColor: i.gray[800]
    },
    children: [t !== void 0 && e.jsx(jr, {
      token: t,
      isLogo: !0
    }), e.jsxs("div", {
      className: "flex flex-row flex-1 rounded-[5px] w-full h-full absolute ",
      children: [e.jsx(Gt, {
        color: t.selected === 0 ? i.gray[100] : i.gray[500],
        weight: t.selected === 0 ? O.MEDIUM : O.REGULAR,
        onClick: () => {
          r(0)
        },
        children: e.jsx(e.Fragment, {
          children: e.jsx("img", {
            className: "rounded-full h-[16px]",
            src: ze(o, u.id),
            alt: be(o, n, u.id)
          })
        })
      }), e.jsx(Gt, {
        color: t.selected === 1 ? i.gray[100] : i.gray[500],
        weight: t.selected === 1 ? O.MEDIUM : O.REGULAR,
        onClick: () => {
          r(1)
        },
        children: e.jsx("img", {
          className: "rounded-full h-[16px]",
          src: ze(a, u.id),
          alt: be(a, c, u.id)
        })
      })]
    })]
  }) : e.jsxs("div", {
    className: "min-w-[120px]  w-fit  min-h-[25px] rounded-[5px] border-[1px] text-[14px] font-normal items-center relative z-[12]",
    style: {
      backgroundColor: i.gray[900],
      borderColor: i.gray[800],
      height: h ? 25 : 28
    },
    children: [t !== void 0 && e.jsx(jr, {
      token: t
    }), e.jsxs("div", {
      className: "flex flex-row flex-1 rounded-[5px] w-full h-full absolute ",
      children: [e.jsx(Gt, {
        color: t.selected === 0 ? i.gray[100] : i.gray[500],
        weight: t.selected === 0 ? O.MEDIUM : O.REGULAR,
        onClick: () => {
          t.selected !== 0 && r(0)
        },
        children: be(o, n, u.id)
      }), e.jsx(Gt, {
        color: t.selected === 1 ? i.gray[100] : i.gray[500],
        weight: t.selected === 1 ? O.MEDIUM : O.REGULAR,
        onClick: () => {
          t.selected !== 1 && r(1), r(1)
        },
        children: be(a, c, u.id)
      })]
    })]
  })
}
const Gt = s => {
    const {
      onClick: t,
      color: r,
      children: o,
      weight: n
    } = s, [a, c] = l.useState(!1);
    return e.jsxs("button", {
      onMouseEnter: () => {
        c(!0)
      },
      onMouseLeave: () => {
        c(!1)
      },
      onClick: t,
      className: "flex flex-1 justify-center items-center rounded-[5px] ",
      children: [" ", typeof o == "string" ? e.jsx(X, {
        weight: n,
        color: a ? Se(r) : r,
        children: o
      }) : o]
    })
  },
  jr = s => {
    const {
      token: t
    } = s;
    return e.jsx("div", {
      className: " h-full absolute py-1 w-full  px-1 flex ",
      children: e.jsx("div", {
        style: {
          backgroundColor: i.gray[600]
        },
        className: `h-full w-[50%] rounded-[5px] transform transition-all duration-300  ${t.selected===1?"transform translate-x-[100%]":""}`
      })
    })
  },
  vo = 28,
  fl = 887272,
  vr = -887272,
  Ns = s => {
    const {
      timeIncrement: t,
      setTimeIncrement: r,
      maxFeeLength: o,
      chart: n
    } = s, [a, c] = l.useState(!1), {
      isMobile: d
    } = de();
    return e.jsxs("div", {
      className: " relative z-[12]",
      children: [e.jsx("button", {
        style: {
          backgroundColor: i.gray[900],
          borderWidth: "1px",
          borderColor: i.gray[700],
          width: 56,
          paddingLeft: 8,
          paddingRight: 8,
          height: d ? 24 : 27,
          borderRadius: 6
        },
        onClick: () => {
          c(!0)
        },
        children: e.jsxs("div", {
          className: "flex flex-row justify-between",
          children: [e.jsx(C, {
            color: i.gray[200],
            children: t
          }), e.jsx(zs, {
            width: 12,
            color: "white"
          })]
        })
      }), a && e.jsx(Lt, {
        showOverlay: !0,
        onClose: () => {
          c(!1)
        }
      }), a && e.jsx(gl, {
        setTimeIncrement: r,
        setShowModal: c,
        maxFeeLength: o,
        chart: n
      })]
    })
  },
  gl = s => {
    const {
      setTimeIncrement: t,
      setShowModal: r,
      maxFeeLength: o,
      chart: n
    } = s;
    return e.jsxs("div", {
      className: "flex flex-col border-[0.4px] rounded-[6px] min-w-[56px] mt-1 h-fit py-1 absolute z-[20]",
      style: {
        backgroundColor: i.gray[900],
        borderColor: i.gray[700]
      },
      children: [(o === void 0 || o > 2) && n === L.PRICE && e.jsx(ct, {
        onClick: () => {
          t(te.MINUTE_5), r(!1)
        },
        title: te.MINUTE_5
      }), (o === void 0 || o > 2) && (n === L.PRICE || n === L.FEES) && e.jsx(ct, {
        onClick: () => {
          t(te.HOUR_1), r(!1)
        },
        title: te.HOUR_1
      }), (o === void 0 || o > 24 * 2) && e.jsx(ct, {
        onClick: () => {
          t(te.DAY_1), r(!1)
        },
        title: te.DAY_1
      }), (o === void 0 || o > 24 * 7 * 2) && e.jsx(ct, {
        onClick: () => {
          t(te.DAY_7), r(!1)
        },
        title: te.DAY_7
      }), (o === void 0 || o > 24 * 14 * 2) && n !== L.PRICE && e.jsx(ct, {
        onClick: () => {
          t(te.DAY_14), r(!1)
        },
        title: te.DAY_14
      }), (o === void 0 || o > 24 * 30 * 2) && e.jsx(ct, {
        onClick: () => {
          t(te.DAY_30), r(!1)
        },
        title: te.DAY_30
      })]
    })
  },
  ct = s => {
    const {
      onClick: t,
      title: r
    } = s, [o, n] = l.useState(!1);
    return e.jsx("button", {
      onClick: t,
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      className: "flex justify-start w-full px-3 py-[6px]",
      style: {
        backgroundColor: o ? Se(i.gray[900]) : i.gray[900]
      },
      children: e.jsx(X, {
        children: r
      })
    })
  },
  rs = s => {
    const t = new Date(s),
      r = t.getSeconds().toString() === "0" ? "00" : t.getSeconds() < 10 ? "0" + t.getSeconds().toString() : t.getSeconds().toString(),
      o = t.getMinutes().toString() === "0" ? "00" : t.getMinutes() < 10 ? "0" + t.getMinutes().toString() : t.getMinutes().toString(),
      n = t.getHours().toString() === "0" ? "00" : t.getHours() < 10 ? "0" + t.getHours().toString() : t.getHours().toString(),
      a = t.getDate() < 10 ? "0" + t.getDate().toString() : t.getDate().toString(),
      c = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1).toString() : (t.getMonth() + 1).toString(),
      d = t.getFullYear().toString();
    return {
      second: r,
      minute: o,
      hour: n,
      day: a,
      month: c,
      year: d
    }
  },
  gs = s => {
    const t = new Date(s),
      r = t.getDate() < 10 ? "0" + t.getDate().toString() : t.getDate().toString(),
      o = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1).toString() : (t.getMonth() + 1).toString(),
      n = t.getFullYear().toString();
    return o + "/" + r + "/" + n
  },
  ml = s => {
    const r = Date.now() - s,
      o = Math.floor(r / 1e3),
      n = Math.floor(o / 60),
      a = Math.floor(n / 60),
      c = Math.floor(a / 24),
      d = Math.floor(c / 30),
      u = Math.floor(c / 365);
    return u > 0 ? u == 1 ? `${u} year` : `${u} years` : d > 0 ? d == 1 ? `${d} month` : `${d} months` : c > 0 ? c == 1 ? `${c} day` : `${c} days` : a > 0 ? a == 1 ? `${a} hour` : `${a} hours` : n > 0 ? n == 1 ? `${n} minute` : `${n} minutes` : o > 0 ? o == 1 ? `${o} second` : `${o} seconds` : o == 1 ? `${o} second` : `${o} seconds`
  },
  he = s => {
    switch (s) {
      case xe.MINUTE_5:
        return 6e4 * 5;
      case xe.HOUR_1:
        return 6e4 * 60 * 1;
      case xe.DAY_1:
        return 6e4 * 60 * 24 * 1;
      case xe.DAY_7:
        return 6e4 * 60 * 24 * 7;
      case xe.DAY_14:
        return 6e4 * 60 * 24 * 14;
      case xe.DAY_30:
        return 6e4 * 60 * 24 * 30;
      case xe.YEAR_1:
        return 6e4 * 60 * 24 * 365;
      default:
        return 6e4
    }
  },
  pl = s => s.map(r => ({
    time: r.time,
    close: 1 / r.close,
    high: 1 / r.low,
    low: 1 / r.high,
    open: 1 / r.open,
    volume_base: r.volume_base,
    volume_quote: r.volume_quote
  })),
  Fs = s => {
    switch (s) {
      case L.TOKEN_COUNT:
        return "TVL";
      case L.VOLUME:
        return "Volume";
      case L.TVL:
        return "TVL";
      case L.PRICE:
        return "Price";
      case L.FEES:
        return "Fees";
      case L.ACTIVITY:
        return "Activity";
      case L.LIQUIDITY:
        return "Liquidity";
      default:
        return []
    }
  },
  jl = s => {
    switch (s) {
      case L.TOKEN_COUNT:
        return [i.purple[100], i.turquoise[100], i.green[400]];
      case L.VOLUME:
        return [i.blue[400]];
      case L.TVL:
        return [i.green[400]];
      case L.PRICE:
        return [i.green[400]];
      case L.FEES:
        return [i.green[400]];
      default:
        return []
    }
  },
  yr = (s, t) => Math.log(t) / Math.log(s),
  fe = (s, t) => {
    const r = t.decimals,
      o = 1.0001 ** s / 10 ** r;
    return t.selected === 1 ? o : 1 / o
  },
  os = (s, t) => {
    const r = t.decimals,
      o = t.selected === 1 ? yr(1.0001, s * 10 ** r) : yr(1.0001, 1 / s * 10 ** r);
    return Math.round(o)
  },
  vl = s => {
    const {
      chart: t,
      hoveredTick: r,
      token: o,
      poolSummary: n,
      range: a = void 0,
      positionCreatedDate: c
    } = s, d = c && t === L.LIQUIDITY ? rs(c) : rs(Date.now()), {
      isMobile: u
    } = de();
    return e.jsx("div", {
      className: "flex flex-col h-[48px ]  z-10 relative",
      children: e.jsxs("div", {
        className: "absolute  md:min-w-[200px]  w-fit  flex flex-col  gap-2",
        children: [e.jsx("div", {
          className: `h-[${vo}px] flex items-center`,
          children: e.jsx(F, {
            weight: O.SEMIBOLD,
            children: Fs(t)
          })
        }), r && o && e.jsxs(C, {
          color: i.gray[400],
          children: ["$", e.jsx(k, {
            num: fe(r.tick, o)
          })]
        }), t === L.LIQUIDITY && o && a && !r && e.jsxs("div", {
          className: "flex flex-col gap-3",
          children: [e.jsxs(C, {
            color: i.gray[400],
            children: [d == null ? void 0 : d.month, "/", d == null ? void 0 : d.day, "/", d == null ? void 0 : d.year]
          }), e.jsxs("div", {
            className: "flex flex-row gap-1 ",
            style: {
              marginTop: u ? 12 : 0
            },
            children: [e.jsx("div", {
              style: {
                minWidth: u ? 50 : 80
              },
              children: u ? e.jsx(Fe, {
                color: i.gray[300],
                children: " Min Price: "
              }) : e.jsx(F, {
                color: i.gray[300],
                children: " Min Price: "
              })
            }), u ? e.jsx(Fe, {
              children: e.jsx(k, {
                num: fe(o.selected === 0 ? a.upper : a.lower, o)
              })
            }) : e.jsx(F, {
              children: e.jsx(k, {
                num: fe(o.selected === 0 ? a.upper : a.lower, o)
              })
            }), u ? e.jsxs(Fe, {
              children: [o.selected === 0 ? n == null ? void 0 : n.t0_symbol : n == null ? void 0 : n.t1_symbol, " per", " ", o.selected === 0 ? n == null ? void 0 : n.t1_symbol : n == null ? void 0 : n.t0_symbol, " "]
            }) : e.jsxs(F, {
              children: [o.selected === 0 ? n == null ? void 0 : n.t0_symbol : n == null ? void 0 : n.t1_symbol, " per", " ", o.selected === 0 ? n == null ? void 0 : n.t1_symbol : n == null ? void 0 : n.t0_symbol, " "]
            })]
          }), e.jsxs("div", {
            className: "flex flex-row gap-1",
            children: [e.jsx("div", {
              style: {
                minWidth: u ? 54 : 80
              },
              children: u ? e.jsx(Fe, {
                color: i.gray[300],
                children: " Max Price: "
              }) : e.jsx(F, {
                color: i.gray[300],
                children: " Max Price: "
              })
            }), u ? e.jsx(Fe, {
              children: e.jsx(k, {
                num: fe(o.selected === 1 ? a.upper : a.lower, o)
              })
            }) : e.jsx(F, {
              children: e.jsx(k, {
                num: fe(o.selected === 1 ? a.upper : a.lower, o)
              })
            }), e.jsx("div", {
              className: " min-w-[180px] flex flex-row",
              children: u ? e.jsxs(Fe, {
                children: [o.selected === 0 ? n == null ? void 0 : n.t0_symbol : n == null ? void 0 : n.t1_symbol, " per", " ", o.selected === 0 ? n == null ? void 0 : n.t1_symbol : n == null ? void 0 : n.t0_symbol, " "]
              }) : e.jsxs(F, {
                children: [o.selected === 0 ? n == null ? void 0 : n.t0_symbol : n == null ? void 0 : n.t1_symbol, " per", " ", o.selected === 0 ? n == null ? void 0 : n.t1_symbol : n == null ? void 0 : n.t0_symbol, " "]
              })
            })]
          })]
        }), r && e.jsx(yl, {
          item: e.jsx(k, {
            num: r.amount,
            singleLetterNotation: !0
          }),
          circleColor: jl(t)[0]
        })]
      })
    })
  },
  yl = s => {
    const {
      circleColor: t,
      item: r,
      textColor: o = i.gray[100],
      showCircle: n = !0
    } = s, {
      isMobile: a
    } = de();
    return e.jsxs("div", {
      className: "flex flex-row gap-2 items-center ",
      children: [n && e.jsx(z, {
        style: {
          color: t,
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/circleIcon.svg"
      }), a ? e.jsx(Fe, {
        children: r
      }) : e.jsx(F, {
        weight: O.SEMIBOLD,
        color: o,
        children: r
      })]
    })
  },
  yo = s => {
    const {
      chart: t,
      setChart: r,
      chartList: o
    } = s;
    return e.jsx("div", {
      className: "h-fit  flex  flex-row py-[3px] justify-center items-center border-[1px] px-2 rounded-[6px]",
      style: {
        borderColor: i.gray[700],
        backgroundColor: i.gray[800]
      },
      children: o.map((n, a) => e.jsx(bl, {
        title: n,
        onClick: () => {
          r(n)
        },
        focus: t === n
      }, a))
    })
  },
  bl = s => {
    const {
      title: t,
      onClick: r,
      focus: o
    } = s, {
      isMobile: n
    } = de();
    return e.jsx("button", {
      onClick: r,
      className: "rounded-[6px] px-2 py-[2px] ",
      style: {
        backgroundColor: o ? i.gray[600] : "",
        width: n ? 60 : 64
      },
      children: n ? e.jsx(Fe, {
        color: o ? i.gray[100] : i.gray[300],
        weight: O.MEDIUM,
        children: Fs(t)
      }) : e.jsx(X, {
        color: o ? i.gray[100] : i.gray[300],
        weight: O.MEDIUM,
        children: Fs(t)
      })
    })
  },
  $t = s => {
    const {
      chart: t,
      setChart: r,
      timeIncrement: o,
      setTimeIncrement: n,
      chartList: a,
      token: c = void 0,
      setToken: d = () => {},
      poolSummary: u,
      hoveredTick: h,
      range: g = void 0,
      positionCreatedDate: x = void 0,
      maxFeeLength: f = void 0,
      page: j
    } = s, m = We.INDV_POOL_PAGE === j, _ = We.INDV_POS_PAGE === j, {
      isMobile: y
    } = de();
    return e.jsxs("div", {
      className: ` w-full h-[${vo}px] flex flex-row justify-between`,
      children: [e.jsx(vl, {
        chart: t,
        hoveredTick: h,
        token: c,
        poolSummary: u,
        range: g,
        positionCreatedDate: x
      }), e.jsxs("div", {
        className: "flex flex-row gap-3",
        children: [t !== L.LIQUIDITY && !m && !_ && e.jsx(Ns, {
          timeIncrement: o,
          setTimeIncrement: n,
          maxFeeLength: f,
          chart: t
        }), m && t !== L.LIQUIDITY && !_ && !y && e.jsx(Ns, {
          timeIncrement: o,
          setTimeIncrement: n,
          maxFeeLength: f,
          chart: t
        }), !y && c && d && u && (t === L.LIQUIDITY || t === L.PRICE) && e.jsx(pr, {
          token: c,
          token0Address: u.t0,
          token0Symbol: u.t0_symbol,
          token1Address: u.t1,
          token1Symbol: u.t1_symbol,
          setTokenSelected: d
        }), e.jsxs("div", {
          className: "flex flex-col gap-2 items-end",
          children: [e.jsx(yo, {
            chart: t,
            setChart: r,
            chartList: a
          }), y && c && d && u && e.jsxs("div", {
            className: "flex flex-row gap-2",
            children: [t !== L.LIQUIDITY && m && !_ && e.jsx(Ns, {
              timeIncrement: o,
              setTimeIncrement: n,
              maxFeeLength: f,
              chart: t
            }), (t === L.LIQUIDITY || t === L.PRICE) && e.jsx(pr, {
              token: c,
              token0Address: u.t0,
              token0Symbol: u.t0_symbol,
              token1Address: u.t1,
              token1Symbol: u.t1_symbol,
              setTokenSelected: d
            })]
          })]
        })]
      })]
    })
  },
  Qe = (s, t) => t > 36e5 ? new Date(s).toLocaleDateString() : new Date(s).toLocaleString(),
  at = ({
    chartRef: s,
    theme: t,
    onZoom: r,
    options: o
  }) => {
    const [n, a] = l.useState(), [c, d] = l.useState([0, 100]), [u, h] = l.useState(void 0), g = l.useCallback(() => {
      n == null || n.resize()
    }, [n]), [x, f] = Yr();
    return l.useEffect(() => {
      g && g()
    }, [g, f]), l.useEffect(() => {
      var _;
      if (s.current === null) return;
      x(s.current);
      const j = ln(s.current, t);
      if (j === void 0) return;
      j.on("datazoom", y => {
        var N;
        (N = y == null ? void 0 : y.batch) == null || N.map(w => {
          d([w.start, w.end])
        })
      });
      const m = (_ = s.current) == null ? void 0 : _.children[0];
      return m == null || m.addEventListener("wheel", y => {
        r && r(y)
      }), h(m), o && j.setOption(o), a(j), () => {
        j == null || j.dispose()
      }
    }, [t]), {
      echart: n,
      zoom: c,
      firstChild: u,
      resizeChart: g
    }
  },
  Rs = s => {
    const {
      xData: t,
      yData: r,
      style: o,
      isLoading: n
    } = s, a = l.useRef(null), [c, d] = l.useState(!1), h = Math.floor(Number(o == null ? void 0 : o.width) / 10), g = t[t.length - h], {
      echart: x
    } = at({
      chartRef: a,
      options: {
        animationDuration: 300,
        backgroundColor: i.gray.dark,
        dataZoom: [{
          minValueSpan: 10,
          startValue: g || void 0,
          type: "inside"
        }],
        grid: {
          bottom: 20,
          left: 10,
          right: 10,
          top: 50
        },
        legend: {
          formatter: function () {
            return "Fees"
          },
          icon: "circle",
          itemStyle: {
            color: i.gray[200]
          },
          left: 0,
          orient: "vertical",
          textStyle: {
            color: i.gray[200]
          }
        },
        series: [{
          areaStyle: {
            color: new Je(0, .5, 0, 1, [{
              color: i.fees_chart.shadow0,
              offset: 0
            }, {
              color: i.fees_chart.shadow1,
              offset: 1
            }]),
            opacity: .8
          },
          lineStyle: {
            color: i.fees_chart.line,
            width: 1
          },
          name: "fees",
          showSymbol: !1,
          step: "middle",
          type: "line"
        }],
        tooltip: {
          formatter: function (f) {
            return ot(e.jsxs("div", {
              children: [e.jsx("span", {
                className: "text-gray-500 text-sm font-normal",
                children: f[0].axisValueLabel
              }), " ", e.jsx("br", {}), e.jsxs("div", {
                className: "flex gap-x-2 items-center",
                children: [e.jsx(z, {
                  style: {
                    color: i.gray[200]
                  },
                  src: "https://assets.oku.trade/circleIcon.svg"
                }), "$", k({
                  num: f[0].value,
                  stringOut: !0,
                  singleLetterNotation: !0
                })]
              })]
            }))
          },
          trigger: "axis"
        },
        xAxis: {
          axisLabel: {
            color: i.gray[200]
          },
          boundaryGap: !1,
          data: [],
          type: "category"
        },
        yAxis: {
          axisLabel: {
            align: "right",
            color: i.gray[200],
            formatter: function (f) {
              return "$" + k({
                num: f,
                stringOut: !0,
                singleLetterNotation: !0
              })
            }
          },
          position: "right",
          scale: !0,
          splitLine: {
            show: !1
          },
          type: "value",
          z: 10
        }
      }
    });
    return l.useEffect(() => {
      x && (d(!1), x.setOption({
        dataZoom: [{
          minValueSpan: 10,
          startValue: g || void 0,
          type: "inside"
        }]
      }))
    }, [c]), l.useEffect(() => {
      x && x.setOption({
        xAxis: {
          data: t
        },
        series: [{
          data: r
        }]
      })
    }, [r, t, c, x]), l.useEffect(() => {
      x && (n ? x.showLoading("default", {
        color: "white",
        textColor: "white",
        maskColor: "rgba(0,0,0,0.4)"
      }) : x.hideLoading())
    }, [n, x]), l.useEffect(() => {
      x && d(!0)
    }, [g]), e.jsx("div", {
      ref: a,
      onDoubleClick: () => {
        d(!0)
      },
      style: {
        height: "100%",
        maxWidth: o == null ? void 0 : o.width,
        width: o == null ? void 0 : o.width,
        minWidth: o == null ? void 0 : o.width,
        ...o
      }
    })
  },
  ns = s => {
    const {
      xData: t,
      yData: r,
      style: o,
      isLoading: n
    } = s, [a, c] = l.useState(!1), u = Math.floor(Number(o == null ? void 0 : o.width) / 10), h = t[t.length - u], g = l.useRef(null), {
      echart: x
    } = at({
      chartRef: g,
      options: {
        animationDuration: 300,
        backgroundColor: i.gray.dark,
        dataZoom: [{
          minValueSpan: 10,
          startValue: h || void 0,
          type: "inside"
        }],
        grid: {
          bottom: 20,
          left: 10,
          right: 10,
          top: 50
        },
        legend: {
          formatter: function () {
            return "TVL"
          },
          icon: "circle",
          itemStyle: {
            color: i.green[400]
          },
          left: 0,
          orient: "vertical",
          textStyle: {
            color: i.gray[200]
          }
        },
        series: [{
          areaStyle: {
            color: new Je(0, .4, 0, 1, [{
              color: i.tvl_chart.shadow0,
              offset: 0
            }, {
              color: i.tvl_chart.shadow1,
              offset: 1
            }]),
            opacity: .8
          },
          data: [],
          lineStyle: {
            color: i.tvl_chart.line
          },
          name: "TVl Value",
          showSymbol: !1,
          step: !1,
          type: "line"
        }],
        tooltip: {
          axisPointer: {
            crossStyle: {},
            lineStyle: {}
          },
          formatter: function (f) {
            return ot(e.jsxs("div", {
              children: [e.jsxs("span", {
                className: "text-gray-500 text-sm font-normal",
                children: ["$", f[0].axisValueLabel]
              }), " ", e.jsx("br", {}), e.jsxs("div", {
                className: "flex gap-x-2 items-center",
                children: [e.jsx(z, {
                  style: {
                    color: i.green[400]
                  },
                  src: "https://assets.oku.trade/circleIcon.svg"
                }), "$", k({
                  num: f[0].value,
                  stringOut: !0,
                  singleLetterNotation: !0
                })]
              })]
            }))
          },
          trigger: "axis"
        },
        xAxis: {
          axisLabel: {
            color: i.gray[200]
          },
          axisLine: {
            show: !1
          },
          axisTick: {
            show: !1
          },
          boundaryGap: !1,
          data: [],
          type: "category"
        },
        yAxis: {
          axisLabel: {
            align: "right",
            color: i.gray[200],
            formatter: function (f) {
              return `$${k({num:f,stringOut:!0,singleLetterNotation:!0})}`
            }
          },
          axisLine: {
            show: !1
          },
          position: "right",
          scale: !0,
          splitLine: {
            show: !1
          },
          type: "value",
          z: 10
        }
      }
    });
    return l.useEffect(() => {
      x && (c(!1), x.setOption({
        dataZoom: [{
          minValueSpan: 10,
          startValue: h || void 0,
          type: "inside"
        }]
      }))
    }, [a]), l.useEffect(() => {
      x && x.setOption({
        xAxis: {
          data: t
        },
        series: [{
          data: r
        }]
      })
    }, [r, t, a, x]), l.useEffect(() => {
      x && (n ? x.showLoading("default", {
        color: "white",
        textColor: "white",
        maskColor: "rgba(0,0,0,0.4)"
      }) : x.hideLoading())
    }, [n, x]), l.useEffect(() => {
      x && c(!0)
    }, [h]), e.jsx("div", {
      onDoubleClick: () => {
        c(!0)
      },
      ref: g,
      style: {
        height: "100%",
        maxWidth: o == null ? void 0 : o.width,
        width: o == null ? void 0 : o.width,
        minWidth: o == null ? void 0 : o.width,
        ...o
      }
    })
  },
  ms = s => {
    const {
      xData: t,
      yData: r,
      style: o,
      isLoading: n
    } = s, a = l.useRef(null), [c, d] = l.useState(!1), h = Math.floor(Number(o == null ? void 0 : o.width) / 10), g = t[t.length - h], {
      echart: x
    } = at({
      chartRef: a,
      options: {
        animationDuration: 300,
        backgroundColor: i.gray.dark,
        dataZoom: [{
          minValueSpan: 10,
          startValue: g || void 0,
          type: "inside"
        }],
        grid: {
          bottom: 20,
          left: 10,
          right: 10,
          top: 50
        },
        legend: {
          formatter: function () {
            return "Volume"
          },
          icon: "circle",
          itemStyle: {
            color: i.volume_chart.line
          },
          left: 0,
          orient: "vertical",
          textStyle: {
            color: i.gray[200]
          }
        },
        series: [{
          areaStyle: {
            color: new Je(0, .3, 0, 1, [{
              color: i.volume_chart.shadow0,
              offset: 0
            }, {
              color: i.volume_chart.shadow1,
              offset: 1
            }]),
            opacity: .8
          },
          data: [],
          lineStyle: {
            color: i.volume_chart.line
          },
          name: "Volume",
          showSymbol: !1,
          step: "middle",
          type: "line"
        }],
        tooltip: {
          axisPointer: {
            crossStyle: {},
            lineStyle: {}
          },
          formatter: function (f) {
            return ot(e.jsxs("div", {
              children: [e.jsx("span", {
                className: "text-gray-500 text-sm font-normal",
                children: f[0].axisValueLabel
              }), " ", e.jsx("br", {}), e.jsxs("div", {
                className: "flex gap-x-2 items-center",
                children: [e.jsx(z, {
                  style: {
                    color: i.blue[500]
                  },
                  src: "https://assets.oku.trade/circleIcon.svg"
                }), "$", k({
                  num: f[0].value,
                  stringOut: !0,
                  singleLetterNotation: !0
                }), " "]
              })]
            }))
          },
          trigger: "axis"
        },
        xAxis: {
          axisLabel: {
            color: i.gray[200]
          },
          axisLine: {
            show: !1
          },
          axisTick: {
            show: !1
          },
          boundaryGap: !1,
          data: [],
          type: "category"
        },
        yAxis: {
          axisLabel: {
            align: "right",
            color: i.gray[200],
            formatter: function (f) {
              return `$${k({num:f,stringOut:!0,singleLetterNotation:!0})}`
            }
          },
          axisLine: {
            show: !1
          },
          position: "right",
          scale: !1,
          splitLine: {
            show: !1
          },
          type: "value",
          z: 10
        }
      }
    });
    return l.useEffect(() => {
      x && (d(!1), x.setOption({
        dataZoom: [{
          minValueSpan: 10,
          startValue: g || void 0,
          type: "inside"
        }]
      }))
    }, [c]), l.useEffect(() => {
      x && x.setOption({
        xAxis: {
          data: t
        },
        series: [{
          data: r
        }]
      })
    }, [r, t, c, x]), l.useEffect(() => {
      x && (n ? x.showLoading("default", {
        color: "white",
        textColor: "white",
        maskColor: "rgba(0,0,0,0.4)"
      }) : x.hideLoading())
    }, [n, x]), l.useEffect(() => {
      x && d(!0)
    }, [g]), e.jsx("div", {
      ref: a,
      onDoubleClick: () => {
        d(!0)
      },
      style: {
        height: "100%",
        maxWidth: o == null ? void 0 : o.width,
        width: o == null ? void 0 : o.width,
        minWidth: o == null ? void 0 : o.width,
        ...o
      }
    })
  };

function Ft() {
  return e.jsx("div", {
    className: "flex  items-center  justify-center flex-1  h-full",
    children: e.jsx(z, {
      className: "animate-spin",
      src: "https://assets.oku.trade/loader.svg"
    })
  })
}

function Rt() {
  return e.jsx("div", {
    className: "flex  items-center  justify-center flex-1  h-full",
    children: e.jsxs("div", {
      className: "flex flex-col gap-2 items-center justify-center",
      children: [e.jsx(z, {
        src: "https://assets.oku.trade/error.svg"
      }), e.jsx(C, {
        children: "Error Loading Chart"
      })]
    })
  })
}
const wl = s => {
  const {
    chart: t,
    width: r,
    timeIncrement: o
  } = s, {
    data: n,
    error: a
  } = Y("cush_analyticsProtocolHistoric", [-1 * he(o) * 1800, 0, he(o)]), c = (d, u) => {
    const h = u.map(j => Qe(j.time, he(o))),
      g = u.map(j => j.volume),
      x = u.map(j => j.fees),
      f = u.map(j => j.tvl);
    switch (d) {
      case L.VOLUME:
        return e.jsx(ms, {
          yData: g,
          xData: h,
          style: {
            width: r
          },
          isLoading: n === void 0,
          timeIncrement: o
        });
      case L.TVL:
        return e.jsx(ns, {
          yData: f,
          xData: h,
          style: {
            width: r
          },
          isLoading: n === void 0,
          timeIncrement: o
        });
      case L.FEES:
        return e.jsx(Rs, {
          yData: x,
          xData: h,
          style: {
            width: r
          },
          isLoading: n === void 0
        });
      default:
        return e.jsx(ns, {
          yData: f,
          xData: h,
          style: {
            width: r
          },
          isLoading: n === void 0,
          timeIncrement: o
        })
    }
  };
  return e.jsx("div", {
    className: "flex items-end justify-center flex-1  overflow-hidden ",
    children: a ? e.jsx(Rt, {}) : n ? c(t, n) : e.jsx(Ft, {})
  })
};

function Cl(s) {
  const {
    height: t,
    width: r,
    timeIncrement: o,
    setTimeIncrement: n
  } = s, [a, c] = l.useState(L.TVL), d = [L.TVL, L.FEES, L.VOLUME], u = r, h = ge(), g = l.useRef(null);
  return l.useEffect(() => {
    c(L.TVL)
  }, [h.chain]), l.useEffect(() => {
    const x = f => {
      g.current && g.current.contains(f.target) && f.preventDefault()
    };
    return document.addEventListener("wheel", x, {
      passive: !1
    }), () => {
      document.removeEventListener("wheel", x)
    }
  }, [g]), e.jsxs("div", {
    ref: g,
    className: "  flex flex-col border-gray-800  duration-[500ms] ",
    style: {
      height: t,
      width: r
    },
    children: [e.jsx($t, {
      page: We.OVERVIEW_PAGE,
      chartList: d,
      chart: a,
      setChart: c,
      timeIncrement: o,
      setTimeIncrement: n
    }), e.jsx(wl, {
      timeIncrement: o,
      chart: a,
      width: u
    })]
  })
}

function bo(s) {
  const {
    children: t
  } = s, {
    isMobile: r
  } = de();
  return e.jsx("div", {
    className: "rounded-[20px] w-full h-full border-[1px] border-gray-700 ",
    style: {
      backgroundColor: i.gray.dark,
      padding: r ? Ct : _t
    },
    children: t
  })
}

function _l() {
  return e.jsx(bo, {
    children: e.jsxs("div", {
      className: "mt-2 flex flex-col gap-2",
      children: [e.jsx("span", {
        className: "mr-2 mb-1 h-4 w-24 rounded-full bg-white/5 animate-pulse"
      }), e.jsxs("div", {
        className: "flex flex-col gap-1",
        children: [e.jsxs("div", {
          className: "h-16 rounded-[10px] flex flex-row justify-between items-center pl-2 pr-[10px]",
          style: {
            backgroundColor: i.gray[800]
          },
          children: [e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-24 rounded-full bg-white/5 animate-pulse"
          }), e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-24 rounded-full bg-white/5 animate-pulse"
          })]
        }), e.jsxs("div", {
          className: "h-16 rounded-[10px] flex flex-row justify-between items-center pl-2 pr-[10px]",
          style: {
            backgroundColor: i.gray[800]
          },
          children: [e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-36 rounded-full bg-white/5 animate-pulse"
          }), e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-24 rounded-full bg-white/5 animate-pulse"
          })]
        }), e.jsxs("div", {
          className: "h-16 rounded-[10px] flex flex-row justify-between items-center pl-2 pr-[10px]",
          style: {
            backgroundColor: i.gray[800]
          },
          children: [e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-24 rounded-full bg-white/5 animate-pulse"
          }), e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-24 rounded-full bg-white/5 animate-pulse"
          })]
        }), e.jsxs("div", {
          className: "h-16 rounded-[10px] flex flex-row justify-between items-center pl-2 pr-[10px]",
          style: {
            backgroundColor: i.gray[800]
          },
          children: [e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-36 rounded-full bg-white/5 animate-pulse"
          }), e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-24 rounded-full bg-white/5 animate-pulse"
          })]
        }), e.jsxs("div", {
          className: "h-16 rounded-[10px] flex flex-row justify-between items-center pl-2 pr-[10px]",
          style: {
            backgroundColor: i.gray[800]
          },
          children: [e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-36 rounded-full bg-white/5 animate-pulse"
          }), e.jsx("span", {
            className: "mr-2 mb-2 h-6 w-24 rounded-full bg-white/5 animate-pulse"
          })]
        })]
      })]
    })
  })
}

function Ze(s) {
  const {
    value: t,
    isProportion: r = !0
  } = s;
  return e.jsxs("div", {
    className: "flex flex-row gap-1 justify-end mt-2  ",
    children: [t !== 0 && (t < 0 ? e.jsx(cn, {
      width: 8,
      fill: i.red[400]
    }) : e.jsx(dn, {
      width: 8,
      fill: i.green[400]
    })), e.jsx(C, {
      color: t === 0 ? i.white : t < 0 ? i.red[400] : i.green[400],
      children: (r ? Math.abs(t) >= 1e-4 : Math.abs(t) >= .01) || t === 0 ? [e.jsx(k, {
        num: r ? Math.abs(t) * 100 : Math.abs(t),
        showOnly2Digits: !0
      }, "number"), "%"] : ["<0.01%"]
    })]
  })
}

function Nl(s) {
  const {
    overviewItems: t
  } = s;
  return e.jsx(bo, {
    children: e.jsxs("div", {
      className: "flex flex-col flex-1 h-full justify-between",
      children: [e.jsx(F, {
        weight: O.MEDIUM,
        children: "Overview"
      }), e.jsx("div", {
        className: "flex flex-col gap-1",
        children: t.map((r, o) => e.jsx(Sl, {
          itemTitle: r.itemTitle,
          itemValue: r.itemValue,
          itemChange: r.itemChange,
          simbol: r.simbol,
          symbolAfter: r.symbolAfter
        }, o))
      })]
    })
  })
}
const Sl = s => {
  const {
    itemTitle: t,
    itemValue: r,
    itemChange: o,
    simbol: n,
    symbolAfter: a
  } = s;
  return e.jsxs("div", {
    className: "h-16 rounded-[10px] flex flex-row justify-between items-center px-3 border-[1px] border-gray-800 ",
    style: {
      backgroundColor: i.gray[800]
    },
    children: [e.jsx(F, {
      color: i.gray[300],
      weight: O.REGULAR,
      children: t
    }), e.jsxs("div", {
      className: "flex flex-col items-end",
      children: [e.jsxs(F, {
        weight: O.MEDIUM,
        color: i.gray[100],
        children: [a ? "" : n, r, a ? n : ""]
      }), e.jsx("div", {
        className: "flex items-center justify-center mb ",
        children: o !== void 0 ? e.jsx(Ze, {
          value: o,
          isProportion: !1
        }) : e.jsx("div", {})
      })]
    })]
  })
};

function Ut(s) {
  const {
    overviewItems: t,
    children: r
  } = s, {
    isMobile: o
  } = de(), n = J({
    base: !1,
    md: !0
  }), a = o ? bt : wt;
  return e.jsx("div", {
    className: "flex flex-col gap-2 items-center ",
    children: e.jsxs("section", {
      className: `flex ${n?"flex-row":"flex-col-reverse"}  w-full gap-2  `,
      style: {},
      children: [e.jsx("div", {
        className: "p-3 md:p-4 rounded-[20px] bg-gray-dark border-[1px] border-gray-700 flex flex-1",
        children: r
      }), e.jsx("div", {
        className: `w-full  ${n?"mb-0":"mb-2"}  `,
        style: {
          height: a,
          width: window.innerWidth >= 1024 ? 395 : "100%"
        },
        children: t ? e.jsx(Nl, {
          overviewItems: t
        }) : e.jsx(_l, {})
      })]
    })
  })
}

function wo(s) {
  const {
    numberOfRows: t
  } = s;
  return e.jsxs("div", {
    className: "p-5",
    children: [e.jsx("div", {
      className: "flex mb-2",
      children: e.jsx("span", {
        className: "h-6 w-1/6 mr-2 mb-2 rounded-full bg-white/5 animate-pulse"
      })
    }), e.jsx("div", {
      className: "flex flex-col w-full gap-3",
      children: new Array(t || 6).fill(void 0).map((r, o) => e.jsx("span", {
        className: "h-14 w-full mb-2 rounded-full bg-white/5 animate-pulse"
      }, o))
    })]
  })
}

function Co(s) {
  const {
    children: t,
    classes: r = ""
  } = s;
  return e.jsx("div", {
    className: `rounded-[10px]  w-full h-full border-[1px] border-gray-700 overflow-y-hidden ${r}`,
    style: {
      backgroundColor: i.gray.dark
    },
    children: t
  })
}

function we(s) {
  const {
    isLoading: t,
    children: r,
    height: o,
    id: n,
    header: a
  } = s;
  return e.jsx("section", {
    className: "w-full",
    id: n,
    children: e.jsx(Co, {
      children: e.jsxs("div", {
        className: "overflow-hidden transition-[height] duration-300 ease-in",
        style: {
          height: o
        },
        children: [a, t ? e.jsx(wo, {}) : r]
      })
    })
  })
}
const Ss = 59,
  De = 54,
  Zt = 54,
  kl = 56,
  Tl = 56,
  br = 56,
  El = 500,
  Ll = 70,
  Ce = (s, t, r, o, n, a) => {
    const c = r ? kl : 0,
      d = o ? Tl : 0,
      u = n ? Ll : 0;
    return s ? s && s.length === 0 ? Zt + c + 2 * Ss : s && s.length < t ? s.length * Ss + Zt + c + br - a : t * Ss + Zt + d + c + br + u - a : El
  };

function _e(s) {
  const {
    title: t,
    onClick: r,
    info: o = void 0,
    isCollapsed: n = void 0
  } = s;
  return e.jsxs("div", {
    className: "flex justify-between items-center px-4  rounded-t-[10px]  border-gray-700 ",
    style: {
      cursor: n !== void 0 ? "pointer" : "",
      backgroundColor: i.gray[900],
      height: Zt
    },
    onClick: () => r ? r() : {},
    children: [e.jsx(F, {
      weight: O.MEDIUM,
      children: t
    }), e.jsxs("div", {
      className: "flex flex-row items-center  gap-4",
      children: [o !== void 0 && e.jsx(C, {
        color: i.gray[400],
        children: o
      }), n !== void 0 && (n ? e.jsx(z, {
        style: {
          color: "white",
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/downArrowIcon.svg"
      }) : e.jsx(z, {
        style: {
          color: "white",
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/upArrowIcon.svg"
      }))]
    })]
  })
}

function Vt(s) {
  const {
    t0: t,
    t1: r,
    t0_symbol: o,
    t1_symbol: n,
    fee: a
  } = s;
  return e.jsx("div", {
    className: "flex gap-1 justify-between",
    children: e.jsx(It, {
      token0Address: t,
      token1Address: r,
      token0Symbol: o,
      token1Symbol: n,
      fee: a
    })
  })
}
const Tt = "...",
  Dl = ({
    totalCount: s,
    pageSize: t,
    siblingCount: r = 1,
    currentPage: o
  }) => l.useMemo(() => {
    const a = Math.ceil(s / t);
    if (r + 5 >= a) return qt(1, a);
    const d = Math.max(o - r, 1),
      u = Math.min(o + r, a),
      h = d > 2,
      g = u < a - 2,
      x = 1,
      f = a;
    if (!h && g) {
      const j = 3 + 2 * r;
      return [...qt(1, j), Tt, a]
    }
    if (h && !g) {
      const j = 3 + 2 * r,
        m = qt(a - j + 1, a);
      return [x, Tt, ...m]
    }
    if (h && g) {
      const j = qt(d, u);
      return [x, ...j, Tt, f]
    }
  }, [s, t, r, o]),
  qt = (s, t) => {
    const r = t - s + 1;
    return Array.from({
      length: r
    }, (o, n) => n + s)
  },
  Ge = s => {
    const {
      onPageChange: t,
      totalCount: r,
      siblingCount: o = 1,
      currentPage: n,
      pageSize: a
    } = s, [c, d] = l.useState(!0), u = Dl({
      currentPage: n,
      totalCount: r,
      siblingCount: o,
      pageSize: a
    }), h = l.useRef(null);
    if (n === 0 || u && u.length < 2) return null;
    const g = () => {
        t(n + 1)
      },
      x = () => {
        t(n - 1)
      },
      f = u && u[u.length - 1],
      j = () => {
        c && Number(f) > 20 && (d(!1), setTimeout(() => {
          var m;
          h.current && ((m = h.current) == null || m.focus())
        }, 50))
      };
    return e.jsxs("div", {
      className: "flex justify-center gap-2 md:gap-8 h-14 items-center",
      children: [e.jsx("button", {
        disabled: n === 1,
        onClick: x,
        children: e.jsx(un, {
          width: 14,
          color: i.blue[400]
        })
      }), u && u.map((m, _) => m === Tt ? c ? e.jsx("span", {
        className: `text-gray-300 ${Number(f)>20?"py-1 border border-gray-900 hover:border-gray-600 rounded-md px-[14px] hover:bg-gray-800 cursor-pointer":""}`,
        onClick: j,
        children: Tt
      }, _) : e.jsx("input", {
        ref: h,
        onChange: y => {
          y.currentTarget.value = y.currentTarget.value.replace(/[^0-9]/g, "")
        },
        className: "w-10 h-8 rounded-md px-2 text-sm text-gray-50 border-2 border-gray-300 focus:outline-none focus:border-blue-400 bg-black appearance-none",
        onBlur: () => d(!0),
        onKeyDown: y => {
          if (y.key === "Enter") {
            if (Number(y.currentTarget.value) < 1 || Number(y.currentTarget.value) > Number(f)) return;
            t(Number(y.currentTarget.value)), d(!0)
          }
        }
      }) : e.jsx("button", {
        className: `${m===n?"text-white bg-gray-700":"text-gray-300"} hover:text-white rounded-md -m-1 p-2`,
        onClick: () => t(Number(m)),
        children: e.jsx("p", {
          className: "text-sm",
          children: m
        })
      }, `pageCaps-${_}`)), e.jsx("button", {
        disabled: n === f,
        onClick: g,
        children: e.jsx(hn, {
          width: 14,
          color: i.blue[400]
        })
      })]
    })
  };

function Il({
  colorUp: s,
  colorDown: t
}) {
  return e.jsx("div", {
    className: "flex items-center justify-center w-6 h-6",
    children: e.jsxs("svg", {
      width: "23",
      height: "21",
      viewBox: "0 0 23 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [e.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5 13.6371L8.82349 11.1934L7.4682 12.4308L10.8224 15.4933C11.1966 15.835 11.8034 15.835 12.1776 15.4933L15.5318 12.4308L14.1765 11.1934L11.5 13.6371Z",
        fill: s
      }), e.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5 7.36243L8.82349 9.80621L7.4682 8.56878L10.8224 5.50628C11.1966 5.16457 11.8034 5.16457 12.1776 5.50628L15.5318 8.56878L14.1765 9.80621L11.5 7.36243Z",
        fill: t
      })]
    })
  })
}

function U(s) {
  const {
    title: t,
    handleSortingToggle: r,
    sorting: o
  } = s, [n, a] = l.useState(!1);
  return e.jsxs("div", {
    className: "flex justify-end -mx-3 cursor-pointer ",
    onClick: r,
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    children: [e.jsx("div", {
      className: "mt-1",
      children: e.jsx(C, {
        color: n ? i.gray[400] : i.gray[300],
        className: "hover:text-red-100",
        children: t
      })
    }), e.jsx(Il, {
      colorUp: o === T.DESC ? i.blue[400] : n ? i.gray[400] : i.gray[300],
      colorDown: o === T.ASC ? i.blue[400] : n ? i.gray[400] : i.gray[300]
    })]
  })
}

function Pl(s) {
  return typeof s == "function"
}

function dt(s, ...t) {
  return Pl(s) ? s(...t) : s
}
const Ue = s => {
  const {
    headers: t,
    config: r,
    data: o
  } = s, n = l.useMemo(() => e.jsx(e.Fragment, {
    children: e.jsx("table", {
      className: dt(r.tableClass),
      children: e.jsx("tbody", {
        className: dt(r.tbodyClass),
        children: e.jsxs(e.Fragment, {
          children: [e.jsx("tr", {
            className: dt(r.headerRowClass),
            children: t.map((a, c) => {
              const d = dt(a.headerClass);
              return typeof a.title == "string" ? e.jsx("th", {
                className: d,
                children: e.jsx(C, {
                  color: i.gray[300],
                  children: a.title
                }, c)
              }, c) : e.jsx("th", {
                className: d,
                children: a.title
              }, c)
            })
          }), o.map((a, c) => {
            const d = dt(r.dataRowClass, a, c);
            return e.jsx("tr", {
              className: d,
              children: t.filter(h => h.show !== void 0 ? h.show === !1 ? !1 : h.show === !0 ? !0 : h.show() : !0).map((h, g) => {
                const x = dt(h.dataClass, a, c),
                  f = h.render(a);
                let j = a.link;
                h.link && (typeof h.link == "string" ? j = h.link : j = h.link(a));
                let m = () => e.jsx(e.Fragment, {
                  children: f
                });
                if (j) {
                  let _;
                  j.startsWith("http") && (_ = "_blank"), m = () => e.jsx(pe, {
                    to: j,
                    target: _,
                    children: e.jsx("div", {
                      className: `${x}  flex items-center`,
                      children: e.jsxs("div", {
                        className: "w-full h-fit",
                        children: [" ", f]
                      })
                    })
                  }, `${c}_${g}`)
                }
                return e.jsx("td", {
                  children: e.jsx(m, {}, `${c}_${g}`)
                }, `${c}_${g}`)
              })
            }, c)
          }).filter(a => a !== void 0)]
        })
      })
    })
  }), [o]);
  return e.jsx(e.Fragment, {
    children: n
  })
};

function Qs(s) {
  const {
    poolsData: t,
    totalNumberOfPools: r,
    setSearchFilterOpts: o,
    pageSize: n,
    showViewMore: a = !1,
    disableSort: c = !1,
    isPoolsPage: d = !1
  } = s, [u, h] = l.useState(1), [g, x] = l.useState([]), [f, j] = l.useState(ce.Volume7D), [m, _] = l.useState(T.DESC), y = "h-14 px-4", N = "h-14 px-4", {
    currentChainInfo: w
  } = R();
  l.useEffect(() => {
    h(1)
  }, [w.id]), l.useEffect(() => {
    x(t.map((b, E) => ({
      ...b,
      place: (u - 1) * n + E,
      link: `../pool/${b.address}`
    })))
  }, [t]), l.useEffect(() => {
    o && (o({
      fee_tiers: [],
      result_offset: u - 1,
      result_size: n,
      sort_by: f || "",
      sort_order: m === T.ASC
    }), h(u))
  }, [u, f, m]);
  const p = b => {
      b === f ? _(m === T.ASC ? T.DESC : T.ASC) : (j(b), _(T.DESC)), h(1)
    },
    S = [{
      title: "Pool",
      headerClass: `${y} text-left`,
      dataClass: `${N} text-left`,
      render: b => e.jsxs("div", {
        className: "flex items-center gap-x-2",
        children: [e.jsx(X, {
          color: i.blue[400],
          children: b.place + 1
        }), e.jsx(Vt, {
          t0: b.t0,
          t1: b.t1,
          t1_symbol: b.t1_symbol,
          t0_symbol: b.t0_symbol,
          fee: b.fee
        })]
      })
    }, {
      title: c ? "TVL" : e.jsx(U, {
        title: "TVL",
        handleSortingToggle: () => p(ce.TVL),
        sorting: f === ce.TVL ? m : void 0
      }),
      headerClass: `${y} text-right`,
      dataClass: `${N} text-right`,
      render: b => e.jsxs("div", {
        children: [e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: b.tvl_usd ? b.tvl_usd : 0,
              singleLetterNotation: !0
            })]
          })
        }), e.jsx(Ze, {
          value: b.tvl_usd_change
        })]
      })
    }, {
      title: c || d ? "Current Price" : e.jsx(U, {
        title: "Current Price",
        handleSortingToggle: () => p(ce.CurrentPrice),
        sorting: f === ce.CurrentPrice ? m : void 0
      }),
      headerClass: `${y} text-right`,
      dataClass: `${N} text-right`,
      render: b => e.jsxs("div", {
        children: [e.jsxs("div", {
          className: "flex justify-end gap-1",
          children: [e.jsx(C, {
            color: i.gray[200],
            children: e.jsx(k, {
              num: b.is_preferred_token_order ? b.t0_price : b.t1_price,
              singleLetterNotation: !0
            })
          }), e.jsx(C, {
            color: i.gray[200],
            children: b.is_preferred_token_order ? b.t1_symbol : b.t0_symbol
          })]
        }), e.jsx(Ze, {
          value: b.t1_change
        })]
      })
    }, {
      title: c ? "Volume 24H" : e.jsx(U, {
        title: "Volume 24H",
        handleSortingToggle: () => p(ce.Volume24H),
        sorting: f === ce.Volume24H ? m : void 0
      }),
      headerClass: `${y} text-right`,
      dataClass: `${N} text-right`,
      render: b => e.jsxs("div", {
        children: [e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: (b.t0_volume_usd + b.t1_volume_usd) / 2,
              singleLetterNotation: !0
            })]
          })
        }), e.jsx(Ze, {
          value: (b.t0_volume_change + b.t1_volume_change) / 2
        })]
      })
    }, {
      title: c ? "Volume 7D" : e.jsx(U, {
        title: "Volume 7D",
        handleSortingToggle: () => p(ce.Volume7D),
        sorting: f === ce.Volume7D ? m : void 0
      }),
      headerClass: `${y} text-right pl-2`,
      dataClass: `${N} text-right pl-2`,
      render: b => e.jsxs("div", {
        children: [e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: b.total_volume_7d_usd,
              singleLetterNotation: !0
            })]
          })
        }), e.jsx(Ze, {
          value: (b.t0_volume_change_7d + b.t1_volume_change_7d) / 2
        })]
      })
    }, {
      title: c ? "Fees 24H" : e.jsx(U, {
        title: "Fees 24H",
        handleSortingToggle: () => p(ce.Fees),
        sorting: f === ce.Fees ? m : void 0
      }),
      headerClass: `${y} text-right pl-2`,
      dataClass: `${N} text-right pl-2`,
      render: b => e.jsx("div", {
        children: e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: b.total_fees_usd,
              singleLetterNotation: !0
            })]
          })
        })
      })
    }, {
      title: c ? "Transactions 24H" : e.jsx(U, {
        title: "Transactions 24H",
        handleSortingToggle: () => p(ce.Transactions),
        sorting: f === ce.Transactions ? m : void 0
      }),
      headerClass: `${y} text-right pl-2`,
      dataClass: `${N} text-right pl-2`,
      render: b => e.jsx("div", {
        children: e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(C, {
            color: i.gray[200],
            children: b.tx_count
          })
        })
      })
    }],
    v = {
      tableClass: "w-full overflow-y-auto",
      tbodyClass: "",
      headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-400 text-[14px] font-regular",
      dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer"
    };
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-10 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "No pools yet"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto sm:no-scrollbar",
        children: e.jsx(Ue, {
          headers: S,
          config: v,
          data: g
        })
      }), a ? e.jsx(pe, {
        to: "../pools",
        className: "flex justify-center lg:justify-end p-4 mt-2",
        children: e.jsx(C, {
          color: i.blue[400],
          children: "View More"
        })
      }) : e.jsx(Ge, {
        currentPage: u,
        totalCount: r,
        pageSize: n,
        onPageChange: b => h(b)
      })]
    })
  })
}
const Ht = s => {
  const t = a => {
      switch (a) {
        case Le.IN_RANGE:
          return {
            bgColor: i.green[700], textColor: i.green[400], title: "In range"
          };
        case Le.OUT_OF_RANGE:
          return {
            bgColor: i.yellow[700], textColor: i.yellow[200], title: "Out of range"
          };
        case Le.CLOSED:
          return {
            bgColor: i.gray[600], textColor: i.gray[300], title: "Closed"
          };
        default:
          return {
            setBgColor: i.gray[600], setTextColor: i.gray[300], setTitle: ""
          }
      }
    },
    [r, o] = l.useState(t(s.status));
  l.useEffect(() => {
    s.status && o(t(s.status))
  }, [s.status]);
  const {
    isDesktop: n
  } = de();
  return e.jsx("div", {
    className: "py-2 text-[14px] font-regular rounded-[6px] flex items-center justify-center",
    style: {
      backgroundColor: r.bgColor,
      width: n ? "94px" : "75px"
    },
    children: e.jsx(X, {
      color: r.textColor,
      children: r.title
    })
  })
};
var as;
(function (s) {
  s.VALUE = "total_value_current_usd", s.CREATE_TIME = "create_time", s.PNL = "pnl_usd_after_fees"
})(as || (as = {}));

function _o(s) {
  const {
    positionsData: t,
    disableSort: r = !1,
    showViewMore: o = !1,
    pageSize: n,
    setSearchUserPositionFilterOpts: a,
    totalNumberOfPositions: c,
    positionStatusSelected: d,
    sortingOrder: u,
    setSortingOrder: h,
    sortingProperty: g,
    setSortingProperty: x
  } = s, [f, j] = l.useState(1), [m, _] = l.useState([]), y = "h-14 px-4", {
    currentChainInfo: N
  } = R();
  l.useEffect(() => {
    j(1)
  }, [N.id]), l.useEffect(() => {
    _(t.map((S, v) => ({
      ...S,
      place: (f - 1) * n + v + 1,
      link: `../position/${S._key}`
    })))
  }, [t]), l.useEffect(() => {
    a && (a({
      result_offset: f - 1,
      result_size: n,
      sort_by: g || "",
      sort_order: u === T.ASC,
      status: d || ""
    }), j(f))
  }, [f, g, u]);
  const w = S => {
      h && x && (S === g ? h(u === T.ASC ? T.DESC : T.ASC) : (x(S), h(T.DESC)), j(1))
    },
    p = () => Ue({
      headers: [{
        title: "Pool",
        headerClass: `${y} text-left`,
        dataClass: `${y} text-left`,
        render: S => e.jsxs("div", {
          className: "flex items-center gap-x-2",
          children: [e.jsx(X, {
            color: i.blue[400],
            children: S.place
          }), e.jsx(Vt, {
            t0: S.t0,
            t1: S.t1,
            t1_symbol: S.t1_symbol,
            t0_symbol: S.t0_symbol,
            fee: S.pool_fee
          })]
        })
      }, {
        title: "Status",
        headerClass: `${y} text-left`,
        dataClass: `${y} text-left`,
        render: S => e.jsx(Ht, {
          status: S.status
        })
      }, {
        title: r ? "PNL" : e.jsx(U, {
          title: "PNL",
          handleSortingToggle: () => w("pnl_usd_after_fees"),
          sorting: g === "pnl_usd_after_fees" ? u : void 0
        }),
        headerClass: `${y} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: S => e.jsx("div", {
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: S.pnl_usd_after_fees,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: "NFT ID",
        headerClass: `${y} text-right`,
        dataClass: `${y} text-right`,
        render: S => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(C, {
            color: i.gray[200],
            children: S.token_id
          })
        })
      }, {
        title: r ? "Value" : e.jsx(U, {
          title: "Value",
          handleSortingToggle: () => w("total_value_current_usd"),
          sorting: g === "total_value_current_usd" ? u : void 0
        }),
        headerClass: `${y} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: S => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: S.total_value_current_usd ? Number(S.total_value_current_usd) : 0,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: r ? "Created" : e.jsx(U, {
          title: "Created",
          handleSortingToggle: () => w("create_time"),
          sorting: g === "create_time" ? u : void 0
        }),
        headerClass: `${y} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: S => e.jsx("div", {
          children: e.jsx(C, {
            color: i.gray[200],
            children: Ys(new Date(S.create_time), new Date)
          })
        })
      }],
      config: {
        tableClass: "w-full overflow-y-auto",
        tbodyClass: "",
        headerRowClass: "border-t-[1px] border-t-gray-800 h-16 text-gray-300 text-[14px] font-regular",
        dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer"
      },
      data: m
    });
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-10 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "No positions"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(p, {})
      }), o ? e.jsx(pe, {
        to: "../positions",
        className: "flex justify-center lg:justify-end p-4 mt-2",
        children: e.jsx(C, {
          color: i.blue[400],
          children: "View More"
        })
      }) : e.jsx(Ge, {
        currentPage: f,
        totalCount: c,
        pageSize: n,
        onPageChange: S => j(S)
      })]
    })
  })
}
var wr;
(function (s) {
  s.Price = "price", s.Change7D = "change_7d", s.Change24H = "change_24h", s.TVL = "tvl", s.Volume24H = "volume_24h", s.Volume7D = "volume_7d"
})(wr || (wr = {}));
const Ke = 50;

function No(s) {
  const {
    tokensData: t,
    totalTokensResultSize: r,
    setSearchFilterOpts: o,
    disableSort: n = !1,
    showViewMore: a = !1
  } = s, [c, d] = l.useState(1), [u, h] = l.useState([]), [g, x] = l.useState("tvl"), [f, j] = l.useState(T.DESC), {
    currentChainInfo: m
  } = R(), _ = "h-14 px-4", y = "h-14 px-4";
  l.useEffect(() => {
    d(1)
  }, [m.id]), l.useEffect(() => {
    h(t.map((p, S) => ({
      ...p,
      place: (c - 1) * Ke + S + 1,
      link: `../token/${p.contract}`
    })))
  }, [t]), l.useEffect(() => {
    if (o) {
      const p = {
        fee_tiers: [],
        result_offset: c - 1,
        sort_by: g || "",
        result_size: Ke,
        sort_order: f === T.ASC
      };
      o(p), d(c)
    }
  }, [c, g, f]);
  const N = p => {
      p === g ? j(f === T.ASC ? T.DESC : T.ASC) : (x(p), j(T.DESC)), d(1)
    },
    w = () => Ue({
      headers: [{
        title: "Token",
        headerClass: `${_} text-left`,
        dataClass: `${y} text-left`,
        render: p => {
          const S = ze(p.contract, m.id);
          return e.jsxs("div", {
            className: "flex justify-first gap-2 cursor-pointer",
            children: [e.jsx(X, {
              color: i.blue[400],
              children: p.place
            }), e.jsx("div", {
              className: "h-[18px] w-[18px] rounded-[18px]",
              children: e.jsx("img", {
                className: "rounded-full",
                src: S,
                alt: p.symbol
              })
            }), e.jsx(C, {
              color: i.gray[200],
              children: p.symbol
            })]
          })
        }
      }, {
        title: n ? "Price" : e.jsx(U, {
          title: "Price",
          handleSortingToggle: () => N("price"),
          sorting: g === "price" ? f : void 0
        }),
        headerClass: `${_} text-right`,
        dataClass: `${y} text-right`,
        render: p => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: p.price,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: "Δ 24H",
        headerClass: `${_} text-right`,
        dataClass: `${y} text-right`,
        render: p => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(Ze, {
            value: p.change_24h,
            isProportion: !1
          })
        })
      }, {
        title: "Δ 7D",
        headerClass: `${_} text-right`,
        dataClass: `${y} text-right`,
        render: p => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(Ze, {
            value: p.change_7d,
            isProportion: !1
          })
        })
      }, {
        title: n ? "TVL" : e.jsx(U, {
          title: "TVL",
          handleSortingToggle: () => N("tvl"),
          sorting: g === "tvl" ? f : void 0
        }),
        headerClass: `${_} text-right`,
        dataClass: `${y} text-right`,
        render: p => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: p.tvl,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: n ? "Volume 24H" : e.jsx(U, {
          title: "Volume 24H",
          handleSortingToggle: () => N("volume_24h"),
          sorting: g === "volume_24h" ? f : void 0
        }),
        headerClass: `${_} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: p => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: p.volume_24h,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: n ? "Volume 7D" : e.jsx(U, {
          title: "Volume 7D",
          handleSortingToggle: () => N("volume_7d"),
          sorting: g === "volume_7d" ? f : void 0
        }),
        headerClass: `${_} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: p => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: p.volume_7d,
              singleLetterNotation: !0
            })]
          })
        })
      }],
      config: {
        tableClass: "w-full overflow-y-auto",
        tbodyClass: "",
        headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-400 text-[14px] font-regular",
        dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950  cursor-pointer"
      },
      data: u
    });
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-10 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "No top tokens yet"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(w, {})
      }), a ? e.jsx(pe, {
        to: "../tokens",
        className: "flex justify-center lg:justify-end p-4 mt-2",
        children: e.jsx(C, {
          color: i.blue[400],
          children: "View More"
        })
      }) : e.jsx(Ge, {
        currentPage: c,
        totalCount: r,
        pageSize: Ke,
        onPageChange: p => d(p)
      })]
    })
  })
}

function ls(s) {
  const {
    address: t,
    size: r
  } = s;
  if (t.length !== 42) return e.jsx("div", {
    style: {
      width: r,
      height: r,
      borderRadius: r,
      backgroundColor: "white"
    }
  });
  const o = "#".concat(t.slice(2, 8)),
    n = "#".concat(t.slice(4, 10)),
    a = "#".concat(t.slice(8, 12)),
    c = "#".concat(t.slice(10, 14)),
    d = "#".concat(t.slice(12, 16)),
    u = "#".concat(t.slice(14, 18)),
    h = "#".concat(t.slice(16, 20)),
    g = "#".concat(t.slice(18, 22)),
    x = "#".concat(t.slice(20, 24)),
    f = "#".concat(t.slice(22, 26)),
    j = "#".concat(t.slice(24, 28)),
    m = "#".concat(t.slice(26, 30)),
    _ = "#".concat(t.slice(28, 32)),
    y = "#".concat(t.slice(30, 34)),
    N = "#".concat(t.slice(32, 36)),
    w = "#".concat(t.slice(36, 42)),
    E = [
      [o, n, a, c],
      [d, u, h, g],
      [x, f, j, m],
      [_, y, N, w]
    ];
  return e.jsxs("div", {
    className: "flex flex-col overflow-hidden",
    style: {
      width: r,
      height: r,
      borderRadius: r
    },
    children: [E.map((A, V) => e.jsx("div", {
      className: "flex flex-row",
      children: A.map(($, B) => e.jsx("div", {
        style: {
          width: r / 4,
          height: r / 4,
          backgroundColor: $
        }
      }, B))
    }, V)), "s"]
  })
}

function Ml(s) {
  const {
    topUsers: t,
    setSearchFilterOpts: r
  } = s, [o, n] = l.useState([]), [a, c] = l.useState(He.Volume), [d, u] = l.useState(T.DESC), h = J({
    base: !1,
    md: !0
  }), g = "h-14 px-4 bg-gray-dark", x = "h-14 px-4";
  l.useEffect(() => {
    n(t.map((p, S) => ({
      ...p,
      place: S,
      link: `../user/${p.account}`
    })))
  }, [t, h]);
  const [f, j] = l.useState({}), [m, _] = l.useState({});
  l.useEffect(() => {
    (async () => {
      const S = {},
        v = {};
      for (const b of t) try {
        if (b.account in f) continue;
        const E = await Ws(Et, {
          address: b.account,
          chainId: 1
        });
        S[b.account] = E, E && (v[E] = await fn(Et, {
          name: xn(b.account),
          chainId: 1
        }))
      } catch {
        continue
      }
      _(b => ({
        ...b,
        ...v
      })), j(b => ({
        ...b,
        ...S
      }))
    })()
  }, [t]), l.useEffect(() => {
    r && r({
      offset: 0,
      limit: 10,
      sort_by: a || "",
      sort_order: d === T.ASC
    })
  }, [a, d]);
  const y = p => {
      p === a ? u(d === T.ASC ? T.DESC : T.ASC) : (c(p), u(T.DESC))
    },
    N = [{
      title: "User",
      headerClass: `${g} text-left`,
      dataClass: `${x} text-left`,
      render: p => {
        const S = p.account && f[p.account] && m[f[p.account]] ? e.jsx("img", {
          className: "w-6 h-6 rounded-full",
          src: m[f[p.account]],
          alt: "avatar"
        }) : e.jsx(ls, {
          size: 24,
          address: p.account
        });
        return e.jsxs("div", {
          className: "flex items-center gap-x-2",
          children: [e.jsx(X, {
            color: i.blue[400],
            children: p.place + 1
          }), S, e.jsx(C, {
            color: i.gray[200],
            children: f[p.account] ? f[p.account] : h ? p.account : nt(p.account)
          })]
        })
      }
    }, {
      title: e.jsx(U, {
        title: "Swap Volume",
        handleSortingToggle: () => y(He.Volume),
        sorting: a === He.Volume ? d : void 0
      }),
      headerClass: `${g} text-right`,
      dataClass: `${x} text-right`,
      render: p => e.jsx("div", {
        children: e.jsx("div", {
          className: "flex justify-end gap-1",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: p.volume,
              singleLetterNotation: !0
            })]
          })
        })
      })
    }, {
      title: e.jsx(U, {
        title: "Positions Created",
        handleSortingToggle: () => y(He.Positions),
        sorting: a === He.Positions ? d : void 0
      }),
      headerClass: `${g} text-right`,
      dataClass: `${x} text-right`,
      render: p => e.jsx("div", {
        children: e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(C, {
            color: i.gray[200],
            children: e.jsx(k, {
              num: p.positions,
              singleLetterNotation: !0,
              hideDecimals: !0
            })
          })
        })
      })
    }, {
      title: e.jsx(U, {
        title: "Swaps",
        handleSortingToggle: () => y(He.Swaps),
        sorting: a === He.Swaps ? d : void 0
      }),
      headerClass: `${g} text-right pl-2`,
      dataClass: `${x} text-right pl-2`,
      render: p => e.jsx("div", {
        children: e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(C, {
            color: i.gray[200],
            children: e.jsx(k, {
              num: p.swaps,
              singleLetterNotation: !0,
              hideDecimals: !0
            })
          })
        })
      })
    }],
    w = {
      tableClass: "w-full overflow-y-auto",
      tbodyClass: "",
      headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-400 text-[14px] font-regular",
      dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer"
    };
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-10 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "Loading..."
      })
    }) : e.jsxs("div", {
      className: "overflow-x-auto sm:no-scrollbar  ",
      children: [e.jsx("div", {
        className: "bg-gray-dark py-5",
        children: t && t.length > 0 ? e.jsx("div", {
          className: "flex flex-row justify-between gap-x-6 px-2 my-2 overflow-scroll no-scrollbar ",
          children: t.map((p, S) => e.jsxs(pe, {
            to: `../user/${p.account}`,
            className: "flex flex-col items-center gap-2",
            children: [e.jsx(ls, {
              size: 60,
              address: p.account
            }), e.jsx(C, {
              color: i.gray[400],
              children: f[p.account] ? xo(f[p.account]) : nt(p.account)
            })]
          }, S))
        }) : e.jsx(e.Fragment, {})
      }), e.jsx(Ue, {
        headers: N,
        config: w,
        data: o
      })]
    })
  })
}

function Al() {
  const [n, a] = l.useState(), [c, d] = l.useState(), [u, h] = l.useState(), [g, x] = l.useState(), [f, j] = l.useState(!1), [m, _] = l.useState(!1), [y, N] = l.useState(!0), [w, p] = l.useState(!0), {
    currentChainInfo: S
  } = R(), [v, b] = l.useState(), {
    data: E
  } = Y("cush_analyticsProtocolOverview", [], {}), [A, V] = l.useState({
    offset: 0,
    limit: 10,
    sort_by: "volume",
    sort_order: !1
  }), {
    data: $,
    isFetching: B
  } = Y("cush_topPools", [{
    fee_tiers: [],
    result_offset: 0,
    result_size: 10,
    sort_by: ce.Volume7D,
    sort_order: !1
  }], {}), {
    data: I,
    isFetching: Q
  } = Y("cush_searchTopTokens", [{
    fee_tiers: [],
    result_offset: 0,
    sort_by: "tvl",
    result_size: 10,
    sort_order: !1
  }], {}), {
    data: H,
    isFetching: Z
  } = Y("cush_topPositions", [{
    result_offset: 0,
    result_size: 10,
    sort_by: "create_time",
    sort_order: !1
  }], {}), {
    data: P,
    isFetching: G
  } = Y("cush_topUsers", [A], {});
  l.useEffect(() => {
    B || Q || Z || G ? document.body.style.cursor = "progress" : document.body.style.cursor = "auto"
  }, [B, Q, Z, G]), l.useEffect(() => {
    E && (b(E.positions.positions_created_24h), q(E))
  }, [E]), l.useEffect(() => {
    $ && a($.pools)
  }, [$]), l.useEffect(() => {
    I && h(I.results)
  }, [I]), l.useEffect(() => {
    H && d(H)
  }, [H]);
  const q = Me => {
      const it = [];
      it.push({
        itemTitle: "TVL",
        itemValue: e.jsx(k, {
          num: Me.tvl_usd,
          singleLetterNotation: !0
        }),
        simbol: "$",
        itemChange: Me.tvl_change_usd
      }), it.push({
        itemTitle: "New Positions 24H",
        itemValue: e.jsx(k, {
          num: Me.positions.positions_created_24h,
          singleLetterNotation: !0,
          hideDecimals: !0
        }),
        itemChange: Me.positions.percent_change
      }), it.push({
        itemTitle: "Transactions 24H",
        itemValue: e.jsx(k, {
          num: Me.protocol_swaps.swap_count_24h,
          singleLetterNotation: !0,
          hideDecimals: !0
        }),
        itemChange: Me.protocol_swaps.percent_change
      }), it.push({
        itemTitle: "Volume 24H",
        itemValue: e.jsx(k, {
          num: Me.total_volume_usd,
          singleLetterNotation: !0
        }),
        itemChange: Me.volume_change_usd,
        simbol: "$"
      }), it.push({
        itemTitle: "Fees 24H",
        itemValue: e.jsx(k, {
          num: Me.total_fees_usd,
          singleLetterNotation: !0
        }),
        simbol: "$",
        itemChange: Me.fees_change_usd
      }), x(it)
    },
    {
      isMenuCollapsed: W
    } = Pe(),
    [ve, Ne] = l.useState(te.DAY_1),
    {
      isMobile: ue
    } = de(),
    ye = ue ? Pt : gt,
    me = ue ? fs : mt,
    je = ue ? bt : wt,
    K = ue ? Ct : At,
    D = je - 2 * ((ue ? Ot : _t) + ae),
    ee = window.innerWidth - Mt - me - Re - 2 * (ye + K + ae),
    ke = window.innerWidth - Ie - me - Re - 2 * (ye + K + ae),
    tt = window.innerWidth - 2 * (ye + K + ae),
    re = J({
      base: !1,
      md: !0
    }),
    {
      width: se
    } = vt(),
    ys = se >= 1167,
    Io = 140,
    Po = l.useMemo(() => Ce(u, 10, !1, !1, !0, 0), [u]),
    Mo = l.useMemo(() => Ce(c && c.positions, 10, !1, !1, !0, 0), [c]),
    Ao = l.useMemo(() => Ce(n, 10, !1, !1, !0, 0), [n]),
    Oo = l.useMemo(() => Ce(P, 10, !1, !1, !1, 0) + Io, [P]);
  return e.jsxs("div", {
    className: "flex flex-col gap-4  ",
    children: [e.jsx(Ye, {
      pageTitle: "Ukia Analytics | DeFi Research Platform"
    }), e.jsx(et, {
      pageDescription: `Insights on ${S.name}’s liquidity pools. View pools by TVL, volume, fees, transactions, and more on DeFi’s best analytics platform.`
    }), e.jsx(Ut, {
      overviewItems: g,
      children: e.jsx(Cl, {
        height: D,
        width: re ? ys ? W ? ke : ee : ke + Ie : tt,
        setTimeIncrement: Ne,
        timeIncrement: ve
      })
    }), e.jsx(we, {
      id: "overview_top_tokens",
      isLoading: u === void 0,
      height: w ? De : Po,
      header: e.jsx(_e, {
        title: "Top Tokens",
        onClick: () => p(!w),
        isCollapsed: w
      }),
      children: e.jsx(e.Fragment, {
        children: u && e.jsx(No, {
          tokensData: u,
          totalTokensResultSize: u.length,
          disableSort: !0,
          showViewMore: !0
        })
      })
    }), e.jsx(we, {
      id: "overview_recent_positions",
      isLoading: c === void 0,
      height: y ? De : Mo,
      header: e.jsx(_e, {
        title: "Recent Positions",
        info: `${v} new in the last 24 hr`,
        onClick: () => N(!y),
        isCollapsed: y
      }),
      children: e.jsx(e.Fragment, {
        children: c && e.jsx(_o, {
          positionsData: c.positions,
          pageSize: 10,
          totalNumberOfPositions: c.positions.length,
          showViewMore: !0,
          disableSort: !0
        })
      })
    }), e.jsx(we, {
      id: "overview_top_pools",
      isLoading: n === void 0,
      height: f ? De : Ao,
      header: e.jsx(_e, {
        title: "Top Pools",
        onClick: () => j(!f),
        isCollapsed: f
      }),
      children: e.jsx(e.Fragment, {
        children: n && e.jsx(Qs, {
          poolsData: n,
          totalNumberOfPools: n.length,
          pageSize: 10,
          showViewMore: !0,
          disableSort: !0
        })
      })
    }), e.jsx(we, {
      id: "overview_whale_watch",
      isLoading: P === void 0,
      height: m ? De : Oo,
      header: e.jsx(_e, {
        title: "Whale Watch 7D",
        onClick: () => _(!m),
        isCollapsed: m
      }),
      children: e.jsx(e.Fragment, {
        children: P && e.jsx(Ml, {
          topUsers: P,
          totalNumberOfUsers: P.length,
          setSearchFilterOpts: V,
          searchFilterOpts: A
        })
      })
    })]
  })
}
const Zs = ({
  containerClasses: s,
  lineClasses: t
}) => e.jsx("div", {
  className: s,
  children: e.jsx("div", {
    className: `w-full y-1 h-[1px] bg-gray-700 ${t}`
  })
});

function Ol(s) {
  const {
    onChange: t,
    value: r
  } = s;
  return e.jsx(ne, {
    id: "Search Dropdown Input",
    render: () => e.jsx("input", {
      className: "flex flex-1 placeholder:text-gray-300 focus:outline-0 placeholder:text-[14px] placeholder:font-normal rounded-[16px] border-[1px] text-white m-2 py-1 px-2",
      style: {
        backgroundColor: i.gray[900],
        borderColor: i.gray[700]
      },
      value: r,
      onChange: o => t(o.target.value),
      placeholder: "Select Tokens"
    })
  })
}
const pt = s => {
    const {
      tokensSelected: t,
      setTokensSelected: r,
      tokenToKeep: o,
      customHeight: n
    } = s, a = J({
      base: !1,
      md: !0
    }), [c, d] = l.useState(!1), [u, h] = l.useState([]), {
      currentChainInfo: g
    } = R();
    return l.useEffect(() => {
      const x = window.OkuTokenList.tokens.filter(f => f.chainId === g.id && f.name !== " ");
      h(x)
    }, [g]), e.jsx("div", {
      className: "relative",
      children: e.jsx(Dt, {
        modalContent: e.jsx("div", {
          children: e.jsx($l, {
            setTokensSelected: r,
            setShowModal: d,
            tokensSelected: t,
            defaultTokenList: u,
            tokenToKeep: o,
            customHeight: n
          })
        }),
        buttonContent: t.length > 0 ? e.jsxs("div", {
          className: "flex gap-2",
          children: [e.jsxs("div", {
            className: `flex h-4 ${t[1]?"w-7":"w-4"}  relative `,
            children: [e.jsx("img", {
              className: "rounded-full h-4 absolute ",
              src: t[0].logoURI,
              alt: t[0].symbol
            }), t[1] ? e.jsx("img", {
              className: "rounded-full h-4 w-4 absolute left-3",
              src: t[1].logoURI,
              alt: t[1].symbol
            }) : e.jsx(e.Fragment, {})]
          }), e.jsx(C, {
            color: i.blue[300],
            children: "Tokens"
          })]
        }) : e.jsx(C, {
          color: i.gray[200],
          children: "Tokens"
        }),
        buttonStyle: {
          backgroundColor: i.gray.dark,
          borderWidth: "1px",
          borderColor: i.gray[700],
          width: a ? 140 : 100,
          paddingTop: a ? 12 : 8,
          paddingBottom: a ? 12 : 8,
          paddingLeft: a ? 12 : 10,
          paddingRight: a ? 12 : 10,
          height: 33,
          borderRadius: 6
        },
        showCarot: !0,
        showModal: c,
        setShowModal: d
      })
    })
  },
  $l = s => {
    const {
      setTokensSelected: t,
      setShowModal: r,
      tokensSelected: o,
      defaultTokenList: n,
      tokenToKeep: a,
      customHeight: c
    } = s, [d, u] = l.useState(""), [h, g] = l.useState(n), {
      currentChainInfo: x
    } = R(), f = m => {
      u(m), m.length >= 2 ? g(j(m, window.OkuTokenList.tokens, x.id)) : g(n)
    };
    l.useEffect(() => {
      g(n.filter(m => !o.map(_ => _.address).includes(m.address)))
    }, [o]);
    const j = (m, _, y) => _.filter(({
      name: w,
      symbol: p,
      address: S,
      chainId: v
    }) => v.toString().toLowerCase() === y.toString().toLowerCase() && (p.toLowerCase().includes(m.toLowerCase()) || w.toLowerCase().includes(m.toLowerCase()) || S.toLowerCase().includes(m.toLowerCase()))).sort((w, p) => {
      const S = w.symbol.toLowerCase().indexOf(m.toLowerCase()),
        v = w.name.toLowerCase().indexOf(m.toLowerCase()),
        b = w.address.toLowerCase().indexOf(m.toLowerCase()),
        E = S === -1 ? v === -1 ? b : v : S,
        A = p.symbol.toLowerCase().indexOf(m.toLowerCase()),
        V = p.name.toLowerCase().indexOf(m.toLowerCase()),
        $ = p.address.toLowerCase().indexOf(m.toLowerCase());
      return E - (A === -1 ? V === -1 ? $ : V : A)
    });
    return e.jsxs("div", {
      className: "relative right-32 md:right-60 flex flex-col border-[0.4px] rounded-[6px] w-56 md:w-96 mt-1",
      style: {
        backgroundColor: i.gray[900],
        borderColor: i.gray[700],
        maxHeight: c || "450px"
      },
      children: [e.jsxs("div", {
        className: "flex justify-between align-center p-3 cursor-pointer",
        onClick: () => {
          t([]), r(!1)
        },
        children: [e.jsx(X, {
          children: "Select token"
        }), e.jsx(X, {
          color: i.blue[400],
          children: "Clear all"
        })]
      }), e.jsx(Zs, {
        containerClasses: "mb-1 mx-3"
      }), e.jsx(Ol, {
        onChange: f,
        value: d
      }), o.map((m, _) => e.jsx(Cr, {
        onClick: () => {
          (a === void 0 || a && m.address !== a.address) && t(o.filter(y => y.address !== m.address)), r(!1)
        },
        thisToken: m,
        isSelectedToken: !0,
        tokensSelected: o
      }, _)), e.jsx(gn, {
        height: 300,
        itemCount: h.length,
        itemSize: 50,
        width: "100%",
        children: ({
          index: m,
          style: _
        }) => e.jsx("div", {
          style: _,
          children: e.jsx(Cr, {
            onClick: () => {
              o.length < 2 && t([...o, h[m]]), r(!1)
            },
            thisToken: h[m],
            isSelectedToken: !1,
            tokensSelected: o
          }, m)
        })
      })]
    })
  },
  Cr = s => {
    const {
      onClick: t,
      thisToken: r,
      isSelectedToken: o,
      tokensSelected: n
    } = s, [a, c] = l.useState(!1), d = !o && n.length >= 2;
    return e.jsxs("button", {
      onClick: t,
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      className: "flex justify-between align-center p-3 w-full",
      style: {
        cursor: d ? "default" : "pointer",
        backgroundColor: a && !d ? i.gray[700] : ""
      },
      children: [e.jsxs("div", {
        className: "flex align-center gap-1",
        children: [e.jsx("div", {
          className: "h-5 w-5 rounded-full",
          children: e.jsx("img", {
            className: "rounded-full",
            src: r.logoURI,
            alt: r.symbol
          })
        }), e.jsxs("div", {
          className: "flex flex-col gap-y-1 items-start",
          children: [e.jsx(C, {
            color: d ? i.gray[400] : i.gray[100],
            children: r.name
          }), e.jsx(Fe, {
            color: i.gray[400],
            children: r.symbol
          })]
        })]
      }), e.jsx("div", {
        className: "flex text-right align-center",
        children: o ? e.jsx(z, {
          style: {
            color: i.green[300],
            strokeWidth: 1.5
          },
          src: "https://assets.oku.trade/checkIcon.svg"
        }) : e.jsx(e.Fragment, {})
      })]
    })
  };

function Fl() {
  const [t, r] = l.useState(0), {
    currentChainInfo: o
  } = R(), [n, a] = l.useState([]), [c, d] = l.useState([]), [u, h] = l.useState({
    fee_tiers: [],
    result_offset: 0,
    result_size: 50,
    sort_by: ce.Volume7D,
    sort_order: !1
  }), [g, x] = l.useState(""), {
    data: f,
    isFetching: j
  } = Y("cush_search", [g, u]);
  l.useEffect(() => {
    j ? document.body.style.cursor = "progress" : document.body.style.cursor = "auto"
  }, [j]), l.useEffect(() => {
    f && (r(f.result_size), a(f.pools))
  }, [f]), l.useEffect(() => {
    const w = c.map(p => p.address);
    x(w.join("-"))
  }, [c]);
  const m = 6,
    _ = `Pools on ${o.name} | Ukia Analytics`,
    y = `Insights on ${o.name}’s liquidity pools. View pools by TVL, volume, fees, transactions, and more on DeFi’s best analytics platform.`,
    N = l.useMemo(() => Ce(n, n && n.length < 50 ? n == null ? void 0 : n.length : 50, !0, !(f && (f == null ? void 0 : f.result_size) < 50), !1, m), [n, f]);
  return e.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [e.jsx(Ye, {
      pageTitle: _
    }), e.jsx(et, {
      pageDescription: y
    }), e.jsx(we, {
      id: "positions_value",
      isLoading: n === void 0,
      height: N,
      header: e.jsx(_e, {
        title: "Pools"
      }),
      children: e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
          className: "flex flex-row align-center justify-end p-3 gap-5 w-full h-14 ",
          children: e.jsx(pt, {
            setTokensSelected: d,
            tokensSelected: c
          })
        }), n && e.jsx(e.Fragment, {
          children: e.jsx(Qs, {
            pageSize: 50,
            poolsData: n,
            totalNumberOfPools: t,
            setSearchFilterOpts: h,
            isPoolsPage: !0
          })
        })]
      })
    })]
  })
}

function Rl() {
  const [s, t] = l.useState(), [r, o] = l.useState(0), [n, a] = l.useState({
    fee_tiers: [],
    result_offset: 0,
    sort_by: "tvl",
    result_size: Ke,
    sort_order: !1
  }), {
    currentChainInfo: c,
    chain: d
  } = R(), {
    data: u,
    isFetching: h
  } = Y("cush_searchTopTokens", [n]);
  l.useEffect(() => {
    u && (o(u.result_size), t(u.results))
  }, [u]), l.useEffect(() => {
    a({
      fee_tiers: [],
      result_offset: 0,
      sort_by: "tvl",
      result_size: Ke,
      sort_order: !1
    })
  }, [d]), l.useEffect(() => {
    h ? document.body.style.cursor = "progress" : document.body.style.cursor = "auto"
  }, [h]);
  const g = `Top Tokens on ${c.name} | Ukia Analytics`,
    x = `Insights on ${c.name}’s top tokens. View prices changes, volume, TVL and more on DeFi’s best analytics platform.`,
    f = l.useMemo(() => Ce(s, s && s.length < Ke ? s == null ? void 0 : s.length : Ke, !1, !(u && (u == null ? void 0 : u.result_size) < Ke), !1, 6), [s, u]);
  return e.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [e.jsx(Ye, {
      pageTitle: g
    }), e.jsx(et, {
      pageDescription: x
    }), e.jsx(we, {
      id: "pools_top_pools",
      isLoading: s === void 0,
      height: f,
      header: e.jsx(_e, {
        title: "Tokens"
      }),
      children: e.jsx(e.Fragment, {
        children: s && e.jsx(No, {
          tokensData: s,
          totalTokensResultSize: r,
          setSearchFilterOpts: a
        })
      })
    })]
  })
}
const is = s => {
    const {
      feeTier: t,
      setFeeTier: r
    } = s, [o, n] = l.useState(!1), a = J({
      base: !1,
      md: !0
    });
    return e.jsx("div", {
      className: "relative",
      children: e.jsx(Dt, {
        modalContent: e.jsx(Ul, {
          setFeeTierSelected: r,
          setShowModal: n,
          feeTierSelected: t
        }),
        buttonContent: t ? e.jsxs(C, {
          color: i.blue[300],
          children: [t, "%"]
        }) : e.jsx(C, {
          color: i.gray[200],
          children: "Fee Tier"
        }),
        buttonStyle: {
          backgroundColor: i.gray.dark,
          borderWidth: "1px",
          borderColor: i.gray[700],
          width: a ? 140 : 100,
          paddingTop: a ? 12 : 8,
          paddingBottom: a ? 12 : 8,
          paddingLeft: a ? 12 : 10,
          paddingRight: a ? 12 : 10,
          height: 33,
          borderRadius: 6
        },
        showCarot: !0,
        showModal: o,
        setShowModal: n
      })
    })
  },
  Ul = s => {
    const {
      setFeeTierSelected: t,
      setShowModal: r,
      feeTierSelected: o
    } = s;
    return e.jsxs("div", {
      className: "relative right-4 md:right-1 flex flex-col border-[0.4px] rounded-[6px] w-28 lg:w-36 mt-1",
      style: {
        backgroundColor: i.gray[900],
        borderColor: i.gray[700]
      },
      children: [e.jsx("div", {
        className: "flex justify-end p-3 cursor-pointer",
        onClick: () => {
          t(void 0), r(!1)
        },
        children: e.jsx(X, {
          color: i.blue[400],
          children: "Clear all"
        })
      }), e.jsx(Zs, {
        containerClasses: "mb-1 mx-3"
      }), e.jsx(Kt, {
        onClick: () => {
          t(Oe.FEE_001), r(!1)
        },
        title: Oe.FEE_001,
        feeTierSelected: o
      }), e.jsx(Kt, {
        onClick: () => {
          t(Oe.FEE_005), r(!1)
        },
        title: Oe.FEE_005,
        feeTierSelected: o
      }), e.jsx(Kt, {
        onClick: () => {
          t(Oe.FEE_03), r(!1)
        },
        title: Oe.FEE_03,
        feeTierSelected: o
      }), e.jsx("div", {
        className: "mb-1",
        children: e.jsx(Kt, {
          onClick: () => {
            t(Oe.FEE_1), r(!1)
          },
          title: Oe.FEE_1,
          feeTierSelected: o
        })
      })]
    })
  },
  Kt = s => {
    const {
      onClick: t,
      title: r,
      feeTierSelected: o
    } = s, [n, a] = l.useState(!1);
    return e.jsxs("button", {
      onClick: t,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      className: "flex justify-between items-center w-full h-3 p-3",
      style: {
        backgroundColor: n ? Se(i.gray[900]) : i.gray[900]
      },
      children: [e.jsx(X, {
        children: `${r}%`
      }), o === r ? e.jsx(z, {
        style: {
          color: i.green[300],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/checkIcon.svg"
      }) : e.jsx(e.Fragment, {})]
    })
  },
  So = s => {
    const {
      positionStatus: t,
      setPositionStatus: r
    } = s, [o, n] = l.useState(!1), a = J({
      base: !1,
      md: !0
    });
    return e.jsx("div", {
      className: "relative",
      children: e.jsx(Dt, {
        modalContent: e.jsx(Vl, {
          setPositionStatusSelected: r,
          setShowModal: n,
          positionStatusSelected: t
        }),
        buttonContent: t ? e.jsx(C, {
          color: i.blue[300],
          children: io(t)
        }) : e.jsx(C, {
          color: i.gray[200],
          children: "Status"
        }),
        buttonStyle: {
          backgroundColor: i.gray.dark,
          borderWidth: "1px",
          borderColor: i.gray[700],
          width: a ? 140 : 100,
          paddingTop: a ? 12 : 8,
          paddingBottom: a ? 12 : 8,
          paddingLeft: a ? 12 : 10,
          paddingRight: a ? 12 : 10,
          height: 33,
          borderRadius: 6
        },
        showCarot: !0,
        showModal: o,
        setShowModal: n
      })
    })
  },
  Vl = s => {
    const {
      setPositionStatusSelected: t,
      setShowModal: r,
      positionStatusSelected: o
    } = s;
    return e.jsxs("div", {
      className: "relative right-1 flex flex-col border-[0.4px] rounded-[6px] w-36 mt-1",
      style: {
        backgroundColor: i.gray[900],
        borderColor: i.gray[700]
      },
      children: [e.jsx("div", {
        className: "flex justify-end p-3 cursor-pointer",
        onClick: () => {
          t(void 0), r(!1)
        },
        children: e.jsx(X, {
          color: i.blue[400],
          children: "Clear all"
        })
      }), e.jsx(Zs, {
        containerClasses: "mb-1 mx-3"
      }), e.jsx(ks, {
        onClick: () => {
          t(Le.IN_RANGE), r(!1)
        },
        title: Le.IN_RANGE,
        positionStatusSelected: o
      }), e.jsx(ks, {
        onClick: () => {
          t(Le.OUT_OF_RANGE), r(!1)
        },
        title: Le.OUT_OF_RANGE,
        positionStatusSelected: o
      }), e.jsx("div", {
        className: "mb-1",
        children: e.jsx(ks, {
          onClick: () => {
            t(Le.CLOSED), r(!1)
          },
          title: Le.CLOSED,
          positionStatusSelected: o
        })
      })]
    })
  },
  ks = s => {
    const {
      onClick: t,
      title: r,
      positionStatusSelected: o
    } = s, [n, a] = l.useState(!1);
    return e.jsxs("button", {
      onClick: t,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      className: "flex justify-between items-center w-full h-3 p-3",
      style: {
        backgroundColor: n ? Se(i.gray[900]) : i.gray[900]
      },
      children: [e.jsx(X, {
        children: io(r)
      }), o === r ? e.jsx(z, {
        style: {
          color: i.green[300],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/checkIcon.svg"
      }) : e.jsx(e.Fragment, {})]
    })
  };

function Hl() {
  const [t, r] = l.useState(), {
    currentChainInfo: o
  } = R(), [n, a] = l.useState(0), [c, d] = l.useState(), [u, h] = l.useState(), [g, x] = l.useState([]), [f, j] = l.useState(""), [m, _] = l.useState(as.CREATE_TIME), [y, N] = l.useState(T.DESC), [w, p] = l.useState({
    result_offset: 0,
    fee_tiers: [],
    result_size: 50,
    sort_by: m,
    sort_order: y === T.ASC,
    status: ""
  }), {
    data: S,
    isFetching: v
  } = Y("cush_searchPositions", [f, w]);
  l.useEffect(() => {
    x([]), d(void 0), h(void 0), _(as.CREATE_TIME)
  }, [o]), l.useEffect(() => {
    p({
      result_offset: 0,
      fee_tiers: u ? [u * 1e4] : [],
      result_size: 50,
      sort_by: m,
      sort_order: y === T.ASC,
      status: c || ""
    })
  }, [c]), l.useEffect(() => {
    p({
      result_offset: 0,
      fee_tiers: u ? [u * 1e4] : [],
      result_size: 50,
      sort_by: m,
      sort_order: y === T.ASC,
      status: c || ""
    })
  }, [u]), l.useEffect(() => {
    S && (r(S.positions), a(S.result_size))
  }, [S]), l.useEffect(() => {
    const V = g.map($ => $.address);
    j(V.join("-"))
  }, [g]), l.useEffect(() => {
    v ? document.body.style.cursor = "progress" : document.body.style.cursor = "auto"
  }, [v]);
  const b = `LP Positions on ${o.name} | Ukia Analytics`,
    E = `Insights on ${o.name}'s liquidity pools. View pools by TVL, volume, fees, transactions, and more on DeFi’s best analytics platform.`,
    A = l.useMemo(() => Ce(t, t && t.length < 50 ? t == null ? void 0 : t.length : 50, !0, !(S && S.result_size <= 50), !1, 0), [t, S]);
  return e.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [e.jsx(Ye, {
      pageTitle: b
    }), e.jsx(et, {
      pageDescription: E
    }), e.jsx(we, {
      id: "positions_value",
      isLoading: t === void 0,
      height: A,
      header: e.jsx(_e, {
        title: "Positions"
      }),
      children: e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
          className: "flex flex-row align-center justify-end p-3 gap-1 md:gap-5 w-full h-14 ",
          children: [e.jsx(So, {
            positionStatus: c,
            setPositionStatus: d
          }), e.jsx(pt, {
            setTokensSelected: x,
            tokensSelected: g
          }), e.jsx(is, {
            feeTier: u,
            setFeeTier: h
          })]
        }), t && e.jsx(_o, {
          pageSize: 50,
          positionsData: t,
          totalNumberOfPositions: n,
          setSearchUserPositionFilterOpts: p,
          positionStatusSelected: c,
          sortingOrder: y,
          sortingProperty: m,
          setSortingOrder: N,
          setSortingProperty: _
        })]
      })
    })]
  })
}
const Bl = s => {
    const {
      transactionType: t,
      setTransactionType: r
    } = s, [o, n] = l.useState(!1);
    return e.jsx("div", {
      className: "relative",
      children: e.jsx(Dt, {
        modalContent: e.jsx(zl, {
          setTransactionType: r,
          setShowModal: n,
          transactionTypeSelected: t
        }),
        buttonContent: e.jsx(C, {
          color: i.gray[200],
          children: t
        }),
        buttonStyle: {
          backgroundColor: i.gray[900],
          borderWidth: "1px",
          borderColor: i.gray[700],
          width: 100,
          paddingLeft: 8,
          height: 27,
          borderRadius: 6
        },
        showCarot: !0,
        showModal: o,
        setShowModal: n
      })
    })
  },
  zl = s => {
    const {
      setTransactionType: t,
      setShowModal: r,
      transactionTypeSelected: o
    } = s;
    return e.jsxs("div", {
      className: "relative right-11 flex flex-col border-[0.4px] rounded-[6px] w-36 mt-1",
      style: {
        backgroundColor: i.gray[900],
        borderColor: i.gray[700]
      },
      children: [e.jsx(Nt, {
        onClick: () => {
          t(oe.ALL), r(!1)
        },
        title: oe.ALL,
        transactionTypeSelected: o
      }), e.jsx(Nt, {
        onClick: () => {
          t(oe.MINT), r(!1)
        },
        title: oe.MINT,
        transactionTypeSelected: o
      }), e.jsx(Nt, {
        onClick: () => {
          t(oe.SWAP), r(!1)
        },
        title: oe.SWAP,
        transactionTypeSelected: o
      }), e.jsx(Nt, {
        onClick: () => {
          t(oe.BURN), r(!1)
        },
        title: oe.BURN,
        transactionTypeSelected: o
      }), e.jsx(Nt, {
        onClick: () => {
          t(oe.COLLECT), r(!1)
        },
        title: oe.COLLECT,
        transactionTypeSelected: o
      })]
    })
  },
  Nt = s => {
    const {
      onClick: t,
      title: r,
      transactionTypeSelected: o
    } = s, [n, a] = l.useState(!1);
    return e.jsxs("button", {
      onClick: t,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      className: "flex justify-between items-center w-full h-6 px-5 py-4",
      style: {
        backgroundColor: n ? Se(i.gray[900]) : i.gray[900]
      },
      children: [e.jsx(X, {
        children: r
      }), o === r ? e.jsx(z, {
        style: {
          color: i.green[300],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/checkIcon.svg"
      }) : e.jsx(e.Fragment, {})]
    })
  };

function lt(s, t, r) {
  var o;
  return [(o = Xe[r].blockExplorers) == null ? void 0 : o.default.url, s, t].join("/")
}

function Js(s) {
  const t = Xe[s].blockExplorers;
  return t ? t.default.name : "UNDEFINED"
}
const Wl = s => {
    const {
      xData: t,
      yData: r,
      style: o,
      isLoading: n,
      token0: a,
      token1: c
    } = s, d = 10, [u, h] = l.useState(!1), g = Math.floor(Number(o == null ? void 0 : o.width) / d), x = t[t.length - g], f = l.useRef(null), {
      echart: j
    } = at({
      chartRef: f,
      options: {
        animationDuration: 300,
        backgroundColor: i.gray.dark,
        dataZoom: [{
          minValueSpan: 10,
          startValue: x || void 0,
          type: "inside"
        }],
        grid: {
          bottom: 20,
          left: 10,
          right: 10,
          top: 50
        },
        legend: {
          data: [{
            icon: "circle",
            itemStyle: {
              color: i.multi_tvl_chart.line0
            },
            name: "line1"
          }, {
            icon: "circle",
            itemStyle: {
              color: i.multi_tvl_chart.line1
            },
            name: "line2"
          }, {
            icon: "circle",
            itemStyle: {
              color: i.multi_tvl_chart.line2
            },
            name: "line3"
          }],
          formatter: function (m) {
            return `${m==="line1"?"Total TVL":m==="line2"?a:c}`
          },
          left: 0,
          orient: "vertical",
          textStyle: {
            color: i.gray[200]
          }
        },
        series: [{
          areaStyle: {
            color: new Je(0, .4, 0, 1, [{
              color: i.multi_tvl_chart.shadow0,
              offset: 0
            }, {
              color: i.black,
              offset: 1
            }]),
            opacity: .8
          },
          data: [],
          emphasis: {
            focus: "series"
          },
          lineStyle: {
            color: i.multi_tvl_chart.line0
          },
          name: "line1",
          showSymbol: !1,
          step: !1,
          type: "line"
        }, {
          areaStyle: {
            color: new Je(0, .4, 0, 1, [{
              color: i.multi_tvl_chart.shadow1,
              offset: 0
            }, {
              color: i.black,
              offset: 1
            }]),
            opacity: .8
          },
          data: [],
          emphasis: {
            focus: "series"
          },
          lineStyle: {
            color: i.multi_tvl_chart.line1
          },
          name: "line2",
          showSymbol: !1,
          step: !1,
          type: "line"
        }, {
          areaStyle: {
            color: new Je(0, .4, 0, 1, [{
              color: i.multi_tvl_chart.shadow2,
              offset: 0
            }, {
              color: i.black,
              offset: 1
            }]),
            opacity: .8
          },
          data: [],
          emphasis: {
            focus: "series"
          },
          lineStyle: {
            color: i.multi_tvl_chart.line2
          },
          name: "line3",
          showSymbol: !1,
          step: !1,
          type: "line"
        }],
        tooltip: {
          axisPointer: {
            crossStyle: {},
            lineStyle: {}
          },
          formatter: function (m) {
            return ot(e.jsxs("div", {
              children: [e.jsx("span", {
                className: "text-gray-500 text-sm font-normal",
                children: m[0].axisValueLabel
              }), " ", e.jsx("br", {}), e.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [e.jsxs("div", {
                  className: "flex gap-x-2 items-center",
                  children: [e.jsx(z, {
                    style: {
                      color: i.multi_tvl_chart.line0
                    },
                    src: "https://assets.oku.trade/circleIcon.svg"
                  }), "Total TVL $", k({
                    num: m[0].value,
                    stringOut: !0,
                    singleLetterNotation: !0
                  }), " "]
                }), e.jsxs("div", {
                  className: "flex gap-x-2 items-center",
                  children: [e.jsx(z, {
                    style: {
                      color: i.multi_tvl_chart.line1
                    },
                    src: "https://assets.oku.trade/circleIcon.svg"
                  }), " ", "$", k({
                    num: m[1].value,
                    stringOut: !0,
                    singleLetterNotation: !0
                  }), " ", a || "", " "]
                }), e.jsxs("div", {
                  className: "flex gap-x-2 items-center",
                  children: [e.jsx(z, {
                    style: {
                      color: i.multi_tvl_chart.line2
                    },
                    src: "https://assets.oku.trade/circleIcon.svg"
                  }), " ", "$", k({
                    num: m[2].value,
                    stringOut: !0,
                    singleLetterNotation: !0
                  }), " ", c || "", " "]
                })]
              })]
            }))
          },
          trigger: "axis"
        },
        xAxis: {
          axisLabel: {
            color: i.gray[200]
          },
          axisLine: {
            show: !1
          },
          axisTick: {
            show: !1
          },
          boundaryGap: !1,
          data: [],
          type: "category"
        },
        yAxis: {
          axisLabel: {
            align: "right",
            color: i.gray[200],
            formatter: function (m) {
              return `$${k({num:m,stringOut:!0,singleLetterNotation:!0})}`
            }
          },
          axisLine: {
            show: !1
          },
          position: "right",
          scale: !0,
          splitLine: {
            show: !1
          },
          type: "value",
          z: 10
        }
      }
    });
    return l.useEffect(() => {
      j && (h(!1), j.setOption({
        dataZoom: [{
          minValueSpan: 10,
          startValue: x || void 0,
          type: "inside"
        }]
      }))
    }, [u]), l.useEffect(() => {
      j && j.setOption({
        xAxis: {
          data: t
        },
        series: [{
          name: "line1",
          data: r.map(m => m[0])
        }, {
          name: "line2",
          data: r.map(m => m[1])
        }, {
          name: "line3",
          data: r.map(m => m[2])
        }]
      })
    }, [r, t, u, j]), l.useEffect(() => {
      j && (n ? j.showLoading("default", {
        color: "white",
        textColor: "white",
        maskColor: "rgba(0,0,0,0.4)"
      }) : j.hideLoading())
    }, [j, n]), l.useEffect(() => {
      j && h(!0)
    }, [x]), e.jsx("div", {
      ref: f,
      onDoubleClick: () => {
        h(!0)
      },
      style: {
        height: "100%",
        maxWidth: o == null ? void 0 : o.width,
        width: o == null ? void 0 : o.width,
        minWidth: o == null ? void 0 : o.width,
        ...o
      }
    })
  },
  Us = s => {
    const {
      xData: t,
      yData: r,
      style: o,
      isLoading: n
    } = s, [a, c] = l.useState(!1), u = Math.floor(Number(o == null ? void 0 : o.width) / 10), h = t[t.length - u], g = l.useRef(null), {
      echart: x
    } = at({
      chartRef: g,
      options: {
        animationDuration: 300,
        backgroundColor: i.gray.dark,
        dataZoom: [{
          minValueSpan: 10,
          startValue: h || void 0,
          type: "inside"
        }],
        grid: {
          bottom: 20,
          left: 10,
          right: 10,
          top: 50
        },
        legend: {
          formatter: function () {
            return "Price"
          },
          icon: "circle",
          itemStyle: {
            color: i.green[400],
            borderColor: i.transparent
          },
          left: 0,
          orient: "vertical",
          textStyle: {
            color: i.gray[200]
          }
        },
        series: [{
          data: [],
          itemStyle: {
            borderColor: i.red[400],
            borderColor0: i.green[400],
            color: i.red[400],
            color0: i.green[400]
          },
          name: "Price",
          type: "candlestick"
        }],
        tooltip: {
          axisPointer: {
            type: "line"
          },
          formatter: function (f) {
            if (f.length === 1) {
              const j = f[0].name,
                m = k({
                  num: f[0].value[2],
                  stringOut: !0,
                  singleLetterNotation: !0
                }),
                _ = k({
                  num: f[0].value[1],
                  stringOut: !0,
                  singleLetterNotation: !0
                }),
                y = k({
                  num: f[0].value[3],
                  stringOut: !0,
                  singleLetterNotation: !0
                }),
                N = k({
                  num: f[0].value[4],
                  stringOut: !0,
                  singleLetterNotation: !0
                });
              return ot(e.jsxs("div", {
                children: [e.jsxs("div", {
                  children: ["$", j]
                }), e.jsxs("div", {
                  children: ["Open $", m]
                }), e.jsxs("div", {
                  children: ["Close $", _]
                }), e.jsxs("div", {
                  children: ["Low $", y]
                }), e.jsxs("div", {
                  children: ["High $", N]
                })]
              }))
            } else return ""
          },
          trigger: "axis"
        },
        xAxis: {
          axisLabel: {
            color: i.gray[200]
          },
          axisLine: {
            show: !1
          },
          axisTick: {
            show: !1
          },
          boundaryGap: !1,
          type: "category"
        },
        yAxis: {
          axisLabel: {
            align: "right",
            color: i.gray[200],
            formatter: function (f) {
              return "$" + k({
                num: f,
                stringOut: !0,
                singleLetterNotation: !0
              })
            }
          },
          axisLine: {
            show: !1
          },
          position: "right",
          scale: !0,
          splitLine: {
            show: !1
          },
          type: "value",
          z: 10
        }
      }
    });
    return l.useEffect(() => {
      x && (c(!1), x.setOption({
        dataZoom: [{
          minValueSpan: 10,
          startValue: h || void 0,
          type: "inside"
        }]
      }))
    }, [a]), l.useEffect(() => {
      x && x.setOption({
        xAxis: {
          data: t
        },
        series: [{
          data: r
        }]
      })
    }, [r, t, a, x]), l.useEffect(() => {
      x && (n ? x.showLoading("default", {
        color: "white",
        textColor: "white",
        maskColor: "rgba(0,0,0,0.4)"
      }) : x.hideLoading())
    }, [n, x]), l.useEffect(() => {
      x && c(!0)
    }, [h]), e.jsx("div", {
      ref: g,
      onDoubleClick: () => {
        c(!0)
      },
      style: {
        height: "100%",
        maxWidth: o == null ? void 0 : o.width,
        width: o == null ? void 0 : o.width,
        minWidth: o == null ? void 0 : o.width,
        ...o
      }
    })
  },
  ko = (s, t, r) => s <= r && r <= t || s >= r && r >= t,
  _r = (s, t, r) => {
    const o = Math.round(s),
      n = o % t,
      a = -887272,
      c = 887272;
    return s <= a || s > c ? r.selected === 0 ? a : c : n >= t / 2 ? o + t - n : o - n
  };

function Nr(s) {
  return qr(s)
}
const St = (s, t) => (s || (s = [0, 0, 0, 0]), t !== void 0 && (s[3] = t), `rgba(${s[0]},${s[1]},${s[2]},${s[3]})`),
  Xs = 1n,
  Yl = 0n,
  Sr = 2n ** 96n,
  Ts = 2n ** 32n,
  Gl = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class Es {
  static mulDivRoundingUp(t, r, o) {
    const n = t * r;
    let a = n / o;
    return n % o !== 0n && (a = a + Xs), a
  }
}
class kr {
  static getAmount0Delta(t, r, o, n) {
    t > r && ([t, r] = [r, t]);
    const a = o << 96n,
      c = r - t;
    return n ? Es.mulDivRoundingUp(Es.mulDivRoundingUp(a, c, r), Xs, t) : a * c / r / t
  }
  static getAmount1Delta(t, r, o, n) {
    return t > r && ([t, r] = [r, t]), n ? Es.mulDivRoundingUp(o, r - t, Sr) : o * (r - t) / Sr
  }
}

function le(s, t) {
  return s * t >> 128n
}
const ie = [BigInt("0xfff97272373d413259a46990580e213a"), BigInt("0xfff2e50f5f656932ef12357cf3c7fdcc"), BigInt("0xffe5caca7e10e4e61c3624eaa0941cd0"), BigInt("0xffcb9843d60f6159c9db58835c926644"), BigInt("0xff973b41fa98c081472e6896dfb254c0"), BigInt("0xff2ea16466c96a3843ec78b326b52861"), BigInt("0xfe5dee046a99a2a811c461f1969c3053"), BigInt("0xfcbe86c7900a88aedcffc83b479aa3a4"), BigInt("0xf987a7253ac413176f2b074cf7815e54"), BigInt("0xf3392b0822b70005940c7a398e4b70f3"), BigInt("0xe7159475a2c29b7443b29c7fa6e889d9"), BigInt("0xd097f3bdfd2022b8845ad8f792aa5825"), BigInt("0xa9f746462d870fdf8a65dc1f90e061e5"), BigInt("0x70d869a156d2a1b890bb3df62baf32f7"), BigInt("0x31be135f97d08fd981231505542fcfa6"), BigInt("0x9aa508b5b7a84e1c677de54f3e99bc9"), BigInt("0x5d6af8dedb81196699c329225ee604"), BigInt("0x2216e584f5fa1ea926041bedfe98"), BigInt("0x48a170391f7dc42444e8fa2")],
  ut = class ut {
    static getSqrtRatioAtTick(t) {
      const r = t < 0 ? t * -1 : t;
      let o = r & 1 ? ut.ratio0 : ut.ratio1;
      return r & 2 && (o = le(o, ie[0])), r & 4 && (o = le(o, ie[1])), r & 8 && (o = le(o, ie[2])), r & 16 && (o = le(o, ie[3])), r & 32 && (o = le(o, ie[4])), r & 64 && (o = le(o, ie[5])), r & 128 && (o = le(o, ie[6])), r & 256 && (o = le(o, ie[7])), r & 512 && (o = le(o, ie[8])), r & 1024 && (o = le(o, ie[9])), r & 2048 && (o = le(o, ie[10])), r & 4096 && (o = le(o, ie[11])), r & 8192 && (o = le(o, ie[12])), r & 16384 && (o = le(o, ie[13])), r & 32768 && (o = le(o, ie[14])), r & 65536 && (o = le(o, ie[15])), r & 131072 && (o = le(o, ie[16])), r & 262144 && (o = le(o, ie[17])), r & 524288 && (o = le(o, ie[18])), t > 0 && (o = Gl / o), o % Ts > Yl ? o / Ts + Xs : o / Ts
    }
  };
Te(ut, "ratio0", BigInt("0xfffcb933bd6fad37aa2d162d1a594001")), Te(ut, "ratio1", BigInt("0x100000000000000000000000000000000"));
let Vs = ut;
const Tr = new Map,
  ql = (s, t) => {
    const r = [];
    if (s === void 0 || t === void 0 || t.ticks && t.ticks.length === 0 || isNaN(s.decimals)) return r;
    const o = 2n ** 255n,
      n = 2n ** 256n,
      a = BigInt(t.sqrt_price_x96);
    let c = 0n,
      d = !1;
    return t.ticks.forEach((u, h) => {
      let g = t.tick_spacing;
      if (h >= t.ticks.length - 1) return;
      t.tick_spacing === 1 && (ko(t.current_pool_tick - 1e3, t.current_pool_tick + 1e3, u.tick_index) ? g = 1 : g = 60);
      let x = BigInt(u.liquidity_net);
      x >= o && (x = x - n), c = c + x;
      let f = BigInt(u.sqrt_price);
      const j = t.ticks[h + 1].tick_index;
      for (let m = u.tick_index; m < j; m = m + g) {
        let _ = Tr.get(m + t.tick_spacing);
        if (_ || (_ = Vs.getSqrtRatioAtTick(m + g), Tr.set(m + g, _)), _ > a && f < a) {
          const N = Er(m, f, a, c, d, t.token0_decimals, t.token1_decimals, s);
          r.push(N), d = !0, f = a
        }
        const y = Er(m, f, _, c, d, t.token0_decimals, t.token1_decimals, s);
        r.push(y), f = _
      }
    }), r
  },
  Er = (s, t, r, o, n, a, c, d) => {
    const u = [t, r, o, !1];
    if (n) {
      const g = Number(kr.getAmount0Delta(...u)) / 10 ** a;
      return {
        tick: s,
        price: fe(s, d),
        amount: d.selected === 0 ? g : g * fe(s, d)
      }
    }
    const h = Number(kr.getAmount1Delta(...u)) / 10 ** c;
    return {
      tick: s,
      price: fe(s, d),
      amount: d.selected === 1 ? h : h * fe(s, d)
    }
  },
  Kl = (s, t, r) => {
    if (!r) return;
    const o = fe(t, r),
      n = 3 * o * Math.min(.6, s / 250),
      a = Math.max(o + n, 0),
      c = Math.max(o - n, 0);
    if (isNaN(c) || isNaN(a)) return;
    const d = {
      lower: os(a, r),
      upper: os(c, r)
    };
    return d.lower > d.upper && ([d.lower, d.upper] = [d.upper, d.lower]), d
  };

function To(s) {
  const {
    chain: t
  } = R(), {
    height: r,
    width: o,
    liquidityChart: n,
    token: a,
    poolSummary: c
  } = s, [d, u] = l.useState(""), [h, g] = l.useState(void 0), [x, f] = l.useState(), [j, m] = l.useState(0), _ = l.useCallback(() => {
    if (n && a) return Kl(n.tick_spacing, n.current_pool_tick, a)
  }, [n, a]), [y, N] = l.useState(_()), w = E => {
    if (!E) {
      N(_());
      return
    }
    isNaN(E.upper) || isNaN(E.lower) || n && E.upper - E.lower < n.tick_spacing * 4 || [E.upper > fl, E.upper < vr, E.lower < vr].some(A => A) || N(E)
  }, p = l.useRef(null), {
    zoom: S,
    firstChild: v,
    echart: b
  } = at({
    chartRef: p,
    options: {
      animationDuration: 900,
      brush: {
        brushLink: "all",
        brushMode: "single",
        brushStyle: {
          color: St(qr(i.blue[300]), .25)
        },
        xAxisIndex: "all"
      },
      dataZoom: [{
        show: !0,
        type: "inside",
        realtime: !0,
        start: 1,
        end: 75,
        xAxisIndex: [0],
        moveOnMouseMove: "shift",
        minSpan: 10,
        preventDefaultMouseMove: !1
      }, {
        show: !0,
        showDataShadow: !1,
        type: "slider",
        realtime: !0,
        minSpan: 1,
        start: 0,
        end: 100
      }],
      grid: {
        left: 0,
        right: 60,
        top: 10
      },
      series: [{
        name: "liquidityfull",
        step: "end",
        symbol: "none",
        type: "line",
        xAxisIndex: 0
      }, {
        name: "liquidityone",
        step: "end",
        symbol: "none",
        type: "line",
        xAxisIndex: 0
      }, {
        name: "liquiditytwo",
        step: "start",
        symbol: "none",
        type: "line",
        xAxisIndex: 0
      }],
      toolbox: {
        show: !1
      },
      visualMap: [],
      xAxis: {
        axisLabel: {
          formatter: E => ot(e.jsx(e.Fragment, {
            children: k({
              num: E,
              showOnly2Digits: !0,
              smallNumberOn2Zeros: !0,
              stringOut: !0
            })
          }))
        },
        splitLine: {
          show: !1
        },
        type: "value"
      },
      yAxis: {
        axisLine: {
          show: !1
        },
        min: 0,
        position: "right",
        splitLine: {
          show: !1
        },
        type: "value"
      }
    }
  });
  return l.useEffect(() => {
    if (!v || !b) return;
    const E = A => {
      m(A.timeStamp)
    };
    return v.addEventListener("wheel", E), () => {
      v.removeEventListener("wheel", E)
    }
  }, [v, b]), l.useEffect(() => {
    if (!n) return;
    const E = n.pool;
    E !== d && (w(void 0), u(E))
  }, [n]), l.useEffect(() => {
    if (y && (S[0] === 0 || S[1] == 100)) {
      let E = .07;
      Math.abs(y.upper - y.lower) < 250 && (E = .005);
      const A = fe(y.upper, a),
        V = fe(y.lower, a),
        $ = (A + V) / 2 * E * -a.sign,
        B = {
          lower: os(V - $, a),
          upper: os(A + $, a)
        };
      w(B)
    }
  }, [S, j]), l.useEffect(() => {
    if (y === void 0 && w(void 0), n && a) {
      const E = n.current_pool_tick;
      g(E);
      const A = ql(a, n);
      f({
        ticks: A,
        currentTick: n.current_pool_tick,
        tickSpacing: n.tick_spacing
      })
    }
    y === void 0 && w(void 0)
  }, [n, a]), l.useEffect(() => {
    if (!x || !y || x.ticks.length === 0) return;
    const E = {
      ...x.ticks[0]
    };
    E.tick = E.tick - x.tickSpacing, E.amount = 0;
    const A = {
      ...x.ticks[x.ticks.length - 1]
    };
    A.tick = A.tick + x.tickSpacing, A.amount = 0;
    const V = [...x.ticks];
    V.push(A), V.unshift(E);
    const $ = _r(y.lower, x.tickSpacing, a) - x.tickSpacing * 3,
      B = _r(y.upper, x.tickSpacing, a) + x.tickSpacing * 3,
      I = V.filter(P => ko($, B, P.tick)).map(P => ({
        ...P
      }));
    I.find(P => P.tick === Math.floor(B)) || I.push({
      tick: B,
      price: fe(B, a),
      amount: 0
    }), I.find(P => P.tick === Math.floor($)) || I.unshift({
      tick: $,
      price: fe($, a),
      amount: 0
    }), I.sort((P, G) => {
      const q = P.tick,
        W = G.tick;
      return q < W ? -1 : q > W ? 1 : 0
    });
    for (let P = I.length; P > 0; P--) I[P] && I[P].tick == I[P - 1].tick && (I[P - 1].amount += I[P].amount, I.splice(P, 1));
    if (h !== void 0)
      for (const [P, G] of I.entries()) {
        const q = h - G.tick;
        if (q == 0) break;
        if (q < 0) {
          const W = fe(h || 0, a),
            ve = {
              tick: h,
              price: W,
              amount: 0
            };
          I.splice(P, 0, ve);
          break
        }
      }
    const Q = I.map(P => {
      const G = P.amount > 0 ? P.amount : 0;
      return [P.price, G, P.tick]
    });
    if (!b) return;
    const H = Nr(i.green[600]) || [0, 0, 0, 0],
      Z = Nr(i.red[600]) || [0, 0, 0, 0];
    if (b.setOption({
        series: [{
          name: "liquidityfull",
          data: Q,
          lineStyle: {
            color: "rgba(0,0,0,0)"
          },
          xAxisIndex: 0,
          areaStyle: {
            color: "rgba(0,0,0,0)"
          }
        }, {
          name: "liquidityone",
          data: Q.filter(P => P[2] <= (h || 0)),
          lineStyle: {
            color: i.red[400]
          },
          xAxisIndex: 0,
          areaStyle: {
            color: new Je(0, 0, 0, 1, [{
              offset: 0,
              color: St([Z[0], Z[1], Z[2], 1])
            }, {
              offset: 1,
              color: St([Z[0], Z[1], Z[2], .25])
            }])
          }
        }, {
          name: "liquiditytwo",
          data: Q.filter(P => P[2] >= (h || 0)),
          lineStyle: {
            color: i.green[400]
          },
          xAxisIndex: 0,
          areaStyle: {
            color: new Je(0, 0, 0, 1, [{
              offset: 0,
              color: St([H[0], H[1], H[2], 1])
            }, {
              offset: 1,
              color: St([H[0], H[1], H[2], .25])
            }])
          }
        }]
      }), Q.length > 0) {
      const P = Q[0][0],
        G = Q[Q.length - 1][0];
      b.setOption({
        xAxis: {
          min: a.selected === 0 ? G : P,
          max: a.selected === 0 ? P : G
        }
      })
    }
    b.setOption({
      tooltip: {
        trigger: "axis",
        position: [0, 0],
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        formatter: P => {
          if (Array.isArray(P)) {
            if (P.length === 0) return "";
            const q = P[0].data,
              W = [be(c.t1, c.t1_symbol, Number(t)), be(c.t0, c.t0_symbol, Number(t))];
            return ot(e.jsxs("div", {
              className: "flex flex-col gap-1",
              children: [e.jsx("div", {
                className: "text-xs flex flex-row whitespace-pre",
                children: `Tick ${q[2]}`
              }), e.jsxs("div", {
                className: "text-white text-sm justify-between text-xs flex flex-row gap-12",
                children: [e.jsxs("div", {
                  className: "flex flex-row gap-1",
                  children: [W[a.selected], e.jsx("div", {
                    children: "Price:"
                  })]
                }), k({
                  num: fe(q[2], a),
                  stringOut: !0,
                  singleLetterNotation: !0
                })]
              }), e.jsxs("div", {
                className: "text-white text-sm justify-between text-xs flex flex-row",
                children: [e.jsxs("div", {
                  className: "flex flex-row gap-1",
                  children: [W[a.selected === 1 ? 0 : 1], e.jsx("div", {
                    children: "Price:"
                  })]
                }), k({
                  num: 1 / fe(q[2], a),
                  stringOut: !0,
                  singleLetterNotation: !0
                })]
              }), q[1] > 0 && e.jsxs("div", {
                className: "text-white text-sm justify-between text-xs flex flex-row",
                children: [e.jsx("div", {
                  className: "flex flex-row gap-1",
                  children: e.jsx("div", {
                    children: "Value:"
                  })
                }), k({
                  num: q[1],
                  stringOut: !0,
                  singleLetterNotation: !0
                })]
              })]
            }))
          }
          return "No Tooltip"
        }
      }
    })
  }, [y, x, a, b, c, t]), e.jsx("div", {
    ref: p,
    style: {
      height: r,
      maxWidth: o,
      width: o,
      minWidth: o
    }
  })
}
const Ql = s => {
  const {
    chart: t,
    width: r,
    timeIncrement: o,
    token: n,
    poolSummary: a,
    hoveredTick: c,
    setHoveredTick: d
  } = s, {
    address: u = ds
  } = ge(), {
    data: h,
    error: g
  } = Y("cush_analyticsPoolHistoric", [u, -1 * he(o) * 1800, 0, he(o)]), {
    data: x
  } = Y("cush_ohlcv", [u, he(o), -1 * he(o) * 1800, 0]), {
    data: f
  } = Y("cush_simulatePoolLiquidity", [u, 0]), [j, m] = l.useState();
  l.useEffect(() => {
    x && m(x.candles)
  }, [x && x.candles]);
  const _ = (y, N, w, p) => {
    switch (y) {
      case L.VOLUME:
        const S = N.map(I => I.volume),
          v = N.map(I => Qe(I.time, he(o)));
        return e.jsx(ms, {
          yData: S,
          xData: v,
          style: {
            width: r
          },
          isLoading: h === void 0,
          timeIncrement: o
        });
      case L.TOKEN_COUNT:
        const b = N.map(I => [I.tvl, I.token0_tvl, I.token1_tvl]),
          E = N.map(I => Qe(I.time, he(o)));
        return e.jsx(Wl, {
          yData: b,
          xData: E,
          style: {
            width: r
          },
          isLoading: h === void 0,
          token0: a == null ? void 0 : a.t0_symbol,
          token1: a == null ? void 0 : a.t1_symbol,
          timeIncrement: o
        });
      case L.LIQUIDITY:
        return e.jsx(To, {
          height: 300,
          width: r,
          liquidityChart: p,
          poolSummary: a,
          address: u,
          token: n,
          setHoveredTick: d,
          hoveredTick: c
        });
      case L.PRICE:
        const A = w.map(I => Qe(I.time, he(o))),
          V = n.selected === 0 ? pl(w).map(I => [I.close, I.open, I.low, I.high]) : w.map(I => [I.close, I.open, I.low, I.high]);
        return e.jsx(Us, {
          yData: V,
          xData: A,
          style: {
            width: r
          },
          isLoading: h === void 0,
          timeIncrement: o
        });
      default:
        const $ = N.map(I => [I.tvl, I.token0_tvl, I.token1_tvl]),
          B = N.map(I => Qe(I.time, he(o)));
        return e.jsx(ns, {
          yData: $,
          xData: B,
          style: {
            width: r
          },
          isLoading: h === void 0,
          timeIncrement: o
        })
    }
  };
  return e.jsx("div", {
    className: "flex items-end justify-center flex-1  overflow-hidden ",
    children: g ? e.jsx(Rt, {}) : h && j && f ? _(t, h, j, f) : e.jsx(Ft, {})
  })
};

function Zl(s) {
  const {
    height: t,
    width: r,
    timeIncrement: o,
    setTimeIncrement: n
  } = s, [a, c] = l.useState(L.VOLUME), d = [L.TOKEN_COUNT, L.VOLUME, L.LIQUIDITY, L.PRICE], u = r, [h, g] = l.useState(void 0), {
    address: x
  } = ge(), [f, j] = l.useState({
    selected: 0,
    decimals: 0,
    sign: -1
  }), [m, _] = go({}, 50), {
    data: y
  } = Y("cush_search", [x]);
  l.useEffect(() => {
    c(L.VOLUME)
  }, [x]);
  const N = l.useRef(null);
  l.useEffect(() => {
    const p = S => {
      N.current && N.current.contains(S.target) && S.preventDefault()
    };
    return document.addEventListener("wheel", p, {
      passive: !1
    }), () => {
      document.removeEventListener("wheel", p)
    }
  }, [N]);
  const w = p => {
    const S = {
      selected: p,
      decimals: f.decimals,
      sign: p === 0 ? 1 : -1
    };
    j(S)
  };
  return l.useEffect(() => {
    y && y.pools && y.pools.length > 0 && _(y.pools[0])
  }, [y]), l.useEffect(() => {
    const p = m.is_preferred_token_order ? 1 : 0,
      S = {
        selected: p,
        decimals: 0,
        sign: p === 0 ? 1 : -1
      };
    S.decimals = m.t1_decimals - m.t0_decimals, j(S)
  }, [m.address]), l.useEffect(() => {
    a !== L.PRICE && (o === te.MINUTE_5 || o === te.HOUR_1) && n(te.DAY_1)
  }, [a]), e.jsxs("div", {
    ref: N,
    className: "flex flex-col  duration-[500ms]",
    style: {
      height: t,
      width: r
    },
    children: [e.jsx($t, {
      page: We.INDV_POOL_PAGE,
      chartList: d,
      chart: a,
      setChart: c,
      timeIncrement: o,
      setTimeIncrement: n,
      token: f,
      setToken: w,
      poolSummary: m,
      hoveredTick: h
    }), e.jsx(Ql, {
      timeIncrement: o,
      chart: a,
      width: u,
      token: f,
      poolSummary: m,
      hoveredTick: h,
      setHoveredTick: g
    })]
  })
}
const ps = s => {
    const {
      clipboardItem: t
    } = s, [r, o] = l.useState(!1), [n, a] = l.useState(!1);
    return l.useEffect(() => {
      n && setTimeout(() => {
        a(!1)
      }, 600)
    }, [n]), e.jsxs("button", {
      onMouseEnter: () => {
        o(!0)
      },
      onMouseLeave: () => {
        o(!1)
      },
      onClick: () => {
        a(!0), navigator.clipboard.writeText(t)
      },
      className: "bg-gray-750 rounded-full w-9 h-9 items-center flex justify-center relative",
      children: [n ? e.jsx(z, {
        style: {
          color: r ? i.gray[200] : i.gray[400],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/copyIcon.svg"
      }) : e.jsx(z, {
        style: {
          color: r ? i.gray[200] : i.gray[400],
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/copiedIcon.svg"
      }), n && e.jsx(ss, {
        text: "Copied!"
      }), r && !n && e.jsx(ss, {
        text: "Copy"
      })]
    })
  },
  js = s => {
    const {
      onClick: t,
      hoverText: r
    } = s, [o, n] = l.useState(!1);
    return e.jsxs("button", {
      onMouseEnter: () => {
        n(!0)
      },
      onMouseLeave: () => {
        n(!1)
      },
      onClick: () => {
        t()
      },
      className: "bg-gray-750 rounded-full w-9 h-9 items-center flex justify-center relative",
      children: [e.jsx(z, {
        style: {
          color: o ? i.gray[200] : i.gray[400]
        },
        src: "https://assets.oku.trade/shareIcon.svg"
      }), o && r && e.jsx(ss, {
        text: r
      })]
    })
  };

function er() {
  return e.jsx("div", {
    className: "flex justify-between w-full",
    children: e.jsx("span", {
      className: "h-8 w-96 mr-2 mb-2 rounded-full bg-white/5 animate-pulse"
    })
  })
}

function Jl(s) {
  const {
    pool: t,
    link: r
  } = s, {
    currentChainInfo: o
  } = R(), n = () => {
    Kr("Info Add Liqudity", {
      pool: t == null ? void 0 : t.address,
      chain: o.id
    }), window.open(`${qs}/app/${o.internalName}/liquidity/${t==null?void 0:t.address}`)
  }, a = ge(), {
    isMobile: c
  } = de();
  return e.jsx("section", {
    className: "flex w-full  ",
    children: e.jsx("div", {
      className: "flex justify-between  w-full",
      children: t ? e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
          className: "flex gap-2 items-center",
          children: [e.jsx(Ua, {
            token0Address: t.t0,
            token1Address: t.t1,
            token0Symbol: t.t0_symbol,
            token1Symbol: t.t1_symbol,
            fee: t.fee
          }), a.address && e.jsx(ps, {
            clipboardItem: a.address
          }), r && e.jsx(js, {
            onClick: () => window.open(r),
            hoverText: Js(o.id)
          })]
        }), !c && e.jsx("button", {
          className: "flex gap-1 items-center justify-center bg-blue-400 rounded-[8px] w-[112px] h-[32px]",
          onClick: n,
          children: e.jsx(X, {
            weight: O.SEMIBOLD,
            children: "Add Liquidity"
          })
        })]
      }) : e.jsx(er, {})
    })
  })
}
const Xl = s => {
  const {
    onClick: t
  } = s, [r, o] = l.useState(!1);
  return e.jsx("button", {
    onMouseEnter: () => {
      o(!0)
    },
    onMouseLeave: () => {
      o(!1)
    },
    onClick: () => {
      t()
    },
    children: e.jsx(z, {
      style: {
        color: r ? Se(i.gray[50]) : i.gray[50],
        strokeWidth: 1.5
      },
      src: "https://assets.oku.trade/backIcon.svg"
    })
  })
};

function vs() {
  const s = zr();
  return e.jsx("div", {
    className: " flex flex-row w-full justify-between",
    children: e.jsx(Xl, {
      onClick: () => {
        s(-1)
      }
    })
  })
}

function tr(s) {
  const {
    currentPrice: t,
    rangeLower: r,
    rangeUpper: o,
    isClosed: n
  } = s, a = 98, c = 8, d = 1, u = .2, [h, g] = r < o ? [r, o] : [o, r], {
    barStartLocation: x,
    barEndLocation: f,
    currentValueLocation: j
  } = ei(h, g, t, a, u), m = f - x, _ = a - x;
  return e.jsxs("div", {
    className: "flex items-center h-4 overflowX  relative",
    style: {
      width: a
    },
    children: [e.jsx("div", {
      className: "absolute ",
      style: {
        height: c,
        width: a,
        backgroundColor: i.blue[800],
        borderRadius: d,
        borderColor: i.blue[600],
        borderWidth: " 0.5px",
        borderStyle: "solid",
        overflowX: "hidden"
      }
    }), e.jsx("div", {
      className: "absolute ",
      style: {
        height: c - 2,
        maxWidth: _,
        width: m >= a ? _ : m,
        marginLeft: x,
        backgroundColor: n ? i.gray[700] : i.blue[500]
      }
    }), e.jsx("div", {
      className: "absolute h-3 w-[1.1px] bg-gray-50",
      style: {
        marginLeft: j
      }
    })]
  })
}
const ei = (s, t, r, o, n) => s >= r ? Ls(s, t, r, o, .25, n) : t <= r ? Ls(s, t, r, o, .75, n) : Ls(s, t, r, o, .5, n),
  Ls = (s, t, r, o, n, a) => {
    const c = (1 - n) / n,
      d = c > 1 ? 1 : c,
      u = c > 1 ? 1 / c : 1,
      h = Math.abs(t - r),
      g = Math.abs(r - s),
      x = h > g ? h : g,
      f = (1 + a) * x * u,
      j = (1 + a) * x * d,
      m = r - f,
      y = r + j - m,
      N = (s - m) / y * o,
      w = (t - m) / y * o,
      p = (r - m) / y * o;
    return {
      barStartLocation: N,
      barEndLocation: w,
      currentValueLocation: p
    }
  };
var Lr;
(function (s) {
  s.Token0Amount = "amount0_current", s.Token1Amount = "amount1_current", s.Value = "total_value_current_usd", s.CollectedFees = "collected_fees_usd", s.UncollectedFees = "uncollected_fees_usd", s.Date = "create_time"
})(Lr || (Lr = {}));
const Ds = 10;

function ti(s) {
  const {
    positionsData: t,
    positionDataSize: r,
    pool: o,
    setSearchUserPositionFilterOpts: n
  } = s, [a, c] = l.useState(1), [d, u] = l.useState([]), [h, g] = l.useState(), [x, f] = l.useState(), j = "h-14 px-4";
  l.useEffect(() => {
    const y = {
      pool: o,
      result_offset: a - 1,
      result_size: Ds,
      sort_by: h || "create_time",
      sort_order: x === T.ASC
    };
    n(y)
  }, [a, h, x, o]);
  const m = y => {
      y === h ? f(x === T.ASC ? T.DESC : T.ASC) : (g(y), f(T.DESC)), c(1)
    },
    _ = () => {
      var y, N;
      return Ue({
        headers: [{
          title: "Pool",
          headerClass: `${j} text-left`,
          dataClass: `${j} text-left`,
          render: w => e.jsx("div", {
            className: "flex gap-1",
            children: e.jsx(It, {
              token0Address: w.t0,
              token1Address: w.t1,
              token0Symbol: w.t0_symbol,
              token1Symbol: w.t1_symbol,
              fee: w.pool_fee
            })
          })
        }, {
          title: "Status",
          headerClass: `${j} text-left`,
          dataClass: `${j} text-left`,
          render: w => e.jsx(Ht, {
            status: w.status
          })
        }, {
          title: "Range",
          headerClass: `${j} text-left`,
          dataClass: `${j} text-right relative z-10`,
          render: w => e.jsx("div", {
            children: e.jsx(tr, {
              currentPrice: w.price_range.current_pool_prices,
              rangeLower: w.price_range.lowerPrice,
              rangeUpper: w.price_range.upperPrice,
              isClosed: w.status === "closed"
            })
          })
        }, {
          title: e.jsx(U, {
            title: (y = t[0]) == null ? void 0 : y.t0_symbol,
            handleSortingToggle: () => m("amount0_current"),
            sorting: h === "amount0_current" ? x : void 0
          }),
          headerClass: `${j} text-right pl-2`,
          dataClass: `${j} text-right pl-2`,
          render: w => e.jsx("div", {
            className: "flex justify-end",
            children: e.jsxs(C, {
              color: i.gray[200],
              children: [e.jsx(k, {
                num: nr(BigInt(w.amount0_current), w.t0_decimals),
                singleLetterNotation: !0
              }), " "]
            })
          })
        }, {
          title: e.jsx(U, {
            title: (N = t[0]) == null ? void 0 : N.t1_symbol,
            handleSortingToggle: () => m("amount1_current"),
            sorting: h === "amount1_current" ? x : void 0
          }),
          headerClass: `${j} text-right`,
          dataClass: `${j} text-right`,
          render: w => e.jsx("div", {
            className: "flex justify-end",
            children: e.jsxs(C, {
              color: i.gray[200],
              children: [e.jsx(k, {
                num: nr(BigInt(w.amount1_current), w.t1_decimals),
                singleLetterNotation: !0
              }), " "]
            })
          })
        }, {
          title: e.jsx(U, {
            title: "Value",
            handleSortingToggle: () => m("total_value_current_usd"),
            sorting: h === "total_value_current_usd" ? x : void 0
          }),
          headerClass: `${j} text-right`,
          dataClass: `${j} text-right`,
          render: w => e.jsx("div", {
            className: "flex justify-end",
            children: e.jsxs(C, {
              color: i.gray[200],
              children: ["$", e.jsx(k, {
                num: w.total_value_current_usd,
                singleLetterNotation: !0
              })]
            })
          })
        }, {
          title: e.jsx(U, {
            title: "Collected",
            handleSortingToggle: () => m("collected_fees_usd"),
            sorting: h === "collected_fees_usd" ? x : void 0
          }),
          headerClass: `${j} text-right`,
          dataClass: `${j} text-right`,
          render: w => e.jsx("div", {
            className: "flex justify-end",
            children: e.jsxs(C, {
              color: i.gray[200],
              children: ["$", e.jsx(k, {
                num: w.collected_fees_usd,
                singleLetterNotation: !0
              })]
            })
          })
        }, {
          title: e.jsx(U, {
            title: "Uncollected",
            handleSortingToggle: () => m("uncollected_fees_usd"),
            sorting: h === "uncollected_fees_usd" ? x : void 0
          }),
          headerClass: `${j} text-right`,
          dataClass: `${j} text-right`,
          render: w => e.jsx("div", {
            className: "flex justify-end",
            children: e.jsxs(C, {
              color: i.gray[200],
              children: ["$", e.jsx(k, {
                num: w.uncollected_fees_usd,
                singleLetterNotation: !0
              })]
            })
          })
        }, {
          title: e.jsx(U, {
            title: "Created",
            handleSortingToggle: () => m("create_time"),
            sorting: h === "create_time" ? x : void 0
          }),
          headerClass: `${j} text-right pl-2`,
          dataClass: `${j} text-right pl-2`,
          render: w => e.jsx("div", {
            className: "flex justify-end",
            children: e.jsx(C, {
              color: i.gray[200],
              children: Ys(new Date(w.create_time), new Date)
            })
          })
        }],
        config: {
          tableClass: "w-full overflow-y-auto",
          tbodyClass: "",
          headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-400 text-[14px] font-regular rounded-tr-xl rounded-tl-xl",
          dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer"
        },
        data: d
      })
    };
  return l.useEffect(() => {
    t && t.length > 0 && u(t.map((y, N) => ({
      ...y,
      place: (a - 1) * Ds + N + 1,
      link: `../position/${y._key}`
    })))
  }, [t]), e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-10 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "No recent positions yet"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(_, {})
      }), e.jsx(Ge, {
        currentPage: a,
        totalCount: r,
        pageSize: Ds,
        onPageChange: y => c(y)
      })]
    })
  })
}

function si(s) {
  const {
    currentValue: t
  } = s;
  return e.jsxs("div", {
    className: "absolute bg-gray-800 border-[1px] border-gray-700 rounded-[8px] flex flex-col w-fit items-start gap-1 p-3 no-wrap min-w-[110px] right-0 top-[-50px]",
    style: {},
    children: [e.jsx(X, {
      color: i.gray[300],
      children: "Current Value"
    }), e.jsxs(C, {
      children: ["$", e.jsx(k, {
        num: t
      })]
    })]
  })
}

function Eo(s) {
  const {
    currentChainInfo: t
  } = R(), {
    pastValue: r,
    currentValue: o,
    txn: n
  } = s, [a, c] = l.useState(!1);
  return e.jsxs("div", {
    className: "p-1 h-full flex items-center justify-end  relative ",
    onMouseEnter: () => c(!0),
    onMouseLeave: () => c(!1),
    onClick: () => window.open(lt("tx", n.toString(), t.id)),
    children: [e.jsxs(C, {
      color: i.gray[200],
      children: [" $", r && e.jsx(k, {
        num: r
      })]
    }), a && o && e.jsx(si, {
      currentValue: o
    })]
  })
}
var Dr;
(function (s) {
  s.TotalValue = "TOTAL_VALUE", s.token0Amount = "TOKEN0_AMOUNT", s.token1Amount = "TOKEN1_AMOUNT", s.Date = "DATE"
})(Dr || (Dr = {}));
const Jt = 10;

function ri(s) {
  const {
    transactionsData: t
  } = s, {
    currentChainInfo: r
  } = R(), [o, n] = l.useState(1), [a, c] = l.useState(), [d, u] = l.useState(), [h, g] = l.useState([]), [x, f] = l.useState([]), j = "h-14 px-4", m = "h-14 px-4 text-right";
  l.useEffect(() => {
    switch (a) {
      case "DATE":
        f(d === T.DESC ? [...t].sort((v, b) => b.time > v.time ? 1 : -1) : [...t].sort((v, b) => b.time < v.time ? 1 : -1));
        break;
      case "TOTAL_VALUE":
        f(d === T.DESC ? [...t.sort((v, b) => Number(b.usd_value) - Number(v.usd_value))] : [...t.sort((v, b) => Number(v.usd_value) - Number(b.usd_value))]);
        break;
      case "TOKEN0_AMOUNT":
        f(d === T.DESC ? [...t].sort((v, b) => Number(b.amount0) - Number(v.amount0)) : [...t].sort((v, b) => Number(v.amount0) - Number(b.amount0)));
        break;
      case "TOKEN1_AMOUNT":
        f(d === T.DESC ? [...t].sort((v, b) => Number(b.amount1) - Number(v.amount1)) : [...t].sort((v, b) => Number(v.amount1) - Number(b.amount1)));
        break;
      default:
        f(t)
    }
  }, [t]), l.useEffect(() => {
    const v = (o - 1) * Jt,
      b = v + Jt,
      E = x.slice(v, b);
    g(E.map(A => ({
      ...A,
      link: lt("tx", A.transaction.toString(), r.id)
    })))
  }, [o, x]);
  const _ = () => {
      a === "TOTAL_VALUE" ? (f([...x].reverse()), u(d === T.DESC ? T.ASC : T.DESC)) : (f([...x.sort((v, b) => Number(b.usd_value) - Number(v.usd_value))]), u(T.DESC)), c("TOTAL_VALUE"), n(1)
    },
    y = () => {
      a === "TOKEN0_AMOUNT" ? (f([...x].reverse()), u(d === T.DESC ? T.ASC : T.DESC)) : (f([...x].sort((v, b) => Number(b.amount0) - Number(v.amount0))), u(T.DESC)), c("TOKEN0_AMOUNT"), n(1)
    },
    N = () => {
      a === "TOKEN1_AMOUNT" ? (f([...x].reverse()), u(d === T.DESC ? T.ASC : T.DESC)) : (f([...x].sort((v, b) => Number(b.amount1) - Number(v.amount1))), u(T.DESC)), c("TOKEN1_AMOUNT"), n(1)
    },
    w = () => {
      a === "DATE" ? (f([...x].reverse()), u(d === T.DESC ? T.ASC : T.DESC)) : (f([...x].sort((v, b) => b.time > v.time ? 1 : -1)), u(T.DESC)), c("DATE"), n(1)
    },
    p = v => {
      switch (v.event_type.toLowerCase()) {
        case oe.SWAP.toLowerCase():
          return `Swap ${v.side.toLowerCase()==="sell"?`${v.token0_symbol} for ${v.token1_symbol}`:`${v.token1_symbol} for ${v.token0_symbol}`}`;
        case oe.BURN.toLowerCase():
          return oe.BURN;
        case oe.COLLECT.toLowerCase():
          return oe.COLLECT;
        case oe.MINT.toLowerCase():
          return oe.MINT;
        default:
          return v.event_type.toLowerCase()
      }
    },
    S = () => Ue({
      headers: [{
        title: "Transaction",
        headerClass: `${j} text-left`,
        dataClass: `${j} text-left`,
        render: v => e.jsx("div", {
          children: e.jsx(C, {
            color: i.blue[400],
            children: p(v)
          })
        })
      }, {
        title: e.jsx(U, {
          title: "Total Value",
          handleSortingToggle: () => _(),
          sorting: a === "TOTAL_VALUE" ? d : void 0
        }),
        headerClass: `${j} text-left`,
        dataClass: m,
        render: v => e.jsx(Eo, {
          txn: v.transaction,
          pastValue: v.usd_value,
          currentValue: v.current_value
        })
      }, {
        title: e.jsx(U, {
          title: "Token Amount",
          handleSortingToggle: () => y(),
          sorting: a === "TOKEN0_AMOUNT" ? d : void 0
        }),
        headerClass: `${j} text-left pl-2`,
        dataClass: `${m} pl-2`,
        render: v => e.jsxs("div", {
          className: "flex justify-end gap-1",
          children: [e.jsx(C, {
            color: i.gray[200],
            children: e.jsx(k, {
              num: v.amount0,
              singleLetterNotation: !0
            })
          }), e.jsx(C, {
            color: i.gray[200],
            children: v.token0_symbol
          })]
        })
      }, {
        title: e.jsx(U, {
          title: "Token Amount",
          handleSortingToggle: () => N(),
          sorting: a === "TOKEN1_AMOUNT" ? d : void 0
        }),
        headerClass: `${j} text-left pl-2`,
        dataClass: `${m} pl-2`,
        render: v => e.jsxs("div", {
          className: "flex justify-end gap-1",
          children: [e.jsx(C, {
            color: i.gray[200],
            children: e.jsx(k, {
              num: v.amount1,
              singleLetterNotation: !0
            })
          }), e.jsx(C, {
            color: i.gray[200],
            children: v.token1_symbol
          })]
        })
      }, {
        title: "User",
        headerClass: `${j} text-right`,
        dataClass: `${j} text-right`,
        link: v => `../user/${v.user}`,
        render: v => e.jsx(C, {
          color: i.blue[400],
          children: nt(v.user)
        })
      }, {
        title: e.jsx(U, {
          title: "Date",
          handleSortingToggle: () => w(),
          sorting: a === "DATE" ? d : void 0
        }),
        headerClass: `${j} text-right pl-2`,
        dataClass: `${j} text-right pl-2`,
        render: v => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(C, {
            color: i.gray[200],
            children: Ys(new Date(v.time), new Date)
          })
        })
      }],
      config: {
        tableClass: "w-full overflow-y-auto",
        tbodyClass: "",
        headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-400 text-[14px] font-regular rounded-tr-xl rounded-tl-xl",
        dataRowClass: "border-t-[1px] border-t-gray-800 group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-hover_background cursor-pointer"
      },
      data: h
    });
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-10 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "No recent transactions yet"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(S, {})
      }), e.jsx(Ge, {
        currentPage: o,
        totalCount: t.length,
        pageSize: Jt,
        onPageChange: v => n(v)
      })]
    })
  })
}

function oi() {
  const [s, t] = l.useState(), [r, o] = l.useState(!1), [n, a] = l.useState(!1), [c, d] = l.useState(), {
    isMenuCollapsed: u
  } = Pe(), [h, g] = l.useState(void 0), [x, f] = l.useState(oe.ALL), [j, m] = l.useState(te.DAY_1), {
    isMobile: _
  } = de(), {
    width: y
  } = vt(), {
    address: N = ds
  } = ge(), [w, p] = l.useState({
    pool: N,
    result_offset: 0,
    result_size: 10,
    sort_by: "create_time",
    sort_order: !1
  }), {
    data: S
  } = Y("cush_analyticsPool", [N]), {
    data: v
  } = Y("cush_topPositions", [w], {}), [b, E] = l.useState(), [A, V] = l.useState();
  l.useEffect(() => {
    S && E(S)
  }, [S]), l.useEffect(() => {
    v && V(v)
  }, [v]), l.useEffect(() => {
    E(void 0), V(void 0)
  }, [N]);
  const $ = _ ? Pt : gt,
    B = _ ? fs : mt,
    I = _ ? bt : wt,
    Q = _ ? Ct : At,
    Z = I - 2 * ((_ ? Ot : _t) + ae),
    P = window.innerWidth - Mt - B - Re - 2 * ($ + Q + ae),
    G = window.innerWidth - Ie - B - Re - 2 * ($ + Q + ae),
    q = window.innerWidth - 2 * ($ + Q + ae),
    W = J({
      base: !1,
      md: !0
    }),
    ve = y >= 1167,
    {
      currentChainInfo: Ne
    } = R(),
    ue = b && b.recent_transactions,
    ye = l.useMemo(() => Ce(A && A.positions, 10, !1, !0, !1, 0), [A]),
    me = l.useMemo(() => Ce(ue, Jt, !0, !0, !1, 0), [ue]);
  l.useEffect(() => {
    b && je(b)
  }, [b]), l.useEffect(() => {
    var D;
    b && (x === oe.ALL ? d(b.recent_transactions) : d((D = b.recent_transactions) == null ? void 0 : D.filter(ee => ee.event_type.toLowerCase() === x.toLowerCase())))
  }, [x, b]);
  const je = D => {
      const ee = [];
      ee.push({
        itemTitle: "TVL",
        itemValue: e.jsx(k, {
          num: D.tvl_usd,
          singleLetterNotation: !0
        }),
        itemChange: D.tvl_usd_change * 100,
        simbol: "$"
      }), ee.push({
        itemTitle: "Volume 24H",
        itemValue: e.jsx(k, {
          num: D.t0_volume_usd,
          singleLetterNotation: !0
        }),
        itemChange: D.t0_volume_change ? D.t0_volume_change * 100 : 0,
        simbol: "$"
      }), ee.push({
        itemTitle: "Fees 24H",
        itemValue: e.jsx(k, {
          num: D.total_fees_usd,
          singleLetterNotation: !0
        }),
        itemChange: D.t0_volume_change ? D.t0_volume_change * 100 : 0,
        simbol: "$"
      }), ee.push({
        itemTitle: "APY 24H",
        itemValue: e.jsx(k, {
          num: D.apr * 100,
          singleLetterNotation: !0
        }),
        itemChange: D.apr_change && D.apr_change ? D.apr_change * 100 : 0,
        simbol: "%",
        symbolAfter: !0
      }), ee.push({
        itemTitle: "Total Positions",
        itemValue: e.jsx(k, {
          num: D.position_stats.total_positions,
          hideDecimals: !0
        })
      }), t(ee)
    },
    K = b ? `${b.t0_symbol}/${b.t1_symbol} | ${Ne.name} Pools | Ukia Analytics` : "Pool | Ukia Analytics",
    M = b ? `${b.t0_symbol}/${b.t1_symbol} has a 24h trading volume of $${((b.t0_volume_usd+b.t1_volume_usd)/2).toFixed(2)} with $${b.total_fees_usd.toFixed(2)} in fees. The TVL is $${b.tvl_usd.toFixed(2)}. View liquidity depth, chart analysis, APY, and more for ${b.t0_name} and ${b.t1_name} on DeFi’s best analytics platform.` : "";
  return e.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [e.jsx(Ye, {
      pageTitle: K
    }), e.jsx(et, {
      pageDescription: M
    }), e.jsx(vs, {}), e.jsx(Jl, {
      pool: b,
      link: lt("address", N, Ne.id)
    }), e.jsx(Ut, {
      overviewItems: s,
      children: e.jsx(Zl, {
        height: Z,
        width: W ? ve ? u ? G : P : G + Ie : q,
        setTimeIncrement: m,
        timeIncrement: j,
        xBounds: h,
        setXBounds: g
      })
    }), e.jsx(we, {
      id: "all_positions",
      isLoading: b === void 0 || A === void 0,
      height: r ? De : ye,
      header: e.jsx(_e, {
        title: "All Positions",
        onClick: () => o(!r),
        isCollapsed: r
      }),
      children: e.jsx(e.Fragment, {
        children: b && A && e.jsx(ti, {
          positionsData: A.positions,
          positionDataSize: A.result_size,
          t1CurrentPrice: b.t1_price_usd && b.t0_price_usd && b.t1_price_usd != 0 && b.t0_price_usd != 0 ? b.t1_price_usd / b.t0_price_usd : 0,
          pool: b.address,
          setSearchUserPositionFilterOpts: p
        })
      })
    }), e.jsx(we, {
      id: "recent_transactions",
      isLoading: c === void 0,
      height: n ? De : me,
      header: e.jsx(_e, {
        title: "Recent transactions",
        onClick: () => a(!n),
        isCollapsed: n
      }),
      children: e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
          className: "flex justify-end m-3",
          children: e.jsx(Bl, {
            transactionType: x,
            setTransactionType: f
          })
        }), c && e.jsx(ri, {
          transactionsData: c
        })]
      })
    })]
  })
}
const sr = () => e.jsx("div", {
    className: "flex  items-center  justify-center flex-1  h-full",
    children: e.jsx(F, {
      color: i.gray[300],
      children: "No Data Available "
    })
  }),
  ni = l.memo(s => {
    const {
      chart: t,
      timeIncrement: r,
      width: o,
      token: n,
      setTimeIncrement: a
    } = s, [c] = l.useState(Date.now().valueOf()), {
      data: d,
      error: u
    } = Y("cush_swapChart", [
      [n], he(r), c - 1 * he(r) * 800, c
    ]), [h, g] = l.useState(void 0), [x, f] = l.useState();
    l.useEffect(() => {
      d && f(d.token_candles[n.toLowerCase()])
    }, [d]), l.useEffect(() => {
      x && h === void 0 && (x && x.length <= 3 && r !== xe.MINUTE_5 ? (a(xe.MINUTE_5), g(void 0)) : g(!1))
    }, [x]);
    const j = (m, _, y) => {
      const N = _.map(v => Qe(v.time, y)),
        w = _.map(v => v.volume),
        p = _.map(v => v.tvl),
        S = _.map(v => [v.close, v.open, v.low, v.high]);
      switch (m) {
        case L.VOLUME:
          return e.jsx(ms, {
            yData: w,
            xData: N,
            style: {
              width: o
            },
            isLoading: d === void 0,
            timeIncrement: r
          });
        case L.PRICE:
          return e.jsx(Us, {
            yData: S,
            xData: N,
            style: {
              width: o
            },
            isLoading: d === void 0,
            timeIncrement: r
          });
        case L.TVL:
          return e.jsx(ns, {
            yData: p,
            xData: N,
            style: {
              width: o
            },
            isLoading: d === void 0,
            timeIncrement: r
          });
        default:
          return e.jsx(Us, {
            yData: S,
            xData: N,
            style: {
              width: o
            },
            isLoading: d === void 0,
            timeIncrement: r
          })
      }
    };
    return e.jsx("div", {
      className: "flex items-end justify-center flex-1  overflow-hidden ",
      children: u ? e.jsx(Rt, {}) : x && h === !1 ? x.length === 0 ? e.jsx(sr, {}) : j(t, x, he(r)) : e.jsx(Ft, {})
    })
  });

function ai(s) {
  const {
    height: t,
    width: r,
    timeIncrement: o,
    setTimeIncrement: n,
    token: a
  } = s, {
    currentChainInfo: c
  } = R(), [d, u] = l.useState(dr(c.id, a) ? L.TVL : L.PRICE), h = [L.VOLUME, L.TVL, L.PRICE], g = r, x = l.useRef(null);
  return l.useEffect(() => {
    u(dr(c.id, a) ? L.TVL : L.PRICE)
  }, [a]), l.useEffect(() => {
    const f = j => {
      x.current && x.current.contains(j.target) && j.preventDefault()
    };
    return document.addEventListener("wheel", f, {
      passive: !1
    }), () => {
      document.removeEventListener("wheel", f)
    }
  }, [x]), l.useEffect(() => {
    d !== L.PRICE && (o === te.MINUTE_5 || o === te.HOUR_1) && n(te.DAY_1)
  }, [d]), e.jsxs("div", {
    ref: x,
    className: " flex flex-col duration-[500ms]  ",
    style: {
      height: t,
      width: r
    },
    children: [e.jsx($t, {
      page: We.INDV_TOK_PAGE,
      chart: d,
      setChart: u,
      chartList: h,
      timeIncrement: o,
      setTimeIncrement: n
    }), e.jsx(ni, {
      timeIncrement: o,
      chart: d,
      width: g,
      token: a,
      setTimeIncrement: n
    })]
  })
}

function li(s) {
  const {
    token: t,
    link: r
  } = s, o = ge(), {
    currentChainInfo: n
  } = R(), a = () => {
    window.open(r)
  };
  return e.jsx("div", {
    className: "flex justify-start  h-[81px]",
    children: t ? e.jsxs("div", {
      className: "flex flex-col  justify-between ",
      children: [" ", e.jsxs("div", {
        className: "flex gap-2 items-center",
        children: [e.jsx("div", {
          className: "h-[24px] w-[24px] rounded-[18px]  ",
          children: e.jsx("img", {
            className: "rounded-full",
            src: ze(t.address, n.id),
            alt: t.symbol
          })
        }), e.jsx("div", {
          className: "font-semibold text-white text-[20px]",
          children: t.name
        }), e.jsx(F, {
          color: i.gray[400],
          children: `(${t.symbol})`
        }), o.address && e.jsx(ps, {
          clipboardItem: o.address
        }), r && e.jsx(js, {
          hoverText: Js(n.id),
          onClick: () => {
            a()
          }
        })]
      }), e.jsxs("div", {
        className: "flex gap-x-2 items-center",
        children: [e.jsxs("div", {
          className: "text-white font-600 text-[28px] ",
          children: ["$", e.jsx(k, {
            num: t.price_usd ? Number(t.price_usd) : 0,
            singleLetterNotation: !0
          })]
        }), e.jsx(Ze, {
          value: t.price_usd_change_24h,
          isProportion: !1
        })]
      })]
    }) : e.jsx(e.Fragment, {
      children: e.jsx(er, {})
    })
  })
}

function ii() {
  const {
    currentChainInfo: t
  } = R(), [r, o] = l.useState(), {
    isMenuCollapsed: n
  } = Pe(), [a, c] = l.useState(!1), [d, u] = l.useState({
    fee_tiers: [],
    result_offset: 0,
    result_size: 10,
    sort_by: "tvl_usd",
    sort_order: !1
  }), [h, g] = l.useState(0), [x, f] = l.useState(), {
    address: j = ""
  } = ge(), [m, _] = l.useState([]), {
    data: y
  } = Y("cush_analyticsToken", [j]), [N, w] = l.useState(""), {
    data: p,
    isFetching: S
  } = Y("cush_search", [N === "" ? j : N, d]);
  l.useEffect(() => {
    const K = [];
    K[0] = j, m.length > 0 ? m[1] && (K[1] = m[1].address) : _([es(j, t.id)]), w(K.join("-"))
  }, [m, j]), l.useEffect(() => {
    _([es(j, t.id)])
  }, [j]), l.useEffect(() => {
    y && (o(y), ye(y))
  }, [y]), l.useEffect(() => {
    p && (f(p == null ? void 0 : p.pools), g(p == null ? void 0 : p.result_size))
  }, [p]), l.useEffect(() => {
    S ? document.body.style.cursor = "progress" : document.body.style.cursor = "auto"
  }, [S]);
  const [v, b] = l.useState(te.DAY_1), {
    isMobile: E
  } = de(), A = E ? Pt : gt, V = E ? fs : mt, $ = E ? bt : wt, B = E ? Ct : At, Q = $ - 2 * ((E ? Ot : _t) + ae), H = window.innerWidth - Mt - V - Re - 2 * (A + B + ae), Z = window.innerWidth - Ie - V - Re - 2 * (A + B + ae), P = window.innerWidth - 2 * (A + B + ae), G = J({
    base: !1,
    md: !0
  }), {
    width: q
  } = vt(), W = q >= 1167, ve = l.useMemo(() => Ce(x, 10, !0, !0, !1, 0), [x]), [Ne, ue] = l.useState(), ye = K => {
    const M = [];
    M.push({
      itemTitle: "TVL",
      itemValue: e.jsx(k, {
        num: K.tvl_usd,
        singleLetterNotation: !0
      }),
      simbol: "$",
      itemChange: K.tvl_change
    }), M.push({
      itemTitle: "Total Transactions",
      itemValue: e.jsx(k, {
        num: K.tx_count,
        hideDecimals: !0
      }),
      itemChange: K.tx_count_change
    }), M.push({
      itemTitle: "Volume 24H",
      itemValue: e.jsx(k, {
        num: K.volume_usd,
        singleLetterNotation: !0
      }),
      simbol: "$",
      itemChange: K.volume_change
    }), M.push({
      itemTitle: "Fees 24H",
      itemValue: e.jsx(k, {
        num: K.fees_usd,
        singleLetterNotation: !0
      }),
      simbol: "$",
      itemChange: K.fees_change
    }), M.push({
      itemTitle: "Total Pools",
      itemValue: e.jsx(k, {
        num: K.pool_count,
        hideDecimals: !0
      }),
      itemChange: K.pools_change
    }), ue(M)
  }, me = r ? `${r.symbol} at ${r.price_usd} | ${r.name} Token Insights | Ukia Analytics` : "Token Insights | Ukia Analytics", je = r ? `${r.symbol} with a 24h trading volume of $${r.volume_usd}. View ${r.name} and other tokens on ${t.name} today. TVL, transactions, volume, and more on DeFi's best analytics platform.` : "TVL, transactions, volume, and more on DeFi's best analytics platform.";
  return e.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [e.jsx(Ye, {
      pageTitle: me
    }), e.jsx(et, {
      pageDescription: je
    }), e.jsx(vs, {}), e.jsxs("section", {
      className: "flex w-full flex-col gap-5 ",
      children: [e.jsx(li, {
        token: r,
        link: lt("token", j, t.id)
      }), e.jsx(Ut, {
        overviewItems: Ne,
        children: e.jsx("div", {
          style: {
            width: G ? W ? n ? Z : H : Z + Ie : P
          },
          children: e.jsx(ai, {
            height: Q,
            width: G ? W ? n ? Z : H : Z + Ie : P,
            timeIncrement: v,
            setTimeIncrement: b,
            token: Wr(j)
          })
        })
      })]
    }), e.jsx(we, {
      id: "token_pools",
      isLoading: x === void 0,
      height: a ? De : ve,
      header: e.jsx(_e, {
        title: "Pools",
        onClick: () => c(!a),
        isCollapsed: a
      }),
      children: e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
          className: "flex flex-row align-center justify-end p-3 gap-5 w-full h-14",
          children: e.jsx(pt, {
            setTokensSelected: _,
            tokensSelected: m,
            tokenToKeep: m[0]
          })
        }), x && e.jsx(e.Fragment, {
          children: e.jsx(Qs, {
            pageSize: 10,
            poolsData: x,
            setSearchFilterOpts: u,
            totalNumberOfPools: h
          })
        })]
      })
    })]
  })
}
const Ir = (s, t) => {
    const r = new Date(s);
    switch (t) {
      case xe.HOUR_1:
        r.setHours(r.getHours() + 1);
        break;
      case xe.DAY_1:
        r.setDate(r.getDate() + 1);
        break;
      case xe.DAY_7:
        r.setDate(r.getDate() + 7);
        break;
      case xe.DAY_14:
        r.setDate(r.getDate() + 14);
        break;
      case xe.DAY_30:
        r.setMonth(r.getMonth() + 1);
        break
    }
    return r.getTime()
  },
  Pr = (s, t) => {
    const r = [],
      o = [],
      n = {};
    let a;
    s.length > 0 && (a = Ir(s[0].time, t)), s.forEach(c => {
      const d = c.time;
      if (d >= a) {
        const u = Qe(d, he(t));
        n[u] || (n[u] = []), n[u].push(c), a = Ir(d, t)
      }
    });
    for (const c in n) {
      let d = 0;
      n[c].forEach(u => {
        u.accumulated_total_usd > d && (d = u.accumulated_total_usd)
      }), r.push(c), o.push(d)
    }
    return {
      xAxis: r,
      yAxis: o
    }
  },
  ci = s => {
    const {
      chart: t,
      width: r,
      timeIncrement: o,
      token: n,
      poolSummary: a,
      analyticsPosition: c,
      hoveredTick: d,
      setHoveredTick: u
    } = s, [h, g] = l.useState(c ? c.position.pool : ds);
    l.useEffect(() => {
      c && g(c.position.pool)
    }, [c]);
    const {
      data: x,
      error: f
    } = Y("cush_simulatePoolLiquidity", [h, 0]), j = (m, _, y, N) => {
      switch (m) {
        case L.LIQUIDITY:
          return e.jsx(To, {
            height: 300,
            width: r,
            liquidityChart: y,
            poolSummary: a,
            address: h,
            token: n,
            setHoveredTick: u,
            hoveredTick: d
          });
        case L.FEES:
          const {
            xAxis: w, yAxis: p
          } = Pr(_.position.fee_history.historic_fees, N);
          return e.jsx(Rs, {
            yData: p,
            xData: w,
            style: {
              width: r
            },
            isLoading: _ === void 0
          });
        default:
          const {
            xAxis: S, yAxis: v
          } = Pr(_.position.fee_history.historic_fees, N);
          return e.jsx(Rs, {
            yData: v,
            xData: S,
            style: {
              width: r
            },
            isLoading: _ === void 0
          })
      }
    };
    return e.jsx("div", {
      className: "flex items-end justify-center flex-1  overflow-hidden ",
      children: f ? e.jsx(Rt, {}) : x && c ? t === L.FEES && (c.position.fee_history.historic_fees === null || c.position.fee_history.historic_fees.length <= 2) ? e.jsx(sr, {}) : j(t, c, x, o) : e.jsx(Ft, {})
    })
  };

function di(s) {
  const {
    height: t,
    width: r,
    timeIncrement: o,
    setTimeIncrement: n,
    analyticsPosition: a
  } = s, c = l.useRef(null), {
    uuid: d
  } = ge(), {
    data: u
  } = Y("cush_searchPoolsByAddress", [a ? a.position.pool : ds], {}), [h, g] = l.useState(L.LIQUIDITY), [x, f] = go({}, 50), [j, m] = l.useState(void 0), [_, y] = l.useState(void 0), [N, w] = l.useState({
    selected: 0,
    decimals: 0,
    sign: -1
  }), p = [L.LIQUIDITY, L.FEES], S = r;
  l.useEffect(() => {
    g(L.LIQUIDITY)
  }, [d]), l.useEffect(() => {
    const b = E => {
      c.current && c.current.contains(E.target) && E.preventDefault()
    };
    return document.addEventListener("wheel", b, {
      passive: !1
    }), () => {
      document.removeEventListener("wheel", b)
    }
  }, [c]);
  const v = b => {
    const E = {
      selected: b,
      decimals: N.decimals,
      sign: b === 0 ? 1 : -1
    };
    w(E)
  };
  return l.useEffect(() => {
    u && u.pools && u.pools.length > 0 && f(u.pools[0])
  }, [u]), l.useEffect(() => {
    const b = x.is_preferred_token_order ? 1 : 0,
      E = {
        selected: b,
        decimals: 0,
        sign: b === 0 ? 1 : -1
      };
    E.decimals = x.t1_decimals - x.t0_decimals, w(E)
  }, [x]), e.jsxs("div", {
    ref: c,
    className: "flex flex-col   duration-[500ms]",
    style: {
      height: t,
      width: r
    },
    children: [x && e.jsx($t, {
      page: We.INDV_POS_PAGE,
      chartList: p,
      positionCreatedDate: a && (a == null ? void 0 : a.position.created_date),
      range: a && {
        lower: a.position.tickLower,
        upper: a.position.tickUpper
      },
      chart: h,
      maxFeeLength: _,
      setChart: g,
      timeIncrement: o,
      setTimeIncrement: n,
      token: N,
      setToken: v,
      poolSummary: x,
      hoveredTick: j
    }), e.jsx(ci, {
      setMaxFeeLength: y,
      timeIncrement: o,
      chart: h,
      width: S,
      token: N,
      poolSummary: x,
      analyticsPosition: a,
      hoveredTick: j,
      setHoveredTick: m
    })]
  })
}

function ui(s) {
  const {
    pool: t,
    position: r,
    link: o
  } = s, {
    currentChainInfo: n
  } = R(), a = () => e.jsx(e.Fragment, {
    children: t && e.jsx("div", {
      className: "flex flex-row items-center gap-2",
      children: e.jsx(Ra, {
        token0Address: t.t0,
        token1Address: t.t1,
        token0Symbol: t.t0_symbol,
        token1Symbol: t.t1_symbol,
        fee: t.fee,
        poolAddress: t.address
      })
    })
  }), c = () => e.jsxs("div", {
    className: "flex flex-row items-center gap-1",
    children: [e.jsx(ps, {
      clipboardItem: h
    }), e.jsx(js, {
      hoverText: "Ukia Trade",
      onClick: () => {
        Kr("Info Edit Position", {
          position_id: r == null ? void 0 : r.position.tokenId,
          chain: n.id
        }), window.open(o)
      }
    })]
  }), d = () => e.jsxs("div", {
    className: "flex flex-row gap-2 items-center",
    children: [e.jsx("div", {
      children: r ? e.jsx(Ht, {
        status: r.position.status
      }) : e.jsx(e.Fragment, {})
    }), e.jsx("div", {
      className: "p-2 rounded-[6px] border-[1px]",
      children: r != null && r.position.tokenId ? e.jsxs(C, {
        children: ["ID: ", r == null ? void 0 : r.position.tokenId]
      }) : e.jsx(e.Fragment, {})
    })]
  }), u = () => e.jsxs("div", {
    className: "flex flex-row gap-2 items-center",
    children: [r && e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "hidden md:block",
        children: e.jsx(C, {
          children: "User:"
        })
      }), e.jsx(ls, {
        address: r == null ? void 0 : r.position.user,
        size: 20
      })]
    }), r && e.jsx(e.Fragment, {
      children: e.jsxs(pe, {
        to: `../user/${r==null?void 0:r.position.user}`,
        rel: "noopener noreferrer",
        children: [e.jsx(C, {
          children: nt(r == null ? void 0 : r.position.user)
        }), e.jsx("div", {
          className: "w-full h-[1px] bg-white"
        })]
      })
    })]
  }), h = window.location.href;
  return e.jsx("div", {
    children: t && r ? e.jsxs(e.Fragment, {
      children: [e.jsxs("div", {
        className: "md:hidden",
        children: [e.jsxs("div", {
          className: "flex flex-row justify-between",
          children: [a(), c()]
        }), e.jsxs("div", {
          className: "flex my-4 justify-between items-center",
          children: [d(), u()]
        })]
      }), e.jsxs("div", {
        className: "flex-row justify-between hidden items-center md:flex",
        children: [e.jsxs("div", {
          className: "flex flex-row gap-2",
          children: [a(), d(), c()]
        }), e.jsx("div", {
          children: u()
        })]
      })]
    }) : e.jsx(er, {})
  })
}
var Mr;
(function (s) {
  s.Token0Amount = "TOKEN0_AMOUNT", s.Token1Amount = "TOKEN1_AMOUNT", s.Value = "VALUE", s.Collected = "COLLECTED", s.Uncollected = "UNCOLLECTED", s.Date = "DATE"
})(Mr || (Mr = {}));
const ht = 10;

function hi(s) {
  const {
    positionsData: t,
    setOtherPositionsCurrentPage: r
  } = s, [o, n] = l.useState([]), [a, c] = l.useState(1), [d, u] = l.useState([]), [h, g] = l.useState(), [x, f] = l.useState(), j = "h-14 px-4";
  l.useEffect(() => {
    n(t)
  }, [t]), l.useEffect(() => {
    const v = (a - 1) * ht,
      b = v + ht,
      E = o.slice(v, b);
    u(E.map(A => ({
      ...A,
      link: `../position/${A._key}`
    }))), r(E.length)
  }, [a, o]);
  const m = () => {
      h === "TOKEN0_AMOUNT" ? (u([...d].reverse()), f(x === T.DESC ? T.ASC : T.DESC)) : (u([...d].sort((v, b) => Number(b.amount0_current_usd) - Number(v.amount0_current_usd))), f(T.DESC)), g("TOKEN0_AMOUNT")
    },
    _ = () => {
      h === "TOKEN1_AMOUNT" ? (u([...d].reverse()), f(x === T.DESC ? T.ASC : T.DESC)) : (u([...d].sort((v, b) => Number(b.amount1_current_usd) - Number(v.amount1_current_usd))), f(T.DESC)), g("TOKEN1_AMOUNT")
    },
    y = () => {
      h === "VALUE" ? (u([...d].reverse()), f(x === T.DESC ? T.ASC : T.DESC)) : (u([...d].sort((v, b) => Number(b.total_value_current_usd) - Number(v.total_value_current_usd))), f(T.DESC)), g("VALUE")
    },
    N = () => {
      h === "COLLECTED" ? (u([...d].reverse()), f(x === T.DESC ? T.ASC : T.DESC)) : (u([...d].sort((v, b) => Number(b.collected_fees_usd) - Number(v.collected_fees_usd))), f(T.DESC)), g("COLLECTED")
    },
    w = () => {
      h === "UNCOLLECTED" ? (u([...d].reverse()), f(x === T.DESC ? T.ASC : T.DESC)) : (u([...d].sort((v, b) => Number(b.uncollected_fees_usd) - Number(v.uncollected_fees_usd))), f(T.DESC)), g("UNCOLLECTED")
    },
    p = () => {
      h === "DATE" ? (u([...d].reverse()), f(x === T.DESC ? T.ASC : T.DESC)) : (u([...d].sort((v, b) => b.create_time > v.create_time ? 1 : -1)), f(T.DESC)), g("DATE")
    },
    S = () => Ue({
      headers: [{
        title: "Pool",
        headerClass: `${j} text-left`,
        dataClass: `${j} text-left`,
        render: v => e.jsx("div", {
          className: "flex gap-1",
          children: e.jsx(It, {
            token0Address: v.t0,
            token1Address: v.t1,
            token0Symbol: v.t0_symbol,
            token1Symbol: v.t1_symbol,
            fee: v.pool_fee
          })
        })
      }, {
        title: "Status",
        headerClass: `${j} text-left`,
        dataClass: `${j} text-left`,
        render: v => e.jsx(Ht, {
          status: v.status
        })
      }, {
        title: "Range",
        headerClass: `${j} text-left`,
        dataClass: `${j} text-right relative z-10`,
        render: v => e.jsx("div", {
          children: e.jsx(tr, {
            currentPrice: v.current_pool_price,
            rangeLower: v.price_range.lowerPrice,
            rangeUpper: v.price_range.upperPrice,
            isClosed: v.status === "closed"
          })
        })
      }, {
        title: e.jsx(U, {
          title: "Token Amount",
          handleSortingToggle: () => m(),
          sorting: h === "TOKEN0_AMOUNT" ? x : void 0
        }),
        headerClass: `${j} text-right pl-2`,
        dataClass: `${j} text-right pl-2`,
        render: v => e.jsxs("div", {
          className: "flex justify-end gap-1",
          children: [e.jsx(C, {
            color: i.gray[200],
            children: e.jsx(k, {
              num: Number(v.amount0_current) / 10 ** v.t0_decimals,
              singleLetterNotation: !0
            })
          }), e.jsx(C, {
            color: i.gray[200],
            children: v.t0_symbol
          })]
        })
      }, {
        title: e.jsx(U, {
          title: "Token Amount",
          handleSortingToggle: () => _(),
          sorting: h === "TOKEN1_AMOUNT" ? x : void 0
        }),
        headerClass: `${j} text-right`,
        dataClass: `${j} text-right`,
        render: v => e.jsxs("div", {
          className: "flex justify-end gap-1",
          children: [e.jsx(C, {
            color: i.gray[200],
            children: e.jsx(k, {
              num: Number(v.amount1_current) / 10 ** v.t1_decimals,
              singleLetterNotation: !0
            })
          }), e.jsx(C, {
            color: i.gray[200],
            children: v.t1_symbol
          })]
        })
      }, {
        title: e.jsx(U, {
          title: "Value",
          handleSortingToggle: () => y(),
          sorting: h === "VALUE" ? x : void 0
        }),
        headerClass: `${j} text-right`,
        dataClass: `${j} text-right`,
        render: v => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: v.total_value_current_usd,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: e.jsx(U, {
          title: "Collected",
          handleSortingToggle: () => N(),
          sorting: h === "COLLECTED" ? x : void 0
        }),
        headerClass: `${j} text-right`,
        dataClass: `${j} text-right`,
        render: v => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: v.collected_fees_usd,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: e.jsx(U, {
          title: "Uncollected",
          handleSortingToggle: () => w(),
          sorting: h === "UNCOLLECTED" ? x : void 0
        }),
        headerClass: `${j} text-right`,
        dataClass: `${j} text-right`,
        render: v => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(C, {
            color: i.gray[200],
            children: ["$", e.jsx(k, {
              num: v.uncollected_fees_usd,
              singleLetterNotation: !0
            })]
          })
        })
      }, {
        title: e.jsx(U, {
          title: "Date",
          handleSortingToggle: () => p(),
          sorting: h === "DATE" ? x : void 0
        }),
        headerClass: `${j} text-right pl-2`,
        dataClass: `${j} text-right pl-2`,
        render: v => e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(C, {
            color: i.gray[200],
            children: gs(v.create_time)
          })
        })
      }],
      config: {
        tableClass: "w-full overflow-y-auto",
        tbodyClass: "",
        headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-400 text-[14px] font-regular rounded-tr-xl rounded-tl-xl",
        dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer"
      },
      data: d
    });
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-12 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "No other positions"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(S, {})
      }), e.jsx(Ge, {
        currentPage: a,
        totalCount: t.length,
        pageSize: ht,
        onPageChange: v => c(v)
      })]
    })
  })
}
var Ar;
(function (s) {
  s.MINT = "pool_mint", s.BURN = "pool_burn", s.COLLECT = "pool_collect"
})(Ar || (Ar = {}));
const xt = 10;

function xi(s) {
  const {
    transactionsData: t,
    poolData: r,
    setSortedTransactionsLength: o
  } = s, [n, a] = l.useState(1), [c, d] = l.useState([]), {
    currentChainInfo: u
  } = R(), [h, g] = l.useState(t), [x, f] = l.useState(T.ASC), j = () => {
    g([...h].reverse()), f(x === T.DESC ? T.ASC : T.DESC)
  }, m = "h-14 px-4";
  l.useEffect(() => {
    const w = (n - 1) * xt,
      p = w + xt,
      S = h.slice(w, p);
    d(S.map(v => ({
      ...v,
      link: lt("tx", v.txn.toString(), u.id)
    }))), o(S.length)
  }, [n, t, h, r]);
  const _ = w => {
      switch (w) {
        case "pool_mint":
          return "Mint";
        case "pool_burn":
          return "Burn";
        case "pool_collect":
          return "Collect";
        default:
          return w
      }
    },
    y = [{
      title: "Transaction Hash",
      headerClass: `${m} text-left`,
      dataClass: `${m} text-left`,
      render: w => {
        const p = w.txn.toString();
        return e.jsx("div", {
          children: e.jsx(C, {
            color: i.blue[400],
            children: nt(p)
          })
        })
      }
    }, {
      title: "Type",
      headerClass: `${m} text-left`,
      dataClass: `${m} text-left`,
      render: w => e.jsx("div", {
        children: e.jsx(C, {
          color: i.gray[200],
          children: _(w.eventType)
        })
      })
    }, {
      title: "Token Amount",
      headerClass: `${m} text-right pl-2`,
      dataClass: `${m} text-right pl-2`,
      render: w => e.jsxs("div", {
        className: "flex justify-end gap-1",
        children: [e.jsx(C, {
          color: i.gray[200],
          children: w.amount0 && e.jsx(k, {
            num: Number(w.amount0) * 10 ** (-1 * r.t0_decimals)
          })
        }), e.jsx(C, {
          color: i.gray[200],
          children: r.t0_symbol
        })]
      })
    }, {
      title: "Token Amount",
      headerClass: `${m} text-right pl-2`,
      dataClass: `${m} text-right pl-2`,
      render: w => e.jsx("div", {
        className: "flex justify-end gap-1",
        children: e.jsxs("div", {
          className: "flex justify-end gap-1",
          children: [e.jsxs(C, {
            color: i.gray[200],
            children: [" ", w.amount1 && e.jsx(k, {
              num: Number(w.amount1) * 10 ** (-1 * r.t1_decimals)
            })]
          }), e.jsx(C, {
            color: i.gray[200],
            children: r.t1_symbol
          })]
        })
      })
    }, {
      title: "Value",
      headerClass: `${m} text-right`,
      dataClass: `${m} text-right `,
      render: w => {
        var p, S;
        return e.jsx(Eo, {
          txn: w.txn,
          pastValue: (p = w.past_values) == null ? void 0 : p.total_value_past,
          currentValue: (S = w.current_values) == null ? void 0 : S.total_value_current
        })
      }
    }, {
      title: e.jsx(U, {
        title: "Date",
        handleSortingToggle: () => j(),
        sorting: x
      }),
      headerClass: `${m} text-right pl-2`,
      dataClass: `${m} text-right pl-2`,
      render: w => e.jsx("div", {
        className: "flex justify-end",
        children: e.jsx(C, {
          color: i.gray[200],
          children: gs(w.ts)
        })
      })
    }],
    N = {
      tableClass: "w-full overflow-y-auto",
      tbodyClass: "",
      headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-400 text-[14px] font-regular rounded-tr-xl rounded-tl-xl",
      dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer"
    };
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "mt-12 flex flex-1 justify-center w-full",
      children: e.jsx(F, {
        children: "No recent transactions yet"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(Ue, {
          headers: y,
          config: N,
          data: c
        })
      }), e.jsx(Ge, {
        currentPage: n,
        totalCount: t.length,
        pageSize: xt,
        onPageChange: w => a(w)
      })]
    })
  })
}

function fi() {
  const [s, t] = l.useState(), [r, o] = l.useState(!1), [n, a] = l.useState(0), [c, d] = l.useState(0), [u, h] = l.useState(!1), [g, x] = l.useState(xe.HOUR_1), [f, j] = l.useState(void 0), [m, _] = l.useState(), [y, N] = l.useState(), [w, p] = l.useState(), {
    uuid: S
  } = ge(), {
    data: v
  } = Y("cush_analyticsPosition", [{
    uuid: S
  }]), {
    data: b
  } = Y("cush_analyticsPool", [v ? v.position.pool : ""], {
    enabled: v != null && v.position.pool != ""
  });
  l.useEffect(() => {
    t(void 0)
  }, [S]), l.useEffect(() => {
    v && (E(v), N(v.related_positions ? v.related_positions : []), p(v.position.position_events))
  }, [v]), l.useEffect(() => {
    t(b)
  }, [b]);
  const E = M => {
      const D = [];
      D.push({
        itemTitle: "PnL",
        itemValue: e.jsx(k, {
          num: M.position.position_profit.pnl_usd_after_fees,
          singleLetterNotation: !0
        }),
        simbol: "$"
      }), D.push({
        itemTitle: "APR",
        itemValue: e.jsxs("div", {
          className: "flex flex-row",
          children: [e.jsx(k, {
            num: M.position.estimated_apr.estimated_apr * 100
          }), "%"]
        })
      }), D.push({
        itemTitle: "Value",
        itemValue: e.jsx(k, {
          num: M.position.current_position_values.total_value_current_usd,
          singleLetterNotation: !0
        }),
        simbol: "$"
      }), D.push({
        itemTitle: "Fees",
        itemValue: e.jsx(k, {
          num: M.position.position_profit.collected_usd_fees + M.position.position_profit.uncollected_usd_fees,
          singleLetterNotation: !0
        }),
        simbol: "$"
      }), D.push({
        itemTitle: "Date",
        itemValue: gs(M.position.created_date)
      }), _(D)
    },
    {
      isMenuCollapsed: A
    } = Pe(),
    {
      isMobile: V
    } = de(),
    $ = V ? Pt : gt,
    B = V ? fs : mt,
    I = V ? bt : wt,
    Q = V ? Ct : At,
    Z = I - 2 * ((V ? Ot : _t) + ae),
    P = window.innerWidth - Mt - B - Re - 2 * ($ + Q + ae),
    G = window.innerWidth - Ie - B - Re - 2 * ($ + Q + ae),
    q = window.innerWidth - 2 * ($ + Q + ae),
    W = J({
      base: !1,
      md: !0
    }),
    {
      width: ve
    } = vt(),
    Ne = ve >= 1167,
    {
      currentChainInfo: ue
    } = R(),
    ye = l.useMemo(() => Ce(s && w, n < xt ? n : xt, !1, !(w && w.length <= xt), !1, 0), [s, w, n]),
    me = l.useMemo(() => Ce(y, c < ht ? c : ht, !1, !(y && y.length <= ht), !1, 0), [y, c]),
    je = v ? `${v.position.position_pool_data.token0_symbol}/${v.position.position_pool_data.token1_symbol} Position | ${v.position.uuid} on ${ue.name} | Ukia Analytics` : "Position | Ukia Analytics",
    K = v ? `Check out this ${v.position.position_pool_data.token0_name} - ${v.position.position_pool_data.token1_name} position on Ethereum at ${(v.position.estimated_apr.estimated_apr*100).toFixed(2)}% APR with a current PnL of $${v.position.position_profit.pnl_usd_after_fees.toFixed(2)} . View this position and others on Ethereum with DeFi’s best analytics platform.` : "";
  return e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className: "flex flex-col gap-4",
      children: [e.jsx(Ye, {
        pageTitle: je
      }), e.jsx(et, {
        pageDescription: K
      }), e.jsx(vs, {}), e.jsx(ui, {
        position: v,
        pool: s,
        link: `${qs}/app/${ue.internalName}/liquidity/${v==null?void 0:v.position.pool}/${v==null?void 0:v.position.tokenId}`
      }), e.jsx(Ut, {
        overviewItems: m,
        children: e.jsx(di, {
          height: Z,
          width: W ? Ne ? A ? G : P : G + Ie : q,
          timeIncrement: g,
          setTimeIncrement: x,
          xBounds: f,
          setXBounds: j,
          analyticsPosition: v
        })
      }), e.jsx(we, {
        id: "transaction_history",
        isLoading: s === void 0,
        height: r ? De : ye,
        header: e.jsx(_e, {
          title: "Transaction History",
          onClick: () => o(!r),
          isCollapsed: r
        }),
        children: e.jsx(e.Fragment, {
          children: s && w && e.jsx(xi, {
            setSortedTransactionsLength: a,
            poolData: s,
            transactionsData: w
          })
        })
      }), e.jsx(we, {
        id: "other_positions",
        isLoading: s === void 0,
        height: u ? De : me,
        header: e.jsx(_e, {
          title: "Other positions from this user",
          onClick: () => h(!u),
          isCollapsed: u
        }),
        children: e.jsx(e.Fragment, {
          children: y && e.jsx(hi, {
            positionsData: y,
            setOtherPositionsCurrentPage: d
          })
        })
      })]
    })
  })
}

function gi(s) {
  const t = [],
    n = +ws(new Date),
    a = +ws(n - 157248e5);
  for (let d = a; d <= n; d += 864e5) t.push([zt(d, "{yyyy}-{MM}-{dd}", !0), 0]);
  for (let d = 0; d < s.length; d++) {
    const u = ws(s[d].ts);
    t.push([zt(u, "{yyyy}-{MM}-{dd}", !0), s[d].count])
  }
  const c = Math.max(...t.map(d => Number(d[1])));
  return {
    echartData: t,
    dataRange: [zt(a, "{yyyy}-{MM}-{dd}", !0), zt(n, "{yyyy}-{MM}-{dd}", !0)],
    max: c
  }
}
const mi = s => {
    const {
      style: t
    } = s, {
      userAddress: r
    } = ge(), {
      data: o,
      isError: n,
      isFetched: a
    } = Y("cush_analyticsUserDailyActivityHistory", [r]), c = l.useRef(null), d = o == null ? void 0 : o.data, {
      echart: u
    } = at({
      chartRef: c,
      options: {
        calendar: {
          cellSize: [t && t.width ? Number(t.width) / 30 < 20 ? 20 : Number(t.width) / 30 : "auto", Number(window.innerWidth) < 760 ? 36 : 40],
          dayLabel: {
            color: `${i.gray[300]}`,
            nameMap: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
          },
          itemStyle: {
            borderColor: `${i.gray.dark}`,
            borderWidth: 7,
            color: `${i.gray[800]}`
          },
          left: 44,
          monthLabel: {
            color: `${i.gray[300]}`,
            fontSize: 12,
            position: "end"
          },
          range: ["2022"],
          splitLine: {
            show: !1
          },
          top: 0,
          yearLabel: {
            show: !1
          }
        },
        series: {
          coordinateSystem: "calendar",
          data: [],
          name: "activityChart",
          type: "heatmap"
        },
        tooltip: {
          backgroundColor: `${i.gray.dark}`,
          borderColor: `${i.gray[700]}`,
          borderRadius: 6,
          formatter: function (h) {
            return `
        <div>
          <p>${new Date(h.data[0]).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",timeZone:"UTC"})}</p>
          <p>Trades: <span style="color:${i.gray[100]};">${h.data[1]}</span><p/>
        </div>`
          },
          textStyle: {
            color: `${i.gray[300]}`
          }
        },
        visualMap: {
          inRange: {
            color: [`${i.activity_chart.blue0}`, `${i.activity_chart.blue1}`, `${i.activity_chart.blue2}`, `${i.activity_chart.blue3}`, `${i.activity_chart.blue4}`]
          },
          left: "center",
          orient: "horizontal",
          show: !1,
          showLabel: !1,
          top: "top",
          type: "piecewise"
        }
      }
    });
    return l.useEffect(() => {
      if (!d || !u) return;
      const {
        echartData: h,
        dataRange: g,
        max: x
      } = gi(d);
      u.setOption({
        visualMap: {
          max: x
        },
        series: {
          name: "activityChart",
          data: h
        },
        calendar: {
          range: g,
          cellSize: [t && t.width ? Number(t.width) / 30 < 20 ? 20 : Number(t.width) / 30 : "auto", Number(window.innerWidth) < 760 ? 36 : 40],
          itemStyle: {}
        }
      })
    }, [u, d]), l.useEffect(() => {
      u && (a ? u.hideLoading() : u.showLoading("default", {
        color: "white",
        textColor: "white",
        maskColor: "rgba(0,0,0,0)"
      }))
    }, [u, d]), e.jsx("div", {
      children: n ? e.jsx(Rt, {}) : (d == null ? void 0 : d.length) === 0 ? e.jsx(sr, {}) : e.jsx("div", {
        ref: c,
        className: "no-scrollbar",
        style: {
          height: "100%",
          width: t == null ? void 0 : t.width,
          minWidth: t == null ? void 0 : t.width,
          maxWidth: t == null ? void 0 : t.width,
          ...t
        }
      })
    })
  },
  pi = Object.values(i.activity_chart);

function Or({
  chart: s,
  setChart: t,
  clientHeight: r,
  clientWidth: o
}) {
  const {
    userAddress: n
  } = ge(), {
    data: a
  } = Y("cush_analyticsUserDailyActivityHistory", [n]);
  return e.jsx("div", {
    className: "relative flex flex-1",
    style: {
      height: r
    },
    children: e.jsx("div", {
      className: "flex flex-1 items-start justify-start flex-col",
      style: {
        width: o,
        height: r
      },
      children: e.jsxs("div", {
        className: "flex flex-col w-full justify-between flex-1",
        children: [e.jsx(ji, {
          chart: s,
          setChart: t,
          totalTrades: a == null ? void 0 : a.total_trades,
          maxValue: a == null ? void 0 : a.max_value
        }), e.jsxs("div", {
          className: " h-full w-full flex flex-1 overflow-scroll no-scrollbar ",
          style: {
            justifyContent: o > 1200 ? "center" : "left"
          },
          children: [e.jsx(mi, {
            style: {
              overflowX: "scroll",
              width: o > 1200 ? 1200 : o <= 760 ? 760 : o
            }
          }), e.jsx("div", {
            className: "absolute top-[97%] right-0",
            children: e.jsx(X, {
              color: i.gray[500],
              children: "Time Value in UTC"
            })
          })]
        })]
      })
    })
  })
}
const ji = ({
    chart: s,
    setChart: t,
    totalTrades: r,
    maxValue: o
  }) => e.jsxs("div", {
    className: "flex flex-col gap-4 justify-between",
    children: [e.jsxs("div", {
      className: "flex flex-row justify-between w-full gap-3",
      children: [e.jsx("div", {
        className: "w-[150px]",
        children: e.jsx(F, {
          weight: O.SEMIBOLD,
          children: "Activity"
        })
      }), e.jsx(vi, {
        maxValue: o
      }), e.jsx("div", {
        className: "w-[150px]",
        children: e.jsx(yo, {
          chart: s,
          setChart: t,
          chartList: [L.ACTIVITY, L.VOLUME]
        })
      })]
    }), e.jsx("div", {
      className: "flex flex-row  justify-between h-[30px] ",
      children: r ? e.jsxs(C, {
        color: i.gray[500],
        children: ["Total: ", r, " "]
      }) : e.jsx(e.Fragment, {})
    })]
  }),
  vi = ({
    maxValue: s
  }) => e.jsx(e.Fragment, {
    children: s ? e.jsxs("div", {
      className: "flex flex-row gap-2 items-center",
      children: [e.jsx(X, {
        children: "0"
      }), pi.map((t, r) => e.jsx("div", {
        className: "w-[20px] h-[20px] relative",
        style: {
          backgroundColor: t
        }
      }, r)), e.jsx(X, {
        children: s
      })]
    }) : e.jsx(e.Fragment, {})
  });

function yi(s) {
  const {
    chart: t,
    setChart: r,
    chartList: o,
    clientHeight: n,
    clientWidth: a,
    timeIncrement: c,
    setTimeIncrement: d,
    data: u
  } = s, h = l.useRef(null);
  return l.useEffect(() => {
    const g = x => {
      h.current && h.current.contains(x.target) && x.preventDefault()
    };
    return document.addEventListener("wheel", g, {
      passive: !1
    }), () => {
      document.removeEventListener("wheel", g)
    }
  }, [h]), e.jsx("div", {
    ref: h,
    className: "flex flex-col border-gray-800  relative ",
    style: {
      height: 377,
      width: "100%"
    },
    children: e.jsx("div", {
      className: "flex flex-1 ",
      children: e.jsxs("div", {
        className: "flex flex-1 flex-col border-gray-800 absolute ",
        style: {
          height: n,
          width: a
        },
        children: [e.jsx($t, {
          page: We.OVERVIEW_PAGE,
          chartList: o,
          chart: t,
          setChart: r,
          timeIncrement: c,
          setTimeIncrement: d
        }), e.jsx("div", {
          className: "flex items-end justify-center flex-1  overflow-hidden ",
          children: u && e.jsx(ms, {
            yData: u.map(g => g.volume),
            xData: u.map(g => Qe(g.time, he(c))),
            style: {
              width: a
            },
            isLoading: u === void 0,
            timeIncrement: c
          })
        })]
      })
    })
  })
}

function bi() {
  const {
    isMenuCollapsed: s
  } = Pe(), [t, r] = l.useState(L.ACTIVITY), o = [L.ACTIVITY, L.VOLUME], {
    isMobile: n
  } = de(), a = n ? Pt : gt, c = n ? bt : wt, d = n ? Ct : At, h = c - 2 * ((n ? Ot : _t) + ae), g = window.innerWidth - Mt - mt - Re - 2 * (gt + d + ae) - 10, x = window.innerWidth - Ie - mt - Re - 2 * (a + d + ae) - 10, f = window.innerWidth - 2 * (a + d + ae), j = J({
    base: !1,
    md: !0
  }), {
    width: m
  } = vt(), _ = m >= 1167, y = j ? _ ? s ? x : g : x + Ie : f, N = (I, Q, H, Z, P, G) => {
    switch (I) {
      case L.VOLUME:
        return e.jsx(yi, {
          chartList: o,
          chart: I,
          setChart: r,
          clientHeight: h,
          clientWidth: y,
          data: Q,
          timeIncrement: P,
          setTimeIncrement: G,
          error: H,
          isLoading: Z
        });
      case L.ACTIVITY:
        return e.jsx(Or, {
          chart: I,
          setChart: r,
          clientHeight: h,
          clientWidth: y
        });
      default:
        return e.jsx(Or, {
          chart: I,
          setChart: r,
          clientHeight: h,
          clientWidth: y
        })
    }
  }, {
    userAddress: w
  } = ge(), [p, S] = l.useState(xe.DAY_1), {
    data: v,
    isError: b,
    isFetching: E
  } = Y("cush_analyticsUserVolumeHistoric", [w, -1 * he(p) * 1800, 0, he(p)]), [A, V] = l.useState(!1);
  l.useEffect(() => {
    b && V(!0)
  }, [b]), l.useEffect(() => {
    v && V(!1)
  }, [v]);
  const [$, B] = l.useState(void 0);
  return l.useEffect(() => {
    v && B(v)
  }, [v]), l.useEffect(() => {
    B(void 0)
  }, [p]), l.useEffect(() => {
    B(void 0)
  }, [w]), e.jsx("div", {
    className: "flex flex-1 cursor-default",
    children: N(t, $, A, E, p, S)
  })
}

function wi() {
  const {
    userAddress: s
  } = ge(), {
    currentChainInfo: t
  } = R(), r = s ? lt("address", s == null ? void 0 : s.toString(), t.id) : "", [o, n] = l.useState();
  return l.useEffect(() => {
    n(void 0), Ws(Et, {
      chainId: 1,
      address: s
    }).then(a => {
      n(a || void 0)
    })
  }, [s]), e.jsx("div", {
    className: "flex justify-start  flex-col gap-6",
    children: e.jsxs("div", {
      className: "flex flex-row gap-3",
      children: [s && e.jsx(pe, {
        to: r,
        target: "_blank",
        rel: "noopener noreferrer",
        children: e.jsxs("div", {
          className: "flex flex-row gap-2 items-center",
          children: [e.jsx(ls, {
            size: 36,
            address: s
          }), e.jsx(F, {
            children: o || nt(s)
          })]
        })
      }), e.jsx(js, {
        hoverText: Js(t.id),
        onClick: () => {
          window.open(r)
        }
      }), s && e.jsx(ps, {
        clipboardItem: s
      })]
    })
  })
}
var Hs;
(function (s) {
  s.VALUE = "total_value_current_usd", s.CREATE_TIME = "create_time", s.PNL = "pnl_usd_after_fees", s.TOKEN_0_AMOUNT = "amount0_current", s.TOKEN_1_AMOUNT = "amount1_current"
})(Hs || (Hs = {}));
const st = 10;

function Ci(s) {
  const {
    positionsData: t,
    pageSize: r,
    setSearchUserPositionFilterOpts: o,
    setPage: n,
    totalNumberOfPositions: a,
    positionStatusSelected: c,
    sortingOrder: d,
    setSortingOrder: u,
    sortingProperty: h,
    setSortingProperty: g,
    userAddress: x
  } = s, [f, j] = l.useState(1), [m, _] = l.useState([]), y = "h-14 px-4";
  l.useEffect(() => {
    _(t.map((p, S) => ({
      ...p,
      place: (f - 1) * r + S + 1,
      link: `../position/${p._key}`
    })))
  }, [t]), l.useEffect(() => {
    o && n && (o({
      result_offset: f - 1,
      result_size: r,
      sort_by: h || "",
      sort_order: d === T.ASC,
      status: c || "",
      user: x
    }), n(f))
  }, [f, h, d]);
  const N = p => {
      u && g && (p === h ? u(d === T.ASC ? T.DESC : T.ASC) : (g(p), u(T.DESC)), j(1))
    },
    w = () => Ue({
      headers: [{
        title: e.jsx("div", {
          className: "flex justify-start px-3",
          children: e.jsx(U, {
            title: "Date",
            handleSortingToggle: () => N("create_time"),
            sorting: h === "create_time" ? d : void 0
          })
        }),
        headerClass: `${y} text-left`,
        dataClass: `${y} text-left`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsx("div", {
            children: e.jsx(C, {
              color: i.gray[200],
              children: gs(p.create_time)
            })
          }) : ""
        })
      }, {
        title: "Token ID",
        headerClass: `${y} text-right`,
        dataClass: `${y} text-right`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsx("div", {
            className: "flex justify-end",
            children: e.jsx(C, {
              color: i.blue[400],
              children: p.token_id
            })
          }) : ""
        })
      }, {
        title: "Pool",
        headerClass: `${y} text-left`,
        dataClass: `${y} text-left`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsx("div", {
            className: "flex items-center gap-x-2",
            children: e.jsx(Vt, {
              t0: p.t0,
              t1: p.t1,
              t1_symbol: p.t1_symbol,
              t0_symbol: p.t0_symbol,
              fee: p.pool_fee
            })
          }) : ""
        })
      }, {
        title: "Range",
        headerClass: `${y} text-left`,
        dataClass: `${y} text-right relative z-10`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsx(tr, {
            currentPrice: p.price_range.current_pool_prices,
            rangeLower: p.price_range.lowerPrice,
            rangeUpper: p.price_range.upperPrice,
            isClosed: p.status === "closed"
          }) : ""
        })
      }, {
        title: e.jsx(U, {
          title: "Token Amount",
          handleSortingToggle: () => N("amount0_current"),
          sorting: h === "amount0_current" ? d : void 0
        }),
        headerClass: `${y} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsxs("div", {
            className: "flex justify-end gap-1",
            children: [e.jsx(C, {
              color: i.gray[200],
              children: e.jsx(k, {
                num: Number(p.amount0_current) / 10 ** p.t0_decimals,
                singleLetterNotation: !0
              })
            }), e.jsx(C, {
              color: i.gray[200],
              children: p.t0_symbol
            })]
          }) : ""
        })
      }, {
        title: e.jsx(U, {
          title: "Token Amount",
          handleSortingToggle: () => N("amount1_current"),
          sorting: h === "amount1_current" ? d : void 0
        }),
        headerClass: `${y} text-right`,
        dataClass: `${y} text-right`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsxs("div", {
            className: "flex justify-end gap-1",
            children: [e.jsx(C, {
              color: i.gray[200],
              children: e.jsx(k, {
                num: Number(p.amount1_current) / 10 ** p.t1_decimals,
                singleLetterNotation: !0
              })
            }), e.jsx(C, {
              color: i.gray[200],
              children: p.t1_symbol
            })]
          }) : ""
        })
      }, {
        title: e.jsx(U, {
          title: "Value",
          handleSortingToggle: () => N("total_value_current_usd"),
          sorting: h === "total_value_current_usd" ? d : void 0
        }),
        headerClass: `${y} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsx("div", {
            className: "flex justify-end",
            children: e.jsxs(C, {
              color: i.gray[200],
              children: ["$", e.jsx(k, {
                num: p.total_value_current_usd ? Number(p.total_value_current_usd) : 0,
                singleLetterNotation: !0
              })]
            })
          }) : ""
        })
      }, {
        title: "Total Fees",
        headerClass: `${y} text-right pl-2`,
        dataClass: `${y} text-right pl-2`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsx("div", {
            className: "flex justify-end",
            children: e.jsxs(C, {
              color: i.gray[200],
              children: ["$", e.jsx(k, {
                num: p.collected_fees_usd,
                singleLetterNotation: !0
              })]
            })
          }) : ""
        })
      }, {
        title: "Status",
        headerClass: `${y} text-left`,
        dataClass: `${y} text-left`,
        render: p => e.jsx(e.Fragment, {
          children: p.place !== -1 ? e.jsx(Ht, {
            status: p.status
          }) : ""
        })
      }],
      config: {
        tableClass: "w-full overflow-y-auto",
        tbodyClass: "",
        headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-300 text-[14px] font-regular",
        dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer h-14"
      },
      data: m
    });
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "flex flex-1 justify-center mt-12 w-full",
      children: e.jsx(F, {
        children: "No positions"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(w, {})
      }), e.jsx(Ge, {
        currentPage: f,
        totalCount: a,
        pageSize: r,
        onPageChange: p => j(p)
      })]
    })
  })
}
const Lo = s => {
    const {
      order: t,
      alignRight: r = !1
    } = s, {
      currentChainInfo: o
    } = R(), n = be(t.base_currency_address, t.base_currency, o.id), a = be(t.quote_currency_address, t.quote_currency, o.id);
    if (t.type === "MARKET") {
      if (t.side === "BUY") return e.jsxs("div", {
        className: `flex gap-1 ${r?"justify-end":""}`,
        children: [e.jsx(k, {
          num: t.amount_total ? t.amount_total : 0,
          singleLetterNotation: !0
        }), e.jsx("span", {
          children: n
        })]
      }); {
        const c = Number(t.amount_total) * Number(t.price);
        return e.jsxs("div", {
          className: `flex gap-1 ${r?"justify-end":""}`,
          children: [e.jsx(k, {
            num: c,
            singleLetterNotation: !0
          }), e.jsx("span", {
            children: a
          })]
        })
      }
    } else if (t.side === "BUY") {
      const c = Number(t.amount_total) / Number(t.price);
      return e.jsxs("div", {
        className: `flex gap-1 ${r?"justify-end":""}`,
        children: [e.jsx(k, {
          num: c,
          singleLetterNotation: !0
        }), e.jsx("span", {
          children: n
        })]
      })
    } else {
      const c = Number(t.amount_total) * Number(t.price);
      return e.jsxs("div", {
        className: `flex gap-1 ${r?"justify-end":""}`,
        children: [e.jsx(k, {
          num: c,
          singleLetterNotation: !0
        }), e.jsx("span", {
          children: a
        })]
      })
    }
  },
  Do = s => {
    const {
      order: t,
      alignRight: r = !1
    } = s, {
      currentChainInfo: o
    } = R(), n = be(t.base_currency_address, t.base_currency, o.id), a = be(t.quote_currency_address, t.quote_currency, o.id);
    if (t.type === "MARKET")
      if (t.side === "BUY") {
        const c = Number(t.amount_total) * Number(t.price);
        return e.jsxs("div", {
          className: `flex gap-1 ${r?"justify-end":""}`,
          children: [e.jsx(k, {
            num: c,
            singleLetterNotation: !0
          }), e.jsx("span", {
            children: a
          })]
        })
      } else return e.jsxs("div", {
        className: `flex gap-1 ${r?"justify-end":""}`,
        children: [e.jsx(k, {
          num: Number(t.amount_total),
          singleLetterNotation: !0
        }), e.jsx("span", {
          children: n
        })]
      });
    else return t.side === "BUY" ? e.jsxs("div", {
      className: `flex gap-1 ${r?"justify-end":""}`,
      children: [e.jsx(k, {
        num: Number(t.amount_total),
        singleLetterNotation: !0
      }), e.jsx("span", {
        children: a
      })]
    }) : e.jsxs("div", {
      className: `flex gap-1 ${r?"justify-end":""}`,
      children: [e.jsx(k, {
        num: Number(t.amount_total),
        singleLetterNotation: !0
      }), e.jsx("span", {
        children: n
      })]
    })
  },
  _i = s => {
    const {
      order: t
    } = s, r = t.should_flip ? 1 / Number(t.avg_price) : Number(t.avg_price);
    return e.jsxs("div", {
      className: "flex gap-1",
      children: [e.jsx(k, {
        num: r,
        singleLetterNotation: !0
      }), e.jsx("span", {
        children: t.should_flip ? t.base_currency : t.quote_currency
      })]
    })
  },
  Ni = s => {
    const [t, r] = l.useState(i.blue[800]), [o, n] = l.useState(i.blue[500]), a = l.useMemo(() => {
      switch (s.status.toUpperCase()) {
        case Ve.OPEN:
          return r(i.green[700]), n(i.green[400]), "Open";
        case Ve.FILLED:
          return r(i.blue[700]), n(i.blue[400]), "Filled";
        case Ve.CLOSED:
          return r(i.blue[800]), n(i.blue[500]), "Closed";
        case Ve.CLAIMED:
          return r(i.blue[800]), n(i.blue[500]), "Claimed";
        case Ve.IN_RANGE:
          return r(i.green[700]), n(i.green[400]), "In range";
        case Ve.OUT_OF_RANGE:
          return r(i.gray[700]), n(i.yellow[100]), "Out of range";
        case Ve.CANCELLED:
          return r(i.gray[600]), n(i.gray[300]), "Cancelled";
        default:
          return r(i.gray[600]), n(i.gray[300]), "Unknown"
      }
    }, [s.status]), {
      isDesktop: c
    } = de();
    return e.jsx("div", {
      className: "py-1 text-[14px] font-regular rounded-[6px] flex items-center justify-center",
      style: {
        backgroundColor: t,
        width: c ? "94px" : "75px"
      },
      children: e.jsx(X, {
        color: o,
        children: a
      })
    })
  };
var $r;
(function (s) {
  s.Date = "DATE"
})($r || ($r = {}));
const rt = 10,
  Si = s => {
    const {
      order: t
    } = s, r = t.should_flip ? 1 / Number(t.avg_price) : Number(t.avg_price);
    return e.jsxs("div", {
      className: "flex gap-1",
      children: [e.jsx(k, {
        num: r,
        singleLetterNotation: !0
      }), e.jsx("span", {
        children: t.should_flip ? t.base_currency : t.quote_currency
      })]
    })
  };

function ki(s) {
  const {
    orders: t,
    setNumberOrders: r
  } = s, {
    currentChainInfo: o
  } = R(), [n, a] = l.useState(1), [c, d] = l.useState([]), [u, h] = l.useState(), [g, x] = l.useState(), [f, j] = l.useState([]), m = "h-14 px-4";
  l.useEffect(() => {
    j(t.sort((w, p) => new Date(p.time).valueOf() - new Date(w.time).valueOf()))
  }, [t]), l.useEffect(() => {
    const N = (n - 1) * rt,
      w = N + rt,
      p = f.slice(N, w);
    d(p.map((S, v) => {
      var b;
      return {
        ...S,
        place: (n - 1) * rt + v + 1,
        link: S.transaction ? lt("tx", (b = S.transaction) == null ? void 0 : b.toString(), o.id) : ""
      }
    })), r(p.length)
  }, [n, f]);
  const _ = () => {
      u === "DATE" ? (d([...c].reverse()), x(g === T.DESC ? T.ASC : T.DESC)) : (d([...c].sort((N, w) => w.time > N.time ? 1 : -1)), x(T.DESC)), h("DATE")
    },
    y = () => Ue({
      headers: [{
        title: e.jsx("div", {
          className: "flex justify-start px-3",
          children: e.jsx(U, {
            title: "Date",
            handleSortingToggle: () => _(),
            sorting: u === "DATE" ? g : void 0
          })
        }),
        headerClass: `${m} text-left`,
        dataClass: `${m} text-left`,
        render: N => {
          const {
            day: w,
            month: p,
            year: S
          } = rs(N.time);
          return e.jsx(e.Fragment, {
            children: N.place !== -1 ? e.jsx("div", {
              children: e.jsx(C, {
                color: i.gray[200],
                children: `${p}/${w}/${S}`
              })
            }) : ""
          })
        }
      }, {
        title: "Pool",
        headerClass: `${m} text-left`,
        dataClass: `${m}`,
        render: N => e.jsx(e.Fragment, {
          children: N.place !== -1 ? e.jsx("div", {
            children: e.jsx(Vt, {
              t0: N.base_currency_address,
              t1: N.quote_currency_address,
              t0_symbol: N.base_currency,
              t1_symbol: N.quote_currency,
              fee: N.fee
            })
          }) : ""
        })
      }, {
        title: "Buy Amount",
        headerClass: `${m} text-right`,
        dataClass: `${m} text-right`,
        render: N => e.jsx(e.Fragment, {
          children: N.place !== -1 ? e.jsx("div", {
            className: "text-end",
            children: e.jsx(C, {
              color: i.gray[200],
              children: e.jsx(Lo, {
                order: N,
                alignRight: !0
              })
            })
          }) : ""
        })
      }, {
        title: "Sell Amount",
        headerClass: `${m} text-right`,
        dataClass: `${m} text-right`,
        render: N => e.jsx(e.Fragment, {
          children: N.place !== -1 ? e.jsx("div", {
            className: "text-end",
            children: e.jsx(C, {
              color: i.gray[200],
              children: e.jsx(Do, {
                order: N,
                alignRight: !0
              })
            })
          }) : ""
        })
      }, {
        title: "Price",
        headerClass: `${m} text-right`,
        dataClass: `${m} text-right`,
        render: N => e.jsx(e.Fragment, {
          children: N.place !== -1 ? e.jsx("div", {
            className: "flex justify-end",
            children: e.jsx(C, {
              color: i.gray[200],
              children: e.jsx(Si, {
                order: N
              })
            })
          }) : ""
        })
      }, {
        title: "Status",
        headerClass: `${m} text-left`,
        dataClass: `${m} text-left`,
        render: N => e.jsx(e.Fragment, {
          children: N.place !== -1 ? e.jsx("div", {
            className: "w-[65px]",
            children: e.jsx(Ni, {
              status: N.status
            })
          }) : ""
        })
      }],
      config: {
        tableClass: "w-full overflow-y-auto",
        tbodyClass: "",
        headerRowClass: "border-t-[1px] border-t-gray-800 h-14 text-gray-300 text-[14px] font-regular",
        dataRowClass: "group border-[1px] border-gray-800 even:bg-gray-900 hover:bg-gray-950 cursor-pointer h-14"
      },
      data: c
    });
  return e.jsx("div", {
    children: t && t.length <= 0 ? e.jsx("div", {
      className: "flex flex-1 justify-center items-center mt-12 w-full",
      children: e.jsx(F, {
        children: "No orders"
      })
    }) : e.jsxs(e.Fragment, {
      children: [e.jsx("div", {
        className: "overflow-x-auto scrollbar",
        children: e.jsx(y, {})
      }), e.jsx(Ge, {
        currentPage: n,
        totalCount: t.length,
        pageSize: rt,
        onPageChange: N => a(N)
      })]
    })
  })
}
var Fr;
(function (s) {
  s.TIME = "time"
})(Fr || (Fr = {}));

function Ti(s) {
  var je, K;
  const {
    setIsUserTableCollapsed: t
  } = s, {
    userAddress: r
  } = ge(), {
    omniCush: o
  } = Gs(), {
    chain: n
  } = R(), a = l.useRef(null), [c, d] = l.useState("time"), [u, h] = l.useState(T.DESC), [g, x] = l.useState(!1), [f, j] = l.useState(), [m, _] = l.useState(), [y, N] = l.useState([]), [w, p] = l.useState(), [S, v] = l.useState(), b = M => {
    M === c ? u === T.ASC ? h(T.DESC) : h(T.ASC) : (d(M), h(T.DESC))
  }, E = "Market Orders", A = vn(), V = l.useMemo(() => [A.accessor("date", {
    header: () => e.jsx("div", {
      className: "flex justify-start px-3",
      children: e.jsx(U, {
        title: "Date",
        handleSortingToggle: () => b("time"),
        sorting: c === "time" ? u : void 0
      })
    }),
    cell: M => {
      const D = M.row.original,
        {
          day: ee,
          month: ke,
          year: tt,
          hour: re,
          minute: se,
          second: ys
        } = rs(D.time);
      return e.jsx("div", {
        children: e.jsx(C, {
          color: i.gray[200],
          children: `${ke}/${ee}/${tt} ${re}:${se}:${ys}`
        })
      })
    }
  }), A.accessor("pool", {
    header: () => e.jsx(Qt, {
      title: "Pool",
      classes: "text-left "
    }),
    cell: M => {
      const D = M.row.original;
      return e.jsx("div", {
        children: e.jsx(Vt, {
          t0: D.base_currency_address,
          t1: D.quote_currency_address,
          t0_symbol: D.base_currency,
          t1_symbol: D.quote_currency,
          fee: D.fee
        })
      })
    }
  }), A.accessor("buyAmount", {
    header: () => e.jsx(Qt, {
      title: "Buy Amount",
      classes: "text-right"
    }),
    cell: M => {
      const D = M.row.original;
      return e.jsx("div", {
        className: "text-end",
        children: e.jsx(C, {
          color: i.gray[200],
          children: e.jsx(Lo, {
            order: D,
            alignRight: !0
          })
        })
      })
    }
  }), A.accessor("sellAmount", {
    header: () => e.jsx(Qt, {
      title: "Sell Amount",
      classes: "text-right"
    }),
    cell: M => {
      const D = M.row.original;
      return e.jsx("div", {
        className: "text-end",
        children: e.jsx(C, {
          color: i.gray[200],
          children: e.jsx(Do, {
            order: D,
            alignRight: !0
          })
        })
      })
    }
  }), A.accessor("price", {
    header: () => e.jsx(Qt, {
      title: "Price",
      classes: "text-right"
    }),
    cell: M => {
      const D = M.row.original;
      return e.jsx("div", {
        className: "flex justify-end",
        children: e.jsx(C, {
          color: i.gray[200],
          children: e.jsx(_i, {
            order: D
          })
        })
      })
    }
  })], [u, c]), {
    data: $,
    isFetching: B,
    isLoading: I,
    fetchNextPage: Q
  } = mn({
    queryKey: ["cush_searchOrders", r, n, w, y, f, m, c, u],
    queryFn: async ({
      pageParam: M = 0
    }) => o.network(n).call("cush_searchOrders", [{
      fee_tiers: w ? [w * 1e4] : [],
      result_offset: M,
      result_size: 50,
      user: r,
      tokens: y.length > 0 ? y.map(D => D.address) : void 0,
      start_date: f ? f.getTime() : void 0,
      end_date: m ? m.getTime() : void 0,
      sort_by: c || "",
      sort_order: u === T.ASC
    }]),
    initialPageParam: 0,
    gcTime: 0,
    getNextPageParam: (M, D) => D.map(ee => ee.length).reduce((ee, ke) => ee + ke, 0),
    refetchOnWindowFocus: !1
  }), H = l.useMemo(() => {
    var M;
    return ((M = $ == null ? void 0 : $.pages) == null ? void 0 : M.flatMap(D => D)) ?? []
  }, [$]), Z = l.useCallback(M => {
    if (M) {
      const {
        scrollHeight: D,
        scrollTop: ee,
        clientHeight: ke
      } = M;
      D - ee - ke < 2100 && !B && ($ == null ? void 0 : $.pages[$.pages.length - 1].length) !== 0 && Q()
    }
  }, [Q, B, H.length]);
  l.useEffect(() => {
    Z(a.current)
  }, [Z]);
  const P = pn({
      data: H,
      columns: V,
      getCoreRowModel: yn(),
      debugTable: !0
    }),
    {
      rows: G
    } = P.getRowModel(),
    q = jn({
      parentRef: a,
      size: G.length,
      overscan: 10
    }),
    {
      virtualItems: W,
      totalSize: ve
    } = q,
    Ne = W.length > 0 && ((je = W == null ? void 0 : W[0]) == null ? void 0 : je.start) || 0,
    ue = W.length > 0 ? ve - (((K = W == null ? void 0 : W[W.length - 1]) == null ? void 0 : K.end) || 0) : 0,
    ye = M => {
      x(M), t && t(M)
    },
    me = 10;
  return e.jsx("div", {
    className: "transition-[height] duration-300 ease-in overflow-auto no-scrollbar",
    style: {
      height: g ? "55px" : H.length === 0 ? "400px" : H.length < me ? H.length * 56 + 56 + 56 + 49 : "600px",
      overflow: g || H.length === 0 ? "hidden" : "auto",
      backgroundColor: i.gray[900]
    },
    children: g ? e.jsxs("div", {
      className: "flex justify-between m-5 cursor-pointer h-20",
      onClick: () => ye(!1),
      style: {
        backgroundColor: i.gray[900]
      },
      children: [e.jsx(F, {
        children: E
      }), e.jsx(z, {
        style: {
          color: "white",
          strokeWidth: 1.5
        },
        src: "https://assets.oku.trade/downArrowIcon.svg"
      })]
    }) : e.jsxs("div", {
      className: "absolute w-full p-[2px]",
      children: [e.jsx("div", {
        className: "rounded-t-[20px] top-0 z-30",
        onClick: () => ye(!0),
        style: {
          backgroundColor: i.gray[900]
        },
        children: e.jsxs("div", {
          className: "flex justify-between cursor-pointer p-4",
          children: [e.jsx(F, {
            children: E
          }), e.jsx(z, {
            style: {
              color: "white",
              strokeWidth: 1.5
            },
            src: "https://assets.oku.trade/upArrowIcon.svg"
          })]
        })
      }), e.jsxs("div", {
        className: "flex flex-col min-[610px]:flex-row align-center justify-end p-3 gap-3 min-[610px]:gap-5 w-full h-28 min-[610px]:h-14 top-14 z-30",
        style: {
          backgroundColor: i.gray.dark
        },
        children: [e.jsxs("div", {
          className: "flex justify-end gap-2 align-center",
          children: [e.jsx(C, {
            className: "mt-2",
            color: i.gray[400],
            children: "Dates:"
          }), e.jsx(ar, {
            wrapperClassName: "analyticDatePicker",
            selected: f,
            showMonthDropdown: !0,
            showYearDropdown: !0,
            selectsStart: !0,
            startDate: f,
            endDate: m,
            placeholderText: "Start",
            onChange: M => j(M),
            closeOnScroll: !0,
            dropdownMode: "select",
            isClearable: f !== null,
            formatWeekDay: M => M.substr(0, 3),
            disabledKeyboardNavigation: !0
          }), e.jsx(X, {
            color: i.gray[200],
            className: "mt-2",
            children: "to"
          }), e.jsx(ar, {
            wrapperClassName: "analyticDatePicker",
            selected: m,
            showMonthDropdown: !0,
            showYearDropdown: !0,
            placeholderText: "End",
            onChange: M => _(M),
            closeOnScroll: !0,
            dropdownMode: "select",
            isClearable: m !== null,
            selectsEnd: !0,
            startDate: f,
            endDate: m,
            minDate: f,
            formatWeekDay: M => M.substr(0, 3),
            disabledKeyboardNavigation: !0
          })]
        }), e.jsxs("div", {
          className: "flex justify-end gap-5",
          children: [e.jsx(pt, {
            setTokensSelected: N,
            tokensSelected: y,
            customHeight: H.length === 0 ? 280 : void 0
          }), e.jsx(is, {
            feeTier: w,
            setFeeTier: p
          })]
        })]
      }), e.jsx("div", {
        className: "pr-1 overflow-y-scroll no-scrollbar",
        style: {
          height: g ? "40px" : H.length === 0 ? "400px" : H.length < me ? H.length * 56 + 56 : "494px"
        },
        onScroll: M => Z(M.target),
        ref: a,
        children: I ? e.jsx(wo, {}) : H.length === 0 ? e.jsx("div", {
          className: "flex flex-1 justify-center items-center mt-[124px] w-full",
          children: e.jsx(F, {
            children: "No orders"
          })
        }) : e.jsxs(e.Fragment, {
          children: [e.jsxs("table", {
            className: "w-full border-t-[1px] border-t-gray-800",
            children: [e.jsx("thead", {
              children: P.getHeaderGroups().map(M => e.jsx("tr", {
                children: M.headers.map(D => e.jsx("th", {
                  className: "p-4",
                  colSpan: D.colSpan,
                  style: {
                    width: D.getSize()
                  },
                  children: D.isPlaceholder ? null : e.jsx("div", {
                    children: lr(D.column.columnDef.header, D.getContext())
                  })
                }, D.id))
              }, M.id))
            }), e.jsxs("tbody", {
              children: [Ne > 0 && e.jsx("tr", {
                children: e.jsx("td", {
                  style: {
                    height: `${Ne}px`
                  }
                })
              }), W.map(M => {
                const D = G[M.index];
                return e.jsx("tr", {
                  onMouseEnter: () => v(D.id),
                  onMouseLeave: () => v(void 0),
                  className: "h-14 border-y-[1px] border-y-gray-800 cursor-pointer",
                  style: {
                    backgroundColor: S === D.id ? i.gray[950] : Number(D.id) % 2 === 0 ? i.gray[900] : i.gray.dark
                  },
                  children: D.getVisibleCells().map(ee => e.jsx("td", {
                    className: "p-4",
                    children: lr(ee.column.columnDef.cell, ee.getContext())
                  }, ee.id))
                }, D.id)
              }), ue > 0 && e.jsx("tr", {
                children: e.jsx("td", {
                  style: {
                    height: `${ue}px`
                  }
                })
              })]
            })]
          }), B && e.jsx("div", {
            className: "items-center",
            children: e.jsx(Ft, {})
          })]
        })
      })]
    })
  })
}
const Qt = ({
  title: s,
  classes: t
}) => e.jsx(C, {
  weight: O.REGULAR,
  color: i.gray[400],
  className: t,
  children: s
});

function Ei() {
  const {
    userAddress: s
  } = ge(), {
    currentChainInfo: t
  } = R(), [r, o] = l.useState(), [n, a] = l.useState(!1), [c, d] = l.useState(!1), [u, h] = l.useState(!1), [g, x] = l.useState([]), [f, j] = l.useState(), [m, _] = l.useState([]), [y, N] = l.useState(), [w, p] = l.useState(), [S, v] = l.useState(), [b, E] = l.useState(), [A, V] = l.useState(0), [$, B] = l.useState(1), [I, Q] = l.useState(rt), [H, Z] = l.useState(T.DESC), [P, G] = l.useState(Hs.CREATE_TIME), {
    data: q
  } = Y("cush_limitOrdersByUser", [s]), {
    data: W,
    isFetching: ve
  } = Y("cush_analyticsUser", [s]), [Ne, ue] = l.useState(""), [ye, me] = l.useState({
    result_offset: 0,
    fee_tiers: [],
    result_size: st,
    sort_by: P,
    sort_order: H === T.ASC,
    status: "",
    user: s
  }), {
    data: je,
    isFetching: K
  } = Y("cush_searchPositions", [Ne, ye]), M = l.useMemo(() => Ce(b, b && b.length < rt ? b.length : rt, !0, !0, !1, 0), [b, I]), D = l.useMemo(() => Ce(S, S && S.length < st ? S.length : st, !0, !0, !1, 0), [S, $]);
  l.useEffect(() => {
    W && ee(W)
  }, [W]), l.useEffect(() => {
    W && o(void 0)
  }, [t.id]);
  const ee = re => {
    const se = [];
    se.push({
      itemTitle: "Swap Volume",
      itemValue: e.jsx(k, {
        num: re.swap_volume
      }),
      simbol: "$"
    }), se.push({
      itemTitle: "Swaps",
      itemValue: e.jsx(k, {
        num: re.swap_count,
        hideDecimals: !0
      })
    }), se.push({
      itemTitle: "PNL",
      itemValue: e.jsx(k, {
        num: re.position_pnl
      }),
      simbol: "$"
    }), se.push({
      itemTitle: "Total Position Value",
      itemValue: e.jsx(k, {
        num: re.total_value
      }),
      simbol: "$"
    }), se.push({
      itemTitle: "Time on Protocol",
      itemValue: re.first_seen === 0 ? "never" : ml(re.first_seen)
    }), o(se)
  };
  l.useEffect(() => {
    y ? tt() : m.length > 0 ? ke() : E(q)
  }, [q]), l.useEffect(() => {
    tt()
  }, [y]), l.useEffect(() => {
    ke()
  }, [m]);
  const ke = () => {
      const re = y ? b : q;
      m.length === 1 && re ? E(re.filter(se => se.base_currency_address === m[0].address || se.quote_currency_address === m[0].address)) : m.length === 2 && re ? E(re.filter(se => (se.base_currency_address === m[0].address || se.quote_currency_address === m[0].address) && (m[1] && se.base_currency_address === m[1].address || m[1] && se.quote_currency_address === m[1].address))) : m.length === 0 && y ? tt() : E(q)
    },
    tt = () => {
      const re = m.length > 0 ? b : q;
      y && re ? E(re.filter(se => se.fee === y * 1e4)) : re && y === void 0 && m.length > 0 ? ke() : E(q)
    };
  return l.useEffect(() => {
    je && (v(je.positions), V(je.result_size))
  }, [je]), l.useEffect(() => {
    me({
      result_offset: 0,
      fee_tiers: [],
      result_size: st,
      sort_by: P,
      sort_order: H === T.ASC,
      status: "",
      user: s
    })
  }, [s]), l.useEffect(() => {
    const re = g.map(se => se.address);
    ue(re.join("-"))
  }, [g]), l.useEffect(() => {
    me({
      result_offset: 0,
      fee_tiers: f ? [f * 1e4] : [],
      result_size: st,
      sort_by: P,
      sort_order: H === T.ASC,
      status: w || "",
      user: s
    })
  }, [w]), l.useEffect(() => {
    me({
      result_offset: 0,
      fee_tiers: f ? [f * 1e4] : [],
      result_size: st,
      sort_by: P,
      sort_order: H === T.ASC,
      status: w || "",
      user: s
    })
  }, [f]), l.useEffect(() => {
    K || ve ? document.body.style.cursor = "progress" : document.body.style.cursor = "auto"
  }, [K, ve]), e.jsxs("div", {
    className: "flex flex-col gap-6",
    children: [e.jsx(vs, {}), e.jsx(wi, {}), e.jsx(Ut, {
      overviewItems: r,
      children: e.jsx(bi, {})
    }), e.jsx("section", {
      className: "w-full relative",
      children: e.jsx(Co, {
        classes: `${u?"":"pb-4"}`,
        children: e.jsx(Ti, {
          setIsUserTableCollapsed: h
        })
      })
    }), e.jsx(we, {
      id: "user_limitOrders",
      isLoading: b === void 0,
      height: c ? De : M,
      header: e.jsx(_e, {
        title: "Limit Orders",
        onClick: () => d(!c),
        isCollapsed: c
      }),
      children: e.jsxs(e.Fragment, {
        children: [b && b.length > 0 && e.jsxs("div", {
          className: "flex flex-row align-center justify-end p-3 gap-5 w-full h-14 border-gray-700",
          children: [e.jsx(pt, {
            setTokensSelected: _,
            tokensSelected: m
          }), e.jsx(is, {
            feeTier: y,
            setFeeTier: N
          })]
        }), b && e.jsx(ki, {
          orders: b,
          setNumberOrders: Q
        })]
      })
    }), e.jsx(we, {
      id: "user_positions",
      isLoading: S === void 0,
      height: n ? De : D,
      header: e.jsx(_e, {
        title: "Positions",
        onClick: () => a(!n),
        isCollapsed: n
      }),
      children: e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
          className: "flex flex-row align-center justify-end p-3 gap-5 w-full h-14 border-gray-700",
          children: [e.jsx(So, {
            positionStatus: w,
            setPositionStatus: p
          }), e.jsx(pt, {
            setTokensSelected: x,
            tokensSelected: g
          }), e.jsx(is, {
            feeTier: f,
            setFeeTier: j
          })]
        }), S && e.jsx(Ci, {
          pageSize: st,
          positionsData: S,
          totalNumberOfPositions: A,
          setSearchUserPositionFilterOpts: me,
          setPage: B,
          sortingOrder: H,
          sortingProperty: P,
          setSortingOrder: Z,
          setSortingProperty: G,
          userAddress: s
        })]
      })
    })]
  })
}

function Li() {
  return e.jsx("div", {
    children: "An error has occurred"
  })
}
const Di = () => {
  const s = Uo(Cn),
    t = {
      basename: "/info"
    };
  return s([{
    path: "*",
    element: e.jsx(xr, {}),
    loader: async ({
      request: o
    }) => wn("/", new URL(o.url).pathname) ? Wt("/ethereum/overview") : Wt("/ethereum/overview")
  }, {
    element: e.jsxs(da, {
      children: [e.jsx(Dn, {}), e.jsx(ua, {}), e.jsx(xl, {
        children: e.jsx(ir, {})
      })]
    }),
    errorElement: e.jsx(Ro, {
      fallback: Li,
      showDialog: !0
    }),
    loader: async ({
      params: o
    }) => o.chain ? null : Wt("/ethereum/overview"),
    children: [{
      path: ":chain",
      id: "chain",
      loader: Ln,
      action: async () => null,
      element: e.jsx(ir, {}),
      children: [{
        path: "*",
        element: e.jsx(xr, {})
      }, {
        path: "",
        loader: async () => Wt("./overview")
      }, {
        id: "pages",
        children: [{
          path: "overview",
          element: e.jsx(Al, {})
        }, {
          path: "pools",
          element: e.jsx(Fl, {})
        }, {
          path: "tokens",
          element: e.jsx(Rl, {})
        }, {
          path: "positions",
          element: e.jsx(Hl, {})
        }, {
          path: "pool/:address",
          element: e.jsx(oi, {})
        }, {
          path: "token/:address",
          element: e.jsx(ii, {})
        }, {
          path: "position/:uuid",
          element: e.jsx(fi, {})
        }, {
          path: "user/:userAddress",
          element: e.jsx(Ei, {})
        }]
      }]
    }]
  }], t)
};

function Ii() {
  const s = Di();
  return e.jsx(bn, {
    router: s
  })
}
Vo({
  dsn: "https://8b7fdeadf1152390af6b9d6e6d868c23@sentry.gfx.cafe/3",
  release: `v0.2.11
`,
  environment: "production",
  integrations: [new Ho({
    tracePropagationTargets: ["localhost", "/^https://*.gfx.town/*", "/^https://*.apiary.software/*"],
    routingInstrumentation: Bo(Bs.useEffect, cs, kn, Sn, Nn)
  }), new zo],
  tracesSampleRate: .5,
  replaysSessionSampleRate: .3,
  replaysOnErrorSampleRate: 1
});
_n.createRoot(document.getElementById("root")).render(e.jsx(Bs.StrictMode, {
  children: e.jsx(Ii, {})
}));
const Pi = JSON.parse('{"Search Dropdown Input":"Search Dropdown Input","Search Pool Dropdown":"Search Pool Dropdown","Du6bPw":"Address","4+VnE8":"ENS","Eq83tw":"Max Price","jjuKOj":"Min Price","ou6PkF":"Pool","lQfOr9":"Pools","a7u1N9":"Price","TP9/K5":"Token","8glx+u":"Token ID","6RDwJM":"Tokens","4wyw8H":"Transactions","EVi9lr":"Transactions 24H","FHKsZF":"TVL","wMHvYH":"Value","UOq4hK":"Vol 24H","UayI0g":"Vol 7D","pP3soS":"Δ 24H"}'),
  Mi = Object.freeze(Object.defineProperty({
    __proto__: null,
    messages: Pi
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ai = JSON.parse('{"Search Dropdown Input":"Search Dropdown Input","Search Pool Dropdown":"Search Pool Dropdown","Du6bPw":"Address","4+VnE8":"ENS","Eq83tw":"Max Price","jjuKOj":"Min Price","ou6PkF":"Pool","lQfOr9":"Pools","a7u1N9":"Price","TP9/K5":"Token","8glx+u":"Token ID","6RDwJM":"Tokens","4wyw8H":"Transactions","EVi9lr":"Transactions 24H","FHKsZF":"TVL","wMHvYH":"Value","UOq4hK":"Vol 24H","UayI0g":"Vol 7D","pP3soS":"Δ 24H"}'),
  Oi = Object.freeze(Object.defineProperty({
    __proto__: null,
    messages: Ai
  }, Symbol.toStringTag, {
    value: "Module"
  }));
export {
  hr as _, Bi as a, Vi as c, Hi as g
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main-Am8oi9W5.js.map