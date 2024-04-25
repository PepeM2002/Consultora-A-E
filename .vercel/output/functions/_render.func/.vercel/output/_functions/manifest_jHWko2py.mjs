import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import './chunks/astro_CNGG5TA2.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ16IHOX.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/aboutus","isIndex":false,"type":"page","pattern":"^\\/AboutUs\\/?$","segments":[[{"content":"AboutUs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/AboutUs.astro","pathname":"/AboutUs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/callback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/callback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/callback.ts","pathname":"/api/auth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DpWmVLSz.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n.carta-img[data-astro-cid-pnigicq7]{height:180px}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CS1hBN4O.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BSKBp2mD.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/educacion","isIndex":false,"type":"page","pattern":"^\\/educacion\\/?$","segments":[[{"content":"educacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/educacion.astro","pathname":"/educacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DrDFRbNL.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/experiencias","isIndex":false,"type":"page","pattern":"^\\/experiencias\\/?$","segments":[[{"content":"experiencias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experiencias.astro","pathname":"/experiencias","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CFrbHAu-.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:12px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-color:#0f172a}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/pagehome","isIndex":false,"type":"page","pattern":"^\\/pagehome\\/?$","segments":[[{"content":"pagehome","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pagehome.astro","pathname":"/pagehome","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CS1hBN4O.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DJ16IHOX.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CS1hBN4O.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.q_1Ghj9T.js"}],"styles":[{"type":"external","src":"/_astro/AboutUs.Cd1xLGKM.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgb(246, 145, 22) 60% )}html{margin:auto;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;background-size:220px}body{background-size:cover;background-position:center;background-repeat:no-repeat;background-image:linear-gradient(to bottom,#040622,#020a2bd3),url(https://gerens.pe/blog/wp-content/uploads/2015/12/consultora-organizacional.jpg)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}\n@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}.logos{overflow:hidden;padding:50px 0;background:#61606b48;white-space:nowrap;position:relative}.logos:before,.logos:after{position:absolute;top:0;width:250px;height:100%;content:\"\";z-index:2}.logos:before{left:0;background:linear-gradient(to left,#fff0,#22171769)}.logos:after{right:0;background:linear-gradient(to right,#fff0,#342b2b3b)}.logos:hover .logos-slide{animation-play-state:paused}.logos-slide{animation:15s slide infinite linear}.logos-slide img{height:80px;margin:0 40px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/josev/Consultora/src/pages/AboutUs.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/educacion.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/experiencias.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/register.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/servicios.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/signin.astro",{"propagation":"none","containsHead":true}],["C:/Users/josev/Consultora/src/pages/pagehome.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/dashboard.astro":"chunks/pages/dashboard_v4lyzSSF.mjs","/src/pages/educacion.astro":"chunks/pages/educacion_BzRZAX4M.mjs","/src/pages/experiencias.astro":"chunks/pages/experiencias_DxoOISZE.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CBHsgi-M.mjs","/src/pages/pagehome.astro":"chunks/pages/pagehome_CzXuyMKF.mjs","/src/pages/register.astro":"chunks/pages/register_B7gz2Yxa.mjs","/src/pages/api/auth/register.ts":"chunks/pages/register_DvWsCmlH.mjs","/src/pages/servicios.astro":"chunks/pages/servicios_BIKFiqF0.mjs","/src/pages/signin.astro":"chunks/pages/signin_Ca3mk4P2.mjs","/src/pages/api/auth/signin.ts":"chunks/pages/signin_2vr6qeKv.mjs","/src/pages/api/auth/signout.ts":"chunks/pages/signout_C07o5eXY.mjs","\u0000@astrojs-manifest":"manifest_jHWko2py.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_C6AS9L18.mjs","\u0000@astro-page:src/pages/AboutUs@_@astro":"chunks/AboutUs_2Nqc6XGz.mjs","\u0000@astro-page:src/pages/api/auth/callback@_@ts":"chunks/callback_VU1-BPV2.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"chunks/register_B7Zl2EFK.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"chunks/signin_CCGSr-Iu.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"chunks/signout_D1EHihRN.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_DN4AnDPf.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"chunks/dashboard_CDxRl0DF.mjs","\u0000@astro-page:src/pages/educacion@_@astro":"chunks/educacion_ddEx0LE3.mjs","\u0000@astro-page:src/pages/experiencias@_@astro":"chunks/experiencias_D3NKIzDD.mjs","\u0000@astro-page:src/pages/pagehome@_@astro":"chunks/pagehome_CfQchOgi.mjs","\u0000@astro-page:src/pages/register@_@astro":"chunks/register_CrAJcU6v.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"chunks/servicios_DV2TP38K.mjs","\u0000@astro-page:src/pages/signin@_@astro":"chunks/signin_Dqgr4TzY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DmxQKB3_.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DJ16IHOX.js","/astro/hoisted.js?q=2":"_astro/hoisted.CS1hBN4O.js","/astro/hoisted.js?q=5":"_astro/hoisted.q_1Ghj9T.js","/astro/hoisted.js?q=6":"_astro/hoisted.CFrbHAu-.js","/astro/hoisted.js?q=1":"_astro/hoisted.DpWmVLSz.js","/astro/hoisted.js?q=4":"_astro/hoisted.DrDFRbNL.js","/astro/hoisted.js?q=3":"_astro/hoisted.BSKBp2mD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/AboutUs.Cd1xLGKM.css","/adr.png","/AUDIO.mp4","/B-1.webp","/cursos.jpg","/D-1.webp","/D-2.webp","/D-3.webp","/D-4.webp","/D-5.webp","/D1.pdf","/D2.pdf","/D3.pdf","/D4.pdf","/Di-1.webp","/Di-2.webp","/Di-3.webp","/Di-4.webp","/E-1.webp","/E-2.webp","/Ex-1.webp","/Ex-2.webp","/Ex-3.webp","/Ex-4.webp","/Ex-5.webp","/Ex-6.webp","/Ex-7.webp","/Ex-8.webp","/Ex-9.webp","/hotelesbf.svg","/icon.gif","/image1.webp","/log.webp","/logo-2.svg","/Logo-3.svg","/logo-4.svg","/logo-5.svg","/logo-6.svg","/logo-7.svg","/logo-8.svg","/logo-9.svg","/logo.png","/logo.webp","/S-1.webp","/S-2.webp","/S-3.webp","/service.webp","/_astro/hoisted.BSKBp2mD.js","/_astro/hoisted.CFrbHAu-.js","/_astro/hoisted.CS1hBN4O.js","/_astro/hoisted.DJ16IHOX.js","/_astro/hoisted.DpWmVLSz.js","/_astro/hoisted.DrDFRbNL.js","/_astro/hoisted.q_1Ghj9T.js","/_astro/index.astro_astro_type_script_index_0_lang.CQysFmpR.js","/_astro/responsive.Bhmdks_h.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
