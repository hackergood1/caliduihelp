const POST = async ({ request, cookies }) => {
  const { password } = await request.json();
  if (password === undefined                              ) {
    cookies.set("admin_auth", password, {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 8
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
  return new Response(JSON.stringify({ error: "Wrong password." }), { status: 401 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
