import type { APIRoute } from 'astro';
import { getSQL } from '../../lib/db';

export const POST: APIRoute = async ({ request, cookies }) => {
	const auth = cookies.get('admin_auth');
	if (auth?.value !== process.env.ADMIN_PASSWORD) {
		return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
	}

	try {
		const { lead_id, lawyer_email, notes } = await request.json();
		if (!lead_id || !lawyer_email) {
			return new Response(JSON.stringify({ error: 'Missing lead_id or lawyer_email.' }), { status: 400 });
		}

		const sql = getSQL();
		await sql`
			UPDATE leads SET assigned_lawyer = ${lawyer_email}, status = 'sent', notes = ${notes || null}
			WHERE id = ${lead_id}
		`;

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err) {
		console.error('Send lead error:', err);
		return new Response(JSON.stringify({ error: 'Server error.' }), { status: 500 });
	}
};
