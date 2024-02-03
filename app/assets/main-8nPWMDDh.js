var va = Object.defineProperty;
var _a = (n, t, s) => t in n ? va(n, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : n[t] = s;
var me = (n, t, s) => (_a(n, typeof t != "symbol" ? t + "" : t, s), s),
	or = (n, t, s) => {
		if (!t.has(n)) throw TypeError("Cannot " + s)
	};
var ue = (n, t, s) => (or(n, t, "read from private field"), s ? s.call(n) : t.get(n)),
	Et = (n, t, s) => {
		if (t.has(n)) throw TypeError("Cannot add the same private member more than once");
		t instanceof WeakSet ? t.add(n) : t.set(n, s)
	},
	tt = (n, t, s, r) => (or(n, t, "write to private field"), r ? r.call(n, s) : t.set(n, s), s);
import {
	l as nn,
	t as Ta,
	p as ka,
	r as Ca,
	d as Na,
	c as Sa,
	M as io,
	a as c,
	j as e,
	R as Ds,
	u as ar,
	b as we,
	e as lo,
	I as Ea,
	f as Fs,
	N as xn,
	i as et,
	P as co,
	g as Ia,
	h as Aa,
	m as La,
	k as Pa,
	n as Ce,
	o as Ie,
	q as Ae,
	s as Le,
	v as Pe,
	w as Ne,
	x as Ma,
	y as uo,
	z as bs,
	A as Ra,
	B as Oa,
	C as Us,
	G as _t,
	D as Kt,
	E as Ht,
	F as $n,
	H as po,
	J as se,
	K as Da,
	L as ws,
	O as un,
	Q as Fa,
	T as Ye,
	S as vn,
	U as _n,
	V as os,
	W as Ua,
	X as Ba,
	Y as $a,
	Z as ir,
	_ as Ha,
	$ as Va,
	a0 as Bs,
	a1 as ot,
	a2 as mo,
	a3 as hn,
	a4 as za,
	a5 as Wa,
	a6 as $s,
	a7 as Ga,
	a8 as Oe,
	a9 as mt,
	aa as qa,
	ab as Ya,
	ac as Xa,
	ad as jt,
	ae as Hn,
	af as pn,
	ag as fo,
	ah as Sn,
	ai as Hs,
	aj as Ft,
	ak as Ka,
	al as Za,
	am as lr,
	an as Qa,
	ao as Ja,
	ap as es,
	aq as Tn,
	ar as ei,
	as as xo,
	at as ge,
	au as Ke,
	av as ho,
	aw as ti,
	ax as ni,
	ay as si,
	az as ri,
	aA as oi,
	aB as ai,
	aC as ii,
	aD as li,
	aE as ci,
	aF as di,
	aG as ui,
	aH as pi,
	aI as mi,
	aJ as fi,
	aK as xi,
	aL as hi,
	aM as yi,
	aN as gi,
	aO as bi,
	aP as wi,
	aQ as ji,
	aR as vi,
	aS as _i,
	aT as Ti,
	aU as ki,
	aV as Ci,
	aW as Ni,
	aX as Si,
	aY as Ei,
	aZ as Ii,
	a_ as Ai,
	a$ as Li,
	b0 as Pi,
	b1 as Mi,
	b2 as Ri,
	b3 as Oi,
	b4 as Vs,
	b5 as Di,
	b6 as yo,
	b7 as js,
	b8 as cr,
	b9 as go,
	ba as Fi,
	bb as dr,
	bc as Ui,
	bd as Bi,
	be as $i,
	bf as bo,
	bg as wo,
	bh as Hi,
	bi as Vi,
	bj as zi,
	bk as Wi,
	bl as Gi,
	bm as qi,
	bn as Yi,
	bo as jo,
	bp as Xi,
	bq as Ki,
	br as Zi,
	bs as Qi,
	bt as Ji,
	bu as el,
	bv as tl,
	bw as nl,
	bx as sl,
	by as rl,
	bz as ol,
	bA as al,
	bB as il,
	bC as ll,
	bD as cl,
	bE as dl,
	bF as ul,
	bG as pl,
	bH as ml,
	bI as as,
	bJ as fl,
	bK as ur,
	bL as lt,
	bM as pr,
	bN as xl,
	bO as hl,
	bP as yl,
	bQ as gl,
	bR as bl,
	bS as wl,
	bT as jl,
	bU as vl,
	bV as _l
} from "./vendor-t_48CAVH.js";
(function () {
	try {
		var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
			t = new Error().stack;
		t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "d6c34602-eaac-45c8-8526-e08bdd910375", n._sentryDebugIdIdentifier = "sentry-dbid-d6c34602-eaac-45c8-8526-e08bdd910375")
	} catch {}
})();
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver(o => {
		for (const a of o)
			if (a.type === "childList")
				for (const i of a.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function s(o) {
		const a = {};
		return o.integrity && (a.integrity = o.integrity), o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
	}

	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const a = s(o);
		fetch(o.href, a)
	}
})();
if (window.log === void 0) {
	window.log = nn;
	const n = nn.methodFactory;
	nn.methodFactory = function (t, s, r) {
		const o = n(t, s, r);
		return o.bind(o, `[${t}]`)
	}, nn.setLevel(nn.getLevel()), window.ConfigJsStaticOptions && window.ConfigJsStaticOptions.Logging && window.ConfigJsStaticOptions.Logging.level && nn.setLevel(window.ConfigJsStaticOptions.Logging.level)
}
const Tl = {
		Chat: {
			enabled: "false",
			url: "wss://chat.apiary.software"
		},
		Login: {
			url: "https://login.oku.trade",
			app_id: "7OfZGYJMyygFQwnTYwZtWp3aUh1cbhfn",
			path_prefix: "/app"
		},
		Whitelist: {
			enabled: "false"
		},
		Swap: {
			enabled: "true"
		},
		ChainRpc: {
			omni: "wss://omni.oku.zone/",
			protocols: ["wss", "https"]
		},
		Router: {
			markets: ["usor"]
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
		Analytics: {
			enabled: "true",
			url: "/info/"
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
	zs = window.OkuTokenList,
	kl = {
		content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
		theme: {
			colors: {
				hover: "#404963",
				hoverbackground: "#40496314",
				chain: {
					ethereum: "#627EEA",
					optimism: "#FF0420",
					polygon: "#A457FF"
				},
				white: "#FFFFFF",
				black: "#000000",
				black_transparent: "#00000000",
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
					drophover: "rgba(153, 161, 189, 0.08)"
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
					loader: "#4E15EF"
				},
				lineshadow: {
					start: "#3E43BB36",
					stop: "#5CFE9D00"
				},
				bar_chart: {
					stroke: "#3E607EAA",
					overlay: "#3E607E36",
					xaxis: "#333333"
				}
			},
			extend: {
				opacity: {
					hover: ".75"
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
							transform: "translateY(-20%)"
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
					},
					movingCarousel: {
						"0%": {
							left: "0px"
						},
						"100%": {
							left: "-2000px"
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
					slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
					movingCarousel: "movingCarousel 150s linear infinite"
				},
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					"2xl": "1536px"
				}
			}
		},
		plugins: [Ta, ka(function ({
			addUtilities: n
		}) {
			n({
				".no-scrollbar::-webkit-scrollbar": {
					display: "none"
				},
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none"
				}
			})
		})]
	},
	vo = Ca(kl);
var oo;
const u = (oo = vo.theme) == null ? void 0 : oo.colors;
var ao;
const _o = (ao = vo.theme) == null ? void 0 : ao.opacity,
	mr = "0ba768db4337c817602564a355370491",
	Cl = {
		name: "Ukia",
		description: "Ukia - The #1 Defi Interface",
		url: "/",
		icons: ["https://oku.trade/favicon.ico"],
		verifyUrl: "verify.walletconnect.com"
	},
	fr = [...io],
	Nl = () => {
		const n = Na({
			chains: fr,
			projectId: mr,
			metadata: Cl,
			enableInjected: !0,
			enableWalletConnect: !0,
			enableCoinbase: !0,
			enableEIP6963: !0
		});
		return Sa({
			wagmiConfig: n,
			projectId: mr,
			chains: fr,
			themeVariables: {
				"--w3m-accent": u.blue[400]
			}
		}), n
	},
	To = Ds.createContext({
		height: window.innerHeight,
		width: window.innerWidth
	}),
	Sl = n => {
		const {
			children: t
		} = n, s = c.useCallback(() => Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0), []), r = c.useCallback(() => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), []), [o, a] = c.useState(s()), [i, l] = c.useState(r());
		return c.useEffect(() => {
			const d = () => {
				a(s()), l(r())
			};
			return window.addEventListener("resize", d), () => {
				window.removeEventListener("resize", d)
			}
		}, [s, r]), e.jsx(To.Provider, {
			value: {
				height: o,
				width: i
			},
			children: t
		})
	},
	El = () => {
		const n = c.useContext(To);
		if (n === null) throw new Error('"useWindowContext" should be used inside a "WindowContextProvider"');
		return n
	};

function yn() {
	const {
		width: n,
		height: t
	} = El();
	return {
		width: n,
		height: t
	}
}
const It = {
	base: 0,
	sm: 640,
	md: 1024,
	lg: 1400,
	xl: 1600
};

function he(n) {
	const {
		width: t
	} = yn(), s = n.base, r = n.sm, o = n.md, a = n.lg, i = n.xl;
	return t >= It.base && t < It.sm ? s : t >= It.sm && t < It.md ? r !== void 0 ? r : s : t >= It.md && t < It.lg ? o !== void 0 ? o : r !== void 0 ? r : s : t >= It.lg && t < It.xl ? a !== void 0 ? a : o !== void 0 ? o : r !== void 0 ? r : s : i !== void 0 ? i : a !== void 0 ? a : o !== void 0 ? o : r !== void 0 ? r : s
}
var wt;
(function (n) {
	n.DEFAULT = "default", n.UNICORN_POWER = "unicornPower", n.ACCESSIBLE = "accessible", n.GALACTIC = "galactic"
})(wt || (wt = {}));
var Ut;
(function (n) {
	n.DEFAULT = "default", n.ALTERNATE = "alternate"
})(Ut || (Ut = {}));
var qe;
(function (n) {
	n.CANDLE = "candle", n.DEPTH = "depth", n.TRADINGVIEW = "tradingview"
})(qe || (qe = {}));
var at;
(function (n) {
	n.LIMIT = "limit", n.MARKET = "market", n.STOP = "stop", n.SWAP = "swap"
})(at || (at = {}));
var gt;
(function (n) {
	n.OPEN = "OPEN", n.FILLED = "FILLED", n.CLOSED = "CLOSED", n.IN_RANGE = "INRANGE", n.OUT_OF_RANGE = "OUTRANGE", n.CLAIMED = "CLAIMED", n.CANCELLED = "CANCELLED"
})(gt || (gt = {}));
var ln;
(function (n) {
	n.OUT_OF_RANGE = "out of range", n.IN_RANGE = "in range", n.CLOSED = "closed"
})(ln || (ln = {}));
var xr;
(function (n) {
	n.OUT_OF_RANGE = "out of range", n.IN_RANGE = "in range"
})(xr || (xr = {}));
var hr;
(function (n) {
	n.DEFAULT = "default", n.SPLIT = "split"
})(hr || (hr = {}));
var Vn;
(function (n) {
	n.DEFAULT = "default", n.LARGE = "large"
})(Vn || (Vn = {}));
var P;
(function (n) {
	n.BOLD = "700", n.SEMIBOLD = "600", n.MEDIUM = "500", n.REGULAR = "400"
})(P || (P = {}));
var fe;
(function (n) {
	n.TVL = "tvl", n.TOTAL_SWAPS = "totalSwaps", n.VOLUME = "volume", n.TOP_GAINERS = "topGainers", n.TOP_LOSERS = "topLosers"
})(fe || (fe = {}));
var yr;
(function (n) {
	n.VOLUME = "volume", n.TVL = "tvl", n.PRICE = "price"
})(yr || (yr = {}));
var bt;
(function (n) {
	n.DAY_1 = "1d", n.DAY_7 = "7d", n.DAY_14 = "14d", n.DAY_30 = "30d", n.YEAR_1 = "1y"
})(bt || (bt = {}));
var gr;
(function (n) {
	n.OVERVIEW = "overview", n.POOLS = "pools", n.TOKENS = "tokens", n.POSITIONS = "positions", n.POOL = "pool", n.TOKEN = "token", n.POSITION = "position"
})(gr || (gr = {}));
var kn;
(function (n) {
	n.FEE_001 = "0.01", n.FEE_005 = "0.05", n.FEE_03 = "0.3", n.FEE_1 = "1"
})(kn || (kn = {}));
var _e;
(function (n) {
	n.DESC = "desc", n.ASC = "asc"
})(_e || (_e = {}));
var re;
(function (n) {
	n.DATE = "date", n.PRICE = "price", n.TYPE = "type", n.BUY_AMOUNT = "buy_amount", n.SELL_AMOUNT = "sell_amount", n.FEES = "fees"
})(re || (re = {}));
const ee = n => {
		const {
			weight: t = P.REGULAR,
			children: s,
			color: r = u.white,
			className: o
		} = n, a = he({
			base: "16px",
			sm: "16px"
		}), i = he({
			base: "18px",
			sm: "18px"
		});
		return e.jsx("div", {
			className: o,
			style: {
				fontWeight: t,
				fontSize: a,
				lineHeight: i,
				color: r
			},
			children: s
		})
	},
	O = n => {
		const {
			weight: t = P.REGULAR,
			children: s,
			color: r = u.white,
			className: o
		} = n, a = he({
			base: "12px",
			sm: "14px"
		}), i = he({
			base: "14px",
			sm: "16px"
		});
		return e.jsx("div", {
			className: o,
			style: {
				fontWeight: t,
				fontSize: a,
				lineHeight: i,
				color: r
			},
			children: s
		})
	},
	j = n => {
		const {
			weight: t = P.REGULAR,
			children: s,
			color: r = u.white,
			className: o
		} = n, a = he({
			base: "12px",
			sm: "12px"
		}), i = he({
			base: "14px",
			sm: "14px"
		});
		return e.jsx("div", {
			className: o,
			style: {
				fontWeight: t,
				fontSize: a,
				lineHeight: i,
				color: r
			},
			children: s
		})
	},
	st = n => {
		const {
			weight: t = P.REGULAR,
			children: s,
			color: r = u.white,
			className: o,
			fontSize: a
		} = n, i = he({
			base: "10px",
			sm: "10px"
		}), l = he({
			base: "12px",
			sm: "12px"
		});
		return e.jsx("p", {
			style: {
				fontWeight: t,
				fontSize: a || i,
				lineHeight: l,
				color: r
			},
			className: o,
			children: s
		})
	},
	Ws = Object.values(io),
	Ue = Object.fromEntries(Ws.map(n => [n.id, n.contracts.weth9.address])),
	ve = Object.fromEntries(Ws.map(n => [n.id, n])),
	br = Object.fromEntries(Ws.map(n => [n.internalName, n.id])),
	ko = (n = "ethereum") => br[n.toLowerCase()] ? br[n.toLowerCase()] : 0,
	Il = {
		WS_PATH: n => {
			const t = new URL(n);
			return t.protocol = t.protocol.replace("http", "ws"), t.pathname = (t.pathname + "/ws").replaceAll("//ws", "/ws"), t.toString()
		}
	},
	Al = n => n ? !!Ll[n] : !1,
	Ll = Object.fromEntries(Object.values(ve).map(n => [n.internalName, n]));
Object.fromEntries(Object.values(ve).map(n => [n.id.toString(), n]));
const wr = (n, t) => ve[n].stables.some(s => s.toLowerCase() === t.toLowerCase()),
	Pl = (n, t) => Ue[n].toLowerCase() === t.toLowerCase(),
	D = () => {
		const n = ar("parent"),
			t = ar("chain");
		return t || n
	},
	sn = (n, {
		params: t
	}) => {
		const s = t.chain || "ethereum",
			r = ko(t.chain),
			o = ve[r] ? ve[r] : ve[1],
			a = n.network(o.internalName);
		return {
			currentChain: r,
			chain: s,
			cushRpc: a,
			currentChainInfo: o,
			chainID: r,
			omniCush: n,
			isOmniChain: t.chain === void 0
		}
	};

function Ml() {
	const [n, t] = c.useState(""), {
		currentChain: s,
		currentChainInfo: r
	} = D(), {
		chain: o
	} = we(), {
		switchChain: a,
		isError: i
	} = lo({});
	c.useEffect(() => {
		o && o.id !== s || r.internalName && ko(r.internalName) === 0 ? t("") : t("none")
	}, [s, o, r]);
	const l = () => t("none");
	return e.jsxs("div", {
		className: "absolute z-[100] flex right-10 bottom-10 ",
		style: {
			display: n
		},
		children: [e.jsxs("button", {
			onClick: () => a == null ? void 0 : a({
				chainId: s
			}),
			className: "relative   w-[347px] h-[97px] rounded-[10px] flex flex-row",
			style: {
				backgroundColor: i ? u.yellow[800] : u.blue[800]
			},
			children: [e.jsx("div", {
				className: "h-full flex items-center p-4",
				children: e.jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					strokeWidth: 1.5,
					stroke: i ? u.yellow[100] : u.blue[400],
					className: "w-6 h-6",
					children: e.jsx("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
					})
				})
			}), e.jsxs("div", {
				className: "flex flex-col items-start h-full py-4 gap-2 text-left",
				children: [e.jsx(ee, {
					color: i ? u.yellow[100] : u.blue[400],
					children: "Switch networks"
				}), e.jsxs(O, {
					children: ["Switch to ", r.name, " to continue trading on Ukia"]
				})]
			}), e.jsx("div", {
				className: "w-8 h-full h-full"
			})]
		}), e.jsx("button", {
			onClick: l,
			className: "absolute right-2 top-2",
			children: e.jsx("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				strokeWidth: "1.5",
				stroke: i ? u.yellow[100] : u.white,
				className: "w-4 h-4",
				children: e.jsx("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M6 18L18 6M6 6l12 12"
				})
			})
		})]
	})
}

function Rl(n) {
	return e.jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: "1.5",
		className: `w-4 h-4 ${n.className}`,
		children: e.jsx("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		})
	})
}
const ft = n => {
		const t = window.localStorage.getItem(n);
		try {
			return t ? JSON.parse(t) : null
		} catch {
			return null
		}
	},
	Bt = (n, t) => {
		window.localStorage.setItem(n, JSON.stringify(t))
	},
	Ol = (n, t) => {
		const s = ft(n);
		if (Array.isArray(s)) {
			const r = [...s, t];
			Bt(n, r)
		} else s === null && Bt(n, [t])
	},
	jn = (n, t) => {
		const s = ft(n);
		if (Array.isArray(s)) {
			const r = s.filter(o => o !== t);
			Bt(n, r)
		} else window.localStorage.removeItem(n)
	},
	vs = {
		[wt.DEFAULT]: {
			neg_color: u.red[400],
			pos_color: u.green[400],
			neg_vol_color: u.red[700],
			pos_vol_color: u.green[800],
			background_gradient: u.gray[900]
		},
		[wt.UNICORN_POWER]: {
			neg_color: u.pink[400],
			pos_color: u.blue.vibrant,
			neg_vol_color: u.pink[700],
			pos_vol_color: u.blue[600],
			background_gradient: u.pink[400]
		},
		[wt.ACCESSIBLE]: {
			neg_color: u.orange.accesible,
			pos_color: u.blue.accessible,
			neg_vol_color: u.yellow[600],
			pos_vol_color: u.blue.accessible,
			background_gradient: u.orange.accesible
		},
		[wt.GALACTIC]: {
			neg_color: u.blue[400],
			pos_color: u.green[400],
			neg_vol_color: u.blue.accessible,
			pos_vol_color: u.green[500],
			background_gradient: u.green.vibrant
		}
	},
	Co = {
		size: Vn.DEFAULT
	},
	No = c.createContext({
		colorScheme: wt.DEFAULT,
		setColorScheme: () => {},
		appLayout: Ut.DEFAULT,
		setAppLayout: () => {},
		chart: Co,
		setChart: () => {},
		colors: vs[wt.DEFAULT]
	}),
	Dl = n => {
		const {
			children: t
		} = n, s = ft("appLayout"), r = ft("colorScheme"), [o, a] = c.useState(r || wt.DEFAULT), [i, l] = c.useState(s || Ut.DEFAULT), [d, m] = c.useState(Co), [f, p] = c.useState(vs[o]);
		return c.useEffect(() => {
			p(vs[o]), Bt("colorScheme", o)
		}, [o]), c.useEffect(() => {
			Bt("appLayout", i)
		}, [i]), e.jsx(No.Provider, {
			value: {
				colorScheme: o,
				setColorScheme: a,
				appLayout: i,
				setAppLayout: l,
				chart: d,
				setChart: m,
				colors: f
			},
			children: e.jsx(Ea.Provider, {
				value: {
					color: "white",
					className: ""
				},
				children: t
			})
		})
	},
	xt = () => c.useContext(No);

function Ze() {
	const n = he({
		base: 0,
		sm: 1,
		md: 2
	});
	return n === 0 ? {
		isMobile: !0,
		isTablet: !1,
		isDesktop: !1
	} : n === 1 ? {
		isMobile: !1,
		isTablet: !0,
		isDesktop: !1
	} : {
		isMobile: !1,
		isTablet: !1,
		isDesktop: !0
	}
}
const So = c.createContext({
		open: () => {},
		close: () => {},
		showSettingsModal: !1,
		setShowSettingsModal: () => {},
		showChartLayoutModal: !1,
		setShowChartLayoutModal: () => {},
		showClosePositionModal: !1,
		setShowClosePositionModal: () => {},
		showClaimFeesModal: !1,
		setShowClaimFeesModal: () => {},
		isLoading: !0,
		setIsLoading: () => {},
		showTransactionsModal: !1,
		setShowTransactionsModal: () => {},
		transactionContent: void 0,
		showCreatePoolModal: !1,
		setShowCreatePoolModal: () => {},
		setTransactionContent: () => {}
	}),
	Fl = n => {
		const {
			children: t
		} = n, [s, r] = c.useState(!1), [o, a] = c.useState(!1), [i, l] = c.useState(!1), [d, m] = c.useState(!1), [f, p] = c.useState(!1), [x, h] = c.useState(!0), [y, b] = c.useState(), {
			open: g,
			close: w
		} = Fs(), [C, k] = c.useState(!1);
		return c.useEffect(() => {
			f || b(void 0)
		}, [f]), e.jsx(So.Provider, {
			value: {
				open: () => {
					g()
				},
				close: w,
				showSettingsModal: s,
				setShowSettingsModal: r,
				showChartLayoutModal: o,
				setShowChartLayoutModal: a,
				showClosePositionModal: i,
				setShowClosePositionModal: l,
				showClaimFeesModal: d,
				setShowClaimFeesModal: m,
				isLoading: x,
				setIsLoading: h,
				showTransactionsModal: f,
				setShowTransactionsModal: p,
				transactionContent: y,
				setTransactionContent: b,
				showCreatePoolModal: C,
				setShowCreatePoolModal: k
			},
			children: t
		})
	},
	Tt = () => c.useContext(So),
	Ul = "https://assets.oku.trade/wrench.svg",
	Bl = n => {
		const {
			appLayout: t,
			setAppLayout: s
		} = n, r = t === "default";
		return e.jsxs("button", {
			className: "flex flex-col items-center gap-[6px]",
			onClick: () => {
				s(Ut.DEFAULT)
			},
			children: [e.jsx("div", {
				className: "flex flex-col gap-1.5 h-[82px] w-[107px] rounded-[6px]  hover:scale-[1.05] transition ease-in-out",
				style: {
					borderColor: u.white,
					borderWidth: r ? "1px" : "0px",
					padding: r ? "3px" : "4px"
				},
				children: e.jsxs("div", {
					className: "flex flex-1 bg-gray-800 rounded-[4px] pt-[5px] pb-2 px-[2px] gap-[1px]",
					style: {
						borderColor: u.gray[700],
						borderWidth: r ? "0px" : "1px",
						paddingTop: r ? "5px" : "4px",
						paddingBottom: r ? "8px" : "7px",
						paddingRight: r ? "2px" : "1px",
						paddingLeft: r ? "2px" : "1px"
					},
					children: [e.jsx("div", {
						className: "flex flex-1 bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
					}), e.jsxs("div", {
						className: "flex w-[43px] flex-col gap-[1px]  rounded-[6px]",
						children: [e.jsx("div", {
							className: "flex flex-1 bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
						}), e.jsx("div", {
							className: "flex w-full h-[23px] bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
						})]
					}), e.jsx("div", {
						className: "flex flex-1 bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
					})]
				})
			}), e.jsx("h1", {
				className: "text-white",
				children: "Default"
			})]
		})
	},
	$l = n => {
		const {
			appLayout: t,
			setAppLayout: s
		} = n;
		return e.jsxs("button", {
			className: "flex flex-col items-center gap-[6px] ",
			onClick: () => s(Ut.ALTERNATE),
			children: [e.jsx("div", {
				className: "flex flex-col gap-1.5 h-[82px] w-[107px] rounded-[6px] hover:scale-[1.05] transition ease-in-out",
				style: {
					borderColor: u.white,
					borderWidth: t === "alternate" ? "1px" : "0px",
					padding: t === "alternate" ? "3px" : "4px"
				},
				children: e.jsxs("div", {
					className: "flex flex-1 bg-gray-800 rounded-[4px] pt-[5px] pb-2 px-[2px] gap-[1px]",
					style: {
						borderColor: u.gray[700],
						borderWidth: t === "alternate" ? "0px" : "1px",
						paddingTop: t === "alternate" ? "5px" : "4px",
						paddingBottom: t === "alternate" ? "8px" : "7px",
						paddingRight: t === "alternate" ? "2px" : "1px",
						paddingLeft: t === "alternate" ? "2px" : "1px"
					},
					children: [e.jsx("div", {
						className: "flex flex-1 bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
					}), e.jsxs("div", {
						className: "flex w-[43px] flex-col gap-[1px]  rounded-[6px]",
						children: [e.jsxs("div", {
							className: "flex flex-1 gap-[1px]",
							children: [e.jsx("div", {
								className: "flex flex-1 bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
							}), e.jsx("div", {
								className: "flex flex-1 bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
							})]
						}), e.jsx("div", {
							className: "flex w-full h-[20px] bg-gray-800 border-[1px] border-gray-700 rounded-[6px]"
						})]
					})]
				})
			}), e.jsx("h1", {
				className: "text-white",
				children: "Alternate"
			})]
		})
	};

function Hl() {
	const {
		setShowCreatePoolModal: n
	} = Tt(), {
		appLayout: t,
		setAppLayout: s
	} = xt(), {
		isMobile: r
	} = Ze(), {
		open: o
	} = Fs();
	return e.jsxs("div", {
		children: [e.jsx("div", {
			className: "flex justify-center flex-col items-center gap-4",
			children: !r && e.jsxs("div", {
				className: "flex flex-row gap-4",
				children: [e.jsx(Bl, {
					appLayout: t,
					setAppLayout: s
				}), e.jsx($l, {
					appLayout: t,
					setAppLayout: s
				})]
			})
		}), !r && e.jsx("div", {
			className: "border-[1px] border-gray-700 mt-[19px] mb-2"
		}), e.jsx(xn, {
			to: "order",
			relative: "route",
			className: "rounded-[10px] flex justify-between px-2 cursor-pointer -mx-2 py-2 hover:bg-gray-drophover",
			children: e.jsx(j, {
				weight: P.SEMIBOLD,
				color: u.gray[100],
				children: et._({
					id: "6Q89aO"
				})
			})
		}), e.jsxs("div", {
			className: "rounded-[10px] flex justify-between px-2 cursor-pointer -mx-2 py-2 hover:bg-gray-drophover",
			onClick: () => {
				n(a => !a)
			},
			children: [e.jsx(j, {
				weight: P.SEMIBOLD,
				color: u.gray[100],
				children: "Create Pool"
			}), e.jsx(co, {
				color: u.gray[400],
				width: 16,
				height: 16,
				className: "hover:stroke-gray-200 cursor-pointer",
				onClick: () => n(a => !a)
			})]
		}), e.jsxs("div", {
			className: "rounded-[10px] flex justify-between px-2 cursor-pointer -mx-2 py-2 hover:bg-gray-drophover",
			onClick: () => {
				o()
			},
			children: [e.jsx(j, {
				weight: P.SEMIBOLD,
				color: u.gray[100],
				children: "Manage Wallet"
			}), e.jsx("img", {
				src: Ul,
				alt: "manage",
				className: "h-[16px]"
			})]
		}), e.jsxs("a", {
			href: "https://support.gfx.xyz/t/oku-trade",
			target: "_blank",
			rel: "noreferrer",
			className: "rounded-[10px] flex justify-between px-2 -mx-2 py-2 hover:bg-gray-drophover",
			children: [e.jsx(j, {
				weight: P.SEMIBOLD,
				color: u.gray[100],
				children: "Send Feedback"
			}), e.jsx(Ia, {
				width: 16,
				color: u.gray[100],
				className: "mr-[2px]"
			})]
		})]
	})
}
const Eo = n => n ? n.length > 10 ? n.substring(0, 4) + "..." + n.slice(-4) : n : "",
	Vl = () => {
		const {
			open: n,
			selectedNetworkId: t
		} = Aa(), {
			address: s,
			isConnected: r
		} = we(), o = c.useMemo(() => {
			if (s) return La(s)
		}, [s]), {
			data: a
		} = Pa({
			address: s,
			chainId: 1
		});
		return {
			blockie: o,
			ensName: a || void 0,
			address: s,
			isConnected: r,
			isOpen: n,
			selectedNetworkId: t
		}
	},
	zl = () => {
		const n = he({
				base: "Connect",
				lg: "Connect Wallet"
			}),
			{
				open: t
			} = Fs(),
			{
				blockie: s,
				ensName: r,
				address: o,
				isConnected: a
			} = Vl(),
			i = () => e.jsx("button", {
				className: `
          bg-blue-400 py-1 px-4 text-white rounded-md
          flex flex-row items-center align-center
          border-gray-600 border
          align-middle
          `,
				onClick: () => {
					t()
				},
				children: e.jsx("div", {
					className: "font-medium",
					children: n
				})
			}),
			l = () => {
				const [d, m] = c.useState(!1), {
					refs: f,
					floatingStyles: p,
					context: x
				} = Ce({
					whileElementsMounted: Ie,
					open: d,
					onOpenChange: m,
					middleware: [],
					placement: "bottom-end"
				}), {
					isMounted: h,
					styles: y
				} = Ae(x, {
					initial: {
						opacity: 1,
						transform: "scale(0.5,0)"
					},
					common: {
						transformOrigin: "top right"
					}
				}), b = Le(x), g = Pe(x), {
					getReferenceProps: w,
					getFloatingProps: C
				} = Ne([g, b]);
				return e.jsxs(e.Fragment, {
					children: [e.jsx("div", {
						ref: f.setReference,
						...w(),
						children: e.jsxs("div", {
							className: `
            hover:cursor-pointer
            bg-gray-900 hover:bg-gray-700 duration-700 py-1 px-3 text-white rounded-md font-medium
            flex flex-row items-center
            border-gray-600 border
            gap-x-2
            `,
							children: [e.jsx("img", {
								className: "w-4 h-4 rounded-full",
								src: s
							}), e.jsx(O, {
								className: "flex",
								children: r || Eo(o)
							}), e.jsx(Ma, {
								className: "rotate-90 stroke-3 h-6 w-5"
							})]
						})
					}), d && e.jsx("div", {
						className: "z-10",
						ref: f.setFloating,
						style: p,
						...C(),
						children: e.jsx("div", {
							className: "z-10 mt-1 bg-gray-800 border-[1px] border-gray-700 rounded-lg",
							style: {
								...y
							},
							children: h && e.jsx("div", {
								className: "right-10 flex flex-col p-4 pb-2 gap-1 ",
								children: e.jsx(Hl, {})
							})
						})
					})]
				})
			};
		return e.jsx("div", {
			children: a ? e.jsx(l, {}) : e.jsx(i, {})
		})
	};

function Io({
	onClick: n,
	IconComponent: t,
	iconClasses: s,
	containerClasses: r
}) {
	return e.jsx("div", {
		onClick: n,
		className: `cursor-pointer hover:opacity-70 ${r}`,
		children: e.jsx(t, {
			className: ` ${s}`
		})
	})
}
var is = {
	BASE_URL: "/app",
	MODE: "production",
	DEV: !1,
	PROD: !0,
	SSR: !1
};
const ls = (n, t) => n || t,
	Wl = {
		Chat: {
			enabled: ls(is.VITE_CHAT_ENABLED, "false")
		},
		Swap: {
			enabled: ls(is.VITE_SWAP_ENABLED, "false")
		},
		Telemetry: {
			enabled: ls(is.VITE_TELEMETRY_ENABLED, "true")
		}
	},
	Te = () => {
		const n = {
			...Tl,
			...window.ConfigJsStaticOptions
		};
		n.Logging || (n.Logging = {
			level: "warn"
		});
		const t = {
			...Wl
		};
		return {
			features: n,
			flags: t
		}
	},
	Cn = "data:image/webp;base64,UklGRuoBAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSIMAAAABcEjbdh0dhIcQhCA8s6lBYnQRHkIQgtB/+zoEETEB/Kf/NNZ1qtV3rvWh/Jm19WWzByXW11FuLNbEsKu2prYLX5P9pCwBdU136HkLKE8w8wasH3418iYoT7DkdfC8CihLAJ7lJ3pO59IiI+yKEu+icG/9TTceu57IeV275roOLc5/AgBWUDggQAEAABAHAJ0BKhwAHAA+nT6bSaohkNgMBABYCcSygGMjvzQQGrZ1ANszDpokeI6OJ3BVqjXsJQ/i5UTDwTAIfj06aWUQAP7ewWqOB4dwnemUl0+RbB00PrXnwScW8vL65Rc6yl4L9dBTB79HLbGNxt2xEpiOVu8t0fKEGWq/72XpnU3VVaFdXNYgzmyE+8w7uJHst6qx1o2uV8V9XzqWOuzwvS+0jYC+V/6HX8Awlt1mTJ1OAr9WbwZkY7BLgDdHB4NTUe8rsw8N4uNFXhNRHDq/hI//xtfFYXWQ+dYDSjQvN5B/OAFL8E+bN3xlxTNigV4rQYQ4e7gnboTT/bvn6//hRJqfFYbD0mGIo5Lbmt5c/4wNo7cKRNcjLmXrlIhw99VB7dC3c+u4UFWcF3DueefOqK/9/+TmszTvgH7Qr9/sAAAA",
	xe = ({
		logoUrl: n = Cn,
		tokenSymbol: t = "",
		size: s = 18
	}) => e.jsx("div", {
		className: "rounded-full",
		style: {
			width: s,
			height: s
		},
		children: e.jsx("img", {
			className: "rounded-full",
			src: n,
			alt: t,
			style: {
				width: s,
				height: s
			}
		})
	}),
	En = ({
		token0LogoUrl: n,
		token1LogoUrl: t,
		token0Symbol: s = "",
		token1Symbol: r = "",
		size: o = 18
	}) => e.jsxs("div", {
		className: "flex",
		children: [e.jsx("div", {
			className: "z-10",
			children: e.jsx(xe, {
				logoUrl: n,
				tokenSymbol: s,
				size: o
			})
		}), e.jsx("div", {
			className: "-left-1 relative",
			children: e.jsx(xe, {
				logoUrl: t,
				tokenSymbol: r,
				size: o
			})
		})]
	}),
	Ao = c.createContext({}),
	Gl = [Ra.id, Oa.id],
	ql = (n, t) => {
		const s = Gl.includes(t) ? 3 : 1;
		return n % s === 0
	},
	Yl = ({
		children: n
	}) => {
		const [t, s] = c.useState(0), [r, o] = c.useState(0), {
			cushRpc: a,
			chainID: i
		} = D(), l = c.useRef(a);
		l.current = a;
		const {
			data: d,
			refetch: m,
			isError: f
		} = uo({
			refetchInterval: 1e3,
			placeholderData: bs,
			gcTime: 0,
			queryKey: [new Date().valueOf()],
			queryFn: async () => await l.current.call("cush_liveBlock", [])
		});
		return c.useEffect(() => {
			m()
		}, [l, a]), c.useEffect(() => {
			d && (s(d), ql(d, i) && o(d))
		}, [d]), c.useEffect(() => {
			f === !0 && (s(-1), o(-1))
		}, [f]), e.jsx(Ao.Provider, {
			value: {
				blockNumber: t,
				blockNumberByChain: r
			},
			children: n
		})
	},
	In = () => {
		const n = c.useContext(Ao);
		if (n === null) throw new Error('"useRpcBlockContext" should be used inside a "RpcBlockContextProvider"');
		return n
	},
	Lo = () => {
		const n = Us();
		let t;
		for (const s of n.reverse())
			if (s.handle) {
				const r = s.handle.base;
				if (r) {
					t = r;
					break
				}
			} return {
			match: t
		}
	};

function Xl() {
	const {
		currentChainInfo: n
	} = D(), t = he({
		base: "12px",
		sm: "16px"
	}), {
		isMobile: s
	} = Ze(), {
		features: {
			Chains: r
		}
	} = Te(), [o, a] = c.useState(!1), {
		refs: i,
		floatingStyles: l,
		context: d
	} = Ce({
		whileElementsMounted: Ie,
		open: o,
		onOpenChange: a,
		middleware: [],
		placement: "bottom-start"
	}), {
		isMounted: m,
		styles: f
	} = Ae(d, {
		initial: {
			opacity: 1,
			transform: "scale(1,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), p = Pe(d), x = Le(d), {
		getReferenceProps: h,
		getFloatingProps: y
	} = Ne([p, x]);
	return e.jsxs(e.Fragment, {
		children: [e.jsx("div", {
			ref: i.setReference,
			...h(),
			children: e.jsxs("div", {
				className: "cursor-pointer select-none flex items-center justify-between gap-1 bg-gray-900 border border-gray-600 px-3 py-2 rounded-lg",
				children: [e.jsx(xe, {
					tokenSymbol: n.name,
					logoUrl: n.logoUrl,
					size: t
				}), e.jsx("div", {
					className: "w-fit flex flex-1",
					children: !s && e.jsx(O, {
						className: "flex whitespace-nowrap select-none",
						weight: P.REGULAR,
						children: e.jsx(Kl, {})
					})
				}), e.jsx(_t, {
					className: "fill-gray-300 w-3 h-3"
				})]
			})
		}), o && e.jsx("div", {
			className: "z-10",
			ref: i.setFloating,
			style: l,
			...y(),
			children: e.jsx("div", {
				className: "z-10 mt-1 bg-gray-800 border-[1px] border-gray-700 rounded-md",
				style: {
					...f
				},
				children: m && Object.values(ve).sort((b, g) => r.comingsoon.includes(b.internalName) < r.comingsoon.includes(g.internalName) ? -1 : r.featured.includes(b.internalName) < r.featured.includes(g.internalName) ? 1 : b.sortIndex < g.sortIndex ? -1 : b.id === g.id ? 0 : 1).filter(b => !r.hidden.includes(b.internalName)).map(b => e.jsx("div", {
					onClick: () => {
						a(!1)
					},
					className: "hover:bg-gray-drophover cursor:pointer",
					children: e.jsx(Zl, {
						chain_info: b,
						chain: n,
						comingSoon: r.comingsoon.includes(b.internalName)
					}, b.id)
				}, b.id))
			})
		})]
	})
}
const Kl = () => {
		const {
			blockNumber: n
		} = In();
		return e.jsx("div", {
			className: "flex flex-row items-center",
			children: e.jsx(O, {
				className: "text-xs mr-2 whitespace-nowrap",
				color: n > 0 ? u.gray[300] : u.yellow[400],
				children: n > 0 ? n : "DISCONNECTED"
			})
		})
	},
	Zl = ({
		chain_info: n,
		chain: t,
		comingSoon: s
	}) => {
		Kt();
		const r = s || n.id === (t == null ? void 0 : t.id),
			{
				chain: o
			} = Ht(),
			{
				pathname: a
			} = Kt(),
			{
				match: i
			} = Lo();
		let l = "";
		return i ? l = `../${n.internalName}/${i}/` : l = a.replace(o || "ethereum", n.internalName), e.jsxs(xn, {
			"aria-disabled": r,
			className: `
      text-white
      ${s?"line-through":""} flex items-center px-4 py-2 gap-x-2  text-sm
      `,
			to: l,
			children: [e.jsx(xe, {
				tokenSymbol: n.name,
				logoUrl: n.logoUrl || ve[1].logoUrl,
				size: 16
			}), n.name]
		}, n.id)
	},
	Po = "en";

function zn(n) {
	const {
		number: t,
		showOnly2Digits: s,
		minimumNumber: r = .01,
		removeTrailingZeros: o = !1,
		stringOut: a
	} = n, i = t < 0, l = Math.abs(t) < r, d = () => -Math.floor(Math.log10(Math.abs(t)) + 1), m = () => {
		let f = (Math.abs(t) * Math.pow(10, d() + 4)).toPrecision(4);
		return f = f.includes(".") ? `${f.slice(0,f.indexOf("."))} ${o?"":"000"}` : f, f = s ? f.substring(0, f.length - 2) : f, f
	};
	return a ? `${i?"-0.0":"0.0"}(${d()})${m()}` : e.jsx("span", {
		children: l && t !== 0 ? e.jsxs(e.Fragment, {
			children: [e.jsx("span", {
				children: i ? "-0.0" : "0.0"
			}), e.jsx("sub", {
				children: `${d()}`
			}), e.jsx("span", {
				children: m()
			})]
		}) : t
	})
}
const L = n => {
		const {
			singleLetterNotation: t,
			showOnly2Digits: s,
			smallNumberOn2Zeros: r,
			useScientificNotation: o,
			hideDecimals: a,
			stringOut: i,
			decimalAmount: l
		} = n;
		let {
			num: d
		} = n;
		const m = {
				maximumFractionDigits: 2,
				minimumFractionDigits: 2
			},
			f = "0.00",
			p = "0";
		if (typeof d == "string" && (d = Number(d)), d === 0) return a ? i ? p : e.jsx(e.Fragment, {
			children: p
		}) : i ? f : e.jsx(e.Fragment, {
			children: f
		});
		if (isNaN(d)) return i ? "" : e.jsx(e.Fragment, {});
		if (Math.abs(d) < 1e-6 || r && Math.abs(d) < .01) return zn({
			number: d,
			showOnly2Digits: s,
			stringOut: i
		});
		Math.abs(d) < 1 && (m.maximumFractionDigits = 6, m.minimumFractionDigits = 6), t && Math.abs(d) > 1e4 && (m.notation = "compact"), s && (m.minimumFractionDigits = 2, m.maximumFractionDigits = 2), a && (!t || Math.abs(d) < 1e4) && (m.maximumFractionDigits = 0, m.minimumFractionDigits = 0), l != null && (m.maximumFractionDigits = l, m.minimumFractionDigits = l), (Math.abs(d) >= Math.pow(10, 15) || o) && (m.notation = "scientific");
		const x = new Intl.NumberFormat(Po, m).format(d);
		return i ? x : e.jsx(e.Fragment, {
			children: x
		})
	},
	Ql = n => {
		const {
			granularity: t
		} = n, {
			num: s
		} = n;
		if (s === 0) return e.jsx(e.Fragment, {
			children: "0.00"
		});
		if (!s || isNaN(s)) return e.jsx(e.Fragment, {});
		if (s < 1e-6) return e.jsx(zn, {
			number: s
		});
		let r;
		return s >= 1e-7 && s <= .001 ? e.jsx(e.Fragment, {
			children: s.toFixed(t < 0 ? Math.abs(t) : 0)
		}) : s >= 1e-5 && s < .1 ? e.jsx(e.Fragment, {
			children: s.toFixed(t < 0 ? Math.abs(t) : 0)
		}) : (s >= .1 && s < 1e6 ? r = s.toFixed(4) : s >= Math.pow(10, 4) ? r = s.toExponential(2) : r = `${Number(s.toFixed(2)).toLocaleString(Po,{minimumFractionDigits:0})}`, e.jsx(e.Fragment, {
			children: t < 0 ? Number(r).toFixed(Math.abs(t)) : e.jsx(L, {
				num: Number(r),
				singleLetterNotation: !0
			})
		}))
	},
	At = n => {
		var o, a;
		if (!n.toString().includes("e")) return n.toString();
		const t = ((o = n.toString().split(".")) == null ? void 0 : o[1]) || "",
			s = Number((a = t == null ? void 0 : t.split("e-")) == null ? void 0 : a[1]) || 0,
			r = t.length + s;
		return Number(n).toFixed(r)
	};
class Jl {
	constructor(t, s, r, o) {
		me(this, "chainId");
		me(this, "decimals");
		me(this, "symbol");
		me(this, "name");
		this.chainId = t, this.decimals = s, this.symbol = r, this.name = o
	}
}
class ec extends Jl {
	constructor(s, r, o, a, i) {
		super(s, o, a, i);
		me(this, "isNative", !1);
		me(this, "isToken", !0);
		me(this, "address");
		this.address = $n(r)
	}
	equals(s) {
		return s.isToken && this.chainId === s.chainId && this.address === s.address
	}
	sortsBefore(s) {
		return this.address.toLowerCase() < s.address.toLowerCase()
	}
	get wrapped() {
		return this
	}
}
const _s = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
	vt = -887272,
	Zt = -vt,
	Gs = 1n,
	tc = 0n,
	Wn = 2n ** 96n,
	cs = 2n ** 32n,
	nc = 2n,
	sc = [128, 64, 32, 16, 8, 4, 2, 1].map(n => [BigInt(n), nc ** BigInt(n)]);
class ds {
	static mulDivRoundingUp(t, s, r) {
		const o = t * s;
		let a = o / r;
		return o % r !== 0n && (a = a + Gs), a
	}
}
class Gn {
	static getAmount0Delta(t, s, r, o) {
		t > s && ([t, s] = [s, t]);
		const a = r << 96n,
			i = s - t;
		return o ? ds.mulDivRoundingUp(ds.mulDivRoundingUp(a, i, s), Gs, t) : a * i / s / t
	}
	static getAmount1Delta(t, s, r, o) {
		return t > s && ([t, s] = [s, t]), o ? ds.mulDivRoundingUp(r, s - t, Wn) : r * (s - t) / Wn
	}
}

function Se(n, t) {
	return n * t >> 128n
}

function rc(n) {
	let t = 0n;
	for (const [s, r] of sc) n >= r && (n = n >> s, t += s);
	return t
}
const Ee = [BigInt("0xfff97272373d413259a46990580e213a"), BigInt("0xfff2e50f5f656932ef12357cf3c7fdcc"), BigInt("0xffe5caca7e10e4e61c3624eaa0941cd0"), BigInt("0xffcb9843d60f6159c9db58835c926644"), BigInt("0xff973b41fa98c081472e6896dfb254c0"), BigInt("0xff2ea16466c96a3843ec78b326b52861"), BigInt("0xfe5dee046a99a2a811c461f1969c3053"), BigInt("0xfcbe86c7900a88aedcffc83b479aa3a4"), BigInt("0xf987a7253ac413176f2b074cf7815e54"), BigInt("0xf3392b0822b70005940c7a398e4b70f3"), BigInt("0xe7159475a2c29b7443b29c7fa6e889d9"), BigInt("0xd097f3bdfd2022b8845ad8f792aa5825"), BigInt("0xa9f746462d870fdf8a65dc1f90e061e5"), BigInt("0x70d869a156d2a1b890bb3df62baf32f7"), BigInt("0x31be135f97d08fd981231505542fcfa6"), BigInt("0x9aa508b5b7a84e1c677de54f3e99bc9"), BigInt("0x5d6af8dedb81196699c329225ee604"), BigInt("0x2216e584f5fa1ea926041bedfe98"), BigInt("0x48a170391f7dc42444e8fa2")],
	Wt = class Wt {
		static getSqrtRatioAtTick(t) {
			const s = t < 0 ? t * -1 : t;
			let r = s & 1 ? Wt.ratio0 : Wt.ratio1;
			return s & 2 && (r = Se(r, Ee[0])), s & 4 && (r = Se(r, Ee[1])), s & 8 && (r = Se(r, Ee[2])), s & 16 && (r = Se(r, Ee[3])), s & 32 && (r = Se(r, Ee[4])), s & 64 && (r = Se(r, Ee[5])), s & 128 && (r = Se(r, Ee[6])), s & 256 && (r = Se(r, Ee[7])), s & 512 && (r = Se(r, Ee[8])), s & 1024 && (r = Se(r, Ee[9])), s & 2048 && (r = Se(r, Ee[10])), s & 4096 && (r = Se(r, Ee[11])), s & 8192 && (r = Se(r, Ee[12])), s & 16384 && (r = Se(r, Ee[13])), s & 32768 && (r = Se(r, Ee[14])), s & 65536 && (r = Se(r, Ee[15])), s & 131072 && (r = Se(r, Ee[16])), s & 262144 && (r = Se(r, Ee[17])), s & 524288 && (r = Se(r, Ee[18])), t > 0 && (r = _s / r), r % cs > tc ? r / cs + Gs : r / cs
		}
		static getTickAtSqrtRatio(t) {
			const s = t << 32n,
				r = rc(s);
			let o;
			r >= 128n ? o = s >> r - 127n : o = s << 127n - r;
			let a = r - 128n << 64n;
			for (let f = 0n; f < 14n; f++) {
				o = o * o >> 127n;
				const p = o >> 128n;
				a = a | p << 63n - f, o = o >> p
			}
			const i = a * 255738958999603826347141n,
				l = i - 3402992956809132418596140100660247210n >> 128n,
				d = i + 291339464771989622907027621153398088495n >> 128n,
				m = l === d ? l : BigInt(Wt.getSqrtRatioAtTick(Number(d)) <= t) ? d : l;
			return Number(m)
		}
	};
me(Wt, "ratio0", BigInt("0xfffcb933bd6fad37aa2d162d1a594001")), me(Wt, "ratio1", BigInt("0x100000000000000000000000000000000"));
let Ot = Wt;

function Ts(n, t) {
	const s = Math.round(n / t) * t;
	return s < vt ? s + t : s > Zt ? s - t : s
}
const oc = [{
		name: "token",
		type: "address"
	}, {
		name: "amount",
		type: "uint160"
	}, {
		name: "expiration",
		type: "uint48"
	}, {
		name: "nonce",
		type: "uint48"
	}],
	ac = {
		PermitSingle: [{
			name: "details",
			type: "PermitDetails"
		}, {
			name: "spender",
			type: "address"
		}, {
			name: "sigDeadline",
			type: "uint256"
		}],
		PermitDetails: oc
	};

function ic(n, t) {
	return {
		name: "Permit2",
		chainId: t,
		verifyingContract: n
	}
}

function lc(n, t, s, r, o) {
	const a = ic(s, r);
	return {
		account: n,
		domain: a,
		types: ac,
		message: {
			details: {
				token: t.details.token,
				amount: BigInt(po),
				expiration: o || Number(t.details.expiration),
				nonce: Number(t.details.nonce)
			},
			spender: t.spender,
			sigDeadline: BigInt(t.sigDeadline)
		},
		primaryType: "PermitSingle"
	}
}
const $t = ({
		chainId: n = 1,
		address: t,
		decimals: s = 18,
		symbol: r,
		name: o
	}) => new ec(n, t, s, r, o),
	cc = (n, t) => (n.token0.logoURI = ze(n.token0.address, t).logoURI, n.token1.logoURI = ze(n.token1.address, t).logoURI, {
		...n
	}),
	ke = (n, t) => ze(n, t).logoURI,
	jr = n => ({
		chainId: 1,
		address: se,
		decimals: 18,
		name: "UNKNOWN TOKEN",
		symbol: n,
		logoURI: Cn,
		isNative: !1,
		isToken: !0
	}),
	ks = (n, t) => `${n.toUpperCase()}_${t}`,
	dc = n => {
		const t = new Map;
		return n.tokens.forEach(s => {
			s.logoURI && s.logoURI.includes("ipfs://") && (s.logoURI = s.logoURI.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/")), t.set(ks(s.symbol.toUpperCase(), s.chainId), s), t.set(ks(s.address.toLowerCase(), s.chainId), s)
		}), t
	},
	uc = dc(zs),
	Xt = n => ze("", n),
	ze = (n, t) => {
		if (!ve[t]) return jr("NULL");
		if (!n || n == "" || n === se) {
			const {
				decimals: f,
				name: p,
				symbol: x
			} = ve[t].nativeCurrency, h = Ue[t], y = $t({
				chainId: t,
				address: se,
				decimals: f,
				name: p,
				symbol: x
			}), b = ke(h, t);
			return y.logoURI = b || Cn, y
		}
		const s = uc.get(ks(n, t));
		if (!s) return jr("NULL");
		const {
			chainId: r,
			address: o,
			decimals: a,
			name: i,
			symbol: l
		} = s, m = $t({
			chainId: r,
			address: o,
			decimals: a,
			name: i,
			symbol: l
		});
		return m.logoURI = s.logoURI || Cn, m
	},
	R = (n, t, s) => {
		let r = ze(n, s).symbol;
		return (!r || r === "NULL") && t && (r = t), r || (r = Xt(s).symbol), r || (r = "NULL"), r
	},
	qn = (n, t, s) => {
		const r = rt(s);
		return n === "ADD" ? (Ol(Yn(s), t.toLowerCase()), rt(s)) : n === "REMOVE" ? (jn(Yn(s), t.toLowerCase()), rt(s)) : r
	},
	rt = n => {
		const t = ft(Yn(n));
		if (t === null || t.length === 0) {
			const s = [...ve[n].watchlist];
			return Bt(Yn(n), s), s
		} else return t
	},
	Yn = (n = 1) => `market_watch_${n}`,
	Mo = () => {
		const [n, t] = c.useState({
			selected: 1,
			decimals: 0,
			sign: -1,
			flipped: !0
		}), s = o => {
			Da(o, n) || t(o)
		}, r = c.useCallback(o => {
			o < 0 && (o = n.flipped ? 1 : 0);
			const a = {
				selected: o,
				decimals: n.decimals,
				sign: o === 0 ? 1 : -1,
				flipped: o === 0
			};
			s(a)
		}, [n]);
		return {
			token: n,
			setToken: r,
			setFullToken: s
		}
	};
class Ro {
	constructor(t, s = ["wss", "https"]) {
		me(this, "apis");
		me(this, "root");
		me(this, "protocols");
		this.root = t, this.protocols = s, this.apis = new Map
	}
	network(t) {
		const s = this.apis.get(t);
		if (s) return s;
		const r = ws(`${this.root}${t}`, this.protocols);
		return this.apis.set(t, r), r
	}
}
const Oo = c.createContext({}),
	pc = ({
		children: n
	}) => {
		const {
			features: t
		} = Te(), [s] = c.useState(new Ro(t.ChainRpc.omni, t.ChainRpc.protocols));
		return e.jsx(Oo.Provider, {
			value: {
				omniCush: s
			},
			children: n
		})
	},
	mc = () => {
		const n = c.useContext(Oo);
		if (n === null) throw new Error('"useRpcContext" should be used inside a "RpcContextProvider"');
		return n
	};

function be(n, t, s = {
	placeholderData: bs
}) {
	const {
		omniCush: r
	} = mc(), {
		chain: o
	} = D(), {
		blockNumber: a
	} = In();
	s && s.placeholderData === void 0 && (s.placeholderData = bs);
	const i = [o, n, a, t];
	s.queryKey && i.push(s.queryKey);
	const l = {
		...s,
		queryKey: i
	};
	l.queryKey = i, l.queryFn = async () => typeof n == "string" ? r.network(o).call(n, t) : r.network(o).call(n[0], t), l.gcTime || (l.gcTime = 30 * 1e3);
	const d = uo(l);
	c.useEffect(() => {
		d.refetch()
	}, [r, o]);
	const m = typeof n != "string" ? n[1] : h => h,
		[f, p] = c.useState(m(d.data));
	c.useEffect(() => {
		p(m(d.data))
	}, [d.data]);
	const x = d;
	return x.mutatedData = f, x
}
const Do = c.createContext({
		token: {
			selected: 1,
			sign: -1,
			flipped: !0,
			decimals: 0
		},
		token0: Xt(1),
		token1: Xt(1)
	}),
	fc = ({
		children: n
	}) => {
		var v;
		const {
			currentChain: t
		} = D(), s = Xt(t), [r, o] = c.useState(s), [a, i] = c.useState(s), l = (v = ve[t]) == null ? void 0 : v.defaultPool, {
			blockNumber: d,
			blockNumberByChain: m
		} = In(), {
			poolAddress: f = l,
			token0: p,
			token1: x
		} = Ht(), [h, y] = c.useState(l), {
			token: b,
			setToken: g,
			setFullToken: w
		} = Mo(), [C, k] = c.useState(void 0), [T, E] = c.useState(rt(t)), {
			data: N
		} = be("cush_search", [
			[p || "", x || ""].join("/")
		], {
			enabled: !!p && !!x
		});
		c.useEffect(() => {
			N && (N == null ? void 0 : N.result_size) > 1 && p && x && y(N.pools[0].address)
		}, [N]), c.useEffect(() => {
			E(rt(t))
		}, [t]), c.useEffect(() => {
			f && f.toLocaleLowerCase() !== h.toLocaleLowerCase() && y(f)
		}, [f]);
		const {
			mutatedData: S
		} = be(["cush_search", I => {
			const A = I == null ? void 0 : I.pools[0];
			return A || {
				address: se,
				t0: Xt(1).address,
				t1: Xt(1).address,
				t1_name: "...",
				t0_name: "...",
				t1_symbol: "...",
				t0_symbol: "...",
				t1_decimals: 0,
				t0_decimals: 1,
				is_preferred_token_order: !1
			}
		}], [h]), {
			data: G
		} = be("cush_simulatePoolLiquidity", [h, m]), {
			setIsLoading: _
		} = Tt();
		return c.useEffect(() => {
			!S || !S.address || h.toLowerCase() === S.address.toLowerCase() || h.toLocaleLowerCase() === f.toLocaleLowerCase() || S.address === se || (y(S.address), _(!1))
		}, [S]), c.useEffect(() => {
			const I = {
				token0: $t({
					address: S.t0,
					symbol: S.t0_symbol,
					decimals: S.t0_decimals,
					name: S.t0_name,
					chainId: t
				}),
				token1: $t({
					address: S.t1,
					symbol: S.t1_symbol,
					decimals: S.t1_decimals,
					name: S.t1_name,
					chainId: t
				})
			};
			cc(I, t);
			const A = S.is_preferred_token_order ? 1 : 0,
				B = {
					selected: A,
					decimals: 0,
					sign: A === 0 ? 1 : -1,
					flipped: A === 0
				};
			B.decimals = S.t1_decimals - S.t0_decimals, o(I.token0), i(I.token1), w(B)
		}, [h, S.address]), e.jsx(Do.Provider, {
			value: {
				poolAddress: h,
				liquidityChart: G,
				poolSummary: S,
				token0: r,
				token1: a,
				chosenValue: C,
				setChosenValue: k,
				token: b,
				setToken: g,
				favoritePool: T,
				setFavoritePool: E,
				blockNumber: d,
				tickSpacing: G == null ? void 0 : G.tick_spacing
			},
			children: n
		})
	},
	oe = () => {
		const n = c.useContext(Do);
		if (n === null) throw new Error('"useDataContext" should be used inside a "DataContextProvider"');
		return n
	};

function ts(n) {
	const {
		isStarred: t,
		onClick: s
	} = n;
	return e.jsx("div", {
		className: "cursor-pointer",
		onClick: s,
		children: e.jsx("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: t ? "white" : "null",
			viewBox: "0 0 24 24",
			strokeWidth: 1.5,
			stroke: "white",
			className: "w-4 h-4",
			children: e.jsx("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
			})
		})
	})
}
const qs = (n, t, s, r, o) => {
		if (t) {
			const a = qn("REMOVE", n, s);
			r([...a]), o && o([...a])
		} else {
			const a = qn("ADD", n, s);
			r([...a]), o && o([...a])
		}
	},
	ns = ({
		value: n,
		delay: t = 250
	}) => {
		const [s, r] = c.useState(n);
		return c.useEffect(() => {
			const o = setTimeout(() => {
				r(n)
			}, t);
			return () => {
				clearTimeout(o)
			}
		}, [n, t]), s
	};

function Cs(n, t = 250) {
	const [s, r] = c.useState(n), o = ns({
		value: s,
		delay: t
	});
	return t === 0 ? [s, r] : [o, r]
}
const Fo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgICAgY2xhc3NOYW1lPSJ3LTYgaC02Ij4KICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9InJvdW5kIiBzdHJva2VMaW5lam9pbj0icm91bmQiCiAgICAgICAgICBkPSJNMTEuNDggMy40OTlhLjU2Mi41NjIgMCAwMTEuMDQgMGwyLjEyNSA1LjExMWEuNTYzLjU2MyAwIDAwLjQ3NS4zNDVsNS41MTguNDQyYy40OTkuMDQuNzAxLjY2My4zMjEuOTg4bC00LjIwNCAzLjYwMmEuNTYzLjU2MyAwIDAwLS4xODIuNTU3bDEuMjg1IDUuMzg1YS41NjIuNTYyIDAgMDEtLjg0LjYxbC00LjcyNS0yLjg4NWEuNTYzLjU2MyAwIDAwLS41ODYgMEw2Ljk4MiAyMC41NGEuNTYyLjU2MiAwIDAxLS44NC0uNjFsMS4yODUtNS4zODZhLjU2Mi41NjIgMCAwMC0uMTgyLS41NTdsLTQuMjA0LTMuNjAyYS41NjMuNTYzIDAgMDEuMzIxLS45ODhsNS41MTgtLjQ0MmEuNTYzLjU2MyAwIDAwLjQ3NS0uMzQ1TDExLjQ4IDMuNXoiCiAgICAgICAgICBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPg==",
	us = ({
		tablePoolSummary: n,
		virtualRows: t,
		rows: s,
		setShowModal: r,
		isFullHeight: o = !1
	}) => {
		const {
			match: a
		} = Lo(), {
			chainID: i
		} = D(), l = ["liquidity", "pool"].includes(a) ? a : "pool";
		return e.jsx("div", {
			className: "overflow-y w-full",
			children: e.jsxs("table", {
				className: "table-auto block h-fit",
				children: [e.jsx("thead", {
					children: n.getHeaderGroups().map(d => e.jsx("tr", {
						children: d.headers.map(m => e.jsx("th", {
							colSpan: m.colSpan,
							className: `pr-4 text-end mb-3 ${m.column.id==="pool"?"w-40 sm:w-72":"w-24"}`,
							children: m.isPlaceholder ? null : un(m.column.columnDef.header, m.getContext())
						}, m.id))
					}, d.id))
				}), e.jsx("tbody", {
					className: "overflow-y-auto block max-h-[280px] no-scrollbar",
					children: t().length > 0 && t().map(d => {
						const m = s[d.index];
						return e.jsx("tr", {
							className: "hover:bg-gray-800",
							children: m.getVisibleCells().map(f => e.jsx("td", {
								className: `text-end p-1 pr-4 ${f.column.id==="pool"?"w-40 sm:w-72":"w-24"}
                  ${(()=>{const p={}[f.column.id];return p!==void 0?p:""})()}`,
								children: e.jsx(xn, {
									to: `${l}/${m.original.address}`,
									relative: "path",
									onClick: () => {
										r(!1);
										const p = ft(`recent_search_${i}`);
										if (p) {
											const x = p.filter(h => h !== m.original.address);
											x.unshift(m.original.address), localStorage.setItem(`recent_search_${i}`, JSON.stringify(x.slice(0, 5)))
										} else localStorage.setItem(`recent_search_${i}`, JSON.stringify([m.original.address]))
									},
									children: un(f.column.columnDef.cell, f.getContext())
								})
							}, f.id))
						}, m.id)
					})
				})]
			})
		})
	},
	Qt = ({
		containerClasses: n,
		lineClasses: t
	}) => e.jsx("div", {
		className: n,
		children: e.jsx("div", {
			className: `w-full y-1 h-[1px] bg-gray-700 ${t}`
		})
	}),
	Uo = "https://assets.oku.trade/search.svg",
	Bo = "https://assets.oku.trade/search-blue.svg";

function xc() {
	const [n, t] = c.useState(!1), [s, r] = c.useState(""), {
		refs: o,
		context: a
	} = Ce({
		open: n,
		onOpenChange: t
	}), i = Pe(a), l = Le(a, {
		outsidePressEvent: "mousedown"
	}), d = Fa(a), {
		getReferenceProps: m,
		getFloatingProps: f
	} = Ne([i, l, d]), p = he({
		base: !1,
		sm: !0
	}), {
		setShowCreatePoolModal: x
	} = Tt(), {
		currentChain: h
	} = D(), {
		favoritePool: y,
		setFavoritePool: b
	} = oe(), g = c.useRef(null), {
		data: w
	} = be("cush_search", [s.toString(), {
		fee_tiers: [],
		result_offset: 0,
		sort_by: "total_volume_7d_usd",
		result_size: 50,
		sort_order: !1
	}]), C = c.useMemo(() => ft(`recent_search_${h}`), [h, n]), {
		data: k
	} = be("cush_searchPoolsByList", [C || []]), {
		data: T
	} = be("cush_searchPoolsByList", [y]), E = Bs(), N = c.useMemo(() => [E.accessor(F => F.address, {
		id: "pool",
		header: () => e.jsxs("div", {
			className: "text-start flex flex-nowrap pl-[14px] gap-x-1 w-[200px]",
			children: [e.jsx("img", {
				src: Fo,
				alt: "star",
				className: "w-4 h-4"
			}), e.jsx(O, {
				color: u.gray[400],
				children: e.jsx(Ye, {
					id: "lQfOr9"
				})
			})]
		}),
		cell: F => {
			const K = F.row.original;
			return e.jsxs("div", {
				className: "flex flex-row items-center gap-x-1 px-3 my-1 w-[200px]",
				children: [e.jsx(ts, {
					onClick: V => {
						qs(K.address, y.includes(K.address.toLowerCase()), h, b), V.stopPropagation(), V.preventDefault()
					},
					isStarred: y.includes(K.address.toLowerCase())
				}), e.jsxs("div", {
					className: "flex flex-row items-center w-fit",
					children: [e.jsx(En, {
						token0LogoUrl: ke(K.t0, h),
						token0Symbol: R(K.t0, K.t0_symbol, h),
						token1LogoUrl: ke(K.t1, h),
						token1Symbol: R(K.t1, K.t1_symbol, h)
					}), e.jsxs("div", {
						className: "flex flex-row items-center whitespace-pre",
						children: [e.jsx(j, {
							children: `${R(K.t0,K.t0_symbol,h)}`
						}), e.jsx(j, {
							color: u.gray[100],
							children: `/${R(K.t1,K.t1_symbol,h)}`
						}), e.jsxs(j, {
							color: u.gray[100],
							className: "ml-2",
							children: [K.fee / 1e4, "%"]
						})]
					})]
				})]
			})
		}
	}), E.accessor(F => F.tvl_usd, {
		id: "tvl_usd",
		cell: F => e.jsx(j, {
			color: u.gray[200],
			children: e.jsx(L, {
				num: F.getValue(),
				singleLetterNotation: !0
			})
		}),
		header: () => e.jsx(j, {
			color: u.gray[400],
			children: e.jsx(Ye, {
				id: "FHKsZF"
			})
		})
	}), E.accessor(F => F.t0_volume, {
		id: "volume",
		cell: F => e.jsx(j, {
			color: u.gray[200],
			children: e.jsx(L, {
				num: F.getValue(),
				singleLetterNotation: !0
			})
		}),
		header: () => e.jsx(j, {
			color: u.gray[400],
			children: e.jsx(Ye, {
				id: "UOq4hK"
			})
		})
	}), E.accessor(F => F.last_price, {
		id: "price",
		cell: F => e.jsx(j, {
			color: u.gray[200],
			children: e.jsx(L, {
				num: F.getValue(),
				singleLetterNotation: !0
			})
		}),
		header: () => e.jsx(j, {
			color: u.gray[400],
			children: e.jsx(Ye, {
				id: "a7u1N9"
			})
		})
	})], [h, y]), S = vn({
		data: w != null && w.pools ? w.pools : [],
		columns: N,
		getCoreRowModel: _n()
	}), G = vn({
		data: T != null && T.pools ? T.pools : [],
		columns: N,
		getCoreRowModel: _n()
	}), _ = vn({
		data: k != null && k.pools ? k.pools : [],
		columns: N,
		getCoreRowModel: _n()
	});
	c.useEffect(() => {
		G.setColumnVisibility({
			volume: p,
			price: p
		}), S.setColumnVisibility({
			volume: p,
			price: p
		}), _.setColumnVisibility({
			volume: p,
			price: p
		})
	}, [p]);
	const {
		rows: v
	} = c.useMemo(G.getRowModel, [T == null ? void 0 : T.pools, h]), I = os({
		getScrollElement: () => g.current,
		count: v.length,
		overscan: 10,
		estimateSize: () => 20,
		measureElement: typeof window < "u" && navigator.userAgent.indexOf("Firefox") === -1 ? F => F == null ? void 0 : F.getBoundingClientRect().height : void 0
	}), {
		rows: A
	} = c.useMemo(S.getRowModel, [w]), B = os({
		count: A.length,
		estimateSize: () => 20,
		getScrollElement: () => g.current,
		overscan: 10,
		measureElement: typeof window < "u" && navigator.userAgent.indexOf("Firefox") === -1 ? F => F == null ? void 0 : F.getBoundingClientRect().height : void 0
	}), {
		rows: M
	} = c.useMemo(_.getRowModel, [k == null ? void 0 : k.pools, h]), H = os({
		getScrollElement: () => g.current,
		count: M.length,
		overscan: 10,
		estimateSize: () => 20,
		measureElement: typeof window < "u" && navigator.userAgent.indexOf("Firefox") === -1 ? F => F == null ? void 0 : F.getBoundingClientRect().height : void 0
	}), {
		getVirtualItems: X
	} = H, {
		getVirtualItems: Z
	} = I, {
		getVirtualItems: J
	} = B;
	return e.jsxs(e.Fragment, {
		children: [e.jsx("div", {
			ref: o.setReference,
			...m(),
			children: e.jsx(gc, {})
		}), e.jsx(Ua, {
			children: n && e.jsx(Ba, {
				lockScroll: !0,
				style: {
					background: "rgba(0, 0, 0, 0.7)"
				},
				className: "z-20 flex items-center justify-center",
				children: e.jsx($a, {
					context: a,
					children: e.jsx("div", {
						ref: o.setFloating,
						...f(),
						children: e.jsxs("div", {
							className: "flex flex-col bg-gray-900 rounded-md  border-b-[1px] border-gray-700  overflow-hidden text-white drop-shadow-xl",
							ref: g,
							children: [e.jsx(hc, {
								setSearchTerm: r
							}), e.jsx("div", {
								className: "absolute top-12 right-0",
								children: e.jsxs("div", {
									className: "flex cursor-pointer flex-row gap-x-1 items-center py-1 px-2",
									onClick: () => {
										x(!0), t(!1)
									},
									children: [e.jsx(co, {
										color: u.gray[400],
										width: 12,
										height: 12
									}), e.jsx(j, {
										color: u.gray[400],
										children: "Create Pool"
									})]
								})
							}), s !== "" && A.length > 0 ? e.jsxs("div", {
								className: "border-x-[1px] border-gray-700 rounded-b-md",
								children: [e.jsxs("div", {
									className: "p-4 flex gap-x-1 ",
									children: [e.jsx(ir, {
										color: u.gray[400],
										width: 12,
										height: 12
									}), e.jsx(O, {
										color: u.gray[50],
										children: "Results"
									})]
								}), e.jsx(us, {
									tablePoolSummary: S,
									virtualRows: J,
									rows: A,
									setShowModal: t,
									isFullHeight: !0
								})]
							}) : s !== "" && A.length === 0 ? e.jsxs("div", {
								className: "border-x-[1px] border-gray-700 rounded-b-md",
								children: [e.jsxs("div", {
									className: "p-4 flex gap-x-1 ",
									children: [e.jsx(ir, {
										color: u.gray[400],
										width: 12,
										height: 12
									}), e.jsx(O, {
										color: u.gray[50],
										children: "Results"
									})]
								}), e.jsx("div", {
									className: "flex justify-center overflow-y w-[500px] h-14",
									children: e.jsx(ee, {
										color: u.gray[400],
										children: "No results"
									})
								})]
							}) : e.jsxs(e.Fragment, {
								children: [M.length > 0 ? e.jsxs("div", {
									className: " border-x-[1px] border-gray-700 ",
									children: [e.jsxs("div", {
										className: "p-4 flex gap-x-1",
										children: [e.jsx(Ha, {
											color: u.gray[50],
											width: 13
										}), e.jsx(O, {
											color: u.gray[50],
											children: "Recent"
										})]
									}), e.jsx(us, {
										tablePoolSummary: _,
										virtualRows: X,
										rows: M,
										setShowModal: t
									}), e.jsx(Qt, {
										containerClasses: "mt-4"
									})]
								}) : e.jsx(e.Fragment, {}), v.length > 0 && e.jsxs("div", {
									className: " border-x-[1px] border-gray-700 rounded-b-md ",
									children: [e.jsxs("div", {
										className: "p-4 flex gap-x-1",
										children: [e.jsx(Va, {
											color: u.gray[50],
											width: 13
										}), e.jsx(O, {
											color: u.gray[50],
											children: "Watchlist"
										})]
									}), e.jsx(us, {
										isFullHeight: s === "" && M.length === 0,
										tablePoolSummary: G,
										virtualRows: Z,
										rows: v,
										setShowModal: t
									})]
								})]
							})]
						})
					})
				})
			})
		})]
	})
}
const hc = ({
		setSearchTerm: n
	}) => {
		const [t, s] = c.useState(!1), [r, o] = c.useState(!1);
		return e.jsx(yc, {
			onMouseEnter: () => o(!0),
			onMouseLeave: () => o(!1),
			className: `
        w-full grow text-white placeholder:text-gray-500 h-[33px] focus:outline-none placeholder:text-md placeholder:font-normal rounded-t-md border-[1px]`,
			placeholder: "Search a token or pool",
			style: {
				backgroundColor: u.gray[900],
				borderColor: r || t ? u.blue[400] : u.gray[600],
				paddingLeft: 32,
				marginTop: 0,
				backgroundImage: `url(${r||t?Bo:Uo})`,
				backgroundSize: "12px",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "10px center"
			},
			onFocus: () => s(!0),
			onBlur: () => s(!1),
			onInputChange: a => n(a)
		})
	},
	yc = ({
		onInputChange: n,
		reset: t,
		...s
	}) => {
		const [r, o] = c.useState(""), a = ns({
			value: r,
			delay: 500
		});
		return c.useEffect(() => {
			n(a)
		}, [a]), c.useEffect(() => {
			t && o("")
		}, [t]), e.jsx("input", {
			value: r,
			...s,
			onChange: i => o(i.target.value)
		})
	},
	gc = () => {
		const [n, t] = c.useState(!1), s = c.useMemo(() => n ? e.jsx("img", {
			src: Bo,
			alt: "search",
			className: "w-[14px] h-[14px] mx-[1px]"
		}) : e.jsx("img", {
			src: Uo,
			alt: "search",
			className: "w-4 h-4"
		}), [n]);
		return e.jsxs("button", {
			onMouseEnter: () => t(!0),
			onMouseLeave: () => t(!1),
			className: "h-[33px] pl-2 text-gray-500 rounded-md border-[1px] border-gray-600 hover:border-blue-400 bg-gray-900 flex items-center gap-x-2 w-[150px] sm:w-[350px] md:w-[300px] lg:w-[164px]",
			children: [s, " Search"]
		})
	},
	bc = "/image/logo.png";

function wc(n) {
	const {
		onClick: t,
		inExpandedMenu: s
	} = n, [r, o] = c.useState(!1), {
		isMobile: a
	} = Ze(), i = a ? 18 : 24;
	return e.jsxs("button", {
		onClick: t,
		onMouseEnter: () => o(!0),
		onMouseLeave: () => o(!1),
		className: "relative flex",
		style: {
			width: i,
			height: i,
			borderRadius: i
		},
		children: [e.jsx("img", {
			className: `${s?"":"absolute"}`,
			alt: "Home Icon",
			style: {
				width: i,
				height: i,
				borderRadius: i
			},
			src: bc
		}), r && e.jsx("div", {
			className: `${s?"":"absolute"} h-[32px] w-[32px] rounded-[32px] top-[-4px] left-[-4px] md:top-[-4px] md:left-[-4px]`,
			style: {
				backgroundColor: u.hover,
				opacity: _o.hover
			}
		})]
	})
}

function Mt({
	label: n,
	relative: t,
	end: s,
	to: r,
	reloadDocument: o,
	target: a
}) {
	const {
		isMobile: i
	} = Ze();
	return e.jsx(xn, {
		relative: t,
		end: s,
		to: r,
		className: ({
			isActive: l
		}) => `flex items-center p-2 hover:bg-gray-750 rounded-lg text-gray-300 hover:text-gray-50 hover:font-medium ${l?"bg-gray-750 font-medium":""}`,
		reloadDocument: o,
		target: a,
		children: ({
			isActive: l
		}) => {
			const d = i ? ee : O;
			return e.jsx(d, {
				weight: i ? P.MEDIUM : "inherit",
				color: l ? u.gray[50] : "inherit",
				className: "whitespace-nowrap",
				children: n
			})
		}
	})
}

function jc() {
	var y;
	const {
		currentChainInfo: n
	} = D(), {
		features: t
	} = Te(), {
		poolSummary: s,
		poolAddress: r
	} = oe(), {
		token0: o,
		token1: a
	} = Ht(), {
		width: i
	} = yn(), l = i > 900, [d, m] = c.useState($n(n.defaultPool)), [f, p] = c.useState(s != null && s.t0 ? s.t0 : n.defaultToken0), [x, h] = c.useState(s != null && s.t1 ? s.t1 : n.defaultToken1);
	return c.useEffect(() => {
		r && m(r)
	}, [r]), c.useEffect(() => {
		o && a ? (p(o), h(a)) : s && s.t0 !== se && s.t1 !== se ? (p(s.t0), h(s.t1)) : !o && !a && (p(n.defaultToken0), h(n.defaultToken1))
	}, [s, o, a]), e.jsxs("div", {
		className: "flex flex-row gap-[12px] justify-center items-center",
		children: [e.jsx(wc, {
			onClick: () => {
				document.cookie = "landingPage=unvisited; expires=Fri, 31 Dec 9999 23:59:59 GMT", window.location.href = "/"
			}
		}), l && e.jsxs("div", {
			className: "flex flex-row gap-[12px] justify-center ml-2",
			children: [t.Swap.enabled === "true" && e.jsx(Mt, {
				to: `swap/${f}/${x}`,
				relative: "route",
				label: et._({
					id: "vH2C/2"
				})
			}), e.jsx(Mt, {
				to: `pool/${d}`,
				relative: "route",
				label: et._({
					id: "JHxGP5"
				})
			}), e.jsx(Mt, {
				to: `liquidity/${d}`,
				relative: "route",
				label: et._({
					id: "HGkvK+"
				})
			}), ((y = t.Analytics) == null ? void 0 : y.enabled) === "true" && t.Analytics.url && e.jsx(Mt, {
				to: `${t.Analytics.url}/${n.internalName}/overview`,
				reloadDocument: !0,
				label: et._({
					id: "ZlwDi6"
				}),
				target: "_blank"
			})]
		})]
	})
}

function vc() {
	const n = he({
			base: "8px",
			sm: "10px"
		}),
		t = he({
			base: "40px",
			sm: "50px"
		}),
		s = he({
			base: "6px",
			sm: "10px",
			lg: "18px"
		}),
		r = he({
			base: "8px",
			sm: "16px"
		}),
		o = () => e.jsxs("div", {
			className: "px-2 py-1.5 border rounded-md border-gray-600 bg-gray-900 flex items-center gap-x-1 min-w-[56px]",
			children: [e.jsx("img", {
				src: "https://assets.oku.trade/uni-v3.webp",
				alt: "UNIv3",
				width: 18,
				height: 28
			}), e.jsx(O, {
				className: "mt-1",
				children: "V3"
			})]
		}),
		a = () => e.jsx("div", {
			className: "min-[900px]:hidden flex flex-row items-center gap-x-2",
			children: e.jsx("div", {
				className: "block ",
				children: e.jsx(_c, {})
			})
		});
	return e.jsx("div", {
		className: "flex bg-gray-dark h-fit w-full flex-col",
		children: e.jsx("div", {
			style: {
				height: t,
				paddingRight: r,
				paddingLeft: r
			},
			className: "grow flex flex-row items-center justify-between py-[6px] lg:mt-0",
			children: e.jsxs("div", {
				className: "flex flex-row justify-between w-full",
				style: {
					gap: n
				},
				children: [e.jsxs("div", {
					className: "flex flex-row gap-3",
					children: [e.jsx(jc, {}), e.jsx(a, {})]
				}), e.jsxs("div", {
					className: "flex flex-row items-center",
					style: {
						gap: s
					},
					children: [e.jsx(xc, {}), e.jsx(o, {}), e.jsx(Xl, {}), e.jsx(zl, {})]
				})]
			})
		})
	})
}
const _c = () => {
	const {
		features: n
	} = Te(), {
		currentChainInfo: t
	} = D(), {
		poolSummary: s
	} = oe(), {
		poolAddress: r,
		token0: o,
		token1: a
	} = Ht(), [i, l] = c.useState($n(t.defaultPool)), [d, m] = c.useState(s ? s.t0 : void 0), [f, p] = c.useState(s ? s.t1 : void 0);
	c.useEffect(() => {
		ot(r || "0x") && l($n(r || "0x"))
	}, [r]), c.useEffect(() => {
		o && a ? (m(o), p(a)) : s && (m(s.t0), p(s.t1))
	}, [s, o, a]);
	const [x, h] = c.useState(!1), {
		refs: y,
		floatingStyles: b,
		context: g
	} = Ce({
		whileElementsMounted: Ie,
		open: x,
		onOpenChange: h,
		middleware: [],
		placement: "bottom-start"
	}), {
		isMounted: w,
		styles: C
	} = Ae(g, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top left"
		}
	}), k = Pe(g), T = Le(g), {
		getReferenceProps: E,
		getFloatingProps: N
	} = Ne([k, T]);
	return e.jsxs(e.Fragment, {
		children: [e.jsx("div", {
			ref: y.setReference,
			...E(),
			children: e.jsx("div", {
				className: "hover:cursor-pointer z-1 flex bg-gray-900 outline outline-gray-600 outline-1 rounded-md p-2",
				children: e.jsx(Io, {
					IconComponent: Rl,
					iconClasses: "stroke-gray-400"
				})
			})
		}), x && e.jsx("div", {
			className: "z-10",
			ref: y.setFloating,
			style: b,
			...N(),
			children: e.jsx("div", {
				className: "z-10 mt-1 bg-gray-900 outline outline-gray-600 outline-1 rounded-lg",
				style: {
					...C
				},
				children: w && e.jsxs("div", {
					className: "right-10 flex flex-col px-4 gap-1 py-2",
					children: [e.jsx(Mt, {
						to: `swap/${d}/${f}`,
						relative: "route",
						label: et._({
							id: "vH2C/2"
						})
					}), e.jsx(Mt, {
						to: `pool/${i}`,
						relative: "route",
						label: et._({
							id: "JHxGP5"
						})
					}), e.jsx(Mt, {
						to: `liquidity/${i}`,
						relative: "route",
						label: et._({
							id: "HGkvK+"
						})
					}), n.Analytics.enabled && e.jsx("div", {
						children: e.jsx(Mt, {
							to: (`${n.Analytics.url}${t.internalName}/overview`),
							reloadDocument: !0,
							label: et._({
								id: "ZlwDi6"
							}),
							target: "_blank"
						})
					})]
				})
			})
		})]
	})
};

function Tc(n) {
	const {
		children: t
	} = n;
	return e.jsx("div", {
		className: "min-h-screen max-h-screen flex flex-col bg-black no-scrollbar overflow-auto",
		children: e.jsx("div", {
			className: "flex flex-col grow",
			children: t
		})
	})
}

function kc({
	children: n
}) {
	const {
		isConnected: t
	} = we();
	return e.jsxs(e.Fragment, {
		children: [t && e.jsx(Ml, {}), e.jsxs(Tc, {
			children: [e.jsx("div", {
				className: "flex bg-gray-dark h-fit w-full flex-col",
				children: e.jsx(vc, {})
			}), n]
		})]
	})
}
mo.initialize([{
	trackingId: "G-376154551",
	gaOptions: {},
	gtagOptions: {}
}]);
const $o = c.createContext({}),
	Cc = ({
		children: n
	}) => {
		const {
			chain: t
		} = we(), {
			features: {
				Telemetry: s
			}
		} = Te(), r = window.rdt, {
			currentChainInfo: o
		} = D(), {
			isConnected: a
		} = we(), i = hn(), {
			data: l
		} = za(), [d, m] = c.useState(!1), [f, p] = c.useState(l && l.account ? l : void 0), [x, h] = c.useState();
		c.useEffect(() => {
			l && l.account ? p(l) : p(void 0)
		}, [l]);
		const {
			switchChain: y
		} = lo(), {
			chain: b,
			chainID: g
		} = D();
		try {
			Wa(s.multibase_key, {
				enabled: !!s.multibase_key,
				debug: !1
			})
		} catch {
			window.log.log("failed to initiate multibase")
		}
		const w = $s(),
			C = Us(),
			{
				pathname: k
			} = Kt();
		return c.useEffect(() => {
			var T;
			if (d) {
				m(!1);
				return
			}
			if (!(!a || !t) && t.id !== g) {
				let E = ve[1];
				if ((T = window.ethereum) != null && T.networkVersion) {
					const S = ve[window.ethereum.networkVersion];
					S && (E = S)
				}
				let N;
				for (const S of C.reverse())
					if (S.handle) {
						const G = S.handle.base;
						if (G) {
							N = G;
							break
						}
					} if (N) i(`../${E.internalName}/${N}/`);
				else {
					const S = k.replace(b || "ethereum", E.internalName);
					i(S)
				}
			}
		}, [t]), c.useEffect(() => {
			if (!x || x == se) return;
			let T = document.referrer;
			T === "" && (T = "/");
			const E = new URL(T),
				N = new URLSearchParams(E.search);
			r("track", "Custom", {
				customEventName: "Wallet_Connect"
			}), Ga({
				address: x,
				properties: {
					chain: o.name,
					utm_id: N.get("utm_id"),
					utm_source: N.get("utm_source"),
					utm_medium: N.get("utm_medium"),
					utm_campaign: N.get("utm_campaign"),
					utm_term: N.get("utm_term"),
					utm_content: N.get("utm_content")
				}
			}), mo.event({
				category: "web3",
				action: "wallet_connect"
			})
		}, [x]), c.useEffect(() => {
			f && x != f.account.address && h(f.account.address)
		}, [f, a]), c.useEffect(() => {
			if (t && t.id && t.id !== g) {
				let T;
				for (const E of C.reverse())
					if (E.handle) {
						const N = E.handle.base;
						if (N) {
							T = N;
							break
						}
					} T && (y && y({
					chainId: g
				}), i(`../${b}/${T}/`))
			}
		}, [b, y]), e.jsx($o.Provider, {
			value: {
				provider: w,
				signer: f
			},
			children: n
		})
	},
	kt = () => {
		const n = c.useContext($o);
		if (n === null) throw new Error('"useNetworkContext" should be used inside a "NetworkContextProvider"');
		return n
	};
async function Nc(n, t) {
	const s = await n.estimateGas(t);
	return t.gas = s, t
}
async function en(n, t, s, r, o) {
	var a;
	return t.sendTransaction(await Nc(n, {
		to: s,
		data: r,
		chain: t.chain,
		account: ((a = t.account) == null ? void 0 : a.address) || se,
		value: o == null ? void 0 : o.value
	}))
}
const Ns = (n, t, s, r) => {
		if (isNaN(n) || n === 0) return 0;
		const o = r ? n : 1 / n,
			a = Math.sqrt(2 ** 192 * o * (10 ** s / 10 ** t)),
			i = BigInt(a);
		return Ot.getTickAtSqrtRatio(i)
	},
	Ss = (n, t, s, r) => {
		if (isNaN(n)) return 0; {
			const o = Ot.getSqrtRatioAtTick(n),
				i = Number(o) ** 2 / (2 ** 192 * (10 ** s / 10 ** t));
			return r ? i : 1 / i
		}
	},
	Es = (n, t) => {
		const s = n % t,
			r = n - s;
		return s >= t / 2 ? r + t : r
	},
	Xn = n => {
		switch (n) {
			case 100:
				return 1;
			case 500:
				return 10;
			case 3e3:
				return 60;
			case 1e4:
				return 200;
			default:
				return 60
		}
	},
	ss = [{
		type: "constructor",
		inputs: [{
			name: "_owner",
			internalType: "address",
			type: "address"
		}, {
			name: "_positionManager",
			internalType: "contract NonFungiblePositionManager",
			type: "address"
		}, {
			name: "wrappedNative",
			internalType: "contract ERC20",
			type: "address"
		}, {
			name: "link",
			internalType: "contract LinkTokenInterface",
			type: "address"
		}, {
			name: "_registrar",
			internalType: "contract IKeeperRegistrar",
			type: "address"
		}, {
			name: "_fastGasFeed",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__AmountShouldBeZero"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__CenterITM"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__ContractNotShutdown"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__ContractShutdown"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__DirectionMisMatch"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__InvalidBatchId"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__InvalidFillsPerUpkeep"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__InvalidGasLimit"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__InvalidGasPrice"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__InvalidPositionId"
	}, {
		type: "error",
		inputs: [{
			name: "targetTick",
			internalType: "int24",
			type: "int24"
		}, {
			name: "tickSpacing",
			internalType: "int24",
			type: "int24"
		}],
		name: "LimitOrderRegistry__InvalidTargetTick"
	}, {
		type: "error",
		inputs: [{
			name: "upper",
			internalType: "int24",
			type: "int24"
		}, {
			name: "lower",
			internalType: "int24",
			type: "int24"
		}],
		name: "LimitOrderRegistry__InvalidTickRange"
	}, {
		type: "error",
		inputs: [{
			name: "asset",
			internalType: "address",
			type: "address"
		}, {
			name: "minimum",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "LimitOrderRegistry__MinimumNotMet"
	}, {
		type: "error",
		inputs: [{
			name: "asset",
			internalType: "address",
			type: "address"
		}],
		name: "LimitOrderRegistry__MinimumNotSet"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__NoLiquidityInOrder"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__NoOrdersToFulfill"
	}, {
		type: "error",
		inputs: [{
			name: "currentTick",
			internalType: "int24",
			type: "int24"
		}, {
			name: "targetTick",
			internalType: "int24",
			type: "int24"
		}, {
			name: "direction",
			internalType: "bool",
			type: "bool"
		}],
		name: "LimitOrderRegistry__OrderITM"
	}, {
		type: "error",
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "LimitOrderRegistry__OrderNotInList"
	}, {
		type: "error",
		inputs: [{
			name: "batchId",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "LimitOrderRegistry__OrderNotReadyToClaim"
	}, {
		type: "error",
		inputs: [{
			name: "pool",
			internalType: "address",
			type: "address"
		}],
		name: "LimitOrderRegistry__PoolAlreadySetup"
	}, {
		type: "error",
		inputs: [{
			name: "pool",
			internalType: "address",
			type: "address"
		}],
		name: "LimitOrderRegistry__PoolNotSetup"
	}, {
		type: "error",
		inputs: [{
			name: "user",
			internalType: "address",
			type: "address"
		}, {
			name: "batchId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "LimitOrderRegistry__UserNotFound"
	}, {
		type: "error",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}],
		name: "LimitOrderRegistry__ZeroFeesToWithdraw"
	}, {
		type: "error",
		inputs: [],
		name: "LimitOrderRegistry__ZeroNativeBalance"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "user",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "amount0",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "affectedOrder",
			internalType: "struct LimitOrderRegistry.BatchOrder",
			type: "tuple",
			components: [{
				name: "direction",
				internalType: "bool",
				type: "bool"
			}, {
				name: "tickUpper",
				internalType: "int24",
				type: "int24"
			}, {
				name: "tickLower",
				internalType: "int24",
				type: "int24"
			}, {
				name: "userCount",
				internalType: "uint64",
				type: "uint64"
			}, {
				name: "batchId",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "token0Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "token1Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "head",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "tail",
				internalType: "uint256",
				type: "uint256"
			}],
			indexed: !1
		}],
		name: "CancelOrder"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "user",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "batchId",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "ClaimOrder"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "pool",
			internalType: "address",
			type: "address",
			indexed: !1
		}],
		name: "LimitOrderSetup"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "user",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "pool",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "amount",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "userTotal",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "affectedOrder",
			internalType: "struct LimitOrderRegistry.BatchOrder",
			type: "tuple",
			components: [{
				name: "direction",
				internalType: "bool",
				type: "bool"
			}, {
				name: "tickUpper",
				internalType: "int24",
				type: "int24"
			}, {
				name: "tickLower",
				internalType: "int24",
				type: "int24"
			}, {
				name: "userCount",
				internalType: "uint64",
				type: "uint64"
			}, {
				name: "batchId",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "token0Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "token1Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "head",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "tail",
				internalType: "uint256",
				type: "uint256"
			}],
			indexed: !1
		}],
		name: "NewOrder"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "batchId",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "pool",
			internalType: "address",
			type: "address",
			indexed: !1
		}],
		name: "OrderFilled"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "user",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "newOwner",
			internalType: "address",
			type: "address",
			indexed: !0
		}],
		name: "OwnershipTransferred"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "isShutdown",
			internalType: "bool",
			type: "bool",
			indexed: !1
		}],
		name: "ShutdownChanged"
	}, {
		type: "function",
		inputs: [],
		name: "FAST_GAS_HEARTBEAT",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "LINK",
		outputs: [{
			name: "",
			internalType: "contract LinkTokenInterface",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "MAX_FILLS_PER_UPKEEP",
		outputs: [{
			name: "",
			internalType: "uint16",
			type: "uint16"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "MAX_GAS_LIMIT",
		outputs: [{
			name: "",
			internalType: "uint32",
			type: "uint32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "MAX_GAS_PRICE",
		outputs: [{
			name: "",
			internalType: "uint32",
			type: "uint32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "POSITION_MANAGER",
		outputs: [{
			name: "",
			internalType: "contract NonFungiblePositionManager",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "WRAPPED_NATIVE",
		outputs: [{
			name: "",
			internalType: "contract ERC20",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "batchCount",
		outputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "",
			internalType: "address",
			type: "address"
		}],
		name: "batchIdToUserDepositAmount",
		outputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "pool",
			internalType: "contract UniswapV3Pool",
			type: "address"
		}, {
			name: "targetTick",
			internalType: "int24",
			type: "int24"
		}, {
			name: "direction",
			internalType: "bool",
			type: "bool"
		}, {
			name: "deadline",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "cancelOrder",
		outputs: [{
			name: "amount0",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "amount1",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "batchId",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "checkData",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "checkUpkeep",
		outputs: [{
			name: "upkeepNeeded",
			internalType: "bool",
			type: "bool"
		}, {
			name: "performData",
			internalType: "bytes",
			type: "bytes"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "claim",
		outputs: [{
			name: "pool",
			internalType: "contract UniswapV3Pool",
			type: "address"
		}, {
			name: "token0Amount",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "token1Amount",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "feePerUser",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "direction",
			internalType: "bool",
			type: "bool"
		}, {
			name: "isReadyForClaim",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "batchId",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "user",
			internalType: "address",
			type: "address"
		}],
		name: "claimOrder",
		outputs: [{
			name: "",
			internalType: "contract ERC20",
			type: "address"
		}, {
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [],
		name: "fastGasFeed",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "pool",
			internalType: "contract UniswapV3Pool",
			type: "address"
		}, {
			name: "startingNode",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "targetTick",
			internalType: "int24",
			type: "int24"
		}, {
			name: "direction",
			internalType: "bool",
			type: "bool"
		}],
		name: "findSpot",
		outputs: [{
			name: "proposedHead",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "proposedTail",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "batchId",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "getClaim",
		outputs: [{
			name: "",
			internalType: "struct LimitOrderRegistry.Claim",
			type: "tuple",
			components: [{
				name: "pool",
				internalType: "contract UniswapV3Pool",
				type: "address"
			}, {
				name: "token0Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "token1Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "feePerUser",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "direction",
				internalType: "bool",
				type: "bool"
			}, {
				name: "isReadyForClaim",
				internalType: "bool",
				type: "bool"
			}]
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "batchId",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "getFeePerUser",
		outputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "getGasPrice",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "id",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "getOrderBook",
		outputs: [{
			name: "",
			internalType: "struct LimitOrderRegistry.BatchOrder",
			type: "tuple",
			components: [{
				name: "direction",
				internalType: "bool",
				type: "bool"
			}, {
				name: "tickUpper",
				internalType: "int24",
				type: "int24"
			}, {
				name: "tickLower",
				internalType: "int24",
				type: "int24"
			}, {
				name: "userCount",
				internalType: "uint64",
				type: "uint64"
			}, {
				name: "batchId",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "token0Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "token1Amount",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "head",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "tail",
				internalType: "uint256",
				type: "uint256"
			}]
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "contract UniswapV3Pool",
			type: "address"
		}, {
			name: "",
			internalType: "bool",
			type: "bool"
		}, {
			name: "",
			internalType: "int24",
			type: "int24"
		}, {
			name: "",
			internalType: "int24",
			type: "int24"
		}],
		name: "getPositionFromTicks",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "initiateShutdown",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "batchId",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "isOrderReadyForClaim",
		outputs: [{
			name: "",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "isShutdown",
		outputs: [{
			name: "",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "liftShutdown",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "contract ERC20",
			type: "address"
		}],
		name: "minimumAssets",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "pool",
			internalType: "contract UniswapV3Pool",
			type: "address"
		}, {
			name: "targetTick",
			internalType: "int24",
			type: "int24"
		}, {
			name: "amount",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "direction",
			internalType: "bool",
			type: "bool"
		}, {
			name: "startingNode",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "deadline",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "newOrder",
		outputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}, {
			name: "",
			internalType: "address",
			type: "address"
		}, {
			name: "",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "onERC721Received",
		outputs: [{
			name: "",
			internalType: "bytes4",
			type: "bytes4"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "orderBook",
		outputs: [{
			name: "direction",
			internalType: "bool",
			type: "bool"
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24"
		}, {
			name: "tickLower",
			internalType: "int24",
			type: "int24"
		}, {
			name: "userCount",
			internalType: "uint64",
			type: "uint64"
		}, {
			name: "batchId",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "token0Amount",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "token1Amount",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "head",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "tail",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "owner",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "performData",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "performUpkeep",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "contract UniswapV3Pool",
			type: "address"
		}],
		name: "poolToData",
		outputs: [{
			name: "centerHead",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "centerTail",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "token0",
			internalType: "contract ERC20",
			type: "address"
		}, {
			name: "token1",
			internalType: "contract ERC20",
			type: "address"
		}, {
			name: "fee",
			internalType: "uint24",
			type: "uint24"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "registrar",
		outputs: [{
			name: "",
			internalType: "contract IKeeperRegistrar",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "feed",
			internalType: "address",
			type: "address"
		}],
		name: "setFastGasFeed",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "newVal",
			internalType: "uint16",
			type: "uint16"
		}],
		name: "setMaxFillsPerUpkeep",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "amount",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "asset",
			internalType: "contract ERC20",
			type: "address"
		}],
		name: "setMinimumAssets",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "_registrar",
			internalType: "contract IKeeperRegistrar",
			type: "address"
		}],
		name: "setRegistrar",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "gasLimit",
			internalType: "uint32",
			type: "uint32"
		}],
		name: "setUpkeepGasLimit",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "gasPrice",
			internalType: "uint32",
			type: "uint32"
		}],
		name: "setUpkeepGasPrice",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "pool",
			internalType: "contract UniswapV3Pool",
			type: "address"
		}, {
			name: "initialUpkeepFunds",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "setupLimitOrder",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		name: "tokenToSwapFees",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "newOwner",
			internalType: "address",
			type: "address"
		}],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [],
		name: "upkeepGasLimit",
		outputs: [{
			name: "",
			internalType: "uint32",
			type: "uint32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "upkeepGasPrice",
		outputs: [{
			name: "",
			internalType: "uint32",
			type: "uint32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "withdrawNative",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "tokenFeeIsIn",
			internalType: "address",
			type: "address"
		}],
		name: "withdrawSwapFees",
		outputs: [],
		stateMutability: "nonpayable"
	}],
	Sc = [{
		type: "error",
		inputs: [{
			name: "deadline",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "AllowanceExpired"
	}, {
		type: "error",
		inputs: [],
		name: "ExcessiveInvalidation"
	}, {
		type: "error",
		inputs: [{
			name: "amount",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "InsufficientAllowance"
	}, {
		type: "error",
		inputs: [{
			name: "maxAmount",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "InvalidAmount"
	}, {
		type: "error",
		inputs: [],
		name: "InvalidContractSignature"
	}, {
		type: "error",
		inputs: [],
		name: "InvalidNonce"
	}, {
		type: "error",
		inputs: [],
		name: "InvalidSignature"
	}, {
		type: "error",
		inputs: [],
		name: "InvalidSignatureLength"
	}, {
		type: "error",
		inputs: [],
		name: "InvalidSigner"
	}, {
		type: "error",
		inputs: [],
		name: "LengthMismatch"
	}, {
		type: "error",
		inputs: [{
			name: "signatureDeadline",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "SignatureExpired"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "token",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "spender",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "amount",
			internalType: "uint160",
			type: "uint160",
			indexed: !1
		}, {
			name: "expiration",
			internalType: "uint48",
			type: "uint48",
			indexed: !1
		}],
		name: "Approval"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "token",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "spender",
			internalType: "address",
			type: "address",
			indexed: !1
		}],
		name: "Lockdown"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "token",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "spender",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "newNonce",
			internalType: "uint48",
			type: "uint48",
			indexed: !1
		}, {
			name: "oldNonce",
			internalType: "uint48",
			type: "uint48",
			indexed: !1
		}],
		name: "NonceInvalidation"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "token",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "spender",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "amount",
			internalType: "uint160",
			type: "uint160",
			indexed: !1
		}, {
			name: "expiration",
			internalType: "uint48",
			type: "uint48",
			indexed: !1
		}, {
			name: "nonce",
			internalType: "uint48",
			type: "uint48",
			indexed: !1
		}],
		name: "Permit"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "word",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "mask",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "UnorderedNonceInvalidation"
	}, {
		type: "function",
		inputs: [],
		name: "DOMAIN_SEPARATOR",
		outputs: [{
			name: "",
			internalType: "bytes32",
			type: "bytes32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}, {
			name: "",
			internalType: "address",
			type: "address"
		}, {
			name: "",
			internalType: "address",
			type: "address"
		}],
		name: "allowance",
		outputs: [{
			name: "amount",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "expiration",
			internalType: "uint48",
			type: "uint48"
		}, {
			name: "nonce",
			internalType: "uint48",
			type: "uint48"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}, {
			name: "spender",
			internalType: "address",
			type: "address"
		}, {
			name: "amount",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "expiration",
			internalType: "uint48",
			type: "uint48"
		}],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}, {
			name: "spender",
			internalType: "address",
			type: "address"
		}, {
			name: "newNonce",
			internalType: "uint48",
			type: "uint48"
		}],
		name: "invalidateNonces",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "wordPos",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "mask",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "invalidateUnorderedNonces",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "approvals",
			internalType: "struct IAllowanceTransfer.TokenSpenderPair[]",
			type: "tuple[]",
			components: [{
				name: "token",
				internalType: "address",
				type: "address"
			}, {
				name: "spender",
				internalType: "address",
				type: "address"
			}]
		}],
		name: "lockdown",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}, {
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "nonceBitmap",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "permitBatch",
			internalType: "struct IAllowanceTransfer.PermitBatch",
			type: "tuple",
			components: [{
				name: "details",
				internalType: "struct IAllowanceTransfer.PermitDetails[]",
				type: "tuple[]",
				components: [{
					name: "token",
					internalType: "address",
					type: "address"
				}, {
					name: "amount",
					internalType: "uint160",
					type: "uint160"
				}, {
					name: "expiration",
					internalType: "uint48",
					type: "uint48"
				}, {
					name: "nonce",
					internalType: "uint48",
					type: "uint48"
				}]
			}, {
				name: "spender",
				internalType: "address",
				type: "address"
			}, {
				name: "sigDeadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "signature",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "permit",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "permitSingle",
			internalType: "struct IAllowanceTransfer.PermitSingle",
			type: "tuple",
			components: [{
				name: "details",
				internalType: "struct IAllowanceTransfer.PermitDetails",
				type: "tuple",
				components: [{
					name: "token",
					internalType: "address",
					type: "address"
				}, {
					name: "amount",
					internalType: "uint160",
					type: "uint160"
				}, {
					name: "expiration",
					internalType: "uint48",
					type: "uint48"
				}, {
					name: "nonce",
					internalType: "uint48",
					type: "uint48"
				}]
			}, {
				name: "spender",
				internalType: "address",
				type: "address"
			}, {
				name: "sigDeadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "signature",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "permit",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "permit",
			internalType: "struct ISignatureTransfer.PermitTransferFrom",
			type: "tuple",
			components: [{
				name: "permitted",
				internalType: "struct ISignatureTransfer.TokenPermissions",
				type: "tuple",
				components: [{
					name: "token",
					internalType: "address",
					type: "address"
				}, {
					name: "amount",
					internalType: "uint256",
					type: "uint256"
				}]
			}, {
				name: "nonce",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "deadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "transferDetails",
			internalType: "struct ISignatureTransfer.SignatureTransferDetails",
			type: "tuple",
			components: [{
				name: "to",
				internalType: "address",
				type: "address"
			}, {
				name: "requestedAmount",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "signature",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "permitTransferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "permit",
			internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
			type: "tuple",
			components: [{
				name: "permitted",
				internalType: "struct ISignatureTransfer.TokenPermissions[]",
				type: "tuple[]",
				components: [{
					name: "token",
					internalType: "address",
					type: "address"
				}, {
					name: "amount",
					internalType: "uint256",
					type: "uint256"
				}]
			}, {
				name: "nonce",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "deadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "transferDetails",
			internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
			type: "tuple[]",
			components: [{
				name: "to",
				internalType: "address",
				type: "address"
			}, {
				name: "requestedAmount",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "signature",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "permitTransferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "permit",
			internalType: "struct ISignatureTransfer.PermitTransferFrom",
			type: "tuple",
			components: [{
				name: "permitted",
				internalType: "struct ISignatureTransfer.TokenPermissions",
				type: "tuple",
				components: [{
					name: "token",
					internalType: "address",
					type: "address"
				}, {
					name: "amount",
					internalType: "uint256",
					type: "uint256"
				}]
			}, {
				name: "nonce",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "deadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "transferDetails",
			internalType: "struct ISignatureTransfer.SignatureTransferDetails",
			type: "tuple",
			components: [{
				name: "to",
				internalType: "address",
				type: "address"
			}, {
				name: "requestedAmount",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "witness",
			internalType: "bytes32",
			type: "bytes32"
		}, {
			name: "witnessTypeString",
			internalType: "string",
			type: "string"
		}, {
			name: "signature",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "permitWitnessTransferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "permit",
			internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
			type: "tuple",
			components: [{
				name: "permitted",
				internalType: "struct ISignatureTransfer.TokenPermissions[]",
				type: "tuple[]",
				components: [{
					name: "token",
					internalType: "address",
					type: "address"
				}, {
					name: "amount",
					internalType: "uint256",
					type: "uint256"
				}]
			}, {
				name: "nonce",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "deadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "transferDetails",
			internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
			type: "tuple[]",
			components: [{
				name: "to",
				internalType: "address",
				type: "address"
			}, {
				name: "requestedAmount",
				internalType: "uint256",
				type: "uint256"
			}]
		}, {
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "witness",
			internalType: "bytes32",
			type: "bytes32"
		}, {
			name: "witnessTypeString",
			internalType: "string",
			type: "string"
		}, {
			name: "signature",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "permitWitnessTransferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "transferDetails",
			internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]",
			type: "tuple[]",
			components: [{
				name: "from",
				internalType: "address",
				type: "address"
			}, {
				name: "to",
				internalType: "address",
				type: "address"
			}, {
				name: "amount",
				internalType: "uint160",
				type: "uint160"
			}, {
				name: "token",
				internalType: "address",
				type: "address"
			}]
		}],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "from",
			internalType: "address",
			type: "address"
		}, {
			name: "to",
			internalType: "address",
			type: "address"
		}, {
			name: "amount",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "token",
			internalType: "address",
			type: "address"
		}],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}],
	Rt = [{
		type: "constructor",
		inputs: [{
			name: "_factory",
			internalType: "address",
			type: "address"
		}, {
			name: "_WETH9",
			internalType: "address",
			type: "address"
		}, {
			name: "_tokenDescriptor_",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "approved",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "tokenId",
			internalType: "uint256",
			type: "uint256",
			indexed: !0
		}],
		name: "Approval"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "operator",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "approved",
			internalType: "bool",
			type: "bool",
			indexed: !1
		}],
		name: "ApprovalForAll"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256",
			indexed: !0
		}, {
			name: "recipient",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "Collect"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256",
			indexed: !0
		}, {
			name: "liquidity",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "DecreaseLiquidity"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256",
			indexed: !0
		}, {
			name: "liquidity",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "IncreaseLiquidity"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "from",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "to",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "tokenId",
			internalType: "uint256",
			type: "uint256",
			indexed: !0
		}],
		name: "Transfer"
	}, {
		type: "function",
		inputs: [],
		name: "DOMAIN_SEPARATOR",
		outputs: [{
			name: "",
			internalType: "bytes32",
			type: "bytes32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "PERMIT_TYPEHASH",
		outputs: [{
			name: "",
			internalType: "bytes32",
			type: "bytes32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "WETH9",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "to",
			internalType: "address",
			type: "address"
		}, {
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address"
		}],
		name: "balanceOf",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "baseURI",
		outputs: [{
			name: "",
			internalType: "string",
			type: "string"
		}],
		stateMutability: "pure"
	}, {
		type: "function",
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "burn",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "params",
			internalType: "struct INonfungiblePositionManager.CollectParams",
			type: "tuple",
			components: [{
				name: "tokenId",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "recipient",
				internalType: "address",
				type: "address"
			}, {
				name: "amount0Max",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "amount1Max",
				internalType: "uint128",
				type: "uint128"
			}]
		}],
		name: "collect",
		outputs: [{
			name: "amount0",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "token0",
			internalType: "address",
			type: "address"
		}, {
			name: "token1",
			internalType: "address",
			type: "address"
		}, {
			name: "fee",
			internalType: "uint24",
			type: "uint24"
		}, {
			name: "sqrtPriceX96",
			internalType: "uint160",
			type: "uint160"
		}],
		name: "createAndInitializePoolIfNecessary",
		outputs: [{
			name: "pool",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "params",
			internalType: "struct INonfungiblePositionManager.DecreaseLiquidityParams",
			type: "tuple",
			components: [{
				name: "tokenId",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "liquidity",
				internalType: "uint128",
				type: "uint128"
			}, {
				name: "amount0Min",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount1Min",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "deadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}],
		name: "decreaseLiquidity",
		outputs: [{
			name: "amount0",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [],
		name: "factory",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "getApproved",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "params",
			internalType: "struct INonfungiblePositionManager.IncreaseLiquidityParams",
			type: "tuple",
			components: [{
				name: "tokenId",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount0Desired",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount1Desired",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount0Min",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount1Min",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "deadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}],
		name: "increaseLiquidity",
		outputs: [{
			name: "liquidity",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "operator",
			internalType: "address",
			type: "address"
		}],
		name: "isApprovedForAll",
		outputs: [{
			name: "",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "params",
			internalType: "struct INonfungiblePositionManager.MintParams",
			type: "tuple",
			components: [{
				name: "token0",
				internalType: "address",
				type: "address"
			}, {
				name: "token1",
				internalType: "address",
				type: "address"
			}, {
				name: "fee",
				internalType: "uint24",
				type: "uint24"
			}, {
				name: "tickLower",
				internalType: "int24",
				type: "int24"
			}, {
				name: "tickUpper",
				internalType: "int24",
				type: "int24"
			}, {
				name: "amount0Desired",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount1Desired",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount0Min",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "amount1Min",
				internalType: "uint256",
				type: "uint256"
			}, {
				name: "recipient",
				internalType: "address",
				type: "address"
			}, {
				name: "deadline",
				internalType: "uint256",
				type: "uint256"
			}]
		}],
		name: "mint",
		outputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "liquidity",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "data",
			internalType: "bytes[]",
			type: "bytes[]"
		}],
		name: "multicall",
		outputs: [{
			name: "results",
			internalType: "bytes[]",
			type: "bytes[]"
		}],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [],
		name: "name",
		outputs: [{
			name: "",
			internalType: "string",
			type: "string"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "ownerOf",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "spender",
			internalType: "address",
			type: "address"
		}, {
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "deadline",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "v",
			internalType: "uint8",
			type: "uint8"
		}, {
			name: "r",
			internalType: "bytes32",
			type: "bytes32"
		}, {
			name: "s",
			internalType: "bytes32",
			type: "bytes32"
		}],
		name: "permit",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "positions",
		outputs: [{
			name: "nonce",
			internalType: "uint96",
			type: "uint96"
		}, {
			name: "operator",
			internalType: "address",
			type: "address"
		}, {
			name: "token0",
			internalType: "address",
			type: "address"
		}, {
			name: "token1",
			internalType: "address",
			type: "address"
		}, {
			name: "fee",
			internalType: "uint24",
			type: "uint24"
		}, {
			name: "tickLower",
			internalType: "int24",
			type: "int24"
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24"
		}, {
			name: "liquidity",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "feeGrowthInside0LastX128",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "feeGrowthInside1LastX128",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "tokensOwed0",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "tokensOwed1",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "refundETH",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "from",
			internalType: "address",
			type: "address"
		}, {
			name: "to",
			internalType: "address",
			type: "address"
		}, {
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "from",
			internalType: "address",
			type: "address"
		}, {
			name: "to",
			internalType: "address",
			type: "address"
		}, {
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "_data",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}, {
			name: "value",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "deadline",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "v",
			internalType: "uint8",
			type: "uint8"
		}, {
			name: "r",
			internalType: "bytes32",
			type: "bytes32"
		}, {
			name: "s",
			internalType: "bytes32",
			type: "bytes32"
		}],
		name: "selfPermit",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}, {
			name: "nonce",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "expiry",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "v",
			internalType: "uint8",
			type: "uint8"
		}, {
			name: "r",
			internalType: "bytes32",
			type: "bytes32"
		}, {
			name: "s",
			internalType: "bytes32",
			type: "bytes32"
		}],
		name: "selfPermitAllowed",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}, {
			name: "nonce",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "expiry",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "v",
			internalType: "uint8",
			type: "uint8"
		}, {
			name: "r",
			internalType: "bytes32",
			type: "bytes32"
		}, {
			name: "s",
			internalType: "bytes32",
			type: "bytes32"
		}],
		name: "selfPermitAllowedIfNecessary",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}, {
			name: "value",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "deadline",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "v",
			internalType: "uint8",
			type: "uint8"
		}, {
			name: "r",
			internalType: "bytes32",
			type: "bytes32"
		}, {
			name: "s",
			internalType: "bytes32",
			type: "bytes32"
		}],
		name: "selfPermitIfNecessary",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [{
			name: "operator",
			internalType: "address",
			type: "address"
		}, {
			name: "approved",
			internalType: "bool",
			type: "bool"
		}],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "interfaceId",
			internalType: "bytes4",
			type: "bytes4"
		}],
		name: "supportsInterface",
		outputs: [{
			name: "",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "token",
			internalType: "address",
			type: "address"
		}, {
			name: "amountMinimum",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "recipient",
			internalType: "address",
			type: "address"
		}],
		name: "sweepToken",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "function",
		inputs: [],
		name: "symbol",
		outputs: [{
			name: "",
			internalType: "string",
			type: "string"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "index",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "tokenByIndex",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address"
		}, {
			name: "index",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "tokenOfOwnerByIndex",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "tokenURI",
		outputs: [{
			name: "",
			internalType: "string",
			type: "string"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "totalSupply",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "from",
			internalType: "address",
			type: "address"
		}, {
			name: "to",
			internalType: "address",
			type: "address"
		}, {
			name: "tokenId",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "amount0Owed",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1Owed",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "data",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "uniswapV3MintCallback",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "amountMinimum",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "recipient",
			internalType: "address",
			type: "address"
		}],
		name: "unwrapWETH9",
		outputs: [],
		stateMutability: "payable"
	}, {
		type: "receive",
		stateMutability: "payable"
	}],
	Ec = [{
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "tickLower",
			internalType: "int24",
			type: "int24",
			indexed: !0
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24",
			indexed: !0
		}, {
			name: "amount",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "Burn"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "recipient",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "tickLower",
			internalType: "int24",
			type: "int24",
			indexed: !0
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24",
			indexed: !0
		}, {
			name: "amount0",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}],
		name: "Collect"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "sender",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "recipient",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "amount0",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}],
		name: "CollectProtocol"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "sender",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "recipient",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "paid0",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "paid1",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "Flash"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "observationCardinalityNextOld",
			internalType: "uint16",
			type: "uint16",
			indexed: !1
		}, {
			name: "observationCardinalityNextNew",
			internalType: "uint16",
			type: "uint16",
			indexed: !1
		}],
		name: "IncreaseObservationCardinalityNext"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "sqrtPriceX96",
			internalType: "uint160",
			type: "uint160",
			indexed: !1
		}, {
			name: "tick",
			internalType: "int24",
			type: "int24",
			indexed: !1
		}],
		name: "Initialize"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "sender",
			internalType: "address",
			type: "address",
			indexed: !1
		}, {
			name: "owner",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "tickLower",
			internalType: "int24",
			type: "int24",
			indexed: !0
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24",
			indexed: !0
		}, {
			name: "amount",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256",
			indexed: !1
		}],
		name: "Mint"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "feeProtocol0Old",
			internalType: "uint8",
			type: "uint8",
			indexed: !1
		}, {
			name: "feeProtocol1Old",
			internalType: "uint8",
			type: "uint8",
			indexed: !1
		}, {
			name: "feeProtocol0New",
			internalType: "uint8",
			type: "uint8",
			indexed: !1
		}, {
			name: "feeProtocol1New",
			internalType: "uint8",
			type: "uint8",
			indexed: !1
		}],
		name: "SetFeeProtocol"
	}, {
		type: "event",
		anonymous: !1,
		inputs: [{
			name: "sender",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "recipient",
			internalType: "address",
			type: "address",
			indexed: !0
		}, {
			name: "amount0",
			internalType: "int256",
			type: "int256",
			indexed: !1
		}, {
			name: "amount1",
			internalType: "int256",
			type: "int256",
			indexed: !1
		}, {
			name: "sqrtPriceX96",
			internalType: "uint160",
			type: "uint160",
			indexed: !1
		}, {
			name: "liquidity",
			internalType: "uint128",
			type: "uint128",
			indexed: !1
		}, {
			name: "tick",
			internalType: "int24",
			type: "int24",
			indexed: !1
		}],
		name: "Swap"
	}, {
		type: "function",
		inputs: [{
			name: "tickLower",
			internalType: "int24",
			type: "int24"
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24"
		}, {
			name: "amount",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "burn",
		outputs: [{
			name: "amount0",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "recipient",
			internalType: "address",
			type: "address"
		}, {
			name: "tickLower",
			internalType: "int24",
			type: "int24"
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24"
		}, {
			name: "amount0Requested",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "amount1Requested",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "collect",
		outputs: [{
			name: "amount0",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "amount1",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "recipient",
			internalType: "address",
			type: "address"
		}, {
			name: "amount0Requested",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "amount1Requested",
			internalType: "uint128",
			type: "uint128"
		}],
		name: "collectProtocol",
		outputs: [{
			name: "amount0",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "amount1",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [],
		name: "factory",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "fee",
		outputs: [{
			name: "",
			internalType: "uint24",
			type: "uint24"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "feeGrowthGlobal0X128",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "feeGrowthGlobal1X128",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "recipient",
			internalType: "address",
			type: "address"
		}, {
			name: "amount0",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "data",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "flash",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "observationCardinalityNext",
			internalType: "uint16",
			type: "uint16"
		}],
		name: "increaseObservationCardinalityNext",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "sqrtPriceX96",
			internalType: "uint160",
			type: "uint160"
		}],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [],
		name: "liquidity",
		outputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "maxLiquidityPerTick",
		outputs: [{
			name: "",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "recipient",
			internalType: "address",
			type: "address"
		}, {
			name: "tickLower",
			internalType: "int24",
			type: "int24"
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24"
		}, {
			name: "amount",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "data",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "mint",
		outputs: [{
			name: "amount0",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "amount1",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "index",
			internalType: "uint256",
			type: "uint256"
		}],
		name: "observations",
		outputs: [{
			name: "blockTimestamp",
			internalType: "uint32",
			type: "uint32"
		}, {
			name: "tickCumulative",
			internalType: "int56",
			type: "int56"
		}, {
			name: "secondsPerLiquidityCumulativeX128",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "initialized",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "secondsAgos",
			internalType: "uint32[]",
			type: "uint32[]"
		}],
		name: "observe",
		outputs: [{
			name: "tickCumulatives",
			internalType: "int56[]",
			type: "int56[]"
		}, {
			name: "secondsPerLiquidityCumulativeX128s",
			internalType: "uint160[]",
			type: "uint160[]"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "key",
			internalType: "bytes32",
			type: "bytes32"
		}],
		name: "positions",
		outputs: [{
			name: "_liquidity",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "feeGrowthInside0LastX128",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "feeGrowthInside1LastX128",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "tokensOwed0",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "tokensOwed1",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "protocolFees",
		outputs: [{
			name: "token0",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "token1",
			internalType: "uint128",
			type: "uint128"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "feeProtocol0",
			internalType: "uint8",
			type: "uint8"
		}, {
			name: "feeProtocol1",
			internalType: "uint8",
			type: "uint8"
		}],
		name: "setFeeProtocol",
		outputs: [],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [],
		name: "slot0",
		outputs: [{
			name: "sqrtPriceX96",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "tick",
			internalType: "int24",
			type: "int24"
		}, {
			name: "observationIndex",
			internalType: "uint16",
			type: "uint16"
		}, {
			name: "observationCardinality",
			internalType: "uint16",
			type: "uint16"
		}, {
			name: "observationCardinalityNext",
			internalType: "uint16",
			type: "uint16"
		}, {
			name: "feeProtocol",
			internalType: "uint8",
			type: "uint8"
		}, {
			name: "unlocked",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "tickLower",
			internalType: "int24",
			type: "int24"
		}, {
			name: "tickUpper",
			internalType: "int24",
			type: "int24"
		}],
		name: "snapshotCumulativesInside",
		outputs: [{
			name: "tickCumulativeInside",
			internalType: "int56",
			type: "int56"
		}, {
			name: "secondsPerLiquidityInsideX128",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "secondsInside",
			internalType: "uint32",
			type: "uint32"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "recipient",
			internalType: "address",
			type: "address"
		}, {
			name: "zeroForOne",
			internalType: "bool",
			type: "bool"
		}, {
			name: "amountSpecified",
			internalType: "int256",
			type: "int256"
		}, {
			name: "sqrtPriceLimitX96",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "data",
			internalType: "bytes",
			type: "bytes"
		}],
		name: "swap",
		outputs: [{
			name: "amount0",
			internalType: "int256",
			type: "int256"
		}, {
			name: "amount1",
			internalType: "int256",
			type: "int256"
		}],
		stateMutability: "nonpayable"
	}, {
		type: "function",
		inputs: [{
			name: "wordPosition",
			internalType: "int16",
			type: "int16"
		}],
		name: "tickBitmap",
		outputs: [{
			name: "",
			internalType: "uint256",
			type: "uint256"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "tickSpacing",
		outputs: [{
			name: "",
			internalType: "int24",
			type: "int24"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [{
			name: "tick",
			internalType: "int24",
			type: "int24"
		}],
		name: "ticks",
		outputs: [{
			name: "liquidityGross",
			internalType: "uint128",
			type: "uint128"
		}, {
			name: "liquidityNet",
			internalType: "int128",
			type: "int128"
		}, {
			name: "feeGrowthOutside0X128",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "feeGrowthOutside1X128",
			internalType: "uint256",
			type: "uint256"
		}, {
			name: "tickCumulativeOutside",
			internalType: "int56",
			type: "int56"
		}, {
			name: "secondsPerLiquidityOutsideX128",
			internalType: "uint160",
			type: "uint160"
		}, {
			name: "secondsOutside",
			internalType: "uint32",
			type: "uint32"
		}, {
			name: "initialized",
			internalType: "bool",
			type: "bool"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "token0",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}, {
		type: "function",
		inputs: [],
		name: "token1",
		outputs: [{
			name: "",
			internalType: "address",
			type: "address"
		}],
		stateMutability: "view"
	}],
	Ic = async ({
		token0Address: n,
		token1Address: t,
		token0Decimals: s,
		token1Decimals: r,
		fee: o,
		initialPrice: a
	}) => {
		try {
			const i = Oe("1", s),
				l = Oe(a.toString(), r);
			return mt({
				abi: Rt,
				functionName: "createAndInitializePoolIfNecessary",
				args: [n, t, o, BigInt(qa(l.toString(), i.toString()).toString())]
			})
		} catch (i) {
			throw window.log.error(i), new Error("Error in getCreatePoolCallData")
		}
	}, Ho = async (n, t, s, r) => {
		const o = new Ya(n.currency, t.currency, s.fee, s.sqrtPriceX96.toString(), s.liquidity.toString(), s.tick);
		return Xa.fromAmounts({
			pool: o,
			tickLower: Ts(r.lower, o.tickSpacing),
			tickUpper: Ts(r.upper, o.tickSpacing),
			amount0: n.quotient,
			amount1: t.quotient,
			useFullPrecision: !0
		})
	};

function Ac(n, t, s, r, o, a, i) {
	let l = Ot.getSqrtRatioAtTick(s);
	(n === s || t === s) && (l = r);
	const d = Ot.getSqrtRatioAtTick(Math.min(n, t)),
		m = Ot.getSqrtRatioAtTick(Math.max(n, t)),
		f = Oe(a, i.decimals);
	if (f == 0n) return "0";
	const p = o ? Lc(l, m, f) : Pc(d, l, f);
	return (o ? Gn.getAmount1Delta(d, l, p, !1) : Gn.getAmount0Delta(l, m, p, !1)).toString()
}

function Lc(n, t, s) {
	n > t && ([n, t] = [t, n]);
	const r = s * n * t,
		o = Wn * (t - n);
	return r / o
}

function Pc(n, t, s) {
	n > t && ([n, t] = [t, n]);
	const r = t - n;
	return r === 0n ? 0n : s * Wn / r
}
const mn = async n => {
	var f;
	const {
		signer: t,
		provider: s,
		token: r,
		approvee: o,
		amount: a
	} = n, i = a, l = jt({
		address: r,
		abi: Hn,
		client: {
			wallet: t,
			public: s
		}
	}), d = ((f = t.account) == null ? void 0 : f.address) || se;
	let m = await l.read.allowance([d, o]);
	for (; i > m;) {
		const p = await l.write.approve([o, a], {
			chain: t.chain,
			account: d
		});
		await s.waitForTransactionReceipt({
			hash: p
		}), m = await l.read.allowance([d, o], {
			blockTag: "pending"
		})
	}
}, Vo = async ({
	pool_address: n,
	provider: t
}) => {
	if (!t) throw new Error("No provider");
	const s = jt({
			abi: Ec,
			client: {
				public: t
			},
			address: n
		}),
		[r, o, a, i, l, d] = await Promise.all([s.read.token0(), s.read.token1(), s.read.fee(), s.read.tickSpacing(), s.read.liquidity(), s.read.slot0()]);
	return {
		token0: r,
		token1: o,
		fee: a,
		tickSpacing: i,
		liquidity: l,
		sqrtPriceX96: d[0],
		tick: d[1]
	}
};
async function Mc({
	user_address: n,
	pool: t,
	token0: s,
	token1: r,
	token0Amount: o,
	token1Amount: a,
	provider: i,
	tick: l
}) {
	try {
		const d = pn.fromRawAmount(s, o.toString()),
			m = pn.fromRawAmount(r, a.toString()),
			f = await Vo({
				pool_address: t,
				provider: i
			}),
			p = await Ho(d, m, f, l),
			x = p.mintAmountsWithSlippage(new fo(75, 1e4));
		return mt({
			abi: Rt,
			functionName: "mint",
			args: [{
				deadline: BigInt(Math.floor(Date.now() / 1e3) + 60 * 20),
				recipient: n,
				fee: f.fee,
				token0: f.token0,
				token1: f.token1,
				tickLower: l.lower,
				tickUpper: l.upper,
				amount0Min: BigInt(x.amount0.toString()),
				amount1Min: BigInt(x.amount1.toString()),
				amount0Desired: BigInt(p.mintAmounts.amount0.toString()),
				amount1Desired: BigInt(p.mintAmounts.amount1.toString())
			}]
		})
	} catch (d) {
		throw window.log.error(d), new Error("Error in getDeployPositionCallData")
	}
}
const Rc = async ({
	user_address: n,
	pool_address: t,
	token0: s,
	token1: r,
	token0Amount: o,
	token1Amount: a,
	provider: i,
	signer: l,
	tick: d,
	contract: m
}) => {
	try {
		const f = m;
		await mn({
			signer: l,
			provider: i,
			amount: o,
			token: s.address,
			approvee: f
		}), await mn({
			signer: l,
			provider: i,
			amount: a,
			token: r.address,
			approvee: f
		});
		const p = await Mc({
			user_address: n,
			pool: t,
			provider: i,
			token0: s,
			token1: r,
			token0Amount: o,
			token1Amount: a,
			signer: l,
			tick: d
		});
		return l.sendTransaction({
			data: p,
			to: m,
			chain: l.chain,
			account: n
		})
	} catch (f) {
		throw window.log.error(f), new Error("Error in deployPosition")
	}
}, Oc = async ({
	token0Address: n,
	token1Address: t,
	token0Decimals: s,
	token1Decimals: r,
	fee: o,
	tickLower: a,
	tickUpper: i,
	token0Amount: l,
	token1Amount: d,
	recipient: m
}) => {
	try {
		const f = Oe(l, s),
			p = Oe(d, r);
		return window.log.log(n, t, o, a, i, f, p, 0, 0, m, Math.floor(Date.now() / 1e3) + 600), mt({
			abi: Rt,
			functionName: "mint",
			args: [{
				token0: n,
				token1: t,
				fee: o,
				tickLower: a,
				tickUpper: i,
				amount0Desired: f,
				amount1Desired: p,
				amount0Min: 0n,
				amount1Min: 0n,
				recipient: m,
				deadline: BigInt(Math.floor(Date.now() / 1e3) + 600)
			}]
		})
	} catch (f) {
		throw window.log.error(f), new Error("Error in getMintCallData")
	}
}, Dc = async (n, t, s, r, o, a, i, l, d, m, f, p, x) => {
	try {
		const h = await Ic({
				token0Address: n,
				token1Address: t,
				token0Decimals: s,
				token1Decimals: r,
				fee: o,
				initialPrice: a
			}),
			y = await Oc({
				token0Address: n,
				token1Address: t,
				token0Decimals: s,
				token1Decimals: r,
				token0Amount: i.toString(),
				token1Amount: l.toString(),
				tickLower: Es(m.lower, Xn(o)),
				tickUpper: Es(m.upper, Xn(o)),
				fee: o,
				provider: p,
				recipient: d
			});
		return await mn({
			token: n,
			amount: Oe(i.toString(), s),
			provider: p,
			signer: f,
			approvee: x
		}), await mn({
			token: t,
			amount: Oe(l.toString(), r),
			provider: p,
			signer: f,
			approvee: x
		}), en(p, f, x, mt({
			abi: Rt,
			functionName: "multicall",
			args: [
				[h, y]
			]
		}))
	} catch (h) {
		throw window.log.log(h), new Error("Error creating pool")
	}
}, Fc = n => "#" + n.map(t => {
	const s = t.toString(16);
	return s.length === 1 ? "0" + s : s
}).join(""), Uc = (n, t, s) => {
	const r = m => [parseInt(m[0], 16), parseInt(m[1], 16), parseInt(m[2], 16)],
		o = r(n),
		a = r(t),
		i = o.map(m => m * s),
		l = a.map(m => m * (1 - s)),
		d = i.map((m, f) => Math.round(m + l[f]));
	return Fc(d)
}, De = n => {
	const t = u.hover,
		s = n.slice(-6).match(/.{1,2}/g),
		r = t.slice(-6).match(/.{1,2}/g);
	return s && r ? Uc(s, r, Number(_o.hover)) : u.black
}, Bc = "_banner_1b05m_1", $c = "_cover_1b05m_1", Hc = {
	banner: Bc,
	cover: $c
};

function fn(n, t, s) {
	var r;
	return [(r = ve[s].blockExplorers) == null ? void 0 : r.default.url, n, t].join("/")
}

function Kn(n) {
	const t = ve[n].blockExplorers;
	return t ? t.default.name : "UNDEFINED"
}
const He = () => e.jsxs("svg", {
		width: "25",
		height: "25",
		viewBox: "0 0 25 25",
		className: "animate-spin",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: [e.jsx("mask", {
			id: "mask0_702_848",
			maskUnits: "userSpaceOnUse",
			x: "5",
			y: "5",
			width: "15",
			height: "15",
			children: e.jsx("path", {
				d: "M5.15625 5.15625H19.8437V19.8437H5.15625V5.15625Z",
				fill: "white"
			})
		}), e.jsx("g", {
			mask: "url(#mask0_702_848)",
			children: e.jsx("path", {
				d: "M12.5 17.3438C9.80469 17.3438 7.65625 15.1562 7.65625 12.5C7.65625 9.80469 9.84375 7.65625 12.5 7.65625C15.1562 7.65625 17.3438 9.80469 17.3438 12.5C17.3438 15.1953 15.1953 17.3438 12.5 17.3438ZM12.5 5.15625C8.4375 5.15625 5.15625 8.47656 5.15625 12.5C5.15625 16.5625 8.47656 19.8437 12.5 19.8437C16.5234 19.8437 19.8437 16.5625 19.8437 12.5C19.8437 8.4375 16.5625 5.15625 12.5 5.15625Z",
				fill: u.gray[300]
			})
		}), e.jsx("mask", {
			id: "mask1_702_848",
			maskUnits: "userSpaceOnUse",
			x: "5",
			y: "5",
			width: "15",
			height: "15",
			children: e.jsx("path", {
				d: "M5.15625 5.15625H19.8437V19.8437H5.15625V5.15625Z",
				fill: "white"
			})
		}), e.jsx("g", {
			mask: "url(#mask1_702_848)",
			children: e.jsx("path", {
				d: "M18.5937 11.25C17.8906 11.25 17.3438 11.7969 17.3438 12.5C17.3438 15.1953 15.1562 17.3438 12.5 17.3438C9.84375 17.3438 7.65625 15.1953 7.65625 12.5C7.65625 9.80469 9.80469 7.65625 12.5 7.65625C13.2031 7.65625 13.75 7.10937 13.75 6.40625C13.75 5.70312 13.2031 5.15625 12.5 5.15625C8.4375 5.15625 5.15625 8.47656 5.15625 12.5C5.15625 16.5234 8.4375 19.8437 12.5 19.8437C16.5625 19.8437 19.8437 16.5625 19.8437 12.5C19.8437 11.7969 19.2969 11.25 18.5937 11.25Z",
				fill: u.blue[400]
			})
		})]
	}),
	Lt = ({
		color: n = u.gray[300]
	}) => e.jsx("svg", {
		width: "15",
		height: "14",
		viewBox: "0 0 15 14",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: e.jsx("path", {
			d: "M7.73847 5.498V7.998M1.53647 10.2487C0.959134 11.2487 1.68113 12.498 2.83513 12.498H12.6418C13.7951 12.498 14.5171 11.2487 13.9405 10.2487L9.0378 1.75C8.46047 0.75 7.01647 0.75 6.43913 1.75L1.53647 10.2487ZM7.73847 9.998H7.74313V10.0033H7.73847V9.998Z",
			stroke: n,
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}),
	zt = () => e.jsx("svg", {
		width: "14",
		height: "12",
		viewBox: "0 0 14 12",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: e.jsx("path", {
			d: "M12.5125 1.0125L4.375 9.15L1.4875 6.2625C1.1375 5.9125 0.6125 5.9125 0.2625 6.2625C-0.0875 6.6125 -0.0875 7.1375 0.2625 7.4875L3.7625 10.9875C3.9375 11.1625 4.1125 11.25 4.375 11.25C4.6375 11.25 4.8125 11.1625 4.9875 10.9875L13.7375 2.2375C14.0875 1.8875 14.0875 1.3625 13.7375 1.0125C13.3875 0.6625 12.8625 0.6625 12.5125 1.0125Z",
			fill: u.green.vibrant
		})
	});
var Y;
(function (n) {
	n.EXECUTE_TRADE = "execute", n.EXECUTE_TRADE_IN_PROGRESS = "executePending", n.EXECUTE_TRADE_SUCCESS = "executeSuccess", n.EXECUTE_TRADE_ERROR = "executeError", n.SIGNATURE = "signature", n.SIGNATURE_IN_PROGRESS = "signatureInProgress", n.SIGNED = "signed", n.SIGNATURE_ERROR = "signatureError", n.TOKEN_APPROVAL = "tokenApproval", n.TOKEN_APPROVAL_IN_PROGRESS = "tokenApprovalInProgress", n.TOKEN_APPROVED = "tokenApproved", n.TOKEN_APPROVAL_ERROR = "tokenApprovalError", n.EXECUTE_CLAIM = "executeClaim", n.EXECUTE_CLAIM_IN_PROGRESS = "executePendingClaim", n.EXECUTE_CLAIM_SUCCESS = "executeSuccessClaim", n.EXECUTE_CLAIM_ERROR = "executeErrorClaim", n.EXECUTE_CANCEL = "executeCancel", n.EXECUTE_CANCEL_IN_PROGRESS = "executePendingCancel", n.EXECUTE_CANCEL_SUCCESS = "executeSuccessCancel", n.EXECUTE_CANCEL_ERROR = "executeErrorCancel", n.EXECUTE_TRANSACTION = "executeTransaction", n.EXECUTE_TRANSACTION_IN_PROGRESS = "executePendingTransaction", n.EXECUTE_TRANSACTION_SUCCESS = "executeSuccessTransaction", n.EXECUTE_TRANSACTION_ERROR = "executeErrorTransaction", n.QUOTE_ERROR = "quoteError", n.QUOTE_IN_PROGRESS = "quoteInProgress", n.QUOTE_SUCCESS = "quoteSuccess"
})(Y || (Y = {}));
const Vc = {
		tokenApproval: "Approve token in wallet",
		tokenApprovalInProgress: "Token approval in progress",
		tokenApproved: "Token approved",
		tokenApprovalError: "Error",
		signature: "Sign order in wallet",
		signatureInProgress: "Signature in progress",
		signed: "Order Signed",
		signatureError: "Error",
		execute: "Confirm trade in wallet",
		executePending: "Transaction in progress",
		executeSuccess: "Transaction successful!",
		executeError: "Error",
		executeClaim: "Confirm claim in wallet",
		executePendingClaim: "Transaction in progress",
		executeSuccessClaim: "Transaction successful!",
		executeErrorClaim: "Error",
		executeCancel: "Confirm cancel in wallet",
		executePendingCancel: "Transaction in progress",
		executeSuccessCancel: "Transaction successful!",
		executeErrorCancel: "Error",
		executeTransaction: "Confirm transaction in wallet",
		executePendingTransaction: "Transaction in progress",
		executeSuccessTransaction: "Transaction successful!",
		executeErrorTransaction: "Error",
		quoteError: "Error",
		quoteInProgress: "Quote in progress",
		quoteSuccess: "Quote successful!"
	},
	ps = {
		signature: {
			info: "To continue with your transaction",
			link: !1
		},
		signatureInProgress: {
			info: "Your status will appear soon",
			link: !1
		},
		signed: {
			info: "To continue with your transaction",
			link: !1
		},
		signatureError: {
			info: "Check your wallet and try again",
			link: !0
		},
		tokenApproval: {
			info: "To continue with your transaction",
			link: !1
		},
		tokenApprovalInProgress: {
			info: "Your status will appear soon",
			link: !1
		},
		tokenApproved: {
			info: "To continue with your transaction",
			link: !1
		},
		tokenApprovalError: {
			info: "Check your wallet and try again",
			link: !0
		},
		execute: {
			info: "To continue with your transaction",
			link: !1
		},
		executePending: {
			info: "Your status will appear soon",
			link: !1
		},
		executeSuccess: {
			info: "View on block explorer",
			link: !0
		},
		executeError: {
			info: "Check your wallet and try again",
			link: !0
		},
		executeClaim: {
			info: "To continue with your transaction",
			link: !1
		},
		executePendingClaim: {
			info: "Your status will appear soon",
			link: !1
		},
		executeSuccessClaim: {
			info: "View on block explorer",
			link: !0
		},
		executeErrorClaim: {
			info: "Check your wallet and try again",
			link: !0
		},
		executeCancel: {
			info: "To continue with your transaction",
			link: !1
		},
		executePendingCancel: {
			info: "Your status will appear soon",
			link: !1
		},
		executeSuccessCancel: {
			info: "View on block explorer",
			link: !0
		},
		executeErrorCancel: {
			info: "Check your wallet and try again",
			link: !0
		},
		executeTransaction: {
			info: "To continue with your transaction",
			link: !1
		},
		executePendingTransaction: {
			info: "Your status will appear soon",
			link: !1
		},
		executeSuccessTransaction: {
			info: "View on block explorer",
			link: !0
		},
		executeErrorTransaction: {
			info: "Check your wallet and try again",
			link: !0
		},
		quoteError: {
			info: "Check your wallet and try again",
			link: !1
		},
		quoteInProgress: {
			info: "Your status will appear soon",
			link: !1
		},
		quoteSuccess: {
			info: "To continue with your transaction",
			link: !1
		}
	},
	zc = {
		executeError: e.jsx(Lt, {}),
		execute: e.jsx(He, {}),
		executePending: e.jsx(He, {}),
		executeSuccess: e.jsx(zt, {}),
		signature: e.jsx(He, {}),
		signatureInProgress: e.jsx(He, {}),
		signed: e.jsx(zt, {}),
		signatureError: e.jsx(Lt, {}),
		tokenApproval: e.jsx(He, {}),
		tokenApprovalInProgress: e.jsx(He, {}),
		tokenApproved: e.jsx(zt, {}),
		tokenApprovalError: e.jsx(Lt, {}),
		executeClaim: e.jsx(He, {}),
		executePendingClaim: e.jsx(He, {}),
		executeSuccessClaim: e.jsx(zt, {}),
		executeErrorClaim: e.jsx(Lt, {}),
		executeCancel: e.jsx(He, {}),
		executePendingCancel: e.jsx(He, {}),
		executeSuccessCancel: e.jsx(zt, {}),
		executeErrorCancel: e.jsx(Lt, {}),
		executeTransaction: e.jsx(He, {}),
		executePendingTransaction: e.jsx(He, {}),
		executeSuccessTransaction: e.jsx(zt, {}),
		executeErrorTransaction: e.jsx(Lt, {}),
		quoteError: e.jsx(Lt, {}),
		quoteInProgress: e.jsx(He, {}),
		quoteSuccess: e.jsx(zt, {})
	};

function Wc(n) {
	switch (n) {
		case Y.EXECUTE_TRADE_SUCCESS:
		case Y.SIGNED:
		case Y.TOKEN_APPROVED:
		case Y.EXECUTE_CLAIM_SUCCESS:
		case Y.EXECUTE_CANCEL_SUCCESS:
		case Y.EXECUTE_TRANSACTION_SUCCESS:
		case Y.QUOTE_SUCCESS:
			return !0;
		default:
			return !1
	}
}
const zo = c.createContext({
		add: () => 0,
		replace: () => 0
	}),
	Gc = ({
		id: n,
		bannerState: t,
		transactionHash: s,
		chainId: r,
		removeById: o
	}) => {
		const [a, i] = c.useState(!1);
		return e.jsx("div", {
			className: Hc.banner,
			children: e.jsxs("div", {
				className: "w-[320px] h-[66px] rounded-[8px] flex flex-row items-center border-[1px] justify-between pl-4 mx-[12px] mb-[12px] mt-0",
				style: {
					backgroundColor: u.gray[800],
					borderColor: Y.EXECUTE_TRADE_SUCCESS === t ? u.blue[400] : u.gray[600]
				},
				children: [e.jsxs("div", {
					className: "flex flex-row items-center",
					children: [e.jsx("div", {
						className: " pr-3",
						children: zc[t]
					}), e.jsxs("div", {
						className: "flex flex-col gap-[6px]",
						children: [e.jsx(O, {
							children: Vc[t]
						}), ps[t].link && s ? e.jsx("a", {
							onMouseEnter: () => {
								i(!0)
							},
							onMouseLeave: () => {
								i(!1)
							},
							href: fn("tx", s, r),
							target: "_blank",
							rel: "noreferrer",
							className: "border-b-[1px] w-fit",
							style: {
								borderColor: a ? De(u.blue[400]) : u.blue[400]
							},
							children: e.jsx(j, {
								color: a ? De(u.blue[400]) : u.blue[400],
								children: ps[t].info
							})
						}) : e.jsx(j, {
							color: a ? De(u.white) : u.white,
							children: ps[t].info
						})]
					})]
				}), e.jsx("div", {
					className: "h-full flex p-[10px] ",
					children: e.jsx("button", {
						className: "h-fit flex ",
						onClick: () => {
							o(n)
						},
						children: e.jsx(Sn, {
							fill: a ? De(u.white) : u.white,
							width: 16
						})
					})
				})]
			})
		})
	},
	qc = ({
		children: n
	}) => {
		const [t, s] = c.useState([]), r = c.useRef(0), o = 15e3;

		function a(d) {
			r.current = r.current + 1;
			const m = {
				id: r.current,
				state: d.state,
				txHash: d.txHash ?? void 0,
				chainId: d.chainId ?? 0
			};
			return s(f => [...f, m]), Wc(m.state) && setTimeout(() => {
				i(m.id)
			}, o), r.current
		}

		function i(d) {
			s(m => [...m.filter(f => f.id !== d)])
		}

		function l(d, m) {
			return d && i(d), a(m)
		}
		return c.useEffect(() => {
			t.length === 0 && (r.current = 0)
		}, [t]), e.jsxs(zo.Provider, {
			value: {
				add: a,
				replace: l
			},
			children: [n, e.jsx("div", {
				className: "fixed right-0 bottom-0 z-100 flex flex-col-reverse",
				children: t.map(d => e.jsx(Gc, {
					id: d.id,
					bannerState: d.state,
					transactionHash: d.txHash,
					chainId: d.chainId,
					removeById: i
				}, d.id))
			})]
		})
	},
	An = () => c.useContext(zo),
	Wo = () => e.jsx("div", {
		className: "px-5 py-3  fixed left-6 z-[40] bottom-6 flex items-center justify-center rounded-[8px] border-[1px] border-gray-600 bg-gray-800",
		children: e.jsx(He, {})
	}),
	Yc = 1e4,
	Xc = [100, 500, 3e3, 1e4];

function Kc({
	fee: n,
	setFee: t
}) {
	const [s, r] = c.useState(!1), {
		refs: o,
		floatingStyles: a,
		context: i
	} = Ce({
		whileElementsMounted: Ie,
		open: s,
		onOpenChange: r,
		middleware: [],
		placement: "bottom-end"
	}), {
		styles: l
	} = Ae(i, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), d = Le(i), m = Pe(i), {
		getReferenceProps: f,
		getFloatingProps: p
	} = Ne([m, d]);
	return e.jsxs("div", {
		className: "w-full relative",
		children: [e.jsxs("div", {
			ref: o.setReference,
			...f(),
			className: "gap-1 outline text-white text-xs font-semibold outline-1 py-2 px-4 bg-gray-dark hover:outline-gray-800 outline-gray-700 rounded-lg flex justify-between cursor-pointer items-center h-[33px]",
			children: [e.jsx(Qc, {
				fee: n
			}), e.jsx(_t, {})]
		}), s && e.jsx("div", {
			className: "w-full mt-1",
			style: {
				...a
			},
			...p(),
			ref: o.setFloating,
			children: e.jsx("div", {
				style: l,
				className: "w-full flex flex-col bg-gray-800 border-[1px] border-gray-700 rounded-lg",
				children: e.jsx(Zc, {
					setFee: t,
					setIsOpen: r
				})
			})
		})]
	})
}
const Zc = ({
		setFee: n,
		setIsOpen: t
	}) => e.jsx(e.Fragment, {
		children: Xc.map((s, r) => e.jsx(Jc, {
			setFee: n,
			fee: s,
			setIsOpen: t
		}, r))
	}),
	Qc = ({
		fee: n
	}) => e.jsx("div", {
		children: e.jsx(j, {
			children: n ? (n / 1e4).toString().concat("% Fee tier") : "Select"
		})
	}),
	Jc = ({
		fee: n,
		setFee: t,
		setIsOpen: s
	}) => e.jsx("div", {
		className: "px-1 py-2 hover:bg-gray-drophover w-full cursor-pointer rounded-lg",
		onClick: () => {
			t(n), s(!1)
		},
		children: e.jsx("div", {
			className: "w-[56px] flex flex-start",
			children: e.jsx(j, {
				weight: P.MEDIUM,
				children: (n / Yc).toString().concat("%")
			})
		})
	}),
	ed = [12.5, 25, 50, 75, 100];

function td({
	setAddLiquidityState: n,
	addLiquidityState: t
}) {
	const [s, r] = c.useState(!1), {
		refs: o,
		floatingStyles: a,
		context: i
	} = Ce({
		whileElementsMounted: Ie,
		open: s,
		onOpenChange: r,
		middleware: [],
		placement: "bottom-end"
	}), {
		styles: l
	} = Ae(i, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), d = Le(i), m = Pe(i), {
		getReferenceProps: f,
		getFloatingProps: p
	} = Ne([m, d]);
	return e.jsxs("div", {
		className: "w-[49%] relative",
		children: [e.jsxs("div", {
			ref: o.setReference,
			...f(),
			className: "gap-1 outline text-white text-xs font-semibold outline-1 py-2 px-4 bg-gray-dark hover:outline-gray-800 outline-gray-700 rounded-lg flex justify-between cursor-pointer items-center h-[40px]",
			children: [e.jsx(sd, {
				range: t.range
			}), e.jsx(_t, {})]
		}), s && e.jsx("div", {
			className: "w-full mt-1",
			style: {
				...a
			},
			...p(),
			ref: o.setFloating,
			children: e.jsx("div", {
				style: l,
				className: " flex flex-col bg-gray-900 border-[1px] w-full border-gray-800 rounded-lg",
				children: e.jsx(rd, {
					setAddLiquidityState: n,
					setIsOpen: r
				})
			})
		})]
	})
}
const nd = n => {
		const {
			range: t,
			setAddLiquidityState: s,
			setIsOpen: r
		} = n;
		return e.jsx("div", {
			className: "text-white flex px-2 py-1 hover:bg-gray-800 cursor-pointer rounded-lg  ",
			onClick: () => {
				s(o => ({
					...o,
					range: t
				})), r(!1)
			},
			children: e.jsx(j, {
				weight: P.MEDIUM,
				children: t.toString().concat("%")
			})
		}, t)
	},
	sd = ({
		range: n
	}) => e.jsx(j, {
		className: "w-[80px] ",
		color: n ? u.gray[50] : u.gray[400],
		children: n ? n.toString().concat("%") : "Select"
	}),
	rd = ({
		setAddLiquidityState: n,
		setIsOpen: t
	}) => e.jsx(e.Fragment, {
		children: ed.map((s, r) => e.jsx(nd, {
			setIsOpen: t,
			range: s,
			setAddLiquidityState: n
		}, r))
	});

function od(n) {
	return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
const Xe = c.memo(function ({
		value: t,
		onUserInput: s,
		placeholder: r,
		prependSymbol: o,
		decimals: a = 18,
		classes: i = "",
		...l
	}) {
		const d = (m, f = 18) => {
			const p = RegExp(`^\\d*(?:\\\\.)?\\d{0,${f}}$`);
			(m === "" || p.test(od(m))) && s(m)
		};
		return e.jsx("input", {
			...l,
			value: o && t ? o + t : t,
			onChange: m => {
				if (o) {
					const f = m.target.value;
					window.log.log(f);
					const p = f.toString().includes(o) ? f.toString().slice(1, f.toString().length + 1) : f;
					d(p.replace(/,/g, "."), a)
				} else d(m.target.value.replace(/,/g, "."), a)
			},
			inputMode: "decimal",
			autoComplete: "off",
			autoCorrect: "off",
			type: "text",
			pattern: "^[0-9]*[.,]?[0-9]*$",
			placeholder: r || "0.0",
			minLength: 1,
			maxLength: 79,
			spellCheck: "false",
			className: `bg-black_transparent w-full border-none border-[0px] focus-within:outline-none placeholder-gray-600 ${i}`
		})
	}),
	Ys = ({
		onClose: n,
		showOverlay: t = !0
	}) => e.jsx("div", {
		className: "fixed h-full w-full left-0 top-0",
		onClick: n,
		style: {
			backgroundColor: u.black,
			opacity: t ?.61 : 0
		}
	});

function tn(n) {
	const {
		showModal: t,
		onClose: s,
		children: r,
		offsetLeft: o = "auto",
		offsetTop: a = "40vh",
		offsetRight: i = "auto",
		offsetBottom: l = "auto",
		showOverlay: d = !0,
		showCloseButton: m = !1
	} = n;
	return e.jsx(e.Fragment, {
		children: t && e.jsxs("div", {
			className: "fixed z-20  h-full w-full flex",
			style: {
				left: 0,
				top: 0
			},
			children: [e.jsx(Ys, {
				onClose: s,
				showOverlay: d
			}), e.jsxs("div", {
				className: "relative w-fit h-fit",
				style: {
					zIndex: 2,
					marginLeft: o,
					marginRight: i,
					marginTop: a,
					marginBottom: l
				},
				children: [m && e.jsx(Sn, {
					onClick: s,
					className: "text-gray-400 hover:text-gray-500 cursor-pointer absolute h-fit w-fit right-3 top-3",
					width: 16
				}), r]
			})]
		})
	})
}
const ad = () => {
		const {
			setShowCreatePoolModal: n,
			showCreatePoolModal: t
		} = Tt(), [s, r] = c.useState(0), {
			currentChainInfo: o
		} = D(), [a, i] = c.useState({
			token0Address: "",
			token1Address: "",
			feeTier: 3e3,
			inputPrice: ""
		}), [l, d] = c.useState({
			range: void 0,
			minPrice: "",
			maxPrice: "",
			token0Amount: "",
			token1Amount: ""
		});
		c.useEffect(() => {
			i({
				token0Address: "",
				token1Address: "",
				feeTier: 3e3,
				inputPrice: ""
			}), d({
				range: void 0,
				minPrice: "",
				maxPrice: "",
				token0Amount: "",
				token1Amount: ""
			})
		}, [t]);
		const m = c.useMemo(() => {
				if (ot(a.token0Address)) {
					const p = ze(a.token0Address, o.id);
					return p.address !== se ? p : {
						...p,
						address: a.token0Address
					}
				}
			}, [a.token0Address]),
			f = c.useMemo(() => {
				if (ot(a.token1Address)) {
					const p = ze(a.token1Address, o.id);
					return p.address !== se ? p : {
						...p,
						address: a.token1Address
					}
				}
			}, [a.token1Address]);
		return e.jsx(tn, {
			showModal: t,
			showCloseButton: !0,
			offsetTop: "20vh",
			onClose: () => n(!1),
			children: e.jsx("div", {
				className: "bg-gray-dark rounded-xl p-4 text-gray-400 border-[1px] border-gray-700",
				children: s === 0 ? e.jsx(id, {
					onSubmit: () => r(1),
					createPoolState: a,
					setCreatePoolState: i,
					token0: m,
					token1: f
				}) : e.jsx(ld, {
					addLiquidityState: l,
					setAddLiquidityState: d,
					onBack: () => r(0),
					createPoolState: a,
					token0: m,
					token1: f
				})
			})
		})
	},
	id = ({
		onSubmit: n,
		createPoolState: t,
		setCreatePoolState: s,
		token0: r,
		token1: o
	}) => {
		const [a, i] = c.useState(!0), {
			address: l,
			isConnected: d
		} = we();
		c.useEffect(() => {
			i(!(ot(t.token1Address) && ot(t.token0Address) && t.feeTier !== void 0 && t.inputPrice !== "" && d && l))
		}, [t]);
		const m = o != null && o.symbol && o.symbol && o.symbol !== "NULL" ? o.symbol : "Token1",
			f = r != null && r.symbol && r.symbol && r.symbol !== "NULL" ? r.symbol : "Token0";
		return c.useEffect(() => {
			if (ot(t.token0Address) && ot(t.token1Address)) {
				const p = BigInt(t.token0Address);
				BigInt(t.token1Address) < p && s(h => ({
					...h,
					token0Address: t.token1Address,
					token1Address: t.token0Address
				}))
			}
		}, [t.token0Address, t.token1Address]), e.jsxs("div", {
			children: [e.jsx(ee, {
				fontSize: 24,
				color: u.gray[50],
				children: "Create a new pool"
			}), e.jsxs("form", {
				onSubmit: n,
				className: "flex flex-col gap-y-8 mt-8 mb-6",
				children: [e.jsxs("div", {
					className: "flex flex-row gap-2",
					children: [e.jsxs("div", {
						className: "flex flex-col",
						children: [e.jsx(ee, {
							fontSize: 17,
							color: u.gray[400],
							children: "Token 0 Address"
						}), e.jsx("input", {
							className: "bg-gray-dark w-64 placeholder:text-gray-500 focus:outline-0 placeholder:text-[12px] text-xs placeholder:font-normal rounded-lg border border-gray-700 p-2 mt-2",
							value: t.token0Address,
							placeholder: "0x9434...5543",
							onChange: p => {
								s(x => ({
									...x,
									token0Address: p.target.value
								}))
							}
						})]
					}), e.jsxs("div", {
						className: "flex flex-col",
						children: [e.jsx(ee, {
							fontSize: 17,
							color: u.gray[400],
							children: "Token 1 Address"
						}), e.jsx("input", {
							className: "bg-gray-dark w-64 border-gray-700 placeholder:text-gray-500 focus:outline-0 text-xs placeholder:text-[12px] placeholder:font-normal rounded-lg border p-2 mt-2",
							value: t.token1Address,
							placeholder: "0x9434...5543",
							onChange: p => {
								s(x => ({
									...x,
									token1Address: p.target.value
								}))
							}
						})]
					})]
				}), e.jsxs("div", {
					className: "grid grid-cols-2 gap-2",
					children: [e.jsxs("div", {
						className: "flex flex-col w-full",
						children: [e.jsx(ee, {
							fontSize: 17,
							color: u.gray[400],
							className: "mb-2",
							children: "Choose Fee Tier"
						}), e.jsx(Kc, {
							fee: t.feeTier,
							setFee: p => {
								s(x => ({
									...x,
									feeTier: p
								}))
							}
						})]
					}), e.jsxs("div", {
						className: "flex flex-col",
						children: [e.jsx(ee, {
							fontSize: 17,
							color: u.gray[400],
							children: "Input Price"
						}), e.jsx(Xe, {
							classes: "w-64 bg-gray-dark placeholder:text-gray-500 focus:outline-0 placeholder:text-[12px] placeholder:font-normal rounded-lg border-gray-700 p-2 mt-2 text-xs",
							style: {
								borderStyle: "solid",
								borderWidth: "1px"
							},
							value: t.inputPrice,
							onUserInput: p => s(x => ({
								...x,
								inputPrice: p
							}))
						}), t.inputPrice !== "" ? e.jsx("div", {
							className: "h-3 pt-1",
							children: e.jsxs(j, {
								fontSize: 12,
								color: u.gray[400],
								children: [t.inputPrice, " ", m, " per ", f]
							})
						}) : e.jsx("div", {
							className: "h-3"
						})]
					})]
				}), e.jsx("button", {
					className: "flex w-full justify-center items-center h-[38px] rounded-[8px] text-[16px] font-semibold bg-blue-400 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-600 text-white",
					disabled: a,
					children: d ? "Next" : "Connect Wallet"
				}), e.jsxs("div", {
					className: "flex items-center m-auto",
					children: [e.jsx("span", {
						className: "w-2 h-2 rounded-full bg-white mr-1"
					}), e.jsx("span", {
						className: "w-2 h-2 rounded-full border border-white"
					})]
				})]
			})]
		})
	},
	ld = ({
		addLiquidityState: n,
		setAddLiquidityState: t,
		onBack: s,
		createPoolState: r,
		token0: o,
		token1: a
	}) => {
		const [i, l] = c.useState(!0), {
			currentChainInfo: d
		} = D(), {
			provider: m,
			signer: f
		} = kt(), {
			address: p
		} = we(), x = An(), {
			data: h
		} = Hs({
			watch: !0
		}), {
			data: y,
			refetch: b
		} = Ft({
			address: p,
			token: o == null ? void 0 : o.address,
			chainId: d.id
		}), {
			data: g,
			refetch: w
		} = Ft({
			address: p,
			token: a == null ? void 0 : a.address,
			chainId: d.id
		});
		c.useEffect(() => {
			b(), w()
		}, [h]), c.useEffect(() => {
			if (!o || !a || n.token0Amount === "" || n.token1Amount === "" || !p) {
				l(!0);
				return
			}
			if (y && g) {
				const k = Oe(n.token0Amount, y == null ? void 0 : y.decimals),
					T = Oe(n.token1Amount, g == null ? void 0 : g.decimals);
				if ((y == null ? void 0 : y.value) < k || (g == null ? void 0 : g.value) < T) {
					l(!0);
					return
				}
			}
			l(n.minPrice === "" || n.maxPrice === "")
		}, [n]), c.useEffect(() => {
			if (n.range && o && a && n.range !== void 0) {
				const k = n.range / 2,
					T = parseFloat(r.inputPrice) * (1 - k / 100),
					E = parseFloat(r.inputPrice) * (1 + k / 100);
				t(N => ({
					...N,
					minPrice: T.toString(),
					maxPrice: E.toString()
				}))
			}
		}, [n.range]);
		const C = async k => {
			k.preventDefault();
			const {
				feeTier: T,
				inputPrice: E
			} = r, {
				token0Amount: N,
				token1Amount: S,
				minPrice: G,
				maxPrice: _
			} = n;
			let v;
			if (!(!o || !a || !f || !p || !m || !y || !g)) try {
				v = x.add({
					state: Y.EXECUTE_TRANSACTION
				});
				const I = Ns(parseFloat(G), y.decimals, g.decimals, !0),
					A = Ns(parseFloat(_), y.decimals, g.decimals, !0);
				if (!T) return;
				const B = await Dc(o.address, a.address, y.decimals, g.decimals, T, parseFloat(E), parseFloat(N), parseFloat(S), p, {
					lower: I,
					upper: A
				}, f, m, d.contracts.nftManager.address);
				v = x.replace(v, {
					state: Y.EXECUTE_TRANSACTION_IN_PROGRESS
				});
				const M = await m.waitForTransactionReceipt({
					hash: B
				});
				return x.replace(v, {
					state: Y.EXECUTE_TRANSACTION_SUCCESS,
					txHash: M.transactionHash,
					chainId: d.id
				}), M
			} catch (I) {
				const A = I;
				window.log.log(A), x.replace(v, {
					state: Y.EXECUTE_TRANSACTION_ERROR,
					txHash: A.transactionHash,
					chainId: d.id
				})
			}
		};
		return e.jsxs("div", {
			children: [e.jsx(ee, {
				fontSize: 24,
				color: u.gray[50],
				children: "Add Liquidity"
			}), r.feeTier && e.jsxs("div", {
				className: "text-white text-sm mt-5",
				children: ["Fee Tier: ", r.feeTier / 1e4, "%"]
			}), e.jsxs("form", {
				onSubmit: C,
				className: "flex flex-col gap-y-4 mt-8 mb-6 ",
				children: [e.jsxs("div", {
					className: "flex flex-col gap-y-2",
					children: [e.jsx(ee, {
						fontSize: 17,
						color: u.gray[400],
						children: "Set Range"
					}), e.jsx(td, {
						setAddLiquidityState: t,
						addLiquidityState: n
					})]
				}), e.jsxs("div", {
					className: "grid grid-cols-2 gap-2",
					children: [e.jsxs("div", {
						className: "flex flex-col w-full",
						children: [e.jsx(ee, {
							fontSize: 17,
							color: u.gray[400],
							children: "Min Price"
						}), e.jsx(Xe, {
							classes: "bg-gray-dark placeholder:text-gray-500 focus:outline-0 placeholder:text-[12px] placeholder:font-normal rounded-lg border border-gray-700 p-2 mt-2 w-full",
							style: {
								borderStyle: "solid",
								borderWidth: "1px",
								minWidth: 275
							},
							value: n.minPrice,
							onUserInput: k => t(T => ({
								...T,
								range: void 0,
								minPrice: k
							}))
						})]
					}), e.jsxs("div", {
						className: "flex flex-col w-full",
						children: [e.jsx(ee, {
							fontSize: 17,
							color: u.gray[400],
							children: "Max Price"
						}), e.jsx(Xe, {
							classes: "bg-gray-dark w-full border-gray-700 placeholder:text-gray-500 focus:outline-0 placeholder:text-[12px] placeholder:font-normal rounded-lg border p-2 mt-2",
							style: {
								borderStyle: "solid",
								borderWidth: "1px",
								minWidth: 275
							},
							value: n.maxPrice,
							onUserInput: k => t(T => ({
								...T,
								range: void 0,
								maxPrice: k
							}))
						})]
					})]
				}), e.jsxs("div", {
					className: "grid grid-cols-2 gap-2 items-end",
					children: [e.jsxs("div", {
						className: "flex flex-col",
						children: [e.jsx(ee, {
							fontSize: 17,
							color: u.gray[400],
							children: "Enter Amount"
						}), e.jsxs("div", {
							className: "rounded-lg border-gray-700 border flex flex-row items-center mt-2 px-1 gap-x-1",
							children: [e.jsxs("div", {
								className: "flex items-center gap-1 bg-gray-700 rounded-lg py-1 px-2 h-fit",
								children: [e.jsx(xe, {
									tokenSymbol: o != null && o.symbol && o.symbol !== "NULL" ? o.symbol : y == null ? void 0 : y.symbol,
									logoUrl: o == null ? void 0 : o.logoURI,
									size: 12
								}), e.jsx(O, {
									children: o != null && o.symbol && o.symbol !== "NULL" ? o.symbol : y == null ? void 0 : y.symbol
								})]
							}), e.jsx(Xe, {
								classes: "w-auto bg-gray-dark h-10 placeholder:text-gray-500 focus:outline-0 placeholder:text-[12px] placeholder:font-normal p-2 ",
								style: {
									width: "auto"
								},
								value: n.token0Amount,
								onUserInput: k => t(T => ({
									...T,
									token0Amount: k
								}))
							})]
						}), y && (y == null ? void 0 : y.formatted) && e.jsxs(j, {
							color: u.gray[400],
							className: "mt-2",
							children: [e.jsx(L, {
								num: y == null ? void 0 : y.formatted
							}), " ", y == null ? void 0 : y.symbol, " "]
						})]
					}), e.jsxs("div", {
						children: [e.jsxs("div", {
							className: "rounded-lg border-gray-700 border flex flex-row items-center mt-2 px-1 gap-x-1",
							children: [e.jsxs("div", {
								className: "flex items-center gap-1 bg-gray-700 rounded-lg py-1 px-2 h-fit",
								children: [e.jsx(xe, {
									tokenSymbol: a != null && a.symbol && a.symbol !== "NULL" ? a.symbol : g == null ? void 0 : g.symbol,
									logoUrl: a == null ? void 0 : a.logoURI,
									size: 12
								}), e.jsx(O, {
									children: a != null && a.symbol && a.symbol !== "NULL" ? a.symbol : g == null ? void 0 : g.symbol
								})]
							}), e.jsx(Xe, {
								classes: "w-auto bg-gray-dark h-10 placeholder:text-gray-500 focus:outline-0 placeholder:text-[12px] placeholder:font-normal  p-2 ",
								style: {
									width: "auto"
								},
								value: n.token1Amount,
								onUserInput: k => t(T => ({
									...T,
									token1Amount: k
								}))
							})]
						}), g && (g == null ? void 0 : g.formatted) && e.jsxs(j, {
							color: u.gray[400],
							className: "mt-2",
							children: [e.jsx(L, {
								num: g == null ? void 0 : g.formatted
							}), " ", g == null ? void 0 : g.symbol, " "]
						})]
					})]
				}), e.jsx("button", {
					className: "flex w-full justify-center items-center h-[38px] rounded-[8px] text-[16px] font-semibold bg-blue-400 hover:bg-blue-500 :bg-gray-800 disabled:text-gray-600 text-white",
					disabled: i,
					type: "submit",
					children: "Create Position"
				}), e.jsxs("div", {
					className: "flex items-center m-auto",
					children: [e.jsx("span", {
						className: "w-2 h-2 rounded-full border border-white mr-1 cursor-pointer",
						onClick: s
					}), e.jsx("span", {
						className: "w-2 h-2 rounded-full bg-white"
					})]
				})]
			})]
		})
	},
	vr = "https://assets.oku.trade/error.svg",
	ms = "https://assets.oku.trade/loader.svg",
	cd = "https://assets.oku.trade/check.svg";

function dd() {
	const {
		setShowTransactionsModal: n,
		showTransactionsModal: t,
		transactionContent: s
	} = Tt(), {
		currentChainInfo: r
	} = D();
	return e.jsx(tn, {
		showModal: t,
		onClose: () => n(!1),
		showOverlay: !1,
		showCloseButton: !0,
		children: e.jsxs("div", {
			className: "transaction-modal flex flex-col gap-y-4 w-80 items-center text-white bg-gray-dark p-5 rounded-lg border-2 border-gray-800",
			children: [ud(s, r), e.jsx("button", {
				className: "transaction-modal-footer-button-close w-full px-8 py-1 bg-blue-400 rounded-lg text-s font-semibold",
				onClick: () => n(!1),
				children: "Close"
			})]
		})
	})
}
const ud = (n, t) => {
		if (!n) return e.jsxs(e.Fragment, {
			children: [e.jsx("img", {
				src: ms,
				alt: "spinning loader",
				className: "center mx-auto my-4 animate-spin"
			}), e.jsx("div", {
				className: "transaction-modal-body-title",
				children: "Confirm Transaction in wallet"
			})]
		});
		switch (n.state) {
			case "PENDING":
				return e.jsxs(e.Fragment, {
					children: [e.jsx("img", {
						src: ms,
						alt: "spinning loader",
						className: "center mx-auto my-4 animate-spin"
					}), e.jsx("div", {
						className: "transaction-modal-body-title",
						children: "Confirm Transaction in wallet"
					}), e.jsx("div", {
						className: "transaction-modal-body-description",
						children: n.message
					})]
				});
			case "SUBMITTED":
				return e.jsxs(e.Fragment, {
					children: [e.jsx("img", {
						src: ms,
						alt: "spinning loader",
						className: "center mx-auto my-4 animate-spin"
					}), e.jsx("div", {
						className: "transaction-modal-body-title",
						children: "Transaction Submitted"
					}), e.jsx("div", {
						className: "transaction-modal-body-description",
						children: "Your status will appear soon."
					})]
				});
			case "SUCCESSFUL":
				return e.jsxs(e.Fragment, {
					children: [e.jsx("img", {
						src: cd,
						alt: "check",
						className: "center mx-auto my-4"
					}), e.jsx("div", {
						className: "transaction-modal-body-title",
						children: "Success!"
					}), n.transaction ? e.jsxs("a", {
						className: "transaction-modal-body-description text-blue-400 underline",
						href: fn("tx", n.transaction.toString(), t.id),
						target: "_blank",
						rel: "noreferrer",
						children: ["View on ", Kn(t.id)]
					}) : e.jsx(e.Fragment, {})]
				});
			case "ERROR":
				return e.jsxs(e.Fragment, {
					children: [e.jsx("img", {
						src: vr,
						alt: "error",
						className: "center mx-auto my-4"
					}), e.jsx("div", {
						className: "transaction-modal-body-title",
						children: "Transaction Error"
					}), e.jsx("div", {
						className: "transaction-modal-body-description",
						children: n.message
					}), n.transaction ? e.jsxs("a", {
						className: "transaction-modal-body-description text-blue-400 underline",
						href: fn("tx", n.transaction.toString(), t.id),
						target: "_blank",
						rel: "noreferrer",
						children: ["View on ", Kn(t.id)]
					}) : e.jsx(e.Fragment, {})]
				});
			default:
				return e.jsxs(e.Fragment, {
					children: [e.jsx("img", {
						src: vr,
						alt: "error",
						className: "center mx-auto my-4"
					}), e.jsx("div", {
						children: "Please try again later"
					})]
				})
		}
	},
	Go = c.createContext({}),
	pd = n => {
		const {
			children: t
		} = n, [s, r] = c.useState(3), [o, a] = c.useState(qe.TRADINGVIEW), [i, l] = c.useState(!1), [d, m] = c.useState(!1), [f, p] = c.useState(void 0), x = h => {
			let y = h;
			typeof h != "function" && h && h.upper < h.lower && (y = {
				upper: h.lower,
				lower: h.upper
			}), typeof y != "function" && y && (y.upper = Math.round(y.upper), y.lower = Math.round(y.lower)), p(y)
		};
		return e.jsx(Go.Provider, {
			value: {
				timeInterval: s,
				setTimeInterval: r,
				chartType: o,
				setChartType: a,
				loadingCharts: i,
				setLoadingCharts: l,
				highlightBounds: f,
				setHighlightBounds: x,
				clear: d,
				setClear: m
			},
			children: t
		})
	},
	Ct = () => c.useContext(Go),
	qo = c.createContext({
		editPosition: !1,
		setEditPosition: () => {},
		slidePercent: "0",
		setSlidePercent: () => {},
		updatePosition: !0,
		setUpdatePosition: () => {},
		position: void 0,
		setPosition: () => {},
		setInputToken0: () => {},
		setInputToken1: () => {},
		inputToken0: "",
		inputToken1: "",
		lastInput: "",
		setLastInput: () => {}
	}),
	md = n => {
		const {
			children: t
		} = n, [s, r] = c.useState(!1), [o, a] = c.useState(!0), [i, l] = c.useState("0"), [d, m] = c.useState(), [f, p] = c.useState(""), [x, h] = c.useState(""), [y, b] = c.useState("");
		return c.useEffect(() => {
			l("0")
		}, [d]), e.jsx(qo.Provider, {
			value: {
				editPosition: s,
				setEditPosition: r,
				slidePercent: i,
				setSlidePercent: l,
				updatePosition: o,
				setUpdatePosition: a,
				position: d,
				setPosition: m,
				setInputToken0: p,
				setInputToken1: h,
				inputToken0: f,
				inputToken1: x,
				lastInput: y,
				setLastInput: b
			},
			children: t
		})
	},
	Nt = () => c.useContext(qo),
	Yo = c.createContext({}),
	fd = ({
		children: n
	}) => {
		const [t, s] = c.useState(void 0), [r, o] = c.useState(void 0), [a, i] = c.useState(!0), [l, d] = c.useState();
		return e.jsx(Yo.Provider, {
			value: {
				token0: t,
				setToken0: s,
				token1: r,
				setToken1: o,
				flip: a,
				setFlip: i,
				txState: l,
				setTxState: d
			},
			children: n
		})
	},
	gn = () => c.useContext(Yo),
	Xo = c.createContext({
		login: async () => {},
		logout: async () => {},
		whitelisted: !1
	}),
	xd = ({
		children: n
	}) => {
		const {
			features: {
				Login: {
					url: t,
					app_id: s,
					path_prefix: r
				}
			}
		} = Te(), [o, a] = c.useState(ft("id_token") ?? void 0), [i, l] = c.useState(ft("nonce") ?? void 0), [d, m] = c.useState(void 0), [f, p] = c.useState(!1), x = g => {
			const w = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";
			let C = "";
			for (; g > 0;) {
				const k = new Uint8Array(16),
					T = window.crypto.getRandomValues(k);
				for (let E = 0; E < T.length && g !== 0; E++) T[E] < w.length && (C += w[T[E]], g--)
			}
			return C
		}, h = () => new Promise(g => {
			const w = x(32);
			Bt("nonce", w), l(w), jn("id_token"), a(void 0);
			const C = `${new URL("/authorize",t).href}?${new URLSearchParams({response_type:"id_token",scope:"openid eth_address whitelisted",client_id:s,redirect_uri:new URL(`${r}/auth/`,window.location.href).href,prompt:"switch_account",nonce:w}).toString()}`,
				k = window.open(C, "_blank", "toolbar=no,innerWidth=500,innerHeight=700"),
				T = window.setInterval(() => {
					if (k === null || k.closed) {
						window.clearInterval(T);
						const E = ft("id_token") ?? void 0;
						a(E), E === void 0 && (jn("nonce"), l(void 0)), g()
					}
				}, 100)
		}), y = async () => {
			jn("id_token"), jn("nonce"), a(void 0), l(void 0)
		}, b = g => {
			const w = g.split(".")[1];
			if (!w) return {};
			const C = w.replace(/-/g, "+").replace(/_/g, "/"),
				k = decodeURIComponent(atob(C).split("").map(function (T) {
					return "%" + ("00" + T.charCodeAt(0).toString(16)).slice(-2)
				}).join(""));
			return JSON.parse(k)
		};
		return c.useEffect(() => {
			if (o === void 0) return;
			if (i === null) {
				(async () => await y())();
				return
			}
			const {
				eth_address: g,
				whitelisted: w,
				exp: C,
				nonce: k
			} = b(o);
			if (i !== k) {
				(async () => await y())();
				return
			}
			if (m(g), p(w !== void 0), Date.now() > C * 1e3) {
				(async () => await y())();
				return
			}
		}, [o]), e.jsx(Xo.Provider, {
			value: {
				idToken: o,
				nonce: i,
				login: h,
				logout: y,
				address: d,
				whitelisted: f
			},
			children: n
		})
	},
	Ko = () => c.useContext(Xo),
	Zo = c.createContext({}),
	hd = () => ({
		sender: "",
		message: ""
	}),
	yd = [...new Array(10).keys()].map(hd),
	gd = ({
		children: n
	}) => {
		const [t, s] = c.useState(!1), [r, o] = c.useState(void 0), [a, i] = c.useState([...yd]), [l, d] = c.useState(0), [m, f] = c.useState(!1), [p, x] = c.useState(0);
		c.useEffect(() => {
			a.length > 0 && f(l < a.length)
		}, [a, l]);
		const {
			features: {
				Chat: {
					url: h
				}
			}
		} = Te(), {
			idToken: y,
			nonce: b
		} = Ko(), g = N => {
			i(S => (S.length > 256 && S.pop(), [N, ...S]))
		}, w = () => {
			g({
				message: "not connected to chat",
				sender: "#system"
			})
		}, C = "oku.trade", k = ["", C], T = {
			message: (N, S) => {
				k.includes(N) && g({
					message: S.Content,
					sender: S.Sender.DisplayName
				})
			},
			key: () => {}
		};
		c.useEffect(() => {
			const N = new Ka(Il.WS_PATH(h));
			o(S => (S && (S == null || S.close()), N))
		}, [h]), c.useEffect(() => {
			r === void 0 || y === void 0 || b === void 0 || r.send(JSON.stringify({
				Type: "login",
				Args: [y, b]
			}))
		}, [y, r]);
		const E = c.useCallback(N => {
			if (r) {
				r.send(JSON.stringify({
					Type: "send",
					Channel: C,
					Message: N
				}));
				return
			}
			w()
		}, [r]);
		return c.useEffect(() => {
			r && (r.addEventListener("message", N => {
				const S = JSON.parse(N.data),
					G = T[S.Type];
				G && S.Channel !== void 0 && G(S.Channel, S.Data)
			}), r.addEventListener("close", () => {
				g({
					message: "disconnected from server...",
					sender: "#system"
				})
			}), r.addEventListener("error", N => {
				g({
					message: "trollbox socket error: " + N.message,
					sender: "#system"
				})
			}), r.addEventListener("open", () => {
				r.send(JSON.stringify({
					Type: "join",
					Args: [C]
				}))
			}))
		}, [r]), e.jsx(Zo.Provider, {
			value: {
				maximized: t,
				setMaximized: s,
				messages: a,
				addMessage: g,
				sendMessage: E,
				hasNewMessages: m,
				setLastDisplayedMessageCount: d,
				trollboxX: p,
				setTrollboxX: x
			},
			children: n
		})
	},
	Xs = () => {
		const n = c.useContext(Zo);
		if (n === null) throw new Error('"useTrollboxContext" should be used inside a "TrollboxContextProvider"');
		return n
	},
	bd = async (n, t) => {
		if (!t) return [];
		try {
			return n.call("cush_ordersForUser", [t])
		} catch (s) {
			const r = s;
			throw window.log.log(s), new Error(r.message)
		}
	}, wd = async (n, {
		user_address: t,
		pool_address: s,
		token_id: r
	}) => {
		try {
			const o = {
				limit: 0
			};
			return t && (o.user = t), s && (o.pool = s), r && (o.token_id = r), n.call("cush_getPositions", [o])
		} catch (o) {
			const a = o;
			throw new Error(a.message)
		}
	}, Qo = c.createContext({}), jd = ({
		children: n
	}) => {
		const {
			address: t
		} = we(), {
			cushRpc: s,
			currentChainInfo: r
		} = D(), [o, a] = c.useState(), [i, l] = c.useState();
		c.useEffect(() => {
			a([]), l([]), t && (d(t), m(t))
		}, [t, s, r]);
		const d = f => {
				wd(s, {
					user_address: f
				}).then(p => {
					p.sort((x, h) => h.status === "in range" ? 1 : x.status === "in range" ? -1 : h.created_date - x.created_date), a(p)
				}).catch(p => {
					window.log.error(p), a([])
				})
			},
			m = f => {
				bd(s, f).then(p => {
					p.sort((x, h) => {
						var y, b;
						return h.limit_order_full ? 1 : x.limit_order_full ? -1 : ((y = h.status) == null ? void 0 : y.toLowerCase()) === "open" ? 1 : ((b = x.status) == null ? void 0 : b.toLowerCase()) === "open" ? -1 : h.time && x.time ? h.time - x.time : 0
					}), l(p)
				}).catch(() => {
					l([])
				})
			};
		return e.jsx(Qo.Provider, {
			value: {
				currentPositions: o,
				allUserOrders: i,
				getAndSetAllUserOrders: m,
				getAndSetCurrentPositions: d
			},
			children: n
		})
	}, Vt = () => {
		const n = c.useContext(Qo);
		if (n === null) throw new Error('"useUserOrderContext" should be used inside a "UserOrderContextProvider"');
		return n
	}, vd = Nl(), _d = ({
		children: n
	}) => e.jsx(Za, {
		config: vd,
		children: n
	}), Jo = c.createContext({}), Td = ({
		children: n
	}) => {
		const t = Te(),
			[s, r] = c.useState(""),
			[o, a] = c.useState(1),
			i = async () => fetch(t.features.Geoblock.provider).then(d => d.json()).then(d => d.country), l = async () => {
				if (o < 10) return i().then(d => {
					r(d), a(100)
				}).catch(() => {
					a(o + 1)
				})
			};
		return c.useEffect(() => {
			l().then()
		}, [o]), e.jsx(Jo.Provider, {
			value: {
				countryCode: s
			},
			children: n
		})
	}, kd = () => {
		const n = c.useContext(Jo);
		if (n === null) throw new Error('"useGeoipContext" should be used inside a "GeoipContextProvider"');
		return n
	}, Cd = (n, t) => {
		const s = n[t];
		return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((r, o) => {
			(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(o.bind(null, new Error("Unknown variable dynamic import: " + t)))
		})
	}, Nd = {
		locale: "en",
		setLocale: () => {}
	}, ea = c.createContext(Nd), Sd = ({
		children: n
	}) => {
		const [t, s] = c.useState("en");
		return c.useEffect(() => {
			(async () => {
				const {
					messages: r
				} = await Cd(Object.assign({
					"../../locales/en.po": () => lr(() => import("./en-vCc8n45F.js"), __vite__mapDeps([])),
					"../../locales/zh.po": () => lr(() => import("./zh-vCc8n45F.js"), __vite__mapDeps([]))
				}), `../../locales/${t}.po`);
				et.load(t, r), et.activate(t)
			})()
		}, []), e.jsx(ea.Provider, {
			value: {
				locale: t,
				setLocale: s
			},
			children: e.jsx(Qa, {
				i18n: et,
				children: n
			})
		})
	}, Ed = () => {
		const n = c.useContext(ea);
		if (n === null) throw new Error('"useI18nContext" should be used inside a "I18nContextProvider"');
		return n
	}, ta = c.createContext({}), Id = ({
		children: n
	}) => {
		const {
			features: t
		} = Te(), [s, r] = c.useState(ws(t.Telemetry.url, ["https"]));
		return c.useEffect(() => {
			r(ws(t.Telemetry.url, ["https"]))
		}, []), e.jsx(ta.Provider, {
			value: {
				telemetryRpc: s
			},
			children: n
		})
	}, bn = () => {
		const n = c.useContext(ta);
		if (n === null) throw new Error('"useRpcContext" should be used inside a "TelemetryContextProvider"');
		return n
	};

function Ad(n) {
	const {
		children: t
	} = n;
	return [Sd, Dl, Td, Sl, _d, pc, xd, Fl, Id, Cc, Yl, fc, pd, md, jd, gd, fd, qc].reduceRight((o, a) => e.jsx(a, {
		children: o
	}), t)
}
const _r = n => {
		const {
			onClick: t,
			children: s
		} = n, [r, o] = c.useState(!1);
		return e.jsx("button", {
			onMouseEnter: () => {
				o(!0)
			},
			onMouseLeave: () => {
				o(!1)
			},
			onClick: t,
			className: "flex flex-1 justify-center items-center rounded-full",
			children: e.jsx(O, {
				color: r ? De(u.white) : u.white,
				children: s
			})
		})
	},
	Ld = ({
		isFirstValue: n
	}) => e.jsx("div", {
		className: "h-full absolute py-1 w-full  px-2 flex ",
		children: e.jsx("div", {
			style: {
				backgroundColor: u.gray[700]
			},
			className: `
        h-full w-[50%] rounded-full
        transform transition-all duration-300 ${n?"transform translate-x-[100%] ":""}

        `
		})
	});

function Ks(n) {
	const {
		item: t,
		setItem: s,
		item1: r,
		item2: o,
		classes: a
	} = n;
	return e.jsx(e.Fragment, {
		children: e.jsxs("div", {
			className: `w-full h-[32px] rounded-lg border-[1px] border-gray-800 text-[14px] font-normal bg-gray-dark items-center relative ${a}`,
			children: [e.jsx(Ld, {
				isFirstValue: t
			}), e.jsxs("div", {
				className: "flex flex-row text-white flex-1 rounded-full w-full h-full absolute ",
				children: [e.jsx(_r, {
					onClick: () => {
						s(!1)
					},
					children: r
				}), e.jsx(_r, {
					onClick: () => {
						s(!0)
					},
					children: o
				})]
			})]
		})
	})
}
const Pd = n => {
		const [t, s] = c.useState(u.blue[800]), [r, o] = c.useState(u.blue[500]), [a, i] = c.useState("");
		c.useEffect(() => {
			switch (n.status) {
				case ln.IN_RANGE:
					s(u.green[700]), o(u.green[400]), i("In Range");
					break;
				case ln.OUT_OF_RANGE:
					s(u.yellow[700]), o(u.yellow[200]), i("Out of Range");
					break;
				case ln.CLOSED:
					s(u.gray[600]), o(u.gray[300]), i("Closed");
					break;
				default:
					i("");
					break
			}
		}, [n.status]);
		const {
			isDesktop: l
		} = Ze();
		return e.jsx("div", {
			className: "py-2 text-[14px] font-regular rounded-[6px] flex items-center justify-center",
			style: {
				backgroundColor: t,
				width: l ? "94px" : "75px"
			},
			children: e.jsx(j, {
				color: r,
				children: a
			})
		})
	},
	Zs = n => {
		const t = new Date(n),
			s = t.getDate() < 10 ? "0" + t.getDate().toString() : t.getDate().toString(),
			r = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1).toString() : (t.getMonth() + 1).toString(),
			o = t.getFullYear().toString();
		return r + "/" + s + "/" + o
	};

function Is({
	setFilter: n,
	filter: t,
	label: s,
	filterType: r
}) {
	const [o, a] = c.useState(!1), {
		refs: i,
		floatingStyles: l,
		context: d
	} = Ce({
		whileElementsMounted: Ie,
		open: o,
		onOpenChange: a,
		middleware: [Ja({
			crossAxis: -55
		}), es()],
		placement: "bottom"
	}), {
		styles: m
	} = Ae(d, {
		initial: {
			opacity: 1,
			transform: "scale(1,0.2)"
		},
		common: {
			transformOrigin: "top"
		}
	}), f = Le(d), p = Pe(d), {
		getReferenceProps: x,
		getFloatingProps: h
	} = Ne([p, f]);
	return e.jsxs("div", {
		className: "relative",
		children: [e.jsx("div", {
			ref: i.setReference,
			...x(),
			className: "gap-1 text-white text-xs font-semibold outline-1  outline-gray-700 rounded-lg flex justify-between cursor-pointer items-center",
			children: e.jsx(Md, {
				label: s
			})
		}), o && e.jsx("div", {
			className: "w-full mt-1",
			style: {
				...l
			},
			...h(),
			ref: i.setFloating,
			children: e.jsx("div", {
				style: m,
				className: "w-full flex flex-col ",
				children: e.jsx(Rd, {
					filter: t,
					setFilter: n,
					filterType: r
				})
			})
		})]
	})
}
const Md = ({
		label: n
	}) => e.jsxs("button", {
		className: "flex flex-row items-center gap-3 justify-center border-[1px] rounded-[8px]",
		style: {
			width: "91px",
			height: "33px",
			borderColor: u.gray[700]
		},
		children: [e.jsx(O, {
			children: n
		}), e.jsx(Tn, {
			width: 12,
			height: 12,
			color: u.gray[400]
		})]
	}),
	Rd = ({
		setFilter: n,
		filter: t,
		filterType: s
	}) => {
		const r = a => {
				n(i => i.includes(a) ? i.filter(d => d !== a) : [...i, a])
			},
			o = Ud(s);
		return e.jsxs("div", {
			className: "bg-gray-800 rounded-[6px] h-fit border-[1px] border-gray-700 text-white flex flex-col w-fit overflow-hidden",
			children: [e.jsx("div", {
				style: {
					width: "147px"
				},
				className: "flex flex-row justify-end pr-3 py-3",
				children: e.jsx("button", {
					onClick: () => n([]),
					children: e.jsx(j, {
						color: u.blue[400],
						children: "Clear all"
					})
				})
			}), e.jsx(Qt, {
				containerClasses: "px-3"
			}), e.jsx("div", {
				className: "flex flex-col",
				children: o.map(a => e.jsx(Od, {
					onClick: () => r(a),
					title: a,
					selected: t.includes(a)
				}, a))
			})]
		})
	},
	Od = n => {
		const {
			onClick: t,
			title: s,
			selected: r
		} = n, o = Fd(s);
		return e.jsxs("button", {
			onClick: t,
			className: "flex justify-between items-center w-full p-3 hover:bg-gray-drophover",
			children: [e.jsx(j, {
				children: `${o}`
			}), r ? e.jsx(ei, {
				width: 12,
				height: 12,
				color: u.green[300]
			}) : e.jsx(e.Fragment, {})]
		})
	},
	Dd = n => n.charAt(0).toUpperCase() + n.slice(1),
	Fd = n => Object.values(kn).includes(n) ? `${n}%` : n.split("_").map(t => Dd(t)).join(" ");

function Ud(n) {
	return Object.entries(n).filter(([, t]) => typeof t != "number").map(([, t]) => t)
}
async function Bd({
	positionId: n,
	user_address: t,
	token0: s,
	token1: r,
	signer: o,
	provider: a,
	token0ExpectedOwed: i,
	token1ExpectedOwed: l,
	contract: d
}) {
	const m = pn.fromRawAmount(s, i.toString()),
		f = pn.fromRawAmount(r, l.toString()),
		p = {
			tokenId: n,
			expectedCurrencyOwed0: m,
			expectedCurrencyOwed1: f,
			recipient: t
		},
		{
			calldata: x,
			value: h
		} = xo.collectCallParameters(p);
	return en(a, o, d, x, {
		value: BigInt(h)
	})
}
const Jt = async (n, t, s, r, o, a, i) => {
	try {
		return n.call("marq_recordOkuTelemetry", [t, s, r, o, a, i])
	} catch (l) {
		const d = l;
		throw window.log.log(l), new Error(d.message)
	}
}, $d = ({
	onClick: n
}) => {
	const [t, s] = c.useState(!1);
	return e.jsx("button", {
		onClick: n,
		onMouseEnter: () => s(!0),
		onMouseLeave: () => s(!1),
		className: "rounded-[8px] flex items-center h-[38px] justify-center",
		style: {
			backgroundColor: t ? De(u.blue[400]) : u.blue[400]
		},
		children: e.jsx(ee, {
			weight: P.SEMIBOLD,
			children: "Remove all liquidity"
		})
	})
}, Hd = ({
	onClick: n,
	position: t
}) => {
	const {
		currentChain: s
	} = D(), [r, o] = c.useState(), [a, i] = c.useState();
	return c.useEffect(() => {
		var m, f;
		const l = ke((m = t.position_pool_data) == null ? void 0 : m.token0, s),
			d = ke((f = t.position_pool_data) == null ? void 0 : f.token1, s);
		o(l), i(d)
	}, [t]), e.jsxs("div", {
		className: "flex flex-col w-[285px] h-[197px] p-3 border-[1px] rounded-[15px] justify-between",
		style: {
			backgroundColor: u.gray.dark,
			borderColor: u.gray[800]
		},
		children: [e.jsx("div", {
			className: "flex flex-row justify-between",
			children: e.jsx(ee, {
				weight: P.SEMIBOLD,
				children: "Close Position"
			})
		}), e.jsxs("div", {
			className: "flex flex-col gap-3 px-4 py-3 rounded-[13px]",
			style: {
				backgroundColor: u.gray[800],
				borderColor: u.gray[700]
			},
			children: [e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs("div", {
					className: "flex flex-row gap-2 items-center",
					children: [e.jsx(xe, {
						tokenSymbol: t.position_pool_data.token0_symbol,
						logoUrl: r,
						size: 12
					}), e.jsx(O, {
						children: R(t.position_pool_data.token0, t.position_pool_data.token0_symbol, s)
					})]
				}), e.jsxs(O, {
					children: [e.jsx(L, {
						num: Number(ge(BigInt(t.current_position_values.amount0_current), t.position_pool_data.token0_decimals))
					}), R(t.position_pool_data.token0, t.position_pool_data.token0_symbol, s)]
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs("div", {
					className: "flex flex-row gap-2 items-center",
					children: [e.jsx(xe, {
						tokenSymbol: t.position_pool_data.token1_symbol,
						logoUrl: a,
						size: 12
					}), e.jsx(O, {
						children: R(t.position_pool_data.token1, t.position_pool_data.token1_symbol, s)
					})]
				}), e.jsxs(O, {
					children: [e.jsx(L, {
						num: Number(ge(BigInt(t.current_position_values.amount1_current), t.position_pool_data.token1_decimals))
					}), R(t.position_pool_data.token1, t.position_pool_data.token1_symbol, s)]
				})]
			})]
		}), e.jsx($d, {
			onClick: n
		})]
	})
}, Vd = ({
	onClaim: n,
	position: t
}) => {
	var l, d, m, f;
	const [s, r] = c.useState(), [o, a] = c.useState(), {
		currentChain: i
	} = D();
	return c.useEffect(() => {
		var h, y;
		const p = ke((h = t.position_pool_data) == null ? void 0 : h.token0, i),
			x = ke((y = t.position_pool_data) == null ? void 0 : y.token1, i);
		r(p), a(x)
	}, [t]), e.jsxs("div", {
		className: "flex flex-col w-[285px] h-[197px] p-3 border-[1px] rounded-[15px] justify-between",
		style: {
			backgroundColor: u.gray.dark,
			borderColor: u.gray[800]
		},
		children: [e.jsx("div", {
			className: "flex flex-row justify-between",
			children: e.jsx(ee, {
				weight: P.SEMIBOLD,
				children: "Claim fees"
			})
		}), e.jsxs("div", {
			className: "flex flex-col gap-3 px-4 py-3 rounded-[13px]",
			style: {
				backgroundColor: u.gray[800],
				borderColor: u.gray[700]
			},
			children: [e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs("div", {
					className: "flex flex-row gap-2 items-center",
					children: [e.jsx(xe, {
						tokenSymbol: t.position_pool_data.token0_symbol,
						logoUrl: s,
						size: 12
					}), e.jsx("div", {
						children: e.jsxs(O, {
							children: ["Pool", R(t.position_pool_data.token0, (l = t.position_pool_data) == null ? void 0 : l.token0_symbol, i)]
						})
					})]
				}), e.jsxs(O, {
					children: [e.jsx(L, {
						num: Number(ge(BigInt(t.current_fee_info.token0FeesUncollected), t.position_pool_data.token0_decimals))
					}), R(t.position_pool_data.token0, (d = t.position_pool_data) == null ? void 0 : d.token0_symbol, i)]
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs("div", {
					className: "flex flex-row gap-2 items-center",
					children: [e.jsx(xe, {
						tokenSymbol: t.position_pool_data.token1_symbol,
						logoUrl: o,
						size: 12
					}), e.jsxs(O, {
						children: ["Pool", R(t.position_pool_data.token1, (m = t.position_pool_data) == null ? void 0 : m.token1_symbol, i)]
					})]
				}), e.jsxs(O, {
					children: [e.jsx(L, {
						num: Number(ge(BigInt(t.current_fee_info.token1FeesUncollected), t.position_pool_data.token1_decimals))
					}), R(t.position_pool_data.token1, (f = t.position_pool_data) == null ? void 0 : f.token1_symbol, i)]
				})]
			})]
		}), e.jsx("button", {
			className: "w-full text-white font-semibold h-[38px] flex items-center justify-center rounded-[8px] bg-blue-400 hover:bg-blue-800",
			onClick: n,
			children: "Claim All Fees"
		})]
	})
};

function zd({
	setShowModal: n,
	showModal: t,
	position: s
}) {
	const {
		features: {
			Telemetry: r
		}
	} = Te(), {
		telemetryRpc: o
	} = bn(), {
		currentChain: a,
		currentChainInfo: i
	} = D(), {
		signer: l,
		provider: d
	} = kt(), {
		address: m
	} = we(), {
		token0: f,
		token1: p
	} = oe(), {
		setShowTransactionsModal: x,
		setTransactionContent: h
	} = Tt(), {
		getAndSetCurrentPositions: y
	} = Vt(), [b] = c.useState(), [g, w] = c.useState(!1), C = async () => {
		n(!1);
		try {
			if (!d || !s || !s.tokenId || !s.total_collect_amounts || !m || !l) return;
			x(!0);
			const k = await Bd({
				provider: d,
				positionId: s.tokenId,
				signer: l,
				token0: f,
				token1: p,
				token0ExpectedOwed: _s,
				token1ExpectedOwed: _s,
				user_address: m,
				contract: i.contracts.nftManager.address
			});
			h({
				state: "PENDING",
				message: "Claiming fees",
				transaction: k
			}), w(!0);
			const T = await d.waitForTransactionReceipt({
				hash: k
			});
			r.enabled && await Jt(o, a, "order", "claim_fees", m, T.transactionHash, {}), Ke("claim_fees", {
				chain: i.name,
				position: s.tokenId,
				transaction: T.transactionHash
			}), w(!1), h({
				state: "SUCCESSFUL",
				message: "Fees claimed",
				transaction: T.transactionHash
			}), setTimeout(() => {
				y(m)
			}, 5e3)
		} catch (k) {
			w(!1);
			const T = k;
			window.log.log(T), h({
				state: "ERROR",
				message: "Error claiming fees"
			})
		}
	};
	return e.jsxs("div", {
		children: [g && b === void 0 && e.jsx(Wo, {}), e.jsx(tn, {
			showModal: t,
			onClose: () => n(!1),
			showOverlay: !0,
			showCloseButton: !0,
			children: e.jsx(Vd, {
				onClaim: C,
				position: s
			})
		})]
	})
}

function Wd(n, t) {
	return `/${t.replace(" ","").toLowerCase()}/liquidity/${n}`
}

function Gd(n) {
	return `/${n.replace(" ","").toLowerCase()}/order`
}

function na(n) {
	const t = n.pathname.split("/")[1] === void 0 ? "" : n.pathname.split("/")[1],
		s = n.pathname.split("/")[2] === void 0 ? "" : n.pathname.split("/")[2],
		r = n.pathname.split("/")[3] === void 0 ? "" : n.pathname.split("/")[3],
		o = n.state;
	return {
		pageParam: t,
		chainParam: s,
		poolParam: r,
		state: o
	}
}
async function sa({
	positionId: n,
	user_address: t,
	contract: s,
	provider: r,
	signer: o,
	removePercent: a = 100
}) {
	let d = (await jt({
		address: s,
		abi: Rt,
		client: {
			public: r,
			wallet: o
		}
	}).read.positions([BigInt(n)]))[7];
	a < 100 && (d = d * BigInt(Math.round(a)) / 100n);
	const m = mt({
			abi: Rt,
			functionName: "decreaseLiquidity",
			args: [{
				tokenId: BigInt(n),
				liquidity: d,
				amount0Min: 0n,
				amount1Min: 0n,
				deadline: BigInt(Math.floor(Date.now() / 1e3) + 60 * 20)
			}]
		}),
		f = mt({
			abi: Rt,
			functionName: "collect",
			args: [{
				tokenId: BigInt(n),
				recipient: t,
				amount0Max: BigInt("0xffffffffffffffffffffffffffffffff"),
				amount1Max: BigInt("0xffffffffffffffffffffffffffffffff")
			}]
		});
	return en(r, o, s, mt({
		abi: Rt,
		functionName: "multicall",
		args: [
			[m, f]
		]
	}))
}
const qd = sa;

function Yd({
	setShowModal: n,
	showModal: t,
	position: s
}) {
	const [r, o] = c.useState(!1), [a] = c.useState(), {
		currentChain: i
	} = D(), {
		currentChainInfo: l
	} = D(), {
		setShowTransactionsModal: d,
		setTransactionContent: m
	} = Tt(), f = Kt(), {
		pageParam: p
	} = na(f), {
		features: {
			Telemetry: x
		}
	} = Te(), {
		telemetryRpc: h
	} = bn(), {
		getAndSetCurrentPositions: y
	} = Vt(), {
		signer: b,
		provider: g
	} = kt(), w = async () => {
		if (n(!1), d(!0), !!(g && b)) try {
			const C = await qd({
				positionId: s.tokenId,
				user_address: s.user,
				contract: l.contracts.nftManager.address,
				provider: g,
				signer: b
			});
			m({
				transaction: C,
				state: "PENDING",
				message: "Closing your position"
			}), o(!0);
			const k = await g.waitForTransactionReceipt({
				hash: C
			});
			o(!1), x.enabled && await Jt(h, i, p, "close_position", s.user, k.transactionHash, {}), Ke("close_position", {
				chain: l.name,
				position: s.tokenId,
				transaction: k.transactionHash
			}), o(!1), m({
				state: "SUCCESSFUL",
				message: "Your position has been closed",
				transaction: k.transactionHash
			}), setTimeout(() => {
				y(s.user)
			}, 5e3)
		} catch (C) {
			window.log.error(C), o(!1), m({
				state: "ERROR",
				message: "Your position could not be closed"
			})
		}
	};
	return e.jsxs("div", {
		children: [r && a === void 0 && e.jsx(Wo, {}), e.jsx(tn, {
			showModal: t,
			onClose: () => n(!1),
			showOverlay: !0,
			showCloseButton: !0,
			children: e.jsx(Hd, {
				onClick: w,
				position: s
			})
		})]
	})
}

function Xd({
	position: n
}) {
	const {
		features: t
	} = Te(), [s, r] = c.useState(!1), [o, a] = c.useState(!1), [i, l] = c.useState(!1), {
		refs: d,
		floatingStyles: m,
		context: f
	} = Ce({
		whileElementsMounted: Ie,
		open: i,
		onOpenChange: l,
		middleware: [es(), ho()],
		placement: "bottom-end"
	}), {
		styles: p
	} = Ae(f, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), x = Le(f), h = Pe(f), {
		getReferenceProps: y,
		getFloatingProps: b
	} = Ne([h, x]), {
		setHighlightBounds: g
	} = Ct(), {
		currentChainInfo: w
	} = D(), {
		setEditPosition: C,
		setPosition: k,
		setInputToken0: T,
		setInputToken1: E,
		setSlidePercent: N,
		setLastInput: S
	} = Nt(), G = hn(), _ = () => {
		a(!0), l(!1)
	}, v = () => {
		r(!0), l(!1)
	}, I = () => {
		T(""), E(""), N("0"), S(""), G(`/${w.internalName}/liquidity/${n.pool}/${n.tokenId}`), C(!0), k(n), g({
			lower: n.tickLower,
			upper: n.tickUpper
		}), l(!1)
	};
	return e.jsxs(e.Fragment, {
		children: [e.jsx("div", {
			ref: d.setReference,
			...y(),
			className: "gap-1 text-white text-xs font-semibold stroke-gray-400 hover:stroke-gray-100 rounded-lg cursor-pointer px-2 py-1  w-fit",
			children: e.jsx(ti, {
				width: 12,
				className: "m-0 "
			})
		}), i && e.jsx("div", {
			className: " mt-1",
			style: {
				...m
			},
			...b(),
			ref: d.setFloating,
			children: e.jsx("div", {
				style: p,
				className: "flex flex-col bg-gray-800 border-[1px] border-gray-700 rounded-lg",
				children: e.jsx(Kd, {
					onClosePosition: v,
					onClaim: _,
					onEdit: I,
					isClaimDisabled: !1,
					isEditDisabled: n.tokenId === "0",
					isCloseDisabled: n.current_liquidity === "0x0" || n.tokenId === "0",
					currentChainInfo: w,
					position: n,
					features: t
				})
			})
		}), e.jsx(zd, {
			showModal: o,
			setShowModal: a,
			position: n
		}), e.jsx(Yd, {
			showModal: s,
			setShowModal: r,
			position: n
		})]
	})
}
const Kd = n => {
	const {
		onClosePosition: t,
		onClaim: s,
		onEdit: r,
		isCloseDisabled: o,
		isClaimDisabled: a,
		isEditDisabled: i,
		currentChainInfo: l,
		position: d,
		features: m
	} = n;
	return e.jsxs(e.Fragment, {
		children: [e.jsx("button", {
			className: "pt-3 pb-2 px-3 hover:bg-gray-drophover text-start rounded-t-lg",
			children: e.jsx("a", {
				href: fn("tx", d.starting_amounts.mint_tx, l.id),
				target: "_blank",
				rel: "noreferrer",
				children: e.jsx(j, {
					color: u.blue[400],
					children: Kn(l.id)
				})
			})
		}), e.jsx("button", {
			className: "pt-3 pb-2 px-3 hover:bg-hoverbackground text-start rounded-t-lg",
			children: e.jsx("a", {
				href: `${m.Analytics.url}${l.internalName}/position/${d.tokenId}`,
				target: "_blank",
				rel: "noreferrer",
				children: e.jsx(j, {
					color: u.blue[400],
					children: "Analytics"
				})
			})
		}), e.jsxs("button", {
			className: `flex flex-row w-full justify-between px-3 pt-3 ${i?"opacity-40":""} pb-2 hover:bg-gray-drophover gap-x-3`,
			onClick: r,
			disabled: i,
			children: [e.jsx(j, {
				children: "Edit Position"
			}), e.jsx(ni, {
				width: 12,
				fill: u.gray[200]
			})]
		}), e.jsxs("button", {
			className: `flex flex-row w-full justify-between px-3 py-2 ${a?"opacity-40":""}  hover:bg-gray-drophover`,
			disabled: a,
			onClick: s,
			children: [e.jsx(j, {
				children: "Claim Fees"
			}), e.jsx(si, {
				width: 12,
				fill: u.gray[200]
			})]
		}), e.jsx("button", {
			className: `flex flex-row w-full justify-between px-3 pb-3 pt-2  ${o?"opacity-40":""} hover:bg-gray-drophover rounded-b-lg`,
			disabled: o,
			onClick: t,
			children: e.jsx(j, {
				children: "Close"
			})
		})]
	})
};

function Zd(n) {
	const {
		currentPrice: t,
		rangeLower: s,
		rangeUpper: r,
		isClosed: o
	} = n, a = 98, i = 8, l = 1, d = .2, [m, f] = s < r ? [s, r] : [r, s], {
		barStartLocation: p,
		barEndLocation: x,
		currentValueLocation: h
	} = Qd(m, f, t, a, d), y = x - p, b = a - p;
	return e.jsxs("div", {
		className: "flex items-center h-4 overflowX  relative",
		style: {
			width: a
		},
		children: [e.jsx("div", {
			className: "absolute ",
			style: {
				height: i,
				width: a,
				backgroundColor: u.blue[800],
				borderRadius: l,
				borderColor: u.blue[600],
				borderWidth: " 0.5px",
				borderStyle: "solid",
				overflowX: "hidden"
			}
		}), e.jsx("div", {
			className: "absolute ",
			style: {
				height: i - 2,
				maxWidth: b,
				width: y >= a ? b : y,
				marginLeft: p,
				backgroundColor: o ? u.gray[700] : u.blue[500]
			}
		}), e.jsx("div", {
			className: "absolute h-3 w-[1.1px] bg-gray-50",
			style: {
				marginLeft: h
			}
		})]
	})
}
const Qd = (n, t, s, r, o) => n >= s ? fs(n, t, s, r, .25, o) : t <= s ? fs(n, t, s, r, .75, o) : fs(n, t, s, r, .5, o),
	fs = (n, t, s, r, o, a) => {
		const i = (1 - o) / o,
			l = i > 1 ? 1 : i,
			d = i > 1 ? 1 / i : 1,
			m = Math.abs(t - s),
			f = Math.abs(s - n),
			p = m > f ? m : f,
			x = (1 + a) * p * d,
			h = (1 + a) * p * l,
			y = s - x,
			g = s + h - y,
			w = (n - y) / g * r,
			C = (t - y) / g * r,
			k = (s - y) / g * r;
		return {
			barStartLocation: w,
			barEndLocation: C,
			currentValueLocation: k
		}
	},
	an = "...",
	Jd = ({
		totalCount: n,
		pageSize: t,
		siblingCount: s = 1,
		currentPage: r
	}) => c.useMemo(() => {
		const a = Math.ceil(n / t);
		if (s + 5 >= a) return On(1, a);
		const l = Math.max(r - s, 1),
			d = Math.min(r + s, a),
			m = l > 2,
			f = d < a - 2,
			p = 1,
			x = a;
		if (!m && f) {
			const h = 3 + 2 * s;
			return [...On(1, h), an, a]
		}
		if (m && !f) {
			const h = 3 + 2 * s,
				y = On(a - h + 1, a);
			return [p, an, ...y]
		}
		if (m && f) {
			const h = On(l, d);
			return [p, an, ...h, an, x]
		}
	}, [n, t, s, r]),
	On = (n, t) => {
		const s = t - n + 1;
		return Array.from({
			length: s
		}, (r, o) => o + n)
	},
	ra = n => {
		const {
			onPageChange: t,
			totalCount: s,
			siblingCount: r = 1,
			currentPage: o,
			pageSize: a
		} = n, i = Jd({
			currentPage: o,
			totalCount: s,
			siblingCount: r,
			pageSize: a
		});
		if (o === 0 || i && i.length < 2) return null;
		const l = () => {
				t(o + 1)
			},
			d = () => {
				t(o - 1)
			},
			m = i && i[i.length - 1];
		return e.jsxs("div", {
			className: "flex justify-center gap-8 m-4",
			children: [e.jsx("button", {
				disabled: o === 1,
				onClick: d,
				children: e.jsx(ri, {
					width: 14,
					color: u.blue[400]
				})
			}), i && i.map((f, p) => f === an ? e.jsx("span", {
				children: an
			}, p) : e.jsx("button", {
				className: `${f===o?"text-white bg-gray-700":"text-gray-300"} hover:text-white rounded-md w-6 h-6`,
				onClick: () => t(Number(f)),
				children: e.jsx("p", {
					className: "text-sm",
					children: f
				})
			}, `pageCaps-${p}`)), e.jsx("button", {
				disabled: o === m,
				onClick: l,
				children: e.jsx(oi, {
					width: 14,
					color: u.blue[400]
				})
			})]
		})
	},
	eu = "https://assets.oku.trade/search.svg";

function oa(n) {
	const {
		onChange: t,
		width: s = "100%",
		value: r
	} = n, o = s, a = 32, i = he({
		base: "8px",
		sm: "16px"
	}), [l, d] = c.useState(!1);
	return e.jsx(Ye, {
		id: "Search Dropdown Input",
		render: () => e.jsx("input", {
			className: "flex flex-1 bg-gray-800 placeholder:text-gray-500 focus:outline-0 placeholder:text-[12px] placeholder:font-normal rounded-2xl border-[1px] text-white",
			style: {
				width: o,
				height: a,
				borderColor: l ? u.blue.vibrant : u.gray[600],
				paddingLeft: i,
				backgroundImage: l || r !== "" ? "" : `url(${eu})`,
				backgroundSize: "12px",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "10px center"
			},
			onFocus: () => {
				d(!0)
			},
			onBlur: () => {
				d(!1)
			},
			value: r,
			onChange: m => t(m.target.value)
		})
	})
}
const tu = ({
		token: n,
		setToken: t
	}) => e.jsxs("button", {
		className: "flex p-2 gap-x-2 cursor-pointer hover:bg-gray-700 w-full",
		onClick: () => t(n),
		children: [e.jsx("div", {
			className: "mt-1",
			children: e.jsx(xe, {
				logoUrl: n.logoURI,
				tokenSymbol: n.symbol,
				size: 14
			})
		}), e.jsxs("div", {
			className: "flex flex-col gap-y-1 items-start",
			children: [e.jsx(O, {
				color: u.gray[100],
				children: n.name
			}), e.jsx(st, {
				color: u.gray[400],
				children: n.symbol
			})]
		})]
	}),
	nu = ({
		searchResults: n,
		setToken: t
	}) => e.jsx(ai, {
		height: 290,
		itemCount: n.length,
		itemSize: 50,
		width: "100%",
		children: ({
			index: s,
			style: r
		}) => e.jsx("div", {
			style: r,
			children: e.jsx(tu, {
				token: n[s],
				setToken: t
			})
		})
	});

function Qs(n) {
	const {
		token: t,
		setToken: s,
		isToken0: r
	} = n, [o, a] = c.useState(!1), [i, l] = c.useState(!1), {
		refs: d,
		floatingStyles: m,
		context: f
	} = Ce({
		whileElementsMounted: Ie,
		open: i,
		onOpenChange: l,
		middleware: [es()],
		placement: "bottom-end"
	}), {
		styles: p
	} = Ae(f, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), x = Le(f), h = Pe(f), {
		getReferenceProps: y,
		getFloatingProps: b
	} = Ne([h, x]), g = () => {
		a(!1), l(!1)
	}, {
		currentChain: w
	} = D(), [C, k] = c.useState(void 0);
	return c.useEffect(() => {
		const T = zs.tokens.filter(({
			chainId: E
		}) => E.toString().toLowerCase() === w.toString().toLowerCase());
		k(T)
	}, [w]), e.jsx(e.Fragment, {
		children: e.jsxs("div", {
			className: "flex flex-col  items-end gap-2",
			children: [e.jsx("div", {
				ref: d.setReference,
				...y(),
				children: e.jsx(su, {
					tokenAddress: t == null ? void 0 : t.address,
					tokenSym: t == null ? void 0 : t.symbol
				})
			}), i && e.jsx("div", {
				className: "z-10 mt-1 ml-2",
				style: {
					...m
				},
				...b(),
				ref: d.setFloating,
				children: e.jsx("div", {
					style: p,
					children: e.jsx(ru, {
						defaultList: C,
						onClose: g,
						setToken: s,
						isExpandedDropdown: o,
						setIsExpandedDropdown: a,
						isToken0: r,
						setIsOpen: l
					})
				})
			})]
		})
	})
}
const su = n => {
		const {
			tokenAddress: t,
			tokenSym: s
		} = n, {
			currentChainInfo: r
		} = D(), o = t ? ke(t, r.id) : "";
		return t !== void 0 ? e.jsx(e.Fragment, {
			children: e.jsxs("button", {
				className: "flex flex-row rounded-[6px] h-fit w-fit p-1.5 items-center justify-center bg-gray-700 ",
				children: [e.jsx(xe, {
					logoUrl: o,
					tokenSymbol: s,
					size: 16
				}), e.jsxs("div", {
					className: "flex flex-row gap-2 ml-1",
					children: [e.jsx(O, {
						children: s
					}), e.jsx(Tn, {
						color: u.gray[50],
						width: 10
					})]
				})]
			})
		}) : e.jsxs("button", {
			className: "flex flex-row rounded-[8px] h-fit gap-x-2 w-fit py-2 px-2 items-center justify-center border border-gray-700 ",
			children: [e.jsx(O, {
				children: "Tokens"
			}), e.jsx(Tn, {
				color: u.gray[50],
				width: 10
			})]
		})
	},
	ru = n => {
		const {
			isExpandedDropdown: t,
			setIsExpandedDropdown: s,
			setToken: r,
			onClose: o,
			isToken0: a,
			defaultList: i,
			setIsOpen: l
		} = n;
		return e.jsx("div", {
			className: "z-[20] relative h-fit bg-gray-800 border-[1px] border-gray-700 rounded-xl w-full",
			children: e.jsx(iu, {
				defaultList: i,
				isExpandedDropdown: t,
				setIsExpandedDropdown: s,
				setToken: r,
				onClose: o,
				isToken0: a,
				setIsOpen: l
			})
		})
	},
	ou = n => {
		const {
			currentChainInfo: t
		} = D(), {
			setToken: s,
			onClose: r
		} = n, o = t.tokenList.slice(0, 5).map(i => ({
			...i
		})), a = t.nativeCurrency;
		return o.push({
			address: se,
			symbol: a ? R(se, a.symbol, t.id) : ""
		}), e.jsx("div", {
			className: "flex flex-row w-full flex-wrap gap-2 mt-2 justify-center",
			children: o && o.length > 0 && o.map(i => {
				const l = ke(i.address, t.id),
					d = R(i.address, i.symbol, t.id);
				return e.jsx(au, {
					tokenLogo: l,
					tokenSymbol: d,
					onClick: () => {
						s(ze(i.address, t.id)), r()
					}
				}, i.address)
			})
		})
	},
	au = n => {
		const {
			tokenLogo: t,
			tokenSymbol: s,
			onClick: r
		} = n;
		return e.jsxs("button", {
			className: "p-1 hover:bg-gray-700 w-fit border-[1px] rounded-[6px] border-gray-600 mr-1 flex flex-row gap-1 items-center justify-center",
			onClick: r,
			children: [e.jsx(xe, {
				tokenSymbol: s,
				logoUrl: t,
				size: 13
			}), e.jsx(O, {
				children: s
			})]
		})
	},
	iu = n => {
		const {
			isToken0: t,
			onClose: s,
			defaultList: r,
			setIsOpen: o,
			setToken: a
		} = n, [i, l] = c.useState(""), {
			currentChain: d
		} = D(), [m, f] = c.useState(r), p = g => {
			l(g), g.length >= 2 ? f(lu(g, zs.tokens, d)) : f(r)
		}, x = hn(), {
			token0: h,
			token1: y
		} = gn(), b = g => {
			a ? a(g) : y && h && x(t ? `../${g.address}/${y.address}` : `../${h.address}/${g.address}`), o(!1)
		};
		return e.jsxs("div", {
			className: "w-full",
			children: [e.jsxs("div", {
				className: "flex flex-row gap-2 p-2 justify-between",
				children: [e.jsx(j, {
					children: "Select Token"
				}), e.jsxs("div", {
					className: "flex items-center gap-x-3",
					children: [a && e.jsx("button", {
						onClick: () => {
							a(void 0), o(!1)
						},
						className: "text-blue-400 hover:text-blue-500",
						children: e.jsx(j, {
							color: "inherit",
							children: "Clear All"
						})
					}), e.jsx("button", {
						onClick: s,
						children: e.jsx(Sn, {
							color: De(u.white),
							width: 14
						})
					})]
				})]
			}), e.jsxs("div", {
				className: "my-2",
				children: [e.jsxs("div", {
					className: "px-2",
					children: [e.jsx(oa, {
						onChange: p,
						value: i
					}), e.jsx(ou, {
						setToken: b,
						onClose: s
					})]
				}), m ? e.jsxs(e.Fragment, {
					children: [e.jsx(Qt, {
						containerClasses: "mt-3 mx-2"
					}), e.jsx(nu, {
						searchResults: m,
						setToken: b
					})]
				}) : e.jsx(e.Fragment, {})]
			})]
		})
	},
	lu = (n, t, s) => t.filter(({
		name: o,
		symbol: a,
		address: i,
		chainId: l
	}) => l.toString().toLowerCase() === s.toString().toLowerCase() && (a.toLowerCase().includes(n.toLowerCase()) || o.toLowerCase().includes(n.toLowerCase()) || i.toLowerCase().includes(n.toLowerCase()))).sort((o, a) => {
		const i = o.symbol.toLowerCase().indexOf(n.toLowerCase()),
			l = o.name.toLowerCase().indexOf(n.toLowerCase()),
			d = o.address.toLowerCase().indexOf(n.toLowerCase()),
			m = i === -1 ? l === -1 ? d : l : i,
			f = a.symbol.toLowerCase().indexOf(n.toLowerCase()),
			p = a.name.toLowerCase().indexOf(n.toLowerCase()),
			x = a.address.toLowerCase().indexOf(n.toLowerCase());
		return m - (f === -1 ? p === -1 ? x : p : f)
	});

function cu({
	colorUp: n,
	colorDown: t
}) {
	return e.jsx("div", {
		className: "flex items-center justify-end w-5 h-6",
		children: e.jsxs("svg", {
			width: "15",
			height: "21",
			viewBox: "0 0 15 21",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: [e.jsx("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.5 13.6371L8.82349 11.1934L7.4682 12.4308L10.8224 15.4933C11.1966 15.835 11.8034 15.835 12.1776 15.4933L15.5318 12.4308L14.1765 11.1934L11.5 13.6371Z",
				fill: n
			}), e.jsx("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.5 7.36243L8.82349 9.80621L7.4682 8.56878L10.8224 5.50628C11.1966 5.16457 11.8034 5.16457 12.1776 5.50628L15.5318 8.56878L14.1765 9.80621L11.5 7.36243Z",
				fill: t
			})]
		})
	})
}
const Gt = ({
		title: n,
		classes: t
	}) => e.jsx(O, {
		weight: P.REGULAR,
		color: u.gray[300],
		className: t,
		children: n
	}),
	ut = n => {
		const {
			title: t,
			handleSortingToggle: s,
			sorting: r
		} = n, [o, a] = c.useState(!1);
		return e.jsxs("div", {
			className: "flex justify-end cursor-pointer ",
			onClick: s,
			onMouseEnter: () => a(!0),
			onMouseLeave: () => a(!1),
			children: [e.jsx("div", {
				className: "mt-1",
				children: e.jsx(O, {
					color: o ? u.gray[400] : u.gray[300],
					className: "whitespace-nowrap ",
					children: t
				})
			}), e.jsx(cu, {
				colorUp: r === _e.DESC ? u.blue[400] : o ? u.gray[400] : u.gray[300],
				colorDown: r === _e.ASC ? u.blue[400] : o ? u.gray[400] : u.gray[300]
			})]
		})
	},
	pt = (n, t, s, r) => {
		t === n ? s(o => o === _e.ASC ? _e.DESC : _e.ASC) : (window.log.log("Line: #14", "", t), r(t), s(_e.DESC))
	};

function du(n) {
	const {
		currentChain: t
	} = D(), {
		positions: s,
		columnVisibility: r
	} = n, [o, a] = c.useState(re.DATE), [i, l] = c.useState(_e.DESC), d = Bs(), m = c.useMemo(() => [...s].sort((h, y) => {
		if (o === re.DATE) return !(h != null && h.created_date) || !(y != null && y.created_date) ? 0 : i === _e.ASC ? h.created_date - y.created_date : y.created_date - h.created_date;
		if (o === re.BUY_AMOUNT) {
			const b = Number(ge(BigInt(h.current_position_values.amount0_current), h.position_pool_data.token0_decimals)),
				g = Number(ge(BigInt(y.current_position_values.amount0_current), y.position_pool_data.token0_decimals));
			return i === _e.ASC ? b - g : g - b
		}
		if (o === re.SELL_AMOUNT) {
			const b = Number(ge(BigInt(h.current_position_values.amount1_current), h.position_pool_data.token1_decimals)),
				g = Number(ge(BigInt(y.current_position_values.amount1_current), y.position_pool_data.token1_decimals));
			return i === _e.ASC ? b - g : g - b
		}
		if (o === re.PRICE) {
			if (!h.current_position_values.total_value_current_usd || !y.current_position_values.total_value_current_usd) return 0;
			const b = Number(h.current_position_values.total_value_current_usd),
				g = Number(y.current_position_values.total_value_current_usd);
			return i === _e.ASC ? b - g : g - b
		}
		if (o === re.FEES) {
			const b = Number(h.position_profit.collected_usd_fees + h.position_profit.uncollected_usd_fees || 0),
				g = Number(y.position_profit.collected_usd_fees + y.position_profit.uncollected_usd_fees || 0);
			return i === _e.ASC ? b - g : g - b
		}
		return 0
	}), [s, i, o]), f = c.useMemo(() => [d.accessor(x => x.starting_amounts.timestamp, {
		id: "date",
		header: () => e.jsx("div", {
			className: "flex justify-start pl-5",
			children: e.jsx(ut, {
				title: "Date",
				handleSortingToggle: () => pt(o, re.DATE, l, a),
				sorting: re.DATE === o ? i : void 0
			})
		}),
		cell: x => {
			const h = x.row.original.created_date;
			return e.jsx(O, {
				weight: P.REGULAR,
				children: Zs(h)
			})
		}
	}), d.accessor(x => x.position_pool_data.token0 + "/" + x.position_pool_data.token1, {
		id: "pair",
		header: () => e.jsx(Gt, {
			title: "Pair",
			classes: "text-left"
		}),
		cell: x => {
			const h = x.row.original;
			return e.jsxs("div", {
				className: "flex flex-row items-center gap-x-2 py-[7px]",
				children: [e.jsx(uu, {
					positionPoolInfo: h.position_pool_data,
					currentChain: t
				}), e.jsx(O, {
					children: (h.position_pool_data.fee / 1e4).toString().concat("%")
				})]
			})
		}
	}), d.accessor(x => x.tokenId !== "0" ? x.tokenId : "N/A", {
		id: "tokenid",
		header: () => e.jsx(Gt, {
			title: "Token ID",
			classes: "text-left whitespace-nowrap"
		}),
		cell: x => e.jsx("div", {
			className: "flex flex-row items-center gap-x-2",
			children: e.jsx(O, {
				weight: P.REGULAR,
				color: u.blue[400],
				children: x.getValue()
			})
		})
	}), d.accessor(x => x.position_pool_data.token1_price, {
		id: "range",
		header: () => e.jsx(Gt, {
			title: "Range",
			classes: "text-left"
		}),
		cell: x => {
			var y, b;
			const h = x.row.original;
			return e.jsx(Zd, {
				currentPrice: h.position_pool_data.token1_price,
				rangeLower: parseFloat((y = h.position_price_range) == null ? void 0 : y.inverse_lower_price),
				rangeUpper: parseFloat((b = h.position_price_range) == null ? void 0 : b.inverse_upper_price),
				isClosed: h.status === "closed"
			})
		}
	}), d.accessor(x => x.current_position_values.amount0_current, {
		id: "amount0",
		header: () => e.jsx("div", {
			className: "flex justify-end",
			children: e.jsx(ut, {
				title: "Token Amount",
				handleSortingToggle: () => pt(o, re.BUY_AMOUNT, l, a),
				sorting: re.BUY_AMOUNT === o ? i : void 0
			})
		}),
		cell: x => {
			const h = x.row.original,
				y = ge(BigInt(h.current_position_values.amount0_current), h.position_pool_data.token0_decimals);
			return e.jsx("div", {
				className: "flex justify-start flex-col text-end",
				children: e.jsxs(O, {
					weight: P.REGULAR,
					className: "text-ellipsis overflow-hidden whitespace-nowrap",
					children: [e.jsx(L, {
						num: Number(y)
					}), " ", R(h.position_pool_data.token0, R(h.position_pool_data.token0, h.position_pool_data.token0_symbol, t), t)]
				})
			})
		}
	}), d.accessor(x => x.current_position_values.amount1_current, {
		id: "amount1",
		header: () => e.jsx("div", {
			className: "flex justify-end",
			children: e.jsx(ut, {
				title: "Token Amount",
				handleSortingToggle: () => pt(o, re.SELL_AMOUNT, l, a),
				sorting: re.SELL_AMOUNT === o ? i : void 0
			})
		}),
		cell: x => {
			const h = x.row.original,
				y = ge(BigInt(h.current_position_values.amount1_current), h.position_pool_data.token1_decimals);
			return e.jsx("div", {
				className: "flex justify-start flex-col text-end",
				children: e.jsxs(O, {
					weight: P.REGULAR,
					className: "text-ellipsis overflow-hidden whitespace-nowrap",
					children: [e.jsx(L, {
						num: Number(y)
					}), " ", R(h.position_pool_data.token1, R(h.position_pool_data.token1, h.position_pool_data.token1_symbol, t), t)]
				})
			})
		}
	}), d.accessor(x => x.current_position_values.total_value_current_usd, {
		id: "value",
		header: () => e.jsx("div", {
			className: "flex justify-end",
			children: e.jsx(ut, {
				title: "Value",
				handleSortingToggle: () => pt(o, re.PRICE, l, a),
				sorting: re.PRICE === o ? i : void 0
			})
		}),
		cell: x => e.jsx("div", {
			className: "text-end",
			children: e.jsxs(O, {
				weight: P.REGULAR,
				children: ["$", e.jsx(L, {
					num: x.getValue()
				})]
			})
		})
	}), d.accessor(x => x.current_fee_info, {
		id: "fees",
		header: () => e.jsx("div", {
			className: "flex justify-end",
			children: e.jsx(ut, {
				title: "Fees",
				handleSortingToggle: () => pt(o, re.FEES, l, a),
				sorting: re.FEES === o ? i : void 0
			})
		}),
		cell: x => {
			const h = x.row.original;
			return e.jsx("div", {
				className: "text-end",
				children: e.jsxs(O, {
					weight: P.REGULAR,
					color: u.green[400],
					children: ["$", e.jsx(L, {
						num: h.position_profit.uncollected_usd_fees
					})]
				})
			})
		}
	}), d.accessor("status", {
		header: () => e.jsx(Gt, {
			title: "Status",
			classes: "text-left"
		}),
		cell: x => e.jsx(Pd, {
			status: x.getValue()
		})
	}), d.display({
		id: "control",
		header: "",
		cell: x => {
			const h = x.row.original;
			return e.jsx("div", {
				className: "flex justify-end w-fit m-auto",
				children: e.jsx(Xd, {
					position: h
				})
			})
		}
	})], [t, m]), p = vn({
		data: m,
		state: {
			columnVisibility: r
		},
		columns: f,
		getCoreRowModel: _n()
	});
	return e.jsxs("table", {
		className: "table-auto",
		children: [e.jsx("thead", {
			className: "bg-gray-900 border-t border-gray-800",
			children: p.getHeaderGroups().map(x => e.jsx("tr", {
				children: x.headers.map(h => e.jsx("th", {
					colSpan: h.colSpan,
					className: `py-3
                mx-3
                px-6
               ${(()=>{const y={tokenid:"",status:"pl-4",range:"pl-4",pair:"pl-4",date:"pl-0",control:"px-0"}[h.id];return y!==void 0?y:"pl-4"})()}
`,
					children: h.isPlaceholder ? null : un(h.column.columnDef.header, h.getContext())
				}, h.id))
			}, x.id))
		}), e.jsx("tbody", {
			children: p.getRowModel().rows.map(x => e.jsx("tr", {
				className: "border-y border-gray-800 odd:bg-gray-dark even:bg-gray-900 ",
				children: x.getVisibleCells().map(h => e.jsx("td", {
					className: `${(()=>{const y={tokenid:"",status:"pl-4",range:"pl-4",pair:"pl-4",date:"",control:"pl-0 pr-0"}[h.column.id];return y!==void 0?y:"pl-4"})()}
                px-6 py-3
                `,
					children: un(h.column.columnDef.cell, h.getContext())
				}, h.id))
			}, x.id))
		})]
	})
}

function As({
	positions: n,
	feeFilter: t,
	setFeeFilter: s,
	statusFilter: r,
	setStatusFilter: o,
	tokenFilter: a,
	setTokenFilter: i,
	pageSize: l = 5
}) {
	const [d, m] = c.useState(1), f = he({
		base: {
			date: !1,
			amount0: !1,
			amount1: !1,
			range: !1,
			status: !1,
			fees: !1,
			tokenid: !1
		},
		sm: {
			date: !1,
			amount0: !1,
			amount1: !1,
			range: !1,
			status: !1,
			tokenid: !1
		},
		md: {
			date: !1,
			amount0: !1,
			amount1: !1,
			range: !1,
			status: !0
		},
		lg: {
			amount0: !0,
			amount1: !0,
			range: !0,
			date: !1
		},
		xl: {
			date: !0
		}
	}), p = c.useMemo(() => {
		const x = (d - 1) * l,
			h = x + l;
		return n && n.slice(x, h) || []
	}, [d, n]);
	return e.jsxs("div", {
		className: "flex flex-col bg-gray-dark rounded-2xl border-[1px] border-gray-800 w-full",
		children: [e.jsxs("div", {
			className: "flex w-full h-fit justify-between items-center",
			children: [e.jsx(O, {
				weight: P.SEMIBOLD,
				className: " px-5 py-3",
				children: "Positions"
			}), e.jsxs("div", {
				className: "flex gap-x-2 p-3",
				children: [r && o && e.jsx(Is, {
					filter: r,
					setFilter: o,
					label: "Status",
					filterType: ln
				}), i && e.jsx("div", {
					className: "flex flex-row gap-2 items-center",
					children: e.jsx(Qs, {
						isToken0: !0,
						setToken: i,
						token: a
					})
				}), t && s && e.jsx(Is, {
					setFilter: s,
					filter: t,
					label: "Fee Tier",
					filterType: kn
				})]
			})]
		}), e.jsxs("div", {
			className: "flex flex-col w-full justify-between h-full",
			children: [e.jsx(du, {
				positions: p,
				columnVisibility: f
			}), e.jsx(ra, {
				currentPage: d,
				totalCount: (n == null ? void 0 : n.length) || 0,
				pageSize: l,
				onPageChange: x => m(x)
			})]
		})]
	})
}
const uu = ({
		positionPoolInfo: n,
		currentChain: t
	}) => e.jsxs("div", {
		className: "flex flex-row items-center w-fit gap-[6px]",
		children: [e.jsx(En, {
			token0LogoUrl: ke(n.token0, t),
			token0Symbol: R(n.token0, n.token0_symbol, t),
			token1LogoUrl: ke(n.token1, t),
			token1Symbol: R(n.token1, n.token1_symbol, t),
			size: 14
		}), e.jsxs("div", {
			className: "flex flex-row items-center ",
			children: [e.jsx(O, {
				children: `${R(n.token0,n.token0_symbol,t)}`
			}), e.jsx(O, {
				color: u.gray[400],
				children: `/${R(n.token1,n.token1_symbol,t)}`
			})]
		})]
	}),
	pu = n => {
		if (!n) return {};
		const t = Object.values(n).reduce((s, r) => s + r, 0);
		return Object.entries(n).reduce((s, [r, o]) => (s[r] = (o / t * 100).toFixed(2), s), {})
	},
	aa = 1e4,
	mu = n => {
		switch (n) {
			case 100:
				return "Very stable Pairs";
			case 500:
				return "Stable pairs";
			case 3e3:
				return "Standard";
			case 1e4:
				return "Exotic Pairs"
		}
	};

function fu() {
	const {
		poolSummary: n
	} = oe(), [t, s] = c.useState(void 0), [r, o] = c.useState(!1), {
		refs: a,
		floatingStyles: i,
		context: l
	} = Ce({
		whileElementsMounted: Ie,
		open: r,
		onOpenChange: o,
		middleware: [],
		placement: "bottom-end"
	}), {
		styles: d
	} = Ae(l, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), m = Le(l), f = Pe(l), {
		getReferenceProps: p,
		getFloatingProps: x
	} = Ne([f, m]), {
		data: h
	} = be("cush_search", [
		[n.t0, n.t1].join("/")
	]), {
		data: y
	} = be("cush_getFeeTiersPositionCount", [n.t0, n.t1]);
	return c.useEffect(() => {
		n && n.fee && s(n.fee)
	}, [n]), e.jsxs(e.Fragment, {
		children: [e.jsxs("div", {
			ref: a.setReference,
			...p(),
			className: "gap-1 outline text-white text-xs font-semibold outline-1 py-2 px-4 bg-gray-dark outline-gray-700 rounded-lg flex justify-between cursor-pointer items-center",
			children: [e.jsx(hu, {
				fee: t
			}), e.jsx(_t, {})]
		}), r && e.jsx("div", {
			className: "w-full mt-1",
			style: {
				...i
			},
			...x(),
			ref: a.setFloating,
			children: e.jsx("div", {
				style: d,
				className: "w-full flex flex-col bg-gray-800 border-[1px] border-gray-700 rounded-lg",
				children: e.jsx(xu, {
					pools: h == null ? void 0 : h.pools,
					setFee: s,
					feeTiers: y,
					setIsOpen: o
				})
			})
		})]
	})
}
const xu = ({
		pools: n,
		setFee: t,
		feeTiers: s,
		setIsOpen: r
	}) => {
		const o = pu(s);
		return e.jsx(e.Fragment, {
			children: n && n.sort((a, i) => a.fee - i.fee).map((a, i) => e.jsx(yu, {
				pool: a,
				setFee: t,
				feeTierPercentage: o[a.fee] || "0",
				setIsOpen: r
			}, i))
		})
	},
	hu = ({
		fee: n
	}) => e.jsx(j, {
		children: n ? (n / aa).toString().concat("% Fee tier") : "Loading..."
	}),
	yu = n => {
		const {
			pool: t,
			setFee: s,
			feeTierPercentage: r,
			setIsOpen: o
		} = n, a = hn(), {
			currentChainInfo: i
		} = D();
		return e.jsxs("div", {
			className: "text-white flex justify-start px-2 py-2 hover:bg-gray-drophover w-full cursor-pointer rounded-lg",
			onClick: () => {
				s(t.fee), a(Wd(t.address, i.internalName)), o(!1)
			},
			children: [e.jsx("div", {
				className: "w-[56px] flex flex-start",
				children: e.jsx(j, {
					weight: P.MEDIUM,
					children: (t.fee / aa).toString().concat("%")
				})
			}), e.jsxs("div", {
				className: "flex flex-row justify-between w-full",
				children: [e.jsx(j, {
					color: u.gray[500],
					children: mu(t.fee)
				}), e.jsxs(j, {
					color: u.blue[400],
					children: [r.concat("%"), " select"]
				})]
			})]
		})
	},
	gu = n => 1e3 * 60 * 60 * 24 * n,
	bu = n => n === 0 ? 0 : Math.floor(Date.now()) - 60 * 60 * 24 * 1e3 * n,
	wu = async (n, t) => {
		try {
			return n.call("cush_searchPoolsByList", [t])
		} catch (s) {
			const r = s;
			throw window.log.log(s), new Error(r.message)
		}
	}, ju = async (n, t) => {
		const s = {
			fee_tiers: [],
			result_offset: 0,
			sort_by: "tvl_usd",
			result_size: 20,
			sort_order: !1
		};
		try {
			return n.call("cush_search", [t, s])
		} catch (r) {
			const o = r;
			throw window.log.log(r), new Error(o.message)
		}
	}, vu = async (n, t) => {
		try {
			return await ju(n, t)
		} catch (s) {
			const r = s;
			throw window.log.error(r), new Error(r.message)
		}
	};

function _u({
	token: n,
	setToken: t
}) {
	const {
		currentChain: s
	} = D(), [r] = c.useState(new Map), {
		currentChainInfo: o
	} = D(), [a, i] = c.useState(!1), {
		refs: l,
		floatingStyles: d,
		context: m
	} = Ce({
		whileElementsMounted: Ie,
		open: a,
		onOpenChange: i,
		middleware: [],
		placement: "bottom-end"
	}), {
		styles: f
	} = Ae(m, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top right"
		}
	}), p = Le(m), x = Pe(m), {
		getReferenceProps: h,
		getFloatingProps: y
	} = Ne([x, p]);
	return r.set("Watch List", {
		symbol: "Watch List",
		logoURI: Fo
	}), c.useEffect(() => {
		ve[s].tokenList.map(async g => ze(g.address, s)).forEach(g => {
			g.then(w => {
				w.symbol && r.set(w.symbol, w)
			})
		})
	}, []), e.jsxs(e.Fragment, {
		children: [e.jsxs("div", {
			ref: l.setReference,
			...h(),
			className: "h-full flex gap-x-2 items-center justify-center bg-gray-900 outline outline-gray-600 outline-1 rounded-full cursor-pointer",
			children: [n !== "" && e.jsx(xe, {
				logoUrl: r.get(n).logoURI,
				tokenSymbol: n,
				size: 16
			}), n === "" ? e.jsx(j, {
				color: u.gray[400],
				children: "Select token"
			}) : e.jsx(j, {
				color: u.white,
				children: n
			}), e.jsx(_t, {})]
		}), a && e.jsx("div", {
			className: "bg-gray-800 z-10 border-[1px] border-gray-700 rounded-xl h-fit text-white  flex flex-col ",
			ref: l.setFloating,
			style: d,
			...y(),
			children: e.jsx("div", {
				style: {
					...f
				},
				children: [...r.keys()].map(b => {
					const g = r.get(b);
					return e.jsx(Tu, {
						token: g,
						setShowModal: i,
						setToken: t
					}, R(g.address, g.symbol, o.id))
				})
			})
		})]
	})
}
const Tu = n => {
		const {
			token: t,
			setShowModal: s,
			setToken: r
		} = n, {
			currentChainInfo: o
		} = D(), a = t.address ? R(t.address, t.symbol, o.id) : t.symbol;
		return e.jsxs("button", {
			className: "text-white hover:bg-gray-drophover bg-gray-800 flex gap-x-3 py-2 px-4 rounded-xl items-center w-full",
			onClick: () => {
				r(a), s(!1)
			},
			children: [e.jsx(xe, {
				tokenSymbol: a,
				logoUrl: t.logoURI,
				size: 24
			}), e.jsx(j, {
				children: a
			})]
		}, a)
	},
	ku = n => {
		const {
			t1_price: t,
			t0_price: s,
			is_preferred_token_order: r
		} = n;
		return r ? s : t
	},
	Tr = n => {
		const {
			pool: t,
			isStarred: s,
			togglePool: r
		} = n, {
			colors: o
		} = xt(), {
			currentChainInfo: a
		} = D(), i = t.is_preferred_token_order ? t.t0_change : t.t1_change, [l, d] = c.useState(!1), m = c.useRef(null);
		return c.useEffect(() => {
			const f = new IntersectionObserver(([p]) => {
				d(p.isIntersecting)
			}, {
				root: null,
				rootMargin: "0px",
				threshold: .8
			});
			return m.current && f.observe(m.current), () => {
				m.current && f.unobserve(m.current)
			}
		}, []), e.jsx("div", {
			ref: m,
			className: `duration-75 mb-1 transition-opacity ${l?"opacity-1":"opacity-0 "}`,
			children: e.jsxs(xn, {
				to: `../${t.address}`,
				relative: "path",
				className: "px-1 mx-1 rounded-[4px] flex flex-row items-center hover:bg-gray-800",
				style: ({
					isActive: f
				}) => ({
					backgroundColor: f ? u.gray[800] : void 0
				}),
				end: !0,
				children: [e.jsxs("div", {
					className: "flex flex-row w-full justify-between text-[12px] font-normal  py-1 ",
					children: [e.jsxs("div", {
						className: "flex flex-row flex-[35] whitespace-pre",
						children: [e.jsx(j, {
							color: "white",
							children: R(t.t0, t.t0_symbol, a.id)
						}), e.jsxs(j, {
							color: u.gray[400],
							children: ["/", R(t.t1, t.t1_symbol, a.id)]
						})]
					}), e.jsx("div", {
						className: "flex flex-[15] justify-end",
						children: e.jsxs(j, {
							color: u.gray[400],
							children: [t.fee / 1e4, "%"]
						})
					}), e.jsx("div", {
						className: "flex flex-[30] justify-end text-white text-xs",
						children: e.jsx(j, {
							children: e.jsx(L, {
								num: ku(t),
								singleLetterNotation: !0
							})
						})
					}), e.jsx("div", {
						className: "flex flex-[26] justify-center",
						children: e.jsxs(j, {
							color: i > 0 ? o.pos_color : i < 0 ? o.neg_color : "white",
							children: [i > 0 ? "+" : "-", e.jsx(L, {
								num: Math.abs(i * 100),
								showOnly2Digits: !0,
								smallNumberOn2Zeros: !0
							}), "%"]
						})
					})]
				}), e.jsx(ts, {
					onClick: () => r(t.address),
					isStarred: s
				})]
			})
		})
	},
	Cu = () => e.jsxs("div", {
		className: " px-2 flex flex-row w-full h-fit text-[12px] text-gray-500 font-normal",
		children: [e.jsx("div", {
			className: "flex flex-[35]",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Pool"
			})
		}), e.jsx("div", {
			className: "flex flex-[15] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Fee"
			})
		}), e.jsx("div", {
			className: "flex flex-[30] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Price"
			})
		}), e.jsx("div", {
			className: "flex flex-[26] flex-row gap-[2px] items-center justify-center",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Change"
			})
		}), e.jsx("div", {
			className: "flex flex-[7]"
		})]
	}),
	Nu = n => {
		const {
			token: t,
			searchResults: s,
			onClose: r
		} = n, {
			favoritePool: o,
			setFavoritePool: a
		} = oe(), {
			currentChain: i
		} = D(), [l, d] = c.useState(), [m, f] = c.useState([]), [p, x] = c.useState(rt(i)), {
			cushRpc: h
		} = D();
		c.useEffect(() => {
			const w = new Set([]);
			ve[i].tokenList.forEach(C => {
				const k = ze(C.address, i);
				w.add(k);
				const T = Array.from(w);
				f(T)
			})
		}, [i]);
		const {
			data: y
		} = be("cush_searchPoolsByList", [p]), {
			data: b
		} = be("cush_batchSearchAddresses", [m.map(w => w.address).filter(w => w.length !== 0), {
			fee_tiers: [],
			result_offset: 0,
			sort_by: "volume",
			result_size: 20,
			sort_order: !1
		}]);
		c.useEffect(() => {
			if (!y || !b) return;
			const w = {};
			w["Watch List"] = y.pools;
			for (const C in b) {
				const k = m.find(T => C.toLowerCase() === T.address.toLowerCase());
				k && k.symbol && (w[k.symbol.toLocaleUpperCase()] = b[C].pools)
			}
			d(w)
		}, [y, b]), c.useEffect(() => {
			const w = rt(i);
			x(w)
		}, [o, i]);
		const g = w => {
			if (p.includes(w)) {
				const C = qn("REMOVE", w, i);
				x(C), a(C)
			} else x(qn("ADD", w, i)), wu(h, rt(i)).then(C => {
				C.pools.sort(function (k, T) {
					return rt(i).indexOf(k.address) - rt(i).indexOf(T.address)
				}), d(k => ({
					...k,
					WATCH_LIST_TITLE: C.pools
				}))
			}).catch(C => {
				window.log.error(C)
			})
		};
		return e.jsxs("div", {
			className: "bg-gray-dark rounded-xl flex flex-col flex-1 gap-y-2 outline outline-1 outline-gray-800 pt-3 overflow-y-hidden ",
			children: [e.jsx(Cu, {}), e.jsx("div", {
				className: "overflow-y-scroll no-scrollbar overscroll-contain",
				children: t === "" ? s && s.pools.map(w => e.jsx(Tr, {
					pool: w,
					isStarred: p.includes(w.address),
					togglePool: g,
					onClose: r
				}, w.address)) : l && l[t] && l[t].map(w => e.jsx(Tr, {
					pool: w,
					isStarred: p.includes(w.address),
					togglePool: g,
					onClose: r
				}, w.address))
			})]
		})
	},
	Js = n => {
		const {
			onClose: t = () => {},
			isModal: s = !1
		} = n, [r, o] = c.useState("Watch List"), [a, i] = c.useState(void 0), [l, d] = c.useState(""), [m, f] = c.useState("Watch List"), {
			cushRpc: p,
			currentChain: x
		} = D();
		c.useEffect(() => {
			o("Watch List")
		}, [x]), c.useEffect(() => {
			r !== "" && (f(r), d(""))
		}, [r]), c.useEffect(() => {
			l !== "" ? o("") : l === "" && r === "" && o(m)
		}, [l]);
		const h = b => {
				d(b), vu(p, b).then(g => {
					g && g.pools.length > 0 ? i(g) : i(void 0)
				})
			},
			y = he({
				base: 0,
				sm: 1
			});
		return e.jsxs("div", {
			className: "flex flex-col gap-2 w-full flex-1 overflow-hidden ",
			style: {
				maxHeight: s ? y == 0 ? "100%" : "448px" : "100%",
				height: s ? "448px" : "100%"
			},
			children: [e.jsxs("div", {
				className: "flex flex-row gap-1",
				children: [e.jsx(oa, {
					onChange: h,
					value: l,
					width: "100%"
				}), e.jsx("div", {
					className: "w-[120px] pt-[1px]",
					children: e.jsx(_u, {
						token: r,
						setToken: o
					})
				})]
			}), e.jsx(Nu, {
				token: r,
				searchResults: a,
				onClose: t
			})]
		})
	},
	Ln = ({
		lines: n,
		random: t = !1
	}) => {
		const s = ["w-[50%]", "w-[60%]", "w-[70%]", "w-[80%]", "w-[90%]", "w-[100%]"],
			r = Array.from({
				length: n
			}, (o, a) => a).map(o => {
				const a = t ? s[Math.floor(Math.random() * s.length)] : "w-full";
				return e.jsx("div", {
					className: `h-2 rounded-full dark:bg-gray-800 ${a} my-3`
				}, o)
			});
		return e.jsxs("div", {
			role: "status",
			className: "animate-pulse px-2 w-full",
			children: [r, e.jsx("span", {
				className: "sr-only",
				children: "Loading..."
			})]
		})
	},
	Dt = ({
		classes: n
	}) => e.jsxs("div", {
		role: "status",
		className: `animate-pulse px-2 my-3 ${n}`,
		children: [e.jsx("div", {
			className: "h-2.5 rounded-full dark:bg-gray-800 w-full"
		}), e.jsx("span", {
			className: "sr-only",
			children: "Loading..."
		})]
	}),
	kr = ({
		copyText: n
	}) => {
		const [, t] = ii(), [s, r] = c.useState(!1), o = a => {
			a.stopPropagation(), t(n), r(!0), setTimeout(() => {
				r(!1)
			}, 1e3)
		};
		return e.jsx("div", {
			className: "flex items-center justify-center text-current w-3 h-3 text-inherit color-inherit hover:text-gray-600 relative transform transition duration-75 ease-in active:scale-90 z-10",
			onClick: o,
			children: s ? e.jsxs(e.Fragment, {
				children: [e.jsx("div", {
					className: "absolute left-0 top-5 border border-solid	 border-gray-800 p-1 bg-gray-900  text-sm rounded-md z-10 text-gray-300",
					children: "Copied!"
				}), e.jsx(li, {
					color: u.gray[50]
				})]
			}) : e.jsx(Su, {})
		})
	},
	Su = () => e.jsxs("svg", {
		width: "12",
		height: "12",
		viewBox: "0 0 12 12",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: [e.jsx("path", {
			d: "M8.15 1.15625H3.78C3.67259 1.15625 3.56957 1.19892 3.49362 1.27487C3.41767 1.35082 3.375 1.45384 3.375 1.56125V8.85625C3.375 8.96366 3.41767 9.06668 3.49362 9.14263C3.56957 9.21858 3.67259 9.26125 3.78 9.26125H9.375C9.42795 9.26125 9.48038 9.25074 9.52924 9.23033C9.5781 9.20992 9.62242 9.18001 9.65963 9.14233C9.69683 9.10466 9.72619 9.05997 9.746 9.01086C9.7658 8.96175 9.77566 8.9092 9.775 8.85625V2.79625",
			stroke: "currentColor",
			strokeWidth: "0.8",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), e.jsx("path", {
			d: "M2.21503 4.1375V10.0925C2.21558 10.1564 2.22915 10.2195 2.25493 10.278C2.2807 10.3365 2.31813 10.3891 2.36493 10.4326C2.41173 10.4761 2.46692 10.5097 2.52711 10.5311C2.58731 10.5526 2.65125 10.5616 2.71503 10.5575H7.30003M7.79503 2.7575C7.79503 2.86359 7.83717 2.96533 7.91218 3.04034C7.9872 3.11536 8.08894 3.1575 8.19503 3.1575H9.35003C9.45611 3.1575 9.55786 3.11536 9.63287 3.04034C9.70788 2.96533 9.75003 2.86359 9.75003 2.7575L8.19503 1.1875C8.08894 1.1875 7.9872 1.22964 7.91218 1.30466C7.83717 1.37967 7.79503 1.48141 7.79503 1.5875V2.7575Z",
			stroke: "currentColor",
			strokeWidth: "0.8",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});

function Eu(n) {
	const {
		showModal: t,
		setShowModal: s,
		children: r,
		offset: o = [0, 0, 0, 0],
		showOverlay: a = !0
	} = n;
	return e.jsx("div", {
		className: "z-50 absolute",
		children: t && e.jsxs("div", {
			className: "z-30 flex flex-1",
			children: [e.jsx(Ys, {
				onClose: () => s(!1),
				showOverlay: a
			}), e.jsx("div", {
				className: " h-fit  ml-auto mr-auto mb-auto mt-auto z-30 animate-slide-down",
				style: {
					right: o[0],
					left: o[1],
					top: o[2],
					bottom: o[3]
				},
				children: r
			})]
		})
	})
}
const Iu = ({
		modalContent: n,
		buttonContent: t,
		fullWidthButton: s,
		showCarot: r,
		buttonStyle: o,
		showModal: a,
		setShowModal: i
	}) => e.jsxs("div", {
		className: `${s?"w-full":""}`,
		children: [e.jsx(Lu, {
			onClick: () => i(!0),
			buttonContent: t,
			showCarot: r,
			buttonStyle: o
		}), e.jsx(Au, {
			showModal: a,
			setShowModal: i,
			width: "fit-content",
			children: n
		})]
	}),
	Au = ({
		children: n,
		showModal: t,
		setShowModal: s,
		width: r
	}) => e.jsx(Eu, {
		showModal: t,
		setShowModal: s,
		showOverlay: !1,
		children: e.jsx("div", {
			style: {
				width: r
			},
			children: n
		})
	}),
	Lu = ({
		buttonContent: n,
		onClick: t,
		showCarot: s = !0,
		buttonStyle: r = {}
	}) => {
		const {
			isMobile: o
		} = Ze();
		return e.jsxs("button", {
			className: "bg-gray-dark text-white w-full flex flex-row items-center text-[12px] font-medium justify-between",
			style: r,
			onClick: t,
			children: [n, s && e.jsx("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				strokeWidth: 2,
				stroke: "white",
				style: {
					width: o ? "12px" : "16px",
					height: o ? "9px" : "12px"
				},
				children: e.jsx("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
				})
			})]
		})
	};

function ia({
	showCopyIcon: n = !0
}) {
	const {
		token: t,
		token0: s,
		token1: r,
		poolSummary: o
	} = oe(), [a, i] = c.useState(!1), l = o && (o.fee / 1e4).toString();
	return s && r ? e.jsx(Iu, {
		showModal: a,
		setShowModal: i,
		buttonContent: e.jsx(Pu, {
			poolFee: l,
			token0Info: t.flipped ? r : s,
			token1Info: t.flipped ? s : r,
			showCopyIcon: n
		}),
		modalContent: e.jsx(tn, {
			showModal: a,
			onClose: () => i(!1),
			offsetLeft: 10,
			offsetTop: 90,
			children: e.jsx("div", {
				className: "p-2 rounded-xl text-white  flex flex-col flex-1  w-[400px] border-[1px]",
				style: {
					borderColor: u.gray[700],
					backgroundColor: u.gray.dark
				},
				children: e.jsx(Js, {
					onClose: () => i(!1),
					isModal: !0
				})
			})
		}),
		fullWidthModal: !0
	}) : e.jsx(Dt, {})
}
const Pu = ({
		token0Info: n,
		token1Info: t,
		poolFee: s,
		showCopyIcon: r = !0
	}) => e.jsx("span", {
		className: "h-fit w-fit",
		children: e.jsx(er, {
			poolFee: s,
			token0Info: n,
			token1Info: t,
			showCopyIcon: r
		})
	}),
	er = ({
		token0Info: n,
		token1Info: t,
		poolFee: s,
		showCopyIcon: r = !1
	}) => {
		const {
			currentChainInfo: o
		} = D();
		return n && t ? e.jsxs("h1", {
			className: "flex flex-row items-center w-fit",
			title: "Token Pair",
			children: [e.jsx("div", {
				className: "flex relative mr-1",
				children: e.jsx(En, {
					token0LogoUrl: n.logoURI,
					token0Symbol: R(n.address, n.symbol, o.id),
					token1LogoUrl: t.logoURI,
					token1Symbol: R(t.address, t.symbol, o.id)
				})
			}), e.jsxs("div", {
				className: "flex flex-row gap-1 items-center",
				children: [s && e.jsx("div", {
					className: "py-1",
					children: e.jsx("div", {
						className: "text-sm text-white",
						children: s + "%"
					})
				}), r ? e.jsxs(e.Fragment, {
					children: [e.jsxs("div", {
						className: "text-white font-semibold text-sm flex items-center gap-x-1",
						children: [R(n.address, n.symbol, o.id), " ", e.jsx(kr, {
							copyText: n.address
						})]
					}), e.jsx("div", {
						className: "text-gray-400 font-semibold text-sm flex items-center gap-x-1",
						children: "/"
					}), e.jsxs("div", {
						className: "text-gray-400 font-semibold text-sm flex items-center gap-x-1",
						children: [`${R(t.address,t.symbol,o.id)}`, e.jsx(kr, {
							copyText: t.address
						})]
					})]
				}) : e.jsxs(e.Fragment, {
					children: [e.jsx("div", {
						className: "text-white font-semibold text-sm",
						children: R(n.address, n.symbol, o.id)
					}), e.jsx("div", {
						className: "text-gray-400 font-semibold text-sm",
						children: "/"
					}), e.jsx("div", {
						className: "text-gray-400 font-semibold text-sm",
						children: `${R(t.address,t.symbol,o.id)}`
					})]
				})]
			})]
		}) : e.jsx(Dt, {})
	},
	Mu = ({
		token0Symbol: n,
		token1Symbol: t,
		token0Address: s,
		token1Address: r
	}) => {
		const {
			currentChainInfo: o
		} = D(), [a, i] = c.useState(), [l, d] = c.useState();
		return c.useEffect(() => {
			const m = ke(s, o.id),
				f = ke(r, o.id);
			i(m), d(f)
		}, [n, t]), a && l ? e.jsxs("div", {
			className: "flex flex-row items-center w-fit gap-[12px]",
			children: [e.jsx(En, {
				token0LogoUrl: a,
				token1LogoUrl: l,
				token0Symbol: n,
				token1Symbol: t
			}), e.jsxs("div", {
				className: "flex flex-row gap-1 items-center",
				children: [e.jsx(O, {
					children: n
				}), e.jsxs(O, {
					color: u.gray[400],
					children: ["/", t]
				})]
			})]
		}) : e.jsx(Dt, {})
	};

function la() {
	const {
		token0: n,
		token1: t,
		token: s,
		poolSummary: r
	} = oe(), [o, a] = c.useState(!1), {
		width: i
	} = yn(), [l, d] = c.useState(0), m = c.useRef(null);
	c.useEffect(() => {
		const p = m.current;
		return p && (p.addEventListener("touchstart", x => Nr(x, d)), p.addEventListener("touchend", x => Cr(x, l, a))), () => {
			p && (p.removeEventListener("touchstart", x => Nr(x, d)), p.removeEventListener("touchend", x => Cr(x, l, a)))
		}
	}, [l]);
	const f = r && (r.fee / 1e4).toString();
	return e.jsxs("div", {
		className: "z-30",
		style: {
			zIndex: o ? 100 : 0
		},
		ref: m,
		children: [e.jsx(Ru, {
			onClick: () => a(!0),
			poolFee: f,
			token0Info: s.flipped ? t : n,
			token1Info: s.flipped ? n : t
		}), e.jsx(tn, {
			showModal: o,
			onClose: () => a(!1),
			offsetLeft: 0,
			offsetTop: 0,
			children: e.jsxs("div", {
				className: "pt-4 px-2  text-white  flex flex-col  border-[1px] ",
				style: {
					borderColor: u.gray[700],
					backgroundColor: u.gray.dark,
					width: i,
					height: "100vh"
				},
				children: [e.jsxs("div", {
					className: "flex justify-between mb-3",
					children: [e.jsx(ee, {
						className: "whitespace-nowrap ",
						children: "Pool Picker"
					}), e.jsx(Sn, {
						height: 16,
						color: u.gray[500],
						onClick: () => a(!1)
					})]
				}), e.jsx(Js, {
					isModal: !0,
					onClose: () => {
						a(!1)
					}
				})]
			})
		})]
	})
}
const Ru = ({
		token0Info: n,
		token1Info: t,
		poolFee: s,
		onClick: r
	}) => e.jsxs("button", {
		onClick: r,
		className: " h-fit w-fit flex flex-row items-center gap-2 ",
		children: [e.jsx(er, {
			poolFee: s,
			token0Info: n,
			token1Info: t,
			showCopyIcon: !1
		}), e.jsx(Tn, {
			color: u.white,
			width: 16
		})]
	}),
	Cr = (n, t, s) => {
		n.changedTouches[0].clientY - t > 50 && s(!1)
	},
	Nr = (n, t) => {
		t(n.touches[0].clientY)
	};

function Sr() {
	const {
		token: n,
		poolAddress: t,
		poolSummary: s
	} = oe(), {
		currentChain: r
	} = D(), {
		editPosition: o
	} = Nt(), [a] = c.useState(bu(0)), [i] = c.useState(gu(7)), {
		data: l
	} = be("cush_summary", [t, a, i, !1]), {
		isMobile: d
	} = Ze(), [m, f] = c.useState(rt(r)), {
		setFavoritePool: p
	} = oe();
	return e.jsxs("div", {
		className: "bg-gray-dark flex  flex-col rounded-2xl border-[1px] py-2 px-3 gap-2 border-gray-800",
		style: {
			height: "197px"
		},
		children: [e.jsxs("div", {
			className: "flex items-center justify-between md:flex-row gap-x-1 pr-1",
			children: [d ? e.jsx(la, {}) : e.jsx(ia, {
				showCopyIcon: !1
			}), e.jsx(ts, {
				isStarred: m.includes(s.address),
				onClick: () => qs(s.address, m.includes(s.address), r, p, f)
			})]
		}), e.jsx("div", {
			children: e.jsxs("div", {
				className: "relative flex flex-col gap-2",
				children: [e.jsx(fu, {}), e.jsx(Ou, {
					pool: s,
					poolInfo: l,
					tokenInfo: n
				}), o && e.jsx("div", {
					className: "absolute top-0 left-0 w-full h-full bg-gray-dark opacity-50",
					style: {
						zIndex: 1
					}
				})]
			})
		})]
	})
}
const Ou = ({
		pool: n,
		poolInfo: t,
		tokenInfo: s
	}) => {
		const {
			currentChain: r
		} = D(), o = t ? s.selected === 0 ? t.volume_base : t.volume_quote : 0, a = o * n.fee / 1e6;
		return n ? e.jsxs("div", {
			className: "rounded-2xl border-[1px] py-3 px-2 flex flex-col gap-2",
			style: {
				borderColor: u.gray[700]
			},
			children: [e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsx(j, {
					color: u.gray[400],
					children: "TVL:"
				}), e.jsxs(j, {
					children: ["$", e.jsx(L, {
						num: n.tvl_usd
					})]
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsx(j, {
					color: u.gray[400],
					children: "7D Volume:"
				}), e.jsxs(j, {
					children: [e.jsx(L, {
						num: o
					}), " ", s.selected === 0 ? R(n.t0, n.t0_symbol, r) : R(n.t1, n.t1_symbol, r)]
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsx(j, {
					color: u.gray[400],
					children: "7D Fees:"
				}), e.jsxs(j, {
					children: [e.jsx(L, {
						num: a
					}), " ", s.selected === 0 ? R(n.t0, n.t0_symbol, r) : R(n.t1, n.t1_symbol, r)]
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsx(j, {
					color: u.gray[400],
					children: "24H Transactions:"
				}), e.jsx(j, {
					children: n.tx_count
				})]
			})]
		}) : e.jsx("div", {
			children: "loading..."
		})
	},
	Er = (n, t) => Math.log(t) / Math.log(n),
	Je = (n, t, s) => {
		const r = Math.floor(n);
		return n <= vt || n > Zt ? s.selected === 0 ? vt : Zt : Math.round(r / t) * t
	},
	de = (n, t) => {
		const s = t.decimals,
			r = 1.0001 ** n / 10 ** s;
		return t.selected === 1 ? r : 1 / r
	},
	Ve = (n, t) => {
		const s = t.decimals,
			r = t.selected === 1 ? Er(1.0001, n * 10 ** s) : Er(1.0001, 1 / n * 10 ** s);
		return Math.floor(r)
	};

function Zn(n) {
	const {
		onClick: t,
		disabled: s,
		isPlus: r = !0
	} = n, [o, a] = c.useState(!1), i = c.useRef(null);
	let l = null;
	c.useEffect(() => () => m(), []), c.useEffect(() => {
		const f = () => {
			m()
		};
		return document.addEventListener("mouseup", f), () => {
			document.removeEventListener("mouseup", f)
		}
	}, []);
	const d = () => {
			if (i.current) return;
			const f = 50;
			let p = 400;
			l = setTimeout(function x() {
				t(), p = Math.max(p - 50, 50), i.current = setTimeout(x, p)
			}, f)
		},
		m = () => {
			l && (clearTimeout(l), l = null), i.current && (clearInterval(i.current), i.current = null)
		};
	return e.jsx("button", {
		onMouseDown: d,
		onMouseUp: m,
		disabled: s,
		onMouseEnter: () => {
			a(!0)
		},
		onMouseLeave: () => {
			a(!1), m()
		},
		className: `h-4 w-4 rounded-[4px] flex items-center justify-center ${s?"hidden":""}`,
		style: {
			backgroundColor: o ? De(u.gray[750]) : u.gray[750]
		},
		children: r ? e.jsx(ci, {
			width: 10,
			color: o ? De(u.white) : u.white
		}) : e.jsx(di, {
			width: 10,
			color: o ? De(u.white) : u.white
		})
	})
}
const Du = [.1, 1, 12.5, 25, 50, 75, 100];

function Fu({
	range: n,
	setRange: t
}) {
	const {
		highlightBounds: s,
		setHighlightBounds: r
	} = Ct(), {
		poolSummary: o,
		token: a,
		liquidityChart: i
	} = oe(), [l, d] = c.useState(!1), {
		refs: m,
		floatingStyles: f,
		context: p
	} = Ce({
		whileElementsMounted: Ie,
		open: l,
		onOpenChange: d,
		middleware: [],
		placement: "bottom-end"
	}), {
		styles: x
	} = Ae(p, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), h = Le(p), y = Pe(p), {
		getReferenceProps: b,
		getFloatingProps: g
	} = Ne([y, h]);
	return c.useEffect(() => {
		s === void 0 && t(void 0)
	}, [s]), c.useEffect(() => {
		if (!(o.t1_price !== void 0 && i && n)) return;
		const w = a.selected === 1 ? o.t0_price : o.t1_price,
			C = n / 2,
			k = i == null ? void 0 : i.tick_spacing,
			T = w * (1 - C / 100),
			E = w * (1 + C / 100);
		r({
			lower: Je(Ve(T, a), k, a),
			upper: Je(Ve(E, a), k, a)
		})
	}, [n, a]), e.jsxs("div", {
		className: "relative",
		children: [e.jsxs("div", {
			ref: m.setReference,
			...b(),
			className: "gap-1 outline text-white text-xs font-semibold outline-1 py-2 px-3 bg-gray-dark hover:outline-gray-800 outline-gray-700 rounded-lg flex justify-between cursor-pointer items-center",
			children: [e.jsx(Bu, {
				range: n
			}), " ", e.jsx(_t, {})]
		}), l && e.jsx("div", {
			className: "w-full mt-1",
			style: {
				...f
			},
			...g(),
			ref: m.setFloating,
			children: e.jsx("div", {
				style: x,
				className: "w-full flex flex-col bg-gray-800 border-[1px] border-gray-700 rounded-lg",
				children: e.jsx($u, {
					setRange: t,
					setIsOpen: d
				})
			})
		})]
	})
}
const Uu = n => {
		const {
			range: t,
			setRange: s,
			setIsOpen: r
		} = n, o = a => {
			s(a), r(!1)
		};
		return e.jsx("div", {
			className: "text-white flex px-2 py-1 w-full hover:bg-gray-drophover cursor-pointer rounded-lg",
			onClick: () => o(t),
			children: e.jsx(j, {
				weight: P.MEDIUM,
				children: t.toString().concat("%")
			})
		}, t)
	},
	Bu = ({
		range: n
	}) => e.jsx(j, {
		className: "w-[80px]",
		children: n ? n.toString().concat("%") : "Select"
	}),
	$u = ({
		setRange: n,
		setIsOpen: t
	}) => e.jsx(e.Fragment, {
		children: Du.map((s, r) => e.jsx(Uu, {
			range: s,
			setRange: n,
			setIsOpen: t
		}, r))
	}),
	Ir = n => {
		const {
			title: t,
			price: s,
			onInput: r,
			onMinus: o,
			onPlus: a,
			focus: i,
			onFocus: l
		} = n, {
			editPosition: d
		} = Nt(), [m, f] = c.useState("0"), [p, x] = c.useState(!1);
		return c.useEffect(() => {
			if (s) {
				const h = s == null ? void 0 : s.replace(/,/g, "");
				f(h)
			} else f("0")
		}, [s]), e.jsxs("div", {
			className: "w-full h-fit  flex flex-col gap-[6px]]",
			children: [e.jsx(st, {
				color: u.gray[400],
				children: t
			}), e.jsxs("div", {
				onFocus: l,
				onMouseEnter: () => x(!0),
				onMouseLeave: () => x(!1),
				className: "w-full h-[39px] px-[10px] pt-[10px] pb-[12px] flex flex-row justify-between border-[1px] rounded-[10px]",
				style: {
					borderColor: i || p ? u.blue[400] : u.gray[700]
				},
				children: [e.jsx(Zn, {
					isPlus: !1,
					disabled: d,
					onClick: o
				}), e.jsx(Xe, {
					disabled: d,
					value: s !== void 0 ? m : "0",
					onUserInput: r,
					placeholder: "0",
					style: {
						color: "white",
						textAlign: "center",
						marginRight: 8,
						marginLeft: 8
					}
				}), e.jsx(Zn, {
					disabled: d,
					onClick: a
				})]
			})]
		})
	},
	Hu = ({
		onClose: n
	}) => e.jsxs("div", {
		className: "flex flex-row gap-3 rounded-[6px]  px-2 py-1  ",
		style: {
			backgroundColor: u.yellow[800]
		},
		children: [e.jsx("div", {
			className: "flex flex-row items-center gap-3",
			children: e.jsx("svg", {
				width: "25",
				height: "20",
				viewBox: "0 0 25 20",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: e.jsx("path", {
					d: "M12.5 7.99993V11.7499M1.25884 15.1259C0.212425 16.6259 1.52105 18.4999 3.61268 18.4999H21.3873C23.4777 18.4999 24.7863 16.6259 23.7411 15.1259L14.855 2.37793C13.8086 0.87793 11.1913 0.87793 10.1449 2.37793L1.25884 15.1259ZM12.5 14.7499H12.5084V14.7579H12.5V14.7499Z",
					stroke: u.yellow[300],
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			})
		}), e.jsx("div", {
			className: "md:max-w-[170px] w-full",
			children: e.jsx(j, {
				weight: P.REGULAR,
				color: u.yellow[300],
				children: "You won't earn fees until the market price is in range"
			})
		}), e.jsx("button", {
			className: "h-fit",
			onClick: n,
			children: e.jsx(Sn, {
				width: 12,
				fill: u.yellow[300]
			})
		})]
	});

function Ar() {
	const {
		token: n
	} = oe(), {
		editPosition: t
	} = Nt(), {
		highlightBounds: s,
		setHighlightBounds: r
	} = Ct(), {
		liquidityChart: o
	} = oe(), [a, i] = c.useState(""), [l, d] = c.useState(""), [m, f] = c.useState(void 0), [p, x] = c.useState(""), [h, y] = c.useState(void 0), [b, g] = c.useState(() => o ? o.current_pool_tick : 0), [w, C] = c.useState(o == null ? void 0 : o.tick_spacing), [k, T] = c.useState(null);
	c.useEffect(() => {
		o && (C(o.tick_spacing), g(o.current_pool_tick))
	}, [o]);
	const E = (I, A) => {
			r(B => {
				if (B) {
					let M = B.lower + I * (n.selected === 1 ? -1 : 1);
					return M >= B.upper ? B : (M < vt && (M = vt), {
						lower: M,
						upper: A || B.upper
					})
				}
			})
		},
		N = (I, A) => {
			r(B => {
				if (B) {
					let M = B.upper + I * (n.selected === 1 ? 1 : -1);
					return M <= B.lower ? B : (M > Zt && (M = Zt), {
						lower: A || B.lower,
						upper: M
					})
				}
			})
		},
		S = I => {
			b !== void 0 && w !== void 0 && (y(void 0), s === void 0 ? n.selected === 0 ? r({
				lower: b - w,
				upper: b
			}) : r({
				lower: b + w,
				upper: b
			}) : E(I * w))
		},
		G = (I, A, B = !0) => {
			y(void 0);
			const M = I !== "" ? I : "0";
			A(M), k && clearTimeout(k), T(setTimeout(() => {
				if (w && M && b) {
					const H = Je(Ve(Number(M.replace(/,/g, "")), n), w, n);
					r((X = {
						lower: b,
						upper: b
					}) => B ? H > X.upper ? {
						lower: X.upper,
						upper: H
					} : {
						lower: H,
						upper: X.upper
					} : H < X.lower ? {
						lower: H,
						upper: X.lower
					} : {
						lower: X.lower,
						upper: H
					})
				}
			}, 800))
		},
		_ = I => {
			b !== void 0 && w !== void 0 && (y(void 0), s === void 0 ? n.selected === 0 ? r({
				lower: b,
				upper: b + w
			}) : r({
				lower: b,
				upper: b - w
			}) : N(I * w))
		},
		v = () => {
			f(!0)
		};
	return c.useEffect(() => {
		s !== void 0 ? (d(L({
			num: de(s.lower, n),
			smallNumberOn2Zeros: !0,
			stringOut: !0,
			singleLetterNotation: !0,
			decimalAmount: 4
		})), i(L({
			num: de(s.upper, n),
			stringOut: !0,
			smallNumberOn2Zeros: !0,
			singleLetterNotation: !0,
			decimalAmount: 4
		})), b !== void 0 ? s.lower < b && s.upper > b ? f(!0) : f(!1) : f(void 0)) : (d(void 0), i(void 0), f(void 0))
	}, [s, n]), e.jsxs("div", {
		className: "h-fit bg-gray-dark rounded-2xl p-3 pt-[10px]  border-[1px] border-gray-800 flex flex-col gap-1 relative",
		children: [e.jsxs("div", {
			className: "flex flex-row justify-between items-center",
			children: [e.jsx(O, {
				children: "Range"
			}), e.jsx(Fu, {
				range: h,
				setRange: y
			})]
		}), e.jsxs("div", {
			className: `flex flex-col${n.selected===1?"":"-reverse"} gap-2`,
			children: [e.jsx(Ir, {
				title: n.selected === 0 ? "Max Price" : "Min Price",
				price: l,
				onInput: I => G(I, d),
				onPlus: () => S(-1),
				onMinus: () => S(1),
				focus: p === "start",
				onFocus: () => {
					x("start")
				}
			}, "Start Price"), e.jsx(Ir, {
				title: n.selected === 0 ? "Min Price" : "Max Price",
				price: a,
				onInput: I => G(I, i, !1),
				onPlus: () => _(1),
				onMinus: () => _(-1),
				focus: p === "stop",
				onFocus: () => {
					x("stop")
				}
			}, "Stop Price")]
		}), m === !1 && e.jsx(Hu, {
			onClose: v
		}), t && e.jsx("div", {
			className: "absolute top-0 left-0 w-full h-full bg-gray-dark opacity-50",
			style: {
				zIndex: 1
			}
		})]
	})
}
async function Vu({
	positionId: n,
	pool_address: t,
	token0: s,
	token1: r,
	provider: o,
	signer: a,
	tick: i,
	token0Amount: l,
	token1Amount: d,
	contract: m
}) {
	await mn({
		token: s.address,
		amount: l,
		provider: o,
		signer: a,
		approvee: m
	}), await mn({
		token: r.address,
		amount: d,
		provider: o,
		signer: a,
		approvee: m
	});
	const f = pn.fromRawAmount(s, l.toString()),
		p = pn.fromRawAmount(r, d.toString()),
		x = await Vo({
			pool_address: t,
			provider: o
		}),
		h = await Ho(f, p, x, i),
		y = {
			deadline: Math.floor(Date.now() / 1e3) + 60 * 20,
			slippageTolerance: new fo(50, 1e4),
			tokenId: n
		},
		{
			calldata: b,
			value: g
		} = xo.addCallParameters(h, y);
	return en(o, a, m, b, {
		value: BigInt(g)
	})
}

function zu({
	onClick: n
}) {
	const [t, s] = c.useState(!1);
	return e.jsx("button", {
		onMouseEnter: () => s(!0),
		onMouseLeave: () => s(!1),
		onClick: n,
		className: "bg-gray-800 rounded-md p-2",
		children: e.jsx(O, {
			color: t ? u.blue[500] : u.blue[400],
			children: e.jsx(Ye, {
				id: "wU4h+w"
			})
		})
	})
}
const Qn = (n, t = 6) => n.length <= t ? n : `${n.slice(0,t)}...`,
	cn = () => e.jsx("div", {
		children: e.jsxs("svg", {
			width: "15",
			height: "14",
			viewBox: "0 0 15 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "animate-spin",
			children: [e.jsx("mask", {
				id: "mask0_705_911",
				maskUnits: "userSpaceOnUse",
				x: "0",
				y: "0",
				width: "15",
				height: "14",
				children: e.jsx("path", {
					d: "M0 0H14.6875V13.7083H0V0Z",
					fill: "white"
				})
			}), e.jsx("g", {
				mask: "url(#mask0_705_911)",
				children: e.jsx("path", {
					d: "M7 11.617C4.43085 11.617 2.38298 9.53192 2.38298 7C2.38298 4.43085 4.46808 2.38298 7 2.38298C9.53192 2.38298 11.617 4.43085 11.617 7C11.617 9.56915 9.56915 11.617 7 11.617ZM7 0C3.12766 0 0 3.16489 0 7C0 10.8723 3.16489 14 7 14C10.8351 14 14 10.8723 14 7C14 3.12766 10.8723 0 7 0Z",
					fill: u.gray[600]
				})
			}), e.jsx("path", {
				d: "M12.8085 5.80851C12.1383 5.80851 11.617 6.32979 11.617 7C11.617 9.56915 9.53192 11.617 7 11.617C4.46808 11.617 2.38298 9.56915 2.38298 7C2.38298 4.43085 4.43085 2.38298 7 2.38298C7.67021 2.38298 8.19149 1.8617 8.19149 1.19149C8.19149 0.521277 7.67021 0 7 0C3.12766 0 0 3.16489 0 7C0 10.8351 3.12766 14 7 14C10.8723 14 14 10.8723 14 7C14 6.32979 13.4787 5.80851 12.8085 5.80851Z",
				fill: u.gray[400]
			})]
		})
	});

function Wu(n) {
	const {
		onClick: t,
		disabled: s,
		isInsufficientT0: r,
		isInsufficientT1: o,
		isTransactionPending: a,
		token0: i,
		token1: l
	} = n, {
		editPosition: d,
		updatePosition: m
	} = Nt(), {
		isConnected: f
	} = we(), p = !m || !d, x = () => !f || s || p && r || p && o || a;
	return e.jsx("button", {
		disabled: x(),
		onClick: t,
		className: "w-full h-[38px] flex items-center justify-center rounded-[8px] text-gray-50 bg-blue-400 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-blue-vibrant ",
		children: f ? r && p ? e.jsxs(ee, {
			weight: P.SEMIBOLD,
			color: u.gray[500],
			children: ["Insufficient ", Qn(R(i.address, i.symbol, i.chainId)), " Balance"]
		}) : o && p ? e.jsxs(ee, {
			weight: P.SEMIBOLD,
			color: u.gray[500],
			children: ["Insufficient ", Qn(R(l.address, l.symbol, l.chainId)), " Balance"]
		}) : a ? e.jsxs("div", {
			className: "flex flex-row items-center gap-1",
			children: [e.jsx(cn, {}), e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: u.gray[500],
				children: "Transaction in progress"
			})]
		}) : d ? m ? e.jsx(ee, {
			weight: P.SEMIBOLD,
			color: "inherit",
			children: "Decrease Position"
		}) : e.jsx(ee, {
			weight: P.SEMIBOLD,
			color: "inherit",
			children: "Increase Position"
		}) : e.jsx(ee, {
			weight: P.SEMIBOLD,
			color: "inherit",
			children: "Deploy Position"
		}) : e.jsx(ee, {
			weight: P.SEMIBOLD,
			color: u.gray[500],
			children: "Connect wallet"
		})
	})
}

function Gu(n) {
	const {
		setPercent: t,
		percent: s,
		disabled: r = !1
	} = n, [o, a] = c.useState(!1), i = l => {
		t(l.target.value)
	};
	return e.jsxs("div", {
		className: " w-full h-[30px] flex justify-center flex-col",
		onMouseEnter: () => a(!0),
		onMouseLeave: () => a(!1),
		children: [e.jsx("input", {
			type: "range",
			min: "0",
			max: "100",
			value: s,
			onChange: l => i(l),
			className: "slider",
			style: {
				backgroundSize: `${s}% 100%`
			},
			disabled: r
		}), e.jsx("div", {
			className: "w-full h-[0px] z-[100]",
			children: o && !r && e.jsx("div", {
				className: "w-fit p-1 rounded-[4px] border-[1px]",
				style: {
					backgroundColor: u.gray[800],
					borderColor: u.gray[600],
					marginLeft: parseFloat(s) > 98 ? "98%" : s.concat("%")
				},
				children: e.jsxs(j, {
					children: [parseFloat(s).toFixed(2), "%"]
				})
			})
		})]
	})
}
const qu = async (n, t, s, r, o, a, i) => {
	window.log.log(t, s, r, o, a, i);
	try {
		return await n.call("cush_backtestPositionInTimeRange", [t, s.lower, s.upper, r, o, a, i])
	} catch (l) {
		const d = l;
		throw window.log.log({
			error: d
		}), new Error(d.message)
	}
}, Yu = "https://assets.oku.trade/loader.svg";

function Xu({
	onClick: n,
	disabled: t,
	loading: s
}) {
	return e.jsx("button", {
		onClick: n,
		disabled: t,
		className: "w-[109px] h-[28px] flex items-center justify-center rounded-[8px] text-gray-50 disabled:text-blue-400 hover:bg-blue-500 bg-blue-400 disabled:bg-gray-800",
		children: s ? e.jsx("img", {
			src: Yu,
			alt: "spinning loader",
			className: "h-[16px] center mx-auto my-4 animate-spin"
		}) : e.jsx("div", {
			className: "font-semibold text-xs ",
			children: "Run back tests"
		})
	})
}
const xs = ({
	onClick: n,
	value: t,
	focus: s
}) => e.jsx("button", {
	className: "w-[30px] h-[28px] border-[1px] rounded-[6px] bg-black hover:bg-hoverbackground border-gray-600 hover:border-hover focus:border-blue-400",
	onClick: n,
	children: e.jsxs(j, {
		color: s ? u.blue[400] : u.gray[50],
		children: [t, "d"]
	})
});

function Ku(n) {
	return e.jsx("svg", {
		width: "12",
		height: "10",
		viewBox: "0 0 12 10",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: `w-4 h-4 ${n.className}`,
		children: e.jsx("path", {
			d: "M8.01169 3.67373H10.5077V3.67323M1.49269 8.82172V6.32573M1.49269 6.32573H3.98869M1.49219 6.32573L3.08269 7.91722C3.59475 8.42929 4.23258 8.79753 4.93208 8.98492C5.63158 9.17232 6.36808 9.17226 7.06755 8.98476C7.76702 8.79727 8.40481 8.42893 8.91679 7.91679C9.42877 7.40465 9.79691 6.76675 9.98419 6.06723M2.01569 3.93223C2.20297 3.2327 2.57111 2.5948 3.08309 2.08266C3.59507 1.57052 4.23285 1.20219 4.93232 1.01469C5.63179 0.827189 6.3683 0.827135 7.06779 1.01453C7.76729 1.20192 8.40513 1.57016 8.91719 2.08223L10.5077 3.67323M10.5077 1.17773V3.67273",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	})
}

function Zu({
	backTestResults: n,
	setBackTestResult: t
}) {
	const {
		token0: s,
		token1: r
	} = oe();
	return e.jsxs("div", {
		className: "rounded-2xl border-[1px] py-3 px-2 flex flex-col gap-4",
		style: {
			borderColor: u.gray[700]
		},
		children: [e.jsxs("div", {
			className: "flex flex-col gap-1",
			children: [e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsx(j, {
					children: "Summary"
				}), e.jsx(Io, {
					IconComponent: Ku,
					containerClasses: "bg-blue-800 p-1 rounded-full",
					iconClasses: "stroke-blue-400 w-[12px] h-[12px]",
					onClick: () => t(null)
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs(j, {
					color: u.gray[300],
					children: [s.symbol, " Annualized APR:"]
				}), e.jsxs(j, {
					children: [n && e.jsx(L, {
						num: n == null ? void 0 : n.raw_fee_apr0
					}), "%"]
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs(j, {
					color: u.gray[300],
					children: [s.symbol, " PnL:"]
				}), e.jsx(j, {
					children: n && e.jsx(L, {
						num: n == null ? void 0 : n.net_potential_profit_quoted0
					})
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs(j, {
					color: u.gray[300],
					children: [r.symbol, " Annualized APR:"]
				}), e.jsxs(j, {
					children: [n && e.jsx(L, {
						num: n == null ? void 0 : n.raw_fee_apr1
					}), "%"]
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs(j, {
					color: u.gray[300],
					children: [r.symbol, " PnL:"]
				}), e.jsx(j, {
					children: n && e.jsx(L, {
						num: n == null ? void 0 : n.net_potential_profit_quoted1
					})
				})]
			})]
		}), e.jsxs("div", {
			className: "flex flex-col  gap-1",
			children: [e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs(j, {
					color: u.gray[300],
					children: [s.symbol, " Fees:"]
				}), e.jsx(j, {
					children: n && e.jsx(L, {
						num: n == null ? void 0 : n.fees_quoted0
					})
				})]
			}), e.jsxs("div", {
				className: "flex flex-row justify-between",
				children: [e.jsxs(j, {
					color: u.gray[300],
					children: [r.symbol, " Fees:"]
				}), e.jsx(j, {
					children: n && e.jsx(L, {
						num: n == null ? void 0 : n.fees_quoted1
					})
				})]
			})]
		})]
	})
}
const Qu = ({
		inputToken0: n,
		inputToken1: t,
		token0: s,
		token1: r,
		poolSummary: o,
		tick: a
	}) => {
		const {
			cushRpc: i
		} = D(), {
			currentChainInfo: l
		} = D(), [d, m] = c.useState(0), [f, p] = c.useState(null), [x, h] = c.useState(!1), y = async () => {
			h(!0);
			const b = Lr(n === "" ? 0 : parseFloat(n), s),
				g = Lr(t === "" ? 0 : parseFloat(t), r);
			Ke("run_backtest", {
				chain: l.name,
				token0: s.symbol,
				token1: r.symbol,
				amount0: b,
				amount1: g
			});
			try {
				if (!a) return;
				const w = await qu(i, o.address, a, b, g, Date.now() - d * 24 * 60 * 60 * 1e3, Date.now());
				p(w)
			} catch (w) {
				window.log.log(w)
			} finally {
				h(!1)
			}
		};
		return f === null ? e.jsxs("div", {
			className: "flex flex-row justify-between",
			children: [e.jsxs("div", {
				className: " h-fit flex gap-2",
				children: [e.jsx(xs, {
					onClick: () => m(7),
					value: 7,
					focus: d === 7
				}), e.jsx(xs, {
					onClick: () => m(30),
					value: 30,
					focus: d === 30
				}), e.jsx(xs, {
					onClick: () => m(90),
					value: 90,
					focus: d === 90
				})]
			}), e.jsx(Xu, {
				onClick: y,
				loading: x,
				disabled: !(a && (n !== "" && n !== "0" || t !== "" && t !== "0") && d)
			})]
		}) : e.jsx(Zu, {
			setBackTestResult: p,
			backTestResults: f
		})
	},
	Lr = (n, t) => {
		const s = t.decimals,
			r = n * 10 ** s;
		return "0x".concat(Math.round(r).toString(16))
	};

function Ju(n) {
	const {
		tokenSymbol: t,
		tokenAddress: s
	} = n, {
		currentChain: r
	} = D(), [o, a] = c.useState(void 0);
	return c.useEffect(() => {
		const i = ze(s, r);
		a(i)
	}, [s]), e.jsxs("div", {
		className: "w-full flex items-center gap-1",
		children: [(o == null ? void 0 : o.logoURI) && e.jsx(xe, {
			size: 14,
			logoUrl: o == null ? void 0 : o.logoURI,
			tokenSymbol: o == null ? void 0 : o.symbol
		}), e.jsx(O, {
			children: t
		})]
	})
}
const Pr = n => {
	const [t, s] = c.useState(""), {
		editPosition: r,
		position: o
	} = Nt(), {
		value: a = "",
		tokenSymbol: i = void 0,
		setLastInput: l,
		token: d,
		isToken0: m = !1,
		focus: f,
		setFocus: p
	} = n, x = b => {
		l(b, m)
	};
	c.useEffect(() => {
		if (r && o) {
			const b = ge(BigInt(o.current_position_values.amount0_current), o.position_pool_data.token0_decimals),
				g = ge(BigInt(o.current_position_values.amount1_current), o.position_pool_data.token1_decimals);
			s(L(m ? {
				num: b,
				stringOut: !0,
				singleLetterNotation: !0
			} : {
				num: g,
				stringOut: !0,
				singleLetterNotation: !0
			}))
		}
	}, [r, o]);
	const [h, y] = c.useState(!1);
	return e.jsxs("div", {
		onFocus: () => p(!0),
		onMouseEnter: () => {
			y(!0)
		},
		onMouseLeave: () => {
			y(!1)
		},
		className: "h-[46px] rounded-xl px-2 flex justify-between items-center border-[1px]",
		style: {
			borderColor: f || h ? u.blue[400] : u.gray[700]
		},
		children: [i && e.jsx(Ju, {
			tokenSymbol: i,
			tokenAddress: d.address
		}), e.jsx(Xe, {
			value: a,
			onUserInput: x,
			placeholder: r ? t : "0",
			style: {
				color: "white",
				textAlign: "end"
			},
			decimals: d.decimals
		})]
	})
};

function ep() {
	const [n, t] = c.useState(!1), [s, r] = c.useState(!1), [o, a] = c.useState(!1), [i, l] = c.useState(!1), [d, m] = c.useState(!1), f = "https://assets.oku.trade/error.svg", {
		token0: p,
		token1: x,
		poolSummary: h,
		liquidityChart: y
	} = oe(), {
		address: b
	} = we(), {
		currentChain: g,
		currentChainInfo: w
	} = D(), C = $s({
		chainId: w.id
	}), {
		signer: k
	} = kt(), {
		highlightBounds: T,
		setHighlightBounds: E,
		setClear: N
	} = Ct(), {
		getAndSetCurrentPositions: S
	} = Vt(), {
		editPosition: G,
		setEditPosition: _,
		updatePosition: v,
		setUpdatePosition: I,
		setSlidePercent: A,
		slidePercent: B,
		position: M,
		inputToken0: H,
		inputToken1: X,
		setInputToken0: Z,
		setInputToken1: J,
		setLastInput: F,
		lastInput: K
	} = Nt(), {
		features: {
			Telemetry: V
		}
	} = Te(), {
		telemetryRpc: U
	} = bn(), z = ns({
		value: H,
		delay: 1e3
	}), W = An(), {
		data: $
	} = Hs({
		watch: !0
	}), {
		data: te,
		refetch: q
	} = Ft({
		address: b,
		token: p == null ? void 0 : p.address,
		chainId: w.id
	}), {
		data: le,
		refetch: ae
	} = Ft({
		address: b,
		token: x == null ? void 0 : x.address,
		chainId: w.id
	});
	c.useEffect(() => {
		q(), ae()
	}, [$]);
	const [ie, pe] = c.useState(null), [ce, We] = c.useState(void 0);
	c.useEffect(() => {
		y && (pe(y.current_pool_tick), We(y.sqrt_price_x96))
	}, [y]), c.useEffect(() => {
		if (!M || !p || !x) return;
		const Q = ge(BigInt(M.current_position_values.amount0_current), p.decimals),
			ne = ge(BigInt(M.current_position_values.amount1_current), x.decimals);
		Z((Number(Q) * parseFloat(B) / 100).toString()), J((Number(ne) * parseFloat(B) / 100).toString())
	}, [B, v, M, p, x]), c.useEffect(() => {
		if (!M || !p) return;
		const Q = ge(BigInt(M.current_position_values.amount0_current), M.position_pool_data.token0_decimals);
		if (Q === "0") {
			Fe("0", !0);
			return
		}
		const ne = (Number(Q) * Number(B) / 100).toFixed(p.decimals);
		Fe(ne, !0)
	}, [B]), c.useEffect(() => {
		if (!(!M || !G) && v) {
			const Q = ge(BigInt(M.current_position_values.amount0_current), M.position_pool_data.token0_decimals),
				ne = Number(H) * 100 / Number(Q);
			Number(H) > Number(Q) && I(!1), A(ne.toString())
		}
	}, [z]), c.useEffect(() => {
		F(""), Z(""), J(""), A("0")
	}, [v]), c.useEffect(() => {
		let Q = !1;
		if (T && ie !== null) {
			const je = Math.max(T.upper, T.lower);
			Math.min(T.upper, T.lower) < ie && je > ie && (Q = H === "" || X === "")
		}
		const ne = v && M ? (M == null ? void 0 : M.user.toLowerCase()) !== (b == null ? void 0 : b.toLowerCase()) : !1;
		Fe(K, s), t(ie === null || !b || ne || !p || !x || !h || !T || H === "" && X === "" || Q)
	}, [b, p, x, H, X, h, T, ie]);
	const Be = parseFloat(ge(BigInt(te ? te.value : 0), p.decimals)),
		it = parseFloat(ge(BigInt(le ? le.value : 0), x.decimals)),
		Fe = function (Q, ne) {
			if (ie === null || ce === void 0 || !p || !x) return;
			let je = Zt,
				Qe = vt;
			T && (je = Math.max(T.lower, T.upper), Qe = Math.min(T.lower, T.upper));
			let Ge = H,
				yt = X;
			(() => {
				if (Q === "") {
					[Ge, yt] = ["", ""];
					return
				}
				if (Qe <= ie && je >= ie) {
					let Rn = "0";
					try {
						Rn = Ac(Qe, je, ie, BigInt(ce), ne, Q, ne ? p : x)
					} catch {
						Rn = "0"
					}
					ne ? (Ge = Q, yt = ge(BigInt(Rn), x.decimals)) : (yt = Q, Ge = ge(BigInt(Rn), p.decimals));
					return
				}
				if (je == ie) {
					Ge = "", ne || (yt = Q);
					return
				}
				if (Qe == ie) {
					yt = "", ne && (Ge = Q);
					return
				}
				if (je < ie) {
					Ge = "", ne || (yt = Q);
					return
				}
				if (Qe > ie) {
					yt = "", ne && (Ge = Q);
					return
				}
			})(), a(Number(Ge) > Be), l(Number(yt) > it), Z(Ge), J(yt), F(Q), r(ne)
		},
		ht = () => {
			_(!1), E(void 0), N(!0), F(""), Z(""), J(""), A("0"), $e("")
		};
	c.useEffect(() => {
		ht()
	}, [g]);
	const Me = async () => {
		if (!k || !T || !p || !x) return;
		let Q;
		try {
			let ne;
			if (Q = W.add({
					state: Y.EXECUTE_TRANSACTION
				}), m(!0), !G && b) ne = await Rc({
				user_address: b,
				token0: p,
				token1: x,
				token0Amount: H === "" ? BigInt("0") : Oe(H, p.decimals),
				token1Amount: X === "" ? BigInt("0") : Oe(X, x.decimals),
				pool_address: h.address,
				provider: C,
				signer: k,
				tick: T,
				contract: w.contracts.nftManager.address
			});
			else if (G && !v && M && b) ne = await Vu({
				positionId: M.tokenId,
				token0: p,
				token1: x,
				token0Amount: H === "" ? BigInt("0") : Oe(H, p.decimals),
				token1Amount: X === "" ? BigInt("0") : Oe(X, x.decimals),
				pool_address: h.address,
				provider: C,
				signer: k,
				tick: T,
				contract: w.contracts.nftManager.address
			});
			else if (G && v && M && b) ne = await sa({
				contract: w.contracts.nftManager.address,
				positionId: M.tokenId,
				user_address: b,
				provider: C,
				signer: k,
				removePercent: parseFloat(B)
			});
			else {
				W.replace(Q, {
					state: Y.EXECUTE_TRANSACTION_ERROR
				});
				return
			}
			Q = W.replace(Q, {
				state: Y.EXECUTE_TRANSACTION_IN_PROGRESS
			});
			const je = await C.waitForTransactionReceipt({
				hash: ne
			});
			V.enabled && await Jt(U, g, "liqudiity", "deploy_position", b, je.transactionHash, {}), Ke("deploy_position", {
				chain: w.name,
				pool: h.address,
				transaction: je.transactionHash
			}), je.status !== "reverted" ? W.replace(Q, {
				state: Y.EXECUTE_TRANSACTION_SUCCESS,
				txHash: je.transactionHash,
				chainId: g
			}) : W.replace(Q, {
				state: Y.EXECUTE_TRANSACTION_ERROR
			}), setTimeout(() => {
				S(b)
			}, 5e3)
		} catch (ne) {
			window.log.error(ne), W.replace(Q, {
				state: Y.EXECUTE_TRANSACTION_ERROR
			})
		} finally {
			m(!1)
		}
	}, [ye, $e] = c.useState("t0"), [St, Re] = c.useState(!1);
	return c.useEffect(() => {
		Re(G && !v && (M == null ? void 0 : M.user.toLowerCase()) !== (b == null ? void 0 : b.toLowerCase()))
	}, [G, v, M == null ? void 0 : M.user, b]), e.jsxs("div", {
		className: "h-full px-3 pt-3 pb-3 bg-gray-dark rounded-xl border-[1px] border-gray-800 flex flex-col gap-4",
		children: [e.jsxs("div", {
			className: "flex flex-row justify-between",
			children: [G ? v ? e.jsx(O, {
				children: "Decrease Position"
			}) : e.jsx(O, {
				children: "Increase Position"
			}) : e.jsx(O, {
				children: "Deploy Position"
			}), T !== void 0 && e.jsx(zu, {
				onClick: ht
			})]
		}), e.jsxs("div", {
			className: "flex flex-col gap-2",
			children: [e.jsx(st, {
				weight: P.REGULAR,
				color: u.gray[400],
				children: e.jsx(Ye, {
					id: "J3/IOp"
				})
			}), p && x ? e.jsxs("div", {
				className: "flex flex-col gap-2",
				children: [e.jsx(Pr, {
					value: H,
					setLastInput: Fe,
					tokenSymbol: R(h.t0, h.t0_symbol, w.id),
					token: p,
					isToken0: !0,
					focus: ye === "t0",
					setFocus: () => $e("t0")
				}), e.jsx(Pr, {
					value: X,
					setLastInput: Fe,
					tokenSymbol: R(h.t1, h.t1_symbol, w.id),
					token: x,
					focus: ye === "t1",
					setFocus: () => $e("t1")
				})]
			}) : e.jsx(Ln, {
				lines: 2
			}), e.jsxs("div", {
				className: "flex flex-col gap-[13px] ",
				children: [e.jsxs("div", {
					className: "py-3 pr-3 pl-2 rounded-xl border-[1px] flex flex-col gap-1",
					style: {
						borderColor: u.gray[700]
					},
					children: [e.jsxs("div", {
						className: "flex flex-row justify-between",
						children: [e.jsxs(st, {
							weight: P.REGULAR,
							color: u.gray[400],
							children: [R(h.t0, h.t0_symbol, w.id), " balance:"]
						}), p ? e.jsx(st, {
							children: e.jsx(L, {
								num: parseFloat(ge(BigInt(te ? te.value : 0), p.decimals))
							})
						}) : e.jsx(Dt, {})]
					}), e.jsxs("div", {
						className: "flex flex-row justify-between",
						children: [e.jsxs(st, {
							weight: P.REGULAR,
							color: u.gray[400],
							children: [R(h.t1, h.t1_symbol, w.id), " balance:"]
						}), x ? e.jsx(st, {
							children: e.jsx(L, {
								num: parseFloat(ge(BigInt(le ? le.value : 0), x.decimals))
							})
						}) : e.jsx(Dt, {})]
					})]
				}), G && v && e.jsx("div", {
					className: "flex flex-col gap-[13px] w-full",
					children: e.jsx(Gu, {
						percent: B,
						setPercent: A
					})
				}), e.jsx(Qu, {
					inputToken0: H,
					inputToken1: X,
					poolSummary: h,
					tick: T,
					token0: p,
					token1: x
				}), e.jsx(Wu, {
					onClick: Me,
					disabled: n,
					isInsufficientT0: o,
					isInsufficientT1: i,
					isTransactionPending: d,
					token0: p,
					token1: x
				}), e.jsx(tn, {
					onClose: () => Re(!1),
					showModal: St,
					children: e.jsxs("div", {
						className: " w-[300px]  h-fit rounded-[8px] bg-gray-800 border-[1px] border-gray-700 flex flex-col gap-4 p-4 items-center justify-between",
						children: [e.jsx("h2", {
							className: "text-red-400 text-[48px]",
							children: "Alert!"
						}), e.jsx("img", {
							src: f,
							alt: "",
							className: "w-[64px]"
						}), e.jsxs("div", {
							className: "flex flex-col gap-4",
							children: [e.jsx(O, {
								color: u.gray[200],
								className: "text-center",
								children: "Your address is not the owner of this position! Be sure to check this is the correct position you want to add liquidity to before proceeding."
							}), e.jsxs("div", {
								className: "flex flex-row w-full justify-between",
								children: [e.jsx("button", {
									onClick: () => Re(!1),
									className: "text-white p-1 rounded-sm w-[93px] h-[30px] bg-blue-400",
									children: "Okay"
								}), e.jsx("button", {
									onClick: () => {
										Re(!1), ht()
									},
									className: " text-white p-1 rounded-sm w-[93px] h-[30px] bg-blue-400",
									children: "Cancel"
								})]
							})]
						})]
					})
				})]
			})]
		})]
	})
}

function Mr() {
	const {
		editPosition: n,
		updatePosition: t,
		setUpdatePosition: s
	} = Nt(), {
		isMobile: r
	} = Ze();
	return e.jsx(e.Fragment, {
		children: e.jsxs("div", {
			className: "flex flex-col w-fill gap-2",
			children: [n || r ? e.jsx(Ks, {
				item: t,
				setItem: s,
				item1: "Increase",
				item2: "Decrease"
			}) : e.jsx(e.Fragment, {}), e.jsx("div", {
				className: "h-full",
				children: e.jsx(ep, {})
			})]
		})
	})
}
const Ls = 32,
	ca = (n, t, s) => n <= s && s <= t || n >= s && s >= t,
	Rr = new Map,
	tp = (n, t) => {
		const s = [];
		if (!n || !t || !t.ticks || t.ticks.length === 0 || isNaN(n.decimals)) return s;
		const r = 2n ** 255n,
			o = 2n ** 256n,
			a = BigInt(t.sqrt_price_x96);
		let i = 0n,
			l = !1;
		return t.ticks.forEach((d, m) => {
			let f = t.tick_spacing;
			if (m >= t.ticks.length - 1) return;
			t.tick_spacing === 1 && (ca(t.current_pool_tick - 1e3, t.current_pool_tick + 1e3, d.tick_index) ? f = 1 : f = 60);
			let p = BigInt(d.liquidity_net);
			p >= r && (p = p - o), i = i + p;
			let x = BigInt(d.sqrt_price);
			const h = t.ticks[m + 1].tick_index;
			for (let y = d.tick_index; y < h; y = y + f) {
				let b = Rr.get(y + t.tick_spacing);
				if (b || (b = Ot.getSqrtRatioAtTick(y + f), Rr.set(y + f, b)), b > a && x < a) {
					const w = Or(y, x, a, i, l, t.token0_decimals, t.token1_decimals, n);
					s.push(w), l = !0, x = a
				}
				const g = Or(y, x, b, i, l, t.token0_decimals, t.token1_decimals, n);
				s.push(g), x = b
			}
		}), s
	},
	Or = (n, t, s, r, o, a, i, l) => {
		const d = [t, s, r, !1];
		if (o) {
			const f = Number(Gn.getAmount0Delta(...d)) / 10 ** a;
			return {
				tick: n,
				price: de(n, l),
				amount: l.selected === 0 ? f : f * de(n, l)
			}
		}
		const m = Number(Gn.getAmount1Delta(...d)) / 10 ** i;
		return {
			tick: n,
			price: de(n, l),
			amount: l.selected === 1 ? m : m * de(n, l)
		}
	};

function Jn(n) {
	const {
		token: t,
		setTokenSelected: s,
		token0Address: r,
		token0Symbol: o,
		token1Address: a,
		token1Symbol: i,
		isLogo: l = !1
	} = n, {
		currentChain: d
	} = D();
	return l ? e.jsxs("div", {
		className: "min-w-[80px] h-[32px] rounded-[6px] border-[1px] text-[14px] font-normal items-center relative",
		style: {
			backgroundColor: u.gray[900],
			borderColor: u.gray[700]
		},
		children: [t !== void 0 && e.jsx(Dr, {
			token: t,
			isLogo: !0
		}), e.jsxs("div", {
			className: "flex flex-row flex-1 rounded-[6px] w-full h-full absolute ",
			children: [e.jsx(Dn, {
				color: t.selected === 0 ? u.gray[100] : u.gray[500],
				weight: t.selected === 0 ? P.MEDIUM : P.REGULAR,
				onClick: () => {
					s(0)
				},
				children: e.jsx("div", {
					className: "w-[16px]",
					children: e.jsx(xe, {
						logoUrl: ke(r, d),
						tokenSymbol: R(r, i, d),
						size: 16
					})
				})
			}), e.jsx(Dn, {
				color: t.selected === 1 ? u.gray[100] : u.gray[500],
				weight: t.selected === 1 ? P.MEDIUM : P.REGULAR,
				onClick: () => {
					s(1)
				},
				children: e.jsx("div", {
					className: "w-[20px]",
					children: e.jsx(xe, {
						logoUrl: ke(a, d),
						tokenSymbol: R(a, i, d),
						size: 16
					})
				})
			})]
		})]
	}) : e.jsxs("div", {
		className: "min-w-[140px] h-[32px] rounded-[6px] border-[1px] text-[14px] font-normal items-center relative",
		style: {
			backgroundColor: u.gray[800],
			borderColor: u.gray[700]
		},
		children: [t !== void 0 && e.jsx(Dr, {
			token: t
		}), e.jsxs("div", {
			className: "flex flex-row flex-1 rounded-[6px] w-full h-full absolute ",
			children: [e.jsx(Dn, {
				color: t.selected === 0 ? u.gray[100] : u.gray[300],
				weight: t.selected === 0 ? P.MEDIUM : P.REGULAR,
				onClick: () => {
					t.selected !== 0 && s(0)
				},
				children: R(r, o, d)
			}), e.jsx(Dn, {
				color: t.selected === 1 ? u.gray[100] : u.gray[300],
				weight: t.selected === 1 ? P.MEDIUM : P.REGULAR,
				onClick: () => {
					t.selected !== 1 && s(1), s(1)
				},
				children: R(a, i, d)
			})]
		})]
	})
}
const Dn = n => {
		const {
			onClick: t,
			color: s,
			children: r,
			weight: o
		} = n, [a, i] = c.useState(!1);
		return e.jsx("button", {
			onMouseEnter: () => {
				i(!0)
			},
			onMouseLeave: () => {
				i(!1)
			},
			onClick: t,
			className: "flex flex-1 justify-center items-center rounded-[6px]",
			children: typeof r == "string" ? e.jsx(j, {
				weight: o,
				color: a ? De(s) : s,
				children: r
			}) : r
		})
	},
	Dr = n => {
		const {
			token: t
		} = n;
		return e.jsx("div", {
			className: " h-full absolute p-[2px] w-full  flex ",
			children: e.jsx("div", {
				style: {
					backgroundColor: u.gray[600]
				},
				className: `h-full w-[50%] rounded-[6px] transform transition-all duration-300  ${t.selected===1?"transform translate-x-[100%]":""}`
			})
		})
	},
	np = n => {
		const {
			height: t
		} = n, {
			poolSummary: s,
			token: r,
			setToken: o
		} = oe(), {
			isMobile: a
		} = Ze(), {
			currentChain: i
		} = D(), l = s.t0_price;
		return e.jsxs("div", {
			className: "flex h-fit gap-6",
			style: {
				flexDirection: a ? "column" : "row",
				alignItems: a ? "start" : "center",
				height: t,
				width: "100%"
			},
			children: [e.jsx(Jn, {
				token: r,
				token0Address: s.t0,
				token0Symbol: s.t0_symbol,
				token1Address: s.t1,
				token1Symbol: s.t1_symbol,
				setTokenSelected: o
			}), !a && e.jsxs("div", {
				className: "flex flex-row gap-2",
				children: [e.jsx(j, {
					color: u.gray[400],
					children: "Current Price: "
				}), e.jsxs(j, {
					color: u.gray[400],
					children: [r.selected === 1 ? e.jsx(L, {
						num: l,
						singleLetterNotation: !0
					}) : e.jsx(L, {
						num: 1 / l,
						singleLetterNotation: !0
					}), " ", r.selected === 1 ? R(s.t1, s.t1_symbol, i) : R(s.t0, s.t0_symbol, i), "per", r.selected === 1 ? R(s.t0, s.t0_symbol, i) : R(s.t1, s.t1_symbol, i)]
				})]
			})]
		})
	};
ui([pi, mi, fi, xi, hi, yi, gi, bi, wi, ji, vi, _i, Ti, ki, Ci, Ni, Si, Ei, Ii, Ai, Li, Pi, Mi, Ri, Oi]);
const da = ({
		chartRef: n,
		theme: t,
		onZoom: s,
		options: r
	}) => {
		const [o, a] = c.useState(), [i, l] = c.useState([0, 100]), [d, m] = c.useState(void 0), f = c.useCallback(() => {
			o == null || o.resize()
		}, [o]), [p, x] = Vs();
		return c.useEffect(() => {
			f && f()
		}, [f, x]), c.useEffect(() => {
			var b;
			if (n.current === null) return;
			p(n.current);
			const h = Di(n.current, t);
			if (h === void 0) return;
			h.on("datazoom", g => {
				var w;
				(w = g == null ? void 0 : g.batch) == null || w.map(C => {
					l([C.start, C.end])
				})
			});
			const y = (b = n.current) == null ? void 0 : b.children[0];
			return y == null || y.addEventListener("wheel", g => {
				s && s(g)
			}), m(y), r && h.setOption(r), a(h), () => {
				h == null || h.dispose()
			}
		}, [t]), {
			echart: o,
			zoom: i,
			firstChild: d,
			resizeChart: f
		}
	},
	sp = () => {
		const [n, t] = c.useState(void 0), [s, r] = c.useState(void 0);
		return {
			dragStartTick: n,
			dragStopTick: s,
			setDragStartTick: t,
			setDragStopTick: r
		}
	};

function Fr(n) {
	return yo(n)
}
const wn = (n, t) => (n || (n = [0, 0, 0, 0]), t !== void 0 && (n[3] = t), `rgba(${n[0]},${n[1]},${n[2]},${n[3]})`),
	rp = (n, t, s) => {
		if (!s) return;
		const r = de(t, s),
			o = 3 * r * Math.min(.6, n / 250),
			a = Math.max(r + o, 0),
			i = Math.max(r - o, 0);
		if (isNaN(i) || isNaN(a)) return;
		const l = {
			lower: Ve(a, s),
			upper: Ve(i, s)
		};
		return l.lower > l.upper && ([l.lower, l.upper] = [l.upper, l.lower]), l
	};

function ua({
	topbar: n
}) {
	const {
		token: t,
		liquidityChart: s,
		tickSpacing: r,
		poolSummary: o
	} = oe(), {
		currentChain: a
	} = D(), [i, l] = c.useState(""), [d, m] = c.useState(void 0), {
		highlightBounds: f,
		setHighlightBounds: p
	} = Ct(), [x, h] = c.useState(), [y, b] = c.useState(0), g = c.useCallback(() => {
		if (s && t) return rp(s.tick_spacing, s.current_pool_tick, t)
	}, [s, t]), [w, C] = c.useState(g()), k = A => {
		if (!A) {
			C(g());
			return
		}
		isNaN(A.upper) || isNaN(A.lower) || s && A.upper - A.lower < s.tick_spacing * 4 || [A.upper > Zt, A.upper < vt, A.lower < vt].some(B => B) || C(A)
	}, T = c.useRef(null), {
		zoom: E,
		firstChild: N,
		echart: S
	} = da({
		chartRef: T,
		options: {
			animationDuration: 250,
			visualMap: [],
			grid: {
				top: 10,
				left: 0,
				right: 60
			},
			dataZoom: [{
				show: !0,
				type: "inside",
				realtime: !0,
				start: 25,
				end: 75,
				xAxisIndex: [0],
				moveOnMouseMove: "shift",
				minSpan: 5,
				preventDefaultMouseMove: !1
			}, {
				show: !0,
				showDataShadow: !1,
				type: "slider",
				realtime: !0,
				minSpan: 5,
				start: 25,
				end: 75
			}],
			toolbox: {
				show: !1
			},
			brush: {
				brushMode: "single",
				xAxisIndex: "all",
				brushLink: "all",
				brushStyle: {
					color: wn(yo(u.blue[300]), .25)
				}
			},
			xAxis: {
				type: "value",
				splitLine: {
					show: !1
				},
				axisLabel: {
					formatter: A => js(e.jsx(e.Fragment, {
						children: L({
							num: A,
							stringOut: !0,
							smallNumberOn2Zeros: !0,
							showOnly2Digits: !0
						})
					}))
				}
			},
			yAxis: {
				type: "value",
				position: "right",
				min: 0,
				axisLine: {
					show: !1
				},
				splitLine: {
					show: !1
				}
			},
			series: [{
				name: "liquidityfull",
				type: "line",
				xAxisIndex: 0,
				step: "end",
				symbol: "none"
			}, {
				name: "liquidityone",
				type: "line",
				xAxisIndex: 0,
				step: "end",
				symbol: "none"
			}, {
				name: "liquiditytwo",
				type: "line",
				xAxisIndex: 0,
				step: "start",
				symbol: "none"
			}]
		}
	});
	c.useEffect(() => {
		if (!N || !S) return;
		const A = B => {
			b(B.timeStamp)
		};
		return N.addEventListener("wheel", A), () => {
			N.removeEventListener("wheel", A)
		}
	}, [N, S]);
	const {
		dragStartTick: G,
		setDragStartTick: _,
		dragStopTick: v,
		setDragStopTick: I
	} = sp();
	return c.useEffect(() => {
		if (r === void 0 || G == null) return;
		const A = Je(G, r, t);
		let B = A + r;
		v !== void 0 && (B = Je(v, r, t)), A == B && (B = A + r), p({
			lower: A,
			upper: B
		})
	}, [G, v, r]), c.useEffect(() => {
		if (!S || !r) return;
		const A = (F, K, V, U) => {
				const z = F + (U ? K : -K);
				return Je(z, K, V)
			},
			B = F => {
				var $, te;
				let K = (te = ($ = F == null ? void 0 : F.areas) == null ? void 0 : $.pop()) == null ? void 0 : te.coordRange;
				(!K || !K.length || K.length < 2) && (K = [0, 0]);
				const V = K[1],
					U = K[0];
				if (K[0] == K[1]) return;
				let z = Je(Ve(V, t), r, t),
					W = Je(Ve(U, t), r, t);
				if (r === 1) {
					const q = Je(Ve(V, t), r, t),
						le = Je(Ve(U, t), r, t),
						ae = A(q, r, t, !0),
						ie = A(le, r, t, !0),
						pe = A(q, r, t, !1),
						ce = A(le, r, t, !1);
					z = q, W = le, Math.abs(V - de(ae, t)) < Math.abs(V - de(q, t)) && Math.abs(V - de(ae, t)) < Math.abs(V - de(pe, t)) ? z = ae : Math.abs(V - de(pe, t)) < Math.abs(V - de(q, t)) && (z = pe), Math.abs(U - de(ie, t)) < Math.abs(U - de(le, t)) && Math.abs(U - de(ie, t)) < Math.abs(U - de(ce, t)) ? W = ie : Math.abs(U - de(ce, t)) < Math.abs(U - de(le, t)) && (W = ce)
				}
				W === z && (W = W + r), p({
					upper: z,
					lower: W
				})
			};
		S.on("click", F => {
			window.log.log(F)
		});
		const M = F => {
				F && F.command === "clear" && p(void 0)
			},
			H = S.getZr(),
			X = F => {
				if (F.which === 3 || F.event.shiftKey || f) return;
				const K = [F.offsetX, F.offsetY],
					V = S.convertFromPixel("grid", K);
				if (!S.containPixel("grid", K)) return;
				const U = Ve(V[0], t);
				_(U)
			},
			Z = F => {
				if (F.which === 3 || F.event.shiftKey) return;
				const K = [F.offsetX, F.offsetY],
					V = S.convertFromPixel("grid", K);
				if (!S.containPixel("grid", K)) return;
				const U = Ve(V[0], t);
				I(U), _(void 0)
			},
			J = F => {
				if (F.which === 3 || F.event.shiftKey) return;
				const K = [F.offsetX, F.offsetY],
					V = S.convertFromPixel("grid", K);
				if (!S.containPixel("grid", K)) return;
				const U = Ve(V[0], t);
				I(U)
			};
		return H == null || H.on("mousemove", J), H == null || H.on("mousedown", X), H == null || H.on("mouseup", Z), S.on("brush", M), S.on("brushEnd", B), () => {
			S.off("brush", B), S.off("brushEnd", B);
			try {
				H == null || H.off("mousemove", J), H == null || H.off("mousedown", X), H == null || H.off("mouseup", Z)
			} catch {
				return
			}
		}
	}, [S, t, r, f]), c.useEffect(() => {
		if (!s) return;
		const A = s.pool;
		A !== i && (k(void 0), l(A))
	}, [s]), c.useEffect(() => {
		if (w && (E[0] === 0 || E[1] == 100)) {
			let A = .07;
			Math.abs(w.upper - w.lower) < 250 && (A = .005);
			const B = de(w.upper, t),
				M = de(w.lower, t),
				H = (B + M) / 2 * A * -t.sign,
				X = {
					lower: Ve(M - H, t),
					upper: Ve(B + H, t)
				};
			k(X)
		}
	}, [E, y]), c.useEffect(() => {
		if (w === void 0 && k(void 0), s && t) {
			const A = s.current_pool_tick;
			m(A);
			const B = tp(t, s);
			h({
				ticks: B,
				currentTick: s.current_pool_tick,
				tickSpacing: s.tick_spacing
			})
		}
		w === void 0 && k(void 0)
	}, [s, t]), c.useEffect(() => {
		if (!S) return;
		if (!f) {
			S.dispatchAction({
				type: "brush",
				areas: []
			});
			return
		}
		const [A, B] = [de(f.lower, t), de(f.upper, t)];
		S.dispatchAction({
			type: "brush",
			areas: [{
				brushType: "lineX",
				xAxisIndex: 0,
				coordRange: [A, B]
			}]
		})
	}, [f, S, t]), c.useEffect(() => {
		if (!x || !w || x.ticks.length === 0) return;
		const A = {
			...x.ticks[0]
		};
		A.tick = A.tick - x.tickSpacing, A.amount = 0;
		const B = {
			...x.ticks[x.ticks.length - 1]
		};
		B.tick = B.tick + x.tickSpacing, B.amount = 0;
		const M = [...x.ticks];
		M.push(B), M.unshift(A);
		const H = Je(w.lower, x.tickSpacing, t) - x.tickSpacing * 3,
			X = Je(w.upper, x.tickSpacing, t) + x.tickSpacing * 3,
			Z = M.filter(V => ca(H, X, V.tick)).map(V => ({
				...V
			}));
		Z.find(V => V.tick === Math.floor(X)) || Z.push({
			tick: X,
			price: de(X, t),
			amount: 0
		}), Z.find(V => V.tick === Math.floor(H)) || Z.unshift({
			tick: H,
			price: de(H, t),
			amount: 0
		}), Z.sort((V, U) => {
			const z = V.tick,
				W = U.tick;
			return z < W ? -1 : z > W ? 1 : 0
		});
		for (let V = Z.length; V > 0; V--) Z[V] && Z[V].tick == Z[V - 1].tick && (Z[V - 1].amount += Z[V].amount, Z.splice(V, 1));
		if (d !== void 0)
			for (const [V, U] of Z.entries()) {
				const z = d - U.tick;
				if (z == 0) break;
				if (z < 0) {
					const W = de(d || 0, t),
						$ = {
							tick: d,
							price: W,
							amount: 0
						};
					Z.splice(V, 0, $);
					break
				}
			}
		const J = Z.map(V => {
			const U = V.amount > 0 ? V.amount : 0;
			return [V.price, U, V.tick]
		});
		if (!S) return;
		const F = Fr(u.green[600]) || [0, 0, 0, 0],
			K = Fr(u.red[600]) || [0, 0, 0, 0];
		if (S.setOption({
				series: [{
					name: "liquidityfull",
					data: J,
					lineStyle: {
						color: "rgba(0,0,0,0)"
					},
					xAxisIndex: 0,
					areaStyle: {
						color: "rgba(0,0,0,0)"
					}
				}, {
					name: "liquidityone",
					data: J.filter(V => V[2] <= (d || 0)),
					lineStyle: {
						color: u.red[400]
					},
					xAxisIndex: 0,
					areaStyle: {
						color: new cr(0, 0, 0, 1, [{
							offset: 0,
							color: wn([K[0], K[1], K[2], 1])
						}, {
							offset: 1,
							color: wn([K[0], K[1], K[2], .25])
						}])
					}
				}, {
					name: "liquiditytwo",
					data: J.filter(V => V[2] >= (d || 0)),
					lineStyle: {
						color: u.green[400]
					},
					xAxisIndex: 0,
					areaStyle: {
						color: new cr(0, 0, 0, 1, [{
							offset: 0,
							color: wn([F[0], F[1], F[2], 1])
						}, {
							offset: 1,
							color: wn([F[0], F[1], F[2], .25])
						}])
					}
				}]
			}), u.gray, J.length > 0) {
			const V = J[0][0],
				U = J[J.length - 1][0];
			S.setOption({
				xAxis: {
					min: t.flipped ? U : V,
					max: t.flipped ? V : U
				}
			})
		}
		S.setOption({
			tooltip: {
				trigger: "axis",
				position: [0, 0],
				backgroundColor: "rgba(0,0,0,0)",
				borderWidth: 0,
				formatter: V => {
					if (Array.isArray(V)) {
						if (V.length === 0) return "";
						const z = V[0].data,
							W = [R(o.t1, o.t1_symbol, a), R(o.t0, o.t0_symbol, a)];
						return js(e.jsxs("div", {
							className: "flex flex-col gap-1 border-gray-700 border bg-gray-750 p-2 rounded-md",
							children: [e.jsx("div", {
								className: "text-xs text-gray-300 flex flex-row whitespace-pre",
								children: `Tick ${z[2]}`
							}), e.jsxs("div", {
								className: "text-white text-sm justify-between text-xs flex flex-row gap-12",
								children: [e.jsxs("div", {
									className: "flex flex-row gap-1",
									children: [W[t.selected], e.jsx("div", {
										children: "Price:"
									})]
								}), L({
									num: de(z[2], t),
									stringOut: !0,
									singleLetterNotation: !0
								})]
							}), e.jsxs("div", {
								className: "text-white text-sm justify-between text-xs flex flex-row",
								children: [e.jsxs("div", {
									className: "flex flex-row gap-1",
									children: [W[t.selected === 1 ? 0 : 1], e.jsx("div", {
										children: "Price:"
									})]
								}), L({
									num: 1 / de(z[2], t),
									stringOut: !0,
									singleLetterNotation: !0
								})]
							}), z[1] > 0 && e.jsxs("div", {
								className: "text-white text-sm justify-between text-xs flex flex-row",
								children: [e.jsx("div", {
									className: "flex flex-row gap-1",
									children: e.jsx("div", {
										children: "Value:"
									})
								}), L({
									num: z[1],
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
	}, [w, x, t, S, o, a]), e.jsxs("div", {
		className: "flex flex-1 w-full flex-col",
		onContextMenu: A => {
			A.preventDefault(), p(void 0)
		},
		children: [n && e.jsx(np, {
			height: Ls
		}), e.jsx("div", {
			className: "grow h-fit overflow-hidden relative",
			children: e.jsx("div", {
				ref: T,
				className: "w-full h-full absolute"
			})
		})]
	})
}
const op = "Trade DeFi with Ukia, a professional-grade Uniswap v3 front-end platform. Enjoy live trading, track orders, and implement limit and market orders with precision. Ideal for pro traders seeking advanced DEX features.",
	ap = "Trade DeFi with Ukia, a professional-grade Uniswap v3 front-end platform. Enjoy live trading, track orders, and implement limit and market orders with precision. Ideal for pro traders seeking advanced DEX features.",
	rs = n => {
		let {
			pageTitle: t,
			pageDescription: s,
			longPageDescription: r
		} = n;
		return t = t ? t.toString() : "oku.trade", s = s ? s.toString() : op, r = r ? r.toString() : ap, e.jsxs(go, {
			prioritizeSeoTags: !0,
			children: [e.jsx("title", {
				children: t
			}), e.jsx("meta", {
				name: "description",
				content: s
			}), e.jsx("meta", {
				property: "og:description",
				content: r
			}), e.jsx("meta", {
				property: "twitter:description",
				content: r
			}), e.jsx("meta", {
				property: "og:title",
				content: t
			}), e.jsx("meta", {
				property: "twitter:title",
				content: t
			})]
		})
	},
	ip = () => {
		const n = Kt();
		return e.jsx(e.Fragment, {
			children: e.jsxs(go, {
				children: [e.jsx("meta", {
					charSet: "utf-8"
				}), e.jsx("meta", {
					name: "keywords",
					content: "Crypto, Uniswap, Token, Pool, Trade, Analytics, Dex, Position, Swap, Price, Volume"
				}), e.jsx("meta", {
					property: "og:type",
					content: "website"
				}), e.jsx("meta", {
					property: "og:url",
					content: `https://www.oku.trade/app${n.pathname}`
				}), e.jsx("meta", {
					property: "og:image",
					content: "https://cdn.gfx.xyz/okusplash.png"
				})]
			})
		})
	},
	lp = () => {
		const {
			isMobile: n
		} = Ze(), [t, s] = c.useState(!1), {
			address: r
		} = we(), {
			currentChainInfo: o
		} = D(), {
			appLayout: a
		} = xt(), {
			setEditPosition: i,
			setPosition: l,
			setInputToken0: d,
			setInputToken1: m
		} = Nt(), {
			setHighlightBounds: f
		} = Ct(), {
			token0: p,
			token1: x,
			poolSummary: h
		} = oe(), {
			token_id: y
		} = Ht(), b = $s({
			chainId: o.id
		}), {
			setIsLoading: g
		} = Tt();
		c.useEffect(() => {
			g(!1)
		});
		const [w, C] = c.useState(void 0), {
			currentPositions: k
		} = Vt(), {
			data: T,
			fetchStatus: E
		} = be("cush_getPositions", [{
			token_id: Number(y)
		}], {
			enabled: y !== void 0
		});
		c.useEffect(() => {
			if (T && (T == null ? void 0 : T.length) > 0 && T[0].tokenId === y) {
				const _ = T[0];
				_.tickLower && _.tickUpper && _.pool === h.address && (i(!0), l(_), f({
					lower: _.tickLower,
					upper: _.tickUpper
				}), d(""), m(""))
			}
		}, [h.address, E]), c.useEffect(() => {
			if (k) {
				const _ = k.filter(v => v.current_liquidity !== "0").sort((v, I) => {
					const A = Number(I.current_position_values.amount0_current_usd) + Number(I.current_position_values.amount1_current_usd),
						B = Number(v.current_position_values.amount0_current_usd) + Number(v.current_position_values.amount1_current_usd);
					return A - B
				});
				C(_)
			}
		}, [r, k, b]);
		const N = a === Ut.DEFAULT,
			S = p && x ? `${x==null?void 0:x.symbol}/${p==null?void 0:p.symbol} | LP Position Manager | Ukia Trade` : "LP Position Manager | Ukia Trade",
			G = p && x && h ? `${x==null?void 0:x.symbol}/${p==null?void 0:p.symbol} has a 24h trading volume of $${L({num:h.total_volume_7d_usd,stringOut:!0,singleLetterNotation:!0})} with $${h.fee/1e6*h.total_volume_7d_usd} in fees. The TVL is $${L({num:h.tvl_usd,stringOut:!0,singleLetterNotation:!0})}. Liquidity depth, chart analytics, position creation, and more on Ukia Trade.` : "Liquidity depth, chart analytics, position creation, and more on Ukia Trade.";
		return e.jsxs("div", {
			className: "flex-col flex flex-1 w-full h-full",
			children: [e.jsx(rs, {
				pageTitle: S,
				pageDescription: G
			}), e.jsxs("div", {
				className: `
          flex flex-1  ${n?"flex-col":N?"flex-row-reverse":"flex-row"} h-fit gap-2 p-2
        `,
				children: [e.jsxs("div", {
					className: "grid gap-2 grid-rows-[400px] sm:grid-rows-[1fr_415px] flex-1",
					children: [e.jsx("div", {
						className: `flex flex-col grow
            rounded-xl border-[1px] border-gray-800 bg-gray-dark p-4
            `,
						children: e.jsx(ua, {
							topbar: !0
						})
					}), e.jsx("div", {
						className: "hidden sm:flex",
						children: e.jsx(As, {
							positions: w
						})
					})]
				}), e.jsxs("div", {
					className: "flex flex-col gap-2 sm:max-w-[286px]",
					children: [e.jsx("div", {
						className: "flex sm:hidden",
						children: e.jsx(Ks, {
							item: t,
							setItem: s,
							item1: "Add Position",
							item2: "Manage Positions"
						})
					}), e.jsx("div", {
						className: "flex sm:hidden",
						children: t ? e.jsxs("div", {
							className: "flex w-full flex-col h-full gap-2",
							children: [e.jsx(Sr, {}), e.jsx(Ar, {}), e.jsx(Mr, {})]
						}) : e.jsx(As, {
							positions: w
						})
					}), e.jsxs("div", {
						className: "hidden sm:flex flex flex-col w-full h-full gap-2",
						children: [e.jsx(Sr, {}), e.jsx(Ar, {}), e.jsx(Mr, {})]
					})]
				})]
			})]
		})
	},
	pa = n => {
		const {
			order: t
		} = n, {
			currentChainInfo: s
		} = D(), r = t && t.base_currency_address && R(t.base_currency_address, t.base_currency, s.id), o = t && t.quote_currency_address && R(t.quote_currency_address, t.quote_currency, s.id);
		if (t.type === "MARKET") {
			if (t.side === "BUY") return e.jsxs("div", {
				className: "flex gap-1",
				children: [e.jsx(L, {
					num: t.amount_total ? t.amount_total : 0,
					singleLetterNotation: !0
				}), e.jsx("span", {
					children: r
				})]
			}); {
				const a = Number(t.amount_total) * Number(t.price);
				return e.jsxs("div", {
					className: "flex gap-1",
					children: [e.jsx(L, {
						num: a,
						singleLetterNotation: !0
					}), e.jsx("span", {
						children: o
					})]
				})
			}
		} else if (t.side === "BUY") {
			const a = Number(t.amount_total) / Number(t.price);
			return e.jsxs("div", {
				className: "flex gap-1",
				children: [e.jsx(L, {
					num: a,
					singleLetterNotation: !0
				}), e.jsx("span", {
					children: r
				})]
			})
		} else {
			const a = Number(t.amount_total) * Number(t.price);
			return e.jsxs("div", {
				className: "flex gap-1",
				children: [e.jsx(L, {
					num: a,
					singleLetterNotation: !0
				}), e.jsx("span", {
					children: o
				})]
			})
		}
	},
	ma = n => {
		const {
			order: t
		} = n, {
			currentChainInfo: s
		} = D(), r = t && t.base_currency_address && R(t.base_currency_address, t.base_currency, s.id), o = t && t.quote_currency_address && R(t.quote_currency_address, t.quote_currency, s.id);
		if (t.type === "MARKET")
			if (t.side === "BUY") {
				const a = Number(t.amount_total) * Number(t.price);
				return e.jsxs("div", {
					className: "flex gap-1",
					children: [e.jsx(L, {
						num: a,
						singleLetterNotation: !0
					}), e.jsx("span", {
						children: o
					})]
				})
			} else return e.jsxs("div", {
				className: "flex gap-1",
				children: [e.jsx(L, {
					num: Number(t.amount_total),
					singleLetterNotation: !0
				}), e.jsx("span", {
					children: r
				})]
			});
		else return t.side === "BUY" ? e.jsxs("div", {
			className: "flex gap-1",
			children: [e.jsx(L, {
				num: Number(t.amount_total),
				singleLetterNotation: !0
			}), e.jsx("span", {
				children: o
			})]
		}) : e.jsxs("div", {
			className: "flex gap-1",
			children: [e.jsx(L, {
				num: Number(t.amount_total),
				singleLetterNotation: !0
			}), e.jsx("span", {
				children: r
			})]
		})
	},
	fa = n => {
		const {
			order: t
		} = n, {
			currentChainInfo: s
		} = D(), r = t && t.base_currency_address && R(t.base_currency_address, t.base_currency, s.id), o = t && t.quote_currency_address && R(t.quote_currency_address, t.quote_currency, s.id), a = t.should_flip ? 1 / Number(t.avg_price) : Number(t.avg_price);
		return e.jsxs("div", {
			className: "flex gap-1",
			children: [e.jsx(L, {
				num: a,
				singleLetterNotation: !0
			}), e.jsx("span", {
				children: t.should_flip ? r : o
			})]
		})
	},
	cp = n => {
		const [t, s] = c.useState(u.blue[800]), [r, o] = c.useState(u.blue[500]), [a, i] = c.useState("");
		c.useEffect(() => {
			switch (n.status.toUpperCase()) {
				case gt.OPEN:
					s(u.green[700]), o(u.green[400]), i("Open");
					break;
				case gt.FILLED:
					s(u.blue[700]), o(u.blue[400]), i("Filled");
					break;
				case gt.CLOSED:
					s(u.blue[800]), o(u.blue[500]), i("Closed");
					break;
				case gt.CLAIMED:
					s(u.blue[800]), o(u.blue[500]), i("Claimed");
					break;
				case gt.IN_RANGE:
					s(u.green[700]), o(u.green[400]), i("In range");
					break;
				case gt.OUT_OF_RANGE:
					s(u.gray[700]), o(u.yellow[100]), i("Out of range");
					break;
				case gt.CANCELLED:
					s(u.gray[600]), o(u.gray[300]), i("Cancelled");
					break;
				default:
					s(u.gray[600]), o(u.gray[300]), i("Unknown");
					break
			}
		}, [n.status]);
		const {
			isDesktop: l
		} = Ze();
		return e.jsx("div", {
			className: "py-2 text-[14px] font-regular rounded-[6px] flex items-center justify-center",
			style: {
				backgroundColor: t,
				width: l ? "94px" : "75px"
			},
			children: e.jsx(j, {
				color: r,
				children: a
			})
		})
	};

function Ps(n) {
	return n.charAt(0).toUpperCase() + n.toLowerCase().slice(1)
}
const tr = (n, t, s) => jt({
		abi: ss,
		address: n,
		client: {
			public: t,
			wallet: s
		}
	}),
	dp = async ({
		pool: n,
		targetTick: t,
		amount: s,
		direction: r,
		signer: o,
		provider: a,
		tickSpacing: i,
		contract: l
	}) => {
		try {
			const d = Ts(t, i),
				m = r ? 1 : 0,
				f = new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).getTime();
			return en(a, o, l, mt({
				functionName: "newOrder",
				abi: ss,
				args: [n, d, s, m === 1, 0n, BigInt(f)]
			}))
		} catch (d) {
			throw window.log.log(d), new Error(`Error for newOrder in limitOrder.ts, ${d}`)
		}
	}, up = async ({
		provider: n,
		userDataId: t,
		userAddress: s,
		signer: r,
		contract: o
	}) => {
		try {
			const i = await tr(o, n, r).read.getFeePerUser([BigInt(t)]);
			return window.log.log(i), en(n, r, o, mt({
				functionName: "claimOrder",
				abi: ss,
				args: [BigInt(t), s]
			}), {
				value: i
			})
		} catch (a) {
			throw window.log.log(a), new Error(`Error for claimOrder in limitOrder.ts, ${a}`)
		}
	}, pp = async ({
		pool: n,
		targetTick: t,
		direction: s,
		signer: r,
		provider: o,
		contract: a
	}) => {
		try {
			window.log.log(n, t, s);
			const i = Date.now() + 60 * 60;
			return en(o, r, a, mt({
				functionName: "cancelOrder",
				abi: ss,
				args: [n, t, s, BigInt(i)]
			}))
		} catch (i) {
			throw window.log.log(i), new Error(`Error for cancelOrder in limitOrder.ts, ${i}`)
		}
	}, mp = async ({
		pool: n,
		provider: t,
		contract: s
	}) => {
		try {
			return await tr(s, t, void 0).read.poolToData([n])
		} catch (r) {
			throw window.log.log(r), new Error(`Error in poolToData in limitOrder.ts, ${r}`)
		}
	}, fp = async ({
		tokenAddress: n,
		provider: t,
		contract: s
	}) => {
		try {
			return await tr(s, t, void 0).read.minimumAssets([n])
		} catch (r) {
			throw window.log.log(r), new Error(`Error for minimumAssets in limitOrder.ts, ${r}`)
		}
	};

function xp(n) {
	const {
		order: t,
		setIsOpen: s
	} = n, r = An(), {
		address: o
	} = we(), {
		currentChain: a
	} = D(), {
		signer: i,
		provider: l
	} = kt(), {
		currentChainInfo: d
	} = D(), m = Kt(), {
		pageParam: f
	} = na(m), {
		features: {
			Telemetry: p
		}
	} = Te(), {
		telemetryRpc: x
	} = bn(), h = C => {
		C.transaction != null && (s(!1), window.open(fn("tx", C.transaction.toString(), d.id)))
	}, {
		getAndSetAllUserOrders: y
	} = Vt();
	let b;
	const g = async C => {
		var T;
		s(!1);
		const k = (T = C.limit_order_full) == null ? void 0 : T.batch_id;
		if (i && k && o && l && "limitOrder" in d.contracts) try {
			b = r.add({
				state: Y.EXECUTE_CLAIM
			});
			const E = await up({
				userDataId: k,
				userAddress: o,
				signer: i,
				provider: l,
				contract: d.contracts.limitOrder.address
			});
			b = r.replace(b, {
				state: Y.EXECUTE_CLAIM_IN_PROGRESS,
				txHash: E,
				chainId: a
			});
			const N = await l.waitForTransactionReceipt({
				hash: E
			});
			p.enabled && await Jt(x, a, f, "claim_limit_order", o, N.transactionHash, {}), Ke("claim_limit_order", {
				chain: d.name,
				pool: C.pool,
				order: C.transaction,
				transaction: N.transactionHash
			}), b = r.replace(b, {
				state: Y.EXECUTE_CLAIM_SUCCESS,
				txHash: N.transactionHash,
				chainId: a
			}), setTimeout(() => {
				y(o)
			}, 5e3)
		} catch (E) {
			if ("transactionHash" in E) {
				const N = E;
				window.log.error(N), r.replace(b, {
					state: Y.EXECUTE_CLAIM_ERROR,
					txHash: N.transactionHash,
					chainId: a
				})
			}
		}
	}, w = async C => {
		var N, S, G;
		s(!1);
		const k = (N = C.limit_order_full) == null ? void 0 : N.direction,
			T = k ? (G = C.limit_order_full) == null ? void 0 : G.tick_upper : (S = C.limit_order_full) == null ? void 0 : S.tick_lower,
			E = C.pool;
		if (window.log.log(E, T, k, a, E, C.side), !!(l && i && E && k !== void 0 && "limitOrder" in d.contracts && T && o)) try {
			b = r.add({
				state: Y.EXECUTE_CANCEL
			});
			const _ = await pp({
				pool: E,
				provider: l,
				targetTick: T,
				direction: k,
				signer: i,
				contract: d.contracts.limitOrder.address
			});
			b = r.replace(b, {
				state: Y.EXECUTE_CANCEL_IN_PROGRESS,
				txHash: _,
				chainId: a
			});
			const v = await l.waitForTransactionReceipt({
				hash: _
			});
			p.enabled && await Jt(x, a, f, "cancel_limit_order", o, v.transactionHash, {}), Ke("cancel_limit_order", {
				chain: d.name,
				pool: C.pool,
				order: C.transaction,
				transaction: v.transactionHash
			}), b = r.replace(b, {
				state: Y.EXECUTE_CANCEL_SUCCESS,
				txHash: v.transactionHash,
				chainId: a
			}), setTimeout(() => {
				y(o)
			}, 5e3)
		} catch (_) {
			if ("transactionHash" in _) {
				const v = _;
				window.log.error(v), r.replace(b, {
					state: Y.EXECUTE_CANCEL_ERROR,
					txHash: v.transactionHash,
					chainId: a
				})
			}
		}
	};
	return e.jsxs(e.Fragment, {
		children: [e.jsx(hs, {
			onClick: () => h(t),
			color: u.blue[400],
			children: Kn(d.id)
		}), t && t.type === "LIMIT" && e.jsxs(e.Fragment, {
			children: [t.status === "OPEN" && e.jsxs("div", {
				children: [e.jsx(Qt, {
					containerClasses: "mx-2"
				}), e.jsx(hs, {
					onClick: () => w(t),
					color: u.red[500],
					children: "Cancel Order"
				})]
			}), t.status === "FILLED" && e.jsxs("div", {
				children: [e.jsx(Qt, {
					containerClasses: "mx-2"
				}), e.jsx(hs, {
					onClick: () => g(t),
					color: u.white,
					children: "Claim Order"
				})]
			})]
		})]
	})
}
const hs = n => {
	const {
		onClick: t,
		color: s,
		children: r
	} = n;
	return e.jsx("div", {
		className: "p-3 cursor-pointer hover:bg-gray-drophover rounded-lg",
		onClick: t,
		children: e.jsx(j, {
			color: s,
			className: "whitespace-nowrap ",
			children: r
		})
	})
};

function xa(n) {
	const {
		order: t
	} = n, [s, r] = c.useState(!1), {
		refs: o,
		floatingStyles: a,
		context: i
	} = Ce({
		whileElementsMounted: Ie,
		open: s,
		onOpenChange: r,
		middleware: [es(), ho()],
		placement: "bottom-end"
	}), {
		styles: l
	} = Ae(i, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), d = Le(i), m = Pe(i), {
		getReferenceProps: f,
		getFloatingProps: p
	} = Ne([m, d]);
	return e.jsx(e.Fragment, {
		children: e.jsxs("div", {
			className: "",
			children: [e.jsx("div", {
				ref: o.setReference,
				...f(),
				className: "gap-1 text-white text-xs font-semibold py-2 px-2 rounded-lg flex justify-between cursor-pointer items-center w-fit",
				children: e.jsx(Fi, {
					width: 16,
					color: u.gray[400]
				})
			}), s && e.jsx("div", {
				className: "mt-1 z-10",
				style: {
					...a
				},
				...p(),
				ref: o.setFloating,
				children: e.jsx("div", {
					style: l,
					className: "w-full flex flex-col bg-gray-800 border-[1px] border-gray-700 rounded-lg",
					children: e.jsx(xp, {
						order: t,
						setIsOpen: r
					})
				})
			})]
		})
	})
}

function hp(n) {
	const {
		historyData: t,
		pageSize: s = 10
	} = n, [r, o] = c.useState(1), {
		currentChainInfo: a
	} = D(), [i, l] = c.useState(null), [d, m] = c.useState(null), [f, p] = c.useState([]), [x, h] = c.useState(void 0), [y, b] = c.useState(re.DATE), [g, w] = c.useState(_e.DESC), C = c.useMemo(() => {
		const _ = f.map(M => Number(M) * 1e4),
			I = t.filter(M => i === null && d === null ? !0 : i !== null && d !== null && M.time ? M.time >= i.getTime() && M.time <= d.getTime() : !!(i !== null && M.time && M.time >= i.getTime() || d !== null && M.time && M.time <= d.getTime())).filter(M => f.length === 0 || M.fee && _.includes(M.fee));
		if (x === void 0) return I;
		const A = x.address.toLowerCase();
		return I.filter(M => x === void 0 || M.base_currency_address && M.base_currency_address.toLowerCase() === A || M.quote_currency_address && M.quote_currency_address.toLowerCase() === A)
	}, [f, t, x, i, d]), k = c.useMemo(() => [...C].sort((v, I) => {
		var A, B;
		if (y === re.DATE) return !(v != null && v.time) || !(I != null && I.time) ? 0 : g === _e.ASC ? (v == null ? void 0 : v.time) - (I == null ? void 0 : I.time) : (I == null ? void 0 : I.time) - (v == null ? void 0 : v.time);
		if (y === re.TYPE) return !(v != null && v.type) || !(I != null && I.type) ? 0 : g === _e.ASC ? (A = v.type) == null ? void 0 : A.localeCompare(I.type) : (B = I.type) == null ? void 0 : B.localeCompare(v.type);
		if (y === re.BUY_AMOUNT) {
			let M = 0,
				H = 0;
			return v.side === "BUY" ? (M = Number(v.amount_total) / Number(v.price), H = Number(I.amount_total) / Number(I.price)) : (M = Number(v.amount_total) * Number(v.price), H = Number(I.amount_total) * Number(I.price)), g === _e.ASC ? M - H : H - M
		}
		return y === re.SELL_AMOUNT ? g === _e.ASC ? Number(v.amount_total) - Number(I.amount_total) : Number(I.amount_total) - Number(v.amount_total) : y === re.PRICE ? !(v != null && v.avg_price) || !(I != null && I.avg_price) ? 0 : g === _e.ASC ? v.avg_price - I.avg_price : I.avg_price - v.avg_price : 0
	}), [C, g, y]), T = c.useMemo(() => {
		const _ = (r - 1) * s,
			v = _ + s;
		return k.slice(_, v)
	}, [r, k]), E = Bs(), N = he({
		base: {
			date: !1,
			buy_amount: !1,
			sell_amount: !1,
			status: !1,
			transaction: !1,
			type: !1
		},
		sm: {
			date: !1,
			buy_amount: !1,
			sell_amount: !1,
			type: !1,
			status: !1,
			transaction: !0
		},
		md: {
			date: !1,
			buy_amount: !1,
			sell_amount: !1,
			type: !0,
			status: !0,
			transaction: !0
		},
		lg: {
			buy_amount: !0,
			sell_amount: !0,
			type: !0,
			date: !1,
			transaction: !0
		},
		xl: {
			date: !0
		}
	}), S = c.useMemo(() => [E.accessor(_ => _.time, {
		id: "date",
		header: () => e.jsx("div", {
			className: "flex justify-start pl-5",
			children: e.jsx(ut, {
				title: "Date",
				handleSortingToggle: () => pt(y, re.DATE, w, b),
				sorting: re.DATE === y ? g : void 0
			})
		}),
		cell: _ => e.jsx(O, {
			color: u.gray[50],
			children: _.row.original.time ? Zs(_.row.original.time) : ""
		})
	}), E.accessor(_ => _.base_currency_address + "/" + _.quote_currency_address, {
		id: "pool",
		header: () => e.jsx(Gt, {
			title: "Pool",
			classes: "text-left"
		}),
		cell: _ => {
			const v = _.row.original;
			return e.jsxs("div", {
				className: "flex gap-1",
				children: [e.jsx(Mu, {
					token0Address: v.base_currency_address ? v.base_currency_address : "",
					token1Address: v.quote_currency_address ? v.quote_currency_address : "",
					token0Symbol: v.base_currency_address ? R(v.base_currency_address, v.base_currency, a.id) : "",
					token1Symbol: v.quote_currency_address ? R(v.quote_currency_address, v.quote_currency, a.id) : ""
				}), e.jsx("div", {
					className: "rounded-[6px] p-1",
					style: {
						backgroundColor: u.gray[600]
					},
					children: e.jsxs(O, {
						children: [v.fee && v.fee / 1e4, "%"]
					})
				})]
			})
		}
	}), E.accessor(_ => _.transaction, {
		id: "transaction",
		header: () => e.jsx(Gt, {
			title: "Tx Hash",
			classes: "text-left"
		}),
		cell: _ => {
			const v = _.row.original.transaction;
			return e.jsx(O, {
				color: u.blue[400],
				children: Eo(v)
			})
		}
	}), E.accessor(_ => _.type, {
		id: "type",
		header: () => e.jsx("div", {
			className: "flex justify-start ",
			children: e.jsx(ut, {
				title: "Type",
				handleSortingToggle: () => pt(y, re.TYPE, w, b),
				sorting: re.TYPE === y ? g : void 0
			})
		}),
		cell: _ => e.jsx(O, {
			color: u.gray[100],
			children: _.row.original.type ? Ps(_.row.original.type) : ""
		})
	}), E.accessor(_ => _.base_currency, {
		id: "buy_amount",
		header: () => e.jsx("div", {
			className: "flex justify-end",
			children: e.jsx(ut, {
				title: "Buy Amount",
				handleSortingToggle: () => pt(y, re.BUY_AMOUNT, w, b),
				sorting: re.BUY_AMOUNT === y ? g : void 0
			})
		}),
		cell: _ => {
			const v = _.row.original;
			return e.jsx("div", {
				className: "flex justify-end",
				children: e.jsx(O, {
					color: u.gray[100],
					children: e.jsx(pa, {
						order: v
					})
				})
			})
		}
	}), E.accessor(_ => _.quote_currency, {
		id: "sell_amount",
		header: () => e.jsx("div", {
			className: "flex justify-end",
			children: e.jsx(ut, {
				title: "Sell Amount",
				handleSortingToggle: () => pt(y, re.SELL_AMOUNT, w, b),
				sorting: re.SELL_AMOUNT === y ? g : void 0
			})
		}),
		cell: _ => {
			const v = _.row.original;
			return e.jsx("div", {
				className: "flex justify-end",
				children: e.jsx(O, {
					children: e.jsx(ma, {
						order: v
					})
				})
			})
		}
	}), E.accessor(_ => _.price, {
		id: "price",
		header: () => e.jsx("div", {
			className: "flex justify-end",
			children: e.jsx(ut, {
				title: "Price Amount",
				handleSortingToggle: () => pt(y, re.PRICE, w, b),
				sorting: re.PRICE === y ? g : void 0
			})
		}),
		cell: _ => {
			const v = _.row.original;
			return e.jsx("div", {
				className: "flex justify-end",
				children: e.jsx(O, {
					color: u.gray[100],
					children: e.jsx(fa, {
						order: v
					})
				})
			})
		}
	}), E.accessor(_ => _.status, {
		id: "status",
		header: () => e.jsx(Gt, {
			title: "Status",
			classes: "text-left"
		}),
		cell: _ => {
			const v = _.row.original;
			return e.jsx(cp, {
				status: v.status
			})
		}
	}), E.display({
		id: "control",
		header: "",
		cell: _ => {
			const v = _.row.original;
			return e.jsx("div", {
				className: "m-auto w-fit",
				children: e.jsx(xa, {
					order: v
				})
			})
		}
	})], [a, T]), G = vn({
		data: T,
		columns: S,
		getCoreRowModel: _n(),
		state: {
			columnVisibility: N
		}
	});
	return e.jsxs("div", {
		className: "flex flex-col bg-gray-dark rounded-2xl border-[1px] border-gray-800 overflow-hidden w-full",
		children: [e.jsxs("div", {
			className: "flex w-full h-fit justify-between items-center",
			children: [e.jsx(O, {
				weight: P.SEMIBOLD,
				className: " px-5",
				children: "Orders"
			}), e.jsxs("div", {
				className: "flex gap-2 p-3 flex-wrap justify-end",
				children: [e.jsxs("div", {
					className: "flex justify-end gap-2 align-center",
					children: [e.jsx(O, {
						className: "mt-2",
						color: u.gray[400],
						children: "Dates:"
					}), e.jsx(dr, {
						wrapperClassName: "analyticDatePicker",
						selected: i,
						showMonthDropdown: !0,
						showYearDropdown: !0,
						selectsStart: !0,
						startDate: i,
						endDate: d,
						placeholderText: "Start",
						onChange: _ => l(_),
						closeOnScroll: !0,
						dropdownMode: "select",
						isClearable: i !== null,
						formatWeekDay: _ => _.substring(0, 3),
						disabledKeyboardNavigation: !0
					}), e.jsx(j, {
						color: u.gray[200],
						className: "mt-2",
						children: "to"
					}), e.jsx(dr, {
						wrapperClassName: "analyticDatePicker",
						selected: d,
						showMonthDropdown: !0,
						showYearDropdown: !0,
						placeholderText: "End",
						onChange: _ => m(_),
						closeOnScroll: !0,
						dropdownMode: "select",
						isClearable: d !== null,
						selectsEnd: !0,
						startDate: i,
						endDate: d,
						minDate: i,
						formatWeekDay: _ => _.substring(0, 3),
						disabledKeyboardNavigation: !0
					})]
				}), e.jsxs("div", {
					className: "flex gap-x-2",
					children: [h && e.jsx("div", {
						className: "flex flex-row gap-2 items-center",
						children: e.jsx(Qs, {
							isToken0: !0,
							setToken: h,
							token: x
						})
					}), f && p && e.jsx(Is, {
						setFilter: p,
						filter: f,
						label: "Fee Tier",
						filterType: kn
					})]
				})]
			})]
		}), e.jsxs("div", {
			className: "flex flex-col w-full justify-between h-full",
			children: [e.jsxs("table", {
				className: "table-auto",
				children: [e.jsx("thead", {
					className: "bg-gray-900 border-t border-gray-800",
					children: G.getHeaderGroups().map(_ => e.jsx("tr", {
						children: _.headers.map(v => e.jsx("th", {
							colSpan: v.colSpan,
							className: `py-3
                  mx-3
                  px-6
                  ${(()=>{const I={tokenid:"",status:"pl-4",range:"pl-4",pair:"pl-4",date:"pl-0",control:"px-0"}[v.id];return I!==void 0?I:"pl-4"})()}
`,
							children: v.isPlaceholder ? null : un(v.column.columnDef.header, v.getContext())
						}, v.id))
					}, _.id))
				}), e.jsx("tbody", {
					children: G.getRowModel().rows.map(_ => e.jsx("tr", {
						className: "border-y border-gray-800 odd:bg-gray-dark even:bg-gray-900 ",
						children: _.getVisibleCells().map(v => e.jsx("td", {
							className: `${(()=>{const I={tokenid:"",status:"pl-4",range:"pl-4",pair:"pl-4",date:"",control:"pl-0 pr-0"}[v.column.id];return I!==void 0?I:"pl-4"})()}
                px-6 py-3
                `,
							children: un(v.column.columnDef.cell, v.getContext())
						}, v.id))
					}, _.id))
				})]
			}), e.jsx(ra, {
				currentPage: r,
				totalCount: k.length,
				pageSize: s,
				onPageChange: _ => o(_)
			})]
		})]
	})
}

function yp(n) {
	const {
		orderHistoryData: t,
		positionData: s
	} = n, {
		isConnected: r
	} = we(), [o, a] = c.useState([]), [i, l] = c.useState([]), [d, m] = c.useState(), f = c.useMemo(() => {
		const p = s.filter(g => i.length === 0 || i.includes(g.status)),
			x = o.map(g => Number(g) * 1e4),
			h = p.filter(g => o.length === 0 || x.includes(g.position_pool_data.fee));
		if (d === void 0) return h;
		const y = d.address.toLowerCase();
		return h.filter(g => d === void 0 || g.position_pool_data.token0.toLowerCase() === y || g.position_pool_data.token1.toLowerCase() === y)
	}, [o, i, s, d]);
	return e.jsx("div", {
		className: "flex flex-1 rounded-2xl flex-col px-4 overflow:auto gap-y-4",
		children: r ? e.jsxs(e.Fragment, {
			children: [e.jsx(hp, {
				historyData: t
			}), e.jsx(As, {
				positions: f,
				feeFilter: o,
				setFeeFilter: a,
				setStatusFilter: l,
				statusFilter: i,
				tokenFilter: d,
				setTokenFilter: m,
				pageSize: 10
			})]
		}) : e.jsx(ee, {
			children: "Please Connect Wallet"
		})
	})
}
const gp = () => {
		const {
			isConnected: n
		} = we(), {
			currentPositions: t,
			allUserOrders: s
		} = Vt(), {
			setIsLoading: r
		} = Tt();
		return (!n || t !== void 0 && s !== void 0) && r(!1), e.jsx("div", {
			className: "flex flex-1 justify-center overflow:auto",
			children: n ? e.jsxs("div", {
				className: "text-white flex flex-1 flex-col px-8 py-4 bg-black  gap-2 overflow:auto rounded-2xl",
				children: [e.jsx(rs, {
					pageTitle: "DeFi Position Analytics | Ukia Trade",
					pageDescription: "Check out your position analytics on the world’s most advanced DeFi trading platform. Order type, status, entry price, and more on Ukia Trade."
				}), s && e.jsx(yp, {
					orderHistoryData: s,
					positionData: t != null && t.length ? t : []
				})]
			}) : e.jsx(bp, {})
		})
	},
	bp = () => {
		const n = he({
			base: "Connect",
			lg: "Connect Wallet"
		});
		return e.jsxs("div", {
			className: "p-10 border-[1px] border-gray-600 h-fit w-fit  rounded-xl flex flex-col items-center  gap-6 mt-16",
			children: [e.jsxs("div", {
				className: "w-[214px] text-center items-center flex flex-col",
				children: [e.jsx("img", {
					src: "https://assets.oku.trade/chain-image.svg",
					alt: "",
					className: "w-[64px]"
				}), e.jsxs("div", {
					className: "flex flex-col gap-1",
					children: [e.jsx(ee, {
						weight: P.REGULAR,
						children: "Connect your wallet to view"
					}), e.jsx(ee, {
						children: "Order History"
					})]
				})]
			}), e.jsx("div", {
				className: "web3container ",
				children: e.jsx("w3m-button", {
					size: "md",
					balance: "hide",
					label: n
				})
			})]
		})
	},
	wp = 280,
	Ur = 48,
	jp = 18,
	qt = (n, t) => Number(parseFloat(n) * 10 ** -t),
	Ms = (n, t, s, r) => qt(n, s) * (Number(t) * 10 ** -r),
	vp = (n, t) => `linear-gradient(90deg, rgba(255,0,0,0) 0%, rgba(255,0,0,0) ${100-n}%, ${t} ${100-Math.floor(n*5/8)}%, ${t} 100%)`,
	Br = n => {
		const {
			trade: t,
			isBid: s = !0,
			weight: r = 0,
			amountDecimals: o,
			priceDecimals: a,
			scalar: i = 1
		} = n, {
			colors: l
		} = xt(), d = qt(t.size, o), m = Ms(t.size, t.price, o, a);
		return e.jsx("div", {
			className: "flex flex-row w-full px-2 relative my-[2px] items-center rounded-md",
			style: {
				height: jp,
				background: vp(Math.floor(90 * r), s ? l.pos_vol_color : l.neg_vol_color)
			},
			children: e.jsxs("div", {
				className: "grid grid-cols-3 justify-between gap-x-1 w-full z-[2]",
				children: [e.jsx("div", {
					style: {
						color: s ? l.pos_color : l.neg_color,
						userSelect: "none"
					},
					children: e.jsx(Ql, {
						num: qt(t.price, a),
						granularity: i
					})
				}), e.jsx("div", {
					style: {
						userSelect: "none",
						textAlign: "center"
					},
					children: e.jsx(L, {
						num: d,
						singleLetterNotation: !0
					})
				}), e.jsx("div", {
					style: {
						userSelect: "none"
					},
					className: "text-end pr-1",
					children: e.jsx(L, {
						num: m,
						singleLetterNotation: !0
					})
				})]
			})
		})
	},
	_p = ({
		trade: n,
		token0Price: t
	}) => {
		const {
			colors: s
		} = xt(), [r, o] = c.useState("white");
		if (c.useEffect(() => {
				n && n.price && o(i === "BUY" ? s.pos_color : s.neg_color)
			}, [n]), c.useEffect(() => {
				(r === s.pos_color || r === s.neg_color) && setTimeout(() => {
					o("white")
				}, 150)
			}, [r]), !n) return e.jsxs("div", {
			role: "status",
			className: "animate-pulse px-10 my-1 ",
			style: {
				height: Ur
			},
			children: [e.jsx("div", {
				className: "h-[20px] bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px]  mx-auto"
			}), e.jsx("span", {
				className: "sr-only",
				children: "Loading..."
			})]
		});
		const {
			price: a,
			side: i
		} = n;
		return e.jsx("div", {
			className: "flex items-center flex-row w-full justify-evenly px-2",
			style: {
				height: Ur
			},
			children: e.jsxs("div", {
				className: "flex flex-row  justify-between w-full items-end",
				children: [e.jsxs("div", {
					className: "flex flex-row",
					children: [i === "BUY" ? e.jsx($i, {
						width: 16,
						color: r
					}) : e.jsx(bo, {
						width: 16,
						color: r
					}), e.jsx(ee, {
						color: r,
						children: e.jsx(L, {
							num: a,
							smallNumberOn2Zeros: !0
						})
					})]
				}), e.jsxs(j, {
					color: r,
					children: ["$", e.jsx(L, {
						num: t,
						smallNumberOn2Zeros: !0
					})]
				})]
			})
		})
	},
	Tp = n => {
		const {
			token0Price: t,
			lastTrade: s,
			asks: r,
			bids: o,
			priceDecimals: a,
			amountDecimals: i,
			scalar: l
		} = n, [d] = c.useState(60), m = v => v.reduce((A, B) => A + B, 0), f = v => {
			const I = v.map(H => H[1]),
				A = m(I),
				B = I.map(H => H / A),
				M = v.map((H, X) => H[0] * B[X]);
			return {
				weightedPrice: m(M),
				weightSizeArray: B
			}
		}, [p, x] = c.useState(void 0), h = c.useMemo(() => {
			let v = 0,
				I = 0;
			return r.slice(0, d).map((A, B, M) => {
				const H = f(M.map(F => [parseFloat(F.price), parseFloat(F.size)])),
					X = qt(A.price, a),
					Z = qt(A.size, i),
					J = Ms(A.size, A.price, i, a);
				return v += Z, I += J, {
					weight: H.weightSizeArray[B] / Math.max(...H.weightSizeArray),
					trade: A,
					isBid: !1,
					priceDecimals: a,
					amountDecimals: i,
					scalar: l,
					price: X,
					amount: Z,
					total: J,
					totalAmount: v,
					totalTotal: I
				}
			})
		}, [r, a, i]), y = c.useMemo(() => {
			let v = 0,
				I = 0;
			return o.slice(0, d).map((A, B, M) => {
				const H = f(M.map(F => [parseFloat(F.price), parseFloat(F.size)])),
					X = qt(A.price, a),
					Z = qt(A.size, i),
					J = Ms(A.size, A.price, i, a);
				return v += Z, I += J, {
					weight: H.weightSizeArray[B] / Math.max(...H.weightSizeArray),
					trade: A,
					isBid: !0,
					priceDecimals: a,
					amountDecimals: i,
					scalar: l,
					price: X,
					amount: Z,
					total: J,
					totalAmount: v,
					totalTotal: I
				}
			})
		}, [o, a, i]), [b, g] = c.useState(!1), {
			refs: w,
			floatingStyles: C,
			context: k
		} = Ce({
			whileElementsMounted: Ie,
			open: b,
			onOpenChange: g,
			middleware: [],
			placement: "right"
		}), {
			isMounted: T,
			styles: E
		} = Ae(k, {
			initial: {
				opacity: 1,
				transform: "scale(0,1)"
			},
			common: {
				transformOrigin: "left",
				transitionDuration: "0.1s",
				animationDelay: "0s"
			}
		}), N = Ui(k, {
			axis: "y"
		}), S = Bi(k), {
			getReferenceProps: G,
			getFloatingProps: _
		} = Ne([S, N]);
		return e.jsxs(e.Fragment, {
			children: [e.jsxs("div", {
				ref: w.setReference,
				...G(),
				onMouseLeave: () => {
					x(void 0)
				},
				className: "flex flex-col",
				children: [e.jsx("div", {
					className: "flex flex-col flex-col-reverse",
					children: h.slice(0, d).map((v, I) => e.jsx("div", {
						onMouseEnter: () => {
							x({
								idx: I,
								side: "ask",
								data: h,
								totalValue: v.totalTotal,
								totalAmount: v.totalAmount
							})
						},
						children: e.jsx(Br, {
							...v
						}, I)
					}, I))
				}), e.jsxs("div", {
					className: "relative",
					children: [p && e.jsxs(e.Fragment, {
						children: [p.side === "ask" && e.jsx("div", {
							style: {
								height: `${22+p.idx*20}px`,
								bottom: "40px",
								right: "0px"
							},
							className: "pointer-events-none absolute w-full border-t-2 border-t-blue-500/100 bg-blue-500/20 z-10"
						}), p.side === "bid" && e.jsx("div", {
							style: {
								height: `${22+p.idx*20}px`,
								top: "40px",
								right: "0px"
							},
							className: "pointer-events-none absolute w-full border-b-2 border-b-blue-500/100 bg-blue-500/20 z-10"
						})]
					}), e.jsx(_p, {
						token0Price: t,
						trade: s
					})]
				}), e.jsx("div", {
					className: "w-full flex-col flex",
					children: y.slice(0, d).map((v, I) => e.jsx("div", {
						onMouseEnter: () => {
							x({
								idx: I,
								side: "bid",
								data: y,
								totalValue: v.totalTotal,
								totalAmount: v.totalAmount
							})
						},
						children: e.jsx(Br, {
							...v
						}, I)
					}, I))
				})]
			}), b && p && e.jsx("div", {
				className: "z-10",
				ref: w.setFloating,
				style: C,
				..._(),
				children: e.jsx("div", {
					className: "z-10 mt-1 bg-gray-900 outline outline-gray-600 outline-1 rounded-lg",
					style: {
						...E
					},
					children: T && e.jsxs("div", {
						className: "border-gray-700 border bg-gray-750 fixed h-20 border-[1px] flex flex-col gap-2 p-2 rounded-md w-[187px]",
						children: [e.jsxs("div", {
							className: "flex flex-row justify-between",
							children: [e.jsx(j, {
								children: "Avg Price:"
							}), e.jsx(j, {
								children: e.jsx(L, {
									num: p.totalValue / p.totalAmount,
									singleLetterNotation: !0
								})
							})]
						}), e.jsxs("div", {
							className: "flex flex-row justify-between",
							children: [e.jsx(j, {
								children: "Amount:"
							}), e.jsx(j, {
								children: e.jsx(L, {
									num: Number(p.totalAmount),
									singleLetterNotation: !0
								})
							})]
						}), e.jsxs("div", {
							className: "flex flex-row justify-between",
							children: [e.jsx(j, {
								children: "Total:"
							}), e.jsx(j, {
								children: e.jsx(L, {
									num: Number(p.totalValue),
									singleLetterNotation: !0
								})
							})]
						})]
					})
				})
			})]
		})
	},
	$r = n => {
		let t = 0;
		return n.map(r => ({
			...r,
			total: t += Number(r.size)
		})).sort((r, o) => Number(o.price) - Number(r.price))
	},
	kp = n => n.map((t, s) => ({
		label: t < 1 ? Math.pow(10, t).toFixed(Math.abs(t)) : Math.pow(10, t).toString(),
		value: t,
		index: s
	})),
	Cp = ({
		topColor: n = u.gray[600],
		middleColor: t = u.gray[600],
		bottomColor: s = u.gray[600]
	}) => e.jsxs("svg", {
		width: "16",
		height: "20",
		viewBox: "0 0 16 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: [e.jsx("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.68457 5C2.68457 4.44772 3.02664 4 3.44862 4H12.6172C13.0391 4 13.3812 4.44772 13.3812 5C13.3812 5.55228 13.0391 6 12.6172 6H3.44862C3.02664 6 2.68457 5.55228 2.68457 5Z",
			fill: n
		}), e.jsx("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.68457 10C2.68457 9.44772 3.02664 9 3.44862 9H12.6172C13.0391 9 13.3812 9.44772 13.3812 10C13.3812 10.5523 13.0391 11 12.6172 11H3.44862C3.02664 11 2.68457 10.5523 2.68457 10Z",
			fill: t
		}), e.jsx("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.68457 15C2.68457 14.4477 3.02664 14 3.44862 14H12.6172C13.0391 14 13.3812 14.4477 13.3812 15C13.3812 15.5523 13.0391 16 12.6172 16H3.44862C3.02664 16 2.68457 15.5523 2.68457 15Z",
			fill: s
		})]
	}),
	Hr = 2,
	ys = ({
		option: n,
		activeOption: t,
		onOptionSelect: s,
		topColor: r,
		bottomColor: o,
		resetScroll: a
	}) => e.jsx(e.Fragment, {
		children: e.jsx("label", {
			className: `rounded-sm cursor-pointer outline-gray-600 outline-2 mx-1 hover:outline ${t===n?" outline":""}`,
			children: e.jsx("div", {
				onClick: () => {
					s(n), a(n)
				},
				children: e.jsx(Cp, {
					topColor: r,
					bottomColor: o
				})
			})
		})
	}),
	Np = ({
		suggestedGranularities: n,
		selectedGranularity: t,
		setSelectedGranularity: s
	}) => {
		const r = kp(n),
			o = r[t],
			[a, i] = c.useState(!1),
			{
				refs: l,
				floatingStyles: d,
				context: m
			} = Ce({
				whileElementsMounted: Ie,
				open: a,
				onOpenChange: i,
				middleware: []
			}),
			{
				isMounted: f,
				styles: p
			} = Ae(m, {
				initial: {
					opacity: 1,
					transform: "scale(1,0)"
				},
				common: {
					transformOrigin: "top left"
				}
			}),
			x = Pe(m),
			h = Le(m),
			{
				getReferenceProps: y,
				getFloatingProps: b
			} = Ne([x, h]);
		return e.jsxs(e.Fragment, {
			children: [e.jsx("div", {
				ref: l.setReference,
				...y(),
				children: e.jsxs("div", {
					className: "gap-x-2 p-1 rounded-sm cursor-pointer outline-gray-600 outline-2 mx-1 flex flex-row items-center",
					children: [o ? e.jsx(zn, {
						number: Number(o.label),
						minimumNumber: 1e-6,
						removeTrailingZeros: !0
					}) : "", e.jsx(Tn, {
						width: 16,
						color: u.gray[600]
					})]
				})
			}), a && e.jsx("div", {
				className: "z-10",
				ref: l.setFloating,
				style: d,
				...b(),
				children: e.jsx("div", {
					className: "z-10 bg-gray-900 outline outline-gray-600 outline-1 rounded-lg",
					style: {
						...p
					},
					children: f && e.jsx("div", {
						className: "bg-gray-800 border-[1px] border-gray-700 min-w-[60px] rounded-xl h-fit text-white flex flex-col absolute z-50",
						children: r.map(g => e.jsx("button", {
							className: "text-start :bg-gray-700 px-3 py-2 w-full first:rounded-t-[12px] hover:bg-gray-drophover last:rounded-b-[12px]",
							onClick: () => {
								s(g.index)
							},
							children: e.jsx(zn, {
								number: Number(g.label),
								minimumNumber: 1e-6,
								removeTrailingZeros: !0
							})
						}, g.index))
					})
				})
			})]
		})
	},
	Sp = n => {
		const {
			baseSymbol: t,
			quoteSymbol: s
		} = n;
		return e.jsxs("div", {
			className: "flex flex-row w-full px-2 text-gray-300 mb-2 overflow-auto no-scrollbar",
			children: [e.jsx("div", {
				className: "flex flex-1 whitespace-nowrap",
				children: e.jsxs(j, {
					weight: P.REGULAR,
					color: u.gray[300],
					children: [e.jsx(Ye, {
						id: "a7u1N9"
					}), " (", t, ")"]
				})
			}), e.jsx("div", {
				className: "flex flex-1 justify-end min-w-[100px] whitespace-nowrap",
				children: e.jsxs(j, {
					weight: P.REGULAR,
					color: u.gray[300],
					children: [e.jsx(Ye, {
						id: "hehnjM"
					}), " (", s, ")"]
				})
			}), e.jsx("div", {
				className: "flex flex-1 justify-end whitespace-nowrap",
				children: e.jsxs(j, {
					weight: P.REGULAR,
					color: u.gray[300],
					children: [e.jsx(Ye, {
						id: "72c5Qo"
					}), " (", t, ")"]
				})
			})]
		})
	};

function Ep() {
	const {
		poolSummary: n,
		token: t,
		poolAddress: s
	} = oe(), {
		blockNumberByChain: r
	} = In(), {
		colors: o
	} = xt(), [a, i] = Cs([], 50), [l, d] = Cs([], 50), [m, f] = c.useState(), [p, x] = c.useState("default"), [h, y] = c.useState(Hr), {
		currentChainInfo: b
	} = D(), [g, w] = c.useState(0), [C, k] = c.useState(0), [T, E] = c.useState(!1), N = () => t.selected === 1 ? n.default_granularities : n.default_flipped_granularities, {
		refetch: S,
		data: G
	} = be("cush_orderBookSet", [s, [0, 1, 2, 3],
		[0, 1, 2, 3], r
	]);
	c.useEffect(() => {
		S()
	}, [s, r]), c.useEffect(() => {
		if (!G) return;
		let I;
		t.selected === 0 ? G.flipped && (I = G.flipped[h]) : G.default && (I = G.default[h]), I && (i($r(I.asks).reverse()), d($r(I.bids)), f(I.last_trade), w(I.price_decimals), k(I.amount_decimals), setTimeout(() => {
			v(p, "instant")
		}, 500))
	}, [h, G, t, n]);
	const _ = c.useRef(null),
		v = c.useCallback((I, A = "smooth") => {
			_.current && (I === "asks" ? _.current.scrollTo({
				top: _.current.scrollHeight / 2 - _.current.clientHeight,
				behavior: A
			}) : I == "bids" ? _.current.scrollTo({
				top: _.current.scrollHeight / 2,
				behavior: A
			}) : _.current.scrollTo({
				top: (_.current.scrollHeight - _.current.clientHeight) / 2,
				behavior: A
			}))
		}, [_]);
	return c.useEffect(() => {
		T || n && N() && h && a.length > 10 && l.length > 10 && (E(!0), v(p, "instant"))
	}, [a, l]), c.useEffect(() => {
		y(Hr)
	}, [s]), e.jsx("div", {
		className: "overflow-hidden text-white text-[12px] font-normal flex flex-1 flex-col items-center w-full",
		children: n && N() && a && l ? e.jsxs("div", {
			className: "overflow-hidden w-full flex flex-1 flex-col h-full py-1",
			children: [e.jsxs("div", {
				className: "flex flex-row w-full px-0 text-white mb-2 items-center ",
				children: [e.jsx(Np, {
					suggestedGranularities: N(),
					selectedGranularity: h,
					setSelectedGranularity: y
				}), e.jsxs("div", {
					className: "flex flex-1 justify-end",
					children: [e.jsx(ys, {
						resetScroll: v,
						option: "default",
						activeOption: p,
						onOptionSelect: x,
						topColor: o.neg_color,
						bottomColor: o.pos_color
					}), e.jsx(ys, {
						resetScroll: v,
						option: "bids",
						activeOption: p,
						onOptionSelect: x,
						bottomColor: o.pos_color
					}), e.jsx(ys, {
						resetScroll: v,
						option: "asks",
						activeOption: p,
						onOptionSelect: x,
						topColor: o.neg_color
					})]
				})]
			}), e.jsx(Sp, {
				baseSymbol: t.flipped ? R(n.t0, n.t0_symbol, b.id) : R(n.t1, n.t1_symbol, b.id),
				quoteSymbol: t.flipped ? R(n.t1, n.t1_symbol, b.id) : R(n.t0, n.t0_symbol, b.id)
			}), e.jsx("div", {
				ref: _,
				className: "no-scrollbar flex flex-col flex-1 overflow-auto",
				children: e.jsx("div", {
					className: "flex flex-col h-0",
					children: e.jsx(Tp, {
						activeOption: p,
						lastTrade: m,
						asks: a,
						bids: l,
						priceDecimals: g,
						amountDecimals: C,
						token0Price: n[t.flipped ? "t1_price_usd" : "t0_price_usd"],
						scalar: N()[h]
					})
				})
			})]
		}) : e.jsx(Ln, {
			lines: 5,
			random: !0
		})
	})
}
const Ip = ({
		trade: n,
		isNew: t,
		currentChainId: s
	}) => {
		const {
			colors: r
		} = xt(), {
			token: o
		} = oe(), a = new Date(n.time), i = o.selected === 0 ? 1 / n.avg_price : n.avg_price, [l, d] = c.useState(t), m = wo();
		c.useEffect(() => {
			d(t)
		}, [t]), c.useEffect(() => {
			l && setTimeout(() => {
				d(!1)
			}, 2e3)
		}, [l]);
		const f = n.side === "buy" && o.selected === 0 || n.side === "sell" && o.selected === 1,
			p = l ? f ? r.pos_color : r.neg_color : n.usd_value >= 1e3 ? u.white : u.gray[400],
			[x, h] = c.useState(!1);
		return e.jsx("a", {
			href: fn("tx", n.transaction.toString(), s),
			target: "_blank",
			rel: "noreferrer",
			className: "relative h-22",
			children: e.jsx(Hi, {
				children: e.jsxs(Vi, {
					open: x,
					delayDuration: 0,
					children: [e.jsx(zi, {
						className: "w-full",
						children: e.jsxs("div", {
							onMouseEnter: () => h(!0),
							onMouseLeave: () => h(!1),
							style: {
								backgroundColor: l ? f ? x ? r.pos_color.concat("24") : r.pos_color.concat("14") : x ? r.neg_color.concat("24") : r.neg_color.concat("14") : x ? u.gray[800] : void 0
							},
							className: "flex flex-row w-full px-2 hover:bg-gray-800 h-[22px] justify-between items-center",
							children: [e.jsx(j, {
								color: f ? r.pos_color : r.neg_color,
								className: "w-[30%] text-start",
								children: e.jsx(L, {
									num: i,
									singleLetterNotation: !0,
									smallNumberOn2Zeros: !0
								})
							}), e.jsx(j, {
								color: p || u.gray[100],
								className: "w-[35%] text-end",
								children: o.selected === 0 ? e.jsx(L, {
									num: n.amount1,
									singleLetterNotation: !0
								}) : e.jsx(L, {
									num: n.amount0,
									singleLetterNotation: !0
								})
							}), e.jsx(j, {
								color: p || u.gray[100],
								className: "w-[30%] text-end",
								children: a.toLocaleTimeString()
							})]
						})
					}), e.jsx(Wi, {
						children: e.jsx(Gi, {
							className: "z-50",
							align: "center",
							side: m.width < 700 ? "bottom" : "left",
							children: e.jsxs("div", {
								className: " bg-gray-750 text-gray-50 border border-gray-700 p-2 rounded-md flex flex-col gap-y-2",
								children: [e.jsx(j, {
									color: u.gray[300],
									children: a.toLocaleDateString(void 0, {
										month: "short",
										day: "2-digit",
										year: "numeric"
									})
								}), e.jsxs(j, {
									children: ["Trade: ", e.jsx(L, {
										num: n.price_start
									}), " - ", e.jsx(L, {
										num: n.price_end
									})]
								}), e.jsxs(j, {
									children: ["Value: $", e.jsx(L, {
										num: n.usd_value
									})]
								}), e.jsxs(j, {
									children: ["Fees: $", e.jsx(L, {
										num: n.fees_usd
									})]
								}), e.jsxs(j, {
									children: ["Slippage: ", e.jsx(L, {
										num: n.slippage * 100
									}), "%"]
								})]
							})
						})
					})]
				})
			})
		})
	},
	Ap = n => {
		const {
			baseSymbol: t,
			quoteSymbol: s
		} = n, {
			token: r
		} = oe();
		return r && e.jsxs("div", {
			className: "flex flex-row w-full px-2 text-gray-300 pt-3 pb-2",
			children: [e.jsx("div", {
				className: "flex flex-1",
				children: e.jsxs(j, {
					className: "flex",
					weight: P.REGULAR,
					color: u.gray[300],
					children: [e.jsx(Ye, {
						id: "a7u1N9"
					}), " (", r.selected === 0 ? t : s, ")"]
				})
			}), e.jsx("div", {
				className: "flex flex-1 justify-end",
				children: e.jsxs(j, {
					weight: P.REGULAR,
					color: u.gray[300],
					children: [e.jsx(Ye, {
						id: "Cj2Gtd"
					}), " (", r.selected === 0 ? t : s, ")"]
				})
			}), e.jsx("div", {
				className: "flex flex-1 justify-end",
				children: e.jsx(j, {
					weight: P.REGULAR,
					color: u.gray[300],
					children: e.jsx(Ye, {
						id: "LhMjLm"
					})
				})
			})]
		})
	},
	Lp = "_firstRowAnimation_1fxsa_1",
	Pp = "_blinker_1fxsa_1",
	Mp = {
		firstRowAnimation: Lp,
		blinker: Pp
	};

function ha() {
	var T;
	const {
		currentChainInfo: n
	} = D(), {
		poolSummary: t,
		blockNumber: s,
		poolAddress: r
	} = oe(), [o, a] = c.useState([]), [i, l] = c.useState(0), [d, m] = c.useState(""), [f, p] = c.useState(""), x = 20, [h, y] = c.useState([]), {
		width: b
	} = wo();
	c.useEffect(() => {
		t && (m(R(t.t0, t.t0_symbol, n.id)), p(R(t.t1, t.t1_symbol, n.id)))
	}, [t]);
	const {
		data: g
	} = be("cush_recentSwaps", [r, 50, !0], {
		queryKey: [s]
	}), [w, C] = c.useState(null);
	c.useEffect(() => {
		if (!g) return;
		if (!(g.swaps && g.swaps.length > 0 && w && w.swaps.length > 0)) {
			C(g), y(g.swaps.map(N => N.transaction)), a([]);
			return
		}
		if (g.swaps[0].event.eventAddress !== w.swaps[0].event.eventAddress) {
			g.swaps && (C(g), y(g.swaps.map(N => N.transaction)), a([]));
			return
		}
		const E = g.swaps.filter(N => !h.includes(N.transaction));
		E.length > 0 && (a(E.map(N => N.transaction)), y(g.swaps.map(N => N.transaction)))
	}, [g]);
	const k = c.useRef(null);
	return c.useEffect(() => {
		var E;
		k.current && l((E = k.current) == null ? void 0 : E.clientHeight)
	}, [(T = k.current) == null ? void 0 : T.clientHeight]), e.jsxs("div", {
		className: "bg-gray-dark w-full rounded-xl flex flex-col items-center outline outline-1 outline-gray-800 pt-3 pb-2 h-full",
		ref: k,
		children: [e.jsx(j, {
			color: u.gray[50],
			children: "Trading History"
		}), e.jsx(Ap, {
			baseSymbol: d,
			quoteSymbol: f
		}), e.jsx("div", {
			className: `relative w-full overflow-y-scroll no-scrollbar overscroll-contain	 ${b<700?"h-[600px]":"h-full"}`,
			children: e.jsx("div", {
				className: "relative md:absolute  w-full",
				children: g ? e.jsx("div", {
					className: "w-full flex flex-col",
					children: g.swaps.slice(-1 * (i * 3) / x).reverse().map(E => {
						let N = o.includes(E.transaction);
						return e.jsx("div", {
							className: `${N?Mp.firstRowAnimation:""} h-[22px]`,
							onAnimationEnd: () => N = !1,
							children: e.jsx(Ip, {
								trade: E,
								isNew: N,
								currentChainId: n.id
							})
						}, E.transaction.toString())
					})
				}) : e.jsx(Ln, {
					lines: 13,
					random: !0
				})
			})
		})]
	})
}

function Vr(n) {
	const {
		chartIsNotFullScreen: t,
		breakpoint: s
	} = n, [r, o] = c.useState(!1);
	return t ? e.jsx("div", {
		className: `w-full
      bg-gray-dark p-1 rounded-lg broder border-1 border-gray-800 overflow-hidden
      min-h-96
      ${s>1&&`max-w-[290px] min-w-[${wp}px]`}
    `,
		children: e.jsxs("div", {
			className: "flex flex-1 h-full w-full flex-col gap-1 sm:max-h-full ",
			children: [e.jsx("div", {
				className: `${s>2?"hidden":""}`,
				children: e.jsx(Ks, {
					item: r,
					setItem: o,
					item1: "Order Book",
					item2: "Trading History"
				})
			}), s < 3 && r ? e.jsx("div", {
				className: "h-full",
				children: e.jsx(ha, {})
			}) : e.jsx(Ep, {})]
		})
	}) : e.jsx("div", {})
}

function Rp(n) {
	const [t, s] = c.useState(!1), {
		onClick: r
	} = n;
	return e.jsx("button", {
		onClick: r,
		className: "p-1 rounded-[4px]",
		style: {
			backgroundColor: t ? De(u.blue[400]) : u.blue[400]
		},
		onMouseEnter: () => {
			s(!0)
		},
		onMouseLeave: () => s(!1),
		children: e.jsx(j, {
			children: "Auto"
		})
	})
}

function Op({
	classes: n
}) {
	return e.jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: 1.5,
		className: `w-4 h-4 ${n}`,
		children: [e.jsx("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
		}), e.jsx("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
		})]
	})
}

function Dp({
	classes: n = "stroke-gray-400 hover:stroke-white hover:bg-hoverbackground",
	iconClasses: t = "inherit"
}) {
	return e.jsx("button", {
		className: `rounded-full p-2 cursor-pointer ${n}`,
		children: e.jsx(Op, {
			classes: t
		})
	})
}

function Fp(n) {
	const {
		settings: t,
		setSettings: s,
		value: r,
		setValue: o
	} = n;
	c.useEffect(() => {
		s({
			...t,
			slippage: r === "" ? 0 : parseFloat(r)
		})
	}, [r]);
	const a = i => {
		const l = parseFloat(i) > 100 ? "100" : i;
		o(l)
	};
	return e.jsxs("div", {
		className: "flex flex-row items-center rounded-[4px] min-w-[94px] max-w-[94px] border-[1px] bg-gray-800 border-gray-600 gap-1 pr-2",
		children: [e.jsx(Xe, {
			value: r,
			onUserInput: a,
			style: {
				textAlign: "right",
				color: u.gray[400]
			}
		}), e.jsx(j, {
			children: "%"
		})]
	})
}

function Up(n) {
	const {
		settings: t,
		setSettings: s,
		value: r,
		setValue: o
	} = n;
	return c.useEffect(() => {
		s({
			...t,
			transactionDeadline: r === "" ? 0 : parseFloat(r)
		})
	}, [r]), e.jsx("div", {
		className: "flex flex-row items-center rounded-[4px] max-w-[57px] border-[1px] bg-gray-800 border-gray-600 gap-1 pr-2",
		children: e.jsx(Xe, {
			value: r,
			onUserInput: o,
			placeholder: "",
			style: {
				textAlign: "right",
				color: u.gray[400]
			}
		})
	})
}

function Bp(n) {
	const {
		settings: t,
		setSettings: s
	} = n, [r, o] = c.useState(t.slippage.toString()), [a, i] = c.useState(t.transactionDeadline.toString()), [l, d] = c.useState(!1), {
		refs: m,
		floatingStyles: f,
		context: p
	} = Ce({
		whileElementsMounted: Ie,
		open: l,
		onOpenChange: d,
		middleware: [],
		placement: "bottom-end"
	}), {
		styles: x
	} = Ae(p, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top right"
		}
	}), h = Le(p), y = Pe(p), {
		getReferenceProps: b,
		getFloatingProps: g
	} = Ne([y, h]), w = () => {
		s({
			slippage: 1,
			transactionDeadline: 30
		}), i("30"), o("1")
	};
	return e.jsxs(e.Fragment, {
		children: [e.jsx("div", {
			ref: m.setReference,
			...b(),
			children: e.jsx("div", {
				children: e.jsx(Dp, {})
			})
		}), l && e.jsx("div", {
			className: "z-10",
			ref: m.setFloating,
			style: f,
			...g(),
			children: e.jsxs("div", {
				className: "h-fit p-3 flex flex-col z-10 mt-1 bg-gray-800 border-[1px] border-gray-700 rounded-lg",
				style: {
					...x
				},
				children: [e.jsx(j, {
					children: "Settings"
				}), e.jsxs("div", {
					className: "flex flex-col mt-3",
					children: [e.jsx(j, {
						children: "Slippage Tolerance:"
					}), e.jsxs("div", {
						className: "flex flex-row mt-[6px] mb-4 gap-2",
						children: [e.jsx(Rp, {
							onClick: w
						}), e.jsx(Fp, {
							settings: t,
							setSettings: s,
							value: r,
							setValue: o
						})]
					})]
				}), e.jsxs("div", {
					className: "flex flex-col",
					children: [e.jsx(j, {
						children: "Transaction deadline:"
					}), e.jsxs("div", {
						className: "flex flex-row mt-[6px] gap-2 items-center",
						children: [e.jsx(Up, {
							settings: t,
							setSettings: s,
							value: a,
							setValue: i
						}), e.jsx(j, {
							children: "minutes"
						})]
					})]
				})]
			})
		})]
	})
}
const $p = "data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAACwAADQAAQUxQSFUAAAABcIhtz1Y9CCEMIYOGkMEQymAZhDCEUEI4CAfhPT/fYoiICWCy4QTYW8MX4KqIiEtsuAIgxZmDw/7Klb5eXsLK1UKOKjV3C9rjCdmkPZHEdqq/IfsAAFZQOCAkAAAAUAEAnQEqDAAOAAJAOCUAToAuoAD+6ez9a5nJnBru0vd3AAAA";

function ya({
	fontSize: n,
	fontColor: t = u.gray[400]
}) {
	const {
		blockNumberByChain: s
	} = In(), [r, o] = c.useState(""), {
		provider: a
	} = kt(), {
		isConnected: i
	} = we();
	return c.useEffect(() => {
		a && a.getGasPrice().then(l => {
			o((parseFloat(l.toString()) / 10 ** 9).toFixed(2))
		})
	}, [s, a]), e.jsxs("div", {
		className: "flex flex-row gap-1 items-center ",
		children: [e.jsx("img", {
			src: $p,
			alt: "Gas"
		}), !i && !a ? e.jsx(st, {
			color: t,
			children: "Please Connect Wallet"
		}) : r ? e.jsxs(st, {
			color: t,
			fontSize: n,
			children: [r, " Gwei"]
		}) : e.jsx(st, {
			color: t,
			fontSize: n,
			children: "loading"
		})]
	})
}
const Hp = async (n, {
	pool_address: t,
	block_number: s
}) => {
	try {
		return await n.call("cush_getV3Pool", [t, s])
	} catch (r) {
		const o = r;
		throw window.log.log(r), new Error(o.message)
	}
};

function Rs(n) {
	const {
		onClick: t,
		disabled: s = !1,
		isSwap: r = !1
	} = n, [o, a] = c.useState(!1), i = r ? u.black : u.gray[900];
	return e.jsx("button", {
		className: "w-[20px] h-[20px]  rounded-[7px] flex items-center justify-center",
		disabled: s,
		style: {
			borderWidth: 1,
			borderColor: u.gray[500],
			backgroundColor: o ? De(i) : i
		},
		onClick: t,
		onMouseEnter: () => a(!0),
		onMouseLeave: () => a(!1),
		children: r ? e.jsx(bo, {
			width: 12,
			color: o ? u.gray[100] : u.gray[300]
		}) : e.jsx(qi, {
			color: o ? u.gray[100] : u.gray[300],
			width: 12
		})
	})
}

function Vp() {
	const [n, t] = c.useState(!1), s = () => {
		t(!1)
	}, r = () => {
		s(), window.log.log("request"), window.open("https://discord.gg/RcGZB3X4q9")
	};
	return e.jsxs("div", {
		className: "flex items-center",
		children: [n && e.jsx(Ys, {
			onClose: s,
			showOverlay: !0
		}), n && e.jsx(zp, {
			onRequest: r
		}), e.jsx("button", {
			onMouseEnter: () => t(!0),
			onClick: () => t(!0),
			children: e.jsx(Yi, {
				width: 24,
				fill: u.gray[800],
				stroke: u.gray[600],
				className: "mr-2"
			})
		})]
	})
}
const zp = n => {
		const {
			onRequest: t
		} = n;
		return e.jsxs("div", {
			className: "absolute w-[232px] h-[86px] bg-red-20 rounded-[20px] p-3 flex flex-col justify-between ",
			style: {
				marginTop: -112,
				backgroundColor: u.gray[700]
			},
			children: [e.jsx("div", {
				className: "flex flex-row flex-wrap justify-center items-center gap-1 text-left",
				children: e.jsx(j, {
					children: "Request limit order be added to this market via Telegram."
				})
			}), e.jsx(Wp, {
				onRequest: t
			})]
		})
	},
	Wp = n => {
		const {
			onRequest: t
		} = n, [s, r] = c.useState(!1);
		return e.jsx("button", {
			onClick: t,
			onMouseEnter: () => {
				r(!0)
			},
			onMouseLeave: () => {
				r(!1)
			},
			className: "w-[212px] h-[26px] rounded-[6px]",
			style: {
				backgroundColor: s ? De(u.blue[400]) : u.blue[400]
			},
			children: e.jsx(j, {
				weight: P.SEMIBOLD,
				children: "Request"
			})
		})
	};

function Gp(n) {
	const {
		orderAction: t,
		onClick: s,
		isValidPool: r = !0,
		minToken: o = void 0,
		order: a,
		isPreferredTokenOrder: i,
		priceEntered: l,
		balance0: d,
		balance1: m,
		orderFormState: f,
		isEmpty: p
	} = n, {
		isConnected: x
	} = we(), {
		currentChain: h
	} = D(), [y, b] = c.useState(!1), g = a.token0 === "" || a.token1 === "", w = !g && o !== void 0 && (i ? Number(a.token1) >= o.amount : Number(a.token0) >= o.amount), C = d !== void 0 && m !== void 0 && w && (i ? Number(a.token1) <= m : Number(a.token0) <= d);
	let k;
	x ? k = !r || f !== void 0 || g || !w || !(l && C) : k = !0;
	const T = f === Y.TOKEN_APPROVAL,
		E = f === Y.TOKEN_APPROVAL_IN_PROGRESS,
		N = f === Y.EXECUTE_TRADE || f === Y.TOKEN_APPROVED,
		S = f === Y.EXECUTE_TRADE_IN_PROGRESS;
	return e.jsxs("button", {
		disabled: k,
		onClick: s,
		style: {
			color: k ? u.gray[600] : y ? De(u.white) : u.white,
			backgroundColor: k ? u.gray[800] : y ? De(u.blue[400]) : u.blue[400]
		},
		onMouseEnter: () => b(!0),
		onMouseLeave: () => b(!1),
		className: "flex w-full justify-center items-center h-[38px] rounded-[8px] text-[16px] font-semibold",
		children: [x && !r && e.jsx(Vp, {}), e.jsx("div", {
			children: x ? r ? p ? t === "Buy" ? e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: u.blue[400],
				children: "Buy"
			}) : e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: u.blue[400],
				children: "Sell"
			}) : w ? C ? S ? e.jsxs("div", {
				className: "flex flex-row items-center gap-1",
				children: [e.jsx(cn, {}), e.jsx(ee, {
					weight: P.SEMIBOLD,
					color: "inherit",
					children: "Transaction in progress"
				})]
			}) : T ? e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Approve token in wallet"
			}) : N ? e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Confirm trade in wallet"
			}) : E ? e.jsxs("div", {
				className: "flex flex-row items-center gap-1",
				children: [e.jsx(cn, {}), e.jsx(ee, {
					weight: P.SEMIBOLD,
					color: "inherit",
					children: "Approval In Progress"
				})]
			}) : t === "Buy" ? e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Buy"
			}) : e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Sell"
			}) : e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Insufficient balance"
			}) : e.jsxs("div", {
				className: "flex flex-row gap-1.5",
				children: [e.jsxs(j, {
					weight: P.SEMIBOLD,
					color: "inherit",
					children: ["Minimum order size is ", o == null ? void 0 : o.amount]
				}), e.jsx(xe, {
					logoUrl: o == null ? void 0 : o.token.logoURI,
					size: 12,
					tokenSymbol: o == null ? void 0 : o.token.symbol
				}), e.jsx(j, {
					weight: P.SEMIBOLD,
					color: "inherit",
					children: o && R(o.token.address, o == null ? void 0 : o.token.symbol, h)
				})]
			}) : e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Limit orders not setup for this market"
			}) : e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Connect Wallet"
			})
		})]
	})
}
const qp = () => e.jsx("div", {
	className: "absolute left-24 top-4 w-48 h-24 bg-gray-750 border-gray-700 border rounded-lg p-3",
	children: e.jsx("div", {
		className: "text-left",
		children: e.jsx(j, {
			children: "Uniswap V3 has a minimum tick size similar to traditional exchanges, which limits where users are allowed to place orders."
		})
	})
});

function Yp(n) {
	const {
		disabled: t = !1,
		isPreferredTokenOrder: s,
		setTick: r,
		onPriceEntered: o
	} = n, [a, i] = c.useState(!1), {
		token0: l,
		token1: d,
		poolSummary: m,
		token: f,
		liquidityChart: p
	} = oe(), [x, h] = c.useState(m && Xn(m.fee)), [y, b] = c.useState(""), [g, w] = c.useState(!1), [C, k] = c.useState(""), [T, E] = c.useState(!1), [N, S] = c.useState(!1), [G, _] = c.useState(!1), [v, I] = c.useState(void 0), [A, B] = c.useState(void 0), [M, H] = c.useState(void 0), {
		currentChainInfo: X
	} = D(), Z = f.selected !== 0, J = 2;
	c.useEffect(() => {
		F()
	}, [p == null ? void 0 : p.pool]), c.useEffect(() => {
		h(Xn(m.fee)), b(""), s && Z || !s && !Z ? (_(!0), S(!1)) : (S(!0), _(!1)), F()
	}, [Z, s]);
	const F = () => {
			if (p) {
				I(p.current_pool_tick);
				const $ = z(p.current_pool_tick);
				k($ ? At($) : ""), H(Z ? p.current_pool_tick + x * J : p.current_pool_tick - x * J), B(Z ? p.current_pool_tick - x * J : p.current_pool_tick + x * J)
			}
		},
		K = ($ = !1) => {
			const te = $ ? 1 : -1;
			r(q => {
				w(!1);
				let le;
				if (q) le = Z ? q + te : q - te;
				else if (v) le = Z ? v + te * x * (J + 1) : v - te * x * (J + 1);
				else return b(""), null;
				const ae = !s && v && v + x * (J + 1) <= le,
					ie = s && v && v - x * (J + 1) >= le;
				if (ae || ie) {
					const pe = z(le);
					S(!1), _(!1), pe && (o(At(pe)), b(At(pe)))
				}
				return le
			})
		},
		V = $ => {
			w(!0), b($)
		},
		U = $ => {
			if (l && d) {
				const te = Ns($, l == null ? void 0 : l.decimals, d == null ? void 0 : d.decimals, Z);
				return Es(te, x)
			}
		},
		z = $ => {
			if (l && d) return Ss($, l == null ? void 0 : l.decimals, d == null ? void 0 : d.decimals, Z)
		},
		W = ns({
			value: y,
			delay: 1e3
		});
	return c.useEffect(() => {
		if (W !== "" && A && M && g) {
			const $ = z(!s || Z ? A : M);
			if ((s && Z || !s && !Z) && v && $ && Number(y) > $) {
				const te = Z ? v - x * (J + 2) : v + x * (J + 2);
				if (te) {
					const q = z(te);
					q && b(At(q)), r(te), o(At($)), _(!0), S(!1)
				}
			} else if ((!s && Z || s && !Z) && v && $ && Number(y) < $) {
				const te = Z ? v + x * (J + 2) : v - x * (J + 2);
				if (te) {
					const q = z(te);
					q && b(At(q)), r(te), o(At($)), _(!1), S(!0)
				}
			} else {
				const te = U(parseFloat(y));
				if (te) {
					const q = z(te);
					q && b(At(q)), r(te), o(y), S(!1), _(!1)
				}
			}
			w(!1)
		} else F()
	}, [W]), e.jsxs("div", {
		className: "flex flex-col relative gap-[6px]",
		children: [e.jsxs("div", {
			className: "flex flex-row gap-2",
			children: [e.jsxs(j, {
				weight: P.REGULAR,
				color: u.gray[400],
				children: ["Quote in", " ", f.selected === 0 ? R(l.address, l.symbol, X.id) : R(d.address, d.symbol, X.id)]
			}), e.jsx(jo, {
				className: "text-gray-400",
				width: 15,
				onMouseEnter: () => E(!0),
				onMouseLeave: () => E(!1)
			}), T && e.jsx(qp, {})]
		}), e.jsxs("div", {
			onFocus: () => w(!0),
			onMouseEnter: () => {
				i(!0)
			},
			onMouseLeave: () => {
				i(!1)
			},
			className: "flex py-3 flex-row px-3 rounded-[10px] bg-gray-900 border-[1px] items-center",
			style: {
				borderColor: g || a && !t ? u.blue[400] : u.gray[700]
			},
			children: [e.jsx(Zn, {
				isPlus: !1,
				onClick: K,
				disabled: N
			}), e.jsx("div", {
				className: "flex flex-1 ",
				children: e.jsx(Xe, {
					onBlur: () => w(!1),
					style: {
						textAlign: "center"
					},
					disabled: !1,
					onUserInput: V,
					value: y,
					placeholder: C || ""
				})
			}), e.jsx(Zn, {
				onClick: () => K(!0),
				disabled: G
			})]
		})]
	})
}
const nr = n => {
		const {
			balance: t,
			onClick: s
		} = n, [r, o] = c.useState(!1), a = t != null && t.formatted ? Number(t.formatted) : 0, i = a >= 1 ? a.toFixed(2) : a.toFixed(6);
		return e.jsx("button", {
			className: "flex flex-row items-center gap-x-1 ",
			onClick: s,
			onMouseEnter: () => {
				o(!0)
			},
			onMouseLeave: () => {
				o(!1)
			},
			children: t && t.formatted ? e.jsx(j, {
				className: "overflow-hidden max-w-[70px] whitespace-nowrap overflow-ellipsis",
				color: s === void 0 ? u.gray[500] : r ? u.blue[500] : u.blue[400],
				weight: s === void 0 ? P.REGULAR : P.SEMIBOLD,
				children: L({
					num: i,
					stringOut: !0,
					singleLetterNotation: !0
				})
			}) : e.jsx(j, {
				color: u.gray[500],
				children: "0"
			})
		})
	},
	ga = n => {
		const {
			token: t
		} = n, {
			currentChainInfo: s
		} = D(), [r, o] = c.useState(!1), a = R(t.address, t.symbol, s.id), i = a.length > 7 ? a.slice(0, 7) + "..." : a;
		return e.jsxs("div", {
			className: "flex flex-row gap-1 items-center relative",
			onMouseEnter: () => o(!0),
			onMouseLeave: () => o(!1),
			children: [e.jsx(O, {
				color: u.gray[100],
				children: i
			}), a.length > 7 && r && e.jsx("div", {
				className: "absolute z-10 left-5 top-4 bg-gray-750 rounded-lg p-2 border border-gray-700",
				children: e.jsx(O, {
					color: u.white,
					children: a
				})
			})]
		})
	};

function zr(n) {
	const {
		currentChainInfo: t
	} = D(), {
		placeHolder: s,
		token: r,
		loading: o = !1,
		action: a,
		setFocus: i,
		focus: l,
		disabled: d = !1,
		balance: m,
		orderInput: f,
		setOrderInput: p
	} = n, [x, h] = c.useState(!1), y = a === "Sell", [b, g] = c.useState(""), w = k => {
		k === "" && p("", r), k !== f && (p(k, r), i(a))
	};
	c.useEffect(() => {
		b !== f && g(f)
	}, [f]);
	const C = () => {
		m && p(m.formatted, r)
	};
	return e.jsx("div", {
		className: "flex flex-col mx-1",
		children: e.jsx("div", {
			onFocus: () => i(a),
			onMouseEnter: () => {
				h(!0)
			},
			onMouseLeave: () => {
				h(!1)
			},
			className: " py-3 px-3 rounded-[10px] bg-gray-900 border-[1px] ",
			style: {
				borderColor: !d && l === a || x ? u.blue[400] : u.gray[700]
			},
			children: e.jsxs("div", {
				className: "flex flex-col",
				children: [e.jsxs("div", {
					className: "flex flex-row justify-between gap-x-1",
					children: [o ? e.jsx("div", {
						className: "h-5",
						children: e.jsx("div", {
							className: "w-20 mt-0.5 h-4 rounded-sm bg-gradient-to-r from-gray-700 to-gray-900 animte-shimmer overflow-hidden",
							children: e.jsx("div", {
								className: "animate-shimmer w-20 h-4 bg-gradient-to-r from-gray-900 to-transparent"
							})
						})
					}) : e.jsx(Xe, {
						onUserInput: w,
						value: o ? "Loading" : b,
						placeholder: s,
						decimals: r.decimals,
						disabled: d || o,
						classes: "text-sm font-semibold text-gray-50"
					}), e.jsxs("div", {
						className: "flex justify-end mb-1 items-center gap-1",
						children: [e.jsx(xe, {
							tokenSymbol: R(r.address, r.symbol, t.id),
							logoUrl: r.logoURI
						}), l && e.jsx(st, {
							color: l === a ? u.blue[400] : u.gray[400],
							children: a
						})]
					})]
				}), e.jsx(Qt, {
					containerClasses: "my-2"
				}), e.jsxs("div", {
					className: "flex flex-row justify-between items-center gap-x-1 w-full",
					children: [e.jsx(nr, {
						onClick: y && m && m.formatted > b ? C : void 0,
						balance: m
					}), e.jsx(ga, {
						token: r
					})]
				})]
			})
		})
	})
}

function Xp() {
	var V, U;
	const [n, t] = c.useState({
		token0: "",
		token1: "",
		tokenUpdated: ""
	}), s = An(), {
		currentChain: r,
		currentChainInfo: o,
		cushRpc: a
	} = D(), [i, l] = c.useState("Sell"), {
		poolAddress: d,
		token0: m,
		token1: f,
		blockNumber: p,
		token: x
	} = oe(), {
		getAndSetAllUserOrders: h
	} = Vt(), {
		signer: y,
		provider: b
	} = kt(), [g, w] = c.useState(!1), [C, k] = c.useState(null), [T, E] = c.useState(void 0), [N, S] = c.useState(), [G, _] = c.useState(!1), {
		features: {
			Telemetry: v
		}
	} = Te(), {
		telemetryRpc: I
	} = bn(), [A, B] = c.useState(), M = Ft({
		address: y == null ? void 0 : y.account.address,
		token: m.address,
		chainId: r
	}), H = Ft({
		address: y == null ? void 0 : y.account.address,
		token: f.address,
		chainId: r
	});

	function X(z, W, $, te) {
		B(z);
		const q = {
			state: z,
			hash: $,
			chain: te
		};
		return W ? s.replace(W, q) : s.add(q)
	}
	const Z = async (z, W, $) => {
		const te = !$;
		if (!(b && y && C && "limitOrder" in o.contracts)) return;
		const le = o.contracts.limitOrder.address,
			ae = z.address,
			ie = jt({
				address: z.address,
				abi: Hn,
				client: {
					public: b,
					wallet: y
				}
			}),
			pe = jt({
				address: ae,
				abi: Hn,
				client: {
					public: b,
					wallet: y
				}
			});
		let ce;
		const We = await pe.read.allowance([y.account.address, le]),
			Be = Oe(W, z.decimals);
		let it = We >= Be;
		for (; !it;) {
			ce = X(Y.TOKEN_APPROVAL);
			const Me = await ie.write.approve([o.contracts.limitOrder.address, Xi], {
				chain: y.chain
			});
			ce = X(Y.TOKEN_APPROVAL_IN_PROGRESS, ce, Me, r), await b.waitForTransactionReceipt({
				hash: Me
			}), X(Y.TOKEN_APPROVED, ce, Me, r), it = await pe.read.allowance([y.account.address, le], {
				blockTag: "pending"
			}) >= Be
		}
		const {
			tick_spacing: Fe
		} = await Hp(a, {
			pool_address: d,
			block_number: p
		}), ht = C;
		try {
			ce = X(Y.EXECUTE_TRADE, ce);
			const Me = await dp({
				pool: d,
				amount: Be,
				targetTick: ht,
				direction: te,
				signer: y,
				provider: b,
				tickSpacing: Fe,
				contract: o.contracts.limitOrder.address
			});
			ce = X(Y.EXECUTE_TRADE_IN_PROGRESS, ce, Me, r);
			const ye = await b.waitForTransactionReceipt({
				hash: Me
			});
			v.enabled && await Jt(I, r, "trade", "create_limit_order", y.account.address, ye.transactionHash, {}), Ke("create_limit_order", {
				chain: o.name,
				pool: d
			}), X(Y.EXECUTE_TRADE_SUCCESS, ce, ye.transactionHash, r), B(void 0), setTimeout(() => {
				h(y.account.address)
			}, 5e3), t({
				token0: "",
				token1: "",
				tokenUpdated: ""
			}), k(null)
		} catch (Me) {
			const ye = Me;
			window.log.error(ye), X(Y.EXECUTE_TRADE_ERROR, ce), B(void 0)
		}
	}, J = (z, W) => {
		if (C && m && f) {
			const $ = isNaN(parseFloat(z)) ? 0 : parseFloat(z),
				te = Ss(C, m == null ? void 0 : m.decimals, f == null ? void 0 : f.decimals, x.selected !== 0);
			if (m && W.address === m.address) {
				const q = x.selected === 0 ? $ / te : $ * te;
				t({
					token0: q === 0 ? "" : z,
					token1: isNaN(q) || q === 0 ? "" : L({
						num: q,
						stringOut: !0,
						singleLetterNotation: !0
					}),
					tokenUpdated: W.address
				})
			} else {
				const q = x.selected === 0 ? $ * te : $ / te;
				t({
					token0: isNaN(q) || q === 0 ? "" : L({
						num: q,
						stringOut: !0,
						singleLetterNotation: !0
					}),
					token1: q === 0 ? "" : z,
					tokenUpdated: W.address
				})
			}
		} else W.address === m.address ? t({
			token0: z,
			token1: "",
			tokenUpdated: W.address
		}) : t({
			token1: z,
			token0: "",
			tokenUpdated: W.address
		})
	}, F = z => {
		if (m && f) {
			const W = Ss(z, m == null ? void 0 : m.decimals, f == null ? void 0 : f.decimals, x.selected !== 0);
			let $;
			W > 0 && (f.address === n.tokenUpdated ? x.selected === 0 ? ($ = parseFloat(n.token1) * W, t({
				token0: isNaN($) ? "" : $.toString(),
				token1: n.token1,
				tokenUpdated: n.tokenUpdated
			})) : ($ = parseFloat(n.token1) / W, t({
				token0: isNaN($) ? "" : $.toString(),
				token1: n.token1,
				tokenUpdated: n.tokenUpdated
			})) : x.selected === 0 ? ($ = parseFloat(n.token0) / W, t({
				token1: isNaN($) ? "" : $.toString(),
				token0: n.token0,
				tokenUpdated: n.tokenUpdated
			})) : ($ = parseFloat(n.token0) * W, t({
				token1: isNaN($) ? "" : $.toString(),
				token0: n.token0,
				tokenUpdated: n.tokenUpdated
			})))
		}
	}, K = z => {
		_(z !== "")
	};
	return c.useEffect(() => {
		C && F(C)
	}, [C]), c.useEffect(() => {
		t({
			token0: "",
			token1: "",
			tokenUpdated: ""
		})
	}, [x.selected]), c.useEffect(() => {
		t({
			token0: "",
			token1: "",
			tokenUpdated: ""
		}), k(null)
	}, [d]), c.useEffect(() => {
		d && b && r && "limitOrder" in o.contracts && mp({
			pool: d,
			provider: b,
			contract: o.contracts.limitOrder.address
		}).then(z => {
			z[4] === 0 ? S(!1) : S(!0)
		})
	}, [d, y, r]), c.useEffect(() => {
		if (!(m && f && b && r && "limitOrder" in o.contracts)) return;
		const z = g ? f : m;
		fp({
			tokenAddress: z.address,
			provider: b,
			contract: o.contracts.limitOrder.address
		}).then(W => {
			E({
				token: z,
				amount: Number(W.toString()) / 10 ** z.decimals
			})
		}).catch(W => {
			window.log.log(W), E(void 0)
		})
	}, [d, b, y, r, g, m, f]), e.jsxs("div", {
		className: "flex flex-col justify-between flex-1",
		children: [e.jsxs("div", {
			className: "flex flex-col gap-2",
			children: [e.jsx("div", {
				className: "relative",
				children: N && T && T.token ? e.jsxs("div", {
					className: "flex flex-row gap-1.5 absolute right-2 -top-8",
					children: [e.jsxs(j, {
						weight: P.SEMIBOLD,
						color: u.white,
						children: ["Minimum order size is ", T == null ? void 0 : T.amount]
					}), e.jsx(xe, {
						tokenSymbol: R(T.token.address, T.token.symbol, o.id),
						logoUrl: T.token.logoURI,
						size: 14
					}), e.jsx(j, {
						weight: P.SEMIBOLD,
						color: u.white,
						children: R(T.token.address, T.token.symbol, o.id)
					})]
				}) : e.jsx(jo, {
					width: 20,
					stroke: u.red[500],
					className: "absolute right-2 -top-8"
				})
			}), e.jsxs("div", {
				className: "relative grid grid-cols-2",
				children: [e.jsx("div", {
					className: "w-fit  h-fit absolute flex right-0 left-0 top-0 bottom-0  mx-[auto] my-[auto] text-white",
					children: e.jsx(Rs, {
						onClick: () => {
							t({
								token0: "",
								token1: "",
								tokenUpdated: ""
							}), w(!g)
						}
					})
				}), m && f ? e.jsxs(e.Fragment, {
					children: [e.jsx(zr, {
						token: g ? f : m,
						orderInput: g ? n.token1 : n.token0,
						setOrderInput: J,
						action: "Sell",
						setFocus: l,
						disabled: !1,
						focus: i,
						balance: g ? H.data : M.data
					}), e.jsx(zr, {
						token: g ? m : f,
						orderInput: g ? n.token0 : n.token1,
						setOrderInput: J,
						action: "Buy",
						setFocus: l,
						disabled: !1,
						focus: i,
						balance: g ? M.data : H.data
					})]
				}) : e.jsxs(e.Fragment, {
					children: [e.jsx(Dt, {}), e.jsx(Dt, {})]
				})]
			}), e.jsx("div", {
				className: "flex flex-col gap-1 pt-2 text-white",
				children: m && f ? e.jsx(Yp, {
					tick: C,
					setTick: k,
					onPriceEntered: K,
					isPreferredTokenOrder: g,
					disabled: !N
				}) : e.jsx(Dt, {})
			})]
		}), e.jsxs("div", {
			className: "flex flex-col ",
			children: [e.jsx("div", {
				className: "w-full border-[1px] rounded-[10px] p-3 mb-2 flex flex-col gap-y-1 justify-between ",
				style: {
					borderColor: u.gray[700]
				},
				children: e.jsxs("div", {
					className: "flex justify-between",
					children: [e.jsx(j, {
						weight: P.MEDIUM,
						color: u.gray[400],
						children: "Gas:"
					}), e.jsx(ya, {
						fontSize: 12,
						fontColor: u.gray[50]
					})]
				})
			}), e.jsx(Gp, {
				orderAction: i,
				isValidPool: N,
				priceEntered: G,
				onClick: () => {
					m && f && Z(g ? f : m, g ? n.token1 : n.token0, g)
				},
				minToken: T,
				order: n,
				isPreferredTokenOrder: g,
				balance0: Number((V = M.data) == null ? void 0 : V.value) / 10 ** (m ? m.decimals : 18),
				balance1: Number((U = H.data) == null ? void 0 : U.value) / 10 ** (f ? f.decimals : 18),
				isEmpty: n.token0 === "" || n.token1 === "",
				orderFormState: A
			})]
		})]
	})
}
const Kp = () => e.jsx("div", {
	className: "absolute left-3 -top-8 w-[180px] text-left bg-gray-750 border-gray-700 border rounded-lg p-2",
	children: e.jsx(j, {
		color: u.gray[300],
		children: "May be due to server error or insufficient liquidity"
	})
});

function Zp(n) {
	const {
		orderAction: t,
		onClick: s,
		disabled: r = !1,
		insufficientFunds: o = !1,
		loadingPrice: a = !1,
		isEmpty: i,
		orderFormState: l,
		isHighImpact: d = !1
	} = n, {
		isConnected: m
	} = we(), {
		provider: f
	} = kt(), {
		currentChainInfo: p
	} = D(), [x, h] = c.useState(!1), y = l === Y.SIGNATURE || l === Y.SIGNATURE_IN_PROGRESS || l === Y.SIGNED, b = l === Y.TOKEN_APPROVAL, g = l === Y.TOKEN_APPROVAL_IN_PROGRESS, w = l === Y.EXECUTE_TRADE || l === Y.TOKEN_APPROVED, C = l === Y.EXECUTE_TRADE_IN_PROGRESS, k = l === Y.QUOTE_ERROR, T = () => r || l !== void 0, E = () => {
		var S;
		return !m || o || r || l !== void 0 || f && ((S = f.chain) == null ? void 0 : S.id) !== p.id
	}, N = () => a ? e.jsx(cn, {}) : k ? e.jsx(Qp, {}) : m ? i ? e.jsx(ee, {
		weight: P.SEMIBOLD,
		color: u.blue[400],
		children: t
	}) : o ? e.jsx(ee, {
		weight: P.SEMIBOLD,
		color: "inherit",
		children: "Insufficient balance"
	}) : C ? e.jsxs("div", {
		className: "flex flex-row items-center gap-1",
		children: [e.jsx(cn, {}), e.jsx(ee, {
			weight: P.SEMIBOLD,
			color: "inherit",
			children: "Transaction in progress"
		})]
	}) : y ? e.jsx(ee, {
		weight: P.SEMIBOLD,
		color: "inherit",
		children: "Sign order"
	}) : b ? e.jsx(ee, {
		weight: P.SEMIBOLD,
		color: "inherit",
		children: "Approve token in wallet"
	}) : w ? e.jsx(ee, {
		weight: P.SEMIBOLD,
		color: "inherit",
		children: "Confirm trade in wallet"
	}) : g ? e.jsxs("div", {
		className: "flex flex-row items-center gap-1",
		children: [e.jsx(cn, {}), e.jsx(ee, {
			weight: P.SEMIBOLD,
			color: "inherit",
			children: "Approval In Progress"
		})]
	}) : e.jsxs(ee, {
		weight: P.SEMIBOLD,
		color: "inherit",
		children: [t, " ", d && e.jsx(e.Fragment, {
			children: "Anyway"
		})]
	}) : e.jsx(ee, {
		weight: P.SEMIBOLD,
		color: "inherit",
		children: "Connect Wallet"
	});
	return e.jsx("button", {
		disabled: T() || E(),
		onClick: () => {
			T() || E() || s()
		},
		style: {
			color: E() ? u.gray[500] : u.gray[50],
			backgroundColor: E() ? u.gray[800] : x ? u.blue[500] : u.blue[400]
		},
		onMouseEnter: () => h(!0),
		onMouseLeave: () => h(!1),
		className: "flex w-full justify-center items-center h-[38px] rounded-[8px] text-[16px] font-semibold ",
		children: e.jsx(N, {})
	})
}
const Qp = () => {
		const [n, t] = c.useState(!1);
		return e.jsxs("div", {
			className: "flex gap-x-2 items-center relative",
			style: {
				color: u.gray[600]
			},
			onMouseEnter: () => t(!0),
			onMouseLeave: () => t(!1),
			children: [e.jsx(Lt, {
				color: u.gray[600]
			}), e.jsx(ee, {
				weight: P.SEMIBOLD,
				color: "inherit",
				children: "Impossible to Quote"
			}), n && e.jsx(Kp, {})]
		})
	},
	Jp = ({
		token: n,
		setFromToken: t,
		disabled: s
	}) => {
		const {
			currentChainInfo: r
		} = D(), {
			token1: o,
			token0: a
		} = oe(), [i, l] = c.useState(!1), {
			refs: d,
			floatingStyles: m,
			context: f
		} = Ce({
			whileElementsMounted: Ie,
			open: i,
			onOpenChange: l,
			middleware: []
		}), {
			styles: p
		} = Ae(f, {
			initial: {
				opacity: 1,
				transform: "scale(0.5,0)"
			},
			common: {
				transformOrigin: "top-right"
			}
		}), x = Pe(f), h = Le(f), {
			getReferenceProps: y,
			getFloatingProps: b
		} = Ne([x, h]), g = c.useMemo(() => n.address.toLowerCase() === Ue[r.id].toLowerCase(), [n.address]), w = $t({
			address: se,
			symbol: r.nativeCurrency.symbol,
			decimals: r.nativeCurrency.decimals,
			name: r.nativeCurrency.name,
			chainId: r.id
		}), C = a.address.toLowerCase() === Ue[r.id].toLowerCase(), k = $t({
			address: Ue[r.id],
			symbol: C ? a.symbol : o.symbol,
			decimals: r.nativeCurrency.decimals,
			name: C ? a.name : o.name,
			chainId: r.id
		}), T = () => {
			w.logoURI = n.logoURI, k.logoURI = n.logoURI, t(g ? w : k), l(!1)
		}, E = g ? R(w.address, w.symbol, r.id) : R(k.address, k.symbol, r.id);
		return e.jsxs(e.Fragment, {
			children: [e.jsx("div", {
				className: "flex flex-row rounded-[6px] w-fit  items-center justify-center cursor-pointer",
				ref: d.setReference,
				...y(),
				children: e.jsxs("div", {
					className: "flex flex-row gap-1 ml-1",
					children: [e.jsx(O, {
						color: u.gray[100],
						children: R(n.address, n.symbol, r.id)
					}), e.jsx(_t, {})]
				})
			}), i && !s && e.jsx("div", {
				className: "z-10",
				ref: d.setFloating,
				style: m,
				...b(),
				children: e.jsx("div", {
					className: "z-10 mt-2 bg-gray-900 flex flex-row gap-2 py-2 px-3 outline outline-gray-600 outline-1 rounded-lg hover:bg-gray-800 hover:outline-blue-600 cursor-pointer",
					style: {
						...p
					},
					onClick: T,
					children: e.jsx(O, {
						color: u.gray[100],
						children: E
					})
				})
			})]
		})
	};

function Wr(n) {
	const {
		currentChainInfo: t
	} = D(), {
		placeHolder: s,
		token: r,
		value: o,
		setValue: a,
		loading: i = !1,
		action: l,
		setFocus: d,
		focus: m,
		disabled: f = !1,
		balance: p,
		setFromToken: x
	} = n, [h, y] = c.useState(!1), b = l === "Sell", g = k => {
		k === "" && a(""), d(l), a(k)
	}, w = () => {
		p && a(p.formatted)
	}, C = c.useMemo(() => r.address === se ? ke(Ue[t.id], t.id) : r.logoURI ? r.logoURI : ke(r.address, t.id), [r.address, t.id]);
	return e.jsx("div", {
		className: "flex flex-col mx-1",
		children: e.jsx("div", {
			onFocus: () => d(l),
			onMouseEnter: () => {
				y(!0)
			},
			onMouseLeave: () => {
				y(!1)
			},
			className: "p-3 rounded-[10px] bg-gray-900 border-[1px] ",
			style: {
				borderColor: !f && m === l || h ? u.blue[400] : u.gray[700]
			},
			children: e.jsxs("div", {
				className: "flex flex-col",
				children: [e.jsxs("div", {
					className: "flex flex-row justify-between gap-x-1",
					children: [i ? e.jsx("div", {
						className: "h-5",
						children: e.jsx("div", {
							className: "w-20 mt-0.5 h-4 rounded-sm bg-gradient-to-r from-gray-700 to-gray-900 animte-shimmer overflow-hidden",
							children: e.jsx("div", {
								className: "animate-shimmer w-20 h-4 bg-gradient-to-r from-gray-900 to-transparent"
							})
						})
					}) : e.jsx(Xe, {
						onUserInput: g,
						value: i ? "Loading" : o,
						placeholder: s,
						decimals: r.decimals,
						disabled: f || i,
						classes: "text-sm font-semibold text-gray-50"
					}), e.jsxs("div", {
						className: "flex justify-end mb-1 items-center gap-1",
						children: [e.jsx(xe, {
							tokenSymbol: R(r.address, r.symbol, t.id),
							logoUrl: C
						}), m && e.jsx(j, {
							color: m === l ? u.blue[400] : u.gray[400],
							children: l
						})]
					})]
				}), e.jsx(Qt, {
					containerClasses: "my-2 "
				}), e.jsxs("div", {
					className: "flex flex-row justify-between items-center gap-x-1 w-full",
					children: [e.jsx(nr, {
						onClick: b && p && p.formatted > o ? w : void 0,
						balance: p
					}), r.address.toLowerCase() === Ue[t.id].toLowerCase() || r.address.toLowerCase() === se && x ? e.jsx(Jp, {
						token: r,
						setFromToken: x,
						disabled: i
					}) : e.jsx(ga, {
						token: r
					})]
				})]
			})
		})
	})
}
const Gr = () => e.jsxs("svg", {
	className: "animate-spin",
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	children: [e.jsx("path", {
		d: "M5.39361 14.1858C5.1431 14.7181 4.50301 14.9526 4.01141 14.6294C2.67084 13.748 1.63688 12.4533 1.07193 10.9228C0.382566 9.05521 0.445938 6.98378 1.24857 5.14897C2.05121 3.31417 3.52979 1.86072 5.36992 1.09769C7.21005 0.33466 9.26657 0.32224 11.1022 1.06307C12.9378 1.8039 14.4077 3.23954 15.1994 5.06472C15.991 6.8899 16.042 8.96064 15.3414 10.8366C14.6408 12.7126 13.2439 14.2459 11.4478 15.1104C9.9765 15.8185 8.33243 16.0321 6.75555 15.7364C6.17632 15.6278 5.87843 15.0131 6.06937 14.4555V14.4555C6.2596 13.9 6.86436 13.6146 7.44642 13.692C8.49755 13.8316 9.5773 13.6626 10.5521 13.1935C11.8507 12.5685 12.8606 11.46 13.3671 10.1037C13.8736 8.7474 13.8368 7.25032 13.2644 5.93076C12.6921 4.61121 11.6294 3.57329 10.3023 3.03769C8.97517 2.50209 7.48837 2.51107 6.15801 3.06272C4.82765 3.61436 3.75868 4.66516 3.1784 5.99168C2.59811 7.31819 2.5523 8.81578 3.05069 10.166C3.42444 11.1785 4.08213 12.0483 4.93378 12.677C5.40712 13.0264 5.64413 13.6534 5.39361 14.1858V14.1858Z",
		fill: "url(#paint0_linear_102_8)"
	}), e.jsx("defs", {
		children: e.jsxs("linearGradient", {
			id: "paint0_linear_102_8",
			x1: "15.0925",
			y1: "11.4275",
			x2: "1.33693",
			y2: "4.95432",
			gradientUnits: "userSpaceOnUse",
			children: [e.jsx("stop", {
				stopColor: u.blue[400]
			}), e.jsx("stop", {
				offset: "1",
				stopColor: u.blue.loader,
				stopOpacity: "0.53"
			})]
		})
	})]
});

function em({
	onClick: n
}) {
	const [t, s] = c.useState(!1);
	return e.jsx("button", {
		onClick: n,
		onMouseEnter: () => {
			s(!0)
		},
		onMouseLeave: () => {
			s(!1)
		},
		children: e.jsx(Ki, {
			width: 12,
			color: t ? u.gray[400] : u.gray[50]
		})
	})
}
const tm = n => {
	const {
		currentChainInfo: t
	} = D(), {
		token0: s,
		token1: r,
		price: o,
		priceImpact: a,
		market: i,
		loading: l = !1,
		showGas: d = !1
	} = n, [m, f] = c.useState(!1);
	c.useEffect(() => {
		f(!1)
	}, [s, r, o, a]);
	const p = h => {
			const y = {
				usor: "Zero-Fee Ukia Router",
				zeroex: "0x Router"
			} [h || ""];
			return y || "Zero-Fee Ukia Router"
		},
		x = c.useMemo(() => parseFloat(a) > 5, [a]);
	return e.jsxs("div", {
		className: "w-full border-[1px] rounded-[10px] p-2 mt-2 mb-3 flex flex-col gap-y-1 justify-between",
		style: {
			borderColor: u.gray[700]
		},
		children: [e.jsxs("div", {
			className: "flex justify-between flex-row h-4",
			children: [e.jsx(j, {
				weight: P.MEDIUM,
				color: u.gray[400],
				children: "Engine:"
			}), e.jsx(j, {
				weight: P.REGULAR,
				color: u.gray[300],
				children: p(i)
			})]
		}), e.jsxs("div", {
			className: "flex justify-between flex-row h-4 ",
			children: [e.jsx(j, {
				weight: P.MEDIUM,
				color: u.gray[400],
				children: "Price:"
			}), e.jsxs("div", {
				className: "flex flex-row gap-1 items-center",
				children: [e.jsx(j, {
					weight: P.REGULAR,
					color: u.gray[300],
					children: l ? e.jsx(Gr, {}) : e.jsxs("div", {
						className: "flex flex-row",
						children: [l ? "  " : o === void 0 ? "..." : L(m ? {
							num: o,
							stringOut: !0,
							singleLetterNotation: !0
						} : {
							num: 1 / o,
							stringOut: !0,
							singleLetterNotation: !0
						}), " ", e.jsxs("div", {
							className: "flex gap-1 ml-1",
							style: {
								flexDirection: m ? "row" : "row-reverse"
							},
							children: [e.jsx("div", {
								children: s && r && R(r.address, r.symbol, t.id)
							}), e.jsx("div", {
								children: " per"
							}), e.jsxs("div", {
								children: [" ", s && r && R(s.address, s.symbol, t.id)]
							})]
						})]
					})
				}), e.jsx(em, {
					onClick: () => f(!m)
				})]
			})]
		}), e.jsxs("div", {
			className: "flex justify-between rounded-md px-1 -mx-1 py-1 h-5",
			style: {
				backgroundColor: x ? "rgba(244, 114, 114, 0.2)" : ""
			},
			children: [e.jsxs(j, {
				weight: P.MEDIUM,
				color: x ? u.red[300] : u.gray[400],
				className: "flex items-center",
				children: ["Price Impact", " ", x ? e.jsxs(e.Fragment, {
					children: ["Warning ", e.jsx(Zi, {
						height: 12,
						className: "inline-block ml-0.5 mt-[1px]",
						color: u.red[300]
					})]
				}) : e.jsx(e.Fragment, {
					children: ":"
				})]
			}), l ? e.jsx(Gr, {}) : e.jsxs(j, {
				weight: P.REGULAR,
				color: x ? u.red[300] : u.gray[300],
				children: [a === "" ? "Loading" : a, "%"]
			})]
		}), d ? e.jsxs("div", {
			className: "flex justify-between",
			children: [e.jsx(j, {
				weight: P.MEDIUM,
				color: u.gray[400],
				children: "Gas:"
			}), e.jsx(ya, {
				fontSize: 12
			})]
		}) : e.jsx(e.Fragment, {})]
	})
};
class nm {
	constructor(t) {
		me(this, "config");
		this.config = t
	}
}
class qr extends Error {
	constructor(s, r, o) {
		super(o);
		me(this, "url");
		me(this, "status");
		me(this, "statusText");
		me(this, "body");
		me(this, "request");
		this.name = "ApiError", this.url = r.url, this.status = r.status, this.statusText = r.statusText, this.body = r.body, this.request = s
	}
}
class sm extends Error {
	constructor(t) {
		super(t), this.name = "CancelError"
	}
	get isCancelled() {
		return !0
	}
}
var ct, dt, nt, Pt, Yt, Nn, dn;
class rm {
	constructor(t) {
		Et(this, ct, void 0);
		Et(this, dt, void 0);
		Et(this, nt, void 0);
		Et(this, Pt, void 0);
		Et(this, Yt, void 0);
		Et(this, Nn, void 0);
		Et(this, dn, void 0);
		tt(this, ct, !1), tt(this, dt, !1), tt(this, nt, !1), tt(this, Pt, []), tt(this, Yt, new Promise((s, r) => {
			tt(this, Nn, s), tt(this, dn, r);
			const o = l => {
					var d;
					ue(this, ct) || ue(this, dt) || ue(this, nt) || (tt(this, ct, !0), (d = ue(this, Nn)) == null || d.call(this, l))
				},
				a = l => {
					var d;
					ue(this, ct) || ue(this, dt) || ue(this, nt) || (tt(this, dt, !0), (d = ue(this, dn)) == null || d.call(this, l))
				},
				i = l => {
					ue(this, ct) || ue(this, dt) || ue(this, nt) || ue(this, Pt).push(l)
				};
			return Object.defineProperty(i, "isResolved", {
				get: () => ue(this, ct)
			}), Object.defineProperty(i, "isRejected", {
				get: () => ue(this, dt)
			}), Object.defineProperty(i, "isCancelled", {
				get: () => ue(this, nt)
			}), t(o, a, i)
		}))
	}
	get[Symbol.toStringTag]() {
		return "Cancellable Promise"
	}
	then(t, s) {
		return ue(this, Yt).then(t, s)
	} catch (t) {
		return ue(this, Yt).catch(t)
	} finally(t) {
		return ue(this, Yt).finally(t)
	}
	cancel() {
		var t;
		if (!(ue(this, ct) || ue(this, dt) || ue(this, nt))) {
			if (tt(this, nt, !0), ue(this, Pt).length) try {
				for (const s of ue(this, Pt)) s()
			} catch (s) {
				console.warn("Cancellation threw an error", s);
				return
			}
			ue(this, Pt).length = 0, (t = ue(this, dn)) == null || t.call(this, new sm("Request aborted"))
		}
	}
	get isCancelled() {
		return ue(this, nt)
	}
}
ct = new WeakMap, dt = new WeakMap, nt = new WeakMap, Pt = new WeakMap, Yt = new WeakMap, Nn = new WeakMap, dn = new WeakMap;
const sr = n => n != null,
	Pn = n => typeof n == "string",
	gs = n => Pn(n) && n !== "",
	rr = n => typeof n == "object" && typeof n.type == "string" && typeof n.stream == "function" && typeof n.arrayBuffer == "function" && typeof n.constructor == "function" && typeof n.constructor.name == "string" && /^(Blob|File)$/.test(n.constructor.name) && /^(Blob|File)$/.test(n[Symbol.toStringTag]),
	ba = n => n instanceof FormData,
	om = n => {
		try {
			return btoa(n)
		} catch {
			return Buffer.from(n).toString("base64")
		}
	},
	am = n => {
		const t = [],
			s = (o, a) => {
				t.push(`${encodeURIComponent(o)}=${encodeURIComponent(String(a))}`)
			},
			r = (o, a) => {
				sr(a) && (Array.isArray(a) ? a.forEach(i => {
					r(o, i)
				}) : typeof a == "object" ? Object.entries(a).forEach(([i, l]) => {
					r(`${o}[${i}]`, l)
				}) : s(o, a))
			};
		return Object.entries(n).forEach(([o, a]) => {
			r(o, a)
		}), t.length > 0 ? `?${t.join("&")}` : ""
	},
	im = (n, t) => {
		const s = n.ENCODE_PATH || encodeURI,
			r = t.url.replace("{api-version}", n.VERSION).replace(/{(.*?)}/g, (a, i) => {
				var l;
				return (l = t.path) != null && l.hasOwnProperty(i) ? s(String(t.path[i])) : a
			}),
			o = `${n.BASE}${r}`;
		return t.query ? `${o}${am(t.query)}` : o
	},
	lm = n => {
		if (n.formData) {
			const t = new FormData,
				s = (r, o) => {
					Pn(o) || rr(o) ? t.append(r, o) : t.append(r, JSON.stringify(o))
				};
			return Object.entries(n.formData).filter(([r, o]) => sr(o)).forEach(([r, o]) => {
				Array.isArray(o) ? o.forEach(a => s(r, a)) : s(r, o)
			}), t
		}
	},
	Fn = async (n, t) => typeof t == "function" ? t(n) : t, cm = async (n, t) => {
		const s = await Fn(t, n.TOKEN),
			r = await Fn(t, n.USERNAME),
			o = await Fn(t, n.PASSWORD),
			a = await Fn(t, n.HEADERS),
			i = Object.entries({
				Accept: "application/json",
				...a,
				...t.headers
			}).filter(([l, d]) => sr(d)).reduce((l, [d, m]) => ({
				...l,
				[d]: String(m)
			}), {});
		if (gs(s) && (i.Authorization = `Bearer ${s}`), gs(r) && gs(o)) {
			const l = om(`${r}:${o}`);
			i.Authorization = `Basic ${l}`
		}
		return t.body && (t.mediaType ? i["Content-Type"] = t.mediaType : rr(t.body) ? i["Content-Type"] = t.body.type || "application/octet-stream" : Pn(t.body) ? i["Content-Type"] = "text/plain" : ba(t.body) || (i["Content-Type"] = "application/json")), new Headers(i)
	}, dm = n => {
		var t;
		if (n.body !== void 0) return (t = n.mediaType) != null && t.includes("/json") ? JSON.stringify(n.body) : Pn(n.body) || rr(n.body) || ba(n.body) ? n.body : JSON.stringify(n.body)
	}, um = async (n, t, s, r, o, a, i) => {
		const l = new AbortController,
			d = {
				headers: a,
				body: r ?? o,
				method: t.method,
				signal: l.signal
			};
		return n.WITH_CREDENTIALS && (d.credentials = n.CREDENTIALS), i(() => l.abort()), await fetch(s, d)
	}, pm = (n, t) => {
		if (t) {
			const s = n.headers.get(t);
			if (Pn(s)) return s
		}
	}, mm = async n => {
		if (n.status !== 204) try {
			const t = n.headers.get("Content-Type");
			if (t) return ["application/json", "application/problem+json"].some(o => t.toLowerCase().startsWith(o)) ? await n.json() : await n.text()
		} catch (t) {
			console.error(t)
		}
	}, fm = (n, t) => {
		const r = {
			400: "Bad Request",
			401: "Unauthorized",
			403: "Forbidden",
			404: "Not Found",
			500: "Internal Server Error",
			502: "Bad Gateway",
			503: "Service Unavailable",
			...n.errors
		} [t.status];
		if (r) throw new qr(n, t, r);
		if (!t.ok) {
			const o = t.status ?? "unknown",
				a = t.statusText ?? "unknown",
				i = (() => {
					try {
						return JSON.stringify(t.body, null, 2)
					} catch {
						return
					}
				})();
			throw new qr(n, t, `Generic Error: status: ${o}; status text: ${a}; body: ${i}`)
		}
	}, xm = (n, t) => new rm(async (s, r, o) => {
		try {
			const a = im(n, t),
				i = lm(t),
				l = dm(t),
				d = await cm(n, t);
			if (!o.isCancelled) {
				const m = await um(n, t, a, l, i, d, o),
					f = await mm(m),
					p = pm(m, t.responseHeader),
					x = {
						url: a,
						ok: m.ok,
						status: m.status,
						statusText: m.statusText,
						body: p ?? f
					};
				fm(t, x), s(x.body)
			}
		} catch (a) {
			r(a)
		}
	});
class hm extends nm {
	constructor(t) {
		super(t)
	}
	request(t) {
		return xm(this.config, t)
	}
}
class ym {
	constructor(t) {
		me(this, "httpRequest");
		this.httpRequest = t
	}
	healthControllerGetHealth() {
		return this.httpRequest.request({
			method: "GET",
			url: "/health"
		})
	}
	marketControllerGetMarketsOverview() {
		return this.httpRequest.request({
			method: "GET",
			url: "/market/overview"
		})
	}
	marketControllerGetMarketStatus(t) {
		return this.httpRequest.request({
			method: "GET",
			url: "/market/{marketId}/status",
			path: {
				marketId: t
			}
		})
	}
	marketControllerPostMarketPriceQuote(t, s) {
		return this.httpRequest.request({
			method: "POST",
			url: "/market/{marketId}/price_quote",
			path: {
				marketId: t
			},
			body: s,
			mediaType: "application/json"
		})
	}
	marketControllerPostMarketSwapQuote(t, s) {
		return this.httpRequest.request({
			method: "POST",
			url: "/market/{marketId}/swap_quote",
			path: {
				marketId: t
			},
			body: s,
			mediaType: "application/json"
		})
	}
	marketControllerPostExecutionInformation(t, s) {
		return this.httpRequest.request({
			method: "POST",
			url: "/market/{marketId}/execution_information",
			path: {
				marketId: t
			},
			body: s,
			mediaType: "application/json"
		})
	}
}
class gm {
	constructor(t, s = hm) {
		me(this, "default");
		me(this, "request");
		this.request = new s({
			BASE: (t == null ? void 0 : t.BASE) ?? "",
			VERSION: (t == null ? void 0 : t.VERSION) ?? "1.0",
			WITH_CREDENTIALS: (t == null ? void 0 : t.WITH_CREDENTIALS) ?? !1,
			CREDENTIALS: (t == null ? void 0 : t.CREDENTIALS) ?? "include",
			TOKEN: t == null ? void 0 : t.TOKEN,
			USERNAME: t == null ? void 0 : t.USERNAME,
			PASSWORD: t == null ? void 0 : t.PASSWORD,
			HEADERS: t == null ? void 0 : t.HEADERS,
			ENCODE_PATH: t == null ? void 0 : t.ENCODE_PATH
		}), this.default = new ym(this.request)
	}
}
const bm = n => {
		var K, V;
		const t = new gm({
				BASE: "https://oku-canoe.fly.dev"
			}),
			{
				chainInfo: s,
				signer: r,
				provider: o
			} = n,
			a = Xt(s.id),
			[i, l] = c.useState(a),
			[d, m] = c.useState(a),
			[f, p] = Cs(void 0, 50),
			{
				setTxState: x
			} = gn(),
			h = window.rdt,
			{
				data: y
			} = be("cush_getTokenOverview", [i.address], {}),
			{
				data: b
			} = be("cush_getTokenOverview", [d.address], {}),
			g = Te(),
			[w, C] = c.useState(!1),
			{
				telemetryRpc: k
			} = bn(),
			{
				features: {
					Telemetry: T
				}
			} = Te(),
			[E, N] = c.useState(!1),
			[S, G] = c.useState(!1),
			[_, v] = c.useState(void 0),
			I = An(),
			A = U => {
				l(U || a)
			},
			B = U => {
				m(U || a)
			},
			M = ["usor"],
			H = ((V = (K = g.features) == null ? void 0 : K.Router) == null ? void 0 : V.markets) || M,
			X = Qi({
				queries: H.map(U => ({
					cacheTime: 0,
					refetchOnWindowFocus: !1,
					queryKey: ["swap_order_quote", U, f],
					queryFn: async ({
						signal: z
					}) => {
						const W = f;
						if (!i || !d || !W || !f || f.tokenAmount === "") return null;
						window.log.log("query to", U);
						const {
							chain: $,
							tokenAmount: te,
							isExactIn: q
						} = W, le = {
							chain: $,
							account: (r == null ? void 0 : r.account.address) || se,
							inTokenAddress: i.address,
							outTokenAddress: d.address,
							isExactIn: q,
							gasPrice: W.gasPrice,
							slippage: W.slippage
						};
						q ? le.inTokenAmount = te.toString() : le.outTokenAmount = te.toString();
						const ae = t.default.marketControllerPostMarketSwapQuote(U, le);
						z == null || z.addEventListener("abort", () => {
							ae.cancel()
						});
						const ie = await ae;
						return window.log.log("got response", ie.market, ie.outAmount, ie), ae
					}
				}))
			});
		c.useEffect(() => {
			const U = X.map($ => {
				if ($ && !$.isFetching && $.data) return $.data
			}).filter($ => $ !== void 0);
			if (!(Number(f == null ? void 0 : f.tokenAmount) > 0)) {
				v(void 0);
				return
			}
			let z = !1,
				W;
			U.forEach($ => {
				$ && ($ = {
					...$
				}, z = !0, W ? Number($.outAmount) === Number(W.outAmount) ? Number($.inAmount) < Number(W.inAmount) && (W = $) : Number($.outAmount) > Number(W.outAmount) && (W = $) : W = $)
			}), G(!z), W != _ && (window.log.log("new best route:", W), v(W))
		}, [...X.map(U => U.data), f]);
		const Z = () => {
			let U = Number(f == null ? void 0 : f.tokenAmount);
			U = U || 0, U > 0 ? G(!1) : (G(!0), p(f))
		};
		c.useEffect(() => {
			w || (v(void 0), X.map(async U => {
				await U.refetch()
			}))
		}, [f]);

		function J(U, z, W, $) {
			x(U);
			const te = {
				state: U,
				hash: W,
				chain: $
			};
			return z ? I.replace(z, te) : I.add(te)
		}
		return {
			fromToken: i,
			toToken: d,
			setFromToken: A,
			setToToken: B,
			routeData: _,
			isFetchingPrice: S,
			currentRequest: f,
			inExecution: w,
			setCurrentRequest: p,
			executeTrade: async () => {
				var W, $, te;
				let U;
				C(!0);
				let z = !1;
				try {
					if (!_ || !r || !o) return;
					(($ = (W = _.coupon) == null ? void 0 : W.swapConfig) == null ? void 0 : $.recipient) === se && (_.coupon.swapConfig.recipient = r.account.address, z = !0);
					const q = {
							..._
						},
						le = {
							...q.coupon
						},
						ae = {
							...q.signingRequest
						};
					if (((te = o == null ? void 0 : o.chain) == null ? void 0 : te.id) != q.chainId) {
						window.log.error("attempting to execute trade on incorrect chain", o.chain, q.chainId);
						return
					}
					if (ae && ae.permit2Address && ae.permitSignature) {
						const ye = ae.permitSignature[0],
							$e = Number(ae.permitSignature[0].permit.details.expiration) + 604800;
						if (ae.permitSignature[0].permit.details.expiration = $e.toString(), ae.permitSignature[0].permit.details.amount = po.toString(), ye && !ye.signature || z) {
							const Re = await jt({
								address: ae.permit2Address,
								abi: Sc,
								client: {
									wallet: r,
									public: o
								}
							}).read.allowance([r.account.address, ae.permitSignature[0].permit.details.token, ae.permitSignature[0].permit.spender]);
							if (Re[0] < Oe(_.inAmount, _.inToken.decimals) || Re[1] < Math.floor(new Date().getTime() / 1e3)) {
								ye.permit.details.nonce = Re[2].toString();
								const Q = lc(r.account.address, ye.permit, ae.permit2Address, q.chainId, $e);
								U = J(Y.SIGNATURE_IN_PROGRESS);
								const ne = await r.signTypedData(Q);
								J(Y.SIGNED, U), ae.permitSignature[0].signature = ne
							}
						}
					}
					const ie = {
							coupon: le,
							signingRequest: ae
						},
						pe = await t.default.marketControllerPostExecutionInformation(q.market, ie);
					if (pe.approvals)
						for (const ye of pe.approvals) {
							const $e = jt({
								address: ye.address,
								abi: Hn,
								client: {
									wallet: r,
									public: o
								}
							});
							if ($e.address == se) continue;
							let St = await $e.read.allowance([r.account.address, ye.approvee]);
							for (; Oe(q.inAmount, q.inToken.decimals) > St;) {
								U = J(Y.TOKEN_APPROVAL);
								const Re = await $e.write.approve([ye.approvee, 2n ** 192n], {
									chain: r.chain,
									account: r.account
								});
								U = J(Y.TOKEN_APPROVAL_IN_PROGRESS, U, Re, s.id), N(!0), await o.waitForTransactionReceipt({
									hash: Re
								}), J(Y.TOKEN_APPROVED, U, Re, s.id), U = void 0, N(!1), St = await $e.read.allowance([r.account.address, ye.approvee], {
									blockTag: "pending"
								})
							}
						}
					U = J(Y.EXECUTE_TRADE);
					const ce = pe.trade,
						We = {
							data: ce.data,
							to: ce.to,
							value: ce.value ? BigInt(ce.value) : void 0,
							account: r.account.address,
							gasPrice: void 0,
							chain: r.chain
						};
					q.chainId !== Ji.id && ce.accessList && (We.accessList = ce.accessList);
					const Be = await o.estimateGas(We);
					if (We.gas = Be * 12n / 10n, q.market == "usor" && !Pl(q.chainId, We.to)) {
						const ye = el(["function supportsInterface(bytes4 interfaceID) external view returns (bool)"]);
						if (!await jt({
								address: We.to,
								abi: ye,
								client: {
									wallet: r,
									public: o
								}
							}).read.supportsInterface(["0x01ffc9a7"]).catch(Re => {
								window.log.log(Re), J(Y.EXECUTE_TRADE_ERROR, U), x(void 0)
							})) {
							J(Y.EXECUTE_TRADE_ERROR, U), x(void 0), window.log.log("attempting to send to incorrect address", We.to);
							return
						}
					}
					const it = await r.sendTransaction(We);
					U = J(Y.EXECUTE_TRADE_IN_PROGRESS, U, it, s.id), N(!0);
					const Fe = await o.waitForTransactionReceipt({
						hash: it
					}).finally(() => {
						N(!1), I.replace(U, {
							state: Y.EXECUTE_TRADE_SUCCESS,
							txHash: it,
							chainId: s.id
						}), x(void 0)
					});
					T.enabled && await Jt(k, q.chainId, "trade", "market_order", r.account.address, Fe.transactionHash, {});
					const ht = y ? y.price_deltas.price_usd * Number(q.isExactIn ? q.inAmount : q.outAmount) : b ? b.price_deltas.price_usd * Number(q.isExactIn ? q.outAmount : q.inAmount) : 0,
						Me = ve[q.chainId];
					return Me && (Ke("market_order", {
						chain: Me.name,
						tokenIn: q.inToken.address,
						tokenOut: q.outToken.address,
						amountIn: q.inAmount,
						value: ht,
						transaction: Fe.transactionHash
					}), h("track", "Custom", {
						customEventName: "Swap"
					})), Fe
				} catch (q) {
					window.log.error("failed to execute", q), I.replace(U, {
						state: Y.EXECUTE_TRADE_ERROR
					}), x(void 0)
				} finally {
					p(void 0), C(!1)
				}
			},
			refetchCurrentRequest: Z,
			transactionPending: E
		}
	},
	wm = n => {
		const {
			initialCountDown: t = 15
		} = n, [s, {
			startCountdown: r,
			stopCountdown: o,
			resetCountdown: a
		}] = tl({
			countStart: t,
			intervalMs: 1e3
		}), [i, l] = c.useState(!1), [d, m] = c.useState(0);
		return c.useEffect(() => {
			i ? (m(d + 1), a(), r()) : o()
		}, [i]), c.useEffect(() => {
			s === 0 && (a(), r(), m(d + 1))
		}, [s]), {
			count: s,
			countEnabled: i,
			countTriggered: d,
			setCountEnabled: l
		}
	};

function Yr(n) {
	const {
		placeHolder: t,
		token: s,
		value: r,
		setValue: o,
		loading: a = !1,
		action: i,
		setFocus: l,
		focus: d,
		disabled: m = !1,
		flip: f = !1,
		balance: p
	} = n, [x, h] = c.useState(!1), {
		isConnected: y
	} = we(), b = w => {
		w === "" && o(""), l(i), o(w)
	}, g = () => {
		p && o(p.formatted)
	};
	return e.jsx("div", {
		className: "flex flex-col mx-1",
		children: e.jsxs("div", {
			onFocus: () => l(i),
			onMouseEnter: () => {
				h(!0)
			},
			onMouseLeave: () => {
				h(!1)
			},
			className: "flex py-3 flex-row justify-between px-3 rounded-[10px] bg-gray-900 border-[1px]",
			style: {
				borderColor: !m && d === i || x ? u.blue[400] : u.gray[700]
			},
			children: [e.jsxs("div", {
				className: "flex flex-col justify-between items-start",
				children: [e.jsx(Xe, {
					onUserInput: b,
					value: a ? "Loading" : r,
					placeholder: t,
					disabled: m || a,
					decimals: s.decimals,
					classes: "text-sm font-semibold text-gray-50"
				}), e.jsx("div", {
					className: "flex gap-x-2",
					children: e.jsx(nr, {
						onClick: i === "Sell" && y && p && p.formatted > r ? g : void 0,
						balance: p
					})
				})]
			}), e.jsxs("div", {
				children: [e.jsx("div", {
					className: " flex justify-end mb-1",
					children: d && e.jsx(j, {
						color: d === i ? u.blue[400] : u.gray[400],
						children: i
					})
				}), e.jsx("div", {
					className: "flex flex-row gap-2 items-center",
					children: e.jsx(Qs, {
						token: s,
						isToken0: f
					})
				})]
			})]
		})
	})
}

function Xr(n) {
	var Re;
	const {
		settings: t,
		isSwapForm: s = !1
	} = n, [r, o] = c.useState(!0), [a, i] = c.useState(!1), [l, d] = c.useState(!1), [m, f] = c.useState(void 0), {
		currentChainInfo: p
	} = D(), {
		provider: x,
		signer: h
	} = kt(), {
		data: y
	} = nl(), {
		count: b,
		countEnabled: g,
		countTriggered: w,
		setCountEnabled: C
	} = wm({
		initialCountDown: 15
	}), [k, T] = c.useState(!1), {
		fromToken: E,
		toToken: N,
		setFromToken: S,
		setToToken: G,
		routeData: _,
		isFetchingPrice: v,
		inExecution: I,
		setCurrentRequest: A,
		executeTrade: B
	} = bm({
		signer: h,
		provider: x,
		chainInfo: p
	}), {
		token1: M,
		token0: H,
		token: X,
		poolAddress: Z
	} = oe(), {
		token1: J,
		token0: F,
		txState: K
	} = gn(), V = s ? F : H, U = s ? J : M;
	c.useEffect(() => {
		A(void 0), T(!1)
	}, [Z, p.id]), c.useEffect(() => {
		const Q = r ? U : V,
			ne = r ? V : U;
		S(Q), G(ne)
	}, [V, U]), c.useEffect(() => {
		if (V && V.address === se || U && U.address === se) return;
		let Q = r ? U : V,
			ne = r ? V : U;
		if (N.address === se && E.address === se) {
			S(Q), G(ne);
			return
		}
		const je = $t({
				address: se,
				symbol: p.nativeCurrency.symbol,
				decimals: p.nativeCurrency.decimals,
				name: p.nativeCurrency.name,
				chainId: p.id
			}),
			Qe = Q && Q.address.toLowerCase() === Ue[p.id].toLowerCase(),
			Ge = ne && ne.address.toLowerCase() === Ue[p.id].toLowerCase();
		N.address === se && Qe ? Q = je : E.address === se && Ge && (ne = je), S(Q), G(ne)
	}, [r]);
	const [z, W] = c.useState(""), [$, te] = c.useState(""), [q, le] = c.useState(0), ae = Q => {
		W(Q), le(q + 1)
	}, ie = Q => {
		te(Q), le(q + 1)
	}, [pe, ce] = c.useState("Sell"), {
		data: We
	} = Hs({
		watch: !0
	}), {
		data: Be,
		refetch: it
	} = Ft({
		address: h == null ? void 0 : h.account.address,
		token: E.address !== se ? E.address : void 0,
		chainId: p.id
	}), {
		data: Fe,
		refetch: ht
	} = Ft({
		address: h == null ? void 0 : h.account.address,
		token: N.address !== se ? N.address : void 0,
		chainId: p.id
	});
	c.useEffect(() => {
		it(), ht()
	}, [We]);
	const Me = () => {
		W(""), te(""), d(!1), i(!1), A({
			tokenAmount: "",
			isExactIn: !1,
			chain: "",
			gasPrice: 0,
			slippage: 0
		})
	};
	c.useEffect(() => {
		if (!h || E.address === se || N.address === se || k) return;
		T(!0);
		const Q = $t({
				address: se,
				symbol: p.nativeCurrency.symbol,
				decimals: p.nativeCurrency.decimals,
				name: p.nativeCurrency.name,
				chainId: p.id
			}),
			ne = E.address.toLowerCase() === Ue[p.id].toLowerCase(),
			je = N.address.toLowerCase() === Ue[p.id].toLowerCase();
		!ne && !je || (d(!0), i(!0), sl(h, {
			address: h == null ? void 0 : h.account.address
		}).then(Qe => {
			ne && Be && Qe > Be.value ? S(Q) : je && Fe && Qe > Fe.value && G(Q)
		}).finally(() => {
			d(!1), i(!1)
		}))
	}, [E.address, N.address, h == null ? void 0 : h.account.address]), c.useEffect(() => {
		Me()
	}, [r, E.address, p.id]), c.useEffect(() => {
		f(Be && parseFloat(z) > parseFloat(Be.formatted))
	}, [r, z, $]), c.useEffect(() => {
		const Q = pe === "Sell",
			ne = Q ? z : $;
		if (ne === "") {
			Me();
			return
		}
		if (ne === "0." || ne === "0" || ne === ".") return;
		const je = Q ? E.decimals : N.decimals;
		if (Oe(Number(ne).toFixed(je), je) === 0n) return;
		const Ge = [Math.floor(100 * t.slippage), 1e4];
		A({
			chain: p.internalName,
			tokenAmount: ne,
			isExactIn: Q,
			gasPrice: y != null && y.gasPrice ? Number(y.gasPrice) : 0,
			slippage: Ge[0]
		})
	}, [pe, q, w]), c.useEffect(() => {
		_ && (W(_.inAmount), te(_.outAmount))
	}, [_]);
	const ye = E.address.toLowerCase() === se && N.address.toLowerCase() === Ue[p.id].toLowerCase(),
		$e = N.address.toLowerCase() === se && E.address.toLowerCase() === Ue[p.id].toLowerCase();
	c.useEffect(() => {
		v ? (pe === "Sell" ? i : d)(!0) : (d(!1), i(!1))
	}, [v, pe]);
	const St = async () => {
		if (!(!_ || !h || !x)) try {
			await B(), Me()
		} catch (Q) {
			window.log.error(Q)
		}
	};
	return X && e.jsxs("div", {
		className: "flex flex-col gap-2",
		children: [s ? e.jsxs("div", {
			className: "flex flex-col relative",
			children: [E && N && e.jsxs("div", {
				className: "flex flex-1 relative flex-col gap-y-2 gap-x-2",
				children: [e.jsx(Yr, {
					value: z,
					setValue: ae,
					token: E,
					setToken: S,
					loading: l,
					action: "Sell",
					setFocus: ce,
					focus: pe,
					flip: !r,
					balance: Be
				}), e.jsx(Yr, {
					value: $,
					setValue: ie,
					token: N,
					setToken: G,
					loading: a,
					action: "Buy",
					setFocus: ce,
					disabled: !1,
					focus: pe,
					flip: r,
					balance: Fe
				})]
			}), e.jsx("div", {
				className: "w-fit h-fit absolute right-0 left-1 top-0 bottom-0 mx-[auto] my-[auto]",
				children: e.jsx(Rs, {
					onClick: () => o(Q => !Q),
					isSwap: !0
				})
			})]
		}) : e.jsxs("div", {
			className: "relative grid grid-cols-2",
			children: [e.jsx("div", {
				className: "w-fit h-fit absolute flex right-0 left-0 top-0 bottom-0  mx-[auto] my-[auto] text-white",
				children: e.jsx(Rs, {
					onClick: () => o(!r)
				})
			}), e.jsxs(e.Fragment, {
				children: [e.jsx(Wr, {
					value: z,
					setValue: ae,
					token: E,
					loading: l,
					action: "Sell",
					setFocus: ce,
					disabled: !1,
					focus: pe,
					balance: Be,
					setFromToken: S
				}), e.jsx(Wr, {
					value: $,
					setValue: ie,
					token: N,
					loading: a,
					action: "Buy",
					setFocus: ce,
					disabled: !1,
					focus: pe,
					balance: Fe,
					setFromToken: G
				})]
			})]
		}), e.jsx(tm, {
			loading: v,
			market: _ == null ? void 0 : _.market,
			token1: X.flipped ? r ? E : N : r ? N : E,
			token0: X.flipped ? r ? N : E : r ? E : N,
			price: _ ? _.isExactIn && (_ == null ? void 0 : _.outToken.address) === N.address || !_.isExactIn && (_ == null ? void 0 : _.inToken.address) === N.address ? X.flipped ? r ? 1 / _.humanPrice : _.humanPrice : r ? _.humanPrice : 1 / _.humanPrice : X.flipped ? r ? _.humanPrice : 1 / _.humanPrice : r ? 1 / _.humanPrice : _.humanPrice : void 0,
			priceImpact: _ ? (Re = _ == null ? void 0 : _.slippage) == null ? void 0 : Re.toFixed(4) : "0",
			showGas: !0
		}), e.jsxs("div", {
			className: "grid grid-cols-4 gap-2 justify-center items-center",
			children: [e.jsx("div", {
				className: "col-span-3",
				children: e.jsx(Zp, {
					orderAction: ye ? "Wrap" : $e ? "Unwrap" : s ? "Swap" : pe,
					onClick: St,
					disabled: I || a || l || z === "" || $ === "" || !h,
					loadingPrice: a || l,
					insufficientFunds: m,
					orderFormState: K,
					isEmpty: z === "" || $ === "",
					isHighImpact: _ ? _.slippage > 5 : !1
				})
			}), e.jsxs("div", {
				className: "flex items-center text-[16px] bg-gray-900 border-[1px] w-full border-gray-600 rounded-[8px] justify-center h-[38px] col-span-1",
				children: [e.jsx("div", {
					title: "Auto Refresh",
					className: "",
					children: e.jsx("span", {
						className: "text-white text-[18px]  px-2",
						children: g ? b + "s" : "..."
					})
				}), e.jsx("div", {
					className: "items-center col-span-1",
					onClick: () => C(!g),
					children: e.jsx(rl, {
						title: "Auto Refresh",
						className: `${g?"text-green-400":"text-gray-500"} text-xl`
					})
				})]
			})]
		})]
	})
}

function wa({
	showLimit: n = !1,
	isSwapForm: t = !1
}) {
	const [s, r] = c.useState(t ? at.SWAP : at.MARKET), [o, a] = c.useState({
		slippage: 1,
		transactionDeadline: 30,
		refreshSeconds: 15
	});
	return e.jsx("div", {
		className: "bg-gray-dark rounded-xl h-full flex flex-1 flex-col p-2 outline outline-1 outline-gray-800 ",
		children: e.jsxs("div", {
			className: "flex flex-1 flex-col gap-y-2",
			children: [e.jsxs("div", {
				className: "flex justify-between items-center",
				children: [e.jsx(jm, {
					orderForm: s,
					isSwapForm: t,
					showLimit: n,
					setOrderForm: r
				}), s !== at.LIMIT && e.jsx(Bp, {
					settings: o,
					setSettings: a
				})]
			}), vm(s, o, t)]
		})
	})
}
const Kr = n => {
		const {
			onClick: t,
			orderFormChosen: s,
			children: r,
			disabled: o = !1,
			orderForm: a
		} = n;
		return e.jsx("button", {
			onClick: t,
			className: `flex items-center p-2 hover:bg-gray-750 rounded-lg text-gray-400 hover:text-gray-100 ${a===s?"bg-gray-750":""}`,
			disabled: o,
			children: e.jsx(O, {
				weight: P.MEDIUM,
				color: a === s ? u.gray[100] : "inherit",
				children: r
			})
		})
	},
	jm = ({
		orderForm: n,
		setOrderForm: t,
		showLimit: s,
		isSwapForm: r
	}) => {
		const {
			currentChainInfo: o
		} = D(), {
			poolAddress: a
		} = oe();
		return e.jsxs("div", {
			className: "flex flex-row gap-3 text-white text-[14px] font-normal",
			children: [e.jsx(Kr, {
				onClick: () => {
					Ke("market_click", {
						chain: o.name,
						pool: a
					}), t(at.MARKET)
				},
				orderFormChosen: at.MARKET,
				orderForm: n,
				children: r ? "Swap" : "Market"
			}), s && e.jsx(Kr, {
				onClick: () => {
					Ke("limit_click", {
						chain: o.name,
						pool: a
					}), t(at.LIMIT)
				},
				orderFormChosen: at.LIMIT,
				orderForm: n,
				children: "Limit"
			})]
		})
	},
	vm = (n, t, s) => {
		switch (n) {
			case at.LIMIT:
				return e.jsx(Xp, {});
			case at.MARKET:
				return e.jsx(Xr, {
					settings: t,
					isSwapForm: s
				});
			default:
				return e.jsx(Xr, {
					settings: t,
					isSwapForm: s
				})
		}
	},
	_m = ["All", "Open", "Filled", "Market", "Limit"];

function Tm(n) {
	const {
		filter: t,
		setFilter: s
	} = n, [r, {
		width: o
	}] = Vs(), {
		isConnected: a
	} = we(), [i, l] = c.useState(!1), {
		refs: d,
		floatingStyles: m,
		context: f
	} = Ce({
		whileElementsMounted: Ie,
		open: i,
		onOpenChange: l
	}), {
		isMounted: p,
		styles: x
	} = Ae(f, {
		initial: {
			opacity: 1,
			transform: "scale(0.5,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), h = Le(f), y = Pe(f, {
		enabled: a
	}), {
		getReferenceProps: b,
		getFloatingProps: g
	} = Ne([y, h]);
	return e.jsxs("div", {
		ref: r,
		className: "w-full",
		children: [e.jsxs("div", {
			className: "gap-1 outline text-white text-xs font-semibold outline-1 py-2 px-4 bg-gray-dark outline-gray-800 rounded-lg flex justify-between cursor-pointer items-center",
			ref: d.setReference,
			...b(),
			children: [e.jsx("div", {
				children: t
			}), a && e.jsx(_t, {})]
		}), i && e.jsx("div", {
			className: "border-[1px] w-full bg-gray-800 border-gray-700 rounded-lg h-fit text-white flex z-50",
			style: {
				width: o,
				...m
			},
			...g(),
			ref: d.setFloating,
			children: p && e.jsx("div", {
				className: "w-full flex flex-col",
				style: x,
				children: _m.map((w, C) => e.jsx(km, {
					filter: w,
					setFilter: s,
					onClose: () => {
						l(!1)
					}
				}, C))
			})
		})]
	})
}
const km = n => {
	const {
		filter: t,
		setFilter: s,
		onClose: r
	} = n;
	return e.jsx("button", {
		className: "text-white text-left pl-4 py-2 rounded-xl hover:bg-gray-drophover",
		onClick: () => {
			s(t), r()
		},
		children: e.jsx(O, {
			weight: P.REGULAR,
			children: t
		})
	}, t)
};

function Cm() {
	const n = hn(),
		{
			currentChainInfo: t
		} = D();
	return e.jsx("button", {
		className: " flex items-center",
		onClick: () => n(Gd(t.internalName), {
			state: "order"
		}),
		children: e.jsx("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 18 18",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "w-4 h-6 stroke-gray-500 hover:stroke-gray-400 stroke-current",
			children: e.jsx("path", {
				d: "M10.125 4.5H3.9375C3.48995 4.5 3.06072 4.67779 2.74426 4.99426C2.42779 5.31073 2.25 5.73995 2.25 6.1875V14.0625C2.25 14.5101 2.42779 14.9393 2.74426 15.2557C3.06072 15.5722 3.48995 15.75 3.9375 15.75H11.8125C12.2601 15.75 12.6893 15.5722 13.0057 15.2557C13.3222 14.9393 13.5 14.5101 13.5 14.0625V7.875M10 7.875L15.75 2.25M15.75 2.25H11.8125M15.75 2.25V6.1875",
				strokeWidth: "1.3",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	})
}
const Nm = n => {
	const {
		order: t
	} = n, {
		currentChainInfo: s
	} = D();
	return e.jsxs("div", {
		className: "relative grid grid-cols-5 min-[1200px]:grid-cols-12 min-[1600px]:grid-cols-8 min-[1600px]:gap-x-4 min-[1880px]:grid-cols-12 w-full text-[12px] font-normal pr-6 gap-x-2",
		style: {
			backgroundColor: u.gray.dark
		},
		children: [e.jsx("div", {
			className: "col-start-1",
			children: e.jsx(j, {
				color: u.gray[200],
				children: t.type && Ps(t.type)
			})
		}), e.jsx("div", {
			className: "col-start-2 min-[1200px]:col-start-3 min-[1600px]:col-start-2",
			children: e.jsx(j, {
				color: u.gray[200],
				children: t.status && Ps(t.status)
			})
		}), e.jsxs("div", {
			className: "col-start-3 min-[1200px]:col-start-5 min-[1600px]:col-start-3 flex flex-nowrap",
			children: [e.jsx(j, {
				color: u.gray[200],
				children: t && t.base_currency_address && R(t.base_currency_address, t.base_currency, s.id)
			}), e.jsxs(j, {
				className: "whitespace-pre",
				color: u.gray[400],
				children: ["/", t && t.quote_currency_address && R(t.quote_currency_address, t.quote_currency, s.id)]
			})]
		}), e.jsx("div", {
			className: "col-start-4 min-[1200px]:col-start-8 min-[1600px]:col-start-5 hidden min-[1200px]:block",
			children: e.jsxs(j, {
				color: u.gray[100],
				children: [t && t.fee && t.fee / 1e4, "%"]
			})
		}), e.jsx("div", {
			className: "min-[1880px]:col-start-6 min-[1880px]:flex max-[1880px]:hidden whitespace-nowrap",
			children: e.jsx(j, {
				color: u.gray[200],
				children: e.jsx(pa, {
					order: t
				})
			})
		}), e.jsx("div", {
			className: "min-[1880px]:col-start-8 min-[1880px]:flex max-[1880px]:hidden whitespace-nowrap",
			children: e.jsx(j, {
				color: u.gray[200],
				children: e.jsx(ma, {
					order: t
				})
			})
		}), e.jsx("div", {
			className: "min-[1600px]:col-start-6 max-[1600px]:hidden min-[1880px]:col-start-10",
			children: e.jsx(j, {
				children: t.time ? Zs(t.time) : ""
			})
		}), e.jsx("div", {
			className: "col-start-5 min-[1200px]:col-start-12 min-[1600px]:col-start-8 min-[1880px]:col-start-12 justify-self-end whitespace-nowrap",
			children: e.jsx(j, {
				color: u.gray[200],
				children: e.jsx(fa, {
					order: t
				})
			})
		}), e.jsx("div", {
			className: "absolute -right-2 top-[-8px]",
			children: e.jsx(xa, {
				order: t
			})
		})]
	})
};

function Sm() {
	return e.jsxs("div", {
		className: "grid grid-cols-5 min-[1200px]:grid-cols-12 min-[1600px]:grid-cols-8 min-[1600px]:gap-x-4 min-[1880px]:grid-cols-12 w-full h-fit text-[12px] mb-[12px] mt-[14px] text-gray-500 font-normal pr-6",
		children: [e.jsx("p", {
			className: "",
			children: "Type"
		}), e.jsx("p", {
			className: "col-start-2 min-[1200px]:col-start-3 min-[1600px]:col-start-2",
			children: "Status"
		}), e.jsx("p", {
			className: "col-start-3 min-[1200px]:col-start-5 min-[1600px]:col-start-3",
			children: "Pool"
		}), e.jsx("p", {
			className: "max-[1200px]:hidden min-[1200px]:col-start-8  min-[1600px]:col-start-5 ",
			children: "Fee"
		}), e.jsx("p", {
			className: "min-[1880px]:col-start-6 min-[1880px]:flex max-[1880px]:hidden whitespace-nowrap",
			children: "Buy Amount"
		}), e.jsx("p", {
			className: "min-[1880px]:col-start-8 min-[1880px]:flex max-[1880px]:hidden whitespace-nowrap",
			children: "Sell Amount"
		}), e.jsx("p", {
			className: "min-[1600px]:col-start-6 min-[1880px]:col-start-10 max-[1600px]:hidden",
			children: "Date"
		}), e.jsx("p", {
			className: "col-start-5 min-[1200px]:col-start-12 min-[1600px]:col-start-8 min-[1880px]:col-start-12 justify-self-end",
			children: "Price"
		})]
	})
}

function Em(n) {
	const {
		filter: t
	} = n, {
		allUserOrders: s
	} = Vt(), {
		isConnected: r
	} = we(), o = s ? s.sort(function (a, i) {
		return i.time && a.time ? i.time - a.time : 0
	}) : [];
	return e.jsxs("div", {
		className: "relative bg-gray-dark rounded-lg text-white p-2 flex flex-col items-center flex-1 outline outline-1 outline-gray-800 overflow-hidden max-h-[17rem]",
		children: [e.jsxs("div", {
			className: "w-full relative flex flex-row justify-between items-center",
			children: [e.jsx("div", {}), e.jsx(j, {
				color: u.gray[50],
				children: "Order History"
			}), e.jsx(Cm, {})]
		}), r ? e.jsxs(e.Fragment, {
			children: [e.jsx(Sm, {}), e.jsx("div", {
				className: "flex flex-col w-full flex-1 overflow-y-scroll no-scrollbar gap-y-3",
				children: o && o.length > 0 ? o.filter(a => t === "All" || a.type === t.toUpperCase() || a.status === t.toUpperCase()).map((a, i) => e.jsx(Nm, {
					order: a
				}, i)) : e.jsx(O, {
					color: u.gray[300],
					children: "No Orders Yet"
				})
			})]
		}) : e.jsx("div", {
			className: "flex mt-8",
			children: e.jsx(O, {
				color: u.gray[300],
				children: "Connect wallet"
			})
		})]
	})
}
const Im = () => {
	const [n, t] = c.useState("All");
	return e.jsxs("div", {
		className: "flex gap-1 flex-col flex-1",
		children: [e.jsx(Tm, {
			filter: n,
			setFilter: t
		}), e.jsx(Em, {
			filter: n
		})]
	})
};

function Am(n) {
	const {
		chartIsNotFullScreen: t
	} = n;
	return e.jsxs("div", {
		className: `
      flex flex-col md:flex-row md:col-start-2 md:col-end-4 gap-1.5 w-full row-start-3 md:row-start-2
     ${t?"":"opacity-0"}`,
		children: [e.jsx("div", {
			className: "flex-1 md:max-w-[500px] md:max-w-[420px] xl:max-w-[500px] h-full",
			children: e.jsx(wa, {
				showLimit: !0
			})
		}), e.jsx("div", {
			className: "grow flex flex-1 h-full ",
			children: e.jsx(Im, {})
		})]
	})
}

function Lm({
	breakpoint: n
}) {
	const [t, {
		height: s
	}] = Vs();
	return n < 3 || e.jsxs("div", {
		className: "min-w-[280px] max-w-[280px] gap-2 flex flex-col",
		children: [e.jsx("div", {
			className: "flex flex-1 overflow-scroll no-scrollbar relative",
			ref: t,
			children: e.jsx("div", {
				className: "absolute  ",
				style: {
					height: s
				},
				children: e.jsx(Js, {
					isModal: !1
				})
			})
		}), e.jsx("div", {
			className: "flex-1",
			children: e.jsx(ha, {})
		})]
	})
}

function Zr(n) {
	const {
		onClick: t,
		children: s,
		focus: r
	} = n;
	return e.jsx("button", {
		onClick: t,
		className: "hover:bg-gray-700 w-[56px] py-[6px] rounded-lg text-gray-200 text-[12px] font-regular",
		style: {
			backgroundColor: r ? u.gray[700] : void 0
		},
		children: s
	})
}

function Pm() {
	const {
		chartType: n,
		setChartType: t
	} = Ct(), {
		token: s,
		poolSummary: r,
		setToken: o
	} = oe(), {
		currentChainInfo: a
	} = D(), {
		isMobile: i
	} = Ze(), l = r == null ? void 0 : r.t0_price;
	return e.jsxs("div", {
		className: "flex flex-row w-full justify-between items-center",
		style: {
			padding: 12
		},
		children: [e.jsx("div", {
			children: n === qe.TRADINGVIEW ? !i && e.jsx("div", {
				className: "flex flex-row items-center gap-2 ",
				children: e.jsx(Jn, {
					token: s,
					token0Address: r.t0,
					token0Symbol: r.t0_symbol,
					token1Address: r.t1,
					token1Symbol: r.t1_symbol,
					setTokenSelected: o
				})
			}) : e.jsxs("div", {
				className: "flex  h-fit  gap-6 ",
				style: {
					flexDirection: i ? "column" : "row",
					alignItems: i ? "start" : "center"
				},
				children: [e.jsx(Jn, {
					token: s,
					token0Address: r.t0,
					token0Symbol: r.t0_symbol,
					token1Address: r.t1,
					token1Symbol: r.t1_symbol,
					setTokenSelected: o
				}), e.jsx("div", {
					className: "flex flex-row gap-5",
					children: e.jsxs("div", {
						className: "flex flex-row gap-2",
						children: [e.jsx(j, {
							color: u.gray[400],
							children: "Current Price: "
						}), e.jsxs(j, {
							color: u.gray[400],
							children: [l ? s.selected === 1 ? l.toFixed(6) : (1 / l).toFixed(6) : "Loading", " ", s.selected === 1 ? R(r.t1, r.t1_symbol, a.id) : R(r.t0, r.t0_symbol, a.id), "per", s.selected === 1 ? R(r.t0, r.t0_symbol, a.id) : R(r.t1, r.t1_symbol, a.id)]
						})]
					})
				})]
			})
		}), e.jsxs("div", {
			className: "flex flex-row gap-3 ",
			children: [e.jsxs("div", {
				className: "flex flex-row gap-1  items-center",
				children: [e.jsx(Zr, {
					onClick: () => {
						t(qe.TRADINGVIEW)
					},
					focus: n === qe.TRADINGVIEW,
					children: "Price"
				}), e.jsx(Zr, {
					onClick: () => {
						t(qe.DEPTH)
					},
					focus: n === qe.DEPTH,
					children: "Depth"
				})]
			}), ")"]
		})]
	})
}

function Os(n, t) {
	const s = {
		...n
	};
	for (const r in t) typeof n[r] != "object" || n[r] === null || Array.isArray(n[r]) ? t[r] !== void 0 && (s[r] = t[r]) : s[r] = Os(n[r], t[r]);
	return s
}
const Mm = {
		width: 800,
		height: 500,
		interval: "1D",
		timezone: "Etc/UTC",
		container: "",
		library_path: "",
		locale: "en",
		widgetbar: {
			details: !1,
			watchlist: !1,
			news: !1,
			datawindow: !1,
			watchlist_settings: {
				default_symbols: []
			}
		},
		overrides: {
			"mainSeriesProperties.showCountdown": !1
		},
		studies_overrides: {},
		trading_customization: {
			position: {},
			order: {}
		},
		brokerConfig: {
			configFlags: {}
		},
		fullscreen: !1,
		autosize: !1,
		disabled_features: [],
		enabled_features: [],
		debug: !1,
		logo: {},
		time_frames: [{
			text: "5y",
			resolution: "1W"
		}, {
			text: "1y",
			resolution: "1W"
		}, {
			text: "6m",
			resolution: "120"
		}, {
			text: "3m",
			resolution: "60"
		}, {
			text: "1m",
			resolution: "30"
		}, {
			text: "5d",
			resolution: "5"
		}, {
			text: "1d",
			resolution: "1"
		}],
		client_id: "0",
		user_id: "0",
		charts_storage_api_version: "1.0",
		favorites: {
			intervals: [],
			chartTypes: [],
			indicators: [],
			drawingTools: []
		}
	},
	Qr = JSON.parse('[{"iso":"ar","dir":"rtl","language":"ar"},{"iso":"pt","dir":"ltr","language":"pt"},{"iso":"ca","dir":"ltr","language":"ca_ES"},{"iso":"cs","dir":"ltr","language":"cs"},{"iso":"de","dir":"ltr","language":"de"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"es","dir":"ltr","language":"es"},{"iso":"fa","dir":"rtl","language":"fa"},{"iso":"fr","dir":"ltr","language":"fr"},{"iso":"he","dir":"rtl","language":"he_IL"},{"iso":"hu","dir":"ltr","language":"hu_HU"},{"iso":"id","dir":"ltr","language":"id_ID"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"it","dir":"ltr","language":"it"},{"iso":"ja","dir":"ltr","language":"ja"},{"iso":"ko","dir":"ltr","language":"ko"},{"iso":"ms","dir":"ltr","language":"ms_MY"},{"iso":"pl","dir":"ltr","language":"pl"},{"iso":"ru","dir":"ltr","language":"ru"},{"iso":"sv","dir":"ltr","language":"sv"},{"iso":"th","dir":"ltr","language":"th"},{"iso":"tr","dir":"ltr","language":"tr"},{"iso":"vi","dir":"ltr","language":"vi"},{"iso":"zh-Hans","dir":"ltr","language":"zh"},{"iso":"zh-Hant","dir":"ltr","language":"zh_TW"},{"iso":"el","dir":"ltr","language":"el"},{"iso":"nl","dir":"ltr","language":"nl_NL"},{"iso":"ro","dir":"ltr","language":"ro"}]');
let Jr = !1;

function Rm() {
	return "CL v26.000 (internal id 8516b211 @ 2023-07-19T16:26:07.029Z)"
}
const Om = class {
	constructor(n) {
		var t, s;
		if (this._id = `tradingview_${(1048576*(1+Math.random())|0).toString(16).substring(1)}`, this._ready = !1, this._readyHandlers = [], this._onWindowResize = this._autoResizeChart.bind(this), !n.datafeed) throw new Error("Datafeed is not defined");
		!((t = n.overrides) === null || t === void 0) && t["mainSeriesProperties.priceAxisProperties.lockScale"] && (console.warn("mainSeriesProperties.priceAxisProperties.lockScale can not be set to true within the widget constructor"), delete n.overrides["mainSeriesProperties.priceAxisProperties.lockScale"]), this._options = Os(Mm, n), ((s = this._options.theme) !== null && s !== void 0 ? s : "light").toLowerCase() === "dark" && this._options.loading_screen === void 0 && (this._options.loading_screen = {
			backgroundColor: "#131722"
		}), this._options.debug && (Jr || (Jr = !0, console.log("Using CL v26.000 (internal id 8516b211 @ 2023-07-19T16:26:07.029Z)"))), this._create()
	}
	setDebugMode(n) {
		this._innerAPI().setDebugMode(n)
	}
	onChartReady(n) {
		this._ready ? n.call(this) : this._readyHandlers.push(n)
	}
	headerReady() {
		return this._innerWindowLoaded.then(() => this._innerWindow().headerReady())
	}
	onGrayedObjectClicked(n) {
		this._doWhenInnerApiLoaded(t => {
			t.onGrayedObjectClicked(n)
		})
	}
	onShortcut(n, t) {
		this._doWhenInnerWindowLoaded(s => {
			s.createShortcutAction(n, t)
		})
	}
	subscribe(n, t) {
		this._doWhenInnerApiLoaded(s => {
			s.subscribe(n, t)
		})
	}
	unsubscribe(n, t) {
		this._doWhenInnerApiLoaded(s => {
			s.unsubscribe(n, t)
		})
	}
	chart(n) {
		return this._innerAPI().chart(n)
	}
	getLanguage() {
		return this._options.locale
	}
	setSymbol(n, t, s) {
		this._innerAPI().changeSymbol(n, t, s)
	}
	remove() {
		window.removeEventListener("resize", this._onWindowResize), this._readyHandlers.splice(0, this._readyHandlers.length), delete window[this._id], this._iFrame.parentNode && this._iFrame.parentNode.removeChild(this._iFrame)
	}
	closePopupsAndDialogs() {
		this._doWhenInnerApiLoaded(n => {
			n.closePopupsAndDialogs()
		})
	}
	selectLineTool(n, t) {
		this._innerAPI().selectLineTool(n, t)
	}
	selectedLineTool() {
		return this._innerAPI().selectedLineTool()
	}
	save(n) {
		this._innerAPI().saveChart(n)
	}
	load(n, t) {
		this._innerAPI().loadChart({
			json: n,
			extendedData: t
		})
	}
	getSavedCharts(n) {
		this._innerAPI().getSavedCharts(n)
	}
	loadChartFromServer(n) {
		this._innerAPI().loadChartFromServer(n)
	}
	saveChartToServer(n, t, s) {
		this._innerAPI().saveChartToServer(n, t, s)
	}
	removeChartFromServer(n, t) {
		this._innerAPI().removeChartFromServer(n, t)
	}
	onContextMenu(n) {
		this._doWhenInnerApiLoaded(t => {
			t.onContextMenu(n)
		})
	}
	createButton(n) {
		return this._innerWindow().createButton(n)
	}
	createDropdown(n) {
		return this._innerWindow().createDropdown(n)
	}
	showNoticeDialog(n) {
		this._doWhenInnerApiLoaded(t => {
			t.showNoticeDialog(n)
		})
	}
	showConfirmDialog(n) {
		this._doWhenInnerApiLoaded(t => {
			t.showConfirmDialog(n)
		})
	}
	showLoadChartDialog() {
		this._innerAPI().showLoadChartDialog()
	}
	showSaveAsChartDialog() {
		this._innerAPI().showSaveAsChartDialog()
	}
	symbolInterval() {
		return this._innerAPI().getSymbolInterval()
	}
	mainSeriesPriceFormatter() {
		return this._innerAPI().mainSeriesPriceFormatter()
	}
	getIntervals() {
		return this._innerAPI().getIntervals()
	}
	getStudiesList() {
		return this._innerAPI().getStudiesList()
	}
	getStudyInputs(n) {
		return this._innerAPI().getStudyInputs(n)
	}
	getStudyStyles(n) {
		return this._innerAPI().getStudyStyles(n)
	}
	addCustomCSSFile(n) {
		this._innerWindow().addCustomCSSFile(n)
	}
	applyOverrides(n) {
		this._options = Os(this._options, {
			overrides: n
		}), this._doWhenInnerWindowLoaded(t => {
			t.applyOverrides(n)
		})
	}
	applyStudiesOverrides(n) {
		this._doWhenInnerWindowLoaded(t => {
			t.applyStudiesOverrides(n)
		})
	}
	watchList() {
		return this._innerAPI().watchlist()
	}
	news() {
		return this._innerAPI().news()
	}
	widgetbar() {
		return this._innerAPI().widgetbar()
	}
	activeChart() {
		return this._innerAPI().activeChart()
	}
	activeChartIndex() {
		return this._innerAPI().activeChartIndex()
	}
	setActiveChart(n) {
		return this._innerAPI().setActiveChart(n)
	}
	chartsCount() {
		return this._innerAPI().chartsCount()
	}
	layout() {
		return this._innerAPI().layout()
	}
	setLayout(n) {
		this._innerAPI().setLayout(n)
	}
	layoutName() {
		return this._innerAPI().layoutName()
	}
	changeTheme(n, t) {
		return this._innerWindow().changeTheme(n, t)
	}
	getTheme() {
		return this._innerWindow().getTheme()
	}
	takeScreenshot() {
		this._doWhenInnerApiLoaded(n => {
			n.takeScreenshot()
		})
	}
	lockAllDrawingTools() {
		return this._innerAPI().lockAllDrawingTools()
	}
	hideAllDrawingTools() {
		return this._innerAPI().hideAllDrawingTools()
	}
	drawOnAllCharts(n) {
		this._innerAPI().drawOnAllCharts(n)
	}
	magnetEnabled() {
		return this._innerAPI().magnetEnabled()
	}
	magnetMode() {
		return this._innerAPI().magnetMode()
	}
	undoRedoState() {
		return this._innerAPI().undoRedoState()
	}
	setIntervalLinkingEnabled(n) {
		this._innerAPI().setIntervalLinkingEnabled(n)
	}
	setTimeFrame(n) {
		this._innerAPI().setTimeFrame(n)
	}
	symbolSync() {
		return this._innerAPI().symbolSync()
	}
	intervalSync() {
		return this._innerAPI().intervalSync()
	}
	crosshairSync() {
		return this._innerAPI().crosshairSync()
	}
	timeSync() {
		return this._innerAPI().timeSync()
	}
	dateRangeSync() {
		return this._innerAPI().dateRangeSync()
	}
	setFeatureEnabled(n, t) {
		this._innerAPI().setFeatureEnabled(n, t)
	}
	getAllFeatures() {
		return this._innerWindow().getAllFeatures()
	}
	clearUndoHistory() {
		return this._innerAPI().clearUndoHistory()
	}
	undo() {
		return this._innerAPI().undo()
	}
	redo() {
		return this._innerAPI().redo()
	}
	startFullscreen() {
		this._innerAPI().startFullscreen()
	}
	exitFullscreen() {
		this._innerAPI().exitFullscreen()
	}
	takeClientScreenshot(n) {
		return this._innerAPI().takeClientScreenshot(n)
	}
	navigationButtonsVisibility() {
		return this._innerWindow().getNavigationButtonsVisibility()
	}
	paneButtonsVisibility() {
		return this._innerWindow().getPaneButtonsVisibility()
	}
	dateFormat() {
		return this._innerWindow().getDateFormat()
	}
	timeHoursFormat() {
		return this._innerWindow().getTimeHoursFormat()
	}
	currencyAndUnitVisibility() {
		return this._innerWindow().getCurrencyAndUnitVisibility()
	}
	supportedChartTypes() {
		return this._innerAPI().supportedChartTypes()
	}
	watermark() {
		return this._innerAPI().watermark()
	}
	customSymbolStatus() {
		return this._innerWindow().customSymbolStatus()
	}
	setCSSCustomProperty(n, t) {
		if (n.startsWith("--") === !1) throw new Error("customPropertyName should begin with a double hyphen");
		this._innerWindow().document.body.style.setProperty(n, t)
	}
	getCSSCustomPropertyValue(n) {
		if (n.startsWith("--") === !1) throw new Error("customPropertyName should begin with a double hyphen");
		const t = this._innerWindow().document.body,
			s = t.style.getPropertyValue(n);
		return s || getComputedStyle(t).getPropertyValue(n)
	}
	linking() {
		return this._innerAPI().linking
	}
	_innerAPI() {
		return this._innerWindow().tradingViewApi
	}
	_innerWindow() {
		return this._iFrame.contentWindow
	}
	_doWhenInnerWindowLoaded(n) {
		this._ready ? n(this._innerWindow()) : this._innerWindowLoaded.then(() => {
			n(this._innerWindow())
		})
	}
	_doWhenInnerApiLoaded(n) {
		this._doWhenInnerWindowLoaded(t => {
			t.doWhenApiIsReady(() => n(this._innerAPI()))
		})
	}
	_autoResizeChart() {
		this._options.fullscreen && (this._iFrame.style.height = window.innerHeight + "px", Dm && setTimeout(() => {
			this._iFrame.style.height = window.innerHeight + "px"
		}, 30))
	}
	_create() {
		var n, t;
		const s = (t = (n = this._options.enabled_features) === null || n === void 0 ? void 0 : n.includes("iframe_loading_compatibility_mode")) !== null && t !== void 0 && t,
			[r, o] = this._render(!s),
			a = this._options.container,
			i = typeof a == "string" ? document.getElementById(a) : a;
		if (i === null) throw new Error(`There is no such element - #${this._options.container}`);
		i.innerHTML = r, this._iFrame = i.querySelector(`#${this._id}`);
		const l = this._iFrame;
		s && (l.contentWindow ? (l.contentWindow.document.open(), l.contentWindow.document.write(o), l.contentWindow.document.close()) : console.warn("Unable to locate contentWindow for the created iframe. Please try disabling the `iframe_loading_compatibility_mode` featureset.")), (this._options.autosize || this._options.fullscreen) && (l.style.width = "100%", this._options.fullscreen || (l.style.height = "100%")), window.addEventListener("resize", this._onWindowResize), this._onWindowResize(), this._innerWindowLoaded = new Promise(d => {
			const m = () => {
				l.removeEventListener("load", m, !1), d()
			};
			l.addEventListener("load", m, !1)
		}), this._innerWindowLoaded.then(() => {
			try {
				this._innerWindow().widgetReady(() => {
					this._ready = !0;
					for (const d of this._readyHandlers) try {
						d.call(this)
					} catch (m) {
						console.error(m)
					}
					this._innerWindow().initializationFinished()
				})
			} catch (d) {
				if (d instanceof Error && /widgetReady is not a function/.test(d.message)) throw new Error(`There was an error when loading the library. Usually this error means the library failed to load its static files. Check that the library files are available at ${window.location.host}/${this._options.library_path||""} or correct the library_path option.`)
			}
		})
	}
	_render(n) {
		const t = window;
		if (t[this._id] = {
				datafeed: this._options.datafeed,
				customFormatters: this._options.custom_formatters || this._options.customFormatters,
				brokerFactory: this._options.broker_factory || this._options.brokerFactory,
				overrides: this._options.overrides,
				studiesOverrides: this._options.studies_overrides,
				tradingCustomization: this._options.trading_customization,
				disabledFeatures: this._options.disabled_features,
				enabledFeatures: this._options.enabled_features,
				brokerConfig: this._options.broker_config || this._options.brokerConfig,
				restConfig: this._options.restConfig,
				favorites: this._options.favorites,
				logo: this._options.logo,
				numeric_formatting: this._options.numeric_formatting,
				rss_news_feed: this._options.rss_news_feed,
				newsProvider: this._options.news_provider,
				loadLastChart: this._options.load_last_chart,
				saveLoadAdapter: this._options.save_load_adapter,
				loading_screen: this._options.loading_screen,
				settingsAdapter: this._options.settings_adapter,
				getCustomIndicators: this._options.custom_indicators_getter,
				additionalSymbolInfoFields: this._options.additional_symbol_info_fields,
				headerWidgetButtonsMode: this._options.header_widget_buttons_mode,
				customTranslateFunction: this._options.custom_translate_function,
				symbolSearchComplete: this._options.symbol_search_complete,
				contextMenu: this._options.context_menu,
				settingsOverrides: this._options.settings_overrides,
				timeframe: this._options.timeframe,
				customTimezones: this._options.custom_timezones
			}, this._options.saved_data) t[this._id].chartContent = {
			json: this._options.saved_data
		}, this._options.saved_data_meta_info && (t[this._id].chartContentExtendedData = this._options.saved_data_meta_info);
		else if (!this._options.load_last_chart && !this._options.symbol) throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");
		if (this._options.library_path && !this._options.library_path.endsWith("/") && console.warn("library_path option should contain a trailing forward slash"), this._options.locale) {
			const a = encodeURIComponent(this._options.locale);
			Qr.findIndex(i => i.language === a) >= 0 || (console.warn("locale isn't supported. Using default of `en`."), this._options.locale = "en")
		}
		const s = function (a, i) {
			var l;
			const d = new URL(`${a||""}`, location.href).href,
				m = JSON.parse('["bundles/runtime.62986277b501962c204e.js","bundles/__LANG__.5008.e5d7d914577969582fa4.js","bundles/3515.2f722d33cebe31a154b1.css","bundles/1564.0aa1d64f8243778d48df.js","bundles/library.d5d70aa2ab3de2f6a169.js"]'),
				f = encodeURIComponent(i),
				p = (l = Qr.find(b => b.language === f)) !== null && l !== void 0 ? l : {
					iso: "en",
					dir: "ltr"
				},
				x = `lang="${p.iso}" dir="${p.dir}"`;
			return `<!DOCTYPE html><html ${(y={bundles:`
${function(b,g,w){if(b===void 0)return"";const C=[],k=[];for(const T of b)T.endsWith(".js")?C.push(`<script defer crossorigin="anonymous" src="${T.replace("__LANG__",w)}"><\/script>`):T.endsWith(".css")&&k.push(`<link type="text/css" href="${g?T.replace(/\.css$/i,".rtl.css"):T}" rel="stylesheet"/>`);return[...C,...k].join(`
`)}(m,p.dir==="rtl",f)}
`,localeLanguage:f,htmlAttrs:x,libraryPath:d}).htmlAttrs}><head><base href="${y.libraryPath}"><meta charset="utf-8"><script>window===window.parent&&(location.href="about:blank")<\/script> ${y.bundles} </head><body class="chart-page unselectable on-widget"><div class="loading-indicator" id="loading-indicator"></div><script>var JSServer={},__initialEnabledFeaturesets=["charting_library"]<\/script><script>(function() {
		window.urlParams = (function () {
			var match,
				pl	 = /\\+/g,  // Regex for replacing addition symbol with a space
				search = /([^&=]+)=?([^&]*)/g,
				decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')).replace(/<\\/?[^>]+(>|$)/g, ''); },
				query = function() {
					// We don't use hash on the url because: safari 13 throws an error if you attempt this
					// on a blob, and safari 14 will strip hash from blob urls.
					if (frameElement && frameElement.dataset.widgetOptions) {
						return frameElement.dataset.widgetOptions;
					} else {
						throw "Unexpected use of this page";
					}
				}(),
				result = {};

			while (match = search.exec(query)) {
				result[decode(match[1])] = decode(match[2]);
			}

			var additionalSettingsObject = window.parent[result.uid];

			var customObjectNames = ['datafeed', 'customFormatters', 'brokerFactory', 'save_load_adapter', 'customTranslateFunction', 'contextMenu'];

			for (var p in additionalSettingsObject) {
				if (customObjectNames.indexOf(p) === -1) {
					result[p] = JSON.stringify(additionalSettingsObject[p]);
				}
			}

			return result;
		})();

		window.locale = urlParams.locale;
		window.language = urlParams.locale; // a very big attention needed here
		window.customTranslateFunction = window.parent[urlParams.uid].customTranslateFunction;

		window.addCustomCSSFile = function(href) {
			var link = document.createElement('link');
			link.setAttribute('type', 'text/css');
			link.setAttribute('rel', 'stylesheet');
			link.setAttribute('href', href);
			link.setAttribute('cross-origin', 'anonymous');

			window.loadedCustomCss = new Promise((resolve) => {
				link.onload = resolve;
				link.onerror = resolve;
			});
			document.body.appendChild(link);
		};

		window.loadedCustomCss = Promise.resolve();
		if (!!urlParams.customCSS) {
			window.addCustomCSSFile(urlParams.customCSS);
		}

		var loadingScreenParams = {};

		if (typeof urlParams.loading_screen === 'string') {
			try {
				loadingScreenParams = JSON.parse(urlParams.loading_screen);
			} catch(e) {}
		}

		var loadingIndicatorElement = document.getElementById('loading-indicator');

		if (loadingScreenParams.backgroundColor) {
			loadingIndicatorElement.style = 'background-color: ' + loadingScreenParams.backgroundColor;
		}

		!function(){"use strict";var t,e=new WeakMap;!function(t){t[t.Element=1]="Element",t[t.Document=9]="Document"}(t||(t={}));var n={mini:"xsmall",xsmall:"xsmall",small:"small",medium:"medium",large:"large"};var i,s,o,r,l,c=(void 0===l&&(l=""),i='<div class="tv-spinner '.concat(l,'" role="progressbar"></div>'),o=function(n,i){var s,o;return s=null==i?document.documentElement:i.nodeType===t.Document?i.documentElement:i,e&&(o=e.get(s)),o||((o=s.ownerDocument.createRange()).selectNodeContents(s),e&&e.set(s,o)),o.createContextualFragment(n)}(i,s),null!==(r=o.firstElementChild)&&o.removeChild(r),r),a=function(){function t(t){this._shown=!1,this._el=c.cloneNode(!0),this.setSize(n[t||"large"])}return t.prototype.spin=function(t){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=t,void 0!==t&&t.appendChild(this._el)),this._shown=!0,this},t.prototype.stop=function(t){return t&&void 0!==this._container&&this._container.removeChild(this._el),this._el&&this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this},t.prototype.setStyle=function(t){var e=this;return Object.keys(t).forEach((function(n){var i=t[n];void 0!==i&&e._el.style.setProperty(n,i)})),this},t.prototype.style=function(){return this._el.style},t.prototype.setSize=function(t){var e=void 0!==t?"tv-spinner--size_".concat(t):"";return this._el.className="tv-spinner ".concat(e," ").concat(this._shown?"tv-spinner--shown":""),this},t.prototype.getEl=function(){return this._el},t.prototype.destroy=function(){this.stop(),delete this._el,delete this._container},t}();window.Spinner=a}();


		var spinnerColor = (loadingScreenParams.foregroundColor) ? loadingScreenParams.foregroundColor : undefined;

		var loadingSpinner = new Spinner('large').setStyle({
			'--tv-spinner-color': spinnerColor,
			zIndex: String(2e9),
		});
		loadingSpinner.getEl().classList.add('spinner');
		loadingSpinner.spin(loadingIndicatorElement);
	})();<\/script></body></html>`;
			var y
		}(this._options.library_path || "", this._options.locale);
		let r = new URL("about:blank");
		if (n) {
			const a = new Blob([s], {
					type: "text/html"
				}),
				i = URL.createObjectURL(a);
			r = new URL(i)
		}
		const o = "symbol=" + encodeURIComponent(this._options.symbol || "") + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.toolbar_bg ? "&toolbarbg=" + encodeURIComponent(this._options.toolbar_bg.replace("#", "")) : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent(JSON.stringify(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent(JSON.stringify(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent(JSON.stringify(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent(JSON.stringify(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.custom_font_family ? "&customFontFamily=" + encodeURIComponent(this._options.custom_font_family) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + encodeURIComponent(String(this._options.debug)) + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.compare_symbols ? "&compareSymbols=" + encodeURIComponent(JSON.stringify(this._options.compare_symbols)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "") + (this._options.header_widget_buttons_mode ? "&header_widget_buttons_mode=" + encodeURIComponent(String(this._options.header_widget_buttons_mode)) : "") + (this._options.time_scale ? "&time_scale=" + encodeURIComponent(JSON.stringify(this._options.time_scale)) : "");
		return [`<iframe
		id="${this._id}" name="${this._id}" src="${r.href}" data-widget-options="${o}"
		${this._options.autosize||this._options.fullscreen?"":`width="${this._options.width}" height="${this._options.height}"`} title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;">
	</iframe>`, s]
	}
};
typeof window < "u" && (window.TradingView = window.TradingView || {}, window.TradingView.version = Rm);
const Dm = !(typeof window > "u" || !window.navigator || !window.navigator.userAgent) && window.navigator.userAgent.includes("CriOS");
class Fm {
	constructor(t) {
		me(this, "cush");
		me(this, "supportedResolutions", ["1", "5", "15", "1H", "1D", "7D", "30D"]);
		me(this, "subscriptions");
		this.subscriptions = new Map, this.cush = t
	}
	onReady(t) {
		setTimeout(() => t({
			supports_marks: !1,
			supported_resolutions: this.supportedResolutions
		}))
	}
	searchSymbols(t, s, r, o) {
		const a = {
			fee_tiers: [],
			result_offset: 0,
			sort_by: "tvl_usd",
			result_size: 20,
			sort_order: !1
		};
		this.cush.call("cush_search", [t, a]).then(i => {
			const l = i.pools.map(d => {
				const m = `v3_${d.t0_symbol}_${d.t1_symbol}_${d.fee}`;
				return {
					type: "stock",
					symbol: m,
					ticker: m,
					full_name: d.address,
					exchange: s,
					description: `Uniswap V3 ${d.t0_name}/${d.t1_name} ${d.fee}bp Pool`
				}
			});
			o(l)
		})
	}
	resolveSymbol(t, s, r) {
		const o = t.split("_");
		let a = t.endsWith("_flip"),
			i = !1,
			l;
		const d = "UniV3";
		if (o[0].startsWith("0x") && (i = !0, l = this.cush.call("cush_search", [o[0]]).then(m => {
				if (m.pools.length < 1) {
					r("No Pool Found");
					return
				}
				return m.pools[0]
			}), o.length > 1 && o[1] === "flip" && (a = !0)), o[0] === "v3") {
			if (i = !0, o.length <= 4) {
				r("malformatted v3 symbol");
				return
			}
			l = this.cush.call("cush_search", [
				[o[1], o[2]].join("/"), {
					fee_tiers: [Number(o[3])],
					sort_by: "TvlUsd",
					sort_order: !1,
					result_size: 1,
					result_offset: 0
				}
			]).then(m => {
				if (m.pools.length < 1) {
					r("No Pool Found");
					return
				}
				return m.pools[0]
			})
		}
		l && l.then(m => {
			if (!m) {
				r("No Pool Found");
				return
			}
			let f = 10 ** 2;
			const p = 1,
				x = a ? m.default_flipped_granularities : m.default_granularities;
			x[1] < 0 ? f = Math.pow(10, Math.abs(x[1])) : x[1] > 6 && (f = 1);
			const h = {
				name: t,
				description: `${d} ${a?m.t1_symbol:m.t0_symbol}/${a?m.t0_symbol:m.t1_symbol} ${m.fee/100}bp Pool`,
				pricescale: f,
				listed_exchange: d.toLowerCase(),
				supported_resolutions: this.supportedResolutions,
				has_intraday: !0,
				has_daily: !0,
				has_weekly_and_monthly: !0,
				type: "crypto",
				format: "price",
				minmov: p,
				sector: m.address,
				delay: 0,
				exchange: "Ukia.Trade",
				session: "24x7",
				visible_plots_set: "ohlcv",
				timezone: "Etc/UTC",
				full_name: m.address
			};
			s(h)
		}), i || r(`unknown exchange: ${o[0]}`)
	}
	parseResolution(t) {
		const s = (a, i, l) => a.endsWith(i) ? Number(a.replace(i, "")) * l : -1;
		let r = s(t, "T", 1e3);
		if (r > 0 || (r = s(t, "S", 1e3), r > 0) || (r = s(t, "H", 60 * 60 * 1e3), r > 0) || (r = s(t, "D", 24 * 60 * 60 * 1e3), r > 0) || (r = s(t, "W", 7 * 24 * 60 * 60 * 1e3), r > 0) || (r = s(t, "M", 30 * 24 * 60 * 60 * 1e3), r > 0)) return r;
		const o = Number(t);
		return isNaN(o) ? 60 * 60 * 1e3 : o * 1e3 * 60
	}
	transformBar(t, s) {
		return {
			time: t.time,
			low: t.low === 0 ? 0 : s ? 1 / t.low : t.low,
			high: t.high === 0 ? 0 : s ? 1 / t.high : t.high,
			open: t.open === 0 ? 0 : s ? 1 / t.open : t.open,
			close: t.close === 0 ? 0 : s ? 1 / t.close : t.close,
			volume: s ? t.volume_quote : t.volume_base
		}
	}
	getBars(t, s, r, o, a) {
		const i = this.parseResolution(s);
		if (!t.ticker) {
			a("no ticker");
			return
		}
		this.cush.call("cush_ohlcv", [t.full_name, i, Math.floor(r.from) * 1e3, Math.ceil(r.to) * 1e3]).then(l => {
			const d = t.name.endsWith("_flip"),
				m = l.candles.map(f => this.transformBar(f, d));
			o(m)
		})
	}
	subscribeBars(t, s, r, o) {
		const a = this.parseResolution(s);
		window.log.debug("subscribing to bars", o, a);
		const i = setInterval(() => {
			const l = Math.ceil(new Date().valueOf()),
				d = l - a;
			window.log.debug("asking for lookback", o, a), this.cush.call("cush_ohlcv", [t.full_name, a, d, l]).then(m => {
				window.log.debug("got lookback result", o, a);
				const f = t.name.endsWith("_flip");
				m.candles.map(x => this.transformBar(x, f)).forEach(x => {
					r(x)
				})
			})
		}, a / 4);
		this.subscriptions.set(o, i)
	}
	unsubscribeBars(t) {
		const s = this.subscriptions.get(t);
		s && clearInterval(s)
	}
	cleanup() {
		this.subscriptions.forEach(t => {
			clearInterval(t)
		})
	}
}
const Um = () => {
		const n = Ed(),
			{
				setChartType: t
			} = Ct(),
			{
				cushRpc: s
			} = D(),
			{
				poolAddress: r,
				token: o,
				setToken: a
			} = oe(),
			i = () => `${r}_${o.flipped?"_flip":"_noflip"}`,
			l = c.useRef(),
			d = {
				symbol: i(),
				interval: "1H",
				libraryPath: "/app/charting_library/",
				chartsStorageUrl: "https://saveload.tradingview.com",
				chartsStorageApiVersion: "1.1",
				clientId: "oku.trade",
				userId: "user",
				fullscreen: !1,
				autosize: !0,
				studiesOverrides: {}
			},
			[m, f] = c.useState(void 0);
		c.useEffect(() => {
			if (m) try {
				m.setSymbol(i(), "1H", () => {})
			} catch {}
		}, [o, r, m]);
		const [p, x] = c.useState(void 0);
		return c.useEffect(() => {
			p && (p.onclick = () => {
				a(-1)
			})
		}, [p, o]), c.useEffect(() => {
			if (!s) return;
			const h = new Fm(s),
				y = {
					symbol: i(),
					datafeed: h,
					interval: d.interval,
					container: l.current,
					library_path: d.libraryPath,
					theme: "dark",
					locale: n.locale,
					disabled_features: ["header_saveload", "header_compare", "header_symbol_search", "symbol_search_hot_key", "header_chart_type", "popup_hints", "use_localstorage_for_settings", "adaptive_logo"],
					enabled_features: ["study_templates", "volume_force_overlay", "create_volume_indicator_by_default", "pinch_scale", "show_zoom_and_move_buttons_on_touch", "horz_touch_drag_scroll", "vert_touch_drag_scroll"],
					charts_storage_url: d.chartsStorageUrl,
					charts_storage_api_version: d.chartsStorageApiVersion,
					client_id: d.clientId,
					user_id: d.userId,
					fullscreen: d.fullscreen,
					autosize: d.autosize,
					studies_overrides: d.studiesOverrides,
					custom_css_url: "/app/css/tradingview.css",
					overrides: {
						"paneProperties.background": u.gray.dark,
						"paneProperties.backgroundType": "solid"
					}
				},
				b = Om,
				g = new b(y);
			return g.onChartReady(() => {
				g.watermark().visibility().setValue(!1, !0), g.headerReady().then(() => {
					{
						const w = g.createButton({
							useTradingViewStyle: !1,
							align: "left"
						});
						x(w), w.setAttribute("title", "Flip Pair"), w.classList.add("apply-common-tooltip"), w.innerHTML = "Flip Pair"
					} {
						const w = g.createButton({
							useTradingViewStyle: !1,
							align: "right"
						});
						w.setAttribute("title", "Open Depth Chart"), w.classList.add("apply-common-tooltip"), w.innerHTML = "Depth Chart", w.onclick = () => {
							t(qe.DEPTH)
						}
					}
					g.setCSSCustomProperty("--tv-color-toolbar-toggle-button-background-active", u.gray.dark), g.setCSSCustomProperty("--tv-color-pane-background", u.gray.dark), g.setCSSCustomProperty("--tv-color-platform-background", u.gray.dark), f(g)
				})
			}), () => {
				g.remove(), h.cleanup()
			}
		}, [l, s]), e.jsx(Bm, {
			chartContainerRef: l
		})
	},
	Bm = c.memo(function ({
		chartContainerRef: t
	}) {
		return e.jsx("div", {
			ref: t,
			className: "TVChartContainer w-full h-full px-1 py-1"
		})
	});

function $m() {
	const {
		chartType: n
	} = Ct();
	return e.jsxs("div", {
		className: "flex flex-1 flex-col bg-gray-dark border border-1 border-gray-800 rounded-lg w-full",
		children: [n !== qe.TRADINGVIEW ? e.jsx(Pm, {}) : e.jsx(e.Fragment, {}), e.jsx("div", {
			className: "flex flex-1 w-full",
			children: e.jsx(e.Fragment, {
				children: {
					[qe.DEPTH]: e.jsx(e.Fragment, {
						children: e.jsx(ua, {})
					}),
					[qe.CANDLE]: e.jsx(e.Fragment, {}),
					[qe.TRADINGVIEW]: e.jsx(e.Fragment, {
						children: e.jsx(Um, {})
					})
				} [n]
			})
		})]
	})
}
const Hm = () => {
		const {
			chart: n,
			appLayout: t
		} = xt(), s = he({
			base: 0,
			sm: 1,
			md: 2,
			lg: 3
		}), r = t === Ut.DEFAULT, o = n.size === Vn.DEFAULT, {
			token0: a,
			token1: i,
			poolSummary: l,
			token: d
		} = oe(), {
			currentChainInfo: m
		} = D(), f = a && i && l ? d.selected === 0 ? `${i==null?void 0:i.symbol}/${a==null?void 0:a.symbol} at ${L({num:l==null?void 0:l.t1_price,stringOut:!0,singleLetterNotation:!0})} | Trade on ${m.name} | Ukia Trade` : `${a==null?void 0:a.symbol}/${i==null?void 0:i.symbol} at ${L({num:l==null?void 0:l.t0_price,stringOut:!0,singleLetterNotation:!0})} | Trade on ${m.name} | Ukia Trade` : "Pool | Ukia Trade", p = a && i && l ? d.selected === 0 ? `${i==null?void 0:i.symbol}/${a==null?void 0:a.symbol} ${(l.t1_change*100).toFixed(2)}% over the past 24h with a trading volume of ${L({num:(l.t0_volume_usd+l.t1_volume_usd)/2,stringOut:!0,singleLetterNotation:!0})} with $${L({num:l.total_fees_usd,stringOut:!0,singleLetterNotation:!0})} in fees. The TVL is $${L({num:l.tvl_usd,stringOut:!0,singleLetterNotation:!0})}. Trade on ${m.name} and other chains today. Limit orders, analytics, charts, and more on Ukia Trade.` : `${a==null?void 0:a.symbol}/${i==null?void 0:i.symbol} ${(l.t0_change*100).toFixed(2)}% over the past 24h with a trading volume of ${L({num:(l.t1_volume_usd+l.t0_volume_usd)/2,stringOut:!0,singleLetterNotation:!0})} with $${L({num:l.total_fees_usd,stringOut:!0,singleLetterNotation:!0})} in fees. The TVL is $${L({num:l.tvl_usd,stringOut:!0,singleLetterNotation:!0})}. Trade on ${m.name} and other chains today. Limit orders, analytics, charts, and more on Ukia Trade.` : "Swap on Ethereum and other chains today. Charting, analytics, trending tokens, and more on Ukia Trade.";
		return e.jsxs("div", {
			className: "flex-row grow gap-2 px-1.5 p-1 flex w-full h-full overflow-hidden",
			children: [e.jsx(rs, {
				pageTitle: f,
				pageDescription: p
			}), e.jsxs("div", {
				className: "overflow-hidden flex gap-2 grow",
				style: {
					flexDirection: r ? "row" : "row-reverse"
				},
				children: [e.jsx("div", {
					className: "md:flex hidden",
					children: e.jsx(Vr, {
						isDefaultLayout: r,
						chartIsNotFullScreen: o,
						breakpoint: s
					})
				}), e.jsxs("div", {
					className: "w-full flex flex-1 flex-col gap-1 gap-y-1.5",
					children: [e.jsx("div", {
						className: "flex flex-1 min-h-[400px] md:min-h-[400px] lg:min-h-[300px]",
						children: e.jsx($m, {})
					}), e.jsxs("div", {
						className: "flex gap-1 h-fit flex-col sm:flex-row",
						children: [e.jsx("div", {
							className: "flex md:hidden",
							children: e.jsx(Vr, {
								isDefaultLayout: r,
								chartIsNotFullScreen: o,
								breakpoint: s
							})
						}), e.jsx(Am, {
							chartIsNotFullScreen: o
						})]
					})]
				})]
			}), e.jsx(Lm, {
				breakpoint: s,
				chartIsNotFullScreen: o
			})]
		})
	},
	Vm = "https://assets.oku.trade/chat-bubble.svg",
	zm = () => {
		const {
			maximized: n,
			setTrollboxX: t
		} = Xs(), [s, r] = c.useState(!1), o = (i, l) => {
			i.preventDefault(), t(l.x), (i.type === "mousemove" || i.type === "touchmove") && r(!0), (i.type === "mouseup" || i.type === "touchend") && setTimeout(() => {
				r(!1)
			}, 100)
		}, a = c.useRef(null);
		return e.jsx(ol, {
			nodeRef: a,
			axis: "x",
			handle: ".handle",
			onStart: o,
			onDrag: o,
			onStop: o,
			scale: .85,
			bounds: "parent",
			children: e.jsxs("div", {
				ref: a,
				className: "flex flex-col bottom-0 right-0 fixed z-20",
				children: [e.jsx("div", {
					className: "handle",
					children: e.jsx(qm, {
						isDragging: s
					})
				}), n ? e.jsx(Gm, {}) : null]
			})
		})
	},
	Wm = n => e.jsxs("div", {
		className: `
    flex flex-row my-1 outline-1 outline-gray-800
    text-sm
    ml-2
    `,
		children: [e.jsx("div", {
			className: "text-gray-200",
			children: n.sender
		}), e.jsx("div", {
			className: "text-white ml-2 w-72 whitespace-normal break-all",
			children: n.message
		})]
	}),
	Gm = () => {
		const {
			messages: n,
			sendMessage: t
		} = Xs(), {
			idToken: s,
			login: r
		} = Ko(), o = c.useCallback(m => {
			m.preventDefault();
			const f = m.target.trollboxInput;
			let p = f.value;
			f.value = "", p = p.trim(), f && p.length > 0 && t(p)
		}, [t]), [a, i] = c.useState(!0), l = e.jsxs("div", {
			className: "flex flex-col justify-center items-center bg-gray-800 h-96",
			children: [e.jsx("button", {
				className: "text-white bg-gray-900 p-2 rounded hover:bg-blue-600 transition-colors",
				onClick: async () => {
					await r(), i(!1)
				},
				children: "Login with GFX"
			}), e.jsx("button", {
				className: "text-white bg-gray-900 p-2 rounded hover:bg-blue-600 transition-colors mt-12",
				onClick: () => {
					i(!1)
				},
				children: "Chat Anonymously"
			})]
		}), d = e.jsxs(e.Fragment, {
			children: [e.jsx("div", {
				className: "flex bg-gray-dark overflow-y-scroll h-96 flex-col-reverse no-scrollbar",
				children: n.map((m, f) => e.jsx(Wm, {
					sender: m.sender,
					message: m.message
				}, f))
			}), e.jsxs("div", {
				className: "flex flex-row bg-black border-gray-700 border-t",
				children: [e.jsx("form", {
					className: "grow p-2 border-gray-700 border-r",
					onSubmit: o,
					children: e.jsx("input", {
						name: "trollboxInput",
						autoComplete: "off",
						autoCorrect: "off",
						placeholder: s !== void 0 ? "" : "chatting anonymously",
						className: "grow text-white bg-gray-900 outline outline-gray-700 outline-1 rounded-[17px] pl-3 py-1 w-full overflow-scroll focus:outline-none",
						onKeyDown: m => {
							m.currentTarget.value.length > 300 && (m.currentTarget.value = m.currentTarget.value.slice(0, 300), m.preventDefault())
						}
					})
				}), s === void 0 ? e.jsxs("button", {
					className: "flex flex-row items-center justify-between pr-6 pl-6 bg-gray-700 gap-x-4",
					onClick: async () => {
						await r()
					},
					children: [e.jsx("span", {
						className: "text-white",
						children: "Login"
					}), e.jsx("span", {
						children: e.jsx(al, {
							width: 16,
							color: "white"
						})
					})]
				}) : e.jsx("button", {
					className: "pr-4 pl-4",
					children: e.jsx(il, {
						width: 16,
						color: "gray"
					})
				})]
			})]
		});
		return e.jsx("div", {
			children: a && s === void 0 ? l : d
		})
	},
	qm = ({
		isDragging: n
	}) => {
		const {
			maximized: t,
			setMaximized: s,
			hasNewMessages: r,
			setLastDisplayedMessageCount: o,
			messages: a
		} = Xs(), i = () => {
			n || (Ke("opened chatbox", {}), o(a.length), s(l => !l))
		};
		return e.jsx(e.Fragment, {
			children: e.jsxs("div", {
				onClick: i,
				className: "cursor-pointer inline w-full place-content-between flex flex-row bg-gray-900 border border-gray-700 rounded-t-[20px] z-[1]",
				children: [e.jsxs("div", {
					className: "py-3 pl-4 gap-x-2 flex",
					children: [e.jsx("div", {
						className: `absolute left-[12px] w-2 h-2 bg-red-500 rounded-full absolute ${!t&&r?"block":"hidden"}`
					}), e.jsx("img", {
						src: Vm,
						alt: "Chat Bubble",
						className: "max-w-[20px] max-h-[18px]"
					}), e.jsx(O, {
						children: "Chatbox"
					})]
				}), e.jsx("div", {
					className: "inline py-4 pr-4 ml-32",
					children: t ? e.jsx(Ym, {}) : e.jsx(Xm, {})
				})]
			})
		})
	},
	Ym = () => e.jsx("svg", {
		width: "13",
		height: "6",
		viewBox: "0 0 13 6",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: e.jsx("path", {
			d: "M11.8125 1.125L6.5 4.875L1.1875 1.125",
			stroke: u.gray[300],
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}),
	Xm = () => e.jsx("svg", {
		width: "13",
		height: "6",
		viewBox: "0 0 13 6",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: e.jsx("path", {
			d: "M1.1875 4.875L6.5 1.125L11.8125 4.875",
			stroke: u.gray[300],
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});

function Km() {
	const {
		token: n
	} = oe(), {
		poolSummary: t
	} = oe(), {
		isMobile: s
	} = Ze(), {
		currentChainInfo: r
	} = D(), o = n.selected === 0 ? 1 / t.t0_price : t.t0_price, {
		data: a
	} = be("cush_getTokenOverview", [t.t0], {}), {
		data: i
	} = be("cush_getTokenOverview", [t.t1], {}), l = n.selected === 1 ? a == null ? void 0 : a.circulating_market_cap_usd : i == null ? void 0 : i.circulating_market_cap_usd;
	return t ? e.jsxs(e.Fragment, {
		children: [e.jsx(rn, {
			title: "Price",
			info: e.jsx(L, {
				num: o,
				singleLetterNotation: !0
			})
		}), t && t.t0 ? e.jsx(rn, {
			title: "24H Change",
			info: e.jsx(L, {
				num: n.selected === 0 ? t.t1_price * t.t1_change : t.t0_price * t.t0_change,
				singleLetterNotation: !0
			}),
			percentChange: n.selected === 0 ? t.t1_change * 100 : t.t0_change * 100
		}) : e.jsx(e.Fragment, {}), e.jsx(rn, {
			title: "TVL",
			info: e.jsx(L, {
				num: t.t0_tvl * t.t0_price_usd + t.t1_tvl * t.t1_price_usd,
				singleLetterNotation: !0
			}),
			token: "$",
			percentChange: (t == null ? void 0 : t.tvl_usd_change) * 100
		}), e.jsx(rn, {
			title: s ? "Vol. 24H" : "Volume 24H",
			info: e.jsx(L, {
				num: n.selected === 0 ? t.t0_volume : t.t1_volume,
				singleLetterNotation: !0
			}),
			token: n.selected === 0 ? R(t.t0, t.t0_symbol, r.id) : R(t.t1, t.t1_symbol, r.id),
			percentChange: (n.selected === 0 ? t.t0_volume_change : t.t1_volume_change) * 100
		}), e.jsx(rn, {
			title: s ? "Vol. 7D" : "Volume 7D",
			info: e.jsx(L, {
				num: n.selected === 0 ? t.t0_volume_7d : t.t1_volume_7d,
				singleLetterNotation: !0
			}),
			token: n.selected === 0 ? R(t.t0, t.t0_symbol, r.id) : R(t.t1, t.t1_symbol, r.id),
			percentChange: n.selected === 0 ? t.t0_volume_change_7d : t.t1_volume_change_7d
		}), l ? e.jsx(rn, {
			title: "Market Cap",
			info: e.jsx(L, {
				num: l,
				singleLetterNotation: !0
			})
		}) : e.jsx(e.Fragment, {
			children: " "
		})]
	}) : e.jsx(e.Fragment, {})
}
const rn = n => {
	const {
		title: t,
		info: s,
		token: r,
		percentChange: o = void 0
	} = n, {
		colors: a
	} = xt(), i = o !== void 0 ? o > 0 ? a.pos_color : o < 0 ? a.neg_color : u.white : "", l = o !== void 0 ? o > 0 ? e.jsx(O, {
		color: i,
		children: "+"
	}) : o < 0 ? e.jsx(O, {
		color: i,
		children: "-"
	}) : e.jsx("div", {}) : e.jsx("div", {});
	return e.jsxs("div", {
		className: "flex flex-row my-1",
		style: {
			width: "min-content"
		},
		children: [e.jsx("div", {
			className: "whitespace-nowrap mr-1",
			children: e.jsxs(O, {
				color: u.gray[300],
				children: [t, ":"]
			})
		}), e.jsx("div", {
			className: "whitespace-nowrap ",
			children: typeof s == "string" ? e.jsx(O, {
				children: s
			}) : e.jsx("div", {
				className: "flex",
				children: r === "$" ? e.jsxs(O, {
					children: [r, s]
				}) : e.jsxs(O, {
					children: [s, " ", r]
				})
			})
		}), o !== void 0 && e.jsx("div", {
			className: "flex flex-row ml-2 items-center",
			children: isNaN(o) || isNaN(Math.abs(o)) || !Number.isFinite(o) ? e.jsx(j, {
				color: u.gray[300],
				children: "NA"
			}) : e.jsxs(e.Fragment, {
				children: [l, e.jsxs(j, {
					color: i,
					children: [Math.abs(o).toFixed(2), "%"]
				})]
			})
		})]
	})
};

function Zm() {
	const {
		favoritePool: n,
		setFavoritePool: t,
		poolSummary: s,
		token0: r,
		token1: o
	} = oe(), {
		currentChain: a
	} = D(), i = he({
		base: "4px",
		md: "8px"
	}), [l, d] = c.useState(n), {
		width: m
	} = yn(), f = s && (s.fee / 1e4).toString();
	return c.useEffect(() => {
		d(n)
	}, [n]), l && e.jsxs("div", {
		className: "outline outline-1 outline-gray-800 rounded-lg flex flex-row flex-wrap items-center gap-x-4 px-[18px] bg-gray-dark",
		children: [e.jsxs("div", {
			className: "w-fit flex items-center md:flex-row gap-x-2",
			style: {
				gap: i
			},
			children: [m < 640 ? e.jsx(la, {}) : m < 1400 ? e.jsx(ia, {}) : e.jsx(er, {
				poolFee: f,
				token0Info: r,
				token1Info: o,
				showCopyIcon: !0
			}), e.jsx(ts, {
				isStarred: l.includes(s.address),
				onClick: () => qs(s.address, l.includes(s.address), a, t, d)
			})]
		}), e.jsx("div", {
			className: "overflow-x-auto no-scrollbar w-fit flex flex-row flex-wrap items-center gap-x-4",
			children: e.jsx(Km, {})
		})]
	})
}
const Qm = () => {
		const {
			features: {
				Chat: {
					enabled: n
				}
			}
		} = Te();
		return e.jsxs(e.Fragment, {
			children: [e.jsx("div", {
				className: "pt-2 pb-1 px-1.5",
				children: e.jsx(Zm, {})
			}), e.jsx(Hm, {}), (n == null ? void 0 : n.toLowerCase()) === "true" ? e.jsx(zm, {}) : e.jsx(e.Fragment, {})]
		})
	},
	Jm = () => {
		const n = new URLSearchParams(window.location.hash.substring(1)),
			t = n.get("id_token");
		t !== null && Bt("id_token", t);
		const s = n.get("error"),
			r = n.get("error_description");
		return s === null && r === null && window.close(), e.jsx(e.Fragment, {
			children: `${s}: ${r}`
		})
	},
	ef = "https://assets.oku.trade/404cloud.svg",
	Un = () => {
		const {
			chain: n
		} = Ht();
		return e.jsxs("div", {
			className: "md:flex my-auto mx-auto",
			children: [e.jsx("img", {
				alt: "Not found",
				src: ef
			}), e.jsxs("div", {
				className: "md:mt-24 md:ml-20 text-center md:text-left",
				children: [e.jsx("h1", {
					style: {
						fontWeight: "800",
						fontSize: "64px",
						color: u.gray[200]
					},
					children: "404"
				}), e.jsxs("p", {
					style: {
						fontWeight: "400",
						fontSize: "24px",
						color: u.gray[300]
					},
					children: ["Can't find what you're looking for!", " "]
				}), e.jsxs(ll, {
					to: `/${Al(n)?n:"ethereum"}/pool/`,
					className: "hover:opacity-100 opacity-80 text-blue-400 py-2 px-2 border border-blue-400 rounded-lg shadow mt-4 inline-flex items-center",
					relative: "route",
					children: [e.jsx("span", {
						className: "mr-1",
						children: "Take me back home"
					}), e.jsx("svg", {
						width: "16",
						height: "14",
						viewBox: "0 0 16 14",
						fill: u.blue[400],
						xmlns: "http://www.w3.org/2000/svg",
						children: e.jsx("path", {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.5858 8L1 8C0.447716 8 0 7.55229 0 7C0 6.44772 0.447716 6 1 6H12.5858L8.29289 1.70711C7.90237 1.31658 7.90237 0.683418 8.29289 0.292893Z",
							fill: u.blue[400]
						})
					})]
				})]
			})]
		})
	};

function tf(n) {
	const {
		children: t
	} = n;
	return e.jsx("div", {
		className: "rounded-lg border-[1px]  border-gray-800 p-3 w-full h-full ",
		style: {
			backgroundColor: u.gray.dark
		},
		children: t
	})
}
const nf = n => {
		const {
			timeIncrement: t,
			token: s
		} = n, r = c.useRef(null), [o, a] = c.useState(Date.now() - Bn(t) * 500), [i, l] = c.useState(Date.now()), [d, m] = c.useState(Bn(t)), {
			currentChainInfo: f
		} = D(), [p, x] = c.useState([s.address === se ? Ue[f.id].toLowerCase() : s.address]), {
			mutatedData: h,
			isFetched: y,
			isPlaceholderData: b
		} = be(["cush_swapChart", C => {
			if (C) return Object.values(C.token_candles).pop()
		}], [p, d, o, i]);
		c.useEffect(() => {
			x([s.address === se ? Ue[f.id].toLowerCase() : s.address]), m(Bn(t)), a(Date.now() - Bn(t) * 500), l(Date.now())
		}, [s, t, f]);
		const {
			colors: g
		} = xt(), {
			echart: w
		} = da({
			chartRef: r,
			options: {
				animationDuration: 250,
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "cross",
						label: {
							show: !1
						}
					},
					valueFormatter: C => `${L({num:Number(C),stringOut:!0})}`
				},
				grid: {
					top: 10,
					left: 0,
					right: 60
				},
				dataZoom: [{
					show: !0,
					type: "inside",
					realtime: !0,
					moveOnMouseMove: !0,
					preventDefaultMouseMove: !1,
					start: 75,
					end: 100
				}, {
					show: !0,
					type: "slider",
					realtime: !0
				}],
				toolbox: {
					show: !1
				},
				xAxis: {
					type: "category",
					splitLine: {
						show: !1
					},
					axisTick: {
						show: !1
					},
					data: [],
					boundaryGap: !1
				},
				yAxis: [{
					name: "oclh",
					scale: !0,
					show: !0,
					axisLine: {
						show: !1
					},
					splitLine: {
						show: !1
					}
				}, {
					name: "volume",
					scale: !1,
					show: !1,
					axisLine: {
						show: !1
					},
					splitLine: {
						show: !1
					},
					max: function (C) {
						return C.max * 3
					}
				}, {
					name: "tvl",
					scale: !1,
					show: !1,
					axisLine: {
						show: !1
					},
					splitLine: {
						show: !1
					},
					max: function (C) {
						return C.max * 1.3
					},
					min: function (C) {
						return C.min
					}
				}],
				series: [{
					name: "volume",
					type: "bar",
					itemStyle: {
						opacity: .8,
						color: u.green[400]
					},
					stack: "true",
					data: [],
					yAxisIndex: 1
				}, {
					name: "tvl",
					type: "bar",
					stack: "true",
					data: [],
					yAxisIndex: 1,
					itemStyle: {
						opacity: .8,
						color: u.blue[400]
					}
				}, {
					name: "oclh",
					type: "candlestick",
					itemStyle: {
						color: g.neg_color,
						color0: g.pos_color,
						borderColor: g.neg_color,
						borderColor0: g.pos_color
					},
					yAxisIndex: 0,
					data: [],
					z: 10
				}]
			}
		});
		return c.useEffect(() => {
			w && (y || b ? w.hideLoading() : w.showLoading("default", {
				color: "white",
				textColor: "white",
				maskColor: "rgba(0,0,0,0.4)"
			}))
		}, [y, w]), c.useEffect(() => {
			if (!(h && w)) return;
			const C = h.map(N => [N.open, N.close, N.low, N.high]),
				k = h.map(N => new Date(N.time).toLocaleDateString(navigator.language, {
					year: "numeric",
					month: "numeric",
					day: "numeric"
				})),
				T = h.map(N => N.volume),
				E = h.map(N => N.tvl);
			w.setOption({
				xAxis: {
					data: k
				},
				series: [{
					name: "oclh",
					data: C
				}, {
					name: "volume",
					data: T
				}, {
					name: "tvl",
					data: E
				}]
			}), w.setOption({
				tooltip: {
					trigger: "axis",
					position: [0, 0],
					backgroundColor: "rgba(0,0,0,0,0)",
					borderWidth: 0,
					formatter: N => {
						if (Array.isArray(N)) {
							const S = N.find(v => v.seriesName == "oclh"),
								G = N.find(v => v.seriesName == "tvl"),
								_ = N.find(v => v.seriesName == "volume");
							return js(e.jsxs("div", {
								className: "flex flex-col gap-1",
								children: [e.jsx("div", {
									className: "text-xs flex flex-row whitespace-pre",
									children: k[S.value[0]]
								}), e.jsxs("div", {
									className: "flex flex-row gap-1",
									children: [e.jsx("div", {
										className: "text-white text-sm justify-between flex flex-row gap-12",
										children: e.jsxs("div", {
											className: "flex flex-row gap-1",
											children: [e.jsx("div", {
												children: "O:"
											}), e.jsx("div", {
												style: {
													color: S.color
												},
												children: L({
													num: S.value[1],
													stringOut: !0,
													singleLetterNotation: !0
												})
											})]
										})
									}), e.jsx("div", {
										className: "text-white text-sm justify-between flex flex-row",
										children: e.jsxs("div", {
											className: "flex flex-row gap-1",
											children: [e.jsx("div", {
												children: "H:"
											}), e.jsx("div", {
												style: {
													color: S.color
												},
												children: L({
													num: S.value[1],
													stringOut: !0,
													singleLetterNotation: !0
												})
											})]
										})
									}), e.jsx("div", {
										className: "text-white text-sm justify-between flex flex-row",
										children: e.jsxs("div", {
											className: "flex flex-row gap-1",
											children: [e.jsx("div", {
												children: "L:"
											}), e.jsx("div", {
												style: {
													color: S.color
												},
												children: L({
													num: S.value[1],
													stringOut: !0,
													singleLetterNotation: !0
												})
											})]
										})
									}), e.jsx("div", {
										className: "text-white text-sm justify-between flex flex-row",
										children: e.jsxs("div", {
											className: "flex flex-row gap-1",
											children: [e.jsx("div", {
												children: "C:"
											}), e.jsx("div", {
												style: {
													color: S.color
												},
												children: L({
													num: S.value[1],
													stringOut: !0,
													singleLetterNotation: !0
												})
											})]
										})
									})]
								}), e.jsxs("div", {
									className: "flex flex-row gap-1",
									children: [e.jsx("div", {
										className: "text-white text-sm justify-between flex flex-row",
										children: e.jsxs("div", {
											className: "flex flex-row gap-1",
											children: [e.jsx("div", {
												children: "Volume:"
											}), e.jsx("div", {
												style: {
													color: S.color
												},
												children: L({
													num: _.value,
													stringOut: !0,
													singleLetterNotation: !0
												})
											})]
										})
									}), e.jsx("div", {
										className: "text-white text-sm justify-between flex flex-row",
										children: e.jsxs("div", {
											className: "flex flex-row gap-1",
											children: [e.jsx("div", {
												children: "TVL:"
											}), e.jsx("div", {
												style: {
													color: S.color
												},
												children: L({
													num: G.value,
													stringOut: !0,
													singleLetterNotation: !0
												})
											})]
										})
									})]
								})]
							}))
						}
						return "No Tooltip"
					}
				}
			})
		}, [h]), e.jsx("div", {
			className: "grow h-fit overflow-hidden relative",
			children: e.jsx("div", {
				ref: r,
				className: "w-full h-full absolute"
			})
		})
	},
	Bn = n => {
		switch (n) {
			case bt.DAY_1:
				return 6e4 * 60 * 24;
			case bt.DAY_7:
				return 6e4 * 60 * 24 * 7;
			case bt.DAY_14:
				return 6e4 * 60 * 24 * 14;
			case bt.DAY_30:
				return 6e4 * 60 * 24 * 30;
			case bt.YEAR_1:
				return 6e4 * 60 * 24 * 365;
			default:
				return 6e4
		}
	},
	sf = n => {
		const {
			timeIncrement: t,
			setTimeIncrement: s
		} = n, [r, o] = c.useState(!1), {
			refs: a,
			floatingStyles: i,
			context: l
		} = Ce({
			whileElementsMounted: Ie,
			open: r,
			onOpenChange: o
		}), {
			styles: d
		} = Ae(l, {
			initial: {
				opacity: 1,
				transform: "scale(0.5,0)"
			},
			common: {
				transformOrigin: "top"
			}
		}), m = Le(l), f = Pe(l), {
			getReferenceProps: p,
			getFloatingProps: x
		} = Ne([f, m]);
		return e.jsxs(e.Fragment, {
			children: [e.jsxs("div", {
				className: "bg-gray-900 border border-gray-700 flex gap-x-2 rounded-md h-fit py-1 px-2 cursor-pointer",
				ref: a.setReference,
				...p(),
				children: [e.jsx(O, {
					color: u.gray[200],
					children: t
				}), e.jsx(_t, {})]
			}), r && e.jsx("div", {
				...x(),
				ref: a.setFloating,
				style: i,
				className: "z-10",
				children: e.jsx("div", {
					style: {
						...d
					},
					children: e.jsx(rf, {
						setIsOpen: o,
						setTimeIncrement: s
					})
				})
			})]
		})
	},
	rf = ({
		setTimeIncrement: n,
		setIsOpen: t
	}) => {
		const s = r => {
			n(r), t(!1)
		};
		return e.jsx("div", {
			className: "flex flex-col w-[56px] rounded-[6px] mt-1 bg-gray-800 border-[1px] border-gray-700",
			children: Object.values(bt).map((r, o) => e.jsx( of , {
				onClick: s,
				title: r
			}, o))
		})
	},
	of = ({
		onClick: n,
		title: t
	}) => e.jsx("button", {
		onClick: () => n(t),
		className: "flex justify-start w-full h-full hover:bg-gray-drophover px-3 py-[6px] rounded-[6px]",
		children: e.jsx(j, {
			children: t
		})
	}),
	af = n => {
		const {
			token: t,
			tokenPriceUSD: s,
			timeIncrement: r,
			setTimeIncrement: o
		} = n;
		return e.jsxs("div", {
			className: " w-full h-fit flex flex-row justify-between",
			children: [e.jsx(lf, {
				token: t,
				tokenPriceUSD: s
			}), e.jsx("div", {
				className: "flex flex-row  gap-3",
				children: e.jsx(sf, {
					timeIncrement: r,
					setTimeIncrement: o
				})
			})]
		})
	},
	lf = n => {
		const {
			token: t,
			tokenPriceUSD: s
		} = n, {
			currentChainInfo: r
		} = D(), o = t && t.symbol ? ke(t.address, r.id) : "";
		return e.jsx("div", {
			className: "flex flex-col h-[48px]",
			children: e.jsxs("div", {
				className: "flex flex-col gap-[6px]",
				children: [e.jsxs("div", {
					className: "flex flex-row items-center gap-[6px]",
					children: [e.jsx(xe, {
						logoUrl: o,
						tokenSymbol: t.symbol,
						size: 14
					}), e.jsx(ee, {
						children: "Price"
					})]
				}), s && e.jsxs(O, {
					color: u.gray[300],
					children: ["$", s.toFixed(2)]
				})]
			})
		})
	};

function eo(n) {
	const {
		timeIncrement: t,
		setTimeIncrement: s,
		token: r,
		xBounds: o,
		setXBounds: a,
		price: i
	} = n, [l, d] = c.useState(!0), {
		cushRpc: m
	} = D();
	return c.useEffect(() => {
		d(!0)
	}, [r, m]), e.jsxs("div", {
		className: "p-5 rounded-xl bg-gray-900 border-[1px] w-full flex grow flex-col border-gray-800",
		children: [e.jsx("div", {
			className: "flex flex-col",
			children: e.jsx(af, {
				token: r,
				tokenPriceUSD: i,
				timeIncrement: t,
				setTimeIncrement: s
			})
		}), e.jsx("div", {
			className: "flex flex-col grow",
			children: e.jsx(nf, {
				timeIncrement: t,
				token: r,
				bounds: o,
				setBounds: a,
				loading: l,
				setLoading: d
			})
		})]
	})
}

function cf(n) {
	var p, x;
	const {
		height: t,
		token0: s,
		token1: r,
		tokenOverview0: o,
		tokenOverview1: a
	} = n, [i, l] = c.useState(bt.DAY_1), {
		flip: d
	} = gn(), [m, f] = c.useState(void 0);
	return e.jsx(tf, {
		children: e.jsxs("div", {
			className: `flex flex-1 h-full grow gap-3 ${d?"flex-col-reverse":"flex-col"}`,
			style: {
				maxHeight: t
			},
			children: [e.jsx(eo, {
				timeIncrement: i,
				setTimeIncrement: l,
				token: s,
				xBounds: m,
				setXBounds: f,
				price: (p = o == null ? void 0 : o.price_deltas) == null ? void 0 : p.price_usd
			}), e.jsx(eo, {
				timeIncrement: i,
				setTimeIncrement: l,
				token: r,
				xBounds: m,
				setXBounds: f,
				price: (x = a == null ? void 0 : a.price_deltas) == null ? void 0 : x.price_usd
			})]
		})
	})
}
const on = ({
		time: n,
		percent: t
	}) => {
		const s = t > 0 ? u.green[300] : u.red[300],
			r = t > 0 ? e.jsx(O, {
				color: u.green[300],
				children: "+"
			}) : e.jsx(e.Fragment, {});
		return e.jsxs("div", {
			className: "flex bg-gray-800 border border-gray-700 rounded-[10px] py-4 px-3 gap-y-2 justify-between",
			children: [e.jsxs(O, {
				color: u.gray[100],
				children: [" ", n]
			}), e.jsxs("div", {
				className: "flex",
				children: [r, e.jsxs(O, {
					color: s,
					children: [e.jsx(L, {
						num: (t * 100).toFixed(2),
						singleLetterNotation: !0,
						showOnly2Digits: !0
					}), "%"]
				})]
			})]
		})
	},
	to = ({
		stat: n,
		value: t
	}) => e.jsxs("div", {
		className: "flex flex-col bg-gray-800 w-full border border-gray-700 rounded-[10px] py-4 px-3 gap-y-2",
		children: [e.jsx(j, {
			color: u.gray[400],
			children: n
		}), e.jsxs(O, {
			color: u.gray[100],
			children: [" $", t]
		})]
	});

function df(n) {
	var f;
	const {
		token0: t,
		token1: s,
		tokenOverview0: r,
		tokenOverview1: o
	} = n, {
		currentChain: a
	} = D(), {
		token: i,
		setToken: l
	} = Mo();
	c.useEffect(() => {
		const p = wr(a, t.address),
			x = wr(a, s.address);
		p && x || !p && !x || l(x ? 0 : 1)
	}, [t.address, s.address]);
	const [d, m] = c.useState(i.selected === 0 ? r : o);
	return c.useEffect(() => {
		r && o && i && (i.selected === 0 ? m(r) : m(o))
	}, [r, o, i]), e.jsxs("div", {
		className: "flex flex-1 flex-col bg-gray-dark rounded-lg border-[1px] border-gray-800 p-3",
		children: [e.jsxs("div", {
			className: "flex justify-between w-full",
			children: [e.jsx(O, {
				weight: P.MEDIUM,
				color: u.gray[50],
				children: "Token Overview"
			}), e.jsx("div", {
				children: e.jsx(Jn, {
					setTokenSelected: l,
					token: i,
					token0Address: t.address,
					token0Symbol: t.symbol,
					token1Address: s.address,
					token1Symbol: s.symbol,
					isLogo: !0
				})
			})]
		}), e.jsx("div", {
			children: d ? e.jsxs("div", {
				children: [e.jsxs(j, {
					color: u.gray[400],
					children: [d.name, " (", R(d.address, d.symbol, a), ")"]
				}), e.jsxs("div", {
					className: "flex content-end mt-2",
					children: [e.jsxs(ee, {
						weight: P.SEMIBOLD,
						color: u.gray[100],
						children: ["$", d.price_deltas && L({
							num: (f = d.price_deltas) == null ? void 0 : f.price_usd,
							stringOut: !0,
							singleLetterNotation: !0
						})]
					}), e.jsxs("div", {
						className: "flex items-end ml-2",
						children: [d.price_deltas.day_change_usd > 0 ? e.jsx(O, {
							color: u.green[300],
							children: "+"
						}) : e.jsx(e.Fragment, {
							children: " "
						}), e.jsxs("p", {
							className: `${d.price_deltas.day_change_usd>0?"text-green-300":"text-red-300"} text-xs`,
							children: [e.jsx(L, {
								showOnly2Digits: !0,
								num: d.price_deltas.day_change_usd * 100
							}), "%"]
						})]
					})]
				}), e.jsxs("div", {
					className: "grid grid-cols-2 mt-5 gap-x-2",
					children: [d.circulating_market_cap_usd > 0 && e.jsx(to, {
						stat: "Market Cap",
						value: e.jsx(L, {
							num: d.circulating_market_cap_usd
						})
					}), d.fully_diluted_market_cap_usd > 0 && e.jsx(to, {
						stat: "Fully Diluted Valuation",
						value: e.jsx(L, {
							num: d.fully_diluted_market_cap_usd
						})
					})]
				}), e.jsxs("div", {
					className: "grid grid-cols-3 mt-5 gap-x-2 gap-y-2",
					children: [e.jsx(on, {
						time: "1h",
						percent: d.price_deltas.hour_change_usd
					}), e.jsx(on, {
						time: "24h",
						percent: d.price_deltas.day_change_usd
					}), e.jsx(on, {
						time: "7d",
						percent: d.price_deltas.week_change_usd
					}), e.jsx(on, {
						time: "14d",
						percent: d.price_deltas.two_week_change_usd
					}), e.jsx(on, {
						time: "30d",
						percent: d.price_deltas.month_change_usd
					}), e.jsx(on, {
						time: "1y",
						percent: d.price_deltas.year_change_usd
					})]
				})]
			}) : e.jsx(Ln, {
				lines: 6,
				random: !0
			})
		})]
	})
}
const uf = async (n, {
	result_size: t = 30,
	sort_by: s = "t0_change_usd",
	sort_order: r = !1
}) => {
	try {
		return n.callRaw("cush_topPools", [{
			result_size: t,
			sort_by: s,
			sort_order: r
		}])
	} catch (o) {
		const a = o;
		throw window.log.log(o), new Error(a.message)
	}
};

function Mn({
	pool: n
}) {
	const {
		currentChain: t
	} = D();
	return e.jsxs("div", {
		className: "flex items-center gap-[5px]",
		children: [e.jsx(En, {
			token0LogoUrl: ke(n.t0, t),
			token1LogoUrl: ke(n.t1, t),
			token0Symbol: n.t0_symbol,
			token1Symbol: n.t1_symbol
		}), e.jsxs("div", {
			className: "flex flex-row",
			children: [e.jsx(j, {
				children: Qn(R(n.t0, n.t0_symbol, t))
			}), e.jsxs(j, {
				color: u.gray[400],
				children: ["/", Qn(R(n.t1, n.t1_symbol, t))]
			})]
		}), e.jsxs(j, {
			children: [n.fee / 1e4, "%"]
		})]
	})
}

function pf({
	pool: n
}) {
	return e.jsxs("div", {
		className: "w-full flex flex-row items-center",
		children: [e.jsx("div", {
			className: "flex  flex-[19] ",
			children: e.jsx(Mn, {
				pool: n
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsxs(j, {
				children: ["$", L({
					num: n.tvl_usd,
					stringOut: !0,
					singleLetterNotation: !0
				})]
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsxs(j, {
				color: u.green[400],
				children: ["$", L({
					num: n.total_volume_7d_usd,
					stringOut: !0,
					singleLetterNotation: !0
				})]
			})
		})]
	})
}

function no({
	pool: n
}) {
	return e.jsxs("div", {
		className: "w-full flex flex-row items-center",
		children: [e.jsx("div", {
			className: "flex  flex-[19] ",
			children: e.jsx(Mn, {
				pool: n
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsxs(j, {
				children: ["$", e.jsx(L, {
					num: n.t0_price_usd,
					singleLetterNotation: !0
				})]
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsxs(j, {
				color: u.green[400],
				children: ["$", L({
					num: n.t1_volume_usd + n.t0_volume_usd,
					stringOut: !0,
					singleLetterNotation: !0
				})]
			})
		})]
	})
}

function mf({
	pool: n
}) {
	return e.jsxs("div", {
		className: "w-full flex flex-row items-center",
		children: [e.jsx("div", {
			className: "flex  flex-[19] ",
			children: e.jsx(Mn, {
				pool: n
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsxs(j, {
				children: ["$", e.jsx(L, {
					num: n.t0_price_usd,
					singleLetterNotation: !0
				})]
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsxs(j, {
				color: u.green[400],
				children: ["$", L({
					num: n.t1_volume_usd + n.t0_volume_usd,
					stringOut: !0,
					singleLetterNotation: !0
				})]
			})
		})]
	})
}

function ff({
	pool: n
}) {
	return e.jsxs("div", {
		className: "w-full flex flex-row items-center justify-between",
		children: [e.jsx("div", {
			className: "flex  ",
			children: e.jsx(Mn, {
				pool: n
			})
		}), e.jsx("div", {
			className: "flex ",
			children: e.jsx(j, {
				color: u.green[400],
				children: n.tx_count
			})
		})]
	})
}

function xf({
	pool: n
}) {
	return e.jsxs("div", {
		className: "w-full flex flex-row items-center",
		children: [e.jsx("div", {
			className: "flex  flex-[19] ",
			children: e.jsx(Mn, {
				pool: n
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsxs(j, {
				children: ["$", L({
					num: (n.t0_volume_usd + n.t1_volume_usd) / 2,
					stringOut: !0,
					singleLetterNotation: !0
				})]
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsxs(j, {
				color: u.green[400],
				children: ["$", L({
					num: n.total_volume_7d_usd,
					stringOut: !0,
					singleLetterNotation: !0
				})]
			})
		})]
	})
}
const hf = n => {
		const {
			index: t,
			trendType: s,
			pool: r
		} = n, [o, a] = c.useState(!1);
		return e.jsx(xn, {
			className: " whitespace-pre w-full flex flex-row items-center p-3 border-b border-gray-800",
			style: ({
				isActive: i
			}) => {
				const l = t % 2 === 0,
					d = i || o,
					m = l ? u.gray[900] : u.gray.dark;
				return {
					backgroundColor: d ? De(m) : m
				}
			},
			onMouseEnter: () => a(!0),
			onMouseLeave: () => a(!1),
			to: `../${r.t0}/${r.t1}`,
			children: yf(s, r)
		})
	},
	yf = (n, t) => {
		switch (n) {
			case fe.TOP_GAINERS:
				return e.jsx(no, {
					pool: t
				});
			case fe.TOP_LOSERS:
				return e.jsx(mf, {
					pool: t
				});
			case fe.TOTAL_SWAPS:
				return e.jsx(ff, {
					pool: t
				});
			case fe.TVL:
				return e.jsx(pf, {
					pool: t
				});
			case fe.VOLUME:
				return e.jsx(xf, {
					pool: t
				});
			default:
				return e.jsx(no, {
					pool: t
				})
		}
	},
	gf = n => {
		const {
			trendType: t
		} = n, [s, r] = c.useState(void 0), {
			cushRpc: o
		} = D();
		return c.useEffect(() => {
			r(void 0), uf(o, bf(t)).then(a => {
				r(a.pools)
			})
		}, [t, o]), e.jsx("div", {
			className: "overflow-y-scroll no-scrollbar flex-col flex-1 h-min",
			children: e.jsx("div", {
				className: "flex flex-col min-h-[792px]",
				children: s ? s.map((a, i) => e.jsx(hf, {
					index: i,
					pool: a,
					trendType: t
				}, a.address)) : e.jsx(Ln, {
					lines: 50,
					random: !0
				})
			})
		})
	},
	bf = n => {
		switch (n) {
			case fe.TOP_GAINERS:
				return {
					sort_by: "t0_change_usd"
				};
			case fe.TOP_LOSERS:
				return {
					sort_by: "t0_change_usd", sort_order: !0
				};
			case fe.TOTAL_SWAPS:
				return {
					sort_by: "tx_count"
				};
			case fe.TVL:
				return {
					sort_by: "tvl_usd"
				};
			case fe.VOLUME:
				return {
					sort_by: "t0_volume_usd"
				};
			default:
				return {
					sort_by: "t0_change_usd"
				}
		}
	},
	wf = () => e.jsxs("div", {
		className: "flex flex-row w-full",
		children: [e.jsx("div", {
			className: "flex flex-[19]",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Pool"
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "TVL"
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Volume 7D"
			})
		})]
	}),
	so = () => e.jsxs("div", {
		className: "flex flex-row w-full",
		children: [e.jsx("div", {
			className: "flex flex-[19]",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Pool"
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Price"
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Volume 24h"
			})
		})]
	}),
	jf = () => e.jsxs("div", {
		className: "flex flex-row w-full",
		children: [e.jsx("div", {
			className: "flex flex-[19]",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Pool"
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Price"
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Volume 24h"
			})
		})]
	}),
	vf = () => e.jsxs("div", {
		className: "flex flex-row w-full justify-between",
		children: [e.jsx("div", {
			className: "flex flex-[19]",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Pool"
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Total Swaps"
			})
		})]
	}),
	_f = () => e.jsxs("div", {
		className: "flex flex-row w-full",
		children: [e.jsx("div", {
			className: "flex flex-[18]",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Pool"
			})
		}), e.jsx("div", {
			className: "flex flex-[7] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Volume 24h"
			})
		}), e.jsx("div", {
			className: "flex flex-[9] justify-end",
			children: e.jsx(j, {
				color: u.gray[400],
				children: "Volume 7D"
			})
		})]
	}),
	Tf = ({
		trendType: n
	}) => e.jsx("div", {
		className: "flex flex-row p-3 whitespace-pre border-b border-gray-800",
		children: kf(n)
	}),
	kf = n => {
		switch (n) {
			case fe.TOP_GAINERS:
				return e.jsx(so, {});
			case fe.TOP_LOSERS:
				return e.jsx(jf, {});
			case fe.TOTAL_SWAPS:
				return e.jsx(vf, {});
			case fe.TVL:
				return e.jsx(wf, {});
			case fe.VOLUME:
				return e.jsx(_f, {});
			default:
				return e.jsx(so, {})
		}
	};

function Cf({
	trendType: n,
	setTrendType: t
}) {
	const [s, r] = c.useState(!1), {
		refs: o,
		floatingStyles: a,
		context: i
	} = Ce({
		whileElementsMounted: Ie,
		open: s,
		onOpenChange: r,
		middleware: [],
		placement: "bottom-end"
	}), {
		styles: l
	} = Ae(i, {
		initial: {
			opacity: 1,
			transform: "scale(0,0)"
		},
		common: {
			transformOrigin: "top"
		}
	}), d = Le(i), m = Pe(i), {
		getReferenceProps: f,
		getFloatingProps: p
	} = Ne([m, d]);
	return e.jsxs("div", {
		className: "w-fit relative z-5",
		children: [e.jsxs("div", {
			className: "gap-4  outline text-white text-xs font-semibold outline-1 py-2 px-2 min-w-[100px] bg-gray-900 outline-gray-600 rounded-md flex justify-between cursor-pointer items-center",
			ref: o.setReference,
			...f(),
			children: [e.jsx(Nf, {
				trendType: n
			}), e.jsx(cl, {
				width: 12,
				height: 12,
				color: u.gray[400]
			})]
		}), s && e.jsx("div", {
			className: "w-full",
			style: {
				...a
			},
			...p(),
			ref: o.setFloating,
			children: e.jsx("div", {
				style: l,
				className: "flex flex-col w-full bg-gray-800 border-[1px] border-gray-700 rounded-lg",
				children: e.jsx(Sf, {
					setTrendType: t,
					setIsOpen: r
				})
			})
		})]
	})
}
const Nf = ({
		trendType: n
	}) => e.jsx(j, {
		weight: P.REGULAR,
		children: ja(n)
	}),
	Sf = ({
		setIsOpen: n,
		setTrendType: t
	}) => {
		const s = r => {
			t(r), n(!1)
		};
		return e.jsx(e.Fragment, {
			children: Object.values(fe).map((r, o) => e.jsx(Ef, {
				onClick: s,
				title: r
			}, o))
		})
	},
	Ef = ({
		onClick: n,
		title: t
	}) => e.jsx("div", {
		onClick: () => n(t),
		className: "px-1 py-2 hover:bg-gray-drophover w-full cursor-pointer rounded-lg",
		children: e.jsx(O, {
			color: u.gray[100],
			children: ja(t)
		})
	}),
	ja = n => {
		switch (n) {
			case fe.TOP_GAINERS:
				return "Top Gainers";
			case fe.TOP_LOSERS:
				return "Top Losers";
			case fe.TOTAL_SWAPS:
				return "Total Swaps";
			case fe.TVL:
				return "TVL";
			case fe.VOLUME:
				return "Volume";
			default:
				return "Volume"
		}
	},
	If = n => {
		const {
			trendType: t,
			setTrendType: s
		} = n;
		return e.jsxs("div", {
			className: "flex flex-row justify-between items-center border-b border-gray-800 w-full py-4 px-3 bg-gray-900",
			"data-name": "TrendingTopBar",
			children: [e.jsx(O, {
				children: "Trending"
			}), e.jsx(Cf, {
				trendType: t,
				setTrendType: s
			})]
		})
	};

function Af() {
	const [n, t] = c.useState(fe.VOLUME);
	return e.jsxs("div", {
		className: "flex flex-col flex-1 w-full grow rounded-lg bg-gray-dark border border-gray-800 overflow-hidden sm:min-w-full md:min-w-[500px] lg:min-w-[360px] lg:min-h-[1300px]",
		children: [e.jsx(If, {
			trendType: n,
			setTrendType: t
		}), e.jsx("div", {
			className: "w-full h-[1px] bg-gray-800 mt-3 mb-[18px]"
		}), e.jsx(Tf, {
			trendType: n
		}), e.jsx(gf, {
			trendType: n
		})]
	})
}

function Lf(n) {
	const {
		token0: t,
		token1: s
	} = n, {
		height: r,
		width: o
	} = yn(), a = r - Ls - 100 < 700 ? 800 : r - Ls - 70, {
		currentChainInfo: i
	} = D(), {
		data: l
	} = be("cush_getTokenOverview", [t.address], {}), {
		data: d
	} = be("cush_getTokenOverview", [s.address], {}), m = t && s ? `${s==null?void 0:s.symbol}/${t==null?void 0:t.symbol} | Swap on ${i.name} | Ukia Trade` : `swap on ${i.name} | Ukia Trade`, f = t && s && l && l.price_deltas ? `${s.symbol}/${t.symbol} ${(l.price_deltas.week_change_usd*100).toFixed(2)}% over the past 7d. Swap ${s.name} and ${t.name} on ${i.name} today. Charting, analytics, trending tokens, and more ok Ukia Trade` : "Charting, analytics, trending tokens, and more ok Ukia Trade", p = {
		token0: t,
		token1: s,
		tokenOverview0: l,
		tokenOverview1: d
	}, x = e.jsx(cf, {
		height: a,
		...p
	}), h = e.jsx(df, {
		...p
	});
	return e.jsxs("div", {
		className: "flex flex-col-reverse flex-1 lg:flex-row w-full overflow-hidden gap-2 p-2",
		style: {
			minHeight: a
		},
		children: [e.jsx(rs, {
			pageTitle: m,
			pageDescription: f
		}), e.jsxs("div", {
			className: "flex flex-col flex-1 sm:flex-row lg:flex-row gap-2 overflow-hidden",
			style: {
				maxHeight: a
			},
			children: [e.jsx("div", {
				className: "flex basis-1/2 lg:basis-auto max-h-[442.24px] sm:max-h-full",
				children: e.jsx(Af, {})
			}), e.jsx("div", {
				className: "flex basis-1/2 lg:basis-auto grow",
				children: o < 640 ? h : x
			})]
		}), e.jsxs("div", {
			className: "flex flex-col flex-auto sm:flex-1 sm:flex-row lg:flex-col lg:max-w-[390px] gap-2",
			children: [e.jsx("div", {
				className: "flex sm:basis-1/2",
				children: e.jsx(wa, {
					isSwapForm: !0
				})
			}), e.jsx("div", {
				className: "flex h-[594px] sm:h-fit min-h-[380px] lg:min-h-0 sm:basis-1/2",
				children: o < 640 ? x : h
			})]
		})]
	})
}
const Pf = n => {
	const {
		tokenItem: t
	} = n, {
		currentChain: s
	} = D(), r = ze(t.contract, s), {
		token0: o,
		token1: a
	} = gn(), i = hn(), l = () => {
		a && o && i(`../${o.address}/${r.address}`)
	};
	return e.jsx("div", {
		children: r.logoURI && r.logoURI !== Cn && e.jsx("button", {
			className: "mx-3",
			onClick: l,
			children: e.jsxs("div", {
				className: "flex flex-row gap-x-1",
				children: [e.jsx(xe, {
					logoUrl: r.logoURI,
					tokenSymbol: r.symbol,
					size: 14
				}), e.jsxs("div", {
					className: "flex flex-row gap-x-[6px]",
					children: [e.jsx(j, {
						weight: P.REGULAR,
						color: u.gray[300],
						children: e.jsx(L, {
							num: t.price,
							showOnly2Digits: !0
						})
					}), e.jsxs(j, {
						children: [t.change_24h.toFixed(2), "%"]
					})]
				})]
			})
		})
	})
};

function Mf() {
	const {
		chain: n
	} = D(), [t, s] = c.useState(!1), r = {
		result_size: 100,
		sort_by: "tx_4h",
		sort_order: !1,
		fee_tiers: [],
		result_offset: 0
	}, [o, a] = c.useState([]), {
		data: i
	} = be("cush_searchTopTokens", [r], {
		enabled: t !== !0
	}), {
		width: l
	} = yn(), d = 100, m = "h-[30px] w-full relative flex bg-repeat-x animate-movingCarousel hover:[animation-play-state:paused]", f = p => document.documentElement.style.setProperty("--width", p);
	return c.useEffect(() => {
		if (i && i.results && i.results.length > 0) {
			const p = d * i.results.length;
			f(`-${p}px`), a(Rf(i.results, l, d)), s(!0)
		}
	}, [l, i]), c.useEffect(() => {
		n && (i != null && i.results) && s(!1)
	}, [n]), e.jsx("div", {
		className: m,
		children: o && o.length > 0 && o.map((p, x) => e.jsx("div", {
			className: "pb-2 pt-1 flex items-center justify-center",
			children: e.jsx(Pf, {
				tokenItem: p
			})
		}, x))
	})
}
const Rf = (n, t, s) => {
	const r = Math.ceil(t / s) + 22,
		o = n.length,
		a = Math.floor(r / o);
	let i = n.concat(n.slice(0, r + 1));
	for (let l = 0; l < a; l++) i = i.concat(n.slice(0, r - o * (l + 1) + 1));
	return n.concat(n.slice(0, r + 1)), i
};

function Of() {
	return e.jsx("div", {
		className: "text-white h-fit pb-1 overflow-hidden",
		children: e.jsx(Mf, {})
	})
}

function Df() {
	const n = Ht(),
		{
			currentChainInfo: t
		} = D(),
		{
			setToken0: s,
			setToken1: r,
			token0: o,
			token1: a
		} = gn();
	return c.useEffect(() => {
		n.token0 && s(ze(n.token0, t.id))
	}, [n.token0, t]), c.useEffect(() => {
		n.token1 && r(ze(n.token1, t.id))
	}, [n.token1, t]), e.jsxs("div", {
		className: "flex flex-col justify-between overflow-hidden",
		children: [o && a && e.jsx(Lf, {
			token0: o,
			token1: a
		}), e.jsx(Of, {})]
	})
}
const Ff = () => {
		const n = Us(),
			[t, s] = c.useState(void 0);
		return c.useEffect(() => {
			for (const r of n.reverse())
				if (r.handle) {
					const o = r.handle.base;
					if (o) {
						s(o);
						break
					}
				}
		}, [n]), {
			pageName: t
		}
	},
	Uf = () => {
		const {
			currentChainInfo: n
		} = D(), {
			poolAddress: t,
			token0: s,
			token1: r
		} = Ht(), {
			pageName: o
		} = Ff();
		return c.useEffect(() => {
			o && (o === "swap" ? Ke(o + "_click", {
				chain: n.name,
				token0: s,
				token1: r
			}) : Ke(o + "_click", {
				chain: n.name,
				address: t
			}))
		}, [o]), e.jsx(e.Fragment, {})
	},
	Bf = ["0x8589427373d6d84e98730d7795d8f6f8731fda16", "0xf7b31119c2682c88d88d455dbb9d5932c65cf1be", "0x12d66f87a04a9e220743712ce6d9bb1b5616b8fc", "0x4736dcf1b7a3d580672cce6e7c65cd5cc9cfba9d", "0xba214c1c1928a32bffe790263e38b4af9bfcd659", "0x0836222f2b2b24a3f36f98668ed8f0b38d1a872f", "0x931546d9e66836abf687d2bc64b30407bac8c568", "0x6be0ae71e6c41f2f9d0d1a3b8d0f75e6f6a0b46e", "0xd21be7248e0197ee08e0c20d4a96debdac3d20af", "0xd96f2b1c14db8458374d9aca76e26c3d18364307", "0x38735f03b30fbc022ddd06abed01f0ca823c6a94", "0x97b1043abd9e6fc31681635166d430a458d14f9c", "0x53b6936513e738f44fb50d2b9476730c0ab3bfc1", "0x5a7a51bfb49f190e5a6060a5bc6052ac14a3b59f", "0xa0e1c89ef1a489c9c7de96311ed5ce5d32c20e4b", "0xaeaac358560e11f52454d997aaff2c5731b6f8a6", "0xf67721a2d8f736e75a49fdd7fad2e31d8676542a", "0x22aaa7720ddd5388a3c0a3333430953c68f1849b", "0x722122df12d4e14e13ac3b6895a86e84145b6967", "0x2717c5e28cf931547b621a5dddb772ab6a35b701", "0x3ad9db589d201a710ed237c829c7860ba86510fc", "0x23773e65ed146a459791799d01336db287f25334", "0x169ad27a470d064dede56a2d3ff727986b15d52b", "0xd691f27f38b395864ea86cfc7253969b409c362d", "0x901bb9583b24d97e995513c6778dc6888ab6870e", "0xbb93e510bbcd0b7beb5a853875f9ec60275cf498", "0x610b717796ad172b316836ac95a2ffad065ceab4", "0x1356c899d8c9467c7f71c195612f8a395abf2f0a", "0x983a81ca6fb1e441266d2fbcb7d8e530ac2e05a2", "0x3cbded43efdaf0fc77b9c55f6fc9988fcc9b757d", "0x3e37627deaa754090fbfbb8bd226c1ce66d255e9", "0x07687e702b410fa43f4cb4af7fa097918ffd2730", "0x3cffd56b47b7b41c56258d9c7731abadc360e073", "0x9c2bc757b66f24d60f016b6237f8cdd414a879fa", "0x797d7ae72ebddcdea2a346c1834e04d1f8df102b", "0x9ad122c22b14202b4490edaf288fdb3c7cb3ff5e", "0xb541fc07bc7619fd4062a54d96268525cbc6ffef", "0xb1c8094b234dce6e03f10a5b673c1d8c69739a00", "0x94a1b5cdb22c43faab4abeb5c74999895464ddaf", "0x098b716b8aaf21512996dc57eb0615e2383e2f96", "0x43fa21d92141ba9db43052492e0deee5aa5f0a93", "0xfd8610d20aa15b7b2e3be39b396a1bc3516c7144", "0x35fb6f6db4fb05e6a4ce86f2c93691425626d4b1", "0xed6e0a7e4ac94d976eebfb82ccf777a3c6bad921", "0xb6f5ec1a0a9cd1526536d3f0426c429529471f40", "0x178169b423a011fff22b9e3f3abea13414ddd0f1", "0xf60dd140cff0706bae9cd734ac3ae76ad9ebc32a", "0xd4b88df4d29f5cedd6857912842cff3b20c8cfa3", "0xa7e5d5a720f06526557c513402f2e6b5fa20b008", "0x7ff9cfad3877f21d41da833e2f775db0569ee3d9", "0x4f47bc496083c727c5fbe3ce9cdf2b0f6496270c", "0x9f4cda013e354b8fc285bf4b9a60460cee7f7ea9", "0x527653ea119f3e6a1f5bd18fbf4714081d7b31ce", "0x905b63fff465b9ffbf41dea908ceb12478ec7601", "0x03893a7c7463ae47d46bc7f091665f1893656003", "0xd90e2f925da726b50c4ed8d0fb90ad053324f31b", "0xa160cdab225685da1d56aa342ad8841c3b53f291", "0x08723392ed15743cc38513c4925f5e6be5c17243", "0x47ce0c6ed5b0ce3d3a51fdb1c52dc66a7c3c2936", "0x910cbd523d972eb0a6f4cae4618ad62622b39dbf", "0xca0840578f57fe71599d29375e16783424023357", "0xc2a3829f459b3edd87791c74cd45402ba0a20be3", "0x58e8dcc13be9780fc42e8723d8ead4cf46943df2", "0xfac583c0cf07ea434052c49115a4682172ab6b4f", "0xfec8a60023265364d066a1212fde3930f6ae8da7", "0xa60c772958a3ed56c1f15dd055ba37ac8e523a0d", "0xdd4c48c0b24039969fc16d1cdf626eab821d3384", "0xd882cfc20f52f2599d84b8e8d58c7fb62cfe344b", "0x7f367cc41522ce07553e823bf3be79a889debe1b", "0x530a64c0ce595026a4a556b703644228179e2d57", "0x961c5be54a2ffc17cf4cb021d863c42dacd47fc1", "0x5f48c2a71b2cc96e3f0ccae4e39318ff0dc375b2", "0xdcbeffbecce100cce9e4b153c4e15cb885643193", "0x39d908dac893cbcb53cc86e0ecc369aa4def1a29"],
	$f = ({
		children: n
	}) => {
		const {
			features: {
				Geoblock: t
			}
		} = Te(), s = kd(), [r, o] = c.useState(!0);
		return c.useEffect(() => {
			s.countryCode && t.banned.includes(s.countryCode) && o(!1)
		}, [s.countryCode]), r ? e.jsx(e.Fragment, {
			children: n
		}) : e.jsxs("div", {
			children: ["the country-code ", s.countryCode, " has been geoblocked by this deployment"]
		})
	};

function ro() {
	return e.jsxs("div", {
		className: "flex gap-8 grow flex-col items-center align-center justify-center w-full h-full",
		children: [e.jsxs("div", {
			className: "text-white text-xl",
			children: ["An error has been occurred, sorry!. ", e.jsx("a", {
				href: ".",
				children: "Click here to refresh your page"
			})]
		}), e.jsx("a", {
			className: "text-white",
			href: "https://support.gfx.xyz/t/oku-trade",
			children: "If you continue to get this error, click here to file a ticket"
		})]
	})
}
const Hf = n => {
		var f;
		let t = ve[1];
		if ((f = window.ethereum) != null && f.networkVersion) {
			const p = ve[window.ethereum.networkVersion];
			p && (t = p)
		}
		const s = `/${t.internalName}/pool/${t.defaultPool}`,
			r = [{
				path: "order",
				id: "order",
				handle: {
					base: "order"
				},
				element: e.jsx(gp, {})
			}, {
				path: "pool",
				handle: {
					base: "pool"
				},
				loader: async ({
					params: p,
					request: x
				}) => {
					const {
						currentChainInfo: h
					} = sn(n, {
						params: p,
						request: x
					});
					return p.poolAddress ? ot(p.poolAddress) ? null : lt(`/${p.chain}/404`) : lt(`/${p.chain}/pool/${h.defaultPool+new URL(x.url).search}`)
				},
				children: [{
					id: "pool",
					path: ":poolAddress",
					element: e.jsx(Qm, {})
				}]
			}, {
				path: "liquidity",
				handle: {
					base: "liquidity"
				},
				loader: async ({
					params: p,
					request: x
				}) => {
					const {
						currentChainInfo: h
					} = sn(n, {
						params: p,
						request: x
					});
					return p.poolAddress ? ot(p.poolAddress) ? null : lt(`/${p.chain}/404`) : lt(`/${p.chain}/liquidity/${h.defaultPool+new URL(x.url).search}`)
				},
				children: [{
					id: "liquidity",
					path: ":poolAddress/:token_id?",
					element: e.jsx(lp, {})
				}]
			}, {
				path: "swap",
				handle: {
					base: "swap"
				},
				loader: async ({
					params: p,
					request: x
				}) => {
					const {
						currentChainInfo: h
					} = sn(n, {
						params: p,
						request: x
					});
					return !p.token0 || !p.token1 ? lt(`/${p.chain}/swap/${h.defaultToken0}/${h.defaultToken1+new URL(x.url).search}`) : !ot(p.token0) || !ot(p.token1) ? lt(`/${p.chain}/404`) : null
				},
				children: [{
					id: "swap",
					path: ":token0/:token1",
					element: e.jsx(Df, {})
				}]
			}],
			o = e.jsx(ro, {}),
			a = pl(fl),
			i = () => {
				const {
					isConnected: p,
					address: x
				} = we(), h = x, y = x && Bf.some(g => g.toLowerCase() === h.toLowerCase()), b = p ? !y : !0;
				return e.jsx($f, {
					children: b && e.jsx(as, {})
				})
			},
			l = [{
				path: "auth",
				element: e.jsx(Jm, {})
			}, {
				path: "404",
				element: e.jsx(Un, {})
			}, {
				errorElement: e.jsx(ur, {
					fallback: o,
					showDialog: !0
				}),
				id: "app",
				element: e.jsx(i, {}),
				loader: async ({
					params: p,
					request: x
				}) => {
					if (!p.chain) return lt(s + new URL(x.url).search);
					const {
						currentChainInfo: h
					} = sn(n, {
						params: p,
						request: x
					}), y = new URL(x.url);
					return pr("/:chain", y.pathname) ? lt(`/${p.chain}/pool/${h.defaultPool+new URL(x.url).search}`) : null
				},
				children: [{
					path: "*",
					element: e.jsx(Un, {}),
					loader: async ({
						request: p
					}) => pr("/", new URL(p.url).pathname) ? lt(s + new URL(p.url).search) : null
				}, {
					path: ":chain",
					id: "chain",
					loader: async ({
						params: p
					}) => sn(n, {
						params: p
					}),
					element: e.jsx(kc, {
						children: e.jsxs(ur, {
							fallback: ro,
							children: [e.jsx(Uf, {}), e.jsx(dd, {}), e.jsx(ad, {}), e.jsx(as, {})]
						})
					}),
					children: [{
						path: "*",
						element: e.jsx(Un, {})
					}, {
						path: "",
						loader: async ({
							request: p
						}) => lt("./pool" + new URL(p.url).search),
						element: e.jsx(Un, {})
					}, {
						id: "pages",
						children: r
					}]
				}]
			}],
			d = new ul({});
		return a([{
			id: "parent",
			element: e.jsx(ml, {
				client: d,
				children: e.jsxs(Ad, {
					children: [e.jsx(ip, {}), e.jsx(as, {})]
				})
			}),
			loader: async ({
				params: p
			}) => sn(n, {
				params: p
			}),
			children: l
		}], {
			basename: "/app",
			future: {
				v7_relativeSplatPath: !0
			}
		})
	},
	Vf = () => {
		const {
			features: n
		} = Te(), [t] = c.useState(new Ro(n.ChainRpc.omni, n.ChainRpc.protocols)), s = Hf(t);
		return e.jsx(dl, {
			router: s
		})
	};
xl({
	autoSessionTracking: !0,
	dsn: "https://57140c8c19d9a483579aace53fe3ea17@sentry.gfx.cafe/2",
	beforeSend: n => window.navigator.userAgent.toLowerCase().indexOf("prerender") !== -1 ? null : n,
	release: `v0.2.19
`,
	environment: "production",
	integrations: [new hl({
		tracePropagationTargets: ["localhost", "/^https://*.gfx.town/*", "/^https://*.apiary.software/*"],
		routingInstrumentation: yl(Ds.useEffect, Kt, _l, vl, jl)
	}), new gl],
	tracesSampleRate: .5,
	replaysSessionSampleRate: .5,
	replaysOnErrorSampleRate: 1
});
bl.createRoot(document.getElementById("root")).render(e.jsx(Ds.StrictMode, {
	children: e.jsx(wl, {
		children: e.jsx(Vf, {})
	})
}));

function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = []
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main-8nPWMDDh.js.map