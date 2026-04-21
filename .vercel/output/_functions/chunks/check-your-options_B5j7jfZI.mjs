import { c as createComponent } from './astro-component_DjnNbSz_.mjs';
import 'piccolore';
import { b as renderTemplate, d as addAttribute, c as renderComponent, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, r as renderHead } from './entrypoint_BksuO6pR.mjs';
import { r as renderScript } from './script_BMd3UiEB.mjs';
import { $ as $$Font } from './_astro_assets_CvxTCeW9.mjs';
import 'clsx';

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/o-o/caliduihelp/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const SITE_TITLE = "What Happens If You Get a DUI in California?";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = FallbackImage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Google AdSense --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5518025301131848" crossorigin="anonymous"><\/script> <!-- Geo targeting --><meta name="geo.region" content="US-CA"><meta name="geo.placename" content="California"><meta name="language" content="en-US"><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"', "", '><meta name="generator"', ">", '<!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">"])), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-atkinson", "preload": true }), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"));
}, "/home/o-o/caliduihelp/src/components/BaseHead.astro", void 0);

const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/o-o/caliduihelp/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>${SITE_TITLE}</a></h2> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`About` })} <a href="/check-your-options" class="cta-button" data-astro-cid-3ef6ksr2>Check your options in your area</a> </div> <div class="social-links" data-astro-cid-3ef6ksr2> <a href="https://m.webtoo.ls/@astro" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Follow Astro on Mastodon</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" data-astro-cid-3ef6ksr2></path></svg> </a> <a href="https://twitter.com/astrodotbuild" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Follow Astro on Twitter</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" data-astro-cid-3ef6ksr2></path></svg> </a> <a href="https://github.com/withastro/astro" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Go to Astro's GitHub repo</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-3ef6ksr2></path></svg> </a> </div> </nav> </header>`;
}, "/home/o-o/caliduihelp/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} CaliDUIHelp.com — General information only, not legal advice.
<br data-astro-cid-sz7xmlte> <a href="/privacy" style="color: inherit; text-decoration: underline; font-size: 0.85em;" data-astro-cid-sz7xmlte>Privacy Policy</a> </footer>`;
}, "/home/o-o/caliduihelp/src/components/Footer.astro", void 0);

const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner" data-astro-cid-fzbxxtek> <p data-astro-cid-fzbxxtek>
This site uses cookies to serve ads via Google AdSense. By continuing to use this site you accept our
<a href="/privacy" data-astro-cid-fzbxxtek>Privacy Policy</a>.
</p> <button id="cookie-accept" data-astro-cid-fzbxxtek>Got it</button> </div>  ${renderScript($$result, "/home/o-o/caliduihelp/src/components/CookieBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/o-o/caliduihelp/src/components/CookieBanner.astro", void 0);

const $$CheckYourOptions = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-aar36gx7> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Check Your Options — California DUI Help", "description": "Find out what options are still available after a California DUI. Fill out the form to get connected with a legal professional in your area.", "data-astro-cid-aar36gx7": true })}${renderHead()}</head> <body data-astro-cid-aar36gx7> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-aar36gx7": true })} <main data-astro-cid-aar36gx7> <h1 data-astro-cid-aar36gx7>Check Your Options in Your Area</h1> <p class="intro" data-astro-cid-aar36gx7>Fill out the form below and we'll help connect you with a legal professional in your area who can review your situation. It takes less than 2 minutes.</p> <div class="disclaimer-box" data-astro-cid-aar36gx7> <strong data-astro-cid-aar36gx7>Important:</strong> We are not a law firm and do not provide legal advice. This page is designed to help connect you with independent attorneys or legal professionals in your area based on the information you provide.
</div> <div class="data-notice" data-astro-cid-aar36gx7> <strong data-astro-cid-aar36gx7>How your information is used:</strong> By submitting this form, you understand that the information you provide may be shared with attorneys or legal professionals in your area so they can review your situation and contact you if appropriate. We do not guarantee representation or outcomes.
</div> <form id="lead-form" data-astro-cid-aar36gx7> <div class="form-group" data-astro-cid-aar36gx7> <label for="full_name" data-astro-cid-aar36gx7>Full Name</label> <input type="text" id="full_name" name="full_name" required placeholder="Your full name" data-astro-cid-aar36gx7> </div> <div class="form-group" data-astro-cid-aar36gx7> <label for="email" data-astro-cid-aar36gx7>Email Address</label> <input type="email" id="email" name="email" placeholder="your@email.com" data-astro-cid-aar36gx7> </div> <div class="form-group" data-astro-cid-aar36gx7> <label for="phone" data-astro-cid-aar36gx7>Phone Number</label> <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" data-astro-cid-aar36gx7> </div> <div class="form-group" data-astro-cid-aar36gx7> <label for="zip_code" data-astro-cid-aar36gx7>ZIP Code</label> <input type="text" id="zip_code" name="zip_code" required placeholder="e.g. 90210" maxlength="10" data-astro-cid-aar36gx7> </div> <div class="form-group" data-astro-cid-aar36gx7> <label for="incident_type" data-astro-cid-aar36gx7>Your Situation</label> <select id="incident_type" name="incident_type" required data-astro-cid-aar36gx7> <option value="" disabled selected data-astro-cid-aar36gx7>Select your situation</option> <option value="First DUI" data-astro-cid-aar36gx7>First DUI</option> <option value="Second or subsequent DUI" data-astro-cid-aar36gx7>Second or subsequent DUI</option> <option value="DUI with injury or accident" data-astro-cid-aar36gx7>DUI with injury or accident</option> <option value="Refusal to test" data-astro-cid-aar36gx7>Refusal to test</option> <option value="Under 21 DUI" data-astro-cid-aar36gx7>Under 21 DUI</option> <option value="DMV hearing only" data-astro-cid-aar36gx7>DMV hearing only</option> <option value="Other" data-astro-cid-aar36gx7>Other</option> </select> </div> <div class="form-group" data-astro-cid-aar36gx7> <label for="incident_date" data-astro-cid-aar36gx7>Date of Incident <span class="optional" data-astro-cid-aar36gx7>(optional)</span></label> <input type="date" id="incident_date" name="incident_date" data-astro-cid-aar36gx7> </div> <div class="form-group" data-astro-cid-aar36gx7> <label for="description" data-astro-cid-aar36gx7>Brief Description <span class="optional" data-astro-cid-aar36gx7>(optional)</span></label> <textarea id="description" name="description" placeholder="Anything else you'd like us to know about your situation..." data-astro-cid-aar36gx7></textarea> </div> <div class="consent-row" data-astro-cid-aar36gx7> <input type="checkbox" id="consent" name="consent" required data-astro-cid-aar36gx7> <label for="consent" data-astro-cid-aar36gx7>I understand that this website is not a law firm, and I agree that my information may be shared with legal professionals in my area who may contact me regarding my situation.</label> </div> <p class="secure-note" data-astro-cid-aar36gx7>🔒 Your information is kept secure and only used to help connect you with relevant legal professionals.</p> <button type="submit" class="submit-btn" id="submit-btn" data-astro-cid-aar36gx7>Check My Options</button> <div id="error-message" data-astro-cid-aar36gx7></div> </form> <div id="success-message" data-astro-cid-aar36gx7> <strong data-astro-cid-aar36gx7>Thank you for submitting your information.</strong><br data-astro-cid-aar36gx7><br data-astro-cid-aar36gx7>
Based on your situation, you may be contacted by a legal professional in your area. Be sure to keep your phone nearby and check your email. We'll be in touch soon.
</div> </main> ${renderComponent($$result, "CookieBanner", $$CookieBanner, { "data-astro-cid-aar36gx7": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-aar36gx7": true })} ${renderScript($$result, "/home/o-o/caliduihelp/src/pages/check-your-options.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/o-o/caliduihelp/src/pages/check-your-options.astro", void 0);

const $$file = "/home/o-o/caliduihelp/src/pages/check-your-options.astro";
const $$url = "/check-your-options";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CheckYourOptions,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
