import type { APIRoute } from 'astro';
import { getSQL, initDB } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json();
		const { full_name, email, phone, zip_code, incident_type, incident_date, description, consent_checked } = data;

		if (!full_name || !zip_code || !incident_type) {
			return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
		}
		if (!consent_checked) {
			return new Response(JSON.stringify({ error: 'Consent is required.' }), { status: 400 });
		}

		await initDB();
		const sql = getSQL();

		await sql`
			INSERT INTO leads (full_name, email, phone, zip_code, incident_type, incident_date, description, consent_checked)
			VALUES (
				${full_name},
				${email || null},
				${phone || null},
				${zip_code},
				${incident_type},
				${incident_date || null},
				${description || null},
				${true}
			)
		`;

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err) {
		console.error('Lead submission error:', err);
		return new Response(JSON.stringify({ error: 'Server error. Please try again.' }), { status: 500 });
	}
};
