import { c as createComponent } from './astro-component_DjnNbSz_.mjs';
import 'piccolore';
import { r as renderHead, b as renderTemplate, c as renderComponent, F as Fragment, d as addAttribute } from './entrypoint_BksuO6pR.mjs';
import { r as renderScript } from './script_BMd3UiEB.mjs';
import { i as initDB, g as getPool } from './db_CoOb4YoN.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const adminPassword = undefined                              ;
  const authCookie = Astro2.cookies.get("admin_auth");
  const isAuthed = authCookie?.value === adminPassword;
  let leads = [];
  if (isAuthed) {
    await initDB();
    const pool = getPool();
    const result = await pool.query("SELECT * FROM leads ORDER BY created_at DESC");
    leads = result.rows;
  }
  return renderTemplate`<html lang="en" data-astro-cid-u2h3djql> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Admin — CaliDUIHelp Leads</title>${renderHead()}</head> <body data-astro-cid-u2h3djql> ${!isAuthed ? renderTemplate`<div class="login-wrap" data-astro-cid-u2h3djql> <h1 data-astro-cid-u2h3djql>Admin Login</h1> <input type="password" id="pw-input" placeholder="Enter admin password" data-astro-cid-u2h3djql> <button id="login-btn" data-astro-cid-u2h3djql>Log In</button> <p id="login-error" data-astro-cid-u2h3djql>Wrong password. Try again.</p> </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-u2h3djql": true }, { "default": async ($$result2) => renderTemplate` <header data-astro-cid-u2h3djql> <h1 data-astro-cid-u2h3djql>CaliDUIHelp — Leads Dashboard</h1> <span data-astro-cid-u2h3djql>${leads.length} total submissions</span> </header> <div class="container" data-astro-cid-u2h3djql> <div class="stats" data-astro-cid-u2h3djql> <div class="stat-card" data-astro-cid-u2h3djql> <div class="num" data-astro-cid-u2h3djql>${leads.length}</div> <div class="label" data-astro-cid-u2h3djql>Total Leads</div> </div> <div class="stat-card" data-astro-cid-u2h3djql> <div class="num" data-astro-cid-u2h3djql>${leads.filter((l) => l.status === "new").length}</div> <div class="label" data-astro-cid-u2h3djql>New</div> </div> <div class="stat-card" data-astro-cid-u2h3djql> <div class="num" data-astro-cid-u2h3djql>${leads.filter((l) => l.status === "sent").length}</div> <div class="label" data-astro-cid-u2h3djql>Sent to Lawyer</div> </div> </div> <table data-astro-cid-u2h3djql> <thead data-astro-cid-u2h3djql> <tr data-astro-cid-u2h3djql> <th data-astro-cid-u2h3djql>#</th> <th data-astro-cid-u2h3djql>Name</th> <th data-astro-cid-u2h3djql>Contact</th> <th data-astro-cid-u2h3djql>ZIP</th> <th data-astro-cid-u2h3djql>Situation</th> <th data-astro-cid-u2h3djql>Date</th> <th data-astro-cid-u2h3djql>Status</th> <th data-astro-cid-u2h3djql>Send to Lawyer</th> </tr> </thead> <tbody data-astro-cid-u2h3djql> ${leads.map((lead) => renderTemplate`<tr data-astro-cid-u2h3djql> <td data-astro-cid-u2h3djql>${lead.id}</td> <td data-astro-cid-u2h3djql><strong data-astro-cid-u2h3djql>${lead.full_name}</strong>${lead.description ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-u2h3djql": true }, { "default": async ($$result3) => renderTemplate`<br data-astro-cid-u2h3djql><small style="color:#888" data-astro-cid-u2h3djql>${lead.description.slice(0, 60)}${lead.description.length > 60 ? "…" : ""}</small>` })}` : null}</td> <td data-astro-cid-u2h3djql>${lead.email && renderTemplate`<div data-astro-cid-u2h3djql>${lead.email}</div>`}${lead.phone && renderTemplate`<div data-astro-cid-u2h3djql>${lead.phone}</div>`}</td> <td data-astro-cid-u2h3djql>${lead.zip_code}</td> <td data-astro-cid-u2h3djql>${lead.incident_type}</td> <td style="white-space:nowrap" data-astro-cid-u2h3djql>${lead.incident_date ? new Date(lead.incident_date).toLocaleDateString() : "—"}<br data-astro-cid-u2h3djql><small style="color:#aaa" data-astro-cid-u2h3djql>${new Date(lead.created_at).toLocaleDateString()}</small></td> <td data-astro-cid-u2h3djql><span${addAttribute(`badge ${lead.status === "sent" ? "badge-sent" : "badge-new"}`, "class")} data-astro-cid-u2h3djql>${lead.status}</span>${lead.assigned_lawyer && renderTemplate`<div style="font-size:0.78em;color:#666;margin-top:0.3em" data-astro-cid-u2h3djql>${lead.assigned_lawyer}</div>`}</td> <td data-astro-cid-u2h3djql> ${lead.status === "sent" ? renderTemplate`<span class="sent-label" data-astro-cid-u2h3djql>✓ Sent</span>` : renderTemplate`<div class="send-form"${addAttribute(lead.id, "data-id")} data-astro-cid-u2h3djql> <input type="email" placeholder="Lawyer email" data-astro-cid-u2h3djql> <button data-astro-cid-u2h3djql>Send</button> </div>`} </td> </tr>`)} </tbody> </table> </div> ` })}`} ${renderScript($$result, "/home/o-o/caliduihelp/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/o-o/caliduihelp/src/pages/admin/index.astro", void 0);
const $$file = "/home/o-o/caliduihelp/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
