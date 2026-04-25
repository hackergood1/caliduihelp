import type { APIRoute } from 'astro';
import { signToken } from '../../lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
	const { password } = await request.json();
	if (password === process.env.ADMIN_PASSWORD) {
		const token = signToken(process.env.ADMIN_PASSWORD!);
		cookies.set('admin_auth', token, {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 8,
		});
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	}
	await new Promise(r => setTimeout(r, 600));
	return new Response(JSON.stringify({ error: 'Wrong password.' }), { status: 401 });
};
