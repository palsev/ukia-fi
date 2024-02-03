window.ConfigJsStaticOptions = {
  Chat: { enabled: "false", url: "wss://chat.apiary.software" },
  Login: {
    url: "https://login.oku.trade",
    app_id: "7OfZGYJMyygFQwnTYwZtWp3aUh1cbhfn",
    path_prefix: "/app",
  },
  Whitelist: { enabled: "false" },
  Swap: { enabled: "true" },
  ChainRpc: {
    omni: "wss://omni.oku.zone/",
    protocols: ["wss", "https"],
  },
  Telemetry: {
    enabled: "true",
    url: "https://telemetry.apiary.software",
    multibase_key: "88e5b8a6-ac60-44b1-bcc3-0f8f5a249313",
  },
  Geoblock: {
    provider: "https://geoip.gfx-workers.workers.dev",
    banned: ["CU", "IR", "KP", "RU", "SY"],
  },
  Analytics: {
    enabled: "true",
    url: "/info",
  },
  Logging: {
    level: "warn",
  },
  Chains: {
    hidden: ["goerli", "base", "filecoin", "polygon-zkevm", "manta"],
    featured: [],
    comingsoon: [],
  },
};
