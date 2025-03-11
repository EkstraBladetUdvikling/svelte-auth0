import { getToken, setAuthCookie, verifyToken } from '$lib/auth/auth0';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, cookies }) => {
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');
	let returnUrl = url.searchParams.get('returnUrl') || '/';

	if (returnUrl.includes('/__data.json')) {
		returnUrl = returnUrl.replace('/__data.json', '');
	}

	const csrfState = cookies.get('csrfState');

	if (state !== csrfState || !code) {
		return new Response('Invalid state', { status: 403 });
	}

	try {
		const token = await getToken({ code });

		const authUser = await verifyToken(token.id_token);

		setAuthCookie(cookies, authUser);
		cookies.delete('csrfState', { path: '/' });

		return new Response(null, {
			status: 302,
			headers: { location: returnUrl }
		});
	} catch (err) {
		return new Response(`Failed to get token. Err: ${err}`, { status: 500 });
	}
};
