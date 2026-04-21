import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
	const { password } = await request.json();
	if (password === import.meta.env.ADMIN_PASSWORD) {
		cookies.set('admin_auth', password, {
			path: '/',
			httpOnly: true,
			secure: true,
			maxAge: 60 * 60 * 8,
		});
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	}
	return new Response(JSON.stringify({ error: 'Wrong password.' }), { status: 401 });
};
