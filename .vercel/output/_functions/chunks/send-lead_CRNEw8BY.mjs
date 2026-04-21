import { g as getPool } from './db_CoOb4YoN.mjs';

const POST = async ({ request, cookies }) => {
  const auth = cookies.get("admin_auth");
  if (auth?.value !== undefined                              ) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  try {
    const { lead_id, lawyer_email, notes } = await request.json();
    if (!lead_id || !lawyer_email) {
      return new Response(JSON.stringify({ error: "Missing lead_id or lawyer_email." }), { status: 400 });
    }
    const pool = getPool();
    await pool.query(
      `UPDATE leads SET assigned_lawyer = $1, status = 'sent', notes = $2 WHERE id = $3`,
      [lawyer_email, notes || null, lead_id]
    );
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Send lead error:", err);
    return new Response(JSON.stringify({ error: "Server error." }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
