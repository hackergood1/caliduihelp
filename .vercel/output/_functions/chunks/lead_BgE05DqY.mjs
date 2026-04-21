import { i as initDB, g as getPool } from './db_CoOb4YoN.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { full_name, email, phone, zip_code, incident_type, incident_date, description, consent_checked } = data;
    if (!full_name || !zip_code || !incident_type) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }
    if (!consent_checked) {
      return new Response(JSON.stringify({ error: "Consent is required." }), { status: 400 });
    }
    await initDB();
    const pool = getPool();
    await pool.query(
      `INSERT INTO leads (full_name, email, phone, zip_code, incident_type, incident_date, description, consent_checked)
			 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [full_name, email || null, phone || null, zip_code, incident_type, incident_date || null, description || null, true]
    );
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Lead submission error:", err);
    return new Response(JSON.stringify({ error: "Server error. Please try again." }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
