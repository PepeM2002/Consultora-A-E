var l="@vercel/speed-insights",f="1.0.10",v=()=>{window.si||(window.si=function(...n){(window.siq=window.siq||[]).push(n)})};function w(){return typeof window<"u"}function p(){try{const e="production"}catch{}return"production"}function c(){return p()==="development"}function m(e,n){if(!e||!n)return e;let r=e;try{for(const[s,i]of Object.entries(n)){const t=Array.isArray(i),o=t?i.join("/"):i,u=t?`...${s}`:s,a=new RegExp(`/${S(o)}(?=[/?#]|$)`);a.test(r)&&(r=r.replace(a,`/[${u}]`))}return r}catch{return e}}function S(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var d="https://va.vercel-scripts.com/v1/speed-insights",h=`${d}/script.js`,g=`${d}/script.debug.js`,R="/_vercel/speed-insights/script.js";function y(e={}){var n;if(!w()||e.route===null)return null;v();const s=!!e.dsn?h:R,i=e.scriptSrc||(c()?g:s);if(document.head.querySelector(`script[src*="${i}"]`))return null;e.beforeSend&&((n=window.si)==null||n.call(window,"beforeSend",e.beforeSend));const t=document.createElement("script");return t.src=i,t.defer=!0,t.dataset.sdkn=l+(e.framework?`/${e.framework}`:""),t.dataset.sdkv=f,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),c()&&e.debug===!1&&(t.dataset.debug="false"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:o=>{t.dataset.route=o??void 0}}}customElements.define("vercel-speed-insights",class extends HTMLElement{constructor(){super();try{const n=JSON.parse(this.dataset.props??"{}"),r=JSON.parse(this.dataset.params??"{}"),s=m(this.dataset.pathname??"",r);y({route:s,...n,framework:"astro",beforeSend:window.speedInsightsBeforeSend})}catch(n){throw new Error(`Failed to parse SpeedInsights properties: ${n}`)}}});