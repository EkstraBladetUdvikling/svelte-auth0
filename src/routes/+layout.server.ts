// We need to retrieve the user in the session cookie
import { COOKIE_NAME } from '$env/static/private';

// in the load function
export async function load({ cookies, locals, url }) {
	const user = locals.user;
	const token = cookies.get(COOKIE_NAME);

	if (!user) {
		return {
			status: 302,
			headers: {
				location: `/api/auth/login?returnUrl=${url.pathname}`
			}
		};
	}

	locals.user = user;
	locals.token = token ?? null;

	return {
		user: user,
		token: token
	};
}
